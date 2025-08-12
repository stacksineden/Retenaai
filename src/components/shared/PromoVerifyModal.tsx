import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { PromoValidationSchema } from "@/lib/validation";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useVerifyCode } from "@/lib/tanstack-query/queriesAndMutation";
import Loader from "./Loader";
import { Asterisk } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "@/context/AppContext";

const PromoVerifyModal = () => {
  const { shootData } = useAppContext();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { mutateAsync: verifyCode, isPending: isVerifying } = useVerifyCode();

  const form = useForm<z.infer<typeof PromoValidationSchema>>({
    resolver: zodResolver(PromoValidationSchema),
    defaultValues: {
      code: "",
    },
  });

  const codeValue = form.watch("code");

  async function onSubmit(values: z.infer<typeof PromoValidationSchema>) {
    //users from kreatesell
    if (values.code?.startsWith("KFP")) {
      navigate(`/training?mode=${shootData?.slug}&ref=${values?.code}`);
      return;
    }
    const verifiedCode = await verifyCode(values?.code.toUpperCase() ?? "");
    if (verifiedCode instanceof Error) {
      return toast.error(verifiedCode?.message || "Invalid or expired code.");
    }
    if (verifiedCode) {
      setIsOpen(false);
      toast.success(
        `Success! Discount applied: ${verifiedCode.discountPercentage}%`
      );
      navigate(
        `/training?mode=${shootData?.slug}&ref=${verifiedCode?.code}`
      );
      form.reset();
    }
    if (!verifiedCode) {
      setIsOpen(false);
      return toast.error("Invalid or expired code.");
    }
  }

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(visible) => {
        if (!visible) {
          setIsOpen(visible);
        }
      }}
    >
      <DialogTrigger onClick={() => setIsOpen(true)} asChild>
        <div className="flex items-center gap-1">
          <p className="font-semibold text-primary-blue cursor-pointer text-base">
            Click to use Access code
          </p>
          <Asterisk className="text-red-500 h-5 w-5" />
        </div>
      </DialogTrigger>
      <DialogContent>
        <div className="w-full p-1 overflow-y-scroll flex flex-col gap-1">
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-semibold">Got an access Code?</h2>
            <p className="text-sm font-medium text-red-500">
              Enter your access code below to use this service at a discounted
              rate. The code will be verified, and if it is invalid, the process
              may be canceled. If you have any questions, please feel free to
              contact us.
            </p>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full px-1 mt-4"
            >
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Enter your promo code"
                        className="shad-input text-base"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="shad-button_primary w-full mt-5"
                disabled={!codeValue || isVerifying}
              >
                {isVerifying ? (
                  <div className="flex-center gap-2">
                    <Loader /> Submitting ...
                  </div>
                ) : (
                  "Submit"
                )}
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PromoVerifyModal;

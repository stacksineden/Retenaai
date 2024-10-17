import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { updateUserVerification } from "@/lib/appwrite/api";
import { Link, useNavigate } from "react-router-dom";

const VerifyAccount = () => {
  const navigate = useNavigate();

  const urlParams = new URLSearchParams(window.location.search);
  const secret = urlParams.get("secret");
  const userId = urlParams.get("userId");

  const handleUserVerification = async () => {
    try {
      const response = await updateUserVerification(userId!, secret!);
      if (response) {
        // console.log("Account has been verified");
        toast.success("Your Account has been successfully verified.");
        navigate("/app");
      } else {
        return toast.error("Verification failed, please try again");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-[85%] md:w-[60%] flex-center flex-col text-center">
      <Link to="/" className="w-[150px] md:w-[170px]">
        <img
          src="/assets/images/text-brand.png"
          alt="brand"
          className="w-full object-contain"
        />
      </Link>
      <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12 text-primary-black">
        Account Verification.
      </h2>
      <p className="text-primary-blue font-light small-medium md:base-regular">
        Welcome back, Please click the button below to verify your account.
      </p>
      <Button
        type="submit"
        className="shad-button_primary mt-3"
        onClick={() => handleUserVerification()}
      >
        Verify Account
      </Button>
    </div>
  );
};

export default VerifyAccount;

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IUser } from "@/types";
import {
  BrainCog,
  ChevronsDown,
  CreditCard,
  Images,
  LogOut
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useSignOutAccount } from "@/lib/tanstack-query/queriesAndMutation";
import { useAppContext } from "@/context/AppContext";

export function ProfileMenu({ user }: { user: IUser }) {
  const Navigate = useNavigate();
  const { setMobileOpen } = useAppContext();
  const { mutateAsync: signOut, isPending: isSigningOut } = useSignOutAccount();

  const handleSignOut = async () => {
    const response = await signOut();
    if (response) {
      toast.success("Logout successful!");
      Navigate("/");
    }
    if (response instanceof Error) {
      // Assuming err.message contains the API error message
      return toast.error(response?.message || "Sign out, please try again.");
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <ChevronsDown className="h-7 text-primary-black" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[200px] rounded-lg">
        <DropdownMenuLabel>
          <div className="flex flex-col">
            <h4 className="text-black text-sm font-medium">
              {user?.name ?? "-- --"}
            </h4>
            <p className="text-black text-xs">{user?.email ?? "-- --"}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <div className="flex items-center gap-1 text-primary-blue4 font-semibold">
            <CreditCard className="h-8" />
            {user?.creditBalance ?? 0}
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() =>{
          setMobileOpen(false)
          Navigate("/photo-gallery")
        } }>
          <div className="flex items-center gap-1 cursor-pointer">
            <Images className="h-8" />
            My Photos
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => {
              setMobileOpen(false)
              Navigate("/training-dataset")
            }}
          >
            <BrainCog className="h-8" />
            My Trainings
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={handleSignOut}
          >
            <LogOut className="h-8" />
            {isSigningOut ? "signing out" : "Sign out"}
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

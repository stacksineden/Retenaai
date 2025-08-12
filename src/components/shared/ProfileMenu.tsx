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
  ChevronsDown,
  LogOut,
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
      Navigate("/retenaai-academy");
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
        <DropdownMenuItem
          onClick={() => {
            setMobileOpen(false);
            Navigate("/photo-gallery");
          }}
        >
          <div className="flex items-center gap-1 cursor-pointer">
            <p className="text-xs md:text-sm text-primary-black">
              Stage:{" "}
              <span className="text-[#FCA311] font-semibold uppercase">
                {user?.stage ?? "__ __"}
              </span>
            </p>
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

import { useLocation, useNavigate } from "react-router-dom";
import { createContext, useContext, useEffect, useState } from "react";
import { IUser } from "@/types";
import { getCurrentUser } from "@/lib/appwrite/api";

export const INITIAL_USER = {
  id: "",
  name: "",
  email: "",
  imageUrl: "",
  creditBalance: 0,
};

const INITIAL_STATE = {
  user: INITIAL_USER,
  isLoading: false,
  isAuthenticated: false,
  setUser: () => {},
  setIsAuthenticated: () => {},
  checkAuthUser: async () => false as boolean,
  isEmailVerified: false as boolean,
  setIsEmailVerified: () => {},
};

type IContextType = {
  user: IUser;
  isLoading: boolean;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  checkAuthUser: () => Promise<boolean>;
  isEmailVerified: boolean;
  setIsEmailVerified: React.Dispatch<React.SetStateAction<boolean>>;
};

const AuthContext = createContext<IContextType>(INITIAL_STATE);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState<IUser>(INITIAL_USER);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(
    INITIAL_STATE.isEmailVerified
  );

  const checkAuthUser = async () => {
    try {
      const currentAccount = await getCurrentUser();
      if (!currentAccount) {
        console.log("user not found");
      }
      if (currentAccount) {
        setUser({
          id: currentAccount?.currentUser?.$id,
          name: currentAccount?.currentUser?.name,
          email: currentAccount?.currentUser?.email,
          imageUrl: currentAccount?.currentUser?.imageUrl,
          creditBalance: currentAccount?.currentUser?.creditBalance,
        });
        setIsAuthenticated(true);
        setIsEmailVerified(currentAccount?.currentAccount?.emailVerification);
        return true;
      }
      // Exclude specified pages from redirection
      const excludedPaths = [
        "/",
        "/reset-password",
        "/sign-up",
        "/sign-in",
        "/pricing",
        "/terms",
        "/showcase"
      ];
      if (!currentAccount && !excludedPaths.includes(location.pathname)) {
        navigate("/sign-in");
      }
      return false;
    } catch (err) {
      navigate("/sign-in"); 
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const cookieFallback = localStorage.getItem("cookieFallback");

    if (
      !(
        location.pathname.includes("/reset-password") ||
        location.pathname.includes("/sign-up") ||
        location.pathname.includes("/sign-in") ||
        location.pathname.includes("/pricing") ||
        location.pathname.includes("/terms") ||
        location.pathname.includes("/showcase") ||
        location.pathname === "/"
      ) &&
      (cookieFallback === "[]" ||
        cookieFallback === null ||
        cookieFallback === undefined)
    ) {
      navigate("/sign-in");
    }

    checkAuthUser();
  }, []);

  const value = {
    user,
    setUser,
    isLoading,
    isAuthenticated,
    setIsAuthenticated,
    checkAuthUser,
    isEmailVerified,
    setIsEmailVerified,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useUserContext = () => useContext(AuthContext);

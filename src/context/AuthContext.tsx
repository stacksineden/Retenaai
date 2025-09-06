import { useLocation, useNavigate } from "react-router-dom";
import { createContext, useContext, useEffect, useState } from "react";
import { IUser } from "@/types";
import { getCurrentUser } from "@/lib/appwrite/api";

export const INITIAL_USER = {
  id: "",
  name: "",
  email: "",
  imageUrl: "",
  stage: "",
  cohort: "",
  program: "",
  programId: "",
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
      console.log("Current Account:", currentAccount);
      if (!currentAccount) {
        console.log("user not found");
      }
      if (currentAccount) {
        setUser({
          id: currentAccount?.currentUser?.$id,
          name: currentAccount?.currentUser?.name,
          email: currentAccount?.currentUser?.email,
          imageUrl: currentAccount?.currentUser?.imageUrl,
          stage: currentAccount?.currentUser?.stage,
          cohort: currentAccount?.currentUser?.cohort,
          program: currentAccount?.currentUser?.program,
          programId: currentAccount?.currentUser?.programId,
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
        "/showcase",
        "/enterprise",
        "/solutions",
        "/contact",
        "/case-study",
        "/retenaai-academy",
        "/retenaai-academy/programs",
        "/retenaai-academy/program",
        "/retenaai-academy/masterclass",
        "/retenaai-academy/masterclass-billing",
        "/retenaai-academy/thank-you",
        "/careers",
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
        location.pathname.includes("/enterprise") ||
        location.pathname.includes("/contact") ||
        location.pathname.includes("/solutions") ||
        location.pathname.includes("/case-study") ||
        location.pathname.includes("/retenaai-academy") ||
        location.pathname.includes("/retenaai-academy/programs") ||
        location.pathname.includes("/retenaai-academy/program") ||
        location.pathname.includes("/retenaai-academy/masterclass") ||
        location.pathname.includes("/retenaai-academy/masterclass-billing") ||
        location.pathname.includes("/retenaai-academy/masterclass-billing") ||
        location.pathname.includes("/retenaai-academy/thank-you") ||
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

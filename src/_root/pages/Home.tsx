import { Loader2 } from "lucide-react";
import { useUserContext } from "@/context/AuthContext";
import Prospects from "@/components/shared/Prospects";
import Applied from "@/components/shared/Applied";

const Home = () => {
  const { user } = useUserContext();

  return (
    <>
      {!user?.program && user?.stage === "prospect" && <Prospects />}
      {user?.program && user?.stage === "applied" && <Applied />}
      {!user?.program && !user?.stage && (
        <div className="w-[90%] mx-auto h-screen flex items-center justify-center flex-col gap-2">
          <Loader2 className="h-10 md:h-20 w-10 md:w-20 text-primary-blue animate-spin" />
          <div className="text-center">
            <p className="text-base md:text-lg text-primary-black">
              <span className="text-[#FCA311]">Welcome aboard!</span> We're
              preparing your dashboard...
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;

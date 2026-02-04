import { useEffect } from "react";
import { Loader2 } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useUserContext } from "@/context/AuthContext";
import Prospects from "@/components/shared/Prospects";
import Applied from "@/components/shared/Applied";
import Fusion from "@/components/shared/Fusion";
import toast from "react-hot-toast";
import { useUpdateUserStageStatus } from "@/lib/tanstack-query/queriesAndMutation";

const Home = () => {
  const { user } = useUserContext();
  const [searchParams] = useSearchParams();
  const stage = searchParams.get("ref");

  const { mutateAsync: updateUserStage } = useUpdateUserStageStatus();

  useEffect(() => {
    const updateStageIfNeeded = async () => {
      if (
        stage &&
        stage === "fusion" &&
        user?.program &&
        user?.stage === "applied"
      ) {
        const updatePayload = {
          userId: user?.id,
          stage: "fusion",
          program: user?.program,
          ProgamId: user?.programId,
        };

        try {
          await updateUserStage(updatePayload);
          window.location.replace("/app");
          return toast.success("Stage updated successfully.");
        } catch (error) {
          console.error(error);
          return toast.error("Stage update failed.");
        }
      }
    };

    if (user && stage) {
      updateStageIfNeeded();
    }
  }, [stage, user]);

  return (
    <>
      {/* Prospect Stage */}
      {!user?.program && user?.stage === "prospect" && <Prospects />}

      {/* Applied Stage */}
      {user?.program && user?.stage === "applied" && <Applied />}

      {/* Fusion Stage */}
      {user?.program && user?.stage === "fusion" && <Fusion />}

      {/* Loading State */}
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

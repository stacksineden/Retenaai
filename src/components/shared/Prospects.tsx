import { useUserContext } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { retenaPrograms } from "@/modelDataset";
import ProductDemoCard from "./ProductDemoCard";

const Prospects = () => {
  const navigate = useNavigate();
  const { user } = useUserContext();

  return (
    <div className="h-full">
      <div className="flex h-full w-full flex-col justify-between px-4 md:px-1 pt-9 md:pt-6 overflow-y-scroll">
        <div className="max-w-7xl self-center w-full">
          <div className="flex justify-center flex-col md:flex-row items-start md:items-end md:justify-between pr-4 pt-4 pb-0 md:pb-4">
            <div className="flex flex-col gap-2">
              <p className="text-primary-black text-2xl font-semibold">
                {`Welcome 👋 ${user?.name?.split(" ")[1] ?? "__ __"}`}
              </p>
            </div>

            <div className="hidden md:flex items-center gap-2"> 
              <div
                className="p-2 rounded-lg bg-white cursor-pointer"
                onClick={() => navigate(`/app`)}
              >
                <div className="bg-accent py-2 px-3 rounded-lg flex items-center gap-2">
                  <img
                    src={user?.imageUrl ?? ""}
                    alt="profile"
                    className="h-7 w-7 rounded-full"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold text-sm md:text-base">
                      {user?.email}
                    </p>
                    <p className="text-xs md:text-sm text-primary-black">
                      Stage:{" "}
                      <span className="text-[#FCA311] font-semibold uppercase">
                        {user?.stage ?? "__ __"}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2">
            <div className="my-3 flex flex-col items-start">
              <p className="text-[#FCA311] text-2xl font-semibold">
                Apply for a Program
              </p>
              <p className="text-primary-black text-base md:text-lg font-medium">
                Start your journey with our expert‑led bootcamps and courses.
              </p>
            </div>

            <div>
              <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-2 mt-2 md:mt-[1rem] px-1 md:px-3 pb-6">
                {retenaPrograms &&
                  retenaPrograms?.map((item) => (
                    <ProductDemoCard data={item} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prospects;

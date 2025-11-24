import { useAppContext } from "@/context/AppContext";
import { useUserContext } from "@/context/AuthContext";
import {
  AlignLeft,
  ChevronsLeft,
  House,
  Image,
  Blend,
  FlipVertical2,
  Focus,
  UserRound,
  ScanText,
  Terminal,
  LockKeyhole,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { ProfileMenu } from "./ProfileMenu";

const SideBar = () => {
  const { open, setOpen, mobileOpen, setMobileOpen } = useAppContext();
  const navigate = useNavigate();

  const { user } = useUserContext();

  const isProspect = user?.stage === "prospect" && !user?.program;
  const isApplied = user?.stage === "applied" && user?.program;
  const isFusion = user?.stage === "fusion" && user?.program;

  return (
    <aside className="h-[100dvh] overflow-hidden">
      {/* Desktop */}
      <div className="w-full h-full hidden md:flex mr-1">
        <div
          className={`lg:block ${
            open
              ? "translate-x-0 max-w-[305px] transition-all duration-300 ease-out"
              : "-translate-x-full max-w-0 transition-all duration-300 ease-out"
          }  overflow-hidden block`}
        >
          <div className="h-full w-[305px]">
            <div className="flex h-full flex-col gap-3 overflow-hidden bg-accent w-full">
              <div className="mx-auto mt-6 flex flex-col w-[90%] items-center bg-white p-4 rounded-xl">
                {/* <Logo /> */}
                <div className="flex items-center justify-between w-full">
                  <div className="w-[150px] md:w-[170px]">
                    <img
                      src="https://res.cloudinary.com/dyryfgjro/image/upload/v1763991087/retenatextW_ye9xz7.png"
                      alt="brand"
                      className="w-full object-contain cursor-pointer"
                      loading="lazy"
                      onClick={() => navigate("/app")}
                    />
                  </div>
                  <div
                    className="z-0 group inline-flex items-center justify-center justify-self-end mr-2 cursor-pointer"
                    onClick={() => setOpen(false)}
                  >
                    <ChevronsLeft className="text-primary-black" />
                  </div>
                </div>
                <div className="w-full">
                  <Button
                    className="bg-accent rounded-xl hover:bg-accent flex items-center justify-start gap-2 text-primary-black mt-3 w-full text-sm"
                    aria-label="upgrade"
                    onClick={() => navigate("/app")}
                  >
                    <House className="text-primary-black" />
                    Home
                  </Button>
                </div>
              </div>

              <div className="flex-grow flex-col overflow-hidden">
                <div
                  className="w-full relative flex flex-col gap-2 overflow-y-auto h-[70vh]"
                  data-slot="base"
                  aria-label="Recent assistants"
                  style={{ maxHeight: "calc(100vh - 200px)" }}
                >
                  {/* tools 1 */}
                  <div className="mx-auto flex flex-col w-[90%] bg-white p-4 rounded-xl">
                    <p className="font-semibold text-base text-primary-black">
                      Learning
                    </p>
                    <div className="mt-6 flex flex-col gap-3">
                      <div
                        className={`flex items-center gap-2 hover:bg-accent transition-all duration-500 p-2 rounded-xl cursor-pointer`}
                        onClick={() =>
                          isProspect
                            ? navigate("/app")
                            : navigate("/course-overview ")
                        }
                      >
                        <Image className="h-6 w-6 text-primary-black" />
                        <p className="text-sm text-primary-black font-medium">
                          {isProspect ? "Programs" : "Program"}
                        </p>
                      </div>
                      <div
                        className={`flex items-center gap-2 ${
                          isProspect || isApplied ? "bg-accent" : ""
                        } hover:bg-accent transition-all duration-500 p-2 rounded-xl cursor-pointer`}
                        onClick={() => {
                          if (isFusion) {
                            // user is in Fusion Phase
                            navigate("/interactive-sessions");
                          } else if (!isProspect && !isApplied) {
                            // default: not a prospect or applied
                            navigate("/app");
                          } else {
                            // optional: handle prospect/applied (or do nothing)
                          }
                        }}
                      >
                        <Focus className="h-6 w-6 text-primary-black" />
                        <p className="text-sm text-primary-black font-medium">
                          Interactive Sessions
                        </p>
                        {(isProspect || isApplied) && (
                          <LockKeyhole className="h-6 w-6 text-[#14213D]" />
                        )}
                      </div>
                      <div
                        className={`flex items-center gap-2  ${
                          isProspect || isApplied ? "bg-accent" : ""
                        }  hover:bg-accent transition-all duration-500 p-2 rounded-xl cursor-pointer`}
                        onClick={() => {
                          if (isFusion) {
                            // user is in Fusion Phase
                            navigate("/modules");
                          } else if (!isProspect && !isApplied) {
                            // default: not a prospect or applied
                            navigate("/app");
                          } else {
                            // optional: handle prospect/applied (or do nothing)
                          }
                        }}
                      >
                        <Image className="h-6 w-6 text-primary-black" />
                        <p className="text-sm text-primary-black font-medium">
                          Modules
                        </p>
                        {(isProspect || isApplied) && (
                          <LockKeyhole className="h-6 w-6 text-[#14213D]" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* tools 2 */}
                  <div className="mx-auto flex flex-col w-[90%] bg-white p-4 rounded-xl">
                    <p className="font-semibold text-base text-primary-black">
                      Resources
                    </p>
                    <div className="mt-6 flex flex-col gap-3">
                      <div
                        className={`flex items-center gap-2 ${
                          isProspect && "bg-accent"
                        } hover:bg-accent transition-all duration-500 p-2 rounded-xl cursor-pointer`}
                        onClick={() => {
                          isProspect ? {} : navigate("/study-kits");
                        }}
                      >
                        <ScanText className="h-6 w-6 text-primary-black" />
                        <p className="text-sm text-primary-black font-medium">
                          Study Kit
                        </p>
                        {isProspect && (
                          <LockKeyhole className="h-6 w-6 text-[#14213D]" />
                        )}
                      </div>
                      <div
                        className={`flex items-center gap-2 ${
                          isProspect || isApplied ? "bg-accent" : ""
                        } hover:bg-accent transition-all duration-500 p-2 rounded-xl cursor-pointer`}
                        onClick={() => {
                          if (!isProspect && !isApplied)
                            navigate("/program-resources");
                        }}
                      >
                        <Terminal className="h-6 w-6 text-primary-black" />
                        <p className="text-sm text-primary-black font-medium">
                          Program Materials
                        </p>
                        {(isProspect || isApplied) && (
                          <LockKeyhole className="h-6 w-6 text-[#14213D]" />
                        )}
                      </div>
                      <div
                        className={`flex items-center gap-2 ${
                          isProspect || isApplied ? "bg-accent" : ""
                        } hover:bg-accent transition-all duration-500 p-2 rounded-xl cursor-pointer`}
                        onClick={() => {
                          if (!isProspect && !isApplied)
                            navigate("/assessment");
                        }}
                      >
                        <Blend className="h-6 w-6 text-primary-black" />
                        <p className="text-sm text-primary-black font-medium">
                          Assessments
                        </p>
                        {(isProspect || isApplied) && (
                          <LockKeyhole className="h-6 w-6 text-[#14213D]" />
                        )}
                      </div>
                      <div
                        className={`flex items-center gap-2  ${
                          isProspect || isApplied ? "bg-accent" : ""
                        } hover:bg-accent transition-all duration-500 p-2 rounded-xl cursor-pointer`}
                        onClick={() => {
                          if (!isProspect && !isApplied) navigate("/app");
                        }}
                      >
                        <FlipVertical2 className="h-6 w-6 text-primary-black" />
                        <p className="text-sm text-primary-black font-medium">
                          Tasks
                        </p>
                        {(isProspect || isApplied) && (
                          <LockKeyhole className="h-6 w-6 text-[#14213D]" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-end pb-2 px-5">
                <div className="flex flex-col gap-3 py-3">
                  <Button
                    className="bg-white hover:bg-white shadow-md rounded-full hover:opacity-90 flex gap-2 text-primary-black font-medium mt-3 w-full text-base z-0 group relative items-center"
                    aria-label="upgrade"
                  >
                    <UserRound className="h-6 w-6 text-primary-black" />
                    My Profile
                    <ProfileMenu user={user} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`m-5 items-center absolute z-50 cursor-pointer ${
            open ? "hidden" : "block"
          } opacity-100 text-black`}
          onClick={() => setOpen(true)}
        >
          <AlignLeft className="text-primary-black h-7 w-7" />
        </div>
      </div>
      {/* Desktop */}

      {/* Mobile */}
      <div className="w-full h-full flex md:hidden mr-0 overflow-hidden">
        <div className="absolute left-0 top-0 z-50 flex h-full">
          <div className="absolute z-0 left-0 top-0 h-full w-full flex-auto bg-transparent"></div>
          <div
            className={`absolute z-50 top-0 h-full w-[305px] bg-white ${
              mobileOpen ? "left-0 " : "transform -translate-x-full"
            }`}
          >
            <div className="h-full overflow-hidden">
              <div className="h-full w-[305px] overflow-hidden">
                <div className="flex h-full flex-col gap-3 overflow-hidden bg-accent w-full">
                  <div className="mx-auto mt-6 flex flex-col w-[90%] items-center bg-white p-4 rounded-xl">
                    <div className="flex items-center justify-between w-full">
                      <div className="w-[150px]">
                        <img
                          src="/assets/retenatextW.png"
                          alt="brand"
                          className="w-full object-contain cursor-pointer"
                          loading="lazy"
                          onClick={() => navigate("/app")}
                        />
                      </div>
                      <div
                        className="z-0 group inline-flex items-center justify-center justify-self-end mr-2 cursor-pointer"
                        onClick={() => setMobileOpen(false)}
                      >
                        <ChevronsLeft className="text-primary-black" />
                      </div>
                    </div>
                    <div className="w-full">
                      <Button
                        className="bg-accent rounded-xl hover:bg-accent flex items-center justify-start gap-2 text-primary-black mt-3 w-full text-sm"
                        aria-label="upgrade"
                        onClick={() => {
                          setMobileOpen(false);
                          navigate("/app");
                        }}
                      >
                        <House className="text-primary-black" />
                        Home
                      </Button>
                    </div>
                  </div>

                  <div className="flex flex-col overflow-hidden relative">
                    <div
                      className="w-full relative flex flex-col gap-2 overflow-y-auto h-[70vh]"
                      data-slot="base"
                      aria-label="Recent assistants"
                      style={{ maxHeight: "calc(100vh - 200px)" }}
                    >
                      {/* tools 1 */}
                      <div className="mx-auto flex flex-col w-[90%] bg-white p-4 rounded-xl">
                        <p className="font-semibold text-base text-primary-black">
                          Learning
                        </p>
                        <div className="mt-6 flex flex-col gap-3">
                          <div
                            className={`flex items-center gap-2 hover:bg-accent transition-all duration-500 p-2 rounded-xl cursor-pointer`}
                            onClick={() => {
                              if (isProspect) {
                                navigate("/app");
                              } else {
                                navigate("/course-overview");
                              }
                              setMobileOpen(false);
                            }}
                          >
                            <Image className="h-6 w-6 text-primary-black" />
                            <p className="text-sm text-primary-black font-medium">
                              {isProspect ? "Programs" : "Program"}
                            </p>
                          </div>
                          <div
                            className={`flex items-center gap-2 ${
                              isProspect || isApplied ? "bg-accent" : ""
                            } hover:bg-accent transition-all duration-500 p-2 rounded-xl cursor-pointer`}
                            onClick={() => {
                              if (isFusion) {
                                // user is in Fusion Phase
                                navigate("/interactive-sessions");
                              } else if (!isProspect && !isApplied) {
                                // default: not a prospect or applied
                                navigate("/app");
                              } else {
                                // optional: handle prospect/applied (or do nothing)
                              }
                              setMobileOpen(false);
                            }}
                          >
                            <Focus className="h-6 w-6 text-primary-black" />
                            <p className="text-sm text-primary-black font-medium">
                              Interactive Sessions
                            </p>
                            {(isProspect || isApplied) && (
                              <LockKeyhole className="h-6 w-6 text-[#14213D]" />
                            )}
                          </div>
                          <div
                            className={`flex items-center gap-2 ${
                              isProspect || isApplied ? "bg-accent" : ""
                            } hover:bg-accent transition-all duration-500 p-2 rounded-xl cursor-pointer`}
                            onClick={() => {
                              if (isFusion) {
                                // user is in Fusion Phase
                                navigate("/modules");
                              } else if (!isProspect && !isApplied) {
                                // default: not a prospect or applied
                                navigate("/app");
                              } else {
                                // optional: handle prospect/applied (or do nothing)
                              }
                              setMobileOpen(false);
                            }}
                          >
                            <Image className="h-6 w-6 text-primary-black" />
                            <p className="text-sm text-primary-black font-medium">
                              Modules
                            </p>
                            {(isProspect || isApplied) && (
                              <LockKeyhole className="h-6 w-6 text-[#14213D]" />
                            )}
                          </div>
                        </div>
                      </div>

                      {/* tools 2 */}
                      <div className="mx-auto flex flex-col w-[90%] bg-white p-4 rounded-xl">
                        <p className="font-semibold text-base text-primary-black">
                          Resources
                        </p>
                        <div className="mt-6 flex flex-col gap-3">
                          <div
                            className={`flex items-center gap-2 ${
                              isProspect && "bg-accent"
                            } hover:bg-accent transition-all duration-500 p-2 rounded-xl cursor-pointer`}
                            onClick={() => {
                              setMobileOpen(false);
                              isProspect ? {} : navigate("/study-kits");
                            }}
                          >
                            <ScanText className="h-6 w-6 text-primary-black" />
                            <p className="text-sm text-primary-black font-medium">
                              Study Kit
                            </p>
                            {isProspect && (
                              <LockKeyhole className="h-6 w-6 text-[#14213D]" />
                            )}
                          </div>
                          <div
                            className={`flex items-center gap-2 ${
                              isProspect || isApplied ? "bg-accent" : ""
                            } hover:bg-accent transition-all duration-500 p-2 rounded-xl cursor-pointer`}
                            onClick={() => {
                              setMobileOpen(false);
                              if (!isProspect && !isApplied)
                                navigate("/program-resources");
                            }}
                          >
                            <Terminal className="h-6 w-6 text-primary-black" />
                            <p className="text-sm text-primary-black font-medium">
                              Program Materials
                            </p>
                            {(isProspect || isApplied) && (
                              <LockKeyhole className="h-6 w-6 text-[#14213D]" />
                            )}
                          </div>
                          <div
                            className={`flex items-center gap-2 ${
                              isProspect || isApplied ? "bg-accent" : ""
                            } hover:bg-accent transition-all duration-500 p-2 rounded-xl cursor-pointer`}
                            onClick={() => {
                              setMobileOpen(false);
                              if (!isProspect && !isApplied)
                                navigate("/assessment");
                            }}
                          >
                            <Blend className="h-6 w-6 text-primary-black" />
                            <p className="text-sm text-primary-black font-medium">
                              Assessments
                            </p>
                            {(isProspect || isApplied) && (
                              <LockKeyhole className="h-6 w-6 text-[#14213D]" />
                            )}
                          </div>
                          <div
                            className={`flex items-center gap-2 ${
                              isProspect || isApplied ? "bg-accent" : ""
                            } hover:bg-accent transition-all duration-500 p-2 rounded-xl cursor-pointer`}
                            onClick={() => {
                              setMobileOpen(false);
                              if (!isProspect && !isApplied) navigate("/app");
                            }}
                          >
                            <FlipVertical2 className="h-6 w-6 text-primary-black" />
                            <p className="text-sm text-primary-black font-medium">
                              Tasks
                            </p>
                            {(isProspect || isApplied) && (
                              <LockKeyhole className="h-6 w-6 text-[#14213D]" />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-end pb-2 px-5">
                    <div className="flex flex-col gap-3 py-3">
                      <Button
                        className="bg-white hover:bg-white shadow-md rounded-full hover:opacity-90 flex gap-2 text-primary-black font-medium mt-3 w-full text-base z-0 group relative items-center"
                        aria-label="upgrade"
                      >
                        <UserRound className="h-6 w-6 text-primary-black" />
                        My Profile
                        <ProfileMenu user={user} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`m-5 items-center absolute z-50 cursor-pointer opacity-100 text-black ${
            mobileOpen ? "hidden" : " block"
          }`}
          onClick={() => setMobileOpen(true)}
        >
          <AlignLeft className="text-primary-black h-7 w-7" />
        </div>
      </div>
      {/* Mobile */}
    </aside>
  );
};

export default SideBar;

import { useAppContext } from "@/context/AppContext";
import { useUserContext } from "@/context/AuthContext";
import {
  AlignLeft,
  ChevronsLeft,
  House,
  Image,
  Cat,
  Blend,
  FlipVertical2,
  Focus,
  UserRound,
  ScanText,
  Terminal,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { ProfileMenu } from "./ProfileMenu";

const SideBar = () => {
  const { open, setOpen, mobileOpen, setMobileOpen } = useAppContext();
  const navigate = useNavigate();

  const { user } = useUserContext();

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
                      src="/assets/logo.png"
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
                      Flux AI
                    </p>
                    <div className="mt-6 flex flex-col gap-3">
                      <div
                        className="flex items-center gap-2 hover:bg-accent transition-all duration-500 p-2 rounded-xl cursor-pointer"
                        onClick={() => navigate("/lora-gallery")}
                      >
                        <Image className="h-6 w-6 text-primary-black" />
                        <p className="text-sm text-primary-black font-medium">
                          Image Generation with Flux
                        </p>
                      </div>
                      <div
                        className="flex items-center gap-2 hover:bg-accent transition-all duration-500 p-2 rounded-xl cursor-pointer"
                        onClick={() =>
                          navigate("/generations/flux?mode=flux1.1-ultra")
                        }
                      >
                        <Cat className="h-6 w-6 text-primary-black" />
                        <p className="text-sm text-primary-black font-medium">
                          Try Flux Ultra
                        </p>
                        <div className="py-1 px-2 bg-red-500 text-white text-sm rounded-md">new</div>
                      </div>
                      <div
                        className="flex items-center gap-2 hover:bg-accent transition-all duration-500 p-2 rounded-xl cursor-pointer"
                        onClick={() => navigate("/app")}
                      >
                        <Focus className="h-6 w-6 text-primary-black" />
                        <p className="text-sm text-primary-black font-medium">
                          AI Photoshoot
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* tools 2 */}
                  <div className="mx-auto flex flex-col w-[90%] bg-white p-4 rounded-xl">
                    <p className="font-semibold text-base text-primary-black">
                      Magic Tools
                    </p>
                    <div className="mt-6 flex flex-col gap-3">
                      <div
                        className="flex items-center gap-2 hover:bg-accent transition-all duration-500 p-2 rounded-xl cursor-pointer"
                        onClick={() => navigate("/generations/image-to-prompt")}
                      >
                        <ScanText className="h-6 w-6 text-primary-black" />
                        <p className="text-sm text-primary-black font-medium">
                          Image to prompt
                        </p>
                      </div>
                      <a
                        className="flex items-center gap-2 hover:bg-accent transition-all duration-500 p-2 rounded-xl cursor-pointer"
                        href="https://huggingface.co/spaces/gokaygokay/FLUX-Prompt-Generator"
                        target="_blank"
                      >
                        <Terminal className="h-6 w-6 text-primary-black" />
                        <p className="text-sm text-primary-black font-medium">
                          Flux.AI prompt generator
                        </p>
                      </a>
                      <div
                        className="flex items-center gap-2 hover:bg-accent transition-all duration-500 p-2 rounded-xl cursor-pointer"
                        onClick={() => navigate("/generations/photo-upscaling")}
                      >
                        <Blend className="h-6 w-6 text-primary-black" />
                        <p className="text-sm text-primary-black font-medium">
                          Photo upscaling
                        </p>
                      </div>
                      <div
                        className="flex items-center gap-2 hover:bg-accent transition-all duration-500 p-2 rounded-xl cursor-pointer"
                        onClick={() => navigate("/generations/bg-remover")}
                      >
                        <FlipVertical2 className="h-6 w-6 text-primary-black" />
                        <p className="text-sm text-primary-black font-medium">
                          Background remover
                        </p>
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
                          src="/assets/logo.png"
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
                          Flux AI
                        </p>
                        <div className="mt-6 flex flex-col gap-3">
                          <div
                            className="flex items-center gap-2 hover:bg-accent transition-all duration-500 p-2 rounded-xl cursor-pointer"
                            onClick={() => {
                              setMobileOpen(false);
                              navigate("/lora-gallery");
                            }}
                          >
                            <Image className="h-6 w-6 text-primary-black" />
                            <p className="text-sm text-primary-black font-medium">
                              Image Generation with Flux
                            </p>
                          </div>
                          <div
                            className="flex items-center gap-2 hover:bg-accent transition-all duration-500 p-2 rounded-xl cursor-pointer"
                            onClick={() => {
                              setMobileOpen(false);
                              navigate("/generations/flux?mode=flux1.1-ultra");
                            }}
                          >
                            <Cat className="h-6 w-6 text-primary-black" />
                            <p className="text-sm text-primary-black font-medium">
                              Try Flux Ultra
                            </p>
                            <div className="py-1 px-2 bg-red-500 text-white text-sm rounded-md">new</div>
                          </div>
                          <div
                            className="flex items-center gap-2 hover:bg-accent transition-all duration-500 p-2 rounded-xl cursor-pointer"
                            onClick={() => {
                              setMobileOpen(false);
                              navigate("/app");
                            }}
                          >
                            <Focus className="h-6 w-6 text-primary-black" />

                            <p className="text-sm text-primary-black font-medium">
                              AI Photoshoot
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* tools 2 */}
                      <div className="mx-auto flex flex-col w-[90%] bg-white p-4 rounded-xl">
                        <p className="font-semibold text-base text-primary-black">
                          Magic Tools
                        </p>
                        <div className="mt-6 flex flex-col gap-3">
                          <div
                            className="flex items-center gap-2 hover:bg-accent transition-all duration-500 p-2 rounded-xl cursor-pointer"
                            onClick={() => {
                              setMobileOpen(false);
                              navigate("/generations/image-to-prompt");
                            }}
                          >
                            <ScanText className="h-6 w-6 text-primary-black" />
                            <p className="text-sm text-primary-black font-medium">
                              Image to prompt
                            </p>
                          </div>
                          <a
                            className="flex items-center gap-2 hover:bg-accent transition-all duration-500 p-2 rounded-xl cursor-pointer"
                            href="https://huggingface.co/spaces/gokaygokay/FLUX-Prompt-Generator"
                            target="_blank"
                          >
                            <Terminal className="h-6 w-6 text-primary-black" />
                            <p className="text-sm text-primary-black font-medium">
                              Flux.AI prompt generator
                            </p>
                          </a>
                          <div
                            className="flex items-center gap-2 hover:bg-accent transition-all duration-500 p-2 rounded-xl cursor-pointer"
                            onClick={() => {
                              setMobileOpen(false);
                              navigate("/generations/photo-upscaling");
                            }}
                          >
                            <Blend className="h-6 w-6 text-primary-black" />
                            <p className="text-sm text-primary-black font-medium">
                              Photo upscaling
                            </p>
                          </div>
                          <div
                            className="flex items-center gap-2 hover:bg-accent transition-all duration-500 p-2 rounded-xl cursor-pointer"
                            onClick={() => {
                              setMobileOpen(false);
                              navigate("/generations/bg-remover");
                            }}
                          >
                            <FlipVertical2 className="h-6 w-6 text-primary-black" />
                            <p className="text-sm text-primary-black font-medium">
                              Background remover
                            </p>
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

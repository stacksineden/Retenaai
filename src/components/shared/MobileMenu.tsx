import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MobileMenu = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const Navigate = useNavigate();
  return (
    <>
      {open && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{ opacity: 0 }}
            className={`w-[100vw] h-screen fixed inset-0 z-50 backdrop-blur-sm`}
          >
            <div
              className={`fixed inset-x-4 top-8 z-50 origin-top rounded-3xl p-8 ring-1 ring-zinc-900/5 bg-accent opacity-100 scale-100`}
            >
              <div className="flex flex-row-reverse items-center justify-between">
                <button
                  aria-label="Close menu"
                  className="-m-1 p-1"
                  type="button"
                  onClick={() => setOpen(false)}
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className={`h-6 w-6 text-primary-black`}
                  >
                    <path
                      d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
                <h2 className={`text-sm font-medium text-primary-black`}>
                  Navigation
                </h2>
              </div>
              <nav className="mt-6 flex flex-col gap-3">
                <ul
                  className={`my-2 divide-y text-sm divide-zinc-200 text-primary-black`}
                >
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="font-semibold">
                        Magic Tools
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul
                          className={`divide-y text-sm divide-zinc-200 text-primary-black`}
                        >
                          <li
                            className="block py-2"
                            onClick={() => Navigate("/sign-in")}
                          >
                            Photo upscaling
                          </li>
                          <li
                            className="block py-2"
                            onClick={() => Navigate("/sign-in")}
                          >
                            Background remover
                          </li>
                          <li className="block py-2">
                            Flux AI prompt generator
                          </li>
                          <li
                            className="block py-2"
                            onClick={() => Navigate("/sign-in")}
                          >
                            Image to prompt
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="font-semibold">
                        Flux AI
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul
                          className={`divide-y text-sm divide-zinc-200 text-primary-black`}
                        >
                          <li
                            className="block py-2"
                            onClick={() => Navigate("/sign-in")}
                          >
                            AI photoshoot
                          </li>
                          <li
                            className="block py-2"
                            onClick={() => Navigate("/sign-in")}
                          >
                            Flux 1.1 pro
                          </li>
                          <li
                            className="block py-2"
                            onClick={() => Navigate("/sign-in")}
                          >
                            Flux dev realism
                          </li>
                          <li
                            className="block py-2"
                            onClick={() => Navigate("/sign-in")}
                          >
                            Flux Embed text
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <Link to="/pricing">
                    <li className="block py-2 font-medium">Pricing</li>
                  </Link>
                  <Link to="/showcase">
                    <li className="block py-2 font-medium">Showcase</li>
                  </Link>
                </ul>

                <div className="flex items-center justify-center gap-2">
                  <Button
                    className="bg-transparent hover:bg-accent text-primary-blue3 font-semibold text-sm"
                    onClick={() => Navigate("/sign-up")}
                  >
                    Get Started
                  </Button>
                  <Button
                    className="bg-primary-blue2 hover:bg-primary-black font-semibold text-white flex items-center gap-2"
                    onClick={() => Navigate("/sign-in")}
                  >
                    Log in
                    <ArrowRight className="text-white h-4" />
                  </Button>
                </div>
              </nav>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default MobileMenu;

{
  /* <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          exit={{ opacity: 0 }}
          className="absolute top-20 left-0 w-full  h-screen z-10"
        >
          <div className="bg-accent">
            hello
          </div>
        </motion.div>
      )}
    </AnimatePresence> */
}

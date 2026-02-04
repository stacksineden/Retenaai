import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";



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
              className={`fixed inset-x-4 top-8 z-50 origin-top rounded-3xl p-8 ring-1 ring-zinc-900/5 bg-black opacity-100 scale-100`}
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
                    className={`h-6 w-6 text-accent`}
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
                <h2 className={`text-sm font-medium text-white`}>Navigation</h2>
              </div>
              <nav className="mt-6 flex flex-col gap-3">
                <ul
                  className={`my-2 divide-y text-sm divide-zinc-200 text-white`}
                >
                   <Link to="/packages">
                    <li className="block py-2 font-medium">Packages</li>
                  </Link>
                  {/* <Link to="/retenaai-academy">
                    <li className="block py-2 font-medium">Academy</li>
                  </Link> */}
                  <Link to="/enterprise">
                    <li className="block py-2 font-medium">Pilot Program</li>
                  </Link>
                  <Link to="/case-study">
                    <li className="block py-2 font-medium">Case Studies</li>
                  </Link>
                  <Link to="/affiliate-program">
                    <li className="block py-2 font-medium">Affiliate Program</li>
                  </Link>
                </ul>

                <div className="flex items-center justify-center gap-2">
                  <Button
                    className="bg-[#FCA311] font-semibold text-black flex items-center gap-2"
                    onClick={() => Navigate("/contact")}
                  >
                    Contact Us
                    <ArrowRight className="text-black h-4" />
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


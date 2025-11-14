import React from "react";
import { ArrowRight, Menu } from "lucide-react";
import { Button } from "../ui/button";
import { NavMenu } from "./NavMenu";
import MobileMenu from "./MobileMenu";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AcademyNavMenu } from "./AcademyNavMenu";
import AcademyMobileMenu from "./AcademyMobileMenu";

const Navbar = () => {
  const Navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = React.useState(false);

  const isAcademyPage = location.pathname.includes("/retenaai-academy");

  return (
    <div className="bg-black">
      <nav className="container flex justify-between py-4">
        <Link
          to={isAcademyPage ? "/retenaai-academy" : "/"}
          className="w-[150px] md:w-[170px]"
        >
          <img
            src="/assets/retenatextB.png"
            alt="brand"
            className="w-full object-contain"
            loading="lazy"
          />
        </Link>
        {!isAcademyPage && (
          <div className="hidden md:block">
            <NavMenu />
          </div>
        )}
        {isAcademyPage && (
          <div className="hidden md:block">
            <AcademyNavMenu />
          </div>
        )}

        {isAcademyPage && (
          <Button
            className="bg-accent border-[1.5px] text-sm border-primary-blue2 font-semibold text-primary-black hover:bg-accent hover:primary-black flex items-center gap-2"
            onClick={() => Navigate("/sign-up")}
          >
            Apply Now
            <ArrowRight className="text-primary-black hover:text-white h-4" />
          </Button>
        )}

        {!isAcademyPage && (
          <div className="hidden md:flex items-center gap-2">
            <Button
              className="bg-accent border-[1.5px] text-sm border-primary-blue2 font-semibold text-primary-black hover:bg-accent hover:primary-black flex items-center gap-2"
              onClick={() => Navigate("/contact")}
            >
              Contact Us
              <ArrowRight className="text-primary-black hover:text-white h-4" />
            </Button>
          </div>
        )}

        {/* Mobile */}
        {!isAcademyPage && (
          <div className="md:hidden flex items-center gap-1">
            {/* <Button
              className="bg-accent text-primary-blue3 hover:bg-accent font-semibold text-sm"
              onClick={() => Navigate("/contact")}
            >
              Book A Call
            </Button> */}
            <div className="" onClick={() => setOpen(!open)}>
              <Menu className="flex items-center justify-center text-white h-7 w-7 cursor-pointer" />
            </div>
          </div>
        )}
        {isAcademyPage && (
          <div className="md:hidden flex items-center gap-1">
            {/* <Button
              className="bg-accent text-primary-blue3 hover:bg-accent font-semibold text-sm"
              onClick={() => Navigate("/sign-up")}
            >
              Apply Now
            </Button> */}
            <div className="" onClick={() => setOpen(!open)}>
              <Menu className="flex items-center justify-center text-primary-black h-7 w-7 cursor-pointer" />
            </div>
          </div>
        )}
      </nav>
      {!isAcademyPage && <MobileMenu open={open} setOpen={setOpen} />}
      {isAcademyPage && <AcademyMobileMenu open={open} setOpen={setOpen} />}
    </div>
  );
};

export default Navbar;

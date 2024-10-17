import React from "react";
import { ArrowRight,  Menu } from "lucide-react";
import { Button } from "../ui/button";
import { NavMenu } from "./NavMenu";
import MobileMenu from "./MobileMenu";
import { Link, useNavigate } from "react-router-dom";


const Navbar = () => {
  const Navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  return (
    <div className="bg-accent">
      <nav className="container flex justify-between py-4 md:py-6">
        <Link to="/" className="w-[150px] md:w-[170px]">
          <img
            src="/assets/logo.png"
            alt="brand"
            className="w-full object-contain"
            loading="lazy"
          />
        </Link>
        <div className="hidden md:block">
          <NavMenu />
        </div>
       
          <div className="hidden md:flex items-center gap-2">
            <Button
              className="md:hidden lg:block bg-transparent hover:bg-accent hover:text-primary-blue3 text-primary-black font-semibold text-sm"
              onClick={() => Navigate("/sign-up")}
            >
              Get Started
            </Button>
            <Button
              className="bg-transparent border-[1.5px] text-sm border-primary-blue2 font-semibold text-primary-black hover:bg-primary-blue hover:text-white flex items-center gap-2"
              onClick={() => Navigate("/sign-in")}
            >
              Log in
              <ArrowRight className="text-primary-black hover:text-white h-4" />
            </Button>
          </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-1">
          <Button
            className="bg-accent text-primary-blue3 hover:bg-accent font-semibold text-sm"
            onClick={() => Navigate("/sign-in")}
          >
            Generate
          </Button>
          <div className="" onClick={() => setOpen(!open)}>
            <Menu className="flex items-center justify-center text-primary-black h-7 w-7 cursor-pointer" />
          </div>
        </div>
      </nav>
      <MobileMenu open={open} setOpen={setOpen} />
    </div>
  );
};

export default Navbar;

import { Facebook, Instagram, Twitter } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-accent text-zinc-100">
      <div className="px-10 md:px-32 py-4 grid grid-cols-1 md:grid-cols-2 border-t-[1px] border-accent space-y-2 md:space-y-1">
        <div className="flex items-center space-x-1 md:space-x-2">
          <p className="text-xs">English (US)</p>
          <p className="text-xs">USD</p>
          <div className="flex items-center space-x-1">
            <Instagram className="w-5 h-5 text-primary-black cursor-pointer" />
            <Facebook className="w-5 h-5 text-primary-black cursor-pointer" />
            <Twitter className="w-5 h-5 text-primary-black cursor-pointer" />
          </div>
        </div>
        <div className="flex items-center space-x-3 md:space-x-4">
          <p
            className="text-xs text-primary-black cursor-pointer"
            onClick={() => navigate("/terms")}
          >
            Privacy
          </p>
          <p
            className="text-xs text-primary-black cursor-pointer"
            onClick={() => navigate("/terms")}
          >
            Terms
          </p>
          <p className="text-xs text-primary-black">Sitemap</p>
          <p className="text-xs font-semibold text-primary-black">
            &copy; {new Date().getFullYear()} StacksinEden inc
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

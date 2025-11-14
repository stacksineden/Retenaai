import { Instagram } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-black text-primary-black">
      <div className="px-10 md:px-32 py-4 grid grid-cols-1 md:grid-cols-2 border-t-[1px] border-gray-800 space-y-2 md:space-y-1">
        <div className="flex md:justify-start justify-center items-center space-x-1 md:space-x-2 text-white">
          <p className="text-xs">English (US)</p>
          <p className="text-xs">USD</p>
          <div className="flex items-center space-x-1 text-white">
            <div className="w-7 h-7 cursor-pointer">
              <a
                href="https://www.tiktok.com/@retena.ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/tiktok.png"
                  alt="TikTok logo"
                  className="w-full h-full object-cover"
                />
              </a>
            </div>
          </div>

          <a
            href="https://www.instagram.com/retenaai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="text-primary-black h-4 w-4" />
          </a>
        </div>
        <div className="flex flex-col md:flex-row items-center space-x-3 md:space-x-4">
          <p
            className="text-xs text-white cursor-pointer"
            onClick={() => navigate("/terms")}
          >
            Privacy
          </p>
          <p
            className="text-xs text-white cursor-pointer"
            onClick={() => navigate("/terms")}
          >
            Terms
          </p>
          <a
            href="mailto:retenaaistacksorg@gmail.com"
            className="text-sm text-white font-bold cursor-pointer"
          >
            Email@ retenaaistacksorg@gmail.com
          </a>
          <p className="text-xs font-semibold text-white">
            &copy; {new Date().getFullYear()} RetenaAI inc
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

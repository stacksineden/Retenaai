import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-accent text-primary-black">
      <div className="px-10 md:px-32 py-4 grid grid-cols-1 md:grid-cols-2 border-t-[1px] border-accent space-y-2 md:space-y-1">
        <div className="flex md:justify-start justify-center items-center space-x-1 md:space-x-2">
          <p className="text-xs">English (US)</p>
          <p className="text-xs">USD</p>
          <div className="flex items-center space-x-1">
            <div className="w-7 h-7 cursor-pointer">
              <a
                href="https://www.tiktok.com/@retina.ai?_t=8qlQZ2rTMeM&_r=1"
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
        </div>
        <div className="flex flex-col md:flex-row items-center space-x-3 md:space-x-4">
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
          <a
            href="mailto:stacksineden@gmail.com"
            className="text-sm text-primary-black font-bold cursor-pointer"
          >
            Email@ retenaaistacksineden@gmail.com
          </a>
          <p className="text-xs font-semibold text-primary-black">
            &copy; {new Date().getFullYear()} StacksinEden inc
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

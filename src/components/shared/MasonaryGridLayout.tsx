import { Models } from "appwrite";
import { Copy } from "lucide-react";
import toast from "react-hot-toast";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

type LayoutProps = {
  data: Models.Document[];
};

const MasonaryGridLayout = ({ data }: LayoutProps) => {
  const handleCopyPrompt = (prompt: string) => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(prompt)
        .then(() => {
          toast.success("Prompt copied to clipboard!"); // Optional: You can replace this with a toast or other UI feedback
        })
        .catch((err) => {
          toast.error("Failed to copy");
          console.error("Failed to copy: ", err);
        });
    } else {
      toast.error("Clipboard API not supported");
      console.error("Clipboard API not supported");
    }
  };

  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}
    >
      <Masonry gutter="10px">
        {data &&
          data.map((item, index) => (
            <div
              className="relative overflow-hidden rounded-lg group"
              key={index}
            >
              <img
                src={item?.url}
                alt={`Gallery image ${index + 1}`}
                loading="lazy"
                style={{
                  width: "100%",
                  display: "block",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
                className="transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                onClick={() => window.open(item?.url, "_blank")}
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-black bg-opacity-50 flex justify-center items-center transition-all duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
                <div className="flex flex-col p-4 gap-1 w-full">
                  <div className="text-white text-base line-clamp-2 overflow-hidden">
                    {item?.prompt}
                  </div>
                  <div
                    className="flex items-center gap-1 cursor-pointer w-full justify-end mt-2"
                    onClick={() => handleCopyPrompt(item?.prompt || "")}
                  >
                    <Copy className="h-4 w-4 text-white" />
                    <p className="text-sm font-medium text-white">
                      Copy prompt
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonaryGridLayout;

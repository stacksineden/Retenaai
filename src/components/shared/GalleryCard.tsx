import { Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { GalleryStylesData } from "@/types";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "@/context/AppContext";

const GalleryCard = ({ data }: { data: GalleryStylesData }) => {
  const navigate = useNavigate();
  const { setShootData } = useAppContext();

  //open billing modal
  return (
    <>
      <div className="w-full h-[450px] rounded-lg border-2 border-accent bg-white flex flex-col gap-1">
        <div className="h-[350px] w-full p-4 grid grid-cols-2 gap-3">
          {data?.images?.map((img, index) => (
            <div
              className="bg-accent h-[150px] rounded-xl transform transition duration-300 hover:rotate-6 hover:scale-95"
              key={index}
            >
              <img
                src={img}
                alt="heroimage"
                loading="lazy"
                className="h-full w-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>

        <div className="bg-transparent px-4">
          <h2 className="text-primary-black text-base font-semibold">
            {data?.title}
          </h2>
          <p className="text-primary-black line-clamp-2 text-xs/[18px]">
            {data?.text}
          </p>
        </div>
        <Button
          type="submit"
          className="shad-button_primary mx-3"
          // disabled={true}
          // onClick={() => navigate(`/training?mode=${data?.query_slug}`)}
          // onClick={() => setOpenPaymentModal(true)}
          onClick={() => {
            setShootData(data)
            navigate(`/billing`)
          }}
        >
          <Sparkles className="text-white h-6 w-6" />
          Try it out
        </Button>
      </div>
    </>
  );
};

export default GalleryCard;

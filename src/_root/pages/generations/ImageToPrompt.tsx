import { Ghost } from "lucide-react";

const ImageToPrompt = () => {
  return (
    <div className="container py-4 mt-6 md:mt-0">
      <div className="w-full flex flex-col gap-2 my-3">
        <h2 className="text-primary-black text-2xl md:text-4xl font-semibold">
          Image to prompt
        </h2>
        <p className="text-primary-blue3 text-sm md:text-base pl-2">
          Visualize your imagination with Flux AI.
        </p>
      </div>

      <div className="bg-white">
        <div className="mt-20 flex flex-col items-center gap-2 justify-center py-10">
          <Ghost className="h-8 w-8 text-primary-black" />
          <h3 className="font-semibold text-xl text-primary-black">
            Image to prompt is coming soon
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ImageToPrompt;

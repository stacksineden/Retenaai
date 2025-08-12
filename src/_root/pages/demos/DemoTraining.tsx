import { Button } from "@/components/ui/button";
import { demo_products } from "@/modelDataset";
import { Cloud, Lightbulb, Trash } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

const DemoTraining = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");

  const demoData = demo_products?.find((el) => el?.trigger_word === mode);
  return (
    <div className="container py-4 mt-7 md:mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-2">
        <div className="w-full flex flex-col gap-2">
          <div className="flex flex-col my-3">
            <h2 className="text-primary-black text-2xl font-medium">
              Custom Model Training
            </h2>

            <p className="text-primary-black text-lg opacity-80 ml-1">
              Train AI with your image dataset for personalized generation.
            </p>
          </div>

          <div className="flex flex-col gap-2 overflow-y-scroll scrollbar-hide w-[100%] h-[40rem] bg-white shadow-md rounded-md">
            <div className="flex flex-col my-4 px-2 gap-2 ">
              <div className="p-2 bg-accent">
                <div className="flex items-center gap-1">
                  <Lightbulb className="w-6 h-6 text-primary-blue" />
                  <p className="text-base text-black font-medium">
                    Upload your images
                  </p>
                </div>
                <ul className="mt-1 opacity-75">
                  <li className="text-base">
                    1. Upload 3 or more photos of your{" "}
                    {demoData?.name || "__ __"} brand. You can take these photos
                    yourself or find them online.
                  </li>
                  <li className="text-base">
                    2. Results get better with more photos from different
                    angles.
                  </li>
                  <li className="text-base">
                    3. Image size must be at least 384×384. See the samples
                    below for guidance.
                  </li>
                </ul>
              </div>

              <div className="p-2 bg-accent w-full flex overflow-x-auto space-x-2 scrollbar-hide">
                {demoData?.training_dataset &&
                  demoData?.training_dataset?.map((image, _i) => (
                    <div
                      key={_i}
                      className="h-[9rem] w-[9rem] flex-shrink-0 rounded-md bg-accent"
                    >
                      <img
                        src={image}
                        alt="productimage"
                        className="w-full h-full rounded-md object-cover"
                      />
                    </div>
                  ))}
              </div>

              <div className="mb-1">
                <div className="border m-4 border-dashed border-gray-300 rounded-lg">
                  <div className="flex items-center justify-center h-full w-full">
                    <label
                      htmlFor="dropzone-file"
                      className="flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer bg-accent"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center">
                        <Cloud className="h-6 w-6 text-primary-black mb-2" />
                        <p className="mb-2 text-sm text-primary-black">
                          <span className="font-semibold">Click to upload</span>{" "}
                          or drag and drop
                        </p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <Button
              className="shad-button_primary mx-3 my-4 py-3"
              onClick={() =>
                navigate(`/demogenerate?mode=${demoData?.trigger_word}`)
              }
            >
              Start your {demoData?.name} shoot now
            </Button>
          </div>
        </div>

        <div className="w-full h-[45rem] border border-zinc-700 rounded-md border-dashed">
          <div className="bg-accent h-[45rem] overflow-y-scroll rounded-lg p-2 scrollbar-hide">
            {demoData?.training_dataset?.length === 0 && (
              <div className="w-full h-full flex justify-center items-center text-center">
                <p className="text-base text-primary-black">
                  Your selected images will appear here
                </p>
              </div>
            )}
            <div className="p-2 bg-accent w-full h-full grid grid-cols-1 md:grid-cols-2 gap-3">
              {demoData?.training_dataset.map((image, _i) => {
                return (
                  <div key={_i} className="relative group">
                    <img
                      src={image}
                      alt={`Image ${_i + 1}`}
                      className="w-full h-[30rem] md:h-[21rem] object-cover rounded-lg"
                    />

                    <button
                      onClick={() => {}}
                      type="button"
                      className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Trash className="w-4 h-4" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoTraining;

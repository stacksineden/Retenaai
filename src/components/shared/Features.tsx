import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { WobbleCard } from "./WobbleCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { featuredShoots } from "@/modelDataset";

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="container py-5 bg-white w-full">
      <motion.div
        ref={ref}
        className="2xl:max-w-[1440px] mx-auto relative py-4 lg:mb-5 lg:py-10 xl:mb-6 px-5 lg:px-20 3xl:px-0 overflow-hidden w-full md:w-[80%] font-medium"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 20,
        }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="text-4xl md:text-5xl text-primary-black tracking-wide font-semibold">
          Retina.AI is revolutionizing the photoshoot industry by leveraging AI
          to make professional photography more affordable and accessible to
          everyone.
        </h2>
      </motion.div>

      {/* masonary for shoots */}
      <div className="w-full h-full p-2">
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4, 1200: 6 }}
        >
          <Masonry gutter="7px">
            {featuredShoots &&
              featuredShoots?.map((image, index) => (
                <div
                  className="relative overflow-hidden rounded-lg group"
                  key={index}
                >
                  <img
                    src={image ?? "/assets/image-placeholder.png"}
                    alt={`Gallery image ${index + 1}`}
                    loading="lazy"
                    style={{
                      width: "100%",
                      display: "block",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                    className="transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                    onClick={() => window.open(image, "_blank")}
                  />
                </div>
              ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>

      <div className="pl-4 mx-auto max-w-7xl">
        <h2 className="text-2xl md:text-5xl font-bold text-primary-black">
          Try AI photoshoot
        </h2>
        <p className="text-primary-blue text-base md:text-xl">
          Upload your photos and start creating stunning, realistic images now!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full my-8">
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-accent min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg text-left text-balance text-3xl md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-black">
              Upload Images of Yourself
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-primary-blue">
              Unlock the full potential of our AI by uploading your favorite
              selfies! For the best results, share a mix of close-ups, waist-up,
              and full-body shots. Get ready to experience incredible
              transformations with just a few simple steps—it's as easy as
              1-2-3!
            </p>
          </div>
          <img
            src="/assets/step1.svg"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-10 md:-right-[40%] lg:-right-[5%] -bottom-[100px] md:-bottom-24 object-contain rounded-2xl "
          />
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-accent min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg text-left text-balance text-3xl md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-black">
              AI Training Will Begin Shortly
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-primary-blue">
              Now, sit back and relax as our cutting-edge AI works its magic,
              learning from your stunning photos. In no time, it will capture
              your style and essence, delivering personalized, extraordinary
              results. Embrace the future effortlessly and watch the
              transformation unfold!
            </p>
          </div>
          <img
            src="/assets/step3.png"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-10 md:-right-[40%] lg:-right-[5%] -bottom-[350px] md:-bottom-24 object-contain rounded-2xl"
          />
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-accent min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg text-left text-balance text-3xl md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-black">
              Image Generation
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-primary-blue">
              Step into the spotlight and let your imagination soar! Our AI is
              ready to create photorealistic images of you for any occasion.
              Whether it's a bold professional headshot or the perfect dating
              profile picture, you’ll stand out like never before. Embrace
              endless possibilities and shine effortlessly, all from the comfort
              of home!
            </p>
          </div>
          <img
            src="/assets/step2.png"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-10 md:-right-[40%] lg:-right-[5%] -bottom-[350px] md:-bottom-24 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
    </div>
  );
};

export default Features;

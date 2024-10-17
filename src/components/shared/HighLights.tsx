import { AppleStyleCarousel, Card } from "./AppleStyleCarousel";

export function HighLights() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-4">
      <h2 className="max-w-7xl pl-4 mx-auto text-2xl md:text-5xl font-bold text-primary-black">
        Do more with Retina.AI
      </h2>
      <AppleStyleCarousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Do more with Retina.AI
              </span>
              Say goodbye to costly photographers and complicated setups. Create
              stunning, professional-quality photos effortlessly with AI, right
              from your device in minutes.
            </p>
            <img
              src="/assets/psedo-generations/selfies1.png"
              alt="mockup"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Flux.AI 1.1 Pro",
    title: "Photorealistic Image generation",
    src: "/assets/highlights1.webp",
    content: <DummyContent />,
  },
  {
    category: "Flux.AI",
    title: "Embed Text into images",
    src: "/assets/highlights2.webp",
    content: <DummyContent />,
  },
  {
    category: "Retina.AI",
    title: "Upscale Images",
    src: "/assets/psedo-generations/upscaler.webp",
    content: <DummyContent />,
  },

  {
    category: "DALL.E 3",
    title: "Image generation with Dall.e 3",
    src: "/assets/psedo-generations/dalle3.webp",
    content: <DummyContent />,
  },
  {
    category: "Flux Dev realism",
    title: "Image generation with Flux Dev",
    src: "/assets/psedo-generations/flux-dev-realism.webp",
    content: <DummyContent />,
  },
  {
    category: "Retina.AI",
    title: "Remove Background from images",
    src: "/assets/psedo-generations/fashion4.png",
    content: <DummyContent />,
  },
];

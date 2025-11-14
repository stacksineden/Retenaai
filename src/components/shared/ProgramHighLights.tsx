import { AppleStyleCarousel, Card } from "./AppleStyleCarousel";

export function ProgramHighLights() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} identifier="academy" />
  ));

  return (
    <div className="w-full h-full py-4">
      <div className="max-w-7xl pl-4 mx-auto flex flex-col gap-2">
        <h2 className=" text-2xl md:text-5xl font-bold text-accent">
          Find Your Path in Generative AI
        </h2>
        <p className="text-base md:text-xl text-white">
          One world-class program, five specialisations. Choose the track that
          matches your goals and build the future with AI.
        </p>
      </div>
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
                Find Your Ideal AI Journey
              </span>
              Explore hands-on programs designed to equip you with future-ready
              skills—one project at a time.
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
    category: "",
    title: "Systems Integration & Automation",
    src: "/assets/int.webp",
    content: <DummyContent />,
    slug: "systems_intergration",
  },
  {
    category: "",
    title: "AI Strategy & Consulting",
    src: "/assets/strategy.webp",
    content: <DummyContent />,
    slug: "strategy_and_consulting",
  },
  {
    category: "",
    title: "Generative AI Programming",
    src: "/assets/genai.webp",
    content: <DummyContent />,
    slug: "",
  },
  {
    category: "",
    title: "AI Product Developments",
    src: "/assets/auto.webp",
    content: <DummyContent />,
    slug: "",
  },
  {
    category: "",
    title: "AI Agents Development",
    src: "/assets/lead.webp",
    content: <DummyContent />,
    slug: "",
  },
];

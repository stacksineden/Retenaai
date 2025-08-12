import { AppleStyleCarousel, Card } from "./AppleStyleCarousel";

export function HighLights() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} identifier="agency"/>
  ));

  return (
    <div className="w-full h-full py-4">
      <div className="max-w-7xl pl-4 mx-auto flex flex-col gap-2">
        <h2 className=" text-2xl md:text-5xl font-bold text-primary-black">
          RetenaAI Systems
        </h2>
        <p className="text-base md:text-xl">
          Ready-to-use AI systems that plug directly into your business — no
          developers, no complexity. Just subscribe, connect, and grow.
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
                RetenaAI Systems
              </span>
              Ready-to-use AI systems that plug directly into your business — no
              developers, no complexity. Just subscribe, connect, and grow.
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
    category: "Retena LeadPilot",
    title: "Personalized Deep Outreach System",  
    src: "/assets/outreach.webp",
    content: <DummyContent />,
    slug: "leadpilot",
  },
  {
    category: "Retena StudioGen",
    title: "AI Product Photography System",
    src: "/assets/highlights1.webp",
    content: <DummyContent />,
    slug: "studiogen",
  },
  {
    category: "Retena CloneCast",
    title: "Content Automation & Deployment System",
    src: "/assets/content.webp",
    content: <DummyContent />,
    slug: "clonecast",
  },

  {
    category: "Retena UGCPro",
    title: "AI UGC Ad Creation & Deployment System",
    src: "/assets/ugc.webp",
    content: <DummyContent />,
    slug: "ugcpro",
  },
  {
    category: "Retena ConvertFlow",
    title: "AI Lead Conversion System",
    src: "/assets/lead.webp",
    content: <DummyContent />,
    slug: "convertflow",
  },
];

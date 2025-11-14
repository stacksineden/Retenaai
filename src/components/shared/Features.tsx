import { Timeline } from "./Timeline";

const Features = () => {


  const data = [
    {
      title: "Submission",
      content: (
        <div>
          <p className="mb-8 text-base md:text-lg text-white">
            <span className="font-semibold text-[#FCA311]">
              Step 1: Upload & Kickoff
            </span>{" "}
            <br />
            We start the process right after payment. You simply share your
            brand assets — product photos, reference images, or design lookbooks
            — via your secure Drive link. Our creative team reviews your
            submission and sets up your workspace for production. For
            higher-tier clients, we also schedule a 1:1 discovery call to
            understand your brand story, tone, and visual goals before
            production begins.
            <br />
            🟣{" "}
            <span className="text-[#FCA311] font-semibold">
              Applies to: Starter, Growth, and Pro Packages
            </span>
          </p>
          <div className="grid grid-cols-1 gap-4">
            <img
              src="/assets/sup2.webp"
              alt="hero template"
              className="h-full w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Creation",
      content: (
        <div>
          <p className="mb-8 text-base md:text-lg text-white">
            <span className="font-semibold text-[#FCA311]">
              Step 2: Creative Production & Delivery
            </span>{" "}
            <br />
            Once we&#8217;ve received your assets, our AI creative team gets to
            work. We transform your uploads into studio-quality visuals —
            complete with AI retouching, professional lighting, and
            brand-realistic styling. If you&#8217;re on the Growth or Pro plan,
            this phase also includes story-based captions, copywriting, and
            video commercial creation for each product. When complete, your
            finished visuals and content are uploaded back to your shared Drive
            folder — ready to post or promote.
            <br />
            <span className="text-[#FCA311] font-semibold">
              🟪 Applies to: Starter (images only), Growth (images + captions +
              video), Pro (full creative suite)
            </span>
          </p>
          <div className="grid grid-cols-1 gap-4">
            <img
              src="/assets/sup3.webp"
              alt="hero template"
              className="h-full w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Support & Optimization",
      content: (
        <div>
          <p className="mb-8 text-base md:text-lg text-white">
            <span className="font-semibold text-[#FCA311]">
              Step 3: Systems, Handover & Ongoing Support
            </span>{" "}
            <br />
            For our Pro clients, we take it a step further — delivering your
            custom AI visual system, content automation setup, and even ad
            campaign integrations. We&#8217;ll onboard your staff, hand over
            your assets, and ensure everything runs smoothly. From there, you
            can scale your visuals, automate posting, and maintain consistent
            content without manual work.
            <br />
            <span className="text-[#FCA311] font-semibold">
              🟡 Applies to: Pro Package Only
            </span>
          </p>
          <div className="grid grid-cols-1 gap-4">
            <img
              src="/assets/sup1.webp"
              alt="hero template"
              className="h-full w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="container w-full">
      <div className="relative w-full overflow-clip">
        <Timeline data={data} />
      </div>
    </div>
  );
};

export default Features;



import { InlineWidget } from "react-calendly";
import { BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";

const BrandingRequest = () => {
  return (
    <>
      <div className="w-full bg-black flex justify-center items-center py-16 px-4">
        <div className="w-full md:w-[85%] lg:w-[80%] rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* LEFT CONTENT */}
          <div className="p-8 md:p-12 bg-[#0f0f0f] rounded-2xl flex flex-col gap-8 shadow-lg border border-white/10">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/assets/retenatextB.png"
                alt="brand"
                className="w-[160px] md:w-[180px] object-contain"
              />
            </Link>

            {/* Title */}
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                PRO Package Consultation
              </h1>
              <p className="text-white/70 text-base md:text-lg">
                Let’s explore how our high-end AI creative solutions can elevate
                your fashion brand to a premium, scalable level.
              </p>
            </div>

            {/* Process */}
            <div className="flex flex-col gap-6">
              {/* Step 1 */}
              <div className="flex gap-3">
                <BadgeCheck className="text-[#FCA311] mt-1" />
                <div>
                  <h2 className="text-white font-semibold text-lg">
                    Step 1 — Discovery & Strategy Call
                  </h2>
                  <p className="text-white/70 text-[15px] leading-relaxed">
                    Share your goals and current visual challenges. We’ll help
                    you outline the creative direction, brand tone, and
                    technical needs for your AI-powered campaign or visual
                    production.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-3">
                <BadgeCheck className="text-[#FCA311] mt-1" />
                <div>
                  <h2 className="text-white font-semibold text-lg">
                    Step 2 — Tailored Proposal & Investment Plan
                  </h2>
                  <p className="text-white/70 text-[15px] leading-relaxed">
                    After the consultation, you’ll receive a customized proposal
                    detailing deliverables, timelines, investment, and a
                    brand-aligned creative roadmap.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-3">
                <BadgeCheck className="text-[#FCA311] mt-1" />
                <div>
                  <h2 className="text-white font-semibold text-lg">
                    Step 3 — Collaboration & Execution
                  </h2>
                  <p className="text-white/70 text-[15px] leading-relaxed">
                    Once approved, you gain access to your dedicated
                    collaboration hub. Share references, track progress, and
                    receive AI-driven visual outputs optimized for campaigns,
                    catalogs, and ads.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL (CALENDLY FORM) */}
          <div className="rounded-2xl bg-[#0f0f0f] border border-white/10 p-6 md:p-10 shadow-lg">
            <div className="mb-6">
              <p className="text-white text-2xl font-bold">
                Book a Consultation
              </p>
              <p className="text-white/70 text-sm">
                Select a time below to schedule your strategy session.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden">
              <InlineWidget url="https://calendly.com/retenaaistacksineden/30min" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandingRequest;



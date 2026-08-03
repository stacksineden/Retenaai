import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { PROCESS } from "../../data/content";
import { StaggerGroup, StaggerItem } from "../Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Process() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 75%", "end 60%"],
  });
  const lineScale = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <section id="how-it-works" className="relative bg-white py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow={PROCESS.eyebrow}
          title={PROCESS.headline}
          body="No briefs to write, no creator calendars to manage, no production queue to chase."
        />

        <div ref={trackRef} className="relative mx-auto mt-16 max-w-3xl">
          {/* Rail */}
          <div
            aria-hidden
            className="absolute left-[27px] top-2 hidden h-[calc(100%-1rem)] w-px bg-navy/10 sm:block"
          >
            <motion.div
              className="h-full w-full origin-top gradient-amber"
              style={{ scaleY: lineScale }}
            />
          </div>

          <StaggerGroup className="space-y-10" stagger={0.12}>
            {PROCESS.steps.map((step) => (
              <StaggerItem key={step.step}>
                <div className="group relative flex gap-5 sm:gap-8">
                  <div className="relative z-10 shrink-0">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl border border-navy/10 bg-white font-display text-sm font-bold text-navy shadow-sm transition-all duration-300 group-hover:border-amber group-hover:bg-amber group-hover:text-ink group-hover:shadow-amber-glow">
                      {step.step}
                    </span>
                  </div>

                  <div className="flex-1 rounded-2xl border border-transparent p-1 pt-2.5 transition-colors duration-300">
                    <h3 className="font-display text-xl font-semibold text-navy">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-navy/60">
                      {step.body}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        {/* Weekly rhythm strip */}
        <StaggerGroup className="mx-auto mt-16 grid max-w-4xl gap-px overflow-hidden rounded-2xl bg-navy/10 sm:grid-cols-3">
          {[
            {
              day: "Every Monday",
              text: "Three new concepts land, ready to upload.",
            },
            {
              day: "Within 48 hours",
              text: "Hook variants cut on anything that wins.",
            },
            {
              day: "Month end",
              text: "One-page log: what tested, what won, what's next.",
            },
          ].map((item) => (
            <StaggerItem key={item.day}>
              <div className="h-full bg-white p-6 transition-colors hover:bg-navy-50/60">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-600">
                  {item.day}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-navy/65">
                  {item.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

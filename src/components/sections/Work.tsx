import { Info } from "lucide-react";
import { WORK_SAMPLES_NOTE } from "../../data/content";
import { WORK_SAMPLES } from "../../data/media";
import { MediaSlot } from "../MediaSlot";
import { Reveal, StaggerGroup, StaggerItem } from "../Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Work() {
  return (
    <section id="work" className="relative bg-navy-50/40 py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Work"
          title="Concepts, not templates."
          body="Angles are pulled from what's already working in the account and what competitors are shipping that the client isn't. Here's the kind of thing that lands on a Monday."
        />

        {/* Masonry: the samples are a mix of 9:16, 3:4 and 1:1, so a fixed
            grid would either crop them or leave ragged rows. */}
        <StaggerGroup
          className="mt-16 columns-2 gap-4 md:columns-3 md:gap-6"
          stagger={0.07}
        >
          {WORK_SAMPLES.map((sample, i) => (
            <StaggerItem key={i} className="mb-4 break-inside-avoid md:mb-6">
              <figure className="group relative">
                <MediaSlot
                  asset={sample}
                  ratio={sample.ratio ?? "9:16"}
                  placeholderLabel={sample.angle}
                  className="shadow-premium ring-1 ring-navy/8 transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[0_24px_60px_rgba(20,33,61,0.18)]"
                />

                {/* Caption overlay */}
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 rounded-b-2xl bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 pt-12 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-amber">
                    {sample.angle}
                  </p>
                  <p className="mt-1 text-sm font-medium leading-snug text-white">
                    {sample.title}
                  </p>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 flex max-w-2xl items-start gap-3 rounded-2xl border border-navy/8 bg-white p-5">
            <Info size={16} className="mt-0.5 shrink-0 text-navy/35" />
            <p className="text-xs leading-relaxed text-navy/50">
              {WORK_SAMPLES_NOTE}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

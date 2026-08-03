import { motion } from "framer-motion";
import { CalendarDays, FileText, Zap } from "lucide-react";
import { OFFER } from "../../data/content";
import { HOOK_VARIANTS } from "../../data/media";
import { MediaSlot } from "../MediaSlot";
import { Reveal, StaggerGroup, StaggerItem } from "../Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const ICONS = [CalendarDays, Zap, FileText];

export function Offer() {
  return (
    <section id="offer" className="relative bg-navy-50/40 py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow={OFFER.eyebrow}
          title={OFFER.headline}
          body={OFFER.body}
        />

        <StaggerGroup className="mt-16 grid gap-6 md:grid-cols-3">
          {OFFER.points.map((point, i) => {
            const Icon = ICONS[i] ?? CalendarDays;
            return (
              <StaggerItem key={point.title}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-navy/8 bg-white p-8 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-premium">
                  {/* Amber wash on hover */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(252,163,17,0.18) 0%, rgba(252,163,17,0) 70%)",
                    }}
                  />

                  <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-navy text-amber transition-transform duration-300 group-hover:scale-110">
                    <Icon size={20} />
                  </span>

                  <h3 className="relative mt-6 font-display text-xl font-semibold text-navy">
                    {point.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-navy/60">
                    {point.body}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        {/* Hook variant explainer */}
        <Reveal className="mt-8" delay={0.1}>
          <div className="overflow-hidden rounded-3xl bg-navy text-white shadow-premium">
            <div className="grid items-center gap-10 p-8 md:grid-cols-[1fr_1.1fr] md:p-12">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-amber/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-amber">
                  Included at every tier
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold text-white md:text-3xl">
                  One winner becomes five placements in 48 hours.
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/60">
                  Same body, new first three seconds. Hook variants reset
                  delivery signals without rebuilding the creative — so the ad
                  that's already working keeps working, instead of decaying while
                  you brief a replacement.
                </p>
                <p className="mt-5 rounded-xl border border-white/10 bg-white/[0.04] p-4 text-xs leading-relaxed text-white/50">
                  <strong className="font-semibold text-white/75">
                    What counts as a winner:
                  </strong>{" "}
                  a creative that beats your account's 30-day average CPA or ROAS
                  over at least 3 days and $300 of spend. Up to two qualifying
                  creatives per month.
                </p>
              </div>

              <div className="grid grid-cols-4 gap-3">
                {HOOK_VARIANTS.map((asset, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <MediaSlot
                      asset={asset}
                      ratio="9:16"
                      rounded="rounded-xl"
                      placeholderLabel={`Hook ${i + 1}`}
                      className="ring-1 ring-white/10"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

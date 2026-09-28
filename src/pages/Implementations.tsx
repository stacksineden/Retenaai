import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { ImplementationsForm } from "../components/ImplementationsForm";
import { Reveal, StaggerGroup, StaggerItem } from "../components/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import {
  HERO,
  HOW_IT_WORKS,
  PACKAGES,
  PROOF,
  QUOTE,
  RECENT_BUILDS,
  STAGES,
  WHO_FOR,
  type NeedOption,
} from "../data/implementations";
import { ROUTE_META } from "../data/seo";
import { usePageMeta } from "../hooks/usePageMeta";

const EASE = [0.16, 1, 0.3, 1] as const;

const scrollToQuote = () =>
  document.getElementById("quote")?.scrollIntoView({ behavior: "smooth", block: "start" });

/**
 * Unlisted page — see src/data/implementations.ts for the rules. Rendered with
 * its own minimal header/footer (src/components/Layout.tsx) so none of the main
 * site's product, pricing or navigation appears here.
 */
export function Implementations() {
  usePageMeta(ROUTE_META.implementations);
  const [need, setNeed] = useState<NeedOption | null>(null);

  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="gradient-hero relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-page relative">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="text-balance font-display text-4xl font-semibold leading-[1.06] text-navy sm:text-5xl md:text-6xl"
            >
              Creative gets attention.{" "}
              <span className="text-gradient-amber">The system catches it.</span>
            </motion.h1>

            {HERO.body.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.12 + i * 0.08, ease: EASE }}
                className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/65"
              >
                {p}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32, ease: EASE }}
              className="mt-10"
            >
              <button
                type="button"
                onClick={scrollToQuote}
                className="group inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-white shadow-premium transition-all hover:-translate-y-0.5 hover:bg-navy-700 focus-ring md:text-base"
              >
                {HERO.cta}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------------- How this works (renders once copy is supplied) ---------------- */}
      {HOW_IT_WORKS.length > 0 && (
        <section className="bg-white py-24 md:py-32">
          <div className="container-page">
            <SectionHeading eyebrow="How this works" title="How this works" />
            <StaggerGroup className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-4">
              {HOW_IT_WORKS.map((step, i) => (
                <StaggerItem key={step.title}>
                  <div className="h-full rounded-3xl border border-navy/10 bg-white p-7">
                    <span className="font-display text-sm font-bold text-amber-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 font-display text-lg font-semibold text-navy">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy/60">{step.body}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>
      )}

      {/* ---------------- What we build ---------------- */}
      <section className="bg-navy-50/40 py-24 md:py-32">
        <div className="container-page">
          <SectionHeading eyebrow="What we build" title="What we build" />
          <StaggerGroup className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2" stagger={0.08}>
            {STAGES.map((stage) => (
              <StaggerItem key={stage.label}>
                <div className="h-full rounded-3xl border border-navy/10 bg-white p-7 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-600">
                    {stage.label}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-navy">{stage.line}</h3>
                  <ul className="mt-6 space-y-4">
                    {stage.items.map((item) => (
                      <li key={item.title} className="flex items-start gap-3">
                        <span className="mt-1 grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full bg-amber/15 text-amber-600">
                          <Check size={11} strokeWidth={3} />
                        </span>
                        <p className="text-sm leading-relaxed text-navy/65">
                          <strong className="font-semibold text-navy">{item.title}</strong>{" "}
                          {item.body}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ---------------- Packages ---------------- */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-page">
          <SectionHeading
            title="Where most businesses start"
            body="Every build is quoted, but most start from one of these."
          />
          <StaggerGroup className="mt-14 grid gap-6 lg:grid-cols-3" stagger={0.08}>
            {PACKAGES.map((pkg) => (
              <StaggerItem key={pkg.name}>
                <div className="flex h-full flex-col rounded-3xl border border-navy/10 bg-white p-7 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-premium">
                  <h3 className="font-display text-xl font-semibold text-navy">{pkg.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/55">{pkg.for}</p>
                  <ul className="mt-7 flex-1 space-y-3">
                    {pkg.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-navy/70">
                        <span className="mt-0.5 grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full bg-amber/15 text-amber-600">
                          <Check size={11} strokeWidth={3} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => {
                      setNeed(pkg.name);
                      scrollToQuote();
                    }}
                    className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border border-navy/15 bg-white px-6 py-3 text-sm font-semibold text-navy transition-all hover:-translate-y-0.5 hover:border-navy/35 hover:shadow-premium focus-ring"
                  >
                    Get a quote
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal delay={0.1}>
            <p className="mt-8 text-center text-sm text-navy/45">
              Need just one piece? Every item above is available on its own.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Recent builds (live sites, no results claimed) ---------------- */}
      <section className="bg-navy-50/40 py-24 md:py-32">
        <div className="container-page">
          <SectionHeading
            eyebrow="Recent builds"
            title="Live, and taking visitors now"
            body="Open either one and click around."
          />
          <StaggerGroup className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2" stagger={0.1}>
            {RECENT_BUILDS.map((b) => (
              <StaggerItem key={b.url}>
                <a
                  href={b.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full overflow-hidden rounded-3xl border border-navy/10 bg-white transition-all duration-400 hover:-translate-y-1.5 hover:shadow-premium focus-ring"
                >
                  <div className="aspect-[16/9] overflow-hidden bg-navy">
                    <img
                      src={b.image}
                      alt={`${b.name} website`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-display text-lg font-semibold text-navy">{b.name}</h3>
                      <ArrowUpRight
                        size={18}
                        className="mt-1 shrink-0 text-navy/35 transition-colors group-hover:text-amber-600"
                      />
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-navy/60">{b.description}</p>
                    <p className="mt-3 text-xs font-medium text-amber-600">{b.domain}</p>
                  </div>
                </a>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ---------------- Who this is for (renders once copy is supplied) ---------------- */}
      {WHO_FOR.length > 0 && (
        <section className="bg-white py-24 md:py-32">
          <div className="container-page">
            <SectionHeading title="Who this is for" />
            <ul className="mx-auto mt-10 max-w-2xl space-y-3">
              {WHO_FOR.map((line) => (
                <li key={line} className="flex items-start gap-2.5 text-navy/70">
                  <span className="mt-1 grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full bg-amber/15 text-amber-600">
                    <Check size={11} strokeWidth={3} />
                  </span>
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ---------------- Proof — renders nothing until real case studies exist ---------------- */}
      {PROOF.length > 0 && (
        <section className="bg-navy-50/40 py-24 md:py-32">
          <div className="container-page">
            <SectionHeading title="Proof" />
            <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
              {PROOF.map((p) => (
                <div key={p.title} className="rounded-3xl border border-navy/10 bg-white p-7">
                  <h3 className="font-display text-lg font-semibold text-navy">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/60">{p.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------------- Quote + form ---------------- */}
      <section id="quote" className="scroll-mt-20 bg-white py-24 md:py-32">
        <div className="container-page">
          <SectionHeading title={QUOTE.heading} />
          <div className="mx-auto mt-12 max-w-2xl">
            <ImplementationsForm need={need} onNeedChange={setNeed} />
          </div>
        </div>
      </section>
    </>
  );
}

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

type Section = {
  id: string;
  heading: string;
  body: ReactNode;
};

type Props = {
  title: string;
  intro: string;
  updated: string;
  sections: Section[];
};

export function LegalLayout({ title, intro, updated, sections }: Props) {
  return (
    <>
      <section className="gradient-hero relative overflow-hidden pt-32 pb-14 md:pt-40 md:pb-16">
        <div className="container-page relative">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600"
            >
              Legal
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
              className="mt-4 font-display text-4xl font-semibold leading-[1.1] text-navy sm:text-5xl"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16, ease: EASE }}
              className="mt-5 max-w-2xl text-base leading-relaxed text-navy/60"
            >
              {intro}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.26 }}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs text-navy/50 ring-1 ring-navy/8"
            >
              Last updated {updated}
            </motion.p>
          </div>
        </div>
      </section>

      <section className="bg-white pb-24 md:pb-32">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">
            {/* Sticky contents */}
            <aside className="hidden lg:block">
              <nav className="sticky top-28">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-navy/35">
                  Contents
                </p>
                <ul className="mt-4 space-y-2.5 border-l border-navy/10 pl-4">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="block text-sm leading-snug text-navy/50 transition-colors hover:text-amber-600"
                      >
                        {s.heading}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            <div className="max-w-3xl">
              {sections.map((section, i) => (
                <Reveal key={section.id} delay={Math.min(i * 0.03, 0.2)} y={18}>
                  <div
                    id={section.id}
                    className="scroll-mt-28 border-b border-navy/8 py-8 first:pt-0 last:border-b-0"
                  >
                    <h2 className="font-display text-xl font-semibold text-navy">
                      {section.heading}
                    </h2>
                    <div className="mt-4 space-y-4 text-sm leading-relaxed text-navy/65 [&_a]:font-medium [&_a]:text-navy [&_a]:underline [&_a]:decoration-amber [&_a]:decoration-2 [&_a]:underline-offset-4 [&_li]:pl-1 [&_strong]:font-semibold [&_strong]:text-navy [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
                      {section.body}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

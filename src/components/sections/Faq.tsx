import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQ, SITE } from "../../data/content";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-white py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="FAQ"
          title="The questions worth asking first."
        />

        <div className="mx-auto mt-14 max-w-3xl">
          {FAQ.map((item, i) => {
            const isOpen = open === i;

            return (
              <Reveal key={item.q} delay={i * 0.04} y={16}>
                <div className="border-b border-navy/10">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-start justify-between gap-6 py-6 text-left focus-ring"
                  >
                    <span
                      className={`font-display text-lg font-semibold transition-colors ${
                        isOpen
                          ? "text-navy"
                          : "text-navy/75 group-hover:text-navy"
                      }`}
                    >
                      {item.q}
                    </span>

                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      className={`mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors ${
                        isOpen
                          ? "bg-amber text-ink"
                          : "bg-navy/6 text-navy/50 group-hover:bg-navy/10"
                      }`}
                    >
                      <Plus size={16} />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <p className="pb-7 pr-14 text-sm leading-relaxed text-navy/60">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-12 text-center text-sm text-navy/50">
            Something not covered?{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="font-semibold text-navy underline decoration-amber decoration-2 underline-offset-4 transition-colors hover:text-amber-600"
            >
              Email us directly
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}

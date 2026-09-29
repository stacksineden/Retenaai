import { AdGrid } from "../components/site/AdGrid";
import { CaseStudyCard } from "../components/site/CaseStudyCards";
import { ClientStrip } from "../components/site/ClientStrip";
import { Reviews } from "../components/site/Reviews";
import { WhatsAppCta } from "../components/site/WhatsAppCta";
import { Reveal } from "../components/Reveal";
import { caseStudies, reviews } from "../content";
import { HERO } from "../data/home";
import { ROUTE_META } from "../data/seo";
import { WORK_PAGE } from "../data/work";
import { usePageMeta } from "../hooks/usePageMeta";
import { WHATSAPP_MESSAGES } from "../lib/whatsapp";

/**
 * The full portfolio: case studies, ad creative and reviews.
 *
 * Every section is data-driven and says so when it's empty, rather than being
 * padded with placeholders.
 */
export function Work() {
  usePageMeta(ROUTE_META.work);

  return (
    <>
      <section className="gradient-hero pt-28 pb-16 md:pt-36">
        <div className="container-page max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy/40">
            {WORK_PAGE.eyebrow}
          </p>
          <h1 className="mt-4 text-balance font-display text-3xl font-semibold leading-tight text-navy sm:text-4xl md:text-5xl">
            {WORK_PAGE.heading}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-navy/65 sm:text-lg">
            {WORK_PAGE.intro}
          </p>
          <ClientStrip label={HERO.proofLabel} className="mt-12" />
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="container-page">
          <h2 className="font-display text-2xl font-semibold text-navy sm:text-3xl">
            {WORK_PAGE.caseStudies.heading}
          </h2>

          {caseStudies.length > 0 ? (
            <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((study) => (
                <li key={study.slug}>
                  <CaseStudyCard study={study} />
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-6 max-w-xl text-base text-navy/55">
              {WORK_PAGE.caseStudies.empty}
            </p>
          )}
        </div>
      </section>

      <section className="border-t border-navy/8 bg-white py-20 md:py-24">
        <div className="container-page">
          <h2 className="font-display text-2xl font-semibold text-navy sm:text-3xl">
            {WORK_PAGE.ads.heading}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy/60">
            {WORK_PAGE.ads.intro}
          </p>
          <AdGrid />
        </div>
      </section>

      <section className="border-t border-navy/8 bg-white py-20 md:py-24">
        <div className="container-page">
          <h2 className="font-display text-2xl font-semibold text-navy sm:text-3xl">
            {WORK_PAGE.reviews.heading}
          </h2>
          {reviews.length > 0 ? (
            <div className="mt-10">
              <Reviews limit={12} />
            </div>
          ) : (
            <p className="mt-6 max-w-xl text-base text-navy/55">
              {WORK_PAGE.reviews.empty}
            </p>
          )}
        </div>
      </section>

      <section className="bg-navy py-20 text-white md:py-24">
        <div className="container-page max-w-2xl text-center">
          <Reveal>
            <h2 className="text-balance font-display text-2xl font-semibold leading-tight text-white sm:text-3xl">
              {WORK_PAGE.cta.heading}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/70">
              {WORK_PAGE.cta.body}
            </p>
            <div className="mt-8 flex justify-center">
              <WhatsAppCta
                message={WHATSAPP_MESSAGES.audit}
                event="audit_click_final"
                variant="primary"
              >
                {WORK_PAGE.cta.button}
              </WhatsAppCta>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { AdReel } from "../components/site/AdReel";
import { AuditForm } from "../components/site/AuditForm";
import { CaseStudyCards } from "../components/site/CaseStudyCards";
import { ClientStrip } from "../components/site/ClientStrip";
import { LandingPagePreview } from "../components/site/LandingPagePreview";
import { HeroShowcase } from "../components/site/HeroShowcase";
import { DashboardFunnel } from "../components/site/DashboardFunnel";
import { HeroProofStrip, Reviews } from "../components/site/Reviews";
import { WhatsAppCta } from "../components/site/WhatsAppCta";
import { Faq } from "../components/sections/Faq";
import { Reveal } from "../components/Reveal";
import { caseStudies, reviews } from "../content";
import {
  AUDIT,
  DASHBOARD,
  FAQ,
  FINAL_CTA,
  FORM,
  HERO,
  HOW_WE_WORK,
  LAYERS,
  LAYERS_INTRO,
  PROBLEM,
  REFER,
  REVIEWS_SECTION,
  WHO_ITS_FOR,
  WONT_DO,
  WORK_SECTION,
} from "../data/home";
import { ROUTE_META } from "../data/seo";
import { usePageMeta } from "../hooks/usePageMeta";
import { WHATSAPP_MESSAGES } from "../lib/whatsapp";

export function Landing() {
  usePageMeta(ROUTE_META.home);

  return (
    <>
      {/* 1. Hero */}
      <section className="gradient-hero relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container-page">
          <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
            <div className="max-w-3xl">
              <h1 className="text-balance font-display text-[2.1rem] font-semibold leading-[1.08] text-navy sm:text-5xl md:text-6xl">
                Get seen. Get chosen.{" "}
                <span className="text-gradient-amber">Get paid.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy/65 md:text-lg">
                {HERO.subhead}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <WhatsAppCta
                  message={WHATSAPP_MESSAGES.audit}
                  event="audit_click_hero"
                >
                  {HERO.primaryButton}
                </WhatsAppCta>
                <a
                  href="#our-work"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-navy/15 bg-white px-7 text-sm font-semibold text-navy transition-all hover:-translate-y-0.5 hover:border-navy/35 focus-ring md:text-base"
                >
                  {HERO.secondaryLink}
                  <ArrowRight size={16} />
                </a>
              </div>

              {/* Renders nothing until a review has confirmed permission. */}
              <HeroProofStrip />

              <ClientStrip label={HERO.proofLabel} className="mt-12" />
            </div>

            <HeroShowcase />
          </div>
        </div>
      </section>

      {/* 2. The problem */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-page max-w-4xl">
          <h2 className="text-balance font-display text-2xl font-semibold leading-tight text-navy sm:text-3xl md:text-4xl">
            {PROBLEM.heading}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-navy/65">
            {PROBLEM.body}
          </p>

          <ul className="mt-8 space-y-5">
            {PROBLEM.points.map((p) => (
              <li key={p.title} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber" />
                <p className="text-base leading-relaxed text-navy/70">
                  <strong className="font-semibold text-navy">{p.title}</strong>{" "}
                  {p.body}
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-8 border-l-2 border-amber pl-4 text-base font-medium text-navy">
            {PROBLEM.closing}
          </p>
        </div>
      </section>

      {/* 3. How it works — the three layers */}
      <section
        id="how-it-works"
        className="scroll-mt-20 bg-navy-50/40 py-20 md:py-28"
      >
        <div className="container-page">
          <div className="max-w-3xl">
            <h2 className="text-balance font-display text-2xl font-semibold leading-tight text-navy sm:text-3xl md:text-4xl">
              {LAYERS_INTRO.heading}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy/65">
              {LAYERS_INTRO.intro}
            </p>
          </div>

          <div className="mt-12 space-y-6">
            {LAYERS.map((layer) => (
              <Reveal key={layer.id} y={18}>
                <article className="rounded-3xl border border-navy/10 bg-white p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-600">
                    {layer.label}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-navy sm:text-2xl">
                    {layer.name}
                  </h3>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy/65">
                    {layer.body}
                  </p>

                  {layer.listIntro && (
                    <p className="mt-4 text-sm font-medium text-navy/70">
                      {layer.listIntro}
                    </p>
                  )}

                  {layer.points.length > 0 && (
                    <ul className="mt-3 space-y-2.5">
                      {layer.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2.5 text-sm text-navy/70"
                        >
                          <span className="mt-0.5 grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full bg-amber/15 text-amber-600">
                            <Check size={11} strokeWidth={3} />
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}

                  {layer.closing && (
                    <p className="mt-4 text-base leading-relaxed text-navy/65">
                      {layer.closing}
                    </p>
                  )}

                  {/* Proof: ad reel on layer 1. Nothing renders until ads are labelled. */}
                  {layer.id === "get-seen" && (
                    <div className="mt-8">
                      <AdReel />
                    </div>
                  )}

                  {/* Proof: a page we actually built, on layer 2. */}
                  {layer.id === "somewhere-to-land" && <LandingPagePreview />}

                  {layer.note && (
                    <p className="mt-6 rounded-2xl bg-navy-50 p-4 text-sm leading-relaxed text-navy/60">
                      {layer.note}
                    </p>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The dashboard */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <h2 className="text-balance font-display text-2xl font-semibold leading-tight text-navy sm:text-3xl md:text-4xl">
              {DASHBOARD.heading}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy/65">
              {DASHBOARD.body}
            </p>
          </div>
          <DashboardFunnel />
        </div>
      </section>

      {/* 5. What clients say — hidden until reviews exist */}
      {reviews.length > 0 && (
        <section className="bg-navy-50/40 py-20 md:py-28">
          <div className="container-page">
            <h2 className="font-display text-2xl font-semibold text-navy sm:text-3xl md:text-4xl">
              {REVIEWS_SECTION.heading}
            </h2>
            <div className="mt-10">
              <Reviews />
            </div>
          </div>
        </section>
      )}

      {/* 6. Our work — hidden until a case study is published */}
      <section id="our-work" className="scroll-mt-20 bg-white py-20 md:py-28">
        <div className="container-page">
          <h2 className="font-display text-2xl font-semibold text-navy sm:text-3xl md:text-4xl">
            {WORK_SECTION.heading}
          </h2>

          {caseStudies.length > 0 ? (
            <>
              <div className="mt-10">
                <CaseStudyCards />
              </div>
              <Link
                to="/work"
                className="mt-8 inline-flex min-h-[48px] items-center gap-2 text-sm font-semibold text-navy underline decoration-amber decoration-2 underline-offset-4"
              >
                {WORK_SECTION.seeAll}
                <ArrowRight size={16} />
              </Link>
            </>
          ) : (
            <p className="mt-6 max-w-xl text-base text-navy/55">
              Case studies go live here as clients approve them.
            </p>
          )}
        </div>
      </section>

      {/* 7. The free audit */}
      <section
        id="free-audit"
        className="scroll-mt-20 bg-navy py-20 text-white md:py-28"
      >
        <div className="container-page max-w-3xl">
          <h2 className="text-balance font-display text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl">
            {AUDIT.heading}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/65">
            {AUDIT.body}
          </p>

          <p className="mt-8 text-sm font-semibold text-amber">
            {AUDIT.getLabel}
          </p>
          <ul className="mt-4 space-y-3">
            {AUDIT.get.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-base leading-relaxed text-white/80"
              >
                <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-amber/20 text-amber">
                  <Check size={12} strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-8 text-base leading-relaxed text-white/70">
            <span className="font-semibold text-white">{AUDIT.isntLabel}</span>{" "}
            {AUDIT.isnt}
          </p>

          <div className="mt-10">
            <WhatsAppCta
              message={WHATSAPP_MESSAGES.audit}
              event="audit_click_section"
            >
              {AUDIT.button}
            </WhatsAppCta>
          </div>

          <p className="mt-5 text-sm text-white/55">
            {AUDIT.directRoute}{" "}
            <WhatsAppCta
              message={WHATSAPP_MESSAGES.ads}
              event="ads_only_click"
              variant="plain"
              className="!text-sm !text-amber !decoration-amber"
            >
              {AUDIT.directRouteLink}
            </WhatsAppCta>
          </p>
        </div>
      </section>

      {/* 8. Who it's for */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-page">
          <div className="max-w-3xl">
            <h2 className="text-balance font-display text-2xl font-semibold leading-tight text-navy sm:text-3xl md:text-4xl">
              {WHO_ITS_FOR.heading}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy/65">
              {WHO_ITS_FOR.body}
            </p>
          </div>

          <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {WHO_ITS_FOR.points.map((p) => (
              <li
                key={p.title}
                className="rounded-2xl border border-navy/10 bg-white p-5"
              >
                <h3 className="font-display text-base font-semibold text-navy">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/60">
                  {p.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 9. How we work together */}
      <section className="bg-navy-50/40 py-20 md:py-28">
        <div className="container-page max-w-4xl">
          <h2 className="font-display text-2xl font-semibold text-navy sm:text-3xl md:text-4xl">
            {HOW_WE_WORK.heading}
          </h2>

          <ol className="mt-10 space-y-5">
            {HOW_WE_WORK.steps.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-navy font-display text-sm font-bold text-amber">
                  {i + 1}
                </span>
                <p className="pt-1.5 text-base leading-relaxed text-navy/70">
                  <strong className="font-semibold text-navy">
                    {step.title}
                  </strong>{" "}
                  {step.body}
                </p>
              </li>
            ))}
          </ol>

          <p className="mt-8 rounded-2xl bg-white p-5 text-base font-medium text-navy">
            {HOW_WE_WORK.below}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-navy/60">
            {HOW_WE_WORK.oneLayer}
          </p>
        </div>
      </section>

      {/* 10. What we won't do */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-page max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-navy sm:text-3xl md:text-4xl">
            {WONT_DO.heading}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-navy/65">
            {WONT_DO.body}
          </p>
        </div>
      </section>

      {/* 11. Refer a business */}
      <section id="refer" className="scroll-mt-20 bg-navy-50/40 py-20 md:py-28">
        <div className="container-page max-w-3xl">
          <h2 className="text-balance font-display text-2xl font-semibold leading-tight text-navy sm:text-3xl md:text-4xl">
            {REFER.heading}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-navy/65">
            {REFER.body}
          </p>
          <div className="mt-8">
            <WhatsAppCta
              message={WHATSAPP_MESSAGES.refer}
              event="refer_click"
              variant="primary"
            >
              {REFER.button}
            </WhatsAppCta>
          </div>
          <p className="mt-4 text-xs text-navy/45">{REFER.smallPrint}</p>
        </div>
      </section>

      {/* 12. FAQ */}
      <Faq items={FAQ} heading="Questions people ask." contactNote={false} />

      {/* 13. Final call to action */}
      <section className="bg-navy py-20 text-white md:py-28">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-balance font-display text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl">
            {FINAL_CTA.heading}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/65">
            {FINAL_CTA.body}
          </p>
          <div className="mt-8 flex justify-center">
            <WhatsAppCta
              message={WHATSAPP_MESSAGES.audit}
              event="audit_click_final"
            >
              {FINAL_CTA.button}
            </WhatsAppCta>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-page max-w-2xl">
          <h2 className="font-display text-2xl font-semibold text-navy sm:text-3xl">
            {FORM.heading}
          </h2>
          <div className="mt-8">
            <AuditForm />
          </div>
        </div>
      </section>
    </>
  );
}

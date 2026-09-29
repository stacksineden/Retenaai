import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { ReviewCard } from "../components/site/Reviews";
import { WhatsAppCta } from "../components/site/WhatsAppCta";
import { Reveal } from "../components/Reveal";
import { caseStudies, reviewById } from "../content";
import { caseStudyMeta } from "../data/seo";
import { WORK_PAGE } from "../data/work";
import { usePageMeta } from "../hooks/usePageMeta";
import { WHATSAPP_MESSAGES } from "../lib/whatsapp";
import { NotFound } from "./NotFound";

/**
 * One case study. Unpublished slugs 404 rather than rendering a draft — the
 * published gate lives in src/content/index.ts, so this only ever sees
 * approved work.
 */
export function CaseStudy() {
  const { slug } = useParams();
  const study = caseStudies.find((c) => c.slug === slug);

  if (!study) return <NotFound />;
  return <CaseStudyBody slug={study.slug} />;
}

function CaseStudyBody({ slug }: { slug: string }) {
  const study = caseStudies.find((c) => c.slug === slug)!;
  const quote = reviewById(study.quote_id);
  usePageMeta(caseStudyMeta(study));

  return (
    <>
      <section className="gradient-hero pt-28 pb-14 md:pt-36">
        <div className="container-page max-w-3xl">
          <Link
            to="/work"
            className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-navy/55 hover:text-navy focus-ring rounded-sm"
          >
            <ArrowLeft size={16} />
            Back to our work
          </Link>

          <h1 className="mt-4 text-balance font-display text-3xl font-semibold leading-tight text-navy sm:text-4xl md:text-5xl">
            {study.client_name}
          </h1>

          <p className="mt-4 text-sm font-medium text-navy/50">
            {[study.city, ...study.layers].filter(Boolean).join(" · ")}
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container-page max-w-3xl">
          <dl className="space-y-10">
            {study.problem && (
              <Block term="The problem" description={study.problem} />
            )}
            {study.what_we_built && (
              <Block term="What we built" description={study.what_we_built} />
            )}
            {/* Only ever a measured figure from the client's own data. */}
            {study.result && <Block term="The result" description={study.result} />}
          </dl>

          {study.video && (
            <video
              src={study.video}
              controls
              preload="none"
              playsInline
              className="mt-12 aspect-video w-full rounded-2xl bg-navy object-cover"
              aria-label={`${study.client_name} — video`}
            >
              <track kind="captions" />
            </video>
          )}

          {study.screenshots.length > 0 && (
            <ul className="mt-12 space-y-8">
              {study.screenshots.map((shot) => (
                <li key={shot.src}>
                  <figure>
                    <img
                      src={shot.src}
                      alt={shot.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full rounded-2xl border border-navy/10"
                    />
                    {shot.caption && (
                      <figcaption className="mt-3 text-sm text-navy/50">
                        {shot.caption}
                      </figcaption>
                    )}
                  </figure>
                </li>
              ))}
            </ul>
          )}

          {quote && (
            <div className="mt-12">
              <ReviewCard review={quote} />
            </div>
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
                event="audit_click_case_study"
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

function Block({ term, description }: { term: string; description: string }) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-navy/40">
        {term}
      </dt>
      <dd className="mt-3 text-base leading-relaxed text-navy/75 sm:text-lg">
        {description}
      </dd>
    </div>
  );
}

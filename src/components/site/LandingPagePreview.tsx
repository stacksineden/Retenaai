import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { caseStudies } from "../../content";
import { LAYER_2_CASE_STUDY } from "../../data/home";
import { track } from "../../lib/track";

/**
 * A real page we built, shown under layer 2.
 *
 * The screenshot opens the live site, so a visitor can walk around a page we
 * actually shipped instead of taking our word for it. The case study is a
 * second link beside it.
 *
 * Renders nothing until a case study with a screenshot is published.
 */
export function LandingPagePreview() {
  const withShot = caseStudies.filter((c) => c.screenshots.length > 0);
  const study =
    withShot.find((c) => c.slug === LAYER_2_CASE_STUDY) ?? withShot[0];
  if (!study) return null;

  const shot = study.screenshots[0];
  const Frame = study.live_url ? "a" : "div";

  return (
    <figure className="mt-8">
      <Frame
        {...(study.live_url
          ? {
              href: study.live_url,
              target: "_blank",
              rel: "noopener noreferrer",
              onClick: () => track("live_site_click", { slug: study.slug }),
            }
          : {})}
        className="group block overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-premium focus-ring"
      >
        {/* A browser bar, so it reads as a page rather than a photo. */}
        <div className="flex items-center gap-1.5 border-b border-navy/8 bg-navy-50 px-4 py-2.5">
          <span className="h-2 w-2 rounded-full bg-navy/15" />
          <span className="h-2 w-2 rounded-full bg-navy/15" />
          <span className="h-2 w-2 rounded-full bg-navy/15" />
        </div>
        <img
          src={shot.src}
          alt={shot.alt}
          loading="lazy"
          decoding="async"
          className="w-full transition-transform duration-700 group-hover:scale-[1.02]"
        />
      </Frame>

      <figcaption className="mt-3 flex flex-wrap items-center gap-x-4 text-sm text-navy/55">
        <span>
          {study.client_name}
          {study.city && `, ${study.city}`}
        </span>

        {study.live_url && (
          <a
            href={study.live_url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("live_site_click", { slug: study.slug })}
            className="inline-flex min-h-[44px] items-center gap-1 font-semibold text-navy hover:text-amber-600 focus-ring rounded-sm"
          >
            Visit the live site
            <ExternalLink size={14} />
          </a>
        )}

        <Link
          to={`/work/${study.slug}`}
          onClick={() => track("case_study_view", { slug: study.slug, from: "layer-2" })}
          className="inline-flex min-h-[44px] items-center gap-1 font-semibold text-navy hover:text-amber-600 focus-ring rounded-sm"
        >
          See what we built
          <ArrowUpRight size={14} />
        </Link>
      </figcaption>
    </figure>
  );
}

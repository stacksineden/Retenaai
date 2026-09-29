import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "../../content";
import { track } from "../../lib/track";

/**
 * A real page we built, shown under layer 2.
 *
 * Pulled from the published case studies rather than a mockup, so what a
 * visitor sees under "somewhere to land" is a page that exists, with a link
 * to the story behind it. Renders nothing until a case study with a
 * screenshot is published.
 */
export function LandingPagePreview() {
  const study = caseStudies.find((c) => c.screenshots.length > 0);
  if (!study) return null;

  const shot = study.screenshots[0];

  return (
    <figure className="mt-8">
      <Link
        to={`/work/${study.slug}`}
        onClick={() => track("case_study_view", { slug: study.slug, from: "layer-2" })}
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
      </Link>

      <figcaption className="mt-3 flex flex-wrap items-center gap-x-2 text-sm text-navy/55">
        <span>
          {study.client_name}
          {study.city && `, ${study.city}`}
        </span>
        <span aria-hidden="true">·</span>
        <Link
          to={`/work/${study.slug}`}
          className="inline-flex min-h-[44px] items-center gap-1 font-semibold text-navy hover:text-amber-600 focus-ring rounded-sm"
        >
          See what we built
          <ArrowUpRight size={14} />
        </Link>
      </figcaption>
    </figure>
  );
}

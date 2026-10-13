import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { featuredCaseStudies, reviewById, type CaseStudy } from "../../content";
import { track } from "../../lib/track";

/**
 * Featured case study cards. Renders nothing until a case study is published —
 * no placeholder cards, no invented results.
 */
export function CaseStudyCards({ limit = 3 }: { limit?: number }) {
  const shown = featuredCaseStudies.slice(0, limit);
  if (shown.length === 0) return null;

  return (
    <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {shown.map((study) => (
        <li key={study.slug}>
          <CaseStudyCard study={study} />
        </li>
      ))}
    </ul>
  );
}

/**
 * The card is a container rather than one big link, because it holds two
 * destinations: the case study, and the live site itself. Nesting an anchor
 * inside an anchor isn't valid, and a visitor who wants to walk around the
 * real site shouldn't have to go through us first.
 */
export function CaseStudyCard({ study }: { study: CaseStudy }) {
  const shot = study.screenshots[0];
  const quote = reviewById(study.quote_id);

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-navy/10 bg-white transition-all duration-400 hover:-translate-y-1.5 hover:shadow-premium">
      {shot && (
        <Link
          to={`/work/${study.slug}`}
          onClick={() => track("case_study_view", { slug: study.slug })}
          className="block aspect-[16/10] overflow-hidden bg-navy focus-ring"
          aria-label={`${study.client_name} — what we built`}
        >
          <img
            src={shot.src}
            alt={shot.alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </Link>
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold text-navy">
            <Link
              to={`/work/${study.slug}`}
              onClick={() => track("case_study_view", { slug: study.slug })}
              className="focus-ring rounded-sm hover:text-amber-600"
            >
              {study.client_name}
              {study.city && <span className="text-navy/50">, {study.city}</span>}
            </Link>
          </h3>
          <ArrowUpRight
            size={18}
            className="mt-1 shrink-0 text-navy/30 transition-colors group-hover:text-amber-600"
          />
        </div>

        {study.problem && (
          <p className="mt-3 text-sm leading-relaxed text-navy/60">
            <span className="font-semibold text-navy/80">The problem:</span>{" "}
            {study.problem}
          </p>
        )}
        {study.what_we_built && (
          <p className="mt-2 text-sm leading-relaxed text-navy/60">
            <span className="font-semibold text-navy/80">What we built:</span>{" "}
            {study.what_we_built}
          </p>
        )}
        {/* Only ever a measured figure supplied by the client. */}
        {study.result && (
          <p className="mt-3 text-sm font-semibold text-amber-600">{study.result}</p>
        )}
        {quote && (
          <p className="mt-4 border-t border-navy/8 pt-4 text-sm italic leading-relaxed text-navy/65">
            “{quote.quote}”
          </p>
        )}

        {study.live_url && (
          <a
            href={study.live_url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("live_site_click", { slug: study.slug })}
            className="mt-auto inline-flex min-h-[44px] items-center gap-1.5 pt-4 text-sm font-semibold text-navy hover:text-amber-600 focus-ring rounded-sm"
          >
            Visit the live site
            <ExternalLink size={14} />
          </a>
        )}
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
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

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  const shot = study.screenshots[0];
  const quote = reviewById(study.quote_id);

  return (
    <Link
      to={`/work/${study.slug}`}
      onClick={() => track("case_study_view", { slug: study.slug })}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-navy/10 bg-white transition-all duration-400 hover:-translate-y-1.5 hover:shadow-premium focus-ring"
    >
      {shot && (
        <div className="aspect-[16/10] overflow-hidden bg-navy">
          <img
            src={shot.src}
            alt={shot.alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold text-navy">
            {study.client_name}
            {study.city && <span className="text-navy/50">, {study.city}</span>}
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
      </div>
    </Link>
  );
}

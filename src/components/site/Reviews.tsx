import { reviews, type Review } from "../../content";

/**
 * Client reviews. Renders nothing when none have confirmed permission — the
 * section is never padded, and nothing here is ever reworded.
 */
export function Reviews({ limit = 6 }: { limit?: number }) {
  const shown = reviews.slice(0, limit);
  if (shown.length === 0) return null;

  return (
    <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {shown.map((review) => (
        <li key={review.id}>
          <ReviewCard review={review} />
        </li>
      ))}
    </ul>
  );
}

export function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex h-full flex-col rounded-3xl border border-navy/10 bg-white p-6 shadow-premium">
      {review.video_url && (
        <video
          src={review.video_url}
          controls
          preload="none"
          playsInline
          className="mb-5 aspect-video w-full rounded-2xl bg-navy object-cover"
        >
          <track kind="captions" />
        </video>
      )}

      <blockquote className="flex-1 text-sm leading-relaxed text-navy/75">
        “{review.quote}”
      </blockquote>

      <figcaption className="mt-5 border-t border-navy/8 pt-4 text-sm">
        <span className="font-semibold text-navy">{review.name}</span>
        <span className="block text-navy/55">
          {[review.role, review.business].filter(Boolean).join(", ")}
        </span>
        <span className="block text-xs text-navy/40">
          {[review.city, review.month].filter(Boolean).join(" · ")}
        </span>
        {review.screenshot && (
          <a
            href={review.screenshot}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex min-h-[44px] items-center text-xs font-semibold text-amber-600 underline underline-offset-4"
          >
            See original
          </a>
        )}
      </figcaption>
    </figure>
  );
}

/** One short quote under the hero buttons. Nothing when no reviews exist. */
export function HeroProofStrip() {
  const review = reviews[0];
  if (!review) return null;

  return (
    <p className="mt-8 max-w-xl text-sm text-navy/60">
      <span className="text-navy/80">“{review.quote}”</span>{" "}
      <span className="whitespace-nowrap font-medium text-navy/50">
        — {review.name}, {review.business}
      </span>
    </p>
  );
}

import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";

export function NotFound() {
  usePageMeta({
    title: "Page not found — RetenaAI",
    description: "The page you're looking for doesn't exist or has moved.",
  });

  return (
    <div className="container-page flex min-h-[70vh] flex-col items-center justify-center py-32 text-center">
      <p className="font-display text-sm font-semibold uppercase tracking-widest text-amber">
        404
      </p>
      <h1 className="mt-4 text-4xl font-semibold text-navy">Page not found</h1>
      <p className="mt-3 max-w-md text-navy/60">
        The page you're looking for doesn't exist or has moved.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white shadow-premium transition-transform hover:scale-[1.03]"
      >
        Back to home
      </Link>
    </div>
  );
}

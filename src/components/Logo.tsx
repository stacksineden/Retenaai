import { LOGO } from "../data/media";

/**
 * TO USE YOUR REAL LOGO: drop the files in /public and set the paths in
 * src/data/media.ts (LOGO.light / LOGO.dark). Nothing else needs changing —
 * the built-in wordmark below is only a fallback while those are empty.
 */
export function Logo({ dark = false }: { dark?: boolean }) {
  const src = dark ? LOGO.dark || LOGO.light : LOGO.light;

  if (src) {
    return (
      <img
        src={src}
        alt="RetenaAI"
        className="h-8 w-auto object-contain md:h-9"
      />
    );
  }

  return (
    <span className="inline-flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
      <span
        className="grid h-8 w-8 place-items-center rounded-lg text-sm font-bold"
        style={{ background: "#14213D", color: "#FCA311" }}
      >
        R
      </span>
      <span className={dark ? "text-white" : "text-navy"}>
        Retena<span className="text-amber">AI</span>
      </span>
    </span>
  );
}

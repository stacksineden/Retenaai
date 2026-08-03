import type { ReactNode } from "react";
import { Reveal } from "../Reveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  body?: ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "center",
  dark = false,
  className = "",
}: Props) {
  const isCenter = align === "center";

  return (
    <div
      className={`${isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow && (
        <Reveal y={14}>
          <span
            className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] ${
              dark ? "text-amber" : "text-amber-600"
            }`}
          >
            <span className="h-px w-6 bg-current opacity-50" />
            {eyebrow}
          </span>
        </Reveal>
      )}

      <Reveal delay={0.06}>
        <h2
          className={`text-balance mt-4 font-display text-3xl font-semibold leading-[1.12] sm:text-4xl md:text-[2.75rem] ${
            dark ? "text-white" : "text-navy"
          }`}
        >
          {title}
        </h2>
      </Reveal>

      {body && (
        <Reveal delay={0.12}>
          <p
            className={`text-balance mt-5 text-base leading-relaxed md:text-lg ${
              dark ? "text-white/60" : "text-navy/60"
            }`}
          >
            {body}
          </p>
        </Reveal>
      )}
    </div>
  );
}

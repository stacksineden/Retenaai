import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "amber" | "ghost-dark";
type Size = "md" | "lg";

const BASE =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-ring will-change-transform hover:-translate-y-0.5 active:translate-y-0";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-navy text-white shadow-premium hover:bg-navy-700 hover:shadow-[0_16px_40px_rgba(20,33,61,0.22)]",
  secondary:
    "border border-navy/15 bg-white text-navy hover:border-navy/35 hover:shadow-premium",
  amber:
    "bg-amber text-ink shadow-amber-glow hover:bg-amber-400 hover:shadow-[0_16px_44px_rgba(252,163,17,0.4)]",
  "ghost-dark":
    "border border-white/20 bg-white/5 text-white backdrop-blur hover:border-white/40 hover:bg-white/10",
};

const SIZES: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-3.5 text-sm md:text-base",
};

type ButtonProps = {
  children: ReactNode;
  /** Internal route ("/pricing"), hash ("/#work") or external/mailto URL. */
  to?: string;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  withArrow?: boolean;
  onClick?: () => void;
};

export function Button({
  children,
  to,
  href,
  variant = "primary",
  size = "lg",
  className = "",
  withArrow = false,
  onClick,
}: ButtonProps) {
  const classes = `${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`;

  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      {withArrow && (
        <ArrowRight
          size={16}
          className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
      {/* Shimmer sweep on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
      >
        <span className="absolute inset-y-0 -left-full w-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-all duration-700 group-hover:left-full" />
      </span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {inner}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} onClick={onClick}>
      {inner}
    </a>
  );
}

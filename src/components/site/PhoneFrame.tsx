import type { ReactNode } from "react";

/**
 * A phone-shaped frame for build screenshots and ad videos. CSS only — no
 * image asset, so it costs nothing on a weak connection.
 */
export function PhoneFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[280px] rounded-[2rem] border-[6px] border-navy bg-navy p-0 shadow-premium ${className}`}
    >
      <div className="absolute left-1/2 top-2 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-white/25" />
      <div className="aspect-[9/19] w-full overflow-hidden rounded-[1.6rem] bg-navy-50">
        {children}
      </div>
    </div>
  );
}

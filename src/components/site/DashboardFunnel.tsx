import { DASHBOARD } from "../../data/home";

/**
 * The four-row funnel from the copy. Deliberately has no numbers on it — the
 * widths are illustrative and the caption says so.
 */
export function DashboardFunnel() {
  const widths = ["100%", "78%", "56%", "34%"];

  return (
    <figure className="rounded-3xl border border-navy/10 bg-white p-6 shadow-premium sm:p-8">
      <div className="space-y-3">
        {DASHBOARD.funnel.map((label, i) => (
          <div key={label} className="flex items-center gap-4">
            <span className="w-28 shrink-0 text-sm font-medium text-navy/70 sm:w-32">
              {label}
            </span>
            <div className="h-9 flex-1 rounded-lg bg-navy-50">
              <div
                className={`h-full rounded-lg ${i === 3 ? "gradient-amber" : "bg-navy/25"}`}
                style={{ width: widths[i] }}
              />
            </div>
          </div>
        ))}
      </div>
      <figcaption className="mt-5 text-xs text-navy/45">{DASHBOARD.caption}</figcaption>
    </figure>
  );
}

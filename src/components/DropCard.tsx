import { Check } from "lucide-react";
import { DROP, formatMoney } from "../data/pricing";
import { Button } from "./ui/Button";

const INCLUDED = [
  `${DROP.concepts} concepts — video and static`,
  `Delivered in ${DROP.workingDays} working days`,
  "No retainer, no minimum, no contract",
  "Paid in full up front",
  // Explains why 5 concepts once can cost the same as 12 a month on the retainer.
  "No Monday cadence, no hook variants, no monthly log — that's the retainer",
];

/** The one-off product, kept separate from the monthly configurator. */
export function DropCard() {
  return (
    <div
      id="tier-drop"
      className="scroll-mt-28 overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-premium"
    >
      <div className="grid gap-8 p-7 sm:p-10 md:grid-cols-[1fr_1.1fr] md:items-center md:gap-12">
        <div>
          <span className="inline-flex rounded-full bg-navy px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-amber">
            One-off
          </span>
          <h3 className="mt-5 font-display text-2xl font-semibold text-navy">
            {DROP.name}
          </h3>
          <div className="mt-4 flex flex-wrap items-end gap-x-1.5">
            <span className="font-display text-4xl font-semibold tabular-nums text-navy">
              {formatMoney(DROP.price)}
            </span>
            <span className="pb-1.5 text-sm text-navy/45">one-off</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-navy/55">
            For brands testing us, launching something, or not ready for monthly.
          </p>
        </div>

        <div>
          <ul className="space-y-3">
            {INCLUDED.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-navy/70">
                <span className="mt-0.5 grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full bg-amber/15 text-amber-600">
                  <Check size={11} strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <Button
            to="/free-ad?interest=drop"
            variant="primary"
            size="md"
            className="mt-7 w-full sm:w-auto"
          >
            Order a Drop
          </Button>
        </div>
      </div>
    </div>
  );
}

import { SlidersHorizontal } from "lucide-react";
import { PricingTiers } from "../PricingTiers";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";

export function PricingPreview() {
  return (
    <section id="pricing" className="relative bg-white py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Pricing"
          title="Priced against your spend, not a plan name."
          body="Higher spend needs more concepts in market to keep finding winners — so the tiers scale with volume. Nothing else."
        />

        <div className="mt-14">
          <PricingTiers />
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-col items-center gap-5 rounded-3xl border border-navy/8 bg-navy-50/50 px-8 py-10 text-center">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-navy text-amber">
              <SlidersHorizontal size={20} />
            </span>
            <div>
              <h3 className="font-display text-xl font-semibold text-navy">
                Not sure which tier you land in?
              </h3>
              <p className="mx-auto mt-2 max-w-md text-sm text-navy/60">
                Move two sliders and see your benchmark volume, your tier, your
                cost per concept, and how far behind pace you currently are.
              </p>
            </div>
            <Button to="/pricing" variant="primary" withArrow>
              Open the calculator
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

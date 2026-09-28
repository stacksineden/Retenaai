import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { DROP, formatMoney } from "../../data/pricing";
import { PricingConfigurator } from "../PricingConfigurator";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function PricingPreview() {
  return (
    <section id="pricing" className="relative bg-white py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Pricing"
          title="Your price is a function of how much you want to test."
          body="Slide to how many concepts you want each month. Month-to-month, no minimum term."
        />

        <Reveal className="mt-14" delay={0.1}>
          <PricingConfigurator />
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-8 text-center text-sm text-navy/55">
            Not ready for monthly? A one-off {DROP.name} is {DROP.concepts} concepts
            , from {formatMoney(DROP.price)}.{" "}
            <Link
              to="/pricing#tier-drop"
              className="group inline-flex items-center gap-1 font-semibold text-navy underline decoration-amber decoration-2 underline-offset-4 hover:text-amber-600"
            >
              See the Drop
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

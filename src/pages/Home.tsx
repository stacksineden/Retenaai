import { Hero } from "../components/sections/Hero";
import { VolumeGap } from "../components/sections/VolumeGap";
import { Offer } from "../components/sections/Offer";
import { Process } from "../components/sections/Process";
import { Work } from "../components/sections/Work";
import { Edge } from "../components/sections/Edge";
import { PricingPreview } from "../components/sections/PricingPreview";
import { LeadMagnet } from "../components/sections/LeadMagnet";
import { Faq } from "../components/sections/Faq";
import { FinalCta } from "../components/sections/FinalCta";
import { usePageMeta } from "../hooks/usePageMeta";
import { ROUTE_META } from "../data/seo";

export function Home() {
  usePageMeta(ROUTE_META.home);

  return (
    <>
      <Hero />
      <VolumeGap />
      <Offer />
      <Process />
      <Work />
      <Edge />
      <PricingPreview />
      <LeadMagnet />
      <Faq />
      <FinalCta />
    </>
  );
}

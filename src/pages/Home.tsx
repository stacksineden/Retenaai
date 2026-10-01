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
  // This page is the creative site at /creative — not the homepage, which is
  // Landing. Using ROUTE_META.home here gave it the Nigerian site's title.
  usePageMeta(ROUTE_META.creative);

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

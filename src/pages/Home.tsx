import { Hero } from "../components/sections/Hero";
import { VolumeGap } from "../components/sections/VolumeGap";
import { Anchor } from "../components/sections/Anchor";
import { Offer } from "../components/sections/Offer";
import { Process } from "../components/sections/Process";
import { Work } from "../components/sections/Work";
import { Edge } from "../components/sections/Edge";
import { PricingPreview } from "../components/sections/PricingPreview";
import { LeadMagnet } from "../components/sections/LeadMagnet";
import { Faq } from "../components/sections/Faq";
import { FinalCta } from "../components/sections/FinalCta";
import { usePageMeta } from "../hooks/usePageMeta";

export function Home() {
  usePageMeta({
    title: "RetenaAI — Creative Supply for Brands That Test Fast",
    description:
      "RetenaAI supplies DTC beauty, skincare and wellness brands with 12+ new Meta ad concepts a month — 3 every Monday, plus free hook variants on winners.",
  });

  return (
    <>
      <Hero />
      <VolumeGap />
      <Anchor />
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

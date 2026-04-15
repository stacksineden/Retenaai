// import AcademyCta from "@/components/shared/AcademyCta";
import AdCreativesCta from "@/components/shared/AdCreativesCta";
import BeforeAndAfterSection from "@/components/shared/BeforeAndAfterSection";
import MadeByHere from "@/components/shared/FeaturedBrand";
import DeliveryProcess from "@/components/shared/Features";
import { HighLights } from "@/components/shared/HighLights";
import PackagesTeaser from "@/components/shared/PackageTeaser";
import RetenaHero from "@/components/shared/RetenaHeroScanner";
import ROIs from "@/components/shared/ROIs";
import StudioPipeline from "@/components/shared/Showcase";
import WallOfProof from "@/components/shared/WallOfProof";
import WebLayoutWrapper from "@/components/shared/WebLayoutWrapper";

const Home = () => {
  return (
    <WebLayoutWrapper>
      <RetenaHero />
      <WallOfProof />
      <ROIs />
      <PackagesTeaser />
      <DeliveryProcess />
      <StudioPipeline />
      <MadeByHere />
      <section className="py-4">
        <HighLights />
      </section>
      <BeforeAndAfterSection />
      {/* <Reviews /> */}
      <AdCreativesCta />
    </WebLayoutWrapper>
  );
};

export default Home;

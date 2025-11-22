import AcademyCta from "@/components/shared/AcademyCta";
import AdCreativesCta from "@/components/shared/AdCreativesCta";
import BeforeAndAfterSection from "@/components/shared/BeforeAndAfterSection";
import DemoVideo from "@/components/shared/DemoVideo";
import FeaturedBrand from "@/components/shared/FeaturedBrand";
import Features from "@/components/shared/Features";
import Hero from "@/components/shared/Hero";
import { HighLights } from "@/components/shared/HighLights";
import Masonary from "@/components/shared/Masonary";
import Showcase from "@/components/shared/Showcase";
import VideoMasonry from "@/components/shared/VideoMasonary";
import WebLayoutWrapper from "@/components/shared/WebLayoutWrapper";

const Home = () => {
  return (
    <WebLayoutWrapper>
      <Hero />
      <Masonary />
      <DemoVideo url="https://youtu.be/0VwQVs4b60M" />
      <VideoMasonry />
      <Features />
      <Showcase />
      <FeaturedBrand />
      <section className="py-4">
        <HighLights />
      </section>
      <BeforeAndAfterSection />
      <AcademyCta />
      <AdCreativesCta />
    </WebLayoutWrapper>
  );
};

export default Home;

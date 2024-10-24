import CtaCard from "@/components/shared/CtaCard";
import DemoVideo from "@/components/shared/DemoVideo";
import Faqs from "@/components/shared/Faqs";
import Features from "@/components/shared/Features";
import Hero from "@/components/shared/Hero";
import { HighLights } from "@/components/shared/HighLights";
import { HomeGallery } from "@/components/shared/HomeGallery";
import WebLayoutWrapper from "@/components/shared/WebLayoutWrapper";
import { imageDataset } from "@/modelDataset";

const Home = () => {
  return (
    <WebLayoutWrapper>
      <div>
        <Hero />
        <DemoVideo />
        <HighLights />
        <div className="rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
          <HomeGallery items={imageDataset} direction="right" speed="slow" />
        </div>
        {/* <FluxHighlight /> */}
        <Features />
        <Faqs />
        <CtaCard />
      </div>
    </WebLayoutWrapper>
  );
};

export default Home;

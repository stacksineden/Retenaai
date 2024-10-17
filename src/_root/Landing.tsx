import CtaCard from "@/components/shared/CtaCard";
import Faqs from "@/components/shared/Faqs";
import Features from "@/components/shared/Features";
import FluxHighlight from "@/components/shared/FluxHighlight";
import Hero from "@/components/shared/Hero";
import { HighLights } from "@/components/shared/HighLights";
import { HomeGallery } from "@/components/shared/HomeGallery";
import WebLayoutWrapper from "@/components/shared/WebLayoutWrapper";



const Home = () => {
  return (
    <WebLayoutWrapper>
      <div>
        <Hero />
        <HighLights />
        <div className="rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
          <HomeGallery items={imageDataset} direction="right" speed="slow" />
        </div>
        <FluxHighlight />
        <Features />
        <Faqs />
        <CtaCard />
      </div>
    </WebLayoutWrapper>
  );
};

export default Home;


const imageDataset = [
  "/assets/dis1.webp",
  "/assets/dis2.webp",
  "/assets/dis3.webp",
  "/assets/dis4.webp",
  "/assets/dis5.webp",
  "/assets/dis6.webp",
  "/assets/dis7.webp",
  "/assets/dis8.webp",
  "/assets/dis9.webp",
  "/assets/dis10.webp",
  "/assets/dis11.webp",
  "/assets/dis11.png",
  "/assets/dis13.webp",
  "/assets/dis14.webp",
  "/assets/dis16.webp"
];
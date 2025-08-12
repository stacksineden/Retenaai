import AcademyCta from "@/components/shared/AcademyCta";
import CtaCard from "@/components/shared/CtaCard";
import DemoVideo from "@/components/shared/DemoVideo";
import Features from "@/components/shared/Features";
import Hero from "@/components/shared/Hero";
import { HighLights } from "@/components/shared/HighLights";
import WebLayoutWrapper from "@/components/shared/WebLayoutWrapper";


const Home = () => {
  return (
    <WebLayoutWrapper>
      <Hero /> 
      <DemoVideo />
      <Features />  
      <CtaCard
        title={
          <>
            🎯 Join Our <br />
            Founders - Only Pilot Program
          </>
        }
        description="We&#8217;re backing a select group of founders with AI SaaS, or agency ideas — helping them go from concept to MVP with hands-on support, infrastructure, and funding. Build it fast, launch it right, and grow with us."
        buttonText="Learn More"
        imageSrc="/assets/pilot.webp"
          ctaUrl="/enterprise"
      />
      <section className="py-4">
        <HighLights />
      </section>
      <AcademyCta />
      <CtaCard
        title={
          <>
            Let&#8217;s Build the AI System <br />
            That Works While You Sleep.
          </>
        }
        description={
          <>
            Whether you&#8217;re new or scaling fast, RetenaAI helps you
            automate growth — from outreach to content, UGC, and conversion.
            <br />
            We don&#8217;t just give you tools. We build systems that think,
            engage, and scale with you.
            <br />
            Join the early wave transforming business across Africa and beyond.
          </>
        }
        buttonText="Learn More"
        imageSrc="/assets/cta.webp"
        ctaUrl="/contact"
      />
    </WebLayoutWrapper>
  );
};

export default Home;


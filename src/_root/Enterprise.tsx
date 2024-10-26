import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import WebLayoutWrapper from "@/components/shared/WebLayoutWrapper";
import { useNavigate } from "react-router-dom";

const images = [
  "/assets/highlights1.webp",
  "/assets/psedo-generations/brand1.webp",
  "/assets/psedo-generations/brand2.webp",
  "/assets/psedo-generations/brand3.webp",
  "/assets/psedo-generations/fashion3.png",
  "/assets/psedo-generations/brand5.webp",
  "/assets/psedo-generations/brand4.webp",
  "/assets/psedo-generations/fashion4.png",
];

const productsImgs = [
  "/assets/psedo-generations/brand7.webp",
  "/assets/psedo-generations/brand8.webp",
  "/assets/psedo-generations/brand9.webp",
  "/assets/psedo-generations/brand5.webp",
];

interface Feature {
  title: string;
  description: string;
  image: string;
}

const dynamicParts = ["Influencers", "Models", "SMEs", "Creators"];

const Enterprise = () => {
  const [currentDynamicPartIndex, setCurrentDynamicPartIndex] = useState(0);
  const [direction] = useState(0);
  const navigate = useNavigate()

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features: Feature[] = [
    {
      title: "Personalized Visual Branding",
      description:
        "Our AI delves into your brand's unique style, tone, and visual language, learning from your images to create photos and videos that truly reflect your identity. From signature colors and moods to defining visual elements, our technology captures every detail, helping you connect with your audience authentically and stand out in a competitive market.",
      image: "/assets/highlights1.webp",
    },
    {
      title: "High-Quality Content for Social Media",
      description:
        "Create impactful, platform-ready visuals with Retena.ai that captivate followers, attract clients, and enhance your online presence across Instagram, TikTok, LinkedIn, and more. Effortlessly elevate your social profiles with stunning, AI-powered images designed to drive engagement and tell your story.",
      image: "/assets/psedo-generations/selfies3.png",
    },
    {
      title: "Affordable, Scalable Options",
      description:
        "Build a custom library of high-quality images across styles and settings to fit your brand. With Retena.ai’s streamlined, cost-effective process, maintain a consistent online presence with flexible, professional visuals that grow with your business.",
      image: "/assets/psedo-generations/fashion2.png",
    },
    {
      title: "Versatile AI Photography",
      description:
        "Whether you're looking for professional headshots, dynamic lifestyle photos, or captivating product shots, Retena.ai delivers it all. Our AI adapts to your unique needs, creating high-quality visuals for any setting or purpose, ensuring your brand shines across every platform.",
      image: "/assets/psedo-generations/brand6.webp",
    },
  ];

  const products_features = [
    {
      title: "Showcase Your Products Creatively",
      description:
        "With our AI’s ability to generate high-quality, photorealistic images, your products will shine on e-commerce platforms, social media, and promotional materials, making them irresistible to customers.",
      image: "/assets/psedo-generations/brand12.webp",
    },
    {
      title: "Streamlined Process",
      description:
        "Upload your product images and let our AI craft unique visuals in various settings and styles, from lifestyle shots to studio images, all designed to enhance your marketing efforts.",
      image: "/assets/psedo-generations/brand13.webp",
    },
    {
      title: "Adaptable to Your Brand",
      description:
        "Our AI learns from your brand’s aesthetic and values, ensuring that every product shot reflects your unique identity and resonates with your target audience.",
      image: "/assets/psedo-generations/brand14.webp",
    },
    {
      title: "Cost-Effective Solutions",
      description:
        "Say goodbye to expensive photoshoots and lengthy timelines. Retena.ai provides an affordable and scalable solution for all your product photography needs, allowing you to focus on growing your business.",
      image: "/assets/psedo-generations/brand15.webp",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Define variants with explicit typing for direction
  const variants = {
    enter: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100, // Slide in from right or left
      scale: 1.1, // Slightly scale up when entering
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1, // Normalize scale
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction < 0 ? 100 : -100, // Slide out to right or left
      scale: 0.9, // Slightly scale down when exiting
    }),
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDynamicPartIndex((prevIndex) =>
        prevIndex === dynamicParts.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change dynamic part every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <>
      <WebLayoutWrapper>
        <section className="relative min-h-[35rem] md:min-h-screen bg-accent flex justify-center items-center overflow-hidden">
          {/* Background: Masonry Grid */}
          <div className="absolute inset-0 p-4 z-0 overflow-hidden">
            <div className="columns-2 md:columns-3 lg:columns-4 gap-2 space-y-2">
              {images.map((src, index) => (
                <motion.div
                  key={index}
                  className="break-inside-avoid relative overflow-hidden rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <img
                    src={src}
                    alt={`background-image-${index}`}
                    className="w-full object-cover h-full"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Text Overlay */}
          <div className="z-10 text-center text-white">
            <motion.h1
              className="text-5xl lg:text-8xl font-extrabold mb-4"
              key={currentDynamicPartIndex} // Key to trigger re-mount on change
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }} // Exit animation
              transition={{ duration: 0.8 }}
            >
              <span className="mr-2">Retena.AI for</span>
              <motion.span
                key={currentDynamicPartIndex} // Key to trigger re-mount on change
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }} // Exit animation
                transition={{ duration: 0.5 }}
                className="text-accent"
              >
                {dynamicParts[currentDynamicPartIndex]}.
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-xl lg:text-2xl font-medium text-center w-[90%] md:w-[70%] mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }} // Exit animation
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Harness the future of photography with AI-generated content
              tailored to your brand’s unique style and vision.
            </motion.p>
            <motion.button
              className="bg-primary-black hover:bg-primary-blue text-white text-xl px-4 py-3 font-semibold transform transition duration-300 hover:scale-90 my-4 rounded-md"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              onClick={()=> navigate('/contact')}
            >
              Get started
            </motion.button>
          </div>

          {/* Optional: Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black opacity-40 z-5"></div>
        </section>

        {/* <div className="my-5">
        <div className="w-full h-full py-4">
          <h2 className="max-w-7xl pl-4 mx-auto text-2xl md:text-5xl font-bold text-primary-black">
            Why Choose Retena.ai for Business?
          </h2>
          <AppleStyleCarousel items={cards} /> 
        </div>
      </div> */}
        <div className="my-5">
          <motion.div
            ref={ref}
            className="2xl:max-w-[1440px] mx-auto relative py-4 lg:mb-5 lg:py-10 xl:mb-6 px-5 lg:px-20 3xl:px-0 overflow-hidden w-full md:w-[80%] font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 20,
            }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2 className="text-xl md:text-5xl text-primary-black tracking-wide font-semibold">
              Retena.ai is transforming visual content creation by leveraging AI
              to make professional photography affordable and tailored for
              businesses, empowering brands to produce stunning visuals that
              elevate their marketing efforts.
            </h2>
          </motion.div>
        </div>

        <div className="bg-black text-white py-16 px-6 md:px-12 lg:px-24">
          <h2 className="text-center text-3xl font-bold mb-12">
            Why Choose Retena.AI for Business?
          </h2>
          <motion.div
            className="grid gap-12 lg:grid-cols-2"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row items-center gap-8"
                variants={itemVariants}
              >
                <motion.div
                  className="w-full md:w-1/2 flex-shrink-0 overflow-hidden rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                  />
                </motion.div>
                <div className="text-center md:text-left md:w-1/2">
                  <h3 className="text-xl font-semibold mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-base text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <section className="bg-accent my-5">
          <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
            <div className="flex flex-col justify-center py-14 md:py-0">
              <div className="text-center md:text-left">
                <h1 className="text-primary-black text-3xl lg:text-6xl font-bold">
                  Capture Your Brand’s Essence with Stunning Product
                  Photography.
                </h1>
                <p className="text-primary-black xl:max-w-[500px] text-base md:text-lg">
                  At Retena.ai for Business, we understand that visuals are the
                  lifeblood of any brand. Our dedicated AI-driven platform not
                  only creates captivating imagery for individuals and
                  influencers but also specializes in professional product
                  photography tailored to your business needs.
                </p>
                <div className="mt-4 flex items-center gap-2 flex-col md:flex-row">
                  <Button
                    className="bg-primary-black hover:bg-primary-blue text-white text-base px-4 py-7 transform transition duration-300 hover:scale-90"
                    onClick={()=> navigate('/contact')}
                  >
                    Talk to us Today!
                    <ArrowRight className="text-white h-5" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="h-full w-full p-4 grid grid-cols-2 gap-3">
              {productsImgs?.map((src, index) => (
                <motion.div
                  key={index}
                  custom={direction} // Use the direction state for animation
                  className="bg-accent h-[330px] rounded-xl overflow-hidden"
                  initial="enter"
                  animate="center"
                  exit="exit"
                  variants={variants}
                  transition={{ duration: 1 }} // Longer duration for smoother animation
                >
                  <img
                    src={src}
                    alt={`heroimage-${index}`}
                    className="h-full w-full object-cover rounded-xl"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <div className="bg-black text-white py-16 px-6 md:px-12 lg:px-24">
          <h2 className="text-center text-3xl font-bold mb-12">
            Why Choose Our Product Photography?
          </h2>
          <motion.div
            className="grid gap-12 lg:grid-cols-2"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {products_features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row items-center gap-8"
                variants={itemVariants}
              >
                <motion.div
                  className="w-full md:w-1/2 flex-shrink-0 overflow-hidden rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                  />
                </motion.div>
                <div className="text-center md:text-left md:w-1/2">
                  <h3 className="text-xl font-semibold mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-base text-white">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center bg-gray-50 py-12">
            {/* Text Section */}
            <div className="text-center mb-8">
              <h2 className="text-6xl font-bold text-gray-900">
                Start Elevating Your Brand Today!
              </h2>
              <p className="text-primary-blue mt-2 text-lg w-[90%] md:w-1/2 text-center mx-auto">
                Working with Retena.ai is easy. Just reach out to tell us about
                your brand, and let us take it from there. Whether you’re
                looking to establish a brand aesthetic, boost social media
                presence, or streamline your content creation, our team is ready
                to design a package that fits your unique vision and goals.
              </p>
              <Button
                className="bg-primary-black hover:bg-primary-blue text-white text-base px-4 py-7 transform transition duration-300 hover:scale-90 my-4"
                onClick={()=> navigate('/contact')}
              >
                Get started
                <ArrowRight className="text-white h-5" />
              </Button>
            </div>

            {/* Grid Image Section */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center">
              <img
                src="/assets/psedo-generations/fashion1.webp"
                alt="product1"
                className="rounded-lg shadow"
              />
              {/* Add more images here in the same manner */}
              <img
                src="/assets/psedo-generations/brand17.webp"
                alt="product2"
                className="rounded-lg shadow"
              />
              <img
                src="/assets/psedo-generations/brand18.webp"
                alt="product3"
                className="rounded-lg shadow"
              />
              <img
                src="/assets/psedo-generations/brand16.webp"
                alt="product4"
                className="rounded-lg shadow"
              />
            </div>
          </div>
        </div>
      </WebLayoutWrapper>
    </>
  );
};

export default Enterprise;

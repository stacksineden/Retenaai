import { motion } from "framer-motion";
import WebLayoutWrapper from "@/components/shared/WebLayoutWrapper";

const Solutions = () => {
  return (
    <WebLayoutWrapper>
      <section className="bg-black text-white py-24 px-6 md:px-16">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Transforming Ordinary Photos Into
            <br />
            <span className="text-[#FCA311]">High-Performing Campaigns</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mt-4">
            How we turned a simple phone photo of a leather slipper into a
            premium brand identity and a campaign that connected deeply with
            Nigerian men.
          </p>
        </div>

        {/* Section 1 – The Raw Input */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h3 className="text-3xl font-bold mb-4">The Challenge</h3>
            <p className="text-white/70 leading-relaxed">
              The brand came to us with only one thing — a single product photo
              taken on a smartphone. Harsh lighting. Bad background. No
              storytelling. No identity.
              <br />
              <br />
              But the craftsmanship was solid. The product had cultural weight.
              It just wasn’t presented with the dignity it deserved.
            </p>
          </div>

          {/* Placeholder – Raw Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full rounded-2xl overflow-hidden"
          >
            <img
              src="/assets/mockups/men_slippers/men_slippers_proto.JPG"
              alt="Raw Phone Image"
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-3 left-3 bg-black/60 px-3 py-1 rounded-md text-sm">
              Raw Phone Image (Before)
            </div>
          </motion.div>
        </div>

        {/* Section 2 – Transformation */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold mb-6 text-center">
            The Transformation
          </h3>
          <p className="text-white/70 text-center max-w-3xl mx-auto mb-12">
            Using that single image, we developed a strong identity rooted in
            Nigerian masculinity — clean, intentional, stylish.
          </p>

          {/* Before & After Reveal Animation */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1 }}
              className="relative rounded-2xl overflow-hidden"
            >
              <img
                src="/assets/mockups/men_slippers/men_slippers_proto.JPG"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-black/60 px-3 py-1 rounded-md text-sm">
                Before
              </div>
            </motion.div>

            {/* After Reveal (AI Generated) */}
            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{
                clipPath: "inset(0 0 0 0)",
              }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="relative rounded-2xl overflow-hidden"
            >
              <img
                src="/assets/mockups/men_slippers/men_slippers2.png"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-black/60 px-3 py-1 rounded-md text-sm">
                AI Generated (After)
              </div>
            </motion.div>
            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{
                clipPath: "inset(0 0 0 0)",
              }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="relative rounded-2xl overflow-hidden"
            >
              <img
                src="/assets/mockups/men_slippers/men_slippers4.png"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-black/60 px-3 py-1 rounded-md text-sm">
                AI Generated (After)
              </div>
            </motion.div>
            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{
                clipPath: "inset(0 0 0 0)",
              }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="relative rounded-2xl overflow-hidden"
            >
              <img
                src="/assets/mockups/men_slippers/men_slippers6.png"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-black/60 px-3 py-1 rounded-md text-sm">
                AI Generated (After)
              </div>
            </motion.div>
          </div>
        </div>

        {/* Section 3 – Lifestyle Campaign */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold mb-6 text-center">
            Campaign Assets
          </h3>
          <p className="text-white/70 text-center max-w-3xl mx-auto mb-12">
            We expanded the visuals into full lifestyle scenes that reflect the
            identity of Nigerian men — intentional, cultured, stylish.
          </p>

          {/* Images Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <motion.img
              src="/assets/mockups/men_slippers/men_slippers9.png"
              className="rounded-xl w-full h-auto object-cover"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            />
            <motion.img
              src="/assets/mockups/men_slippers/men_slippers11.png"
              className="rounded-xl w-full h-auto object-cover"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            />
            <motion.img
              src="/assets/mockups/men_slippers/men_slippers8.png"
              className="rounded-xl w-full h-auto object-cover"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            />
          </div>
        </div>

        {/* Section 4 – Video Block */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold mb-6 text-center"> 
            Campaign Video
          </h3>

          {/* Video Placeholder */}
          <motion.video
            src="https://res.cloudinary.com/dyryfgjro/video/upload/v1763802956/vid2_a8pyj6.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="mx-auto w-full md:w-3/4 rounded-2xl shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* Section 5 – Outcome */}
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">The Result</h3>
          <p className="text-white/70 mb-10 leading-relaxed">
            The final campaign created a premium identity that resonated with
            Nigerian men — from young hustlers to mature gentlemen. Engagement
            went up, brand perception increased, and the simple phone photo
            transformed into a full visual system ready for ads, catalogues, and
            e-commerce.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-[#FCA311] text-xl font-semibold"
          >
            “A single photo became a cultural brand moment.”
          </motion.div>
        </div>
      </section>
    </WebLayoutWrapper>
  );
};

export default Solutions;

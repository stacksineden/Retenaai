import WebLayoutWrapper from "@/components/shared/WebLayoutWrapper";
import { motion } from "framer-motion";

const Careers = () => {
  return (
    <WebLayoutWrapper>
      <div className="bg-black min-h-screen py-12 px-6">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-white">Join Our Team</h1>
          <p className="mt-4 text-lg text-gray-300">
            At <strong>RetenaAI</strong>, we’re building the future of AI and
            automation. Be part of it.
          </p>
          <motion.img
            src="/assets/pilot.webp"
            alt="Team collaboration"
            className="w-full max-w-3xl mx-auto rounded-2xl mt-6 shadow-lg"
            whileHover={{ scale: 1.02 }}
          />
        </motion.section>

        {/* Why Work With Us */}
        <section className="mt-16 max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-300">
            Why Work With Us?
          </h2>
          <ul className="mt-4 grid gap-6 md:grid-cols-2">
            {[
              "🚀 Innovate Every Day",
              "🌍 Make a Global Impact",
              "🤝 Collaborative Culture",
              "🎯 Continuous Learning",
              "💡 Flexible Work",
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-800 p-6 rounded-xl shadow text-white"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </section>

        {/* Job Listings */}
        <section className="mt-20 max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-accent">Current Openings</h2>
          <div className="mt-8 space-y-8">
            {[
              {
                title: "Instructor – AI & Automation",
                location: "Remote",
                type: "Full-Time / $400 - $650 per month",
                description:
                  "Teach and mentor learners in AI, automation, and no-code tools while creating impactful course materials.",
                details: `
                  Role Overview:
                  As an Instructor at RetenaAI, you’ll guide learners through the fundamentals and advanced applications of AI, automation, and no-code tools. You will design engaging lessons, provide mentorship, and help students build practical skills that they can apply to real-world projects.

                  Key Responsibilities:
                  - Deliver live and recorded lessons on AI concepts, automation workflows, and no-code tools.
                  - Create course materials, including slides, assignments, and real-world project examples.
                  - Offer one-on-one or group mentorship sessions to guide students through projects.
                  - Evaluate student work and provide constructive feedback.
                  - Stay updated with the latest AI and automation trends, incorporating them into the curriculum.
                  - Collaborate with the content team to design industry-relevant course modules.
                  - Participate in online community discussions and answer student queries.

                  Requirements:
                  - Strong knowledge of AI fundamentals, automation platforms, and no-code tools (e.g., n8n, Zapier, Supabase, OpenAI APIs).
                  - Proven experience in teaching, mentoring, or public speaking.
                  - Ability to create engaging, easy-to-follow learning materials.
                  - Excellent communication skills with a passion for sharing knowledge.
                  - Familiarity with project-based learning approaches.
                  - Bonus: Previous experience in curriculum design or edtech platforms.
                `,
                img: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238",
              },
              {
                title: "AI Engineer / System Integrator",
                location: "Remote",
                type: "Full-Time / $600 - $850 per month",
                description:
                  "Design, integrate, and deploy AI-powered workflows that connect multiple systems seamlessly.",
                details: `
                  Role Overview:
                  As an AI Engineer / System Integrator, you’ll build, integrate, and deploy AI-powered workflows that seamlessly connect multiple systems. You’ll work closely with internal teams and clients to design scalable, efficient, and innovative AI solutions.

                  Key Responsibilities:
                  - Develop and integrate AI-driven solutions across diverse platforms and tools.
                  - Design and optimize workflows that connect APIs, databases, and automation systems.
                  - Collaborate with product and content teams to identify automation opportunities.
                  - Test, debug, and maintain AI-based applications and integrations.
                  - Ensure that systems meet performance, reliability, and scalability requirements.
                  - Create technical documentation for implemented solutions.
                  - Stay updated with new AI models, frameworks, and integration techniques.

                  Requirements:
                  - Strong experience with AI tools, APIs, and frameworks (e.g., OpenAI, Hugging Face, TensorFlow).
                  - Proficiency in system integration tools like n8n, Zapier, Make, or custom API integrations.
                  - Solid understanding of REST APIs, webhooks, and JSON data handling.
                  - Strong problem-solving skills and the ability to design robust architectures.
                  - Knowledge of database technologies (SQL, NoSQL).
                  - Ability to work independently and manage multiple projects.
                  - Bonus: Experience with low-code/no-code platforms for rapid prototyping.
                `,
                img: "/assets/sup4.png",
              },
            ].map((job, i) => (
              <motion.div
                key={i}
                className="bg-gray-800 rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <img
                  src={job.img}
                  alt={job.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                  <p className="text-accent mt-2">{job.description}</p>
                  <p className="mt-4 text-sm text-[#FCA311]">
                    📍 {job.location} | 📅 {job.type}
                  </p>
                  <details className="mt-4">
                    <summary className="cursor-pointer text-white hover:underline">
                      View Details
                    </summary>
                    <pre className="whitespace-pre-wrap text-gray-300 mt-2 text-sm">
                      {job.details}
                    </pre>
                  </details>
                  <div className="mt-6">
                    <a
                      className="mt-6 px-5 py-2 bg-[#000000] text-white rounded-lg hover:bg-[#14213D] transition"
                      href="https://forms.gle/7J5JHc6wLrugGXfb6"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </WebLayoutWrapper>
  );
};

export default Careers;

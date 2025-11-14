import { motion } from "framer-motion";
import WebLayoutWrapper from "@/components/shared/WebLayoutWrapper";

const Enterprise = () => {
  return (
    <>
      <WebLayoutWrapper>
        <div className="bg-black min-h-screen flex flex-col items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <motion.img
              src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=900&q=80"
              alt="Coming Soon"
              className="w-40 h-40 mx-auto mb-6 rounded-full shadow-lg object-cover"
              whileHover={{ scale: 1.05 }}
            />

            <h1 className="text-4xl font-bold text-white">Pilot Program</h1>

            <p className="mt-4 text-lg text-gray-300">
              🚀 We’re cooking up something exciting! Stay tuned for updates on
              our upcoming Pilot Program — details are on the way.
            </p>

            <motion.div
              className="mt-6 px-6 py-3 bg-black text-white rounded-lg inline-block shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Coming Soon
            </motion.div>

            <p className="mt-6 text-sm text-gray-500">
              Follow us for announcements and be the first to know when we
              launch.
            </p>
          </motion.div>
        </div>
      </WebLayoutWrapper>
    </>
  );
};

export default Enterprise;

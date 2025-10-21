import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto w-[300px] h-[300px] mb-6"
        >
          <img
            src="/logo.png"
            alt="loopIDE logo"
            className="w-full h-full object-contain"
          />
        </motion.div>
        <h1 className="text-3xl font-semibold">Join to Waitlist!</h1>
      </div>
    </div>
  );
}

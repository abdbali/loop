import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/your-endpoint';

export default function Home() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setStatus('error');
      return;
    }
    setStatus('pending');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      if (res.ok) {
        setStatus('ok');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <main className={`${inter.className} min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-200 via-gray-100 to-gray-300 p-6`}>
      <div className="flex flex-col items-center justify-center w-full max-w-md bg-white rounded-3xl shadow-2xl p-12 gap-8 border border-gray-200">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-[150px] h-[150px] mb-6"
        >
          <img src="/logo.png" alt="loopIDE logo" className="w-full h-full object-contain shadow-md" />
        </motion.div>

        {/* Animated Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl font-bold text-center text-gray-800 drop-shadow-md"
        >
          Join Waitlist
        </motion.h1>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 w-full"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-6 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner transition-all duration-300"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-2xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
          >
            Join
          </button>
        </motion.form>

        {/* Status Messages */}
        {status === 'ok' && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-green-600 font-medium text-center drop-shadow-sm">Thanks! You are on the waitlist.</motion.p>}
        {status === 'error' && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-red-600 font-medium text-center drop-shadow-sm">There was an error submitting your email.</motion.p>}
      </div>
    </main>
  );
}

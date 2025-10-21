import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Inter } from 'next/font/google';
import { FaGithub, FaInstagram } from 'react-icons/fa';

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
        body: JSON.stringify({ email }),
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
    <main
      className={`${inter.className} min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 p-6`}
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-[350px] h-[350px] mb-8"
      >
        <img src="/logo.png" alt="loopIDE logo" className="w-full h-full object-contain" />
      </motion.div>

      {/* Waitlist form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md"
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm"
          required
        />
        <button
          type="submit"
          className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
        >
          Join
        </button>
      </motion.form>

      {/* Status messages */}
      {status === 'ok' && (
        <p className="mt-3 text-green-600 text-sm">Thanks! You are on the waitlist.</p>
      )}
      {status === 'error' && (
        <p className="mt-3 text-red-600 text-sm">There was an error submitting your email.</p>
      )}

      {/* Social links */}
      <div className="flex gap-6 mt-10">
        <a
          href="https://github.com/abdbali/loop"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-black transition text-2xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/ideloop"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-black transition text-2xl"
        >
          <FaInstagram />
        </a>
      </div>
    </main>
  );
}

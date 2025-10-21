import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Formspree endpoint (kendi endpoint'inizi buraya koyun)
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-gray-300 text-black p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-[150px] h-[150px] mb-6 shadow-lg rounded-full bg-white flex items-center justify-center"
      >
        <img src="/logo.png" alt="loopIDE logo" className="w-32 h-32 object-contain" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-3xl font-bold mb-4 text-center text-gray-800"
      >
        Join Waitlist
      </motion.h1>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex flex-col sm:flex-row gap-3 w-full max-w-md bg-white p-4 rounded-xl shadow-md"
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Join
        </button>
      </motion.form>

      {status === 'ok' && <p className="mt-4 text-green-600 font-medium">Thanks! You are on the waitlist.</p>}
      {status === 'error' && <p className="mt-4 text-red-600 font-medium">There was an error submitting your email.</p>}
    </div>
  );
}

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Formspree endpoint (kendi endpoint'inizi buraya koyun)
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/your-endpoint';

export default function Home() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null); // null | 'pending' | 'ok' | 'error'

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black gap-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-[150px] h-[150px]"
      >
        <img src="/logo.png" alt="loopIDE logo" className="w-full h-full object-contain" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-2xl font-semibold"
      >
        Join Waitlist
      </motion.h1>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex flex-col sm:flex-row gap-3 w-full max-w-sm"
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-black rounded-lg"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 border-2 border-black rounded-lg hover:bg-black hover:text-white transition-colors"
        >
          Join
        </button>
      </motion.form>

      {status === 'ok' && <p className="text-green-600">Thanks! You are on the waitlist.</p>}
      {status === 'error' && <p className="text-red-600">There was an error submitting your email.</p>}
    </div>
  );
}

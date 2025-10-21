// pages/index.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/your-endpoint'; // değiştir

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
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-[350px] h-[350px] mb-8"
      >
        <img src="/logo.png" alt="loopIDE logo" className="w-full h-full object-contain" />
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md"
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300 text-sm"
          required
        />
        <button
          type="submit"
          className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-900 transition"
        >
          Join
        </button>
      </motion.form>

      {status === 'ok' && <p className="mt-3 text-green-600 text-sm">Thanks! You are on the waitlist.</p>}
      {status === 'error' && <p className="mt-3 text-red-600 text-sm">There was an error submitting your email.</p>}

      <div className="flex gap-6 mt-10">
        {/* GitHub SVG */}
        <a href="https://github.com/abdbali/loop" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-gray-700">
            <path fill="currentColor" d="M12 .5C5.73.5.8 5.43.8 11.7c0 4.86 3.14 8.98 7.5 10.44.55.1.75-.24.75-.53v-1.86c-3.05.66-3.69-1.33-3.69-1.33-.5-1.28-1.23-1.62-1.23-1.62-.99-.68.07-.67.07-.67 1.1.08 1.68 1.13 1.68 1.13.97 1.66 2.54 1.18 3.16.9.1-.7.38-1.18.69-1.45-2.44-.28-5-1.22-5-5.42 0-1.2.43-2.18 1.12-2.95-.11-.27-.49-1.36.11-2.84 0 0 .92-.29 3 .11.87-.24 1.8-.36 2.73-.36.93 0 1.85.12 2.72.36 2.07-.4 2.99-.11 2.99-.11.6 1.48.22 2.57.11 2.84.7.77 1.12 1.75 1.12 2.95 0 4.21-2.57 5.13-5.02 5.41.39.34.73 1.01.73 2.05v3.04c0 .29.2.64.76.53 4.36-1.46 7.5-5.58 7.5-10.44C23.2 5.43 18.27.5 12 .5z"/>
          </svg>
        </a>

        {/* Instagram SVG */}
        <a href="https://www.instagram.com/ideloop" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-gray-700">
            <path fill="currentColor" d="M7 2C4.238 2 2 4.238 2 7v10c0 2.762 2.238 5 5 5h10c2.762 0 5-2.238 5-5V7c0-2.762-2.238-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-3a1 1 0 110 2 1 1 0 010-2z"/>
          </svg>
        </a>
      </div>
    </main>
  );
}

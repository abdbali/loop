import React, { useState } from "react";
import { motion } from "framer-motion";

const APPS_SCRIPT_WEBAPP_URL = "REPLACE_WITH_YOUR_APPS_SCRIPT_WEBAPP_URL";

export default function LoopIDELanding() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);
  const [msg, setMsg] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setStatus('error');
      setMsg('Please enter a valid email address.');
      return;
    }
    setStatus('pending');
    setMsg('');
    try {
      const res = await fetch(APPS_SCRIPT_WEBAPP_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const text = await res.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch {
        if (text.includes('<!DOCTYPE html') || text.includes('<?xml')) {
          data = { status: 'ok' };
        } else {
          data = { status: 'error', message: 'Invalid JSON response from server' };
        }
      }

      if (data.status === 'ok') {
        setStatus('ok');
        setMsg("Thanks — you're on the waitlist!");
        setEmail('');
      } else {
        setStatus('error');
        setMsg(data.message || 'There was an error saving your email.');
      }
    } catch (err) {
      setStatus('error');
      setMsg(err.message || 'Network error');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black">
      <div className="max-w-xl w-full px-8 py-12 text-center">
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="mx-auto w-[350px] h-[350px] mb-6">
            <img src="/logo.png" alt="loopIDE logo" className="w-full h-full object-contain" />
          </div>

          <h1 className="text-3xl font-semibold mb-2">loopIDE</h1>
          <p className="text-sm opacity-80 mb-8">A minimal visual IDE for Arduino & ESP — modern block flow, fast prototyping. Join the waitlist.</p>
        </motion.div>

        <motion.form onSubmit={submit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row gap-3 items-center justify-center">
          <input
            type="email"
            placeholder="you@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:flex-1 border border-black rounded-lg px-4 py-3 placeholder-black/40 bg-white"
          />
          <button
            type="submit"
            className="inline-block px-6 py-3 border-2 border-black rounded-lg font-medium hover:bg-black hover:text-white transition-colors"
            disabled={status === 'pending'}
          >
            {status === 'pending' ? 'Saving...' : 'Join waitlist'}
          </button>
        </motion.form>

        <div className="mt-4 h-8">
          {status === 'ok' && <p className="text-sm text-black/80">{msg}</p>}
          {status === 'error' && <p className="text-sm text-red-600">{msg}</p>}
        </div>
      </div>
    </div>
  );
}

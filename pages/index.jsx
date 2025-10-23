"use client";
import { useState, useEffect } from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen bg-white transition-opacity duration-700">
        <p className="text-gray-500 text-lg animate-pulse">Loading...</p>
      </div>
    );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black transition-opacity duration-700">
      {/* Logo */}
      <img
        src="/logo.png"
        alt="LoopIDE Logo"
        className="w-[350px] h-[350px] object-contain mb-6 transition-opacity duration-700"
      />

      {/* Waitlist Form */}
      <form
        action="https://formspree.io/f/xjkadlnd"
        method="POST"
        className="flex flex-col items-center space-y-3"
      >
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          className="border border-gray-300 rounded-md px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-black transition-all"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-all"
        >
          Join Waitlist
        </button>
      </form>

      {/* Social Icons */}
      <div className="flex space-x-6 mt-6">
        <a
          href="https://github.com/abdbali/loop"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-gray-700 transition-colors text-2xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/ideloop"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-gray-700 transition-colors text-2xl"
        >
          <FaInstagram />
        </a>
      </div>

      {/* Merch Section */}
      <div className="mt-10">
        <a
          href="https://makerworld.com/en/@abdbali/upload"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/merch.png"
            alt="LoopIDE Merch"
            className="w-[400px] h-[150px] object-contain hover:scale-105 transition-transform duration-300"
          />
        </a>
      </div>
    </div>
  );
}

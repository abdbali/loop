import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://formspree.io/f/your-endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("Thanks for signing up!");
        setEmail("");
      } else {
        setStatus("Failed to submit. Try again.");
      }
    } catch (error) {
      setStatus("Failed to submit. Try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black px-4">
      <img
        src="/logo.png"
        alt="loopIDE logo"
        className="w-[150px] h-[150px] object-contain mb-8"
      />
      <h1 className="text-3xl font-bold mb-4">Join the Waitlist</h1>
      <p className="mb-6 text-center max-w-md">
        Stay updated! Enter your email below to get early access.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          placeholder="Your email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="border border-black px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-900 transition"
        >
          Join
        </button>
      </form>

      {status && <p className="mt-4">{status}</p>}
    </div>
  );
}

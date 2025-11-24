import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function ContactForm() {
  const [contactState, setContactState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function submitContact(e) {
    e.preventDefault();
    setError("");

    if (!contactState.name || !contactState.email || !contactState.message) {
      setError("Please fill out all fields.");
      return;
    }

    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactState),
      });

      if (!res.ok) throw new Error("Server error");

      setSuccess(true);
      setContactState({ name: "", email: "", message: "" });
      setTimeout(() => setSuccess(false), 2500);
    } catch (err) {
      setError("Failed to send message. Try again later.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="mt-20 mb-12">
      <h3 className="text-2xl font-semibold mb-4" style={{ color: "var(--dark-colour)" }}>
        Contact
      </h3>

      <div className="max-w-2xl">
        <form onSubmit={submitContact} className="grid grid-cols-1 gap-4">
          <label className="flex flex-col">
            <span className="text-sm mb-2">Your Name</span>
            <input
              value={contactState.name}
              onChange={(e) => setContactState((s) => ({ ...s, name: e.target.value }))}
              className="px-4 py-3 rounded-lg"
              placeholder="Jane Doe"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm mb-2">Your Email</span>
            <input
              value={contactState.email}
              onChange={(e) => setContactState((s) => ({ ...s, email: e.target.value }))}
              className="px-4 py-3 rounded-lg"
              placeholder="you@example.com"
              type="email"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm mb-2">Message</span>
            <textarea
              value={contactState.message}
              onChange={(e) => setContactState((s) => ({ ...s, message: e.target.value }))}
              rows={5}
              className="px-4 py-3 rounded-lg"
              placeholder="How can I help?"
            />
          </label>

          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={sending}
              className="px-5 py-3 rounded-lg font-medium shadow"
              style={{
                background: "linear-gradient(90deg,var(--primary-colour), var(--secondary-colour))",
                color: "var(--light-colour)",
              }}
            >
              {sending ? "Sending..." : "Send Message"}
            </button>

            <AnimatePresence>
              {success && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-green-100 text-green-800"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="#0f5132" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Sent
                </motion.div>
              )}
            </AnimatePresence>

            {error && <div className="text-sm text-red-600">{error}</div>}
          </div>
        </form>

        <p className="mt-6 text-sm text-gray-600">
          Or email me directly at{" "}
          <a href="mailto:you@example.com" className="underline">
            you@example.com
          </a>
        </p>
      </div>
    </section>
  );
}

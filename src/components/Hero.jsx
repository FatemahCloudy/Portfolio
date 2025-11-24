import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="about" className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="order-2 md:order-1">
        <div className="inline-flex items-center gap-4 mb-4">
          <div
            className="w-32 h-32 rounded-full overflow-hidden shadow-lg border-2"
            style={{ borderColor: "var(--secondary-colour)" }}
          >
            <img src="/assets/images/main.jpg" alt="profile" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold" style={{ color: "var(--dark-colour)" }}>
              Fatemah Almarhoon
            </h2>
            <p className="mt-1 text-sm opacity-80">
              I build clean, modern and accessible web experiences.
            </p>
          </div>
        </div>

        <p className="text-gray-600 mb-6">
          I’m a web developer focused on creating fast, usable interfaces and delightful interactions.
        </p>

        <div className="flex gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm"
            style={{
              background: "linear-gradient(90deg,var(--primary-colour), var(--secondary-colour))",
              color: "var(--light-colour)",
            }}
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border"
            style={{ borderColor: "rgba(0,0,0,0.06)" }}
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="order-1 md:order-2">
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <div
            className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg"
            style={{ background: "linear-gradient(120deg, rgba(121,93,174,0.12), rgba(207,127,219,0.06))" }}
          >
            <div className="w-full h-full flex items-center justify-center text-xl opacity-60">
              Showcase — clean hero artwork or project screenshot
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

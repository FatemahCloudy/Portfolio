import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      desc: "A clean and responsive personal portfolio site to showcase my work and skills.",
      img: "/assets/images/portfolio.png",
      category: "web",
      live: "#",
      repo: "#",
    },
    {
      id: 2,
      title: "Todo App",
      desc: "A simple task manager with local persistence to boost productivity.",
      img: "/assets/images/todo.png",
      category: "app",
      live: "#",
      repo: "#",
    },
    {
      id: 3,
      title: "Memory of Place",
      desc: "Save and share memories about places you love.",
      img: "/assets/images/memory.png",
      category: "app",
      live: "#",
      repo: "#",
    },
  ];

  const [filter, setFilter] = useState("all");
  const filtered = projects.filter((p) => filter === "all" || p.category === filter);

  return (
    <section id="projects" className="mt-20">
      <h3 className="text-2xl font-semibold mb-4" style={{ color: "var(--dark-colour)" }}>
        Projects
      </h3>

      <div className="flex gap-3 mb-6">
        <button onClick={() => setFilter("all")} className={`px-3 py-1 rounded-full text-sm ${filter === "all" ? "ring-2 ring-offset-2 ring-purple-300" : "border"}`}>
          All
        </button>
        <button onClick={() => setFilter("web")} className={`px-3 py-1 rounded-full text-sm ${filter === "web" ? "ring-2 ring-offset-2 ring-purple-300" : "border"}`}>
          Web
        </button>
        <button onClick={() => setFilter("app")} className={`px-3 py-1 rounded-full text-sm ${filter === "app" ? "ring-2 ring-offset-2 ring-purple-300" : "border"}`}>
          Apps
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <motion.article
            key={p.id}
            whileHover={{ scale: 1.02 }}
            className="rounded-xl overflow-hidden shadow-md bg-card p-0"
            style={{ background: "var(--card-colour)" }}
          >
            <div className="relative">
              <img src={p.img} alt={p.title} className="w-full h-44 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                <div>
                  <h4 className="text-white font-semibold">{p.title}</h4>
                  <p className="text-xs text-white/90">{p.desc}</p>
                </div>
              </div>
            </div>

            <div className="p-4">
              <h4 className="font-semibold mb-1">{p.title}</h4>
              <p className="text-sm text-gray-600 mb-3">{p.desc}</p>
              <div className="flex gap-2">
                <a href={p.live} className="text-sm px-3 py-1 rounded-md" style={{ background: "rgba(121,93,174,0.08)", color: "var(--primary-colour)" }}>
                  Live
                </a>
                <a href={p.repo} className="text-sm px-3 py-1 rounded-md border" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                  Code
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {filtered.length === 0 && <p className="text-center mt-6 text-gray-500">No projects found.</p>}
    </section>
  );
}

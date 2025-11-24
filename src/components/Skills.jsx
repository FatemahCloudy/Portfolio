import React from "react";

export default function Skills() {
  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Python", "Java", "PostgreSQL", "MySQL", "Dart",
    "JetBrains IDEs", "VS Code", "Git", "Figma", "Responsive Design", "UI/UX", "Agile", "UML",
  ];

  return (
    <section id="skills" className="mt-20">
      <h3 className="text-2xl font-semibold mb-4" style={{ color: "var(--dark-colour)" }}>
        Skills
      </h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((s, i) => (
          <div
            key={i}
            className="px-3 py-1 rounded-full text-sm font-medium shadow-sm"
            style={{
              background: "var(--card-colour)",
              border: "1px solid rgba(0,0,0,0.06)",
            }}
          >
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}

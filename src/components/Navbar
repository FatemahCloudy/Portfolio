import React from "react";

export default function Navbar({ theme, toggleTheme }) {
  return (
    <header className="sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between glass rounded-b-2xl shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
            <img src="/assets/images/main.jpg" alt="Fatemah" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-lg font-semibold" style={{ color: "var(--light-colour)" }}>
              Fatemah Almarhoon
            </h1>
            <p className="text-xs opacity-80 -mt-1">Web Developer</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-6 items-center">
            <a href="#about" className="text-sm hover:underline">About</a>
            <a href="#projects" className="text-sm hover:underline">Projects</a>
            <a href="#skills" className="text-sm hover:underline">Skills</a>
            <a href="#contact" className="text-sm hover:underline">Contact</a>
          </div>

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-md border border-transparent hover:border-opacity-20"
          >
            {theme === "dark" ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="var(--primary-colour)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="4" stroke="var(--primary-colour)" strokeWidth="1.6" />
              </svg>
            )}
          </button>

          <a
            href="#contact"
            className="hidden sm:inline-block py-2 px-4 rounded-md text-sm font-medium"
            style={{
              background: "linear-gradient(90deg,var(--primary-colour), var(--secondary-colour))",
              color: "var(--light-colour)",
            }}
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

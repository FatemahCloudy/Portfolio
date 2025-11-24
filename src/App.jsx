import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './styles/variables.css';

export default function App() {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <div className="min-h-screen font-sans antialiased bg-root transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="max-w-6xl mx-auto px-6 py-16">
        <Hero />
        <Projects />
        <Skills />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

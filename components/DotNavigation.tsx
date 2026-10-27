"use client";

import React, { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Toolkit" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const DotNavigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      aria-label="Section Navigation"
      className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3.5 py-4 px-2 rounded-full bg-white/40 dark:bg-black/40 backdrop-blur-md border border-slate-200/50 dark:border-white/10 shadow-sm"
    >
      {sections.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <button
            key={section.id}
            onClick={() => scrollTo(section.id)}
            aria-label={`Scroll to ${section.label}`}
            className="group relative flex items-center justify-center p-1 focus:outline-none"
          >
            <span className="absolute right-7 px-2.5 py-1 rounded-md bg-slate-900 dark:bg-slate-800 text-white text-[11px] font-medium whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity shadow-md">
              {section.label}
            </span>

            <span
              className={`block rounded-full transition-all duration-300 ${
                isActive
                  ? "w-3 h-3 bg-violet-500 ring-4 ring-violet-500/25 shadow-[0_0_12px_rgba(139,92,246,0.8)]"
                  : "w-2 h-2 bg-slate-400/60 dark:bg-slate-600 hover:bg-slate-500 dark:hover:bg-slate-400 group-hover:scale-125"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
};

export default DotNavigation;

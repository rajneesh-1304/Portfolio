"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X, FileText, ArrowUpRight, Sparkles } from "lucide-react";
import { RESUME_PATH } from "@/data";

export const Navbar: React.FC = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Toolkit", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? "bg-white/90 dark:bg-[#040714]/90 backdrop-blur-2xl border-b border-slate-200/80 dark:border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.12)] py-3"
            : "bg-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-2.5 sm:gap-3 focus:outline-none min-w-0"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-700 text-white flex items-center justify-center font-mono font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(139,92,246,0.35)] group-hover:scale-105 transition-transform flex-shrink-0">
              RK
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors whitespace-nowrap">
                Rajneesh Kumar
              </span>
              <span className="hidden sm:inline-block text-[10px] font-mono font-medium text-slate-500 dark:text-slate-400 -mt-0.5 truncate">
                &lt;Systems &amp; Full-Stack /&gt;
              </span>
            </div>
          </Link>

          <nav className="hidden min-[1000px]:flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-100/90 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 backdrop-blur-2xl shadow-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-white rounded-full hover:bg-white dark:hover:bg-white/10 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden min-[1000px]:flex items-center gap-2.5">
            {mounted && (
              <button
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 hover:text-violet-500 dark:hover:text-violet-400 hover:border-violet-500/40 transition-all shadow-sm"
              >
                {resolvedTheme === "dark" ? (
                  <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-700 transition-transform hover:-rotate-12" />
                )}
              </button>
            )}

            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-slate-300 dark:border-white/15 bg-white/80 dark:bg-white/[0.04] text-slate-800 dark:text-slate-200 hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-400 transition-all shadow-sm group"
            >
              <FileText className="w-3.5 h-3.5 text-violet-400 group-hover:scale-110 transition-transform" />
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all hover:-translate-y-0.5 ml-1"
            >
              <span>Let&apos;s Talk</span>
            </a>
          </div>

          <div className="flex min-[1000px]:hidden items-center gap-2">
            {mounted && (
              <button
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className="p-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300"
              >
                {resolvedTheme === "dark" ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-700" />
                )}
              </button>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="p-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 active:scale-95 transition-transform"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="min-[1000px]:hidden border-b border-slate-200/80 dark:border-white/10 bg-white/95 dark:bg-[#070b1a]/95 backdrop-blur-2xl px-5 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-base font-semibold text-slate-800 dark:text-slate-200 hover:text-violet-500 hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-col gap-2.5">
              <a
                href={RESUME_PATH}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-violet-500/30 text-violet-600 dark:text-violet-400 text-sm font-semibold bg-violet-500/5 hover:bg-violet-500/10 transition-all whitespace-nowrap"
              >
                <FileText className="w-4 h-4 flex-shrink-0" />
                <span>Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-semibold shadow-md active:scale-[0.99] transition-transform whitespace-nowrap"
              >
                <span>Initiate Contact</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 min-[1000px]:hidden animate-in fade-in duration-200"
        />
      )}
    </>
  );
};

export default Navbar;

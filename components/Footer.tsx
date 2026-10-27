"use client";

import React from "react";
import Link from "next/link";
import { Mail, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { RESUME_PATH, CONTACT_EMAIL } from "@/data";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full pt-16 pb-12 border-t border-slate-200/80 dark:border-white/10 mt-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-12">
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-violet-600 text-white flex items-center justify-center font-mono font-bold text-xs shadow-md">
                RK
              </div>
              <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white">
                Rajneesh Kumar
              </span>
            </Link>

            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Full-Stack Software Engineer dedicated to architecting fault-tolerant microservices, low-latency streaming pipelines, and clean digital experiences.
            </p>

            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://github.com/rajneesh-1304"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-violet-500 dark:hover:text-violet-400 hover:border-violet-500/40 transition-all shadow-sm"
              >
                <FaGithub className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/rajneesh-kumar-5202122ab"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-blue-500 hover:border-blue-500/40 transition-all shadow-sm"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                aria-label="Email Rajneesh"
                className="w-9 h-9 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-violet-500 dark:hover:text-violet-400 hover:border-violet-500/40 transition-all shadow-sm"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href="https://leetcode.com/rajneesh1304"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode Profile"
                className="w-9 h-9 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-amber-500 hover:border-amber-500/40 transition-all shadow-sm"
              >
                <SiLeetcode className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              EXPLORE
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="#about"
                  className="text-slate-600 dark:text-slate-400 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-slate-600 dark:text-slate-400 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
                >
                  Toolkit
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-slate-600 dark:text-slate-400 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-slate-600 dark:text-slate-400 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
                >
                  Experience
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              RESOURCES
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href={RESUME_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-violet-500 dark:hover:text-violet-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Resume (PDF)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/rajneesh-1304"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
                >
                  GitHub Source
                </a>
              </li>
              <li>
                <a
                  href="https://leetcode.com/rajneesh1304"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
                >
                  LeetCode Profile
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              CONTACT
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Open to Software Engineering opportunities worldwide.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-violet-600 dark:text-violet-400 hover:underline break-all"
            >
              <Mail className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{CONTACT_EMAIL}</span>
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200/80 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Rajneesh Kumar. Built with Next.js, TypeScript & Tailwind CSS.
          </div>
          <div className="font-mono text-[11px] text-slate-400 dark:text-slate-500">
            Engineered for High Throughput & Clean Architecture
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

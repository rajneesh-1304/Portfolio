"use client";

import React, { useState } from "react";
import { Mail, FileText, ArrowUpRight, Copy, Check } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { RESUME_PATH, CONTACT_EMAIL } from "@/data";

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 w-full relative">
      <div className="ambient-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="glass-card shadow-2xl p-6 sm:p-12 lg:p-16 text-center flex flex-col items-center">
          <div className="flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-violet-500 dark:text-violet-400 mb-3">
            <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
            <span>05 INITIATE CONTACT</span>
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Let&apos;s Build Something{" "}
            <span className="gradient-text">
              High-Impact
            </span>
          </h2>

          <p className="text-slate-600 dark:text-slate-300 mt-4 max-w-xl text-xs sm:text-sm md:text-base leading-relaxed">
            Actively seeking Full-Stack Software Engineering roles. Whether you have an open team position, a distributed systems challenge, or a new project idea — my inbox is open.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10 w-full sm:w-auto">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="btn-primary gap-2 px-6 sm:px-7 py-3 text-sm sm:text-base w-full sm:w-auto"
            >
              <Mail className="w-4 h-4" />
              <span>Say Hello</span>
            </a>

            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary gap-2 px-6 sm:px-7 py-3 text-sm sm:text-base w-full sm:w-auto group"
            >
              <FileText className="w-4 h-4 text-violet-400 group-hover:scale-110 transition-transform" />
              <span>Resume</span>
              <ArrowUpRight className="w-4 h-4 opacity-60" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="btn-secondary gap-2 px-5 py-3 text-sm font-mono text-slate-600 dark:text-slate-400 w-full sm:w-auto"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-500 dark:text-emerald-400 font-semibold">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-12 mt-10 sm:mt-12 pt-8 border-t border-slate-200/80 dark:border-white/10 w-full">
            <a
              href="https://github.com/rajneesh-1304"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs sm:text-sm font-mono font-bold tracking-wider text-slate-600 dark:text-slate-400 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
            >
              <FaGithub className="w-4 h-4" />
              <span>GITHUB</span>
            </a>

            <a
              href="https://www.linkedin.com/in/rajneesh-kumar-5202122ab"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs sm:text-sm font-mono font-bold tracking-wider text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors"
            >
              <FaLinkedin className="w-4 h-4 text-blue-500" />
              <span>LINKEDIN</span>
            </a>

            <a
              href="https://leetcode.com/rajneesh1304"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs sm:text-sm font-mono font-bold tracking-wider text-slate-600 dark:text-slate-400 hover:text-amber-500 transition-colors"
            >
              <SiLeetcode className="w-4 h-4 text-amber-500" />
              <span>LEETCODE</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

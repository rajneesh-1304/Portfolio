"use client";

import React, { useState } from "react";
import { Mail, FileText, Send, ArrowUpRight, Copy, Check } from "lucide-react";
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-violet-600/5 dark:bg-violet-600/10 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-white/80 dark:bg-[#070b1a]/90 border border-slate-200/80 dark:border-white/10 p-6 sm:p-12 lg:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] text-center flex flex-col items-center backdrop-blur-2xl">
          <div className="flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-violet-500 dark:text-violet-400 mb-3">
            <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></span>
            <span>05 INITIATE CONTACT</span>
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Let&apos;s Build Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-amber-300">
              High-Impact
            </span>
          </h2>

          <p className="text-slate-600 dark:text-slate-300 mt-4 max-w-xl text-xs sm:text-sm md:text-base leading-relaxed">
            Actively seeking Full-Stack Software Engineering roles. Whether you have an open team position, a distributed systems challenge, or a new project idea — my inbox is open.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10 w-full sm:w-auto">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-xl text-sm sm:text-base font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-[0_0_25px_rgba(139,92,246,0.35)] hover:shadow-[0_0_35px_rgba(139,92,246,0.5)] transition-all hover:-translate-y-0.5 w-full sm:w-auto"
            >
              <Mail className="w-4 h-4" />
              <span>Say Hello</span>
            </a>

            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-xl text-sm sm:text-base font-semibold border border-slate-300 dark:border-white/15 bg-white dark:bg-white/5 text-slate-800 dark:text-slate-200 hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-400 transition-all hover:-translate-y-0.5 shadow-sm w-full sm:w-auto"
            >
              <FileText className="w-4 h-4 text-violet-400" />
              <span>Resume</span>
              <ArrowUpRight className="w-4 h-4 opacity-60" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-mono text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/20 transition-all w-full sm:w-auto"
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

"use client";

import React from "react";
import { Github, ArrowUpRight} from "lucide-react";
import { projects } from "@/data";

export const RecentProjects: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 w-full relative" id="projects">
      <div className="absolute top-1/2 right-1/4 w-[650px] h-[350px] bg-violet-600/5 dark:bg-violet-600/10 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="flex flex-col items-start mb-12 sm:mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-violet-500 dark:text-violet-400 mb-3">
          <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></span>
          <span>03 ENGINEERED PLATFORMS</span>
        </div>
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Selected Production &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-amber-300">
            Personal Systems
          </span>
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mt-3 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed">
          Full-stack platforms engineered with low-latency streaming, resilient microservices, and clean, type-safe architectures.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {projects.map((item) => (
          <div
            key={item.id}
            className="group relative rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-[#070b1a]/90 backdrop-blur-2xl p-5 sm:p-8 flex flex-col justify-between hover:border-violet-500/40 hover:shadow-[0_20px_45px_rgba(139,92,246,0.16)] transition-all duration-300"
          >
            <div className="relative w-full h-48 xs:h-56 sm:h-72 rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-[#0a0f24] mb-5 sm:mb-6 flex items-center justify-center">
              <img
                src="/bg.png"
                alt="bg"
                className="w-full h-full object-cover opacity-35 absolute inset-0 group-hover:scale-105 transition-transform duration-500"
              />

              <img
                src={item.img}
                alt={item.title}
                className="z-10 max-h-[82%] max-w-[85%] object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute top-3.5 left-3.5 z-20">
                <span className="px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider bg-black/75 backdrop-blur-md text-violet-300 border border-violet-500/30 shadow-md">
                  {item.category || "FULL-STACK"}
                </span>
              </div>

              <div className="absolute top-3.5 right-3.5 z-20">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 dark:bg-white/5 border border-white/10 flex items-center justify-center text-[11px] sm:text-xs font-mono font-bold text-slate-200 backdrop-blur-md">
                  0{item.id}
                </span>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mt-2.5 sm:mt-3 text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {item.des}
                </p>
              </div>

              <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-slate-200/80 dark:border-white/[0.08]">
                <div className="flex flex-wrap gap-1.5 sm:gap-2 items-center">
                  {(item.techStack || []).map((tech: string, tIdx: number) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-mono font-medium bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/[0.08] hover:border-violet-500/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col xs:flex-row items-stretch xs:items-center justify-between gap-3 mt-6 sm:mt-7 pt-4 border-t border-slate-200/80 dark:border-white/[0.08]">
                <a
                  href={item.github || item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/[0.05] hover:bg-slate-200 dark:hover:bg-white/[0.1] hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10 transition-all duration-200 shadow-sm w-full xs:w-auto"
                >
                  <Github className="w-4 h-4" />
                  <span>Source Code</span>
                </a>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 border border-violet-400/40 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-all duration-200 w-full xs:w-auto"
                >
                  <span>Live Platform</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;

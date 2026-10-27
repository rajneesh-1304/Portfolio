"use client";

import React from "react";
import { Github, ArrowUpRight } from "lucide-react";
import { projects } from "@/data";

export const RecentProjects: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 w-full relative" id="projects">
      <div className="ambient-glow top-1/2 right-1/4" />

      <div className="flex flex-col items-start mb-12 sm:mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-violet-500 dark:text-violet-400 mb-3">
          <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
          <span>03 ENGINEERED PLATFORMS</span>
        </div>
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Selected Production &{" "}
          <span className="gradient-text">
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
            className="group relative glass-card glass-card-hover p-5 sm:p-8 flex flex-col justify-between"
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
                className="z-10 max-h-[82%] max-w-[85%] object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute top-3.5 left-3.5 z-20">
                <span className="px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider bg-black/75 backdrop-blur-md text-violet-300 border border-violet-500/30 shadow-md">
                  {item.category || "FULL-STACK"}
                </span>
              </div>

              <div className="absolute top-3.5 right-3.5 z-20">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-xs font-mono font-bold text-slate-200 backdrop-blur-md">
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

              <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-slate-200/80 dark:border-white/10">
                <div className="flex flex-wrap gap-1.5 sm:gap-2 items-center">
                  {(item.techStack || []).map((tech: string, tIdx: number) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:border-violet-500/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col xs:flex-row items-stretch xs:items-center justify-between gap-3 mt-6 sm:mt-7 pt-4 border-t border-slate-200/80 dark:border-white/10">
                <a
                  href={item.github || item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary gap-2 px-4 py-2.5 text-xs sm:text-sm w-full xs:w-auto"
                >
                  <Github className="w-4 h-4" />
                  <span>Source Code</span>
                </a>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary gap-1.5 px-5 py-2.5 text-xs sm:text-sm w-full xs:w-auto"
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

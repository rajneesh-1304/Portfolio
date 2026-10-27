"use client";

import React from "react";
import { workExperience } from "@/data";
import { Building2, Calendar, CheckCircle2 } from "lucide-react";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-24 w-full relative">
      <div className="ambient-glow top-1/2 left-10" />

      <div className="flex flex-col items-start mb-12 sm:mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-violet-500 dark:text-violet-400 mb-3">
          <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
          <span>04 PRODUCTION JOURNEY</span>
        </div>
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Industry Experience &{" "}
          <span className="gradient-text">
            Track Record
          </span>
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mt-3 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed">
          Hands-on software engineering across distributed teams — delivering resilient microservices, low-latency SSE, and multi-tenant architectures.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="relative pl-5 sm:pl-10 border-l-2 border-violet-500/30 dark:border-violet-500/20 space-y-10 sm:space-y-14">
          {workExperience.map((card) => (
            <div key={card.id} className="relative group">
              <div className="absolute -left-[27px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-full border-2 border-violet-500 bg-white dark:bg-[#070b1a] shadow-md shadow-violet-500/50 group-hover:scale-125 transition-transform duration-200" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-4">
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {card.role || card.title}
                  </h3>
                  <div className="flex items-center gap-1.5 mt-1 text-violet-600 dark:text-violet-400 text-xs sm:text-sm font-semibold uppercase tracking-wider font-mono">
                    <Building2 className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{card.company}</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 w-fit">
                  <Calendar className="w-3.5 h-3.5 text-violet-400 flex-shrink-0" />
                  <span>{card.duration}</span>
                  {card.location && (
                    <>
                      <span className="text-slate-400 dark:text-slate-600">|</span>
                      <span>{card.location}</span>
                    </>
                  )}
                </div>
              </div>

              <div className="glass-card glass-card-hover p-5 sm:p-8">
                {card.desc && (
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 sm:mb-5 font-medium">
                    {card.desc}
                  </p>
                )}

                {card.highlights && card.highlights.length > 0 && (
                  <ul className="space-y-2.5 sm:space-y-3">
                    {card.highlights.map((point, pIdx) => (
                      <li
                        key={pIdx}
                        className="flex items-start text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-violet-500 flex-shrink-0 mt-0.5 me-2.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {card.skills && card.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-slate-100 dark:border-white/5">
                    {card.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs px-2.5 sm:px-3 py-1 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/10 font-mono font-medium hover:border-violet-500/40 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

"use client";

import React, { useEffect, useState } from "react";
import {
  GraduationCap,
  Briefcase,
  MapPin,
  Clock,
  Radio,
  Sparkles,
  CheckCircle2,
  Cpu,
} from "lucide-react";

export const About: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState({
    ist: "Active (IST)",
    utc: "Syncing (UTC)",
  });

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const now = new Date();
      setTime({
        ist: now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }),
        utc: now.toLocaleTimeString("en-US", {
          timeZone: "UTC",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 sm:py-24 w-full relative" id="about">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-violet-600/5 dark:bg-violet-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="flex flex-col items-start mb-12 sm:mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-violet-500 dark:text-violet-400 mb-3">
          <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></span>
          <span>01 ARCHITECTURAL FOUNDATION</span>
        </div>
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Engineering Philosophy &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-amber-300">
            Academic Rigor
          </span>
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mt-3 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed">
          How formal algorithmic thinking translates into fault-tolerant distributed architectures and low-latency production applications.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="group rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-[#070b1a]/85 backdrop-blur-xl p-5 sm:p-7 flex flex-col justify-between hover:border-violet-500/40 hover:shadow-[0_20px_40px_rgba(139,92,246,0.12)] transition-all duration-300">
          <div>
            <div className="flex items-center justify-between mb-5 sm:mb-6">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-violet-500/10 border border-violet-500/25 text-violet-500 dark:text-violet-400 flex items-center justify-center shadow-sm">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/25">
                CGPA: 8.0 / 10
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              B.E. Computer Science & Engineering
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-violet-600 dark:text-violet-400 mt-1">
              Chandigarh College of Engineering & Technology (CCET)
            </p>
            <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Batch of 2022 – 2026 • Chandigarh, India
            </p>

            <ul className="mt-5 sm:mt-6 space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-violet-500 flex-shrink-0 mt-0.5" />
                <span>Deep mastery of Data Structures, Algorithmic Analysis, and System Internals.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-violet-500 flex-shrink-0 mt-0.5" />
                <span>300+ LeetCode problems solved with optimal time & space complexity.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-violet-500 flex-shrink-0 mt-0.5" />
                <span>Strict application of Test-Driven Development (TDD) and clean code patterns.</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 sm:mt-8 pt-4 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
            <span>Specialization</span>
            <span className="font-semibold text-slate-900 dark:text-slate-100">Distributed Systems & DSA</span>
          </div>
        </div>

        <div className="group rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-[#070b1a]/85 backdrop-blur-xl p-5 sm:p-7 flex flex-col justify-between hover:border-violet-500/40 hover:shadow-[0_20px_40px_rgba(139,92,246,0.12)] transition-all duration-300">
          <div>
            <div className="flex items-center justify-between mb-5 sm:mb-6">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/25 text-indigo-500 dark:text-indigo-400 flex items-center justify-center shadow-sm">
                <Cpu className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-600 dark:text-violet-300 border border-violet-500/25">
                Active Production
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              Event-Driven Architectures
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
              Zenmonk • Vectrium Ventures • SparkScale
            </p>
            <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Microservices & Multi-Tenant Databases
            </p>

            <ul className="mt-5 sm:mt-6 space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                <span>Engineered real-time QR attendance with SSE, reducing manual overhead by ~70%.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                <span>Built 4 NestJS microservices communicating over RabbitMQ event brokers.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                <span>Implemented tenant isolation with MikroORM and PostgreSQL schema separation.</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 sm:mt-8 pt-4 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
            <span>Core Stack</span>
            <span className="font-semibold text-slate-900 dark:text-slate-100">NestJS • RabbitMQ • PostgreSQL</span>
          </div>
        </div>

        <div className="group rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-[#070b1a]/85 backdrop-blur-xl p-5 sm:p-7 flex flex-col justify-between hover:border-emerald-500/40 hover:shadow-[0_20px_40px_rgba(16,185,129,0.12)] transition-all duration-300">
          <div>
            <div className="flex items-center justify-between mb-5 sm:mb-6">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-500 dark:text-emerald-400 flex items-center justify-center shadow-sm">
                <Radio className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span>Open for Roles</span>
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              Global Distributed Sync
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-1">
              Async-First • Remote & On-Site Ready
            </p>
            <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              High-responsiveness across worldwide time zones
            </p>

            <div className="grid grid-cols-1 xs:grid-cols-2 gap-2.5 mt-5 sm:mt-6">
              <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10">
                <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 mb-1">
                  <span className="font-semibold flex items-center gap-1 text-slate-700 dark:text-slate-300">
                    <MapPin className="w-3 h-3 text-violet-400 flex-shrink-0" />
                    IST
                  </span>
                  <span className="font-mono text-[10px] text-violet-500 dark:text-violet-400 font-semibold">UTC+5:30</span>
                </div>
                <div className="text-xs sm:text-sm font-mono font-bold text-slate-900 dark:text-white tracking-tight sm:tracking-wider truncate">
                  {time.ist}
                </div>
              </div>

              <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10">
                <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 mb-1">
                  <span className="font-semibold flex items-center gap-1 text-slate-700 dark:text-slate-300">
                    <Clock className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                    UTC
                  </span>
                  <span className="font-mono text-[10px] text-emerald-500 dark:text-emerald-400 font-semibold">GMT+0</span>
                </div>
                <div className="text-xs sm:text-sm font-mono font-bold text-slate-900 dark:text-white tracking-tight sm:tracking-wider truncate">
                  {mounted ? `${time.utc} UTC` : "Syncing"}
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 rounded-2xl bg-violet-500/5 dark:bg-violet-500/10 border border-violet-500/20 text-xs text-slate-600 dark:text-slate-300 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span className="text-[11px] sm:text-xs">4+ hours direct overlap with US / European / APAC work schedules.</span>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 pt-4 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
            <span>Guaranteed Response</span>
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">&lt; 1 Hour</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

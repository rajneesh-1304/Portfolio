"use client";

import React, { useState } from "react";
import {
  FileText,
  ArrowRight,
  Terminal,
  Activity,
  Cpu,
  ArrowUpRight,
} from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { Spotlight } from "./ui/Spotlight";
import { RESUME_PATH } from "@/data";

const telemetryEvents = [
  { id: 1, service: "SSE-Gateway", status: "ONLINE", metric: "240 active clients", color: "text-emerald-400", border: "border-emerald-500/30" },
  { id: 2, service: "RabbitMQ-Broker", status: "ROUTING", metric: "4 microservice queues", color: "text-amber-400", border: "border-amber-500/30" },
  { id: 3, service: "PostgreSQL-16", status: "ISOLATED", metric: "Multi-tenant active", color: "text-cyan-400", border: "border-cyan-500/30" },
  { id: 4, service: "Next.js-Frontend", status: "HEALTHY", metric: "100% Core Web Vitals", color: "text-violet-400", border: "border-violet-500/30" },
];

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"telemetry" | "architecture">("telemetry");

  return (
    <section className="relative pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-20 w-full overflow-hidden" id="hero">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 h-screen"
        fill="rgba(139, 92, 246, 0.22)"
      />
      <Spotlight
        className="top-20 right-0 h-[80vh] w-[50vw]"
        fill="rgba(245, 158, 11, 0.12)"
      />
      <Spotlight
        className="top-1/2 left-1/3 h-[60vh] w-[40vw]"
        fill="rgba(6, 182, 212, 0.14)"
      />

      <div className="absolute inset-0 dark:bg-grid-white/[0.02] bg-grid-black/[0.03] pointer-events-none -z-10 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 backdrop-blur-xl mb-6 shadow-[0_0_20px_rgba(139,92,246,0.15)] max-w-full">
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] sm:text-sm font-mono font-medium text-violet-300 truncate">
                Full-Stack Intern @ Zenmonk &amp; Vectrium Ventures
              </span>
            </div>

            <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] break-words">
              Architecting{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-amber-300">
                Resilient Microservices
              </span>{" "}
              &amp; High-Throughput Web Systems.
            </h1>

            <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Hi, I&apos;m <span className="font-semibold text-slate-900 dark:text-white">Rajneesh Kumar</span> — a Full-Stack Software Engineer specialized in NestJS, RabbitMQ event queues, PostgreSQL multi-tenancy, and Next.js platforms.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-8 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex h-12 items-center justify-center rounded-xl px-6 font-semibold text-sm text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-700 hover:from-violet-500 hover:to-indigo-500 shadow-[0_0_25px_rgba(139,92,246,0.35)] hover:shadow-[0_0_35px_rgba(139,92,246,0.5)] transition-all duration-200 hover:-translate-y-0.5 gap-2 w-full sm:w-auto text-center"
              >
                <span>Explore Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={RESUME_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-300 dark:border-white/15 bg-white/80 dark:bg-white/[0.05] hover:bg-white dark:hover:bg-white/10 px-6 font-semibold text-slate-800 dark:text-slate-200 hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-500/40 transition-all gap-2 text-sm shadow-sm hover:-translate-y-0.5 w-full sm:w-auto text-center"
              >
                <FileText className="w-4 h-4 text-violet-400" />
                <span>Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-6 mt-10 pt-8 border-t border-slate-200/80 dark:border-white/10 w-full max-w-xl">
              <div>
                <div className="text-lg xs:text-xl sm:text-2xl font-extrabold font-mono text-slate-900 dark:text-white flex items-center gap-1 sm:gap-1.5">
                  <SiLeetcode className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 inline flex-shrink-0" />
                  <span>300+</span>
                </div>
                <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 mt-1 leading-snug">LeetCode DSA</div>
              </div>

              <div>
                <div className="text-lg xs:text-xl sm:text-2xl font-extrabold font-mono text-slate-900 dark:text-white flex items-center gap-1 sm:gap-1.5">
                  <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-violet-400 inline flex-shrink-0" />
                  <span>4 Services</span>
                </div>
                <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 mt-1 leading-snug">NestJS & RabbitMQ</div>
              </div>

              <div>
                <div className="text-lg xs:text-xl sm:text-2xl font-extrabold font-mono text-slate-900 dark:text-white">
                  <span>8.0 / 10</span>
                </div>
                <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 mt-1 leading-snug">CCET CSE B.E.</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 w-full">
            <div className="rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white/90 dark:bg-[#070b19]/90 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden">
              <div className="px-4 sm:px-5 py-3.5 border-b border-slate-200 dark:border-white/10 bg-slate-100/70 dark:bg-white/[0.03] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-1 sm:ml-2 font-mono text-[11px] sm:text-xs font-semibold text-slate-700 dark:text-slate-300">
                    telemetry.cluster.sys
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-emerald-500 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  <Activity className="w-3 h-3 animate-pulse" />
                  <span>LIVE</span>
                </div>
              </div>

              <div className="px-4 sm:px-5 pt-3 pb-2 flex items-center gap-3 border-b border-slate-200/60 dark:border-white/5">
                <button
                  onClick={() => setActiveTab("telemetry")}
                  className={`text-xs font-mono font-medium pb-1.5 transition-colors border-b-2 ${
                    activeTab === "telemetry"
                      ? "border-violet-500 text-violet-600 dark:text-violet-400"
                      : "border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  }`}
                >
                  Services Telemetry
                </button>
                <button
                  onClick={() => setActiveTab("architecture")}
                  className={`text-xs font-mono font-medium pb-1.5 transition-colors border-b-2 ${
                    activeTab === "architecture"
                      ? "border-amber-500 text-amber-600 dark:text-amber-400"
                      : "border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  }`}
                >
                  Core Philosophy
                </button>
              </div>

              <div className="p-4 sm:p-5 font-mono text-xs space-y-3">
                {activeTab === "telemetry" ? (
                  <>
                    <div className="text-slate-400 dark:text-slate-500 text-[10px] sm:text-[11px]">
                      $ cluster inspect --nodes 4 --metrics
                    </div>

                    {telemetryEvents.map((item) => (
                      <div
                        key={item.id}
                        className={`p-2.5 sm:p-3 rounded-xl bg-slate-50 dark:bg-white/[0.02] border ${item.border} flex items-center justify-between transition-all hover:bg-slate-100 dark:hover:bg-white/[0.05] gap-2`}
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                          <span className="font-semibold text-slate-800 dark:text-slate-200 text-[11px] sm:text-xs truncate">
                            {item.service}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                          <span className="hidden xs:inline text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400">
                            {item.metric}
                          </span>
                          <span className={`text-[10px] font-bold ${item.color}`}>
                            [{item.status}]
                          </span>
                        </div>
                      </div>
                    ))}

                    <div className="pt-2 text-[10px] sm:text-[11px] text-slate-400 dark:text-slate-500 flex items-center justify-between">
                      <span>Worker Pool: Healthy</span>
                      <span className="text-violet-400">Latency: ~12ms</span>
                    </div>
                  </>
                ) : (
                  <div className="space-y-3 text-slate-600 dark:text-slate-300">
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-violet-500/20">
                      <div className="text-violet-400 font-bold mb-1">01. Event-Driven Decoupling</div>
                      <p className="text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
                        Microservices communicate asynchronously via RabbitMQ exchanges to prevent cascading failure.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-cyan-500/20">
                      <div className="text-cyan-400 font-bold mb-1">02. Zero-Latency Streaming</div>
                      <p className="text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
                        SSE for real-time attendance sync, reducing server polling overhead by over 70%.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-amber-500/20">
                      <div className="text-amber-400 font-bold mb-1">03. Strict Multi-Tenancy</div>
                      <p className="text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
                        PostgreSQL schema-level separation ensuring bulletproof enterprise data isolation.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="px-4 sm:px-5 py-3 border-t border-slate-200 dark:border-white/10 bg-slate-100/50 dark:bg-white/[0.02] flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5 truncate">
                  <Terminal className="w-3.5 h-3.5 text-violet-400 flex-shrink-0" />
                  <span className="truncate">rajneesh@production-node:~$</span>
                </span>
                <span className="text-emerald-500 dark:text-emerald-400 font-semibold flex-shrink-0 ml-2">99.98% Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

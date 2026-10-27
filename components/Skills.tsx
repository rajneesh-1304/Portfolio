"use client";

import React, { useState } from "react";
import {
  Cpu,
  Database,
  CheckCircle2,
  Server,
} from "lucide-react";
import {
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiC,
  SiPostgresql,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiNestjs,
  SiNodedotjs,
  SiExpress,
  SiRabbitmq,
  SiDocker,
  SiMongodb,
  SiRedis,
  SiPrisma,
  SiGit,
  SiPostman,
  SiAmazonaws,
  SiLinux,
  SiLeetcode,
} from "react-icons/si";

interface SkillItem {
  name: string;
  category: "Systems & Core" | "Frontend Architecture" | "Microservices & Backend" | "Data & Persistence" | "DevOps & Cloud";
  icon: React.ReactNode;
  color: string;
  context: string;
  highlight?: boolean;
}

const skills: SkillItem[] = [
  { name: "C++", category: "Systems & Core", icon: <SiCplusplus className="w-5 h-5" />, color: "#00599C", context: "300+ LeetCode DSA", highlight: true },
  { name: "TypeScript", category: "Systems & Core", icon: <SiTypescript className="w-5 h-5" />, color: "#3178C6", context: "Primary typed language", highlight: true },
  { name: "JavaScript", category: "Systems & Core", icon: <SiJavascript className="w-5 h-5" />, color: "#F7DF1E", context: "ES6+, Async/Await" },
  { name: "Python", category: "Systems & Core", icon: <SiPython className="w-5 h-5" />, color: "#3776AB", context: "Automation & Scripting" },
  { name: "C", category: "Systems & Core", icon: <SiC className="w-5 h-5" />, color: "#A8B9CC", context: "Systems Programming" },
  { name: "SQL", category: "Systems & Core", icon: <SiPostgresql className="w-5 h-5" />, color: "#4169E1", context: "Relational Queries & DDL" },

  { name: "Next.js 14/15", category: "Frontend Architecture", icon: <SiNextdotjs className="w-5 h-5" />, color: "#FFFFFF", context: "App Router, SSR & RSC", highlight: true },
  { name: "React.js", category: "Frontend Architecture", icon: <SiReact className="w-5 h-5" />, color: "#61DAFB", context: "Component Architecture", highlight: true },
  { name: "Tailwind CSS", category: "Frontend Architecture", icon: <SiTailwindcss className="w-5 h-5" />, color: "#06B6D4", context: "Design Systems & UI" },
  { name: "Redux Toolkit", category: "Frontend Architecture", icon: <SiRedux className="w-5 h-5" />, color: "#764ABC", context: "State Management" },

  { name: "NestJS", category: "Microservices & Backend", icon: <SiNestjs className="w-5 h-5" />, color: "#E0234E", context: "4 Production Microservices", highlight: true },
  { name: "RabbitMQ", category: "Microservices & Backend", icon: <SiRabbitmq className="w-5 h-5" />, color: "#FF6600", context: "Event-Driven Message Broker", highlight: true },
  { name: "Node.js", category: "Microservices & Backend", icon: <SiNodedotjs className="w-5 h-5" />, color: "#339933", context: "Async Runtime" },
  { name: "Express.js", category: "Microservices & Backend", icon: <SiExpress className="w-5 h-5" />, color: "#FFFFFF", context: "RESTful Endpoints" },
  { name: "Server-Sent Events", category: "Microservices & Backend", icon: <Server className="w-5 h-5" />, color: "#10B981", context: "Real-Time Push Sync" },

  { name: "PostgreSQL", category: "Data & Persistence", icon: <SiPostgresql className="w-5 h-5" />, color: "#4169E1", context: "Multi-Tenant Schemas", highlight: true },
  { name: "Redis", category: "Data & Persistence", icon: <SiRedis className="w-5 h-5" />, color: "#DC382D", context: "In-Memory Caching", highlight: true },
  { name: "MongoDB", category: "Data & Persistence", icon: <SiMongodb className="w-5 h-5" />, color: "#47A248", context: "Document Datastore" },
  { name: "MikroORM", category: "Data & Persistence", icon: <Database className="w-5 h-5" />, color: "#8B5CF6", context: "Schema Isolation ORM" },
  { name: "Prisma ORM", category: "Data & Persistence", icon: <SiPrisma className="w-5 h-5" />, color: "#2D3748", context: "Type-Safe Client" },

  { name: "Docker", category: "DevOps & Cloud", icon: <SiDocker className="w-5 h-5" />, color: "#2496ED", context: "Containerization", highlight: true },
  { name: "Git & GitHub", category: "DevOps & Cloud", icon: <SiGit className="w-5 h-5" />, color: "#F05032", context: "CI/CD & Version Control" },
  { name: "Postman", category: "DevOps & Cloud", icon: <SiPostman className="w-5 h-5" />, color: "#FF6C37", context: "API Design & Testing" },
  { name: "AWS (S3/EC2)", category: "DevOps & Cloud", icon: <SiAmazonaws className="w-5 h-5" />, color: "#FF9900", context: "Cloud Infrastructure" },
  { name: "Linux Shell", category: "DevOps & Cloud", icon: <SiLinux className="w-5 h-5" />, color: "#FCC624", context: "Bash & System Admin" },
];

const categories = [
  "All Tiers",
  "Systems & Core",
  "Frontend Architecture",
  "Microservices & Backend",
  "Data & Persistence",
  "DevOps & Cloud",
] as const;

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("All Tiers");

  const filteredSkills = activeTab === "All Tiers"
    ? skills
    : skills.filter((item) => item.category === activeTab);

  return (
    <section className="py-20 sm:py-24 w-full relative" id="skills">
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[350px] bg-indigo-600/5 dark:bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="flex flex-col items-start mb-12 sm:mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-violet-500 dark:text-violet-400 mb-3">
          <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></span>
          <span>02 ENGINEERING TOOLKIT</span>
        </div>
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Full-Stack Systems &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-amber-300">
            Technical Matrix
          </span>
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mt-3 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed">
          Technologies categorized by operational tier — from algorithmic core languages to distributed event streams and database engines.
        </p>

        <div className="flex items-center gap-2 mt-6 sm:mt-8 overflow-x-auto no-scrollbar scrollbar-hide sm:flex-wrap pb-1 sm:pb-0 w-full">
          {categories.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`cursor-pointer px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all duration-200 border flex-shrink-0 active:scale-95 select-none ${
                  isActive
                    ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white border-violet-400/50 shadow-[0_0_20px_rgba(139,92,246,0.35)]"
                    : "bg-white/80 dark:bg-white/[0.03] text-slate-600 dark:text-slate-400 border-slate-200/80 dark:border-white/10 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-white/[0.07] hover:border-violet-500/30"
                }`}
              >
                {isActive ? `[ ${tab} ]` : tab}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredSkills.map((skill, idx) => (
          <div
            key={idx}
            className="group relative p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 dark:border-white/[0.08] bg-white/80 dark:bg-[#070b1a]/85 backdrop-blur-xl flex flex-col items-start justify-between text-left hover:border-violet-500/40 hover:bg-slate-50 dark:hover:bg-[#0d132e] hover:shadow-[0_12px_30px_rgba(139,92,246,0.14)] hover:-translate-y-1 transition-all duration-200 cursor-default"
          >
            <div className="flex items-center justify-between w-full mb-2.5 sm:mb-3">
              <div
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 group-hover:scale-110 group-hover:border-violet-500/40 transition-all duration-200 flex-shrink-0"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>

              {skill.highlight && (
                <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
              )}
            </div>

            <div className="w-full">
              <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors block truncate">
                {skill.name}
              </span>

              <p className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 sm:mt-1 leading-snug line-clamp-1">
                {skill.context}
              </p>
            </div>

            <span className="text-[8px] sm:text-[9px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider mt-2.5 sm:mt-3 pt-2 border-t border-slate-100 dark:border-white/5 w-full truncate">
              {skill.category}
            </span>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto mt-12 sm:mt-14 px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200/80 dark:border-white/10 bg-gradient-to-r from-violet-600/10 via-[#070b1a]/90 to-amber-500/10 p-5 sm:p-8 backdrop-blur-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-white/10">
            <div className="flex items-center gap-3.5 sm:gap-4 pt-2 md:pt-0">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-500 flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                <SiLeetcode className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white font-mono">300+ Problems</div>
                <div className="text-xs text-slate-500 dark:text-slate-300">LeetCode Data Structures & Algorithms</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 sm:gap-4 pt-4 md:pt-0 md:pl-6">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-violet-500/15 border border-violet-500/30 text-violet-400 flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(139,92,246,0.2)]">
                <Cpu className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white font-mono">4 Microservices</div>
                <div className="text-xs text-slate-500 dark:text-slate-300">NestJS & RabbitMQ Event-Driven Architecture</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 sm:gap-4 pt-4 md:pt-0 md:pl-6">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white font-mono">Multi-Tenant DB</div>
                <div className="text-xs text-slate-500 dark:text-slate-300">PostgreSQL Schema Isolation with MikroORM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

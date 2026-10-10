"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Code2,
  Layers,
  Database,
  GitBranch,
  Sparkles,
  CheckCircle2,
  Filter,
} from "lucide-react";
import { SKILLS_DATA, SkillItem } from "@/data/portfolioData";

type CategoryFilter = "All" | "Languages" | "Frontend" | "Backend & Database" | "Tools & Workflow";

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("All");
  const shouldReduceMotion = useReducedMotion();

  const categories: CategoryFilter[] = [
    "All",
    "Languages",
    "Frontend",
    "Backend & Database",
    "Tools & Workflow",
  ];

  const filteredSkills =
    activeFilter === "All"
      ? SKILLS_DATA
      : SKILLS_DATA.filter((skill) => skill.category === activeFilter);

  const getCategoryIcon = (category: SkillItem["category"]) => {
    switch (category) {
      case "Languages":
        return <Code2 className="w-4 h-4 text-cyan-400" />;
      case "Frontend":
        return <Layers className="w-4 h-4 text-blue-400" />;
      case "Backend & Database":
        return <Database className="w-4 h-4 text-purple-400" />;
      case "Tools & Workflow":
        return <GitBranch className="w-4 h-4 text-emerald-400" />;
    }
  };

  const getLevelBadge = (level: SkillItem["level"]) => {
    switch (level) {
      case "Core Foundation":
        return (
          <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20">
            Core Foundation
          </span>
        );
      case "Hands-on Development":
        return (
          <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20">
            Hands-on Projects
          </span>
        );
      case "Actively Building":
        return (
          <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
            Actively Building
          </span>
        );
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#030712]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Skills &amp; <span className="text-gradient-accent">Technologies</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            A grounded toolkit built through rigorous computer science coursework, hands-on
            prototyping, and team hackathon deliverables.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                  activeFilter === category
                    ? "bg-cyan-500 text-slate-950 shadow-[0_0_20px_rgba(56,189,248,0.4)]"
                    : "bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-white/5"
                }`}
              >
                {category === "All" && <Filter className="w-3 h-3" />}
                <span>{category}</span>
                <span className="text-[10px] opacity-70 ml-1">
                  (
                  {category === "All"
                    ? SKILLS_DATA.length
                    : SKILLS_DATA.filter((s) => s.category === category).length}
                  )
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.35,
                delay: shouldReduceMotion ? 0 : index * 0.04,
                ease: "easeOut",
              }}
              whileHover={shouldReduceMotion ? {} : { y: -4 }}
              className="glass-panel p-5 rounded-2xl flex flex-col justify-between group hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(56,189,248,0.15)] transition-all relative overflow-hidden"
            >
              {/* Subtle top card glow */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent group-hover:via-cyan-400/60 transition-all" />

              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-slate-900/90 border border-white/10 group-hover:border-cyan-500/30 transition-colors">
                      {getCategoryIcon(skill.category)}
                    </div>
                    <span className="text-xs text-slate-400 font-mono">
                      {skill.category}
                    </span>
                  </div>
                  {getLevelBadge(skill.level)}
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {skill.name}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {skill.highlight}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span className="flex items-center gap-1 text-emerald-400/90">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>Verified Coursework/Project</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Honesty & Academic Standards Note */}
        <div className="mt-12 p-4 rounded-2xl bg-slate-900/40 border border-white/5 max-w-2xl mx-auto text-center text-xs text-slate-400">
          <p>
            <strong className="text-slate-300">Student Proficiency Note:</strong> Skill proficiencies represent active academic coursework and real project implementation during my Computer Science degree at BIET.
          </p>
        </div>
      </div>
    </section>
  );
}

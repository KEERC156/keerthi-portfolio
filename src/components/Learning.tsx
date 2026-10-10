"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Layers,
  Code2,
  Cpu,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { LEARNING_DATA } from "@/data/portfolioData";

export default function Learning() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="learning" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Academic Progression</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Experience &amp; <span className="text-gradient-cyan">Coursework</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            A student-focused overview of core academic subjects, self-directed development sprints,
            and software engineering fundamentals.
          </p>
        </div>

        {/* Timeline / Learning Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {LEARNING_DATA.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: shouldReduceMotion ? 0 : index * 0.15,
                ease: "easeOut",
              }}
              whileHover={shouldReduceMotion ? {} : { y: -4 }}
              className="glass-panel rounded-3xl p-8 flex flex-col justify-between group hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] transition-all relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                    {item.type}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{item.period}</span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-medium text-slate-400 mb-4">
                  {item.institution}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Topics Covered */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Core Focus Areas:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-2.5 py-1 rounded-lg bg-slate-900 border border-white/5 text-slate-300 text-xs flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                        <span>{topic}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Verified Curriculum</span>
                <span className="text-cyan-400">Continuous Growth</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

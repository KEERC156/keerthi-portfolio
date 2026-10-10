"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Trophy,
  Award,
  Sparkles,
  Calendar,
  Users2,
  CheckCircle2,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { HACKATHONS_DATA } from "@/data/portfolioData";

export default function Hackathons() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="hackathons" className="py-24 relative overflow-hidden bg-[#030712]/60">
      {/* Background Accent Lighting */}
      <div
        className="absolute top-1/2 right-10 w-80 h-80 bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 w-80 h-80 bg-violet-600/10 rounded-full blur-[130px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Trophy className="w-3.5 h-3.5" />
            <span>Competitive Prototyping</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Hackathons &amp; <span className="text-gradient-accent">Milestones</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            Collaborating in high-intensity problem-solving environments to build working solutions
            under strict evaluation criteria and real-world deadlines.
          </p>
        </div>

        {/* Hackathon Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-12">
          {HACKATHONS_DATA.map((item, index) => (
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
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent group-hover:via-cyan-400/70 transition-all" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                      <Trophy className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-cyan-300 block">
                        {item.event}
                      </span>
                      <span className="text-[11px] text-slate-400 font-mono">
                        {item.organizer}
                      </span>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-xs font-mono text-slate-300">
                    {item.year}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {item.title}
                </h3>

                <div className="flex items-center gap-4 text-xs text-slate-400 mb-4 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <Users2 className="w-3.5 h-3.5 text-violet-400" />
                    <span>Role: {item.role}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Focus: {item.focus}</span>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>{item.verifiedStatus}</span>
                </span>
                <span className="text-slate-500">Student Innovation Track</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Continuous Innovation Banner */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-violet-500/20 bg-gradient-to-r from-violet-950/20 via-slate-900/60 to-cyan-950/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-violet-400" />
              <span>Upcoming Hackathons &amp; Technical Challenges</span>
            </h4>
            <p className="text-xs text-slate-400 max-w-xl">
              Actively preparing for upcoming collegiate and national open-source hackathons. Open to teaming up with passionate builders and engineers.
            </p>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-xs shadow-lg shadow-violet-600/30 transition-all shrink-0 flex items-center gap-1.5"
          >
            <span>Connect for Hackathons</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

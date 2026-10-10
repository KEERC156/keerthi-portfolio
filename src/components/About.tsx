"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  Calendar,
  Sparkles,
  Target,
  Users2,
  Cpu,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div
        className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Background &amp; Motivation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineering Foundations &amp; <span className="text-gradient-cyan">Curiosity</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            Building software with a genuine passion for understanding how systems work from the
            ground up, paired with the drive to build solutions that solve real community challenges.
          </p>
        </div>

        {/* Editorial Layout Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
        >
          {/* Main Story Editorial Box */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 glass-panel rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 uppercase tracking-wider mb-6">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span>The Engineering Journey</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-snug">
                Turning computational theory into functional, resilient software products.
              </h3>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  As an undergraduate in <strong className="text-white">Computer Science and Engineering</strong> at{" "}
                  <strong className="text-cyan-300">Bapuji Institute of Engineering and Technology (BIET), Davangere</strong>,
                  my focus has always been on pragmatic problem-solving rather than just syntax.
                </p>
                <p>
                  Whether participating in intensive coding sprints like the{" "}
                  <strong className="text-white">Smart India Hackathon</strong> with the{" "}
                  <span className="text-cyan-300">ORCA</span> platform or conceptualizing citizen accessibility portals like{" "}
                  <span className="text-violet-300">mScheme</span>, I value clear architecture, iterative feedback, and
                  strong cross-functional collaboration.
                </p>
                <p>
                  I approach each challenge by breaking it down into fundamental components: understanding user
                  needs, modeling clean data structures, and crafting seamless digital experiences.
                </p>
              </div>
            </div>

            {/* Core Values / Focus Pillars */}
            <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-cyan-400 font-semibold text-xs">
                  <Target className="w-3.5 h-3.5" />
                  <span>Problem Solver</span>
                </div>
                <p className="text-[11px] text-slate-400">Pragmatic, first-principles logic</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-blue-400 font-semibold text-xs">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Full-Stack</span>
                </div>
                <p className="text-[11px] text-slate-400">Next.js, TypeScript &amp; APIs</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-violet-400 font-semibold text-xs">
                  <Users2 className="w-3.5 h-3.5" />
                  <span>Collaborative</span>
                </div>
                <p className="text-[11px] text-slate-400">Hackathon sprint mindset</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-400 font-semibold text-xs">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>AI Aware</span>
                </div>
                <p className="text-[11px] text-slate-400">Modern LLM integration</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Verified Academic & Institution Card */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex flex-col gap-6 justify-between"
          >
            {/* Education Spotlight Card */}
            <div className="glass-panel rounded-3xl p-8 relative overflow-hidden border border-cyan-500/20 shadow-xl shadow-cyan-950/20">
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-mono">
                  {PERSONAL_INFO.graduationYear}
                </span>
              </div>

              <h4 className="text-xl font-bold text-white mb-2">
                Bachelor of Engineering (B.E.)
              </h4>
              <p className="text-sm font-medium text-cyan-300 mb-4">
                Computer Science &amp; Engineering
              </p>

              <div className="space-y-3 pt-4 border-t border-white/10 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Bapuji Institute of Engineering and Technology (BIET)</p>
                    <p className="text-slate-400">Davangere, Karnataka, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>Current Academic Standing: Enrolled Undergraduate</span>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">Affiliation: VTU Belagavi</span>
                <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Verified Student Profile
                </span>
              </div>
            </div>

            {/* Quick Action / Collaboration Callout */}
            <div className="glass-panel rounded-3xl p-6 border border-violet-500/20 bg-gradient-to-br from-violet-950/20 to-slate-900/60">
              <h5 className="text-sm font-bold text-white mb-1.5 flex items-center gap-2">
                <span>Seeking Software Internships &amp; Placements</span>
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              </h5>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Ready to contribute to engineering teams with rapid prototyping, attention to detail,
                and strong technical foundations.
              </p>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-300 hover:text-cyan-200 group"
              >
                <span>Explore my featured projects</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

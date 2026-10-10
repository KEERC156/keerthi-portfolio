"use client";

import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  FileText,
  Mail,
  Sparkles,
  Code2,
  Cpu,
  Layers,
  GraduationCap,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import ResumeModal from "./ResumeModal";

// Crisp inline SVGs for GitHub and LinkedIn
function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function LinkedinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

// Dynamically import 3D Canvas with SSR disabled to prevent hydration mismatch
const Hero3DScene = dynamic(() => import("./canvas/Hero3DScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center pointer-events-none">
      <div className="w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl" />
    </div>
  ),
});

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: (custom: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        delay: shouldReduceMotion ? 0 : custom * 0.15,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern"
      >
        {/* Interactive 3D Background Canvas */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-85 lg:opacity-100">
          <Hero3DScene />
        </div>

        {/* Cinematic Atmospheric Lighting */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[380px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-violet-600/15 blur-[130px] pointer-events-none -z-10"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-10 right-10 w-[380px] h-[380px] bg-violet-600/10 blur-[120px] pointer-events-none -z-10"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Text & CTAs */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Status Badge */}
              <motion.div
                custom={0}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 text-xs font-medium mb-6 shadow-[0_0_15px_rgba(56,189,248,0.15)]"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>B.E. Computer Science • BIET Davangere</span>
              </motion.div>

              {/* Main Headline with Name Keerthi C. */}
              <motion.div
                custom={1}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="mb-4"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                  Hi, I&apos;m{" "}
                  <span className="text-gradient-accent">Keerthi C.</span>
                </h1>
                <p className="text-2xl sm:text-3xl lg:text-4xl text-slate-200 font-semibold mt-3 tracking-tight">
                  &ldquo;{PERSONAL_INFO.headline}&rdquo;
                </p>
              </motion.div>

              {/* Subtitle / Intro */}
              <motion.p
                custom={2}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed mb-8"
              >
                Computer Science Engineering student at Bapuji Institute of Engineering and Technology (BIET),
                passionate about software development, AI, and innovation. Experienced in full-stack web
                architectures and rapid hackathon execution.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                custom={3}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 w-full sm:w-auto"
              >
                {/* View Projects */}
                <a
                  href="#projects"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(56,189,248,0.4)] hover:shadow-[0_0_35px_rgba(56,189,248,0.6)] transition-all duration-200"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                {/* Download Resume — links directly to PDF */}
                <a
                  href="/resume.pdf"
                  download="Keerthi-C-Resume.pdf"
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-violet-500/40 hover:border-violet-300 text-violet-300 hover:text-violet-100 text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 shadow-md"
                  aria-label="Download Keerthi C. resume as PDF"
                >
                  <FileText className="w-4 h-4 text-violet-400" />
                  <span>Download Resume</span>
                </a>

                {/* Contact Me */}
                <a
                  href="#contact"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900/70 hover:bg-slate-800 border border-white/10 hover:border-cyan-500/40 text-slate-200 text-sm font-medium flex items-center justify-center gap-2 transition-all duration-200"
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>Contact Me</span>
                </a>
              </motion.div>

              {/* Social Links & Micro Badges */}
              <motion.div
                custom={4}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-6 border-t border-white/[0.08] w-full"
              >
                <div className="flex items-center gap-3">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-500/50 hover:bg-slate-800 transition-all"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-slate-800 transition-all"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="p-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-slate-400 hover:text-white hover:border-violet-500/50 hover:bg-slate-800 transition-all"
                    aria-label="Send Direct Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>

                <div className="hidden sm:flex items-center gap-4 text-xs text-slate-400 border-l border-white/10 pl-6">
                  <div className="flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-cyan-400" />
                    <span>BIET, Davangere</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Code2 className="w-4 h-4 text-violet-400" />
                    <span>Full-Stack &amp; AI</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Hero Visual with Real Photo in Cinematic Frame */}
            <div className="lg:col-span-5 flex justify-center items-center relative">
              <motion.div
                initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[410px]"
              >
                {/* Glowing Aura */}
                <div
                  className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-500/30 via-indigo-500/25 to-purple-600/30 blur-2xl opacity-80 animate-pulse"
                  aria-hidden="true"
                />

                {/* Cinematic Glass Frame */}
                <div className="relative rounded-3xl p-2.5 bg-gradient-to-b from-white/20 via-white/5 to-white/0 border border-white/25 backdrop-blur-xl shadow-2xl shadow-cyan-950/60">
                  {/* Photo Container */}
                  <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-950 border border-white/10 group">
                    <Image
                      src="/profile.jpg"
                      alt="Keerthi C. - Computer Science Engineering Student & Developer"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 410px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Gradient overlay for contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-65" />

                    {/* Top Micro-Badges */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/65 border border-white/10 backdrop-blur-md flex items-center gap-1.5 text-[11px] font-mono text-cyan-300">
                      <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span>engineer.active</span>
                    </div>

                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/65 border border-white/10 backdrop-blur-md flex items-center gap-1.5 text-[11px] font-mono text-violet-300">
                      <Cpu className="w-3.5 h-3.5 text-violet-400" />
                      <span>BIET &apos;28</span>
                    </div>

                    {/* Bottom Overlay Label */}
                    <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-slate-950/85 border border-white/10 backdrop-blur-md">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs font-bold text-white tracking-wide">Keerthi C.</p>
                          <p className="text-[11px] text-slate-400">Computer Science &amp; Eng.</p>
                        </div>
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>Ready to build</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Micro-Card */}
                  <motion.div
                    initial={{ x: shouldReduceMotion ? 0 : 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="absolute -right-4 -bottom-4 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-900/95 border border-cyan-500/40 backdrop-blur-md shadow-xl text-xs text-slate-200"
                  >
                    <div className="w-7 h-7 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-medium">Core Stack</p>
                      <p className="font-semibold text-white text-[11px]">Next.js • React • Supabase</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="mt-16 flex justify-center">
            <a
              href="#about"
              className="flex flex-col items-center gap-2 text-slate-400 hover:text-cyan-300 transition-colors group"
              aria-label="Scroll down to About section"
            >
              <span className="text-[11px] uppercase tracking-widest font-mono group-hover:text-cyan-300">
                Explore Portfolio
              </span>
              <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-cyan-400 transition-colors">
                <motion.div
                  animate={shouldReduceMotion ? {} : { y: [0, 14, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1.5 h-1.5 rounded-full bg-cyan-400"
                />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
}

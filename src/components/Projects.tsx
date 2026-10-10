"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Sparkles,
  ExternalLink,
  Code2,
  Layers,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Database,
  Mic,
  Workflow,
  X,
  Bot,
  ShieldCheck,
  MapPin,
  Users,
} from "lucide-react";
import { PROJECTS_DATA, Project } from "@/data/portfolioData";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
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

// Project Artwork Graphics component tailored specifically for each project
function ProjectVisualArt({ project }: { project: Project }) {
  if (project.id === "orca") {
    return (
      <div className="relative w-full h-52 sm:h-64 rounded-2xl bg-gradient-to-br from-slate-950 via-[#071326] to-[#040915] p-5 flex flex-col justify-between overflow-hidden border border-cyan-500/20 group-hover:border-cyan-500/50 transition-colors">
        {/* Abstract 3D Wireframe Grid & Flow */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex items-center justify-between">
          <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
            Smart India Hackathon • SIH
          </span>
          <span className="p-2 rounded-xl bg-slate-900/80 border border-white/10 text-cyan-400">
            <Workflow className="w-5 h-5" />
          </span>
        </div>

        {/* Dynamic Architectural Schematic */}
        <div className="relative z-10 space-y-2.5 my-auto">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-xs font-mono text-slate-300">ORCA Operational Pipeline</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="p-2.5 rounded-xl bg-slate-900/90 border border-cyan-500/30 text-center">
              <span className="text-[10px] text-slate-400 block">Stream</span>
              <span className="text-xs font-bold text-cyan-300">Synchronized</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/90 border border-blue-500/30 text-center">
              <span className="text-[10px] text-slate-400 block">Workflow</span>
              <span className="text-xs font-bold text-blue-300">Modular</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/90 border border-indigo-500/30 text-center">
              <span className="text-[10px] text-slate-400 block">Latency</span>
              <span className="text-xs font-bold text-indigo-300">Low Overhead</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/10">
          <span>Role: Team Full-Stack Prototyper</span>
          <span className="text-cyan-400 font-semibold">Hackathon Build</span>
        </div>
      </div>
    );
  }

  if (project.id === "mscheme") {
    return (
      <div className="relative w-full h-52 sm:h-64 rounded-2xl bg-gradient-to-br from-slate-950 via-[#120826] to-[#080315] p-5 flex flex-col justify-between overflow-hidden border border-violet-500/20 group-hover:border-violet-500/50 transition-colors">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute -left-8 -bottom-8 w-44 h-44 rounded-full bg-violet-600/25 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex items-center justify-between">
          <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-violet-500/10 border border-violet-500/30 text-violet-300 flex items-center gap-1.5">
            <Bot className="w-3.5 h-3.5 text-violet-400" />
            <span>GovTech + Gemini AI</span>
          </span>
          <span className="p-2 rounded-xl bg-slate-900/80 border border-white/10 text-violet-400">
            <ShieldCheck className="w-5 h-5" />
          </span>
        </div>

        {/* AI Eligibility Match Simulator Visual */}
        <div className="relative z-10 space-y-2.5 my-auto">
          <div className="p-3 rounded-xl bg-slate-900/90 border border-violet-500/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-medium text-white">Rule Matching &amp; Scoring</span>
            </div>
            <span className="text-xs font-mono text-violet-300">Supabase + SQL</span>
          </div>
          <div className="p-2.5 rounded-xl bg-purple-950/40 border border-purple-500/20 text-xs text-slate-300 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-400 shrink-0" />
            <span className="text-[11px] leading-tight">Gemini AI generates plain-language qualification summaries.</span>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/10">
          <span>Eligibility Verification Engine</span>
          <span className="text-violet-400 font-semibold">Active Full-Stack</span>
        </div>
      </div>
    );
  }

  // CivicFix Artwork
  if (project.id === "civicfix") {
    return (
      <div className="relative w-full h-52 sm:h-64 rounded-2xl bg-gradient-to-br from-slate-950 via-[#031828] to-[#020d18] p-5 flex flex-col justify-between overflow-hidden border border-sky-500/20 group-hover:border-sky-500/50 transition-colors">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-sky-500/15 blur-3xl pointer-events-none" />
        <div className="absolute -left-8 -bottom-8 w-40 h-40 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex items-center justify-between">
          <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-sky-500/10 border border-sky-500/30 text-sky-300 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-sky-400" />
            <span>Civic Tech • GPS + AI Triage</span>
          </span>
          <span className="p-2 rounded-xl bg-slate-900/80 border border-white/10 text-sky-400">
            <Users className="w-5 h-5" />
          </span>
        </div>

        {/* Tri-Role Platform Visualization */}
        <div className="relative z-10 grid grid-cols-3 gap-1.5 my-auto">
          <div className="p-2.5 rounded-xl bg-slate-900/90 border border-sky-500/30 flex flex-col items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-sky-400" />
            <span className="text-[9px] text-slate-400 text-center leading-tight">Citizen</span>
            <span className="text-[10px] font-bold text-sky-300 text-center">Reports</span>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/90 border border-blue-500/30 flex flex-col items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-blue-400" />
            <span className="text-[9px] text-slate-400 text-center leading-tight">Admin</span>
            <span className="text-[10px] font-bold text-blue-300 text-center">Assigns</span>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/90 border border-emerald-500/30 flex flex-col items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-[9px] text-slate-400 text-center leading-tight">Field</span>
            <span className="text-[10px] font-bold text-emerald-300 text-center">Resolves</span>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/10">
          <span>Supabase RLS + Leaflet Maps</span>
          <span className="text-sky-400 font-semibold">Live & Active</span>
        </div>
      </div>
    );
  }

  // Smart Kirana Artwork
  return (
    <div className="relative w-full h-52 sm:h-64 rounded-2xl bg-gradient-to-br from-slate-950 via-[#051a14] to-[#020d0a] p-5 flex flex-col justify-between overflow-hidden border border-emerald-500/20 group-hover:border-emerald-500/50 transition-colors">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute right-0 top-0 w-44 h-44 rounded-full bg-emerald-600/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 flex items-center justify-between">
        <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex items-center gap-1.5">
          <Mic className="w-3.5 h-3.5 text-emerald-400" />
          <span>Speech Recognition &amp; Retail</span>
        </span>
        <span className="p-2 rounded-xl bg-slate-900/80 border border-white/10 text-emerald-400">
          <Database className="w-5 h-5" />
        </span>
      </div>

      {/* Voice-to-Bill Simulation Visual */}
      <div className="relative z-10 space-y-2.5 my-auto">
        <div className="p-3 rounded-xl bg-slate-900/90 border border-emerald-500/30 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-medium text-white">&ldquo;1 kg Rice, 500g Sugar&rdquo;</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-300">Speech-to-Text</span>
        </div>
        <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-emerald-950/40 border border-emerald-500/20 text-xs">
          <span className="text-slate-300">Real-Time Cart &amp; Bill:</span>
          <span className="text-emerald-300 font-mono font-bold">Auto-Computed</span>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/10">
        <span>Flask Backend + Web Speech</span>
        <span className="text-emerald-400 font-semibold">Concept Prototype</span>
      </div>
    </div>
  );
}

// Deep Dive Architectural Modal
function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-2xl max-h-[90vh] flex flex-col bg-[#090d18] border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-slate-900/70">
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
              {project.category}
            </span>
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            <p className="text-xs text-slate-400">{project.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-sm text-slate-300">
          {/* Status Badge */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/90 border border-white/5">
            <span className="text-xs text-slate-400">Implementation Stage:</span>
            <span className="text-xs font-semibold text-cyan-300 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              {project.implementedStatus}
            </span>
          </div>

          {/* Problem Statement */}
          <div className="space-y-1.5">
            <h4 className="font-semibold text-white text-xs uppercase tracking-wider text-cyan-400">
              Problem Statement
            </h4>
            <p className="text-xs leading-relaxed text-slate-300">{project.problemStatement}</p>
          </div>

          {/* Solution Approach */}
          <div className="space-y-1.5">
            <h4 className="font-semibold text-white text-xs uppercase tracking-wider text-cyan-400">
              Solution Approach &amp; Architecture
            </h4>
            <p className="text-xs leading-relaxed text-slate-300">{project.solutionApproach}</p>
          </div>

          {/* Architecture Highlights */}
          <div className="space-y-2">
            <h4 className="font-semibold text-white text-xs uppercase tracking-wider text-cyan-400">
              Technical &amp; Architectural Highlights
            </h4>
            <ul className="space-y-1.5 pl-1">
              {project.architectureHighlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="space-y-2">
            <h4 className="font-semibold text-white text-xs uppercase tracking-wider text-cyan-400">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg bg-slate-900 border border-white/10 text-slate-200 text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-slate-900/60 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-white"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Lighting */}
      <div
        className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Impact-Driven <span className="text-gradient-cyan">Projects</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            From national-level hackathons to citizen accessibility and localized commerce platforms,
            each project represents a commitment to solving tangible challenges.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          {PROJECTS_DATA.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: shouldReduceMotion ? 0 : index * 0.15,
                ease: "easeOut",
              }}
              whileHover={shouldReduceMotion ? {} : { y: -6 }}
              className="glass-panel rounded-3xl p-6 flex flex-col justify-between group hover:border-cyan-500/40 hover:shadow-[0_0_35px_rgba(56,189,248,0.2)] transition-all relative overflow-hidden"
            >
              <div>
                {/* Visual Artwork Box */}
                <div className="mb-6">
                  <ProjectVisualArt project={project} />
                </div>

                {/* Meta details */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase">
                    {project.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-slate-900 border border-white/10 text-slate-300">
                    {project.implementedStatus}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 font-medium mb-2">
                  {project.subtitle}
                </p>

                {project.isCollaborative && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-[10px] font-medium text-sky-300 mb-3">
                    <Users className="w-3 h-3" />
                    Collaborative Project
                  </span>
                )}

                <p className="text-xs text-slate-300 leading-relaxed mb-5 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-white/10 text-slate-300 text-[11px] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-white/10 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all group-hover:border-cyan-500/40"
                >
                  <span>Architecture &amp; Details</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 text-sky-300 text-xs font-medium transition-colors"
                      aria-label={`Live Demo for ${project.title}`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 text-slate-400 hover:text-white transition-colors"
                      aria-label={`Source Code for ${project.title}`}
                      title="Code Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Deep-dive Architecture Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

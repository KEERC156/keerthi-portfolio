"use client";

import React from "react";
import { X, Download, FileText, ExternalLink, GraduationCap, Code2, Award, Mail } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-[#080d1a] border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-950/60 overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-900/60">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 id="resume-modal-title" className="text-base font-bold text-white">
                {PERSONAL_INFO.name} — Curriculum Vitae &amp; Credentials
              </h2>
              <p className="text-xs text-slate-400">
                Candidate Profile • B.E. Computer Science Engineering • BIET Davangere
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-sm text-slate-300">
          {/* Quick Header */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div>
              <h3 className="text-lg font-bold text-white">{PERSONAL_INFO.name}</h3>
              <p className="text-xs text-cyan-300">{PERSONAL_INFO.degree}</p>
              <p className="text-xs text-slate-400">{PERSONAL_INFO.institution}, {PERSONAL_INFO.location}</p>
            </div>
            <div className="flex flex-col sm:items-end text-xs text-slate-400 gap-1">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
              >
                <Mail className="w-3 h-3" />
                {PERSONAL_INFO.email}
              </a>
              <span className="text-emerald-400 font-medium">Available for Internships &amp; Placements</span>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-white font-semibold border-b border-white/10 pb-1">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              <span>Education</span>
            </div>
            <div className="pl-6 space-y-1">
              <div className="flex justify-between items-baseline">
                <span className="font-semibold text-white">Bapuji Institute of Engineering and Technology (BIET)</span>
                <span className="text-xs text-slate-400">{PERSONAL_INFO.graduationYear}</span>
              </div>
              <p className="text-xs text-slate-300">Bachelor of Engineering (B.E.) in Computer Science and Engineering</p>
              <p className="text-xs text-slate-400">Davangere, Karnataka, India</p>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-white font-semibold border-b border-white/10 pb-1">
              <Code2 className="w-4 h-4 text-cyan-400" />
              <span>Technical Competencies</span>
            </div>
            <div className="pl-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div><strong className="text-slate-200">Languages:</strong> C, Python, Java, JavaScript, TypeScript, SQL</div>
              <div><strong className="text-slate-200">Frontend:</strong> React, Next.js (App Router), Tailwind CSS, HTML5, CSS3</div>
              <div><strong className="text-slate-200">Backend &amp; DB:</strong> Supabase PostgreSQL, RESTful APIs, Node.js</div>
              <div><strong className="text-slate-200">Tools:</strong> Git, GitHub, VS Code, Leaflet / OpenStreetMap</div>
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-white font-semibold border-b border-white/10 pb-1">
              <Award className="w-4 h-4 text-cyan-400" />
              <span>Key Projects &amp; Hackathon Work</span>
            </div>
            <div className="pl-6 space-y-3 text-xs">
              <div>
                <p className="font-semibold text-white">ORCA — Smart India Hackathon (SIH)</p>
                <p className="text-slate-400">Collaborative high-throughput workflow system designed for synchronized team execution under competition parameters. Built with Next.js, TypeScript, and Tailwind CSS.</p>
              </div>
              <div>
                <p className="font-semibold text-white">mScheme — Government Scheme Eligibility Assistant</p>
                <p className="text-slate-400">Citizen empowerment engine powered by Next.js, Supabase PostgreSQL, and Gemini AI for automated eligibility rule discovery and plain-language scheme summaries.</p>
              </div>
              <div>
                <p className="font-semibold text-white">CivicFix — Civic Issue Reporting & Resolution Platform <span className="text-sky-400">(Collaborative)</span></p>
                <p className="text-slate-400">Tri-role platform (Citizens, Admins, Field Workers) for GPS-tagged issue reporting, AI-assisted triage, and before/after repair evidence. Built with Next.js 14, Supabase, and Leaflet. Live at civic-fix-gamma.vercel.app</p>
              </div>
              <div>
                <p className="font-semibold text-white">Smart Kirana — Voice-Assisted Retail Platform</p>
                <p className="text-slate-400">Local-language grocery billing and inventory management prototype built with Web Speech API and Python/Flask backend ledger.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer — PDF Download Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4 border-t border-white/10 bg-slate-900/60">
          <p className="text-[11px] text-slate-400 text-center sm:text-left">
            Download the PDF or open it in a new tab for full details.
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-white border border-white/10 hover:border-cyan-500/30 transition-colors"
              aria-label="Open resume PDF in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
              <span>View PDF</span>
            </a>
            <a
              href="/resume.pdf"
              download="Keerthi-C-Resume.pdf"
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all"
              aria-label="Download resume as PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "Rewordy",
    subtitle: "AI Writing Assistant",
    link: "rewordy.vercel.app",
    color: "bg-yellow-200",
    tags: ["NLP", "Groq", "Next.js"],
    status: "V1.0",
    description:
      "Built this to help people fix their phrasing without the bloat of Grammarly. Fast and minimal.",
  },
  {
    title: "CheckMate",
    subtitle: "Local AI Plagiarism",
    link: "https://github.com/Dpsh613/CheckMate-A-Personal-Plagiarism-Pre-Checker",
    color: "bg-emerald-200",
    tags: ["ChromaDB", "Sentence Transformers", "pdfplumber"],
    status: "Beta",
    description:
      "An experiment in local-first AI. Comparing drafts against PDFs without sending data to the cloud.",
  },
  {
    title: "MedBot",
    subtitle: "RAG Medical Chatbot",
    link: "github.com/Dpsh613/RAG-MEDICAL-CHATBOT",
    color: "bg-indigo-200",
    tags: ["LangChain", "FAISS", "HuggingFace"],
    status: "Internal",
    description:
      "My deep dive into RAG pipelines. It reads medical PDFs and actually answers correctly.",
  },
  {
    title: "BookVibe",
    subtitle: "Discovery Platform",
    link: "https://bookvibe-dijo.onrender.com/",
    color: "bg-pink-200",
    tags: ["MERN", "Fullstack", "EPUB.js"],
    status: "Live",
    description:
      "Full-stack build. Handles mood-based discovery and even tracks your reading progress.",
  },
];

const neobrutaContainer =
  "border-2 border-slate-900 rounded-xl shadow-[6px_6px_0px_#0f172a]";

export default function Projects() {
  return (
    <section id="work" className="py-24 px-6 bg-teal-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-20 space-y-4">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter"
          >
            The Build Log
          </motion.h2>

          <div className="flex flex-wrap items-center gap-4">
            <span className="text-xl font-bold bg-rose-400 text-white px-4 py-1 -rotate-2 border-2 border-slate-900 shadow-[3px_3px_0px_#0f172a]">
              "Yeah, I built this."
            </span>
            <p className="text-lg font-medium text-slate-600 italic">
              — Constant building. Zero fluff.
            </p>
          </div>
        </div>

        {/* Projects Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, rotate: i % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{
                scale: 1.02,
                rotate: i % 2 === 0 ? 1 : -1,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
              className={`relative group ${proj.color} ${neobrutaContainer} p-6 flex flex-col h-full`}
            >
              {/* Top "Window" Bar */}
              <div className="flex justify-between items-center mb-6 border-b-2 border-slate-900/20 pb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full border border-slate-900 bg-red-400" />
                  <div className="w-3 h-3 rounded-full border border-slate-900 bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full border border-slate-900 bg-green-400" />
                </div>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-slate-700">
                  Status: {proj.status}
                </span>
              </div>

              {/* Content */}
              <div className="flex-grow">
                <h3 className="text-3xl font-black mb-1 group-hover:text-slate-700 transition-colors">
                  {proj.title}
                </h3>
                <p className="font-bold text-slate-600 mb-4 text-sm uppercase tracking-wide">
                  {proj.subtitle}
                </p>
                <p className="text-slate-800 font-medium leading-snug mb-6">
                  {proj.description}
                </p>
              </div>

              {/* Bottom Row */}
              <div className="mt-auto pt-4 flex flex-wrap gap-2 items-center justify-between">
                <div className="flex gap-2">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-black uppercase bg-white border border-slate-900 px-2 py-0.5 rounded shadow-[1px_1px_0px_#0f172a]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={`https://${proj.link}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-slate-900 text-white p-2 rounded-lg hover:bg-slate-700 transition-colors shadow-[2px_2px_0px_#0f172a] active:shadow-none translate-y-[-2px] active:translate-y-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>

              {/* The "Built This" Stamp (Hidden until hover) */}
              <div className="absolute -bottom-4 -right-4 bg-white border-2 border-slate-900 px-3 py-1 font-black text-sm rotate-12 opacity-0 group-hover:opacity-100 transition-all pointer-events-none shadow-xl">
                VIEW CODE
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA for "The Big Stuff" */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-slate-500 font-bold uppercase tracking-widest text-sm mb-4">
            And yes... the "Huge Apps" are currently in progress.
          </p>
          <div className="h-1 w-20 bg-slate-900 mx-auto rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}

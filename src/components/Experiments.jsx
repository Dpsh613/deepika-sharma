import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  GraduationCap,
  Zap,
  Palette,
  ArrowUpRight,
  MoveDownLeft,
  FlaskConical,
} from "lucide-react";

const EXPERIMENTS = [
  {
    name: "Multi-AI Agent Orchestrator",
    link: "https://github.com/Dpsh613/MULTI-AI-AGENT",
    color: "bg-purple-400",
    icon: <Cpu size={24} strokeWidth={2.5} />,
  },
  {
    name: "PrepBuzz",
    link: "https://prepbuzz-1.onrender.com",
    color: "bg-blue-400",
    icon: <Zap size={24} strokeWidth={2.5} />,
  },
  {
    name: "Academic Portfolio",
    link: "https://arnab-kanti-jana.vercel.app",
    color: "bg-orange-400",
    icon: <GraduationCap size={24} strokeWidth={2.5} />,
  },
  {
    name: "Advanced UI/CSS Mastery",
    link: "https://dpsh613.github.io/Natour",
    color: "bg-pink-800",
    icon: <Palette size={24} strokeWidth={2.5} />,
  },
];

const neobrutaContainer =
  "border-2 border-slate-900 rounded-2xl shadow-[4px_4px_0px_#0f172a]";

export default function Experiments() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white max-w-7xl mx-auto overflow-hidden">
      {/* Header with the Mad Science Tag & Arrow */}
      <div className="relative flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="z-10">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900">
            More experiments
          </h2>
          <p className="text-slate-500 font-bold mt-2">
            Chaos, code, and caffeine-driven ideas.
          </p>
        </div>

        {/* The Mad Science Tag with Pointing Arrow */}
        <div className="relative">
          {/* Animated Arrow pointing to the grid */}
          <motion.div
            animate={{ x: [0, -5, 0], y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute -top-[-4] -left-15 text-rose-500 hidden lg:block"
          >
            <MoveDownLeft size={52} strokeWidth={3} />
            <span className="font-mono text-xs font-black uppercase tracking-tighter block -rotate-12">
              Look here!
            </span>
          </motion.div>

          <div className="flex items-center gap-2 bg-yellow-300 border-2 border-slate-900 px-4 py-2 font-mono text-sm font-black rotate-2 shadow-[4px_4px_0px_#000]">
            <FlaskConical size={18} />
            CAUTION: MAD SCIENCE INSIDE
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {EXPERIMENTS.map((exp, i) => (
          <motion.a
            key={i}
            href={exp.link}
            target="_blank"
            rel="noreferrer"
            // Drunken sway animation
            animate={{
              rotate: [
                i % 2 === 0 ? -1.5 : 1.5,
                i % 2 === 0 ? 1.5 : -1.5,
                i % 2 === 0 ? -1.5 : 1.5,
              ],
              y: [0, -8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
            whileHover={{
              rotate: 0,
              scale: 1.05,
              y: -10,
              transition: { type: "spring", stiffness: 400, damping: 10 },
            }}
            className={`p-6 flex flex-col justify-between aspect-square group relative cursor-pointer ${exp.color} ${neobrutaContainer}`}
          >
            {/* Top Row: Category Tag & Lucide Icon */}
            <div className="flex justify-between items-start">
              <span className="font-bold text-[10px] uppercase bg-white border-2 border-slate-900 px-2 py-0.5 rounded shadow-[2px_2px_0px_#0f172a]">
                Exp. {i + 1}
              </span>
              <div className="p-2 bg-white border-2 border-slate-900 rounded-lg group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                {exp.icon}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-black leading-tight">{exp.name}</h3>

            {/* The Revolving Door Text (Fixes Overlap) */}
            <div className="h-6 overflow-hidden relative">
              <motion.div className="flex flex-col transition-transform duration-300 ease-in-out group-hover:-translate-y-1/2">
                {/* State 1: Default */}
                <div className="h-6 flex items-center gap-2 font-mono text-[12px] text-slate-900 font-bold uppercase tracking-widest">
                  <span className="w-3 h-3 rounded-full bg-slate-900 animate-pulse" />
                  Hover to peek
                </div>

                {/* State 2: Hover */}
                <div className="h-6 flex items-center gap-1 font-black text-xs uppercase tracking-widest text-slate-900">
                  Check it out <ArrowUpRight size={14} strokeWidth={3} />
                </div>
              </motion.div>
            </div>

            {/* Subtle "Grid" background that appears on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-300"
              style={{
                backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
                backgroundSize: "10px 10px",
              }}
            />
          </motion.a>
        ))}
      </div>

      <p className="text-center mt-16 font-mono text-[12px] text-red-900 uppercase tracking-[0.2em]">
        // Log_{new Date().getFullYear()}: Testing complete. Most systems
        stable.
      </p>
    </section>
  );
}

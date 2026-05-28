import { motion } from "framer-motion";
import FloatingTags from "../ui/FloatingGrid";

import myProfileImage from "../assets/profile.png";

export default function About() {
  const neobrutaContainer =
    "border-2 border-slate-900 rounded-2xl shadow-[4px_4px_0px_#0f172a]";

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-teal-50 overflow-hidden">
      {/* FIX: Changed md:grid-cols-2 to lg:grid-cols-2. 
          Now, tablet gets a single column layout, which stops the text from being squeezed and overly long! */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* ======================= */}
        {/* LEFT COLUMN: Title & Text */}
        {/* ======================= */}
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-16">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter"
          >
            About me
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-lg md:text-xl font-bold text-teal-800 opacity-80 uppercase tracking-widest mb-4 md:mb-6">
              The story behind the code
            </p>

            <div className={`bg-white p-6 md:p-8 ${neobrutaContainer}`}>
              {/* FIX: Adjusted text size to scale perfectly across mobile, tablet, and desktop */}
              <p className="text-base md:text-lg lg:text-xl font-medium leading-relaxed text-slate-800">
                Self-taught full-stack developer, interested in building modern
                AI-powered web apps using MERN stack, Next.js and FastAPI.
                Experienced in React, Node.js, MongoDB, and TypeScript, with a
                keen interest in building LLM API integrations, real-time AI
                workflows, and scalable backend systems.
                <br />
                <br />
                Built end-to-end projects like RAG pipelines, local-first AI
                tools, and full-stack SaaS-style platforms. Love building clean
                responsive user experiences and practical AI powered backend
                logic using technologies like the Vercel AI SDK, Groq and modern
                developer tooling.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ======================= */}
        {/* RIGHT COLUMN: Tags & Image */}
        {/* ======================= */}
        {/* FIX: Added grid md:grid-cols-2 lg:grid-cols-1. 
            On Tablet (md), the Tags and Image sit side-by-side (sharing space).
            On Desktop (lg), they stack vertically again! */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-10 md:gap-8 lg:gap-12 lg:mt-8 items-center">
          {/* Floating Tags */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="w-full flex justify-center lg:justify-start"
          >
            <FloatingTags />
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="w-full max-w-[280px] sm:max-w-sm mx-auto md:mr-0 lg:ml-auto lg:mr-8"
          >
            <img
              src={myProfileImage}
              alt="Deepika Sharma"
              className={`w-full h-auto object-cover rounded-2xl border-2 border-slate-900 shadow-[4px_4px_0px_#0f172a] hover:-rotate-2 transition-transform duration-300`}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

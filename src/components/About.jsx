import { motion } from "framer-motion";
import FloatingTags from "../ui/FloatingGrid";

export default function About() {
  const neobrutaContainer =
    "border-2 border-slate-900 rounded-2xl shadow-[4px_4px_0px_#0f172a]";
  const neobrutaBtn =
    "border-2 border-slate-900 rounded-xl shadow-[4px_4px_0px_#0f172a] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all active:shadow-inner active:bg-opacity-50";

  return (
    <section className="py-24 px-6 md:px-12 bg-teal-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="">About me</h2>
          <p className="text-xl font-bold text-teal-800 opacity-80 uppercase tracking-widest mb-6">
            The story behind the code
          </p>
          <p className="text-lg md:text-xl font-medium leading-relaxed bg-white p-6 md:p-8 relative top-1 left-1">
            <span
              className={`absolute -top-1 -left-1 w-full h-full border-2 border-slate-900 rounded-2xl bg-transparent pointer-events-none ${neobrutaContainer} bg-white -z-10`}
            />
            Self-taught full-stack developer, interested in building modern
            AI-powered web apps using MERN stack, Next.js and FastAPI.
            Experienced in React, Node.js, MongoDB, and TypeScript, with a keen
            interest in building LLM API integrations, real-time AI workflows,
            and scalable backend systems. backends.
            <br />
            <br />
            Built end-to-end projects like RAG pipelines, local-first AI tools,
            and full-stack SaaS-style platforms. Love building clean responsive
            user experiences and practical AI powered backend logic using
            technologies like the Vercel AI SDK, Groq and modern developer
            tooling.
          </p>
        </motion.div>

        <FloatingTags />
      </div>
    </section>
  );
}

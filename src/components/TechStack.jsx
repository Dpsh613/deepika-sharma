import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    bg: "bg-rose-200",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "SASS",
      "Framer Motion",
      "HTML5 / CSS3",
    ],
  },
  {
    title: "Backend & APIs",
    bg: "bg-lime-200",
    items: ["Node.js", "Express.js", "Python", "FastAPI", "Flask", "REST APIs"],
  },
  {
    title: "Database & Vector Search",
    bg: "bg-violet-200",
    items: ["MongoDB", "Supabase", "ChromaDB", "FAISS"],
  },
  {
    title: "AI Engineering",
    bg: "bg-amber-200",
    items: [
      "LangChain",
      "RAG Pipelines",
      "LLM Integrations",
      "Groq API",
      "Tavily API",
      "Hugging Face",
      "Sentence Transformers",
      "PDF Processing",
    ],
  },
  {
    title: "UI Systems & Design",
    bg: "bg-sky-200",
    items: [
      "shadcn/ui",
      "Radix UI",
      "Bootstrap",
      "Bulma",
      "Material UI",
      "Responsive Design",
      "Component Architecture",
    ],
  },
  {
    title: "Tools & Deployment",
    bg: "bg-cyan-200",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "Vercel",
      "Render",
      "JWT Authentication",
    ],
  },
];

const neobrutaContainer =
  "border-2 border-slate-900 rounded-2xl shadow-[4px_4px_0px_#0f172a]";

// Variants for the staggered "Popcorn" effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Each skill tag pops in 0.1s after the previous one
    },
  },
};

const itemVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
};

export default function TechStack() {
  return (
    <section className="py-24 px-6 md:px-12 bg-yellow-50 max-w-7xl mx-auto border-x-2 md:border-x-0 border-slate-900 lg:rounded-[3rem] overflow-hidden">
      <div className="mb-16">
        <motion.h2
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900"
        >
          Tech stack
        </motion.h2>
        <p className="text-xl font-bold opacity-80 text-orange-900">
          Tools I love using
        </p>
        <motion.p
          initial={{ rotate: 0 }}
          whileInView={{ rotate: -1 }}
          className="font-medium text-lg mt-4 bg-white w-fit px-4 py-1 border-2 border-slate-900 shadow-[3px_3px_0px_#0f172a] rounded-lg"
        >
          A modern toolkit for building polished, AI-driven products.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILL_CATEGORIES.map((cat, index) => (
          <motion.div
            key={index}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, margin: "-50px" }}
            className={`p-6 ${cat.bg} flex flex-col relative group ${neobrutaContainer}`}
          >
            <h3 className="text-xl font-black border-b-2 border-slate-900 pb-3 mb-4 flex justify-between items-end">
              {cat.title}
              <span className="text-xs font-bold uppercase bg-white border-2 border-slate-900 px-2 py-0.5 rounded-full shadow-[2px_2px_0px_#0f172a]">
                {cat.items.length} tools
              </span>
            </h3>

            <div className="flex flex-wrap gap-2 mt-auto">
              {cat.items.map((item, i) => (
                <motion.span
                  key={item}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.1,
                    rotate: i % 2 === 0 ? 2 : -2,
                    backgroundColor: "#737000",
                    color: "#fff",
                  }}
                  className="bg-white px-3 py-1 text-sm font-bold border-2 border-slate-900 rounded-lg shadow-[2px_2px_0px_#0f172a] cursor-default transition-colors duration-200"
                >
                  {item}
                </motion.span>
              ))}
            </div>

            {/* Hover card tilt effect */}
            <motion.div
              className="absolute inset-0 pointer-events-none rounded-2xl"
              variants={{
                hover: {
                  boxShadow: "8px 8px 0px #0f172a",
                  translateY: -4,
                  translateX: -4,
                },
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

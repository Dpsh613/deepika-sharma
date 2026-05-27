import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const words = ["🕸  Web", "🌻  MERN", "Interactive", "Creative", "Motion"];

export default function DynamicDeveloperTag() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mb-6 flex justify-start">
      <div
        className="
        inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 
        bg-pink-300 border-2 border-slate-900 rounded-2xl 
        shadow-[4px_4px_0px_#0f172a] -rotate-2 hover:rotate-0 transition-transform
      "
      >
        <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-slate-900">
          •
        </span>
        <div className="relative h-5 w-[105px] md:w-[125px] overflow-hidden flex items-center justify-end">
          <AnimatePresence mode="wait">
            <motion.span
              key={words[index]}
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.3, ease: "circOut" }}
              className="absolute right-0 text-xs md:text-sm font-bold uppercase tracking-widest text-slate-900"
            >
              {words[index]}
            </motion.span>
          </AnimatePresence>
        </div>
        <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-slate-900">
          Developer
        </span>
      </div>
    </div>
  );
}

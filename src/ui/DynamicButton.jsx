import { motion } from "framer-motion";

export default function DynamicButton() {
  // Keeping your neobruta style logic
  const neobrutaBtn =
    "border-2 border-slate-900 shadow-[4px_4px_0px_#0f172a] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all";

  return (
    <motion.a
      href="#work"
      initial="rest"
      whileHover="hover"
      animate="rest"
      className={`relative inline-block px-8 py-4 bg-slate-800 text-white font-bold text-lg overflow-hidden ${neobrutaBtn}`}
    >
      {/* Container for the rolling text */}
      <div className="relative h-7 overflow-hidden">
        {/* Original Text */}
        <motion.span
          className="block"
          variants={{
            rest: { y: 0 },
            hover: { y: "-150%" },
          }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        >
          View my work
        </motion.span>

        {/* Quirky Hover Text */}
        <motion.span
          className="absolute inset-0 block text-yellow-400" // Yellow accent for the "quirky" part
          variants={{
            rest: { y: "150%" },
            hover: { y: 0 },
          }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        >
          Take a peek?
        </motion.span>
      </div>
    </motion.a>
  );
}

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function FloatingTags() {
  const [isHovered, setIsHovered] = useState(false);

  const tags = [
    {
      name: "MERN Stack",
      color: "bg-rose-300",
      x: [-10, 10],
      y: [-5, 15],
      rotate: -2,
    },
    {
      name: "AI & LLMs",
      color: "bg-blue-300",
      x: [15, -5],
      y: [10, -10],
      rotate: 3,
    },
    {
      name: "Clean UI",
      color: "bg-green-300",
      x: [-15, 5],
      y: [5, -15],
      rotate: -3,
    },
    {
      name: "RAG Pipelines",
      color: "bg-yellow-200",
      x: [10, -10],
      y: [-10, 10],
      rotate: 2,
    },
  ];

  // The shared Neo-Brutalism style
  const neobrutaContainer =
    "border-2 border-slate-900 shadow-[4px_4px_0px_#0f172a]";

  return (
    <div
      className="grid grid-cols-2 gap-6 auto-rows-max h-full place-content-center pt-8 md:pt-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {tags.map((tag, i) => (
        <motion.div
          key={tag.name}
          className={`
            ${tag.color} ${neobrutaContainer}
            relative font-bold p-6 text-center text-lg cursor-pointer
            flex items-center justify-center
          `}
          // 1. Roaming Animation (Infinite)
          animate={
            isHovered
              ? { x: 0, y: 0, rotate: tag.rotate, scale: 1 } // Snap to position
              : {
                  x: tag.x,
                  y: tag.y,
                  rotate: [tag.rotate, tag.rotate * -1, tag.rotate],
                  transition: {
                    duration: 3 + i, // Different speeds for organic feel
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  },
                }
          }
          // 2. Individual hover pop
          whileHover={{
            scale: 1.1,
            zIndex: 10,
            backgroundColor: "#fff", // Highlight the hovered one
            transition: { duration: 0.2 },
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          {tag.name}

          {/* Subtle "peek" text for the cute factor - optional */}
        </motion.div>
      ))}
    </div>
  );
}

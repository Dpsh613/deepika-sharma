import React from "react";
import { motion } from "framer-motion";

const catBodyVariants = {
  idle: {
    rotate: 0,
    x: 0,
    y: 0,
    transition: { type: "spring", stiffness: 200 },
  },
  anticipate: {
    rotate: [0, 8, 5, 9, 6],
    x: 4,
    y: -2,
    transition: { duration: 0.45 },
  },
  // The body still lunges forward to give it impact
  strike: {
    rotate: -15,
    x: -8,
    y: 8,
    transition: { duration: 0.1, ease: "easeIn" },
  },
  recover: {
    rotate: -4,
    x: -2,
    y: 2,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

const pawVariants = {
  idle: { d: "M 9 15 C 8 16, 8 20, 10 21" },
  anticipate: {
    d: "M 9 15 C 10 14, 12 16, 12 17",
    transition: { duration: 0.45 },
  },

  // THE FIX: Shortened the bezier curve here.
  // Changed the end point from (-5 29) to (0 24) so it doesn't stretch too far.
  strike: {
    d: "M 9 15 C 4 18, 1 21, 0 24",
    transition: { duration: 0.1, ease: "easeIn" },
  },

  recover: { d: "M 9 15 C 6 17, 4 19, 5 21", transition: { duration: 0.25 } },
};

const CatSVG = ({ catState }) => {
  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
      className="absolute -right-3 -top-11 w-16 h-16 z-10 pointer-events-none"
    >
      <motion.div
        variants={catBodyVariants}
        animate={catState}
        className="w-full h-full origin-bottom-right"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-full h-full text-slate-900 drop-shadow-[0_3px_3px_rgba(0,0,0,0.3)] overflow-visible"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Animated Swishing Tail */}
          <motion.path
            d="M 19 20 C 24 20 26 12 22 8"
            animate={{
              d: [
                "M 19 20 C 24 20 26 12 22 8",
                "M 19 20 C 25 18 24 10 20 12",
                "M 19 20 C 24 20 26 12 22 8",
              ],
            }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />

          {/* Full Cat Silhouette */}
          <path
            d="M 12 7
               L 10 3 L 13 6
               C 14 5.5 15 5.5 16 6
               L 19 3 L 17 7
               C 19 8 19 10 18 11
               C 19 14 20 17 20 21
               H 8
               C 8 17 9 14 10 11
               C 9 10 9 8 12 7 Z"
          />

          {/* Eyes & Nose */}
          <circle
            cx="11.5"
            cy="9.5"
            r="0.8"
            fill="currentColor"
            stroke="none"
          />
          <circle
            cx="15.5"
            cy="9.5"
            r="0.8"
            fill="currentColor"
            stroke="none"
          />
          <path
            d="M 13 11 L 13.5 12 L 14 11 Z"
            fill="currentColor"
            stroke="none"
          />

          {/* Animated Striking Paw */}
          <motion.path variants={pawVariants} animate={catState} />
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default CatSVG;

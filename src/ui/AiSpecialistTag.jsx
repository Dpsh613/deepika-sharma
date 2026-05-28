import React, { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import CatSVG from "./CatSVG";

const AiSpecialistTag = ({ neobrutaContainer }) => {
  const [isCooking, setIsCooking] = useState(false);
  const [catState, setCatState] = useState("idle"); // idle, anticipate, strike, recover
  const buttonControls = useAnimation();

  useEffect(() => {
    let isActive = true;

    // Helper function for sequence timing
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const endlessLoop = async () => {
      while (isActive) {
        // 1. Idle for a random duration (between 2 to 4.5 seconds)
        await sleep(2000 + Math.random() * 2500);
        if (!isActive) break;

        // 2. Anticipation (Cat winds up and wiggles butt)
        setCatState("anticipate");
        await sleep(450); // Give the wiggle time to play
        if (!isActive) break;

        // 3. Strike (Super fast lunge forward)
        setCatState("strike");
        await sleep(100); // 100ms travel time to the button
        if (!isActive) break;

        // 4. HIT! Toggle text and physically push the button down
        setIsCooking((prev) => !prev);
        buttonControls.start({
          rotate: [0, 4, -1.5, 0.5, 0], // Pivots on the left, dips on the right
          y: [0, 6, -2, 1, 0],
          scale: [1, 0.96, 1.01, 1],
          transition: { duration: 0.5, ease: "backOut" },
        });

        await sleep(200); // Hold paw on the button momentarily
        if (!isActive) break;

        // 5. Recover (Pull paw back slightly)
        setCatState("recover");
        await sleep(250);
        if (!isActive) break;

        // 6. Reset to Idle
        setCatState("idle");
      }
    };

    endlessLoop();

    return () => {
      isActive = false; // Cleanup loop on unmount
    };
  }, [buttonControls]);

  return (
    <div className="relative inline-block mt-10 mr-4">
      {/* Pass the advanced state machine to the cat */}
      <CatSVG catState={catState} />

      <motion.div
        animate={buttonControls}
        style={{ transformOrigin: "left center" }} // Crucial: makes right side dip when hit
        className={`relative px-5 py-3 text-sm font-black uppercase bg-amber-200 ${
          neobrutaContainer ||
          "border-2 border-slate-900 shadow-[4px_4px_0_0_rgba(15,23,42,1)]"
        } transition-colors duration-300`}
      >
        {/* Container for text - ensures NO bouncing/layout shifts */}
        <div className="relative flex items-center justify-center overflow-visible h-[20px]">
          {/* THE FIX: Invisible "Ghost" text forces the button to always fit the widest phrase */}
          <span className="invisible whitespace-nowrap pointer-events-none">
            AI Specialist... umm 'Soon To Be'
          </span>

          {/* Smooth animated text swaps over the ghost text */}
          <AnimatePresence mode="popLayout">
            <motion.span
              key={isCooking ? "cooking" : "specialist"}
              initial={{ y: 15, opacity: 0, filter: "blur(4px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ y: -15, opacity: 0, filter: "blur(4px)" }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="absolute whitespace-nowrap"
            >
              {isCooking ? "Still cooking... 🍲" : "AI Enthusiast... ♥"}
            </motion.span>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default AiSpecialistTag;

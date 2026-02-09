"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reasons = [
  { text: "Your beautiful smile that lights up every room" },
  { text: "The way you laugh at my silly jokes" },
  { text: "How you make everything feel like home" },
  { text: "Your kindness and caring heart" },
  { text: "The way you believe in me, even when I don't" },
  { text: "Your strength and determination" },
  { text: "How you always know how to make me feel better" },
  { text: "The way you look at me with those beautiful eyes" },
  { text: "Your patience and understanding" },
  { text: "How you make ordinary moments extraordinary" },
  { text: "The sound of your voice saying my name" },
  { text: "Your warm hugs that feel like safety" },
];

export default function ReasonsILoveYou() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 25, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section ref={ref} className="py-20 md:py-28 px-4 sm:px-6 md:px-8 w-full flex flex-col items-center">
      <div className="max-w-5xl w-full">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex justify-center gap-3 mb-5"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {[0, 1, 2].map((i) => (
              <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="#c9a87c" opacity={0.3 + i * 0.1}>
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            ))}
          </motion.div>
          <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-[#f5ede6]/90 italic mb-4">
            Reasons I Love You
          </h3>
          <p className="text-[#c9a87c]/40 text-sm md:text-base max-w-md mx-auto tracking-wide">
            Just a few of the infinite reasons why you&apos;re my everything
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={item}
              className="glass-card p-6 md:p-7 group cursor-default relative overflow-hidden"
              whileHover={{ y: -4 }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#c9a87c]/8 to-[#8b3a4a]/4 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                {/* Number */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-serif text-3xl md:text-4xl font-light text-[#c9a87c]/25 italic">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-[#c9a87c]/15 to-transparent" />
                </div>

                {/* Text */}
                <p className="text-[#f5ede6]/70 text-sm md:text-base leading-relaxed font-light">
                  {reason.text}
                </p>

                {/* Corner heart */}
                <div className="absolute bottom-0 right-0 text-[#c9a87c]/10">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom decoration */}
        <motion.p
          className="text-center text-[#c9a87c]/30 mt-16 text-sm font-serif italic font-light"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          ...and a million more reasons I discover every day
        </motion.p>
      </div>
    </section>
  );
}

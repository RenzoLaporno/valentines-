"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const promises = [
  {
    title: "Your Biggest Fan",
    text: "To always be your biggest supporter and cheerleader",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    title: "Your Strength",
    text: "To be your strength when you feel weak",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    ),
  },
  {
    title: "Always Here",
    text: "To always listen and understand",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
  },
  {
    title: "Your Home",
    text: "To make anywhere feel like home, as long as we're together",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <path d="M9 22V12h6v10" />
      </svg>
    ),
  },
  {
    title: "Endless Love",
    text: "To never let you fall asleep wondering if you're loved",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
    ),
  },
  {
    title: "Forever Yours",
    text: "To choose you, every single day, forever",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2" />
        <path d="M18 2l4 4-4 4" />
        <path d="M22 6h-7" />
      </svg>
    ),
  },
];

export default function PromiseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 px-4 sm:px-6 md:px-8 w-full flex flex-col items-center">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-[#c9a87c]/50 mb-5 flex justify-center"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </motion.div>
          <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light shimmer-text italic mb-4">
            My Promises To You
          </h3>
          <p className="text-[#c9a87c]/40 text-sm md:text-base max-w-lg mx-auto tracking-wide">
            Sacred vows from my heart to yours, sealed with love
          </p>
        </motion.div>

        {/* Promise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {promises.map((promise, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 md:p-8 group relative overflow-hidden"
              initial={{ opacity: 0, y: 35 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6, type: "spring", stiffness: 100 }}
              whileHover={{ y: -4 }}
            >
              {/* Warm glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#c9a87c]/8 to-[#8b3a4a]/4 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                {/* Icon */}
                <div className="w-11 h-11 rounded-full bg-[#c9a87c]/10 border border-[#c9a87c]/20 flex items-center justify-center text-[#c9a87c]/60 mb-5">
                  {promise.icon}
                </div>

                {/* Promise label */}
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#c9a87c]/15 to-[#c9a87c]/8 rounded-full text-[#c9a87c]/60 text-xs font-light border border-[#c9a87c]/15 mb-3 tracking-widest uppercase">
                  I Promise
                </span>

                {/* Title */}
                <h4 className="font-serif text-lg md:text-xl font-light text-[#f5ede6]/90 italic mb-2">
                  {promise.title}
                </h4>

                {/* Text */}
                <p className="text-[#e8b4b8]/50 text-sm leading-relaxed font-light">
                  {promise.text}
                </p>
              </div>

              {/* Bottom glow line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#c9a87c]/0 via-[#c9a87c]/30 to-[#c9a87c]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Bottom message */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-4"
            animate={{ scale: [1, 1.01, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#c9a87c" opacity="0.3">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <p className="text-[#c9a87c]/30 text-sm md:text-base font-serif italic font-light">
              These promises I make to you, from now until forever
            </p>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#c9a87c" opacity="0.3">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const milestones = [
  {
    year: "Year 1",
    title: "The Beginning",
    description: "When two hearts found each other and everything changed forever",
    date: "2023",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
  },
  {
    year: "Year 2",
    title: "Growing Together",
    description: "Building dreams, making memories, falling deeper in love each day",
    date: "2024",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    year: "Year 3",
    title: "Stronger Than Ever",
    description: "Three years of love, laughter, and choosing each other every single day",
    date: "2025",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    year: "Forever",
    title: "Our Future",
    description: "The best is yet to come, my love. Here's to a lifetime together",
    date: "& Beyond",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2" />
        <path d="M18 2l4 4-4 4" />
        <path d="M22 6h-7" />
      </svg>
    ),
  },
];

export default function Timeline() {
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
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </motion.div>
          <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-[#f5ede6]/90 italic mb-4">
            Our Journey Together
          </h3>
          <p className="text-[#c9a87c]/40 text-sm md:text-base tracking-wide">
            Every moment with you is a treasure
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[1.35rem] md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2">
            <div className="w-full h-full bg-gradient-to-b from-[#c9a87c]/30 via-[#c9a87c]/15 to-[#c9a87c]/5" />
          </div>

          {/* Timeline items */}
          <div className="space-y-12 md:space-y-16">
            {milestones.map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-[1.35rem] md:left-1/2 w-3 h-3 -translate-x-1/2 z-10 mt-2"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.15 + 0.2, type: "spring" }}
                >
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#c9a87c] to-[#8b3a4a] shadow-lg shadow-[#c9a87c]/30" />
                  <div className="absolute inset-0 w-3 h-3 rounded-full bg-[#c9a87c]/30 animate-ping" style={{ animationDuration: '3s' }} />
                </motion.div>

                {/* Content card */}
                <div className={`w-full pl-16 pr-2 md:pl-0 md:pr-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-10' : 'md:pl-10'}`}>
                  <motion.div
                    className="glass-card p-6 sm:p-7 md:p-8"
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#c9a87c]/10 border border-[#c9a87c]/20 flex items-center justify-center text-[#c9a87c]/70 flex-shrink-0">
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <h5 className="text-[#f5ede6]/80 text-sm sm:text-base font-light tracking-widest uppercase">
                          {item.year}
                        </h5>
                        <p className="text-[#c9a87c]/40 text-xs tracking-wider">{item.date}</p>
                      </div>
                    </div>

                    <h4 className="font-serif text-lg sm:text-xl md:text-2xl font-light text-[#f5ede6]/90 italic mb-3">
                      {item.title}
                    </h4>

                    <p className="text-[#e8b4b8]/50 text-sm md:text-base leading-relaxed font-light">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>

          {/* End heart */}
          <motion.div
            className="absolute left-[1.35rem] md:left-1/2 -bottom-6 -translate-x-1/2 text-rose-gold/50"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.8, type: "spring" }}
          >
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom message */}

      </div>
    </section>
  );
}

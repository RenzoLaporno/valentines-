"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function HeartSVG({ className = "", size = 32 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor" />
    </svg>
  );
}

function DaysCounter() {
  const [days, setDays] = useState(0);

  useEffect(() => {
    const start = new Date("2023-02-14");
    const now = new Date();
    const diff = Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    setDays(diff);
  }, []);

  return (
    <motion.div
      className="flex flex-col items-center gap-1 mt-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.3, duration: 1 }}
    >
      <span className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#c4727a]/70 italic">
        {days.toLocaleString()}
      </span>
      <span className="text-[#e8b4b8]/35 text-xs tracking-[0.3em] uppercase">
        days of loving you
      </span>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center relative px-6">
      {/* Warm radial glows */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-[#8b3a4a]/15 rounded-full blur-[150px]" />
        <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-[#c4727a]/10 rounded-full blur-[120px] translate-y-20" />
      </div>

      {/* Decorative rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-[240px] h-[240px] sm:w-[380px] sm:h-[380px] md:w-[500px] md:h-[500px] border border-[#c9a87c]/8 rounded-full"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <motion.div
          className="absolute w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] md:w-[650px] md:h-[650px] border border-[#c4727a]/5 rounded-full"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
        />
      </div>

      {/* Main content */}
      <div className="relative flex flex-col items-center gap-5 md:gap-7 text-center z-10">
        {/* Heart cluster */}
        <motion.div
          className="relative"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 150, damping: 20, delay: 0.2 }}
        >
          <motion.div
            className="absolute -top-5 -left-8 text-[#c4727a]/40"
            animate={{ y: [0, -8, 0], rotate: [0, 12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <HeartSVG size={18} />
          </motion.div>
          <motion.div
            className="absolute -top-2 -right-10 text-[#e8b4b8]/35"
            animate={{ y: [0, -6, 0], rotate: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
          >
            <HeartSVG size={14} />
          </motion.div>
          <motion.div
            className="absolute -bottom-3 -left-7 text-[#c9a87c]/25"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          >
            <HeartSVG size={12} />
          </motion.div>
          <motion.div
            className="absolute top-1/2 -right-12 text-[#c4727a]/20"
            animate={{ y: [0, -4, 0], x: [0, 3, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <HeartSVG size={10} />
          </motion.div>

          {/* Main heart with warm glow */}
          <motion.div
            className="text-[#c4727a] drop-shadow-[0_0_50px_rgba(196,114,122,0.4)]"
            animate={{ scale: [1, 1.08, 1, 1.1, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <HeartSVG size={72} className="sm:w-20 sm:h-20 md:w-24 md:h-24" />
          </motion.div>
        </motion.div>

        {/* Pre-title whisper */}
        <motion.p
          className="text-[#c9a87c]/40 text-xs tracking-[0.4em] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1.2 }}
        >
          To the love of my life
        </motion.p>

        {/* Main title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide font-light text-[#f5ede6]/90 italic">
            Happy Valentine&apos;s Day
          </h1>
        </motion.div>

        {/* Her name - larger, warmer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="relative"
        >
          <div className="absolute inset-0 font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-[#c4727a]/10 blur-2xl select-none italic">
            Angie
          </div>
          <h2 className="relative font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light shimmer-text italic">
            Angie
          </h2>
        </motion.div>

        {/* Days counter */}
        <DaysCounter />

        {/* Anniversary badge */}
        <motion.div
          className="flex items-center gap-3 px-6 py-3 glass-card mt-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            className="text-[#c4727a]/50"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <HeartSVG size={12} />
          </motion.div>
          <span className="text-[#f5ede6]/60 font-light text-sm md:text-base tracking-widest uppercase">
            3 Beautiful Years
          </span>
          <motion.div
            className="text-[#c4727a]/50"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          >
            <HeartSVG size={12} />
          </motion.div>
        </motion.div>

        {/* Romantic subtitle */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-[#e8b4b8]/40 max-w-lg leading-relaxed mt-1 font-serif italic font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.8 }}
        >
          In every universe, in every lifetime, my heart would always find its way to yours
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 md:bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
      >
        <span className="text-[#c9a87c]/25 text-xs tracking-[0.2em] uppercase">Our Story</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-[#c9a87c]/25"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

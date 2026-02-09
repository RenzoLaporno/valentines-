"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useMemo } from "react";

function HeartSVG({ size = 24, color = "#c9a87c" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill={color} />
    </svg>
  );
}

export default function FinalSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isClicked, setIsClicked] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const heartAnimations = useMemo(() =>
    [...Array(25)].map((_, i) => ({
      x: ((i * 47) % 100 - 50) * 12,
      y: ((i * 31) % 100 - 50) * 12,
      rotate: (i * 29) % 360 - 180,
      scale: 0.6 + (i % 5) * 0.3,
      color: ["#c9a87c", "#e8b4b8", "#c4727a", "#8b3a4a", "#dfc4a0"][i % 5],
      size: 16 + (i % 4) * 6,
    })), []
  );

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setShowMessage(true), 1000);
  };

  return (
    <section ref={ref} className="min-h-screen w-full flex flex-col items-center justify-center py-24 md:py-32 px-4 sm:px-6 md:px-8 relative">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-[#8b3a4a]/10 rounded-full blur-[150px]" />
      </div>

      <motion.div
        className="relative text-center max-w-xl mx-auto w-full z-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        {!isClicked ? (
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-[#c9a87c] drop-shadow-[0_0_40px_rgba(201,168,124,0.3)]"
            >
              <motion.div
                className="flex justify-center"
                animate={{ scale: [1, 1.1, 1, 1.1, 1], rotate: [0, 3, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <HeartSVG size={64} />
              </motion.div>
            </motion.div>

            <motion.h3
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#f5ede6]/90 italic"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              One More Thing...
            </motion.h3>

            <motion.p
              className="text-[#f5ede6]/70 text-xl md:text-2xl font-light"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Will you be my Valentine, Angie?
            </motion.p>

            {/* Button */}
            <motion.div
              className="pt-4 relative inline-block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#c9a87c] to-[#8b3a4a] rounded-full blur-xl opacity-30"
                animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />

              <motion.button
                className="relative bg-gradient-to-r from-[#c9a87c] via-[#b4956e] to-[#c9a87c] text-[#1a0a12] text-lg md:text-xl font-medium py-5 px-14 md:py-6 md:px-18 rounded-full shadow-2xl shadow-[#c9a87c]/20 tracking-wide"
                whileHover={{ scale: 1.06, boxShadow: "0 0 60px rgba(201, 168, 124, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={handleClick}
              >
                <span className="flex items-center gap-3">
                  Yes!
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <HeartSVG size={20} color="#1a0a12" />
                  </motion.div>
                </span>
              </motion.button>
            </motion.div>

            <motion.p
              className="text-[#c9a87c]/30 text-xs md:text-sm font-serif italic pt-2"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1, duration: 0.8 }}
            >
              (There&apos;s only one answer, because you&apos;re already my forever)
            </motion.p>
          </div>
        ) : (
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Heart explosion with SVG hearts */}
            {heartAnimations.map((heart, i) => (
              <motion.div
                key={i}
                className="absolute left-1/2 top-1/2 pointer-events-none"
                initial={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                animate={{
                  x: heart.x,
                  y: heart.y,
                  opacity: 0,
                  scale: 0,
                  rotate: heart.rotate,
                }}
                transition={{ duration: 2, ease: "easeOut" }}
              >
                <HeartSVG size={heart.size} color={heart.color} />
              </motion.div>
            ))}

            {showMessage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="space-y-8"
              >
                {/* Big animated heart */}
                <motion.div
                  className="flex justify-center text-[#c9a87c] drop-shadow-[0_0_50px_rgba(201,168,124,0.4)]"
                  animate={{ scale: [1, 1.12, 1], rotate: [0, 3, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <HeartSVG size={80} />
                </motion.div>

                {/* Main message */}
                <motion.h3
                  className="font-serif text-4xl sm:text-5xl md:text-6xl font-light shimmer-text italic"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  I Love You, Angie!
                </motion.h3>

                {/* Sub messages */}
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  <p className="text-[#f5ede6]/80 text-lg md:text-xl font-light">
                    Thank you for the best 3 years of my life
                  </p>

                  <p className="text-[#e8b4b8]/50 text-base md:text-lg font-serif italic font-light max-w-md mx-auto leading-relaxed">
                    You are my today and all of my tomorrows.
                    Every love story is beautiful, but ours is my favorite.
                  </p>

                  <motion.div
                    className="glass-card inline-block px-8 py-4"
                    animate={{ scale: [1, 1.01, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <p className="text-[#f5ede6]/70 text-base md:text-lg font-light">
                      Here&apos;s to forever together
                    </p>
                  </motion.div>
                </motion.div>

                {/* Floating hearts */}
                <div className="flex justify-center gap-5 pt-4">
                  {["#c9a87c", "#e8b4b8", "#c4727a", "#e8b4b8", "#c9a87c"].map((color, i) => (
                    <motion.div
                      key={i}
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
                    >
                      <HeartSVG size={18} color={color} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}

"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const envelopeRef = useRef<HTMLDivElement>(null);
  const flapRef = useRef<HTMLDivElement>(null);
  const letterRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const openEnvelope = () => {
    if (isOpen) return;
    setIsOpen(true);

    const tl = gsap.timeline();

    tl.to(envelopeRef.current, {
      rotation: -2,
      duration: 0.1,
      ease: "power2.inOut",
    })
    .to(envelopeRef.current, {
      rotation: 2,
      duration: 0.1,
      ease: "power2.inOut",
    })
    .to(envelopeRef.current, {
      rotation: 0,
      duration: 0.1,
      ease: "power2.inOut",
    })
    .to(flapRef.current, {
      rotateX: 180,
      duration: 0.7,
      ease: "power2.inOut",
    })
    .to(letterRef.current, {
      y: -120,
      duration: 0.9,
      ease: "power2.out",
      onComplete: () => setShowLetter(true),
    })
    .to(envelopeRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.6,
      ease: "power2.inOut",
    }, "-=0.3")
    .to(letterRef.current, {
      y: 0,
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
    }, "-=0.3");
  };

  useEffect(() => {
    if (showLetter && contentRef.current) {
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    }
  }, [showLetter]);

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 md:px-8 w-full flex flex-col items-center">
      {/* Header */}
      <motion.div
        className="text-center mb-14 md:mb-18"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Envelope icon */}
        <motion.div
          className="text-[#c9a87c]/70 mb-5 flex justify-center"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M22 4L12 13 2 4" />
          </svg>
        </motion.div>
        <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-[#f5ede6]/90 italic mb-4">
          A Letter For You
        </h3>
        {!isOpen && (
          <motion.p
            className="text-[#c9a87c]/40 text-sm md:text-base tracking-wide"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            Click to open your letter
          </motion.p>
        )}
      </motion.div>

      {/* Container for envelope and letter */}
      <div ref={containerRef} className="relative w-full max-w-2xl flex justify-center items-center" style={{ minHeight: '340px' }}>

        {/* Envelope */}
        <div
          ref={envelopeRef}
          onClick={openEnvelope}
          className={`absolute cursor-pointer transition-transform hover:scale-[1.02] ${isOpen && showLetter ? 'pointer-events-none' : ''}`}
          style={{ perspective: '1000px' }}
        >
          <div className="relative w-64 h-44 sm:w-80 sm:h-52 md:w-96 md:h-60">
            {/* Envelope body */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#d4b896] to-[#c4a67c] rounded-lg shadow-2xl shadow-[#8b3a4a]/30" />

            {/* Envelope front */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#e8d5bc] to-[#d4c0a0] rounded-lg">
              {/* Folds - using clip-path for responsive sizing */}
              <div
                className="absolute left-0 top-0 w-1/2 h-full"
                style={{
                  background: '#dcc8a8',
                  clipPath: 'polygon(0 0, 0 100%, 100% 100%)',
                }}
              />
              <div
                className="absolute right-0 top-0 w-1/2 h-full"
                style={{
                  background: '#dcc8a8',
                  clipPath: 'polygon(100% 0, 0 100%, 100% 100%)',
                }}
              />
              {/* Bottom fold */}
              <div
                className="absolute bottom-0 left-0 right-0 h-2/3"
                style={{
                  background: '#c9a87c',
                  clipPath: 'polygon(0 100%, 50% 0, 100% 100%)',
                }}
              />
            </div>

            {/* Envelope flap (top) */}
            <div
              ref={flapRef}
              className="absolute -top-0 left-0 right-0 origin-top"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div
                className="absolute left-1/2 -translate-x-1/2 w-0 h-0"
                style={{
                  borderLeft: '144px solid transparent',
                  borderRight: '144px solid transparent',
                  borderTop: '96px solid #8b3a4a',
                  backfaceVisibility: 'hidden',
                }}
              />
              <div
                className="absolute left-1/2 -translate-x-1/2 w-0 h-0"
                style={{
                  borderLeft: '144px solid transparent',
                  borderRight: '144px solid transparent',
                  borderTop: '96px solid #dcc8a8',
                  transform: 'rotateX(180deg)',
                  backfaceVisibility: 'hidden',
                }}
              />
            </div>

            {/* Wax seal - CSS only */}
            {!isOpen && (
              <motion.div
                className="absolute top-10 left-1/2 -translate-x-1/2 z-10"
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#8b3a4a] to-[#6b2a3a] shadow-lg shadow-[#8b3a4a]/50 flex items-center justify-center border-2 border-[#a04a5a] relative overflow-hidden">
                  {/* Wax texture */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full" />
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#e8b4b8" className="relative z-10">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
              </motion.div>
            )}

            {/* Letter peeking out */}
            <div
              ref={letterRef}
              className="absolute top-4 left-1/2 -translate-x-1/2 w-56 sm:w-64 md:w-72 bg-[#faf3eb] rounded-t-lg shadow-lg z-0"
              style={{ height: '160px' }}
            >
              <div className="p-4 text-[#c9a87c]/30 text-sm">
                <div className="h-[1px] bg-[#c9a87c]/15 w-3/4 mb-4 mt-2" />
                <div className="h-[1px] bg-[#c9a87c]/15 w-full mb-4" />
                <div className="h-[1px] bg-[#c9a87c]/15 w-5/6" />
              </div>
            </div>
          </div>
        </div>

        {/* Full Letter Content */}
        {showLetter && (
          <div ref={contentRef} className="w-full max-w-2xl">
            <div className="absolute inset-0 bg-[#c9a87c]/5 rounded-3xl blur-2xl" />

            <div className="relative paper-texture rounded-2xl shadow-2xl shadow-[#8b3a4a]/20 overflow-hidden border border-[#c9a87c]/20">
              {/* Top border accent */}
              <div className="h-[2px] bg-gradient-to-r from-transparent via-[#c9a87c]/40 to-transparent" />

              <div className="p-7 sm:p-9 md:p-12 relative">
                {/* Greeting */}
                <h4 className="font-serif text-2xl md:text-3xl font-medium text-[#6b2a3a] mb-8 text-center italic">
                  My Dearest Angie,
                </h4>

                {/* Letter body */}
                <div className="text-[#4a3028] text-sm md:text-base leading-[2] space-y-6 font-serif">
                  <p className="indent-8">
                    Three years ago, my life changed forever when you walked into it.
                    I didn&apos;t know it then, but that was the moment everything
                    began to make sense &mdash; like every road I&apos;d ever taken was
                    quietly leading me to you.
                  </p>

                  <p className="indent-8">
                    You are my first thought in the morning and my last wish
                    at night. You are my sunshine on cloudy days, my calm in every
                    storm, and the reason I believe that forever isn&apos;t just a word &mdash;
                    it&apos;s a promise my heart makes to yours, every single day.
                  </p>

                  <p className="indent-8">
                    I love the way you laugh, the way you care, the way your
                    hand fits perfectly in mine. I love that you love me even on
                    my hardest days, when I don&apos;t feel worthy of it. You make
                    me want to be the best version of myself &mdash; not just for us,
                    but because you deserve nothing less.
                  </p>

                  <p className="indent-8">
                    Thank you for choosing me. Thank you for staying. Thank you
                    for every quiet moment, every late-night talk, every time
                    you looked at me and made me feel like I was home.
                    Here&apos;s to 3 years down, and a lifetime of falling
                    deeper in love with you.
                  </p>

                  <p className="indent-8">
                    You are my greatest adventure, my safest place, and the most
                    beautiful chapter of my life. I love you beyond what these
                    words could ever hold.
                  </p>

                  {/* Divider */}
                  <div className="flex items-center justify-center gap-5 py-4">
                    <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#c9a87c]/30" />
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#c9a87c" opacity="0.5">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#c9a87c]/30" />
                  </div>

                  {/* Highlighted message */}
                  <div className="text-center py-3">
                    <p className="font-serif text-xl md:text-2xl font-medium text-[#6b2a3a] italic">
                      I love you more than words can say.
                    </p>
                    <p className="font-serif text-lg md:text-xl text-[#8b3a4a]/80 mt-2 italic">
                      Forever and always.
                    </p>
                  </div>
                </div>

                {/* Signature */}
                <div className="text-right mt-10 pt-6 border-t border-[#c9a87c]/15">
                  <p className="text-base md:text-lg text-[#8b3a4a] font-serif italic font-light">
                    With all my love,
                  </p>
                  <div className="flex items-center justify-end gap-3 mt-3">
                    <p className="font-serif text-2xl md:text-3xl font-medium text-[#6b2a3a] italic">
                      Renz
                    </p>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#c9a87c" opacity="0.6">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Bottom border accent */}
              <div className="h-[2px] bg-gradient-to-r from-transparent via-[#c9a87c]/40 to-transparent" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

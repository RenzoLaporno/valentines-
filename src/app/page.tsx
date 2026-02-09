"use client";

import { motion } from "framer-motion";
import Stars from "@/components/Stars";
import FloatingHearts from "@/components/FloatingHearts";
import HeroSection from "@/components/HeroSection";
import LoveLetter from "@/components/LoveLetter";
import Timeline from "@/components/Timeline";
import ReasonsILoveYou from "@/components/ReasonsILoveYou";
import PromiseSection from "@/components/PromiseSection";
import FinalSection from "@/components/FinalSection";
import MusicPlayer from "@/components/MusicPlayer";

function SectionDivider() {
  return (
    <div className="py-10 md:py-14 flex items-center justify-center gap-4">
      <div className="section-divider flex-1 max-w-[100px]" />
      <svg width="12" height="12" viewBox="0 0 24 24" fill="#c4727a" opacity="0.2">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
      <div className="section-divider flex-1 max-w-[100px]" />
    </div>
  );
}

function RomanticQuote({ quote, author }: { quote: string; author?: string }) {
  return (
    <div className="w-full flex justify-center">
      <motion.div
        className="py-20 md:py-28 my-16 md:my-24 px-6 w-full flex flex-col items-center"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <p className="font-serif text-lg sm:text-xl md:text-2xl font-light text-[#e8b4b8]/40 italic leading-relaxed text-center max-w-2xl">
          <span className="font-serif text-3xl md:text-4xl text-[#c9a87c]/10 select-none mr-1">&ldquo;</span>
          {quote}
          <span className="font-serif text-3xl md:text-4xl text-[#c9a87c]/10 select-none ml-1">&rdquo;</span>
        </p>
        {author && (
          <p className="text-[#c9a87c]/20 text-xs mt-6 tracking-[0.2em] uppercase text-center">
            {author}
          </p>
        )}
      </motion.div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Ambient background orbs - warmer */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#8b3a4a]/8 rounded-full blur-[200px]" />
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[#c4727a]/6 rounded-full blur-[180px]" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-[#8b3a4a]/5 rounded-full blur-[200px]" />
        <div className="absolute top-2/3 left-1/3 w-[500px] h-[500px] bg-[#c9a87c]/4 rounded-full blur-[160px]" />
      </div>

      {/* Stars and falling petals/hearts */}
      <Stars />
      <FloatingHearts />

      {/* Music player */}
      <MusicPlayer />

      {/* Content sections */}
      <div className="relative z-10 w-full">
        <HeroSection />

        <SectionDivider />

        <LoveLetter />

        <RomanticQuote
          quote="I have found the one whom my soul loves."
          author="Song of Solomon 3:4"
        />

        <Timeline />

        <RomanticQuote
          quote="Whatever our souls are made of, yours and mine are the same."
          author="Emily Bront&euml;"
        />

        <ReasonsILoveYou />

        <RomanticQuote
          quote="I love you not only for what you are, but for what I am when I am with you."
          author="Roy Croft"
        />

        <PromiseSection />

        <SectionDivider />

        <FinalSection />

        {/* Footer */}
        <footer className="text-center py-24 md:py-28 px-6">
          <div className="max-w-md mx-auto space-y-8">
            {/* Heart line */}
            <div className="flex justify-center items-center gap-5">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#c4727a]/15" />
              <motion.div
                className="text-[#c4727a]/30"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </motion.div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#c4727a]/15" />
            </div>

            <p className="text-[#f5ede6]/35 text-base font-serif italic font-light">
              Made with every beat of my heart, for you
            </p>
            <p className="text-[#c9a87c]/20 text-sm tracking-widest uppercase font-light">
              Happy Valentine&apos;s Day 2026
            </p>
            <p className="text-[#c4727a]/15 text-xs pt-2 font-serif italic">
              Forever &amp; always yours, Renz
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}

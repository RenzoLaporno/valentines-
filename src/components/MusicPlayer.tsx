"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect, useCallback } from "react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  // Listen for YouTube player ready
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      try {
        const data = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
        if (data.event === "onReady" || data.event === "initialDelivery") {
          setIsReady(true);
        }
      } catch {
        // ignore non-JSON messages
      }
    };
    window.addEventListener("message", handleMessage);
    // Mark ready after a short delay as fallback
    const readyTimer = setTimeout(() => setIsReady(true), 2000);
    return () => {
      window.removeEventListener("message", handleMessage);
      clearTimeout(readyTimer);
    };
  }, []);

  const postCommand = useCallback((func: string, args?: number[]) => {
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func, args: args || [] }),
        "*"
      );
    }
  }, []);

  const togglePlay = () => {
    if (!isReady) return;
    if (isPlaying) {
      postCommand("pauseVideo");
    } else {
      postCommand("playVideo");
    }
    setIsPlaying(!isPlaying);
    setShowTooltip(false);
  };

  return (
    <motion.div
      className="fixed bottom-5 right-5 z-50"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2.5, type: "spring", stiffness: 200 }}
    >
      {/* Hidden YouTube iframe for audio */}
      <iframe
        ref={iframeRef}
        className="absolute w-0 h-0 opacity-0 pointer-events-none"
        src="https://www.youtube.com/embed/qL3NKbMScco?enablejsapi=1&autoplay=0&loop=1&playlist=qL3NKbMScco&origin=*"
        allow="autoplay"
        title="Our song"
      />

      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            className="absolute bottom-full right-0 mb-3 glass-card px-4 py-2 text-[#f5ede6]/60 text-sm whitespace-nowrap"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
          >
            <span className="flex items-center gap-2 tracking-wide font-serif italic">
              Play our song
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#c4727a]/50">
                <path d="M9 18V5l12-2v13" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="16" r="3" />
              </svg>
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className={`w-11 h-11 rounded-full flex items-center justify-center transition-all ${
          isPlaying
            ? "bg-gradient-to-r from-[#c4727a] to-[#8b3a4a] shadow-lg shadow-[#c4727a]/30"
            : "glass-card"
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={togglePlay}
      >
        <motion.div
          className={isPlaying ? "text-white" : "text-[#c9a87c]/60"}
          animate={isPlaying ? { scale: [1, 1.15, 1] } : {}}
          transition={{ duration: 0.8, repeat: isPlaying ? Infinity : 0 }}
        >
          {isPlaying ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>
          )}
        </motion.div>
      </motion.button>
    </motion.div>
  );
}

"use client";

import { useMemo } from "react";

export default function Stars() {
  const stars = useMemo(() => {
    const newStars = [];
    for (let i = 0; i < 50; i++) {
      const seed = i * 13.7;
      newStars.push({
        id: i,
        x: (seed * 7.3) % 100,
        y: (seed * 11.1) % 100,
        size: i % 5 === 0 ? 2 : i % 3 === 0 ? 1.5 : 1,
        animationDelay: (i * 0.3) % 5,
        color:
          i % 4 === 0
            ? "bg-[#c9a87c]/30"
            : i % 3 === 0
            ? "bg-[#e8b4b8]/20"
            : "bg-white/15",
      });
    }
    return newStars;
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute rounded-full ${star.color} animate-twinkle`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.animationDelay}s`,
          }}
        />
      ))}
    </div>
  );
}

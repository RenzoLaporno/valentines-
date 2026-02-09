"use client";

import { useMemo } from "react";

export default function FloatingHearts() {
  const particles = useMemo(() => {
    return [...Array(18)].map((_, i) => {
      const isPetal = i % 3 !== 0;
      return {
        id: i,
        x: (i * 5.5) % 100,
        size: isPetal ? 12 + (i % 4) * 5 : 10 + (i % 5) * 3,
        duration: isPetal ? 18 + (i % 7) * 4 : 24 + (i % 6) * 5,
        delay: i * 1.6,
        opacity: isPetal ? 0.08 + (i % 3) * 0.04 : 0.05 + (i % 4) * 0.03,
        isPetal,
        color: isPetal
          ? ["#c4727a", "#e8b4b8", "#d4898f", "#b85c66"][i % 4]
          : ["#c9a87c", "#c4727a", "#e8b4b8"][i % 3],
        swayDuration: 5 + (i % 4) * 2,
      };
    });
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className={p.isPetal ? "absolute animate-petal" : "absolute animate-rise"}
          style={{
            left: `${p.x}%`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        >
          <div
            className="animate-sway"
            style={{ animationDuration: `${p.swayDuration}s` }}
          >
            {p.isPetal ? (
              /* Rose petal shape */
              <svg
                width={p.size}
                height={p.size}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="12" cy="12" rx="8" ry="11"
                  fill={p.color}
                  transform="rotate(15 12 12)"
                  opacity="0.7"
                />
                <ellipse
                  cx="12" cy="12" rx="6" ry="9"
                  fill={p.color}
                  transform="rotate(-10 12 12)"
                  opacity="0.5"
                />
              </svg>
            ) : (
              /* Heart shape */
              <svg
                width={p.size}
                height={p.size}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  fill={p.color}
                />
              </svg>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

import type { ReactNode } from "react";

type Meteor = {
  top: number;
  left: number;
  delay: number;
  duration: number;
  length: number;
  opacity: number;
};

const meteors: Meteor[] = [
  { top: 8, left: 92, delay: 0.2, duration: 7.4, length: 230, opacity: 0.34 },
  { top: 14, left: 84, delay: 1.2, duration: 8.2, length: 260, opacity: 0.26 },
  { top: 20, left: 96, delay: 2.1, duration: 6.8, length: 210, opacity: 0.32 },
  { top: 26, left: 88, delay: 3.4, duration: 8.5, length: 240, opacity: 0.28 },
  { top: 34, left: 94, delay: 0.9, duration: 7.1, length: 270, opacity: 0.3 },
  { top: 40, left: 82, delay: 4.1, duration: 9.1, length: 220, opacity: 0.24 },
  { top: 48, left: 97, delay: 5.0, duration: 7.9, length: 250, opacity: 0.36 },
  { top: 54, left: 86, delay: 2.8, duration: 8.8, length: 230, opacity: 0.28 },
  { top: 62, left: 92, delay: 6.2, duration: 8.1, length: 260, opacity: 0.24 },
  { top: 70, left: 95, delay: 1.8, duration: 7.6, length: 220, opacity: 0.31 },
  { top: 78, left: 84, delay: 4.7, duration: 9.3, length: 240, opacity: 0.23 },
  { top: 86, left: 91, delay: 3.1, duration: 8.6, length: 260, opacity: 0.29 }
];

export default function BackgroundMeteors({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={className}
      style={{
        position: "relative",
        overflow: "hidden",
        isolation: "isolate"
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(239,246,255,0.95), rgba(255,255,255,0.92))"
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(37,99,235,0.11) 1px, transparent 0)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(circle at 50% 5%, rgba(0,0,0,1), rgba(0,0,0,0) 75%)"
          }}
        />
        {meteors.map((meteor, idx) => (
          <span
            key={idx}
            style={{
              position: "absolute",
              top: `${meteor.top}%`,
              left: `${meteor.left}%`,
              width: `${meteor.length}px`,
              height: 1.6,
              borderRadius: 999,
              opacity: meteor.opacity,
              background:
                "linear-gradient(90deg, rgba(37,99,235,0), rgba(59,130,246,0.9), rgba(255,255,255,0))",
              boxShadow: "0 0 14px rgba(59,130,246,0.22)",
              transform: "rotate(-28deg)",
              animation: `meteor-fall ${meteor.duration}s linear ${meteor.delay}s infinite`
            }}
          />
        ))}
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>

      <style>{`
        @keyframes meteor-fall {
          0% { transform: translate3d(0, 0, 0) rotate(-28deg); opacity: 0; }
          8% { opacity: 0.95; }
          100% { transform: translate3d(-950px, 520px, 0) rotate(-28deg); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          span[style*="meteor-fall"] { animation: none !important; opacity: 0.18 !important; }
        }
      `}</style>
    </div>
  );
}

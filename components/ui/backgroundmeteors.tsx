import type { ReactNode } from "react";

type Trail = {
  top: number;
  left: number;
  delay: number;
  duration: number;
  length: number;
  opacity: number;
};

const trails: Trail[] = [
  { top: 10, left: 92, delay: 0.4, duration: 9.2, length: 260, opacity: 0.26 },
  { top: 18, left: 84, delay: 1.4, duration: 8.6, length: 230, opacity: 0.22 },
  { top: 24, left: 97, delay: 2.2, duration: 9.8, length: 280, opacity: 0.3 },
  { top: 34, left: 88, delay: 3.1, duration: 8.9, length: 240, opacity: 0.22 },
  { top: 42, left: 95, delay: 4.3, duration: 10.1, length: 300, opacity: 0.24 },
  { top: 52, left: 82, delay: 1.8, duration: 9.4, length: 260, opacity: 0.18 },
  { top: 60, left: 96, delay: 5.2, duration: 8.8, length: 250, opacity: 0.26 },
  { top: 70, left: 90, delay: 2.7, duration: 9.6, length: 270, opacity: 0.2 }
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
          zIndex: 0,
          pointerEvents: "none"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 18% 8%, rgba(99,214,255,0.12), transparent 28%), radial-gradient(circle at 88% 18%, rgba(35,211,176,0.08), transparent 22%)"
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(99,214,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(99,214,255,0.05) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
            maskImage:
              "radial-gradient(circle at 50% 20%, rgba(0,0,0,1), rgba(0,0,0,0.18) 80%)"
          }}
        />

        {trails.map((trail, index) => (
          <span
            key={index}
            className="meteorTrail"
            style={{
              position: "absolute",
              top: `${trail.top}%`,
              left: `${trail.left}%`,
              width: `${trail.length}px`,
              height: 1.5,
              borderRadius: 999,
              opacity: trail.opacity,
              background:
                "linear-gradient(90deg, rgba(99,214,255,0), rgba(99,214,255,0.9), rgba(255,255,255,0))",
              boxShadow: "0 0 20px rgba(99,214,255,0.22)",
              transform: "rotate(-28deg)",
              animation: `meteorSweep ${trail.duration}s linear ${trail.delay}s infinite`
            }}
          />
        ))}
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>

      <style>{`
        @keyframes meteorSweep {
          0% {
            transform: translate3d(0, 0, 0) rotate(-28deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translate3d(-980px, 560px, 0) rotate(-28deg);
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .meteorTrail {
            animation: none !important;
            opacity: 0.12 !important;
          }
        }
      `}</style>
    </div>
  );
}

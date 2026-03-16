/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#2563EB",
          dark: "#1E3A8A",
          light: "#60A5FA",
          slate: "#F8FAFC",
          mist: "#F1F5F9"
        }
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 20px 60px rgba(37, 99, 235, 0.20)",
        glass: "0 18px 50px rgba(15, 23, 42, 0.08)"
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(14px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(14px) rotate(-360deg)" }
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(37,99,235,0.32)" },
          "70%": { boxShadow: "0 0 0 14px rgba(37,99,235,0)" }
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" }
        }
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        orbit: "orbit 10s linear infinite",
        pulseGlow: "pulseGlow 2.8s ease-out infinite",
        gradientShift: "gradientShift 9s ease infinite"
      }
    }
  },
  plugins: []
};

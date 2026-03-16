import { useEffect, useState } from "react";

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = totalHeight > 0 ? (scrollTop / totalHeight) * 100 : 0;

      setProgress(nextProgress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-1 bg-transparent">
      <span
        className="block h-full bg-[length:200%_200%] bg-[linear-gradient(90deg,#2563EB,#60A5FA,#6366F1)] shadow-[0_0_18px_rgba(96,165,250,0.7)] transition-[width] duration-150 ease-out animate-gradientShift"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default ScrollProgress;

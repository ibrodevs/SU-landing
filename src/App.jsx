import { useEffect } from "react";
import Home from "./pages/Home";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("su-theme", "dark");
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-brand-slate text-slate-900 transition-colors duration-500 dark:bg-slate-950 dark:text-slate-100">
      <ScrollProgress />
      <div className="grid-background pointer-events-none fixed inset-0 -z-20 opacity-80 dark:opacity-60" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,rgba(96,165,250,0.22),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(37,99,235,0.18),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(30,58,138,0.10),transparent_35%)] dark:bg-[radial-gradient(circle_at_10%_10%,rgba(56,189,248,0.12),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(37,99,235,0.18),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(129,140,248,0.12),transparent_35%)]" />
      <Home />
    </div>
  );
}

export default App;

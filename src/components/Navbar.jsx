import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

function Navbar({ links, theme, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6">
      <div
        className={`container-shell rounded-2xl border transition-all duration-300 ${
          isScrolled
            ? "border-blue-200/80 bg-white/85 shadow-glass backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-900/85"
            : "border-white/50 bg-white/65 backdrop-blur-lg dark:border-slate-700/60 dark:bg-slate-900/70"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-4">
          <a href="#home" className="group inline-flex items-center">
            <img
              src="/Logo_SU.png"
              alt="SU Solutions"
              className="h-20 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          <nav className="hidden items-center gap-6 md:flex lg:gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors duration-300 hover:text-blue-700 dark:text-slate-300 dark:hover:text-blue-300"
              >
                {link.label}
              </a>
            ))}

            <button
              type="button"
              onClick={onToggleTheme}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-blue-200/80 bg-white/80 text-slate-700 transition hover:border-blue-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a href="#contact" className="btn-primary px-5 py-2.5 text-xs sm:text-sm">
              Get Started
            </a>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={onToggleTheme}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-blue-200 bg-white/70 text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-blue-200 bg-white/70 text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
              aria-label="Toggle navigation"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="border-t border-blue-100 px-4 pb-5 pt-3 dark:border-slate-700 md:hidden">
            <nav className="grid gap-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-700 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-blue-300"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="btn-primary mt-2 w-full text-center"
              >
                Get Started
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;

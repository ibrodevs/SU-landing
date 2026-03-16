import { Github, Linkedin, Send } from "lucide-react";
import { socialLinks } from "../data/siteData";

const iconMap = {
  Linkedin,
  Github,
  Send
};

function Footer({ links }) {
  return (
    <footer className="border-t border-blue-100 bg-white/70 dark:border-slate-800 dark:bg-slate-950/75">
      <div className="container-shell py-10 sm:py-12">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <a href="#home" className="inline-flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-sm font-extrabold text-white">
                SU
              </span>
              <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100">SU Solutions</span>
            </a>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
              Modern IT company delivering scalable software, premium interfaces,
              and reliable technology foundations for growth-oriented businesses.
            </p>
            <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
              © {new Date().getFullYear()} SU Solutions. All rights reserved.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200">Navigation</h4>
              <div className="mt-3 grid gap-2">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-blue-700 dark:text-slate-300 dark:hover:text-blue-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200">Social</h4>
              <div className="mt-3 flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = iconMap[social.icon];

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-blue-200 bg-white text-blue-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md dark:border-blue-500/40 dark:bg-slate-900 dark:text-blue-300"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

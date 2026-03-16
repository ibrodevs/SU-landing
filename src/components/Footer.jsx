import { Linkedin, Mail, Send } from "lucide-react";
import { socialLinks } from "../data/siteData";

const iconMap = {
  Linkedin,
  Send,
  Mail
};

const socialMeta = {
  LinkedIn: { label: "LinkedIn",                     sub: "su-solutions-bishkek" },
  Telegram: { label: "Telegram",                    sub: "@saifullakh21" },
  Email:    { label: "susolutions25@gmail.com",       sub: "Email us" },
};

function Footer({ links }) {
  return (
    <footer className="border-t border-blue-100 bg-white/70 dark:border-slate-800 dark:bg-slate-950/75">
      <div className="container-shell py-10 sm:py-12">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <a href="#home" className="inline-block">
              <img src="/Logo_SU.png" alt="SU Solutions" className="h-20 w-auto" />
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
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200">Contact & Social</h4>
              <div className="mt-4 grid gap-3">
                {socialLinks.map((social) => {
                  const Icon = iconMap[social.icon];
                  const meta = socialMeta[social.label];

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noreferrer"
                      className="group inline-flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-blue-700 dark:text-slate-300 dark:hover:text-blue-300"
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-slate-200 bg-white text-slate-500 transition group-hover:border-blue-300 group-hover:text-blue-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400 dark:group-hover:border-blue-500/60 dark:group-hover:text-blue-300">
                        <Icon size={15} />
                      </span>
                      <span className="font-medium">{meta ? meta.label : social.label}</span>
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

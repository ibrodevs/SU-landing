import { Mail, MapPin, Phone } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

function Contact() {
  return (
    <section id="contact" className="section-shell">
      <div className="container-shell grid gap-8 lg:grid-cols-[1fr_1.05fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let's Build Something Great Together"
            description="Tell us about your project goals. We will prepare a strategic plan and technical approach tailored to your business context."
          />

          <Reveal delay={90}>
            <div className="mt-8 space-y-4">
              <div className="glass-card flex items-center gap-3 p-4">
                <span className="grid h-10 w-10 place-items-center rounded-lg border border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-500/30 dark:bg-slate-800 dark:text-blue-300">
                  <Mail size={18} />
                </span>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                  <a href="mailto:susolutions25@gmail.com" className="font-semibold text-slate-800 dark:text-slate-100">
                    susolutions25@gmail.com
                  </a>
                </div>
              </div>

              <div className="glass-card flex items-center gap-3 p-4">
                <span className="grid h-10 w-10 place-items-center rounded-lg border border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-500/30 dark:bg-slate-800 dark:text-blue-300">
                  <Phone size={18} />
                </span>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Phone</p>
                  <a href="tel:+17735507809" className="font-semibold text-slate-800 dark:text-slate-100">
                    +1 (773) 550-7809
                  </a>
                </div>
              </div>

              <div className="glass-card flex items-center gap-3 p-4">
                <span className="grid h-10 w-10 place-items-center rounded-lg border border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-500/30 dark:bg-slate-800 dark:text-blue-300">
                  <MapPin size={18} />
                </span>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Location</p>
                  <p className="font-semibold text-slate-800 dark:text-slate-100">60645 Chicago, IL United States</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <form className="glass-card border-blue-200/80 p-6 dark:border-blue-500/30 sm:p-8">
            <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Start Your Project</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Share your requirements and we will get back with next steps.
            </p>

            <div className="mt-6 grid gap-4">
              <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                Name
                <input
                  type="text"
                  placeholder="Your full name"
                  className="h-12 rounded-xl border border-blue-200 bg-white/80 px-4 text-sm text-slate-800 outline-none ring-blue-500 transition focus:ring-2 dark:border-blue-500/30 dark:bg-slate-900/70 dark:text-slate-100"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                Email
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="h-12 rounded-xl border border-blue-200 bg-white/80 px-4 text-sm text-slate-800 outline-none ring-blue-500 transition focus:ring-2 dark:border-blue-500/30 dark:bg-slate-900/70 dark:text-slate-100"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                Message
                <textarea
                  placeholder="Tell us about your product idea, goals, and timeline"
                  rows={5}
                  className="rounded-xl border border-blue-200 bg-white/80 px-4 py-3 text-sm text-slate-800 outline-none ring-blue-500 transition focus:ring-2 dark:border-blue-500/30 dark:bg-slate-900/70 dark:text-slate-100"
                />
              </label>
            </div>

            <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
              Send Message
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;

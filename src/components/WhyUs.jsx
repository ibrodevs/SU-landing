import { Cpu, Headset, Layers, Rocket, ShieldCheck, Sparkles } from "lucide-react";
import { whyUs } from "../data/siteData";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const iconMap = {
  Cpu,
  Layers,
  Sparkles,
  ShieldCheck,
  Rocket,
  Headset
};

function WhyUs() {
  return (
    <section id="why-us" className="section-shell">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Value"
          title="Why Choose SU Solutions"
          description="We combine product thinking, technical excellence, and delivery discipline to build software that performs long-term."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item, index) => {
            const Icon = iconMap[item.icon];

            return (
              <Reveal key={item.title} delay={index * 70}>
                <article className="glass-card group h-full border-blue-100/80 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-[0_16px_40px_rgba(37,99,235,0.16)] dark:border-blue-500/20 dark:hover:border-blue-500/60">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 text-blue-700 transition-all duration-300 group-hover:scale-105 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white dark:border-blue-500/30 dark:bg-slate-800 dark:text-blue-300">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-xl">
                    {item.title}
                  </h3>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;

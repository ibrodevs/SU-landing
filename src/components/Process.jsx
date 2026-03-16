import {
  Search,
  Map,
  Pen,
  Code2,
  ShieldCheck,
  Rocket,
} from "lucide-react";
import { processSteps } from "../data/siteData";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { motion } from "framer-motion";
import { useState } from "react";

const iconMap = { Search, Map, Pen, Code2, ShieldCheck, Rocket };

// Статичные конфиги цветов — без динамических классов Tailwind
const colorConfig = {
  blue:    { icon: "bg-blue-600",    ghost: "text-blue-100 dark:text-blue-950",    bar: "from-blue-600 to-indigo-600",   glow: "hover:shadow-[0_0_0_1px_rgba(37,99,235,0.5),0_16px_36px_rgba(37,99,235,0.14)]",    tag: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300" },
  indigo:  { icon: "bg-indigo-600",  ghost: "text-indigo-100 dark:text-indigo-950", bar: "from-indigo-600 to-violet-600",  glow: "hover:shadow-[0_0_0_1px_rgba(99,102,241,0.5),0_16px_36px_rgba(99,102,241,0.14)]",   tag: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300" },
  violet:  { icon: "bg-violet-600",  ghost: "text-violet-100 dark:text-violet-950", bar: "from-violet-600 to-purple-500",  glow: "hover:shadow-[0_0_0_1px_rgba(124,58,237,0.5),0_16px_36px_rgba(124,58,237,0.14)]",  tag: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300" },
  emerald: { icon: "bg-emerald-600", ghost: "text-emerald-100 dark:text-emerald-950",bar: "from-emerald-600 to-teal-500",  glow: "hover:shadow-[0_0_0_1px_rgba(5,150,105,0.5),0_16px_36px_rgba(5,150,105,0.14)]",   tag: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300" },
  amber:   { icon: "bg-amber-500",   ghost: "text-amber-100 dark:text-amber-950",   bar: "from-amber-500 to-orange-500",   glow: "hover:shadow-[0_0_0_1px_rgba(245,158,11,0.5),0_16px_36px_rgba(245,158,11,0.14)]",  tag: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300" },
  rose:    { icon: "bg-rose-600",    ghost: "text-rose-100 dark:text-rose-950",     bar: "from-rose-600 to-pink-500",      glow: "hover:shadow-[0_0_0_1px_rgba(225,29,72,0.5),0_16px_36px_rgba(225,29,72,0.14)]",   tag: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300" },
};

function ProcessCard({ step, index, isLast }) {
  const [hovered, setHovered] = useState(false);
  const Icon = iconMap[step.icon];
  const cfg = colorConfig[step.color];
  const num = (index + 1).toString().padStart(2, "0");

  return (
    <div className="relative flex items-stretch gap-0">
      <motion.article
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ y: -4, transition: { type: "spring", stiffness: 280, damping: 22 } }}
        className={`relative flex flex-1 flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-sm transition-shadow duration-300 dark:border-slate-700/60 dark:bg-slate-900 ${cfg.glow}`}
      >
        {/* Цветная полоска сверху */}
        <div className={`h-1 w-full bg-gradient-to-r ${cfg.bar}`} />

        <div className="relative flex flex-1 flex-col gap-4 p-6">
          {/* Большая призрачная цифра — только текстура */}
          <span
            className={`pointer-events-none absolute right-4 top-3 select-none text-7xl font-black leading-none ${cfg.ghost} opacity-60`}
          >
            {num}
          </span>

          {/* Иконка */}
          <div className={`relative z-10 grid h-11 w-11 place-items-center rounded-xl ${cfg.icon} text-white shadow-md`}>
            <Icon size={20} strokeWidth={1.8} />
          </div>

          {/* Текст */}
          <div className="relative z-10 flex flex-1 flex-col gap-2">
            <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100">
              {step.title}
            </h3>
            <p className="flex-1 text-sm leading-relaxed text-slate-400 dark:text-slate-500">
              {step.description}
            </p>
          </div>

          {/* Теги технологий — только на карточке Development, при hover */}
          {step.tags.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: hovered ? 1 : 0, height: hovered ? "auto" : 0 }}
              transition={{ duration: 0.22 }}
              className="relative z-10 flex flex-wrap gap-1.5 overflow-hidden"
            >
              {step.tags.map((tag) => (
                <span key={tag} className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${cfg.tag}`}>
                  {tag}
                </span>
              ))}
            </motion.div>
          )}
        </div>
      </motion.article>

      {/* Коннектор-стрелка между карточками (кроме последней в строке и последней вообще) */}
      {!isLast && (
        <div className="relative hidden w-6 shrink-0 items-center justify-center lg:flex">
          <div className="h-px w-full bg-gradient-to-r from-slate-300 to-slate-200 dark:from-slate-700 dark:to-slate-800" />
          <svg
            className="absolute right-0 -mr-1 text-slate-300 dark:text-slate-700"
            width="6" height="10" viewBox="0 0 6 10" fill="none"
          >
            <path d="M1 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}
    </div>
  );
}

function Process() {
  return (
    <section id="process" className="section-shell bg-brand-mist/60 dark:bg-slate-900/40">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Workflow"
          title="How We Work"
          description="A transparent and structured product lifecycle that reduces risk and keeps every stage aligned with business goals."
        />

        <div className="mt-10 grid gap-x-0 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 70}>
              <ProcessCard
                step={step}
                index={index}
                isLast={(index + 1) % 3 === 0 || index === processSteps.length - 1}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;

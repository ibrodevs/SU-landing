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
  blue:  { icon: "bg-blue-700",   ghost: "text-blue-100 dark:text-blue-950",   bar: "from-blue-700 to-indigo-700",  glow: "hover:shadow-[0_0_0_1px_rgba(29,78,216,0.5),0_16px_36px_rgba(29,78,216,0.14)]",   tag: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300" },
  indigo:{ icon: "bg-indigo-700", ghost: "text-indigo-100 dark:text-indigo-950",bar: "from-indigo-700 to-blue-800",   glow: "hover:shadow-[0_0_0_1px_rgba(67,56,202,0.5),0_16px_36px_rgba(67,56,202,0.14)]",  tag: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300" },
  slate: { icon: "bg-slate-600",  ghost: "text-slate-300 dark:text-slate-900",  bar: "from-slate-600 to-slate-700",   glow: "hover:shadow-[0_0_0_1px_rgba(71,85,105,0.5),0_16px_36px_rgba(71,85,105,0.14)]",  tag: "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300" },
  navy:  { icon: "bg-blue-900",   ghost: "text-blue-200 dark:text-blue-950",   bar: "from-blue-900 to-indigo-900",   glow: "hover:shadow-[0_0_0_1px_rgba(30,58,138,0.5),0_16px_36px_rgba(30,58,138,0.14)]",  tag: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200" },
  zinc:  { icon: "bg-zinc-600",   ghost: "text-zinc-300 dark:text-zinc-900",   bar: "from-zinc-600 to-zinc-700",     glow: "hover:shadow-[0_0_0_1px_rgba(82,82,91,0.5),0_16px_36px_rgba(82,82,91,0.14)]",   tag: "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300" },
  dark:  { icon: "bg-slate-700",  ghost: "text-slate-300 dark:text-slate-900",  bar: "from-slate-700 to-blue-900",    glow: "hover:shadow-[0_0_0_1px_rgba(51,65,85,0.5),0_16px_36px_rgba(30,58,138,0.14)]",  tag: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300" },
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

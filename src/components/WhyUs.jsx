import { Cpu, Headset, Layers, Rocket, ShieldCheck, Sparkles } from "lucide-react";
import { whyUs } from "../data/siteData";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { motion } from "framer-motion";

const iconMap = { Cpu, Layers, Sparkles, ShieldCheck, Rocket, Headset };

// Статичная карта градиентов свечения для hover-границы
const glowMap = {
  "from-blue-600 to-indigo-600":   "hover:shadow-[0_0_0_1px_rgba(99,102,241,0.6),0_16px_40px_rgba(99,102,241,0.18)]",
  "from-violet-600 to-purple-600": "hover:shadow-[0_0_0_1px_rgba(139,92,246,0.6),0_16px_40px_rgba(139,92,246,0.18)]",
  "from-fuchsia-600 to-pink-500":  "hover:shadow-[0_0_0_1px_rgba(217,70,239,0.6),0_16px_40px_rgba(217,70,239,0.18)]",
  "from-emerald-600 to-teal-500":  "hover:shadow-[0_0_0_1px_rgba(16,185,129,0.6),0_16px_40px_rgba(16,185,129,0.18)]",
  "from-orange-500 to-amber-400":  "hover:shadow-[0_0_0_1px_rgba(245,158,11,0.6),0_16px_40px_rgba(245,158,11,0.18)]",
  "from-sky-600 to-cyan-500":      "hover:shadow-[0_0_0_1px_rgba(14,165,233,0.6),0_16px_40px_rgba(14,165,233,0.18)]",
};

function BentoCard({ item }) {
  const Icon = iconMap[item.icon];
  const glow = glowMap[item.gradient] || "";

  return (
    <motion.article
      whileHover={{ y: -4, transition: { type: "spring", stiffness: 280, damping: 22 } }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-sm transition-shadow duration-300 dark:border-slate-700/60 dark:bg-slate-900 ${glow}`}
    >
      {/* Тонкая цветная полоска сверху */}
      <div className={`h-1 w-full bg-gradient-to-r ${item.gradient}`} />

      <div className="flex flex-1 flex-row items-start gap-4 p-6">
        {/* Иконка */}
        <div className={`shrink-0 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${item.gradient} text-white shadow-md`}>
          <Icon size={22} strokeWidth={1.8} />
        </div>

        {/* Текст */}
        <div className="flex flex-col gap-1.5">
          <h3 className="text-base font-bold leading-snug tracking-tight text-slate-900 dark:text-slate-100 sm:text-lg">
            {item.title}
          </h3>
          <p className="text-sm leading-relaxed text-slate-400 dark:text-slate-500">
            {item.description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

function WhyUs() {
  return (
    <section id="why-us" className="section-shell">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Value"
          title="Why Choose SU Solutions"
          description="We combine product thinking, technical excellence, and delivery discipline to build software that performs long-term."
        />

        {/* Равномерная сетка 3×2 */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item, index) => (
            <Reveal key={item.title} delay={index * 60}>
              <BentoCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;

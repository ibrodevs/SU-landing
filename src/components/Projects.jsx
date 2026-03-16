import {
  ArrowUpRight,
  Github,
  GraduationCap,
  TrendingUp,
  Bot,
  Users,
  Briefcase,
  TrendingUp as MetricIcon,
  LayoutGrid,
} from "lucide-react";
import { projects } from "../data/siteData";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { motion } from "framer-motion";
import { useState } from "react";

// Иконки проектов
const projectIcons = { GraduationCap, TrendingUp, Bot, Users };

// Цвета тегов технологий
const techTagColors = {
  React:         "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800/50",
  "Node.js":     "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800/50",
  PostgreSQL:    "bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-900/30 dark:text-violet-300 dark:border-violet-800/50",
  TypeScript:    "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800/50",
  Vite:          "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800/50",
  Supabase:      "bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-900/30 dark:text-teal-300 dark:border-teal-800/50",
  Python:        "bg-indigo-100 text-indigo-700 border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-800/50",
  Django:        "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800/50",
  Docker:        "bg-sky-100 text-sky-700 border-sky-200 dark:bg-sky-900/30 dark:text-sky-300 dark:border-sky-800/50",
  Firebase:      "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-800/50",
  "Tailwind CSS":"bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-300 dark:border-cyan-800/50",
};
const defaultTagColor = "bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700";

// Конфиг цветов категорий
const categoryFilterStyle = {
  All:       { active: "bg-slate-800 border-slate-800 text-white dark:bg-slate-100 dark:border-slate-100 dark:text-slate-900", idle: "border-slate-300 text-slate-600 bg-white dark:border-slate-700 dark:text-slate-300 dark:bg-slate-900" },
  Web:       { active: "bg-blue-600 border-blue-600 text-white",    idle: "border-blue-200 text-blue-700 bg-blue-50 dark:border-blue-800 dark:text-blue-300 dark:bg-blue-900/20" },
  Analytics: { active: "bg-emerald-600 border-emerald-600 text-white", idle: "border-emerald-200 text-emerald-700 bg-emerald-50 dark:border-emerald-800 dark:text-emerald-300 dark:bg-emerald-900/20" },
  AI:        { active: "bg-violet-600 border-violet-600 text-white", idle: "border-violet-200 text-violet-700 bg-violet-50 dark:border-violet-800 dark:text-violet-300 dark:bg-violet-900/20" },
  CRM:       { active: "bg-orange-500 border-orange-500 text-white", idle: "border-orange-200 text-orange-700 bg-orange-50 dark:border-orange-800 dark:text-orange-300 dark:bg-orange-900/20" },
};

function ProjectCard({ project }) {
  const Icon = projectIcons[project.icon] || Briefcase;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:border-slate-700/70 dark:bg-slate-900">
      {/* Декоративная верхняя часть с градиентом и иконкой */}
      <div className={`relative flex h-36 w-full items-end overflow-hidden bg-gradient-to-br ${project.gradient} p-5`}>
        {/* Фоновый паттерн */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 70% 50%, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
        {/* Декоративные круги */}
        <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-white/10" />
        <div className="absolute right-12 -bottom-8 h-20 w-20 rounded-full bg-white/10" />
        {/* Иконка проекта */}
        <div className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl bg-white/20 text-white shadow-lg backdrop-blur-sm">
          <Icon size={26} />
        </div>
        {/* Категория */}
        <span className="relative z-10 ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {project.category}
        </span>
      </div>

      {/* Контент */}
      <div className="flex flex-1 flex-col gap-4 p-6">
        {/* Заголовок */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            {project.name}
          </h3>
          <div className="flex shrink-0 items-center gap-1.5">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub repository"
              className="grid h-8 w-8 place-items-center rounded-lg border border-slate-200 bg-white/80 text-slate-500 transition-colors hover:border-slate-400 hover:text-slate-800 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:text-slate-100"
            >
              <Github size={14} />
            </a>
            <a
              href={project.liveUrl}
              aria-label="Live project"
              className="grid h-8 w-8 place-items-center rounded-lg border border-blue-200 bg-blue-50 text-blue-600 transition-all hover:border-blue-400 hover:bg-blue-100 dark:border-blue-500/40 dark:bg-slate-800 dark:text-blue-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Описание */}
        <p className="flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {project.description}
        </p>

        {/* Метрика */}
        <div className="flex items-center gap-2 rounded-xl border border-emerald-200/80 bg-emerald-50 px-4 py-2.5 dark:border-emerald-800/40 dark:bg-emerald-900/20">
          <MetricIcon size={14} className="shrink-0 text-emerald-600 dark:text-emerald-400" />
          <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-300">
            {project.metric}
          </span>
        </div>

        {/* Роль + теги */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Briefcase size={12} className="shrink-0 text-slate-400" />
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{project.role}</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((item) => (
              <span
                key={item}
                className={`rounded-full border px-2.5 py-1 text-[11px] font-medium ${techTagColors[item] || defaultTagColor}`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-shell bg-brand-mist/60 dark:bg-slate-900/40">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Portfolio"
          title="Our Projects"
          description="Selected product engagements demonstrating scalable architecture, polished interfaces, and measurable business outcomes."
        />

        {/* Фильтры */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => {
            const style = categoryFilterStyle[cat] || categoryFilterStyle.All;
            const isActive = activeFilter === cat;
            const count = cat === "All" ? projects.length : projects.filter((p) => p.category === cat).length;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive ? style.active + " shadow-md" : style.idle
                }`}
              >
                {cat === "All" ? <LayoutGrid size={13} /> : null}
                {cat === "All" ? `All (${count})` : `${cat} (${count})`}
              </button>
            );
          })}
        </div>

        {/* Сетка */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {filtered.map((project, index) => (
            <Reveal key={project.name} delay={index * 70} className="h-full">
              <motion.div
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="h-full"
              >
                <ProjectCard project={project} />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

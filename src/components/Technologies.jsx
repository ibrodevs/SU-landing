import {
  Code2,
  Globe,
  Server,
  Database,
  Cloud,
  Zap,
  Box,
  GitBranch,
  Terminal,
  Braces,
  Layers,
  Palette,
  LayoutGrid,
  ExternalLink,
} from "lucide-react";
import { technologies } from "../data/siteData";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { motion } from "framer-motion";
import { useState } from "react";

// Данные технологий — соответствуют siteData.technologies
const techData = {
  "React": {
    category: "Frontend",
    icon: Globe,
    gradient: "from-blue-600 to-cyan-500",
    level: "Expert",
    description: "Component-driven SPAs and interactive UIs",
    link: "https://react.dev",
    isCore: true,
  },
  "Vite": {
    category: "Tools",
    icon: Zap,
    gradient: "from-violet-600 to-purple-500",
    level: "Expert",
    description: "Lightning-fast frontend build tooling",
    link: "https://vitejs.dev",
    isCore: false,
  },
  "Tailwind CSS": {
    category: "Frontend",
    icon: Palette,
    gradient: "from-cyan-500 to-blue-500",
    level: "Expert",
    description: "Utility-first styling and rapid UI design",
    link: "https://tailwindcss.com",
    isCore: false,
  },
  "JavaScript": {
    category: "Language",
    icon: Code2,
    gradient: "from-yellow-500 to-amber-400",
    level: "Expert",
    description: "Core language for web and server-side logic",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    isCore: true,
  },
  "TypeScript": {
    category: "Language",
    icon: Braces,
    gradient: "from-blue-700 to-blue-500",
    level: "Expert",
    description: "Type-safe JS for scalable, maintainable codebases",
    link: "https://www.typescriptlang.org",
    isCore: false,
  },
  "Node.js": {
    category: "Backend",
    icon: Server,
    gradient: "from-green-600 to-emerald-500",
    level: "Expert",
    description: "Server-side runtime for REST APIs and services",
    link: "https://nodejs.org",
    isCore: true,
  },
  "Python": {
    category: "Backend",
    icon: Terminal,
    gradient: "from-blue-600 to-indigo-500",
    level: "Advanced",
    description: "Automation, data pipelines, and backend services",
    link: "https://python.org",
    isCore: false,
  },
  "Django": {
    category: "Backend",
    icon: Layers,
    gradient: "from-green-800 to-green-600",
    level: "Advanced",
    description: "Full-stack Python framework with built-in admin",
    link: "https://djangoproject.com",
    isCore: false,
  },
  "PostgreSQL": {
    category: "Database",
    icon: Database,
    gradient: "from-blue-800 to-blue-600",
    level: "Advanced",
    description: "Relational DB for complex queries and data integrity",
    link: "https://postgresql.org",
    isCore: false,
  },
  "Supabase": {
    category: "BaaS",
    icon: Database,
    gradient: "from-emerald-600 to-teal-500",
    level: "Advanced",
    description: "Open-source Firebase alternative built on Postgres",
    link: "https://supabase.com",
    isCore: false,
  },
  "Firebase": {
    category: "BaaS",
    icon: Cloud,
    gradient: "from-orange-500 to-yellow-500",
    level: "Advanced",
    description: "Real-time BaaS for auth, database, and hosting",
    link: "https://firebase.google.com",
    isCore: false,
  },
  "Git": {
    category: "Tools",
    icon: GitBranch,
    gradient: "from-orange-600 to-red-500",
    level: "Expert",
    description: "Version control and collaborative development",
    link: "https://git-scm.com",
    isCore: true,
  },
  "Docker": {
    category: "DevOps",
    icon: Box,
    gradient: "from-blue-500 to-sky-500",
    level: "Advanced",
    description: "Containerization and consistent environment deployment",
    link: "https://docker.com",
    isCore: false,
  },
  "Figma": {
    category: "Design",
    icon: Palette,
    gradient: "from-purple-600 to-pink-500",
    level: "Advanced",
    description: "UI/UX design, prototyping, and design systems",
    link: "https://figma.com",
    isCore: false,
  },
};

// Конфигурация отображения категорий — статичные классы для Tailwind
const categoryConfig = {
  Frontend: {
    icon: Globe,
    label: "Frontend",
    topBar: "from-blue-600 to-cyan-500",
    border: "border-blue-200/60 dark:border-blue-800/40",
    tag: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    catText: "text-blue-600 dark:text-blue-400",
    filterActive: "bg-blue-600 border-blue-600 text-white",
    filterIdle: "border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/20",
  },
  Language: {
    icon: Braces,
    label: "Language",
    topBar: "from-amber-500 to-yellow-400",
    border: "border-amber-200/60 dark:border-amber-800/40",
    tag: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
    catText: "text-amber-600 dark:text-amber-400",
    filterActive: "bg-amber-500 border-amber-500 text-white",
    filterIdle: "border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-900/20",
  },
  Backend: {
    icon: Server,
    label: "Backend",
    topBar: "from-green-600 to-emerald-500",
    border: "border-green-200/60 dark:border-green-800/40",
    tag: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
    catText: "text-green-600 dark:text-green-400",
    filterActive: "bg-green-600 border-green-600 text-white",
    filterIdle: "border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 bg-green-50 dark:bg-green-900/20",
  },
  Database: {
    icon: Database,
    label: "Database",
    topBar: "from-violet-600 to-purple-500",
    border: "border-violet-200/60 dark:border-violet-800/40",
    tag: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300",
    catText: "text-violet-600 dark:text-violet-400",
    filterActive: "bg-violet-600 border-violet-600 text-white",
    filterIdle: "border-violet-200 dark:border-violet-800 text-violet-700 dark:text-violet-300 bg-violet-50 dark:bg-violet-900/20",
  },
  BaaS: {
    icon: Cloud,
    label: "BaaS",
    topBar: "from-cyan-500 to-teal-500",
    border: "border-cyan-200/60 dark:border-cyan-800/40",
    tag: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300",
    catText: "text-cyan-600 dark:text-cyan-400",
    filterActive: "bg-cyan-600 border-cyan-600 text-white",
    filterIdle: "border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-900/20",
  },
  DevOps: {
    icon: Box,
    label: "DevOps",
    topBar: "from-sky-500 to-blue-500",
    border: "border-sky-200/60 dark:border-sky-800/40",
    tag: "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300",
    catText: "text-sky-600 dark:text-sky-400",
    filterActive: "bg-sky-600 border-sky-600 text-white",
    filterIdle: "border-sky-200 dark:border-sky-800 text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-900/20",
  },
  Tools: {
    icon: Terminal,
    label: "Tools",
    topBar: "from-orange-500 to-red-500",
    border: "border-orange-200/60 dark:border-orange-800/40",
    tag: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
    catText: "text-orange-600 dark:text-orange-400",
    filterActive: "bg-orange-500 border-orange-500 text-white",
    filterIdle: "border-orange-200 dark:border-orange-800 text-orange-700 dark:text-orange-300 bg-orange-50 dark:bg-orange-900/20",
  },
  Design: {
    icon: Palette,
    label: "Design",
    topBar: "from-fuchsia-600 to-pink-500",
    border: "border-fuchsia-200/60 dark:border-fuchsia-800/40",
    tag: "bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/30 dark:text-fuchsia-300",
    catText: "text-fuchsia-600 dark:text-fuchsia-400",
    filterActive: "bg-fuchsia-600 border-fuchsia-600 text-white",
    filterIdle: "border-fuchsia-200 dark:border-fuchsia-800 text-fuchsia-700 dark:text-fuchsia-300 bg-fuchsia-50 dark:bg-fuchsia-900/20",
  },
};

const levelStyle = {
  Expert: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
  Advanced: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  Proficient: "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300",
};

function TechCard({ tech, isFiltered }) {
  const info = techData[tech] || {
    category: "Tools",
    icon: Code2,
    gradient: "from-slate-600 to-slate-800",
    level: "Proficient",
    description: "",
    link: "#",
    isCore: false,
  };
  const Icon = info.icon;
  const cat = categoryConfig[info.category] || categoryConfig.Tools;
  const CatIcon = cat.icon;

  return (
    <motion.a
      href={info.link}
      target="_blank"
      rel="noopener noreferrer"
      animate={{ opacity: isFiltered ? 0.2 : 1, scale: isFiltered ? 0.97 : 1 }}
      transition={{ duration: 0.25 }}
      whileHover={!isFiltered ? { y: -4, transition: { type: "spring", stiffness: 300 } } : {}}
      className={`group relative flex h-full flex-col overflow-hidden rounded-xl border bg-white shadow-sm transition-shadow duration-300 dark:bg-slate-900 ${cat.border} ${isFiltered ? "pointer-events-none" : "hover:shadow-md"} ${info.isCore ? "ring-1 ring-blue-400/40 ring-offset-1 dark:ring-blue-500/30" : ""}`}
    >
      {/* Цветная полоска сверху — всегда видна, цвет = категория */}
      <div className={`h-1 w-full flex-shrink-0 bg-gradient-to-r ${cat.topBar}`} />

      <div className="flex flex-1 flex-col gap-3 p-5">
        {/* Иконка + название + уровень */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-3">
            <div className={`grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg bg-gradient-to-br ${info.gradient} text-white shadow-md`}>
              <Icon size={18} />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-bold leading-tight text-slate-900 dark:text-white">{tech}</h3>
                {info.isCore && (
                  <span className="rounded-full bg-blue-600 px-1.5 py-0.5 text-[9px] font-bold text-white">
                    CORE
                  </span>
                )}
              </div>
              <div className={`mt-0.5 flex items-center gap-1 ${cat.catText}`}>
                <CatIcon size={10} />
                <span className="text-xs font-medium">{info.category}</span>
              </div>
            </div>
          </div>
          <span className={`flex-shrink-0 rounded-md px-2 py-1 text-[10px] font-semibold ${levelStyle[info.level] || levelStyle.Proficient}`}>
            {info.level}
          </span>
        </div>

        {/* Описание — flex-1 занимает оставшееся место → одинаковая высота карточек */}
        <p className="flex-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
          {info.description}
        </p>

        {/* Теги + ссылка */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5">
            <span className={`rounded-full px-2 py-0.5 text-[10px] ${cat.tag}`}>
              #{info.category.toLowerCase()}
            </span>
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-500 dark:bg-slate-800 dark:text-slate-400">
              #production
            </span>
          </div>
          <ExternalLink
            size={12}
            className="flex-shrink-0 text-slate-300 transition-colors group-hover:text-slate-500 dark:text-slate-600 dark:group-hover:text-slate-400"
          />
        </div>
      </div>
    </motion.a>
  );
}

function Technologies() {
  const [activeFilter, setActiveFilter] = useState("All");

  // Порядок отображения категорий в фильтре
  const categoryOrder = ["All", "Frontend", "Language", "Backend", "Database", "BaaS", "DevOps", "Tools", "Design"];
  const presentCategories = categoryOrder.filter(
    (cat) => cat === "All" || technologies.some((t) => techData[t]?.category === cat)
  );

  return (
    <section id="technologies" className="section-shell">
      <div className="container-shell">
        <SectionHeading
          eyebrow={
            <span className="inline-flex items-center gap-2">
              <Zap size={16} className="text-blue-600 dark:text-blue-400" />
              Technology Stack
            </span>
          }
          title="Modern Tools We Master"
          description="A curated set of production-proven technologies we use to build reliable, scalable, and maintainable products."
        />

        {/* Фильтры по категориям */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {presentCategories.map((cat) => {
            const conf = categoryConfig[cat];
            const CatIcon = conf ? conf.icon : LayoutGrid;
            const isActive = activeFilter === cat;
            const count = cat === "All" ? technologies.length : technologies.filter((t) => techData[t]?.category === cat).length;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? conf
                      ? conf.filterActive
                      : "bg-blue-600 border-blue-600 text-white shadow-md"
                    : conf
                    ? conf.filterIdle
                    : "border-slate-200 bg-white text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                }`}
              >
                <CatIcon size={13} />
                {cat === "All" ? `All (${count})` : `${cat} (${count})`}
              </button>
            );
          })}
        </div>

        {/* Сетка карточек */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {technologies.map((tech, i) => {
            const cat = techData[tech]?.category || "Tools";
            const isFiltered = activeFilter !== "All" && cat !== activeFilter;
            return (
              <Reveal key={tech} delay={i * 25} className="h-full">
                <TechCard tech={tech} isFiltered={isFiltered} />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Technologies;

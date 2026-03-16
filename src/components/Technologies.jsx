import {
  Code2,
  Globe,
  Server,
  Database,
  Cloud,
  Shield,
  Cpu,
  Zap,
  Box,
  GitBranch,
  Terminal,
  Smartphone,
  Braces,
  Layers,
  Workflow,
  Lock,
  Palette
} from "lucide-react";
import { technologies } from "../data/siteData";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { motion } from "framer-motion";
import { useState } from "react";

// Категории технологий с уникальными стилями
const techCategories = {
  "React": { category: "Frontend", icon: Globe, gradient: "from-blue-600 to-cyan-600", level: 95 },
  "Next.js": { category: "Frontend", icon: Globe, gradient: "from-slate-700 to-slate-900", level: 90 },
  "TypeScript": { category: "Language", icon: Braces, gradient: "from-blue-700 to-blue-500", level: 92 },
  "JavaScript": { category: "Language", icon: Code2, gradient: "from-yellow-500 to-amber-500", level: 98 },
  "Node.js": { category: "Backend", icon: Server, gradient: "from-green-600 to-emerald-600", level: 94 },
  "Python": { category: "Backend", icon: Terminal, gradient: "from-blue-600 to-indigo-600", level: 88 },
  "Django": { category: "Backend", icon: Layers, gradient: "from-green-800 to-green-600", level: 85 },
  "PostgreSQL": { category: "Database", icon: Database, gradient: "from-blue-800 to-blue-600", level: 90 },
  "MongoDB": { category: "Database", icon: Database, gradient: "from-green-700 to-emerald-600", level: 87 },
  "Redis": { category: "Database", icon: Database, gradient: "from-red-600 to-red-500", level: 82 },
  "GraphQL": { category: "API", icon: GitBranch, gradient: "from-pink-600 to-rose-600", level: 86 },
  "REST API": { category: "API", icon: Workflow, gradient: "from-purple-600 to-indigo-600", level: 95 },
  "Docker": { category: "DevOps", icon: Box, gradient: "from-blue-500 to-sky-500", level: 89 },
  "Kubernetes": { category: "DevOps", icon: Cpu, gradient: "from-blue-700 to-indigo-700", level: 83 },
  "AWS": { category: "Cloud", icon: Cloud, gradient: "from-orange-500 to-yellow-500", level: 88 },
  "Azure": { category: "Cloud", icon: Cloud, gradient: "from-blue-500 to-indigo-500", level: 85 },
  "Git": { category: "Tools", icon: GitBranch, gradient: "from-orange-600 to-red-600", level: 96 },
  "Figma": { category: "Design", icon: Palette, gradient: "from-purple-600 to-pink-600", level: 92 },
  "Tailwind": { category: "Frontend", icon: Palette, gradient: "from-cyan-500 to-blue-500", level: 94 },
  "Prisma": { category: "Database", icon: Database, gradient: "from-teal-600 to-emerald-600", level: 84 }
};

// Иконки для разных категорий
const categoryIcons = {
  Frontend: Globe,
  Backend: Server,
  Database: Database,
  Language: Braces,
  DevOps: Box,
  Cloud: Cloud,
  API: GitBranch,
  Tools: Terminal,
  Design: Palette,
  Mobile: Smartphone,
  Security: Shield
};

function TechCard({ tech, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const techInfo = techCategories[tech] || {
    category: "Other",
    icon: Code2,
    gradient: "from-slate-600 to-slate-800",
    level: 75
  };
  
  const Icon = techInfo.icon;
  const CategoryIcon = categoryIcons[techInfo.category] || Code2;
  
  // Определяем цвет категории для фона
  const categoryColors = {
    Frontend: "blue",
    Backend: "green",
    Database: "purple",
    Language: "yellow",
    DevOps: "orange",
    Cloud: "sky",
    API: "pink",
    Tools: "slate",
    Design: "fuchsia",
    Mobile: "indigo",
    Security: "red",
    Other: "gray"
  };
  
  const color = categoryColors[techInfo.category] || "blue";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03 }}
      whileHover={{ 
        y: -5,
        scale: 1.02,
        transition: { type: "spring", stiffness: 300 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Основная карточка */}
      <div className={`relative overflow-hidden rounded-xl bg-white dark:bg-slate-900 border-2 border-${color}-200/50 dark:border-${color}-800/30 hover:border-${color}-400/50 dark:hover:border-${color}-600/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-${color}-500/10`}>
        
        {/* Градиентный фон при наведении */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${techInfo.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
        />
        
        {/* Анимированная линия сверху */}
        <motion.div
          className={`absolute top-0 left-0 h-1 bg-gradient-to-r ${techInfo.gradient}`}
          initial={{ width: "0%" }}
          animate={{ width: isHovered ? "100%" : "0%" }}
          transition={{ duration: 0.3 }}
        />

        {/* Декоративные элементы */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute -right-4 -top-4 w-16 h-16 bg-${color}-500/5 rounded-full blur-2xl group-hover:bg-${color}-500/10 transition-all duration-500`} />
          <div className={`absolute -left-4 -bottom-4 w-12 h-12 bg-${color}-500/5 rounded-full blur-xl group-hover:bg-${color}-500/10 transition-all duration-500`} />
        </div>

        {/* Контент */}
        <div className="relative p-5">
          {/* Верхняя часть с иконками */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              {/* Основная иконка технологии */}
              <motion.div
                className={`relative flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${techInfo.gradient} text-white shadow-md`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Icon size={18} />
              </motion.div>

              {/* Название технологии */}
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">
                  {tech}
                </h3>
                <div className="flex items-center gap-1 mt-0.5">
                  <CategoryIcon size={10} className={`text-${color}-600 dark:text-${color}-400`} />
                  <span className={`text-xs font-medium text-${color}-600 dark:text-${color}-400`}>
                    {techInfo.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Индикатор популярности/уровня */}
            <motion.div
              className={`text-sm font-bold bg-${color}-100 dark:bg-${color}-900/30 text-${color}-700 dark:text-${color}-300 px-2 py-1 rounded-md`}
              animate={{
                scale: isHovered ? 1.1 : 1,
              }}
            >
              {techInfo.level}%
            </motion.div>
          </div>

          {/* Прогресс бар */}
          <div className="mt-4 relative">
            <div className={`h-1.5 w-full bg-${color}-100 dark:bg-${color}-900/30 rounded-full overflow-hidden`}>
              <motion.div
                className={`h-full bg-gradient-to-r ${techInfo.gradient} rounded-full`}
                initial={{ width: "0%" }}
                animate={{ width: isHovered ? `${techInfo.level}%` : "0%" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              />
            </div>
          </div>

          {/* Теги (для дополнительной информации) */}
          <div className="mt-3 flex gap-1">
            <span className={`text-[10px] px-2 py-0.5 rounded-full bg-${color}-100 dark:bg-${color}-900/30 text-${color}-700 dark:text-${color}-300`}>
              #{techInfo.category.toLowerCase()}
            </span>
            <span className={`text-[10px] px-2 py-0.5 rounded-full bg-${color}-100 dark:bg-${color}-900/30 text-${color}-700 dark:text-${color}-300`}>
              #production
            </span>
          </div>
        </div>
      </div>

      {/* Микро-анимация при наведении (точки) */}
      {isHovered && (
        <motion.div
          className="absolute -top-1 -right-1 w-2 h-2 rounded-full"
          style={{ backgroundColor: `var(--${color}-500)` }}
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
        />
      )}
    </motion.div>
  );
}

function Technologies() {
  // Группировка технологий по категориям
  const groupedTechs = technologies.reduce((acc, tech) => {
    const category = techCategories[tech]?.category || "Other";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(tech);
    return acc;
  }, {});

  return (
    <section id="technologies" className="relative py-24 overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      
      {/* Фоновые элементы */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Цветные сферы для разных категорий */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-green-400/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-purple-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-56 h-56 bg-yellow-400/5 rounded-full blur-3xl" />
        
        {/* Сетка */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        {/* Плавающие иконки */}
        {Object.keys(techCategories).slice(0, 8).map((tech, i) => {
          const Icon = techCategories[tech].icon;
          return (
            <motion.div
              key={tech}
              className="absolute opacity-5"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [null, -30, 30, -30],
                x: [null, 30, -30, 30],
              }}
              transition={{
                duration: Math.random() * 20 + 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Icon size={40} />
            </motion.div>
          );
        })}
      </div>

      <div className="container-shell relative z-10">
        {/* Заголовок секции */}
        <SectionHeading
          eyebrow={
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2"
            >
              <Zap size={16} className="text-blue-600 dark:text-blue-400" />
              Technology Stack
            </motion.span>
          }
          title={
            <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-100 dark:via-slate-200 dark:to-slate-100 bg-clip-text text-transparent">
              Modern Tools We Master
            </span>
          }
          description="We use proven modern tools to build maintainable, fast, and future-ready products for startups and enterprise teams."
        />

        {/* Статистика технологий */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-wrap justify-center gap-6"
        >
          {Object.keys(groupedTechs).map((category, index) => {
            const CatIcon = categoryIcons[category] || Code2;
            const colors = ["blue", "green", "purple", "orange", "pink", "indigo"];
            const color = colors[index % colors.length];
            
            return (
              <motion.div
                key={category}
                className={`flex items-center gap-2 px-4 py-2 rounded-full bg-${color}-100 dark:bg-${color}-900/30 border border-${color}-200 dark:border-${color}-800`}
                whileHover={{ y: -2 }}
              >
                <CatIcon size={14} className={`text-${color}-600 dark:text-${color}-400`} />
                <span className={`text-sm font-medium text-${color}-700 dark:text-${color}-300`}>
                  {category} ({groupedTechs[category].length})
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Сетка технологий */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {technologies.map((tech, index) => (
            <Reveal key={tech} delay={index * 30}>
              <TechCard tech={tech} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;

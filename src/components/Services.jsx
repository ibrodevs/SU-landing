import {
  Database,
  Globe,
  Lightbulb,
  Palette,
  Smartphone,
  Workflow,
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  Cpu,
  Gauge,
  Layers
} from "lucide-react";
import { services } from "../data/siteData";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { motion } from "framer-motion";
import { useState } from "react";

const iconMap = {
  Globe,
  Smartphone,
  Palette,
  Workflow,
  Database,
  Lightbulb
};

// Уникальные стили для каждого сервиса
const serviceStyles = {
  "Web Development": {
    gradient: "from-blue-600 to-cyan-600",
    bgPattern: "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.1) 0%, transparent 50%)",
    icon: Globe,
    accentColor: "blue",
    glowColor: "rgba(59,130,246,0.3)",
    borderGlow: "hover:border-blue-500/50",
    shadow: "shadow-blue-500/20",
    particles: true,
    tech: ["React", "Next.js", "Node.js"]
  },
  "Mobile Development": {
    gradient: "from-purple-600 to-pink-600",
    bgPattern: "radial-gradient(circle at 80% 80%, rgba(168,85,247,0.1) 0%, transparent 50%)",
    icon: Smartphone,
    accentColor: "purple",
    glowColor: "rgba(168,85,247,0.3)",
    borderGlow: "hover:border-purple-500/50",
    shadow: "shadow-purple-500/20",
    particles: true,
    tech: ["React Native", "Flutter", "Swift"]
  },
  "UI/UX Design": {
    gradient: "from-amber-500 to-orange-500",
    bgPattern: "radial-gradient(circle at 40% 60%, rgba(245,158,11,0.1) 0%, transparent 50%)",
    icon: Palette,
    accentColor: "amber",
    glowColor: "rgba(245,158,11,0.3)",
    borderGlow: "hover:border-amber-500/50",
    shadow: "shadow-amber-500/20",
    particles: false,
    tech: ["Figma", "Adobe XD", "Framer"]
  },
  "Business Automation": {
    gradient: "from-emerald-600 to-teal-600",
    bgPattern: "radial-gradient(circle at 60% 40%, rgba(16,185,129,0.1) 0%, transparent 50%)",
    icon: Workflow,
    accentColor: "emerald",
    glowColor: "rgba(16,185,129,0.3)",
    borderGlow: "hover:border-emerald-500/50",
    shadow: "shadow-emerald-500/20",
    particles: true,
    tech: ["Zapier", "n8n", "Make"]
  },
  "Database Solutions": {
    gradient: "from-indigo-600 to-purple-600",
    bgPattern: "radial-gradient(circle at 30% 70%, rgba(99,102,241,0.1) 0%, transparent 50%)",
    icon: Database,
    accentColor: "indigo",
    glowColor: "rgba(99,102,241,0.3)",
    borderGlow: "hover:border-indigo-500/50",
    shadow: "shadow-indigo-500/20",
    particles: true,
    tech: ["PostgreSQL", "MongoDB", "Redis"]
  },
  "IT Consulting": {
    gradient: "from-rose-600 to-red-600",
    bgPattern: "radial-gradient(circle at 70% 30%, rgba(225,29,72,0.1) 0%, transparent 50%)",
    icon: Lightbulb,
    accentColor: "rose",
    glowColor: "rgba(225,29,72,0.3)",
    borderGlow: "hover:border-rose-500/50",
    shadow: "shadow-rose-500/20",
    particles: false,
    tech: ["Strategy", "Architecture", "Security"]
  }
};

function ServiceCard({ service, index, style }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = iconMap[service.icon];
  const GradientIcon = style.icon;
  
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ 
        y: -8,
        transition: { type: "spring", stiffness: 300 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 p-6 border-2 border-transparent ${style.borderGlow} transition-all duration-300 hover:shadow-xl ${style.shadow}`}
      style={{
        backgroundImage: style.bgPattern,
      }}
    >
      {/* Анимированный градиентный фон при наведении */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${style.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        animate={{
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.5 }}
      />
      
      {/* Декоративные частицы для некоторых сервисов */}
      {style.particles && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 bg-${style.accentColor}-500/30 rounded-full`}
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
              }}
              animate={{
                y: [null, "-30%", "30%", "-30%"],
                x: [null, "30%", "-30%", "30%"],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5
              }}
            />
          ))}
        </div>
      )}

      {/* Орбитальная анимация для некоторых сервисов */}
      {index % 2 === 0 && (
        <motion.div
          className="absolute -right-8 -top-8 w-24 h-24 rounded-full border-2 border-dashed"
          style={{ borderColor: `rgba(var(--${style.accentColor}), 0.1)` }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      )}

      {/* Контент */}
      <div className="relative z-10">
        {/* Иконка с уникальной анимацией */}
        <motion.div
          className="relative inline-block"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Градиентное свечение */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-r ${style.gradient} rounded-xl blur-lg opacity-50`}
            animate={{
              scale: isHovered ? 1.5 : 1,
              opacity: isHovered ? 0.8 : 0.5,
            }}
          />
          
          {/* Иконка */}
          <span className={`relative flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${style.gradient} text-white shadow-lg`}>
            <Icon size={24} />
          </span>
        </motion.div>

        {/* Заголовок с уникальным стилем */}
        <h3 className="mt-5 text-xl font-bold tracking-tight">
          <span className={`bg-gradient-to-r ${style.gradient} bg-clip-text text-transparent`}>
            {service.title}
          </span>
        </h3>

        {/* Описание */}
        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {service.description}
        </p>

        {/* Технологии */}
        <div className="mt-4 flex flex-wrap gap-2">
          {style.tech.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + i * 0.05 }}
              className={`px-2 py-1 text-xs font-medium rounded-full bg-${style.accentColor}-100 dark:bg-${style.accentColor}-900/30 text-${style.accentColor}-700 dark:text-${style.accentColor}-300`}
              whileHover={{ scale: 1.1 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Интерактивный индикатор */}
        <motion.div
          className="absolute bottom-6 right-6"
          animate={{
            x: isHovered ? 0 : -5,
            opacity: isHovered ? 1 : 0,
          }}
        >
          <div className={`flex items-center gap-1 text-${style.accentColor}-600 dark:text-${style.accentColor}-400`}>
            <span className="text-xs font-medium">Learn more</span>
            <ArrowRight size={14} />
          </div>
        </motion.div>

        {/* Номер сервиса */}
        <div className="absolute top-4 right-4 text-4xl font-black opacity-5">
          {(index + 1).toString().padStart(2, '0')}
        </div>
      </div>

      {/* Прогресс-бар анимация при наведении */}
      <motion.div
        className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${style.gradient}`}
        initial={{ width: "0%" }}
        animate={{ width: isHovered ? "100%" : "0%" }}
        transition={{ duration: 0.5 }}
      />
    </motion.article>
  );
}

function Services() {
  return (
    <section id="services" className="relative py-24 overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      
      {/* Фоновые элементы */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Градиентные сферы */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl" />
        
        {/* Сетка */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:32px_32px]" />
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
              Services
            </motion.span>
          }
          title={
            <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-100 dark:via-slate-200 dark:to-slate-100 bg-clip-text text-transparent">
              What We Offer
            </span>
          }
          description="From product design to production deployment, we deliver complete digital solutions tailored to growth-focused businesses."
        />

        {/* Сетка сервисов */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const style = serviceStyles[service.title] || serviceStyles["Web Development"];
            
            return (
              <Reveal key={service.title} delay={index * 100}>
                <ServiceCard service={service} index={index} style={style} />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
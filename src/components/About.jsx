import { CheckCheck, Rocket, Target, Users, Code2, Globe, Zap, Shield, TrendingUp } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const aboutPoints = [
  {
    text: "Innovation-driven development with measurable business outcomes",
    icon: Rocket,
    color: "from-blue-500 to-cyan-500"
  },
  {
    text: "Reliable engineering process with transparent communication",
    icon: Shield,
    color: "from-indigo-500 to-purple-500"
  },
  {
    text: "Modern technology stack optimized for growth and stability",
    icon: TrendingUp,
    color: "from-emerald-500 to-teal-500"
  }
];

const stats = [
  { value: "8", suffix: "+ Years", label: "Digital Excellence", icon: Zap },
  { value: "70", suffix: "+ Teams", label: "Successfully Supported", icon: Users },
  { value: "120", suffix: "+ Projects", label: "Delivered Worldwide", icon: Globe },
  { value: "98", suffix: "%", label: "Client Retention", icon: Target }
];

const technologies = [
  "React/Next.js", "Node.js", "Python", "TypeScript", 
  "AWS/Azure", "Docker/K8s", "GraphQL", "PostgreSQL"
];

// Анимированный счетчик
function AnimatedCounter({ value, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp;
    const startValue = 0;
    const numericValue = parseInt(value);
    
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function для плавности
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numericValue));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(numericValue);
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, value, duration]);

  return (
    <span ref={counterRef} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

function About() {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Параллакс эффект для карточки
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      
      setMousePosition({ x, y });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section id="about" className="relative py-24 overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      
      {/* Анимированный фон */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Градиентные сферы */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulseSlow" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl animate-pulseSlow animation-delay-2000" />
        
        {/* Сетка */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        {/* Плавающие элементы */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -30, 30, -30],
              x: [null, 30, -30, 30],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="container-shell relative z-10">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 items-start">
          
          {/* Левая колонка - Контент */}
          <div ref={containerRef}>
            <SectionHeading
              eyebrow="About Us"
              title={
                <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent dark:from-slate-100 dark:via-slate-200 dark:to-slate-100">
                  We Build Digital Products That Move Businesses Forward
                </span>
              }
              description="SU Solutions is a modern IT company focused on building high-quality digital products for businesses. We specialize in web development, business automation, modern interfaces, and scalable technologies."
            />

            {/* Ключевые пункты с анимацией */}
            <div className="mt-10 space-y-4">
              {aboutPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <Reveal key={point.text} delay={index * 100}>
                    <motion.div
                      className="group relative"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {/* Градиентный фон при наведении */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${point.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                      
                      <div className="relative flex items-start gap-4 p-5 rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300">
                        {/* Иконка с анимацией */}
                        <motion.div
                          className="relative"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <div className={`absolute inset-0 bg-gradient-to-r ${point.color} rounded-lg blur-md opacity-50`} />
                          <div className="relative grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-slate-900 to-slate-800 text-white dark:from-blue-600 dark:to-indigo-600">
                            <Icon size={18} />
                          </div>
                        </motion.div>
                        
                        <p className="flex-1 text-base leading-relaxed text-slate-700 dark:text-slate-200">
                          {point.text}
                        </p>
                        
                        {/* Индикатор */}
                        <motion.div
                          className="absolute right-4 top-1/2 -translate-y-1/2"
                          initial={{ opacity: 0, x: -10 }}
                          whileHover={{ opacity: 1, x: 0 }}
                        >
                          <CheckCheck size={20} className="text-blue-600 dark:text-blue-400" />
                        </motion.div>
                      </div>
                    </motion.div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Правая колонка - Интерактивная карточка */}
          <Reveal delay={200}>
            <motion.div
              className="sticky top-24"
              animate={{
                rotateX: mousePosition.y * 5,
                rotateY: mousePosition.x * -5,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              style={{ perspective: 1000 }}
            >
              <div className="relative">
                {/* Декоративный элемент */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
                
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/90 to-slate-50/90 dark:from-slate-900/90 dark:to-slate-800/90 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 shadow-2xl">
                  
                  {/* Анимированный фон карточки */}
                  <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
                    
                    {/* Орбитальные линии */}
                    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.2" />
                        </linearGradient>
                      </defs>
                      <circle cx="50%" cy="50%" r="120" fill="none" stroke="url(#gradient)" strokeWidth="1" strokeDasharray="8 8">
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          from="0 50% 50%"
                          to="360 50% 50%"
                          dur="30s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    </svg>
                  </div>

                  {/* Контент */}
                  <div className="relative p-8 space-y-8">
                    {/* Заголовок */}
                    <div>
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4"
                      >
                        <Zap size={14} className="animate-pulse" />
                        SU Solutions Snapshot
                      </motion.div>
                      
                      <h3 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
                        Technology + Reliability + Execution
                      </h3>
                      
                      <p className="mt-4 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                        We combine startup velocity with enterprise-grade discipline to
                        help teams launch faster without compromising performance,
                        security, or maintainability.
                      </p>
                    </div>

                    {/* Технологический стек */}
                    <div>
                      <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3">
                        Our Technology Stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, index) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="px-4 py-2 text-xs font-medium bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 shadow-sm hover:border-blue-300 dark:hover:border-blue-600 transition-all cursor-default"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default About;

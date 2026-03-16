import { ArrowRight, CheckCircle2, Sparkles, Zap, Shield } from "lucide-react";
import Reveal from "./Reveal";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const heroNotes = [
  { text: "Future-ready architecture", icon: Zap },
  { text: "Security-first engineering", icon: Shield },
  { text: "Enterprise reliability", icon: Sparkles }
];

// Анимированный счетчик для статистики
function AnimatedCounter({ value, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp;
    const startValue = 0;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * (parseInt(value) - startValue) + startValue));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(parseInt(value));
      }
    };

    window.requestAnimationFrame(step);
  }, [isVisible, value, duration]);

  return (
    <span ref={counterRef} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  // Параллакс эффект для карточки
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!cardRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      
      setMousePosition({ x, y });
    };

    const card = cardRef.current;
    if (card) {
      card.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (card) {
        card.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/30">
      
      {/* Анимированный фон с частицами */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl animate-pulseSlow" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-indigo-400/20 blur-3xl animate-pulseSlow animation-delay-2000" />
        
        {/* Сетка */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Плавающие частицы */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-500/10 animate-float"
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 10 + 10 + 's'
            }}
          />
        ))}
      </div>

      <div className="container-shell relative z-10 pt-32 pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          
          {/* Левая колонка - Контент */}
          <Reveal>
            <div className="space-y-8">
              {/* Бейдж с анимацией */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full border border-blue-200/50 bg-white/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-blue-700 shadow-sm dark:border-blue-500/30 dark:bg-slate-900/80 dark:text-blue-300"
              >
                <Sparkles size={16} className="animate-pulse" />
                Modern IT Partner
              </motion.div>

              {/* Заголовок с градиентом */}
              <h1 className="max-w-2xl text-5xl font-bold leading-tight lg:text-6xl xl:text-7xl">
                <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent dark:from-slate-100 dark:via-slate-200 dark:to-slate-100">
                  Building Modern
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Digital Solutions
                </span>
                <br />
                <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent dark:from-slate-100 dark:via-slate-200 dark:to-slate-100">
                  for the Future
                </span>
              </h1>

              {/* Описание */}
              <p className="max-w-xl text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                SU Solutions helps businesses transform ideas into scalable digital
                products using modern technologies and innovative development approaches.
              </p>

              {/* Кнопки действий */}
              <div className="flex flex-wrap gap-4 pt-4">
                <motion.a
                  href="#contact"
                  className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>

                <motion.a
                  href="#projects"
                  className="group relative overflow-hidden rounded-full border-2 border-blue-600/20 bg-white/80 backdrop-blur-sm px-8 py-4 text-slate-700 font-semibold hover:border-blue-600/40 transition-all dark:border-blue-400/20 dark:bg-slate-900/80 dark:text-slate-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-2">
                    View Projects
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.a>
              </div>

              {/* Ключевые особенности */}
              <div className="flex flex-wrap gap-3 pt-6">
                {heroNotes.map((note, index) => (
                  <motion.span
                    key={note.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="inline-flex items-center gap-2 rounded-lg bg-white/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    <note.icon size={14} className="text-blue-600 dark:text-blue-400" />
                    {note.text}
                  </motion.span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Правая колонка - Интерактивная карточка */}
          <Reveal delay={120}>
            <motion.div
              ref={cardRef}
              className="relative"
              animate={{
                rotateX: mousePosition.y * 10,
                rotateY: mousePosition.x * -10,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              style={{ perspective: 1000 }}
            >
              {/* Декоративные элементы */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
              
              <div className="relative bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-slate-700/50 shadow-2xl overflow-hidden">
                
                {/* Градиентный фон */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/50 dark:to-indigo-950/50" />
                
                {/* Анимированные орбиты */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative w-64 h-64">
                      <div className="absolute inset-0 border-2 border-blue-200/30 dark:border-blue-500/20 rounded-full animate-spinSlow" />
                      <div className="absolute inset-4 border-2 border-indigo-200/30 dark:border-indigo-500/20 rounded-full animate-spinSlow animation-delay-1000" />
                      <div className="absolute inset-8 border-2 border-purple-200/30 dark:border-purple-500/20 rounded-full animate-spinSlow animation-delay-2000" />
                      
                      {/* Орбитальные точки */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full shadow-glowBlue" />
                      </div>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                        <div className="w-3 h-3 bg-indigo-500 rounded-full shadow-glowIndigo" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Контент карточки */}
                <div className="relative p-8 space-y-8">
                  
                  {/* Статистика */}
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { value: "120", suffix: "+", label: "Solutions Delivered" },
                      { value: "98", suffix: "%", label: "Client Satisfaction" },
                      { value: "24", suffix: "/7", label: "Support Flow" }
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        className="text-center p-4 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-white/20 dark:border-slate-700/50"
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                          <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                        </p>
                        <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                          {stat.label}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Основной блок */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white shadow-xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Анимированный фон */}
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-shimmer" />
                    
                    <div className="relative z-10">
                      <p className="text-xs uppercase tracking-[0.2em] font-semibold text-blue-100">
                        Technology Orchestration
                      </p>
                      <h3 className="mt-2 text-2xl font-bold">
                        Scalable Product Engine
                      </h3>
                      <p className="mt-3 text-sm text-blue-100 leading-relaxed">
                        End-to-end product delivery from strategy and design
                        to development, integration, and launch.
                      </p>
                      
                      {/* Статус */}
                      <div className="mt-4 flex items-center gap-3">
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                        </span>
                        <span className="text-xs font-medium text-blue-100">
                          Live development cycle active
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Технологический стек */}
                  <div className="flex flex-wrap justify-center gap-3 pt-2">
                    {["React", "Node.js", "Python", "AWS", "Docker"].map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 1 }}
                        className="px-4 py-2 text-xs font-medium bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-full border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>

      {/* Скролл индикатор */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-slate-400 dark:border-slate-600 flex justify-center">
          <div className="w-1 h-2 bg-slate-400 dark:bg-slate-600 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Technologies", href: "#technologies" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" }
];

export const services = [
  {
    title: "Web Development",
    description: "Fast, scalable web platforms with modern architecture and enterprise-grade maintainability.",
    icon: "Globe"
  },
  {
    title: "Mobile Development",
    description: "Cross-platform mobile products with smooth UX, real-time data, and production-ready performance.",
    icon: "Smartphone"
  },
  {
    title: "UI/UX Design",
    description: "Premium user interfaces that balance conversion goals, clarity, and polished brand experience.",
    icon: "Palette"
  },
  {
    title: "Business Automation",
    description: "Automation flows that reduce repetitive operations and improve process reliability at scale.",
    icon: "Workflow"
  },
  {
    title: "CRM / ERP Systems",
    description: "Integrated internal platforms for sales, operations, and reporting with secure role-based access.",
    icon: "Database"
  },
  {
    title: "Technical Consulting",
    description: "Strategic product and architecture advisory for faster decisions and lower engineering risk.",
    icon: "Lightbulb"
  }
];

export const technologies = [
  "React",
  "Vite",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Python",
  "Django",
  "PostgreSQL",
  "Supabase",
  "Firebase",
  "Git",
  "Docker",
  "Figma"
];

export const projects = [
  {
    name: "Dordoi Info",
    category: "Web",
    description: "Information portal for Dordoi — Central Asia's largest trading hub. Features vendor directories, market news, and real-time navigation for businesses and visitors.",
    metric: "Central Asia's largest market online",
    role: "Full-stack Development",
    icon: "Globe",
    image: "/дордой.png",
    gradient: "from-blue-600 to-blue-800",
    accentColor: "blue",
    tech: ["React", "Node.js", "PostgreSQL"],
    githubUrl: null,
    liveUrl: "https://www.dordoi.info/"
  },
  {
    name: "KSAPCS",
    category: "Web",
    description: "Official institutional website featuring organizational news, regulatory publications, event management, and multi-department content workflows.",
    metric: "Government-grade institutional platform",
    role: "Frontend Development",
    icon: "Building2",
    image: "/kgafis.png",
    gradient: "from-slate-700 to-slate-800",
    accentColor: "slate",
    tech: ["React", "Tailwind CSS"],
    githubUrl: null,
    liveUrl: "https://www.ksapcs.kg/"
  },
  {
    name: "SU Library",
    category: "Web",
    description: "Digital library platform with advanced catalog search, user accounts, and resource management — providing seamless access to academic and scholarly collections.",
    metric: "Full digital library ecosystem",
    role: "Full-stack Development",
    icon: "BookOpen",
    image: "/su-library.png",
    gradient: "from-blue-900 to-indigo-900",
    accentColor: "indigo",
    tech: ["React", "Node.js", "PostgreSQL"],
    githubUrl: null,
    liveUrl: "https://www.su-library.com/"
  },
  {
    name: "Salymbekov",
    category: "Web",
    description: "Modern multi-page institutional website with responsive design, content management, and a polished user experience tailored for an educational brand.",
    metric: "Clean, modern institutional presence",
    role: "UI/UX & Frontend Development",
    icon: "GraduationCap",
    image: "/salymbekovuni.png",
    gradient: "from-zinc-700 to-slate-700",
    accentColor: "zinc",
    tech: ["React", "Vite", "Tailwind CSS"],
    githubUrl: null,
    liveUrl: "https://salymbekov.vercel.app/"
  }
];

export const whyUs = [
  {
    title: "Modern Technologies",
    description: "We build with the 2025 stack — React, TypeScript, Python, and cloud-native infrastructure — so your product stays fast, secure, and easy to evolve.",
    icon: "Cpu",
    gradient: "from-blue-700 to-indigo-700",
    span: "wide"
  },
  {
    title: "Scalable Architecture",
    description: "Systems designed from day one to handle millions of users without painful rewrites later.",
    icon: "Layers",
    gradient: "from-slate-600 to-slate-700",
    span: "normal"
  },
  {
    title: "Clean Design",
    description: "Pixel-perfect interfaces that balance conversion goals, brand identity, and long-term usability.",
    icon: "Sparkles",
    gradient: "from-indigo-700 to-blue-800",
    span: "normal"
  },
  {
    title: "Professional Development",
    description: "Senior engineers on every project. No junior hand-offs, no surprise pivots mid-sprint.",
    icon: "ShieldCheck",
    gradient: "from-blue-800 to-blue-900",
    span: "normal"
  },
  {
    title: "Fast Delivery",
    description: "Iterative sprints and polished CI/CD pipelines let us ship a production-ready MVP in 4–6 weeks.",
    icon: "Rocket",
    gradient: "from-slate-600 to-zinc-700",
    span: "normal"
  },
  {
    title: "Reliable Support",
    description: "Ongoing maintenance, proactive monitoring, and a dedicated point of contact after launch.",
    icon: "Headset",
    gradient: "from-blue-700 to-indigo-800",
    span: "wide"
  }
];

export const processSteps = [
  {
    title: "Research",
    icon: "Search",
    description: "We analyse market context, map user pain points, and benchmark competitors to define clear product opportunities.",
    color: "blue",
    tags: []
  },
  {
    title: "Planning",
    icon: "Map",
    description: "We write a prioritised backlog, choose the right architecture, and lock down a realistic roadmap with defined milestones.",
    color: "indigo",
    tags: []
  },
  {
    title: "Design",
    icon: "Pen",
    description: "We prototype UX flows and build a component-level UI system that reflects brand identity and drives conversions.",
    color: "slate",
    tags: []
  },
  {
    title: "Development",
    icon: "Code2",
    description: "We ship clean, tested code in iterative sprints — with daily builds, code reviews, and continuous integration from day one.",
    color: "navy",
    tags: ["React", "Node.js", "TypeScript", "Docker"]
  },
  {
    title: "Testing",
    icon: "ShieldCheck",
    description: "We run automated and manual QA cycles covering functionality, performance, security, and cross-device compatibility.",
    color: "zinc",
    tags: []
  },
  {
    title: "Launch",
    icon: "Rocket",
    description: "We deploy to production with zero-downtime releases, set up monitoring, and hand over full documentation to your team.",
    color: "dark",
    tags: []
  }
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/su-solutions-bishkek/", icon: "Linkedin" },
  { label: "Telegram", href: "https://t.me/saifullakh21", icon: "Send" },
  { label: "Email", href: "mailto:susolutions25@gmail.com", icon: "Mail" }
];

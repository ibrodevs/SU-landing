import {
  IconAngular,
  IconAws,
  IconBackend,
  IconDjango,
  IconDocker,
  IconFastapi,
  IconGlobe,
  IconMobile,
  IconPostgres,
  IconPython,
  IconReact,
  IconUx
} from "@/components/icons";

export const services = [
  {
    title: "Web Platforms",
    description:
      "Revenue-facing websites and product surfaces built with fast rendering, sharp UX, and clean front-end architecture.",
    icon: IconGlobe,
    meta: "Next.js / React / Design Systems"
  },
  {
    title: "Mobile Products",
    description:
      "Native-feeling iOS and Android experiences backed by reliable APIs, analytics, and disciplined release flows.",
    icon: IconMobile,
    meta: "App UX / Offline / Telemetry"
  },
  {
    title: "Backend Systems",
    description:
      "Secure services, integrations, queues, and data pipelines engineered for scale, visibility, and calm operations.",
    icon: IconBackend,
    meta: "APIs / Cloud / Automation"
  },
  {
    title: "Product Design",
    description:
      "Serious interfaces with clear hierarchy, stronger conversion paths, and reusable component systems for fast iteration.",
    icon: IconUx,
    meta: "UX Strategy / UI Systems / Prototyping"
  }
] as const;

export const technologies = [
  { label: "Python", note: "Services", Icon: IconPython },
  { label: "Django", note: "Core web", Icon: IconDjango },
  { label: "FastAPI", note: "APIs", Icon: IconFastapi },
  { label: "Angular", note: "Dashboards", Icon: IconAngular },
  { label: "React", note: "Product UI", Icon: IconReact },
  { label: "PostgreSQL", note: "Data layer", Icon: IconPostgres },
  { label: "AWS", note: "Infrastructure", Icon: IconAws },
  { label: "Docker", note: "Runtime", Icon: IconDocker }
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Discovery + framing",
    description:
      "We translate product goals into scope, system boundaries, and an execution plan grounded in delivery risk.",
    outcome: "Clear scope"
  },
  {
    step: "02",
    title: "Architecture planning",
    description:
      "Before shipping, we define the technical shape: stack, interfaces, deployment path, and operational expectations.",
    outcome: "Stable foundation"
  },
  {
    step: "03",
    title: "Sprint delivery",
    description:
      "Features move in small, reviewable increments with direct feedback loops, demos, and visible ownership.",
    outcome: "Measured progress"
  },
  {
    step: "04",
    title: "QA + hardening",
    description:
      "Testing, edge-case reviews, and performance checks are part of the release path, not an afterthought.",
    outcome: "Release confidence"
  },
  {
    step: "05",
    title: "Launch + observability",
    description:
      "We ship with deployment discipline, rollback awareness, and the instrumentation needed to run calmly in production.",
    outcome: "Operational clarity"
  }
] as const;

export const portfolio = [
  {
    title: "Capital Operations Console",
    category: "FinTech platform",
    description:
      "Secure control center for approvals, audit trails, and live reporting across internal operations teams.",
    metric: "42% faster review cycle",
    tech: ["Django", "PostgreSQL", "AWS"]
  },
  {
    title: "Field Logistics Command",
    category: "Mobile + admin suite",
    description:
      "Driver workflow app and dispatcher dashboard for route coordination, proof of delivery, and exception handling.",
    metric: "31% drop in dispatch friction",
    tech: ["FastAPI", "React", "Docker"]
  },
  {
    title: "Insight Pipeline Studio",
    category: "B2B analytics platform",
    description:
      "Data ingestion and analytics workspace turning fragmented operational data into reliable stakeholder reporting.",
    metric: "Daily reporting cut from 4h to 20m",
    tech: ["Python", "Angular", "AWS"]
  }
] as const;

export const testimonials = [
  {
    quote:
      "Their team brought order to a chaotic roadmap. We finally had visibility, accountability, and delivery discipline that leadership could trust.",
    name: "Operations Director",
    company: "B2B SaaS"
  },
  {
    quote:
      "They improved the architecture and the interface at the same time. The product felt more premium without slowing engineering down.",
    name: "Product Lead",
    company: "FinTech startup"
  },
  {
    quote:
      "Strong technical judgment, clean communication, and no unnecessary drama. Releases became calmer and our handover quality improved immediately.",
    name: "CTO",
    company: "Services platform"
  }
] as const;

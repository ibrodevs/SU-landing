import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import BackgroundMeteors from "@/components/ui/backgroundmeteors";
import {
  IconArrowRight,
  IconAws,
  IconBackend,
  IconCheck,
  IconDocker,
  IconDjango,
  IconFastapi,
  IconGlobe,
  IconGitHub,
  IconLinkedIn,
  IconMail,
  IconPhone,
  IconPostgres,
  IconPython,
  IconReact,
  IconX,
  IconAngular,
  IconSpark,
  IconUx,
  IconMobile
} from "@/components/icons";

const services = [
  {
    title: "Web Development",
    description:
      "Performance-first websites and web apps with clean UX, SEO, and maintainable code.",
    icon: IconGlobe
  },
  {
    title: "Mobile App Development",
    description:
      "Modern mobile experiences with reliable APIs, analytics, and smooth releases.",
    icon: IconMobile
  },
  {
    title: "Backend Development",
    description:
      "Secure, scalable services: APIs, integrations, queues, and data pipelines built for growth.",
    icon: IconBackend
  },
  {
    title: "UI/UX Design",
    description:
      "Minimal, professional interfaces focused on clarity, conversion, and consistency.",
    icon: IconUx
  }
] as const;

const technologies = [
  { label: "Python", Icon: IconPython },
  { label: "Django", Icon: IconDjango },
  { label: "FastAPI", Icon: IconFastapi },
  { label: "Angular", Icon: IconAngular },
  { label: "React", Icon: IconReact },
  { label: "PostgreSQL", Icon: IconPostgres },
  { label: "AWS", Icon: IconAws },
  { label: "Docker", Icon: IconDocker }
] as const;

const processSteps = [
  {
    title: "Project Analysis",
    description:
      "We clarify goals, constraints, and success metrics, then map scope to milestones."
  },
  {
    title: "Architecture Design",
    description:
      "We design the system for security, scalability, and maintainability before coding."
  },
  {
    title: "Development",
    description:
      "Iterative delivery with weekly demos, code reviews, and transparent progress."
  },
  {
    title: "Testing",
    description:
      "Automated tests and QA workflows that reduce regressions and increase confidence."
  },
  {
    title: "Deployment",
    description:
      "CI/CD, observability, and production readiness so releases are calm and predictable."
  }
] as const;

const portfolio = [
  {
    title: "FinTech Client Portal",
    description:
      "Secure customer dashboard with role-based access, audit trails, and real-time reporting.",
    tech: ["Django", "PostgreSQL", "AWS"]
  },
  {
    title: "Logistics Mobile Suite",
    description:
      "Driver app + admin panel for routing, scanning, and proof-of-delivery with offline mode.",
    tech: ["FastAPI", "React", "Docker"]
  },
  {
    title: "B2B Analytics Platform",
    description:
      "Data ingestion and visualization pipeline delivering actionable metrics to stakeholders.",
    tech: ["Python", "Angular", "AWS"]
  }
] as const;

const testimonials = [
  {
    quote:
      "Clear communication, strong engineering discipline, and predictable delivery. Our roadmap finally became realistic.",
    name: "Operations Director",
    company: "SaaS Company"
  },
  {
    quote:
      "They cared about the details: security reviews, clean UI, and performance. The handover was painless.",
    name: "Product Lead",
    company: "FinTech Startup"
  },
  {
    quote:
      "A partner we trust. They improved our architecture while keeping velocity high and technical debt low.",
    name: "CTO",
    company: "B2B Services"
  }
] as const;

export default function Page() {
  return (
    <main>
      <Header />

      <Hero />

      <section id="about" className="section">
        <div className="container">
          <div className="grid2">
            <div>
              <div className="pill">
                <IconSpark />
                <span style={{ fontWeight: 600 }}>Built for trust</span>
                <span className="muted">Quality-first engineering</span>
              </div>
              <h2 className="sectionTitle" style={{ marginTop: 18 }}>
                We build software that feels calm in production.
              </h2>
              <p className="sectionLead">
                SU Solutions is a software development company focused on clean
                delivery, strong communication, and maintainable systems. We
                integrate with your team, ship in small increments, and keep
                risk visible from day one.
              </p>

              <div style={{ marginTop: 18, display: "grid", gap: 10 }}>
                {[
                  "Senior-led delivery with clear milestones",
                  "Security-minded architecture and reviews",
                  "Transparent progress with weekly demos"
                ].map((item) => (
                  <div
                    key={item}
                    style={{ display: "flex", gap: 10, alignItems: "center" }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: 999,
                        display: "grid",
                        placeItems: "center",
                        background: "rgba(37, 99, 235, 0.12)",
                        border: "1px solid rgba(37, 99, 235, 0.2)"
                      }}
                    >
                      <IconCheck />
                    </span>
                    <span className="muted">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card" style={{ alignSelf: "start" }}>
              <div className="cardInner">
                <h3 style={{ margin: 0, letterSpacing: "-0.02em" }}>
                  Company snapshot
                </h3>
                <p className="muted" style={{ margin: "8px 0 0", lineHeight: 1.6 }}>
                  A lean, experienced team delivering web, mobile, and backend
                  solutions for growing businesses.
                </p>
                <div
                  style={{
                    marginTop: 18,
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: 12
                  }}
                >
                  <Stat label="Years" value="7+" />
                  <Stat label="Projects" value="60+" />
                  <Stat label="Team" value="15+" />
                </div>
                <div
                  style={{
                    marginTop: 16,
                    paddingTop: 16,
                    borderTop: "1px solid var(--line)",
                    display: "flex",
                    gap: 10,
                    flexWrap: "wrap"
                  }}
                >
                  {["NDA-friendly", "Timezone overlap", "Documentation"].map(
                    (tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: 12,
                          padding: "6px 10px",
                          borderRadius: 999,
                          border: "1px solid rgba(37, 99, 235, 0.2)",
                          background: "rgba(239, 246, 255, 0.7)",
                          color: "var(--brand-900)"
                        }}
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section" style={{ background: "var(--brand-50)" }}>
        <div className="container">
          <h2 className="sectionTitle">Services</h2>
          <p className="sectionLead">
            End-to-end delivery for products that must be fast, secure, and easy
            to evolve.
          </p>

          <div className="grid4" style={{ marginTop: 22 }}>
            {services.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="card"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  transform: "translateZ(0)"
                }}
              >
                <div className="cardInner">
                  <div
                    aria-hidden="true"
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 14,
                      display: "grid",
                      placeItems: "center",
                      background:
                        "linear-gradient(180deg, rgba(37, 99, 235, 0.18), rgba(37, 99, 235, 0.06))",
                      border: "1px solid rgba(37, 99, 235, 0.22)"
                    }}
                  >
                    <Icon />
                  </div>
                  <h3
                    style={{
                      margin: "14px 0 8px",
                      letterSpacing: "-0.02em"
                    }}
                  >
                    {title}
                  </h3>
                  <p className="muted" style={{ margin: 0, lineHeight: 1.6 }}>
                    {description}
                  </p>
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: "-40% -40% auto auto",
                    width: 160,
                    height: 160,
                    background:
                      "radial-gradient(circle at 30% 30%, rgba(37,99,235,0.20), rgba(37,99,235,0) 60%)",
                    transform: "translate3d(0,0,0)",
                    animation: "floatA 8s ease-in-out infinite"
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tech" className="section">
        <div className="container">
          <h2 className="sectionTitle">Technologies</h2>
          <p className="sectionLead">
            A pragmatic stack that stays maintainable: modern frameworks, proven
            infrastructure, and production-grade tooling.
          </p>

          <div className="techGrid">
            {technologies.map(({ label, Icon }) => (
              <div
                key={label}
                className="card"
                style={{
                  padding: 12,
                  display: "grid",
                  placeItems: "center",
                  gap: 10,
                  textAlign: "center",
                  borderRadius: 16
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 14,
                    display: "grid",
                    placeItems: "center",
                    background: "rgba(37, 99, 235, 0.08)",
                    border: "1px solid rgba(37, 99, 235, 0.18)"
                  }}
                >
                  <Icon />
                </div>
                <div style={{ fontSize: 12, color: "var(--brand-900)" }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section" style={{ background: "var(--brand-50)" }}>
        <div className="container">
          <h2 className="sectionTitle">Development process</h2>
          <p className="sectionLead">
            A simple, reliable workflow that keeps stakeholders aligned and
            reduces delivery risk.
          </p>

          <div style={{ marginTop: 22, display: "grid", gap: 12 }}>
            {processSteps.map((step, idx) => (
              <div key={step.title} className="card">
                <div
                  className="cardInner"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    gap: 14,
                    alignItems: "start"
                  }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 14,
                      display: "grid",
                      placeItems: "center",
                      fontWeight: 700,
                      color: "var(--brand-900)",
                      border: "1px solid rgba(37, 99, 235, 0.22)",
                      background:
                        "linear-gradient(180deg, rgba(37,99,235,0.14), rgba(255,255,255,0.9))"
                    }}
                  >
                    {idx + 1}
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: 650,
                        letterSpacing: "-0.01em"
                      }}
                    >
                      {step.title}
                    </div>
                    <div className="muted" style={{ marginTop: 6, lineHeight: 1.6 }}>
                      {step.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="section">
        <div className="container">
          <h2 className="sectionTitle">Portfolio / case studies</h2>
          <p className="sectionLead">
            A few representative examples. We share full case studies on request
            under NDA.
          </p>

          <div className="grid3" style={{ marginTop: 22 }}>
            {portfolio.map((p) => (
              <div key={p.title} className="card">
                <div className="cardInner">
                  <h3 style={{ margin: 0, letterSpacing: "-0.02em" }}>{p.title}</h3>
                  <p className="muted" style={{ margin: "10px 0 0", lineHeight: 1.6 }}>
                    {p.description}
                  </p>
                  <div
                    style={{
                      marginTop: 14,
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 8
                    }}
                  >
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: 12,
                          padding: "6px 10px",
                          borderRadius: 999,
                          border: "1px solid rgba(37, 99, 235, 0.2)",
                          background: "rgba(239, 246, 255, 0.7)",
                          color: "var(--brand-900)"
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="section" style={{ background: "var(--brand-50)" }}>
        <div className="container">
          <h2 className="sectionTitle">Client testimonials</h2>
          <p className="sectionLead">
            A consistent theme: clear communication, quality delivery, and
            engineering that holds up.
          </p>

          <div className="grid3" style={{ marginTop: 22 }}>
            {testimonials.map((t) => (
              <div key={t.name + t.company} className="card">
                <div className="cardInner">
                  <p style={{ margin: 0, lineHeight: 1.7, letterSpacing: "-0.01em" }}>
                    “{t.quote}”
                  </p>
                  <div style={{ marginTop: 14, display: "grid", gap: 2 }}>
                    <div style={{ fontWeight: 650 }}>{t.name}</div>
                    <div className="muted" style={{ fontSize: 13 }}>
                      {t.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <div className="grid2">
            <div>
              <h2 className="sectionTitle">Start a project</h2>
              <p className="sectionLead">
                Tell us what you are building. We reply with clarifying
                questions, a proposed approach, and a realistic timeline.
              </p>

              <div style={{ marginTop: 18, display: "grid", gap: 10 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <span
                    aria-hidden="true"
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 12,
                      display: "grid",
                      placeItems: "center",
                      background: "rgba(37, 99, 235, 0.10)",
                      border: "1px solid rgba(37, 99, 235, 0.18)"
                    }}
                  >
                    <IconCheck />
                  </span>
                  <span className="muted">Free technical consultation</span>
                </div>
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <span
                    aria-hidden="true"
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 12,
                      display: "grid",
                      placeItems: "center",
                      background: "rgba(37, 99, 235, 0.10)",
                      border: "1px solid rgba(37, 99, 235, 0.18)"
                    }}
                  >
                    <IconCheck />
                  </span>
                  <span className="muted">NDA available</span>
                </div>
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <span
                    aria-hidden="true"
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 12,
                      display: "grid",
                      placeItems: "center",
                      background: "rgba(37, 99, 235, 0.10)",
                      border: "1px solid rgba(37, 99, 235, 0.18)"
                    }}
                  >
                    <IconCheck />
                  </span>
                  <span className="muted">Typical response within 1 business day</span>
                </div>
              </div>
            </div>

            <div className="card" style={{ alignSelf: "start" }}>
              <div className="cardInner">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes floatA {
          0%, 100% { transform: translate3d(0, 0, 0); opacity: 0.9; }
          50% { transform: translate3d(-10px, 12px, 0); opacity: 1; }
        }
      `}</style>
    </main>
  );
}

function Header() {
  return (
    <header className="glassHeader">
      <div className="container" style={{ paddingTop: 12, paddingBottom: 12 }}>
        <div className="glassBar">
          <Link href="/" className="brandLink">
            <span aria-hidden="true" className="brandMark">
              <Image
                src="/Logo_SU.png"
                alt=""
                width={34}
                height={34}
                className="brandLogo"
                priority
              />
            </span>
            <span>SU Solutions</span>
          </Link>

          <nav aria-label="Primary" className="glassNav">
            <div className="navTrack">
              {[
                ["About", "#about"],
                ["Services", "#services"],
                ["Tech", "#tech"],
                ["Process", "#process"],
                ["Portfolio", "#portfolio"],
                ["Contact", "#contact"]
              ].map(([label, href]) => (
                <a key={href} href={href} className="navLink">
                  {label}
                </a>
              ))}
            </div>
            <a className="navCta" href="#contact">
              Start a Project <IconArrowRight />
            </a>
          </nav>
        </div>
      </div>

      <style>{`
        .glassHeader {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 30;
        }
        .glassBar {
          position: relative;
          min-height: 72px;
          padding: 10px 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          border-radius: 22px;
          border: 1px solid rgba(255, 255, 255, 0.7);
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.7),
            rgba(239, 246, 255, 0.56)
          );
          box-shadow:
            0 18px 46px rgba(15, 23, 42, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(16px) saturate(150%);
          overflow: hidden;
          isolation: isolate;
        }
        .glassBar::before {
          content: "";
          position: absolute;
          inset: -35% auto auto -20%;
          width: 280px;
          height: 280px;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.2), rgba(37, 99, 235, 0));
          animation: glassDrift 9s ease-in-out infinite;
          z-index: -1;
        }
        .brandLink {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-weight: 780;
          letter-spacing: -0.02em;
          color: var(--brand-900);
        }
        .brandMark {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          background: linear-gradient(180deg, var(--brand-600), var(--brand-700));
          box-shadow:
            0 14px 30px rgba(37, 99, 235, 0.35),
            inset 0 1px 0 rgba(255, 255, 255, 0.45);
          animation: brandPulse 3.4s ease-in-out infinite;
        }
        .brandLogo {
          width: 34px;
          height: 34px;
          object-fit: contain;
        }
        .glassNav {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .navTrack {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px;
          border-radius: 999px;
          border: 1px solid rgba(37, 99, 235, 0.14);
          background: rgba(255, 255, 255, 0.56);
          backdrop-filter: blur(10px);
        }
        .navLink {
          position: relative;
          font-size: 13px;
          color: var(--muted);
          padding: 9px 12px;
          border-radius: 999px;
          transition: color 180ms ease, background 180ms ease, transform 180ms ease;
        }
        .navLink::after {
          content: "";
          position: absolute;
          left: 16px;
          right: 16px;
          bottom: 6px;
          height: 2px;
          border-radius: 999px;
          background: linear-gradient(90deg, var(--brand-500), var(--brand-700));
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 180ms ease;
        }
        .navLink:hover {
          color: var(--brand-900);
          background: rgba(37, 99, 235, 0.1);
          transform: translateY(-1px);
        }
        .navLink:hover::after {
          transform: scaleX(1);
        }
        .navCta {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          height: 42px;
          padding: 0 16px;
          border-radius: 999px;
          border: 1px solid rgba(37, 99, 235, 0.2);
          background: linear-gradient(180deg, rgba(255,255,255,0.92), rgba(219, 234, 254, 0.95));
          color: var(--brand-900);
          box-shadow: 0 12px 30px rgba(37, 99, 235, 0.16);
          overflow: hidden;
          transition: transform 180ms ease, box-shadow 180ms ease;
        }
        .navCta::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            115deg,
            rgba(255,255,255,0) 30%,
            rgba(255,255,255,0.45) 50%,
            rgba(255,255,255,0) 70%
          );
          transform: translateX(-120%);
          animation: linkSheen 2.6s ease-in-out infinite;
        }
        .navCta:hover {
          transform: translateY(-1px);
          box-shadow: 0 16px 36px rgba(37, 99, 235, 0.2);
        }
        @keyframes glassDrift {
          0%, 100% { transform: translate3d(0, 0, 0); opacity: 0.85; }
          50% { transform: translate3d(20px, 14px, 0); opacity: 1; }
        }
        @keyframes brandPulse {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -1px, 0) scale(1.03); }
        }
        @keyframes linkSheen {
          0%, 18% { transform: translateX(-120%); }
          48%, 100% { transform: translateX(120%); }
        }
        @media (max-width: 980px) {
          .navTrack .navLink { display: none; }
        }
        @media (max-width: 560px) {
          .glassBar {
            border-radius: 16px;
            padding: 9px 10px;
          }
          .brandLink { font-size: 14px; }
          .brandMark {
            width: 40px;
            height: 40px;
            border-radius: 10px;
          }
          .navCta {
            height: 38px;
            font-size: 13px;
            padding: 0 12px;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .glassBar::before,
          .brandMark,
          .navCta::before {
            animation: none !important;
          }
          .navLink,
          .navCta {
            transition: none !important;
          }
        }
      `}</style>
    </header>
  );
}

function Hero() {
  return (
    <BackgroundMeteors>
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "96px 0 82px",
          borderBottom: "1px solid rgba(37, 99, 235, 0.10)"
        }}
      >
        <div className="container">
          <div className="grid2" style={{ alignItems: "center" }}>
            <div>
              <div className="pill heroPill">
                <IconSpark />
                <span style={{ fontWeight: 650 }}>Technology partner for ambitious teams</span>
              </div>
              <h1
                style={{
                  margin: "18px 0 14px",
                  fontSize: "clamp(38px, 4.6vw, 64px)",
                  letterSpacing: "-0.05em",
                  lineHeight: 1.03
                }}
              >
                Build bold digital products with modern engineering velocity.
              </h1>
              <p
                className="sectionLead"
                style={{ fontSize: 17, maxWidth: "62ch" }}
              >
                From architecture to release, we deliver web, mobile, and backend
                systems with measurable performance and production-grade reliability.
              </p>

              <div className="btnRow" style={{ marginTop: 18 }}>
                <a className="btnPrimary" href="#contact">
                  Start a Project <IconArrowRight />
                  <span className="kbd">24h reply</span>
                </a>
                <a className="btnSecondary" href="#portfolio">
                  View Portfolio <IconArrowRight />
                </a>
              </div>

              <div
                style={{
                  marginTop: 20,
                  display: "flex",
                  gap: 10,
                  flexWrap: "wrap",
                  color: "var(--muted)",
                  fontSize: 12
                }}
              >
                {[
                  "Sprint-driven delivery",
                  "Cloud-native architecture",
                  "QA + observability by default"
                ].map((item) => (
                  <span key={item} className="heroChip">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ position: "relative", minHeight: 440 }}>
              <div
                className="card"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  height: 460,
                  border: "1px solid rgba(37, 99, 235, 0.26)"
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "radial-gradient(circle at 30% 20%, rgba(37, 99, 235, 0.24), rgba(37, 99, 235, 0) 55%), radial-gradient(circle at 70% 80%, rgba(59, 130, 246, 0.22), rgba(59, 130, 246, 0) 60%)"
                  }}
                />
                <TechIllustration />
                <div className="heroScan" aria-hidden="true" />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    padding: 18,
                    display: "grid",
                    alignContent: "space-between"
                  }}
                >
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      width: "fit-content",
                      padding: "8px 12px",
                      borderRadius: 999,
                      fontSize: 12,
                      color: "var(--brand-900)",
                      background: "rgba(255,255,255,0.72)",
                      border: "1px solid rgba(37, 99, 235, 0.2)",
                      backdropFilter: "blur(10px)"
                    }}
                  >
                    <span className="heroStatusDot" aria-hidden="true" />
                    Live delivery pulse
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gap: 10,
                      padding: 16,
                      borderRadius: 16,
                      background: "rgba(255,255,255,0.76)",
                      border: "1px solid rgba(37, 99, 235, 0.24)",
                      backdropFilter: "blur(12px)",
                      maxWidth: 420
                    }}
                  >
                    <div style={{ fontWeight: 700, letterSpacing: "-0.02em" }}>
                      Platform Engineering Dashboard
                    </div>
                    <div className="muted" style={{ fontSize: 13, lineHeight: 1.55 }}>
                      Architected for scale with CI/CD, monitoring, and secure
                      infrastructure from day one.
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
                      <div className="heroMetric">
                        <strong>99.95%</strong>
                        <span>Uptime target</span>
                      </div>
                      <div className="heroMetric">
                        <strong>2.1x</strong>
                        <span>Release speed</span>
                      </div>
                      <div className="heroMetric">
                        <strong>24h</strong>
                        <span>First response</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          .heroPill {
            box-shadow: 0 8px 26px rgba(37, 99, 235, 0.12);
          }
          .heroChip {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 7px 10px;
            border-radius: 999px;
            border: 1px solid rgba(37, 99, 235, 0.2);
            background: rgba(255, 255, 255, 0.62);
            backdrop-filter: blur(8px);
          }
          .heroScan {
            position: absolute;
            inset: -35% 0 auto 0;
            height: 42%;
            background: linear-gradient(
              180deg,
              rgba(59, 130, 246, 0) 0%,
              rgba(59, 130, 246, 0.14) 50%,
              rgba(59, 130, 246, 0) 100%
            );
            mix-blend-mode: screen;
            animation: heroScan 7.2s linear infinite;
          }
          .heroStatusDot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: #22c55e;
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.55);
            animation: heroPing 2s ease-out infinite;
          }
          .heroMetric {
            display: grid;
            gap: 3px;
            padding: 8px;
            border-radius: 12px;
            border: 1px solid rgba(37, 99, 235, 0.18);
            background: rgba(255, 255, 255, 0.65);
          }
          .heroMetric strong {
            font-size: 16px;
            line-height: 1;
            letter-spacing: -0.02em;
            color: var(--brand-900);
          }
          .heroMetric span {
            font-size: 11px;
            color: var(--muted);
          }
          @keyframes heroScan {
            0% { transform: translate3d(0, 0, 0); opacity: 0; }
            12% { opacity: 1; }
            100% { transform: translate3d(0, 290px, 0); opacity: 0; }
          }
          @keyframes heroPing {
            0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.45); }
            80% { box-shadow: 0 0 0 8px rgba(34, 197, 94, 0); }
            100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
          }
          @media (max-width: 980px) {
            .heroMetric strong { font-size: 15px; }
          }
          @media (prefers-reduced-motion: reduce) {
            .heroScan,
            .heroStatusDot {
              animation: none !important;
            }
          }
        `}</style>
      </section>
    </BackgroundMeteors>
  );
}

function TechIllustration() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 820 540"
      preserveAspectRatio="xMidYMid slice"
      style={{
        position: "absolute",
        inset: 0,
        opacity: 0.92
      }}
      role="img"
      aria-label="Tech network illustration"
    >
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="rgba(37,99,235,0.22)" />
          <stop offset="1" stopColor="rgba(59,130,246,0.08)" />
        </linearGradient>
        <linearGradient id="g2" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="rgba(37,99,235,0.34)" />
          <stop offset="1" stopColor="rgba(59,130,246,0.10)" />
        </linearGradient>
        <filter id="blur">
          <feGaussianBlur stdDeviation="2.4" />
        </filter>
      </defs>

      <g opacity="0.95" stroke="url(#g1)" strokeWidth="1.2" fill="none">
        <path d="M130 140 L260 90 L390 150 L520 110 L690 170" />
        <path d="M170 250 L310 210 L440 260 L590 220 L720 300" />
        <path d="M120 380 L260 330 L400 390 L560 350 L700 410" />
        <path d="M260 90 L310 210 L260 330" />
        <path d="M520 110 L590 220 L560 350" />
        <path d="M390 150 L440 260 L400 390" />
      </g>

      <g fill="url(#g2)" stroke="rgba(37,99,235,0.22)" strokeWidth="1">
        {[
          [130, 140],
          [260, 90],
          [390, 150],
          [520, 110],
          [690, 170],
          [170, 250],
          [310, 210],
          [440, 260],
          [590, 220],
          [720, 300],
          [120, 380],
          [260, 330],
          [400, 390],
          [560, 350],
          [700, 410]
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={8} />
        ))}
      </g>

      <g filter="url(#blur)" opacity="0.6">
        <circle cx="610" cy="120" r="40" fill="rgba(37,99,235,0.12)" />
        <circle cx="220" cy="300" r="56" fill="rgba(59,130,246,0.10)" />
      </g>

      <g opacity="0.55" fill="rgba(37,99,235,0.22)">
        {Array.from({ length: 36 }).map((_, idx) => {
          const x = 80 + (idx % 9) * 78 + ((idx % 2) ? 8 : 0);
          const y = 70 + Math.floor(idx / 9) * 96;
          return <circle key={idx} cx={x} cy={y} r="1.8" />;
        })}
      </g>

      <style>{`
        circle {
          transform-origin: center;
          animation: pulse 5.6s ease-in-out infinite;
        }
        circle:nth-child(3n) { animation-duration: 6.4s; }
        circle:nth-child(5n) { animation-duration: 7.2s; }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.95; }
          50% { transform: scale(1.06); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          circle { animation: none; }
        }
      `}</style>
    </svg>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        padding: 12,
        borderRadius: 16,
        border: "1px solid rgba(37, 99, 235, 0.18)",
        background: "rgba(239, 246, 255, 0.55)"
      }}
    >
      <div style={{ fontWeight: 800, fontSize: 20, letterSpacing: "-0.02em" }}>
        {value}
      </div>
      <div className="muted" style={{ fontSize: 12 }}>
        {label}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(37, 99, 235, 0.12)",
        background:
          "linear-gradient(180deg, rgba(239,246,255,0.8), rgba(255,255,255,1))"
      }}
    >
      <div className="container" style={{ padding: "34px 0" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: 20,
            alignItems: "start"
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontWeight: 800,
                letterSpacing: "-0.02em"
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 10,
                  background:
                    "linear-gradient(180deg, var(--brand-600), var(--brand-700))"
                }}
              />
              SU Solutions
            </div>
            <p className="muted" style={{ margin: "10px 0 0", lineHeight: 1.6 }}>
              Software development services: web, mobile, backend, and UI/UX.
              Modern delivery with a focus on clarity and trust.
            </p>

            <div style={{ marginTop: 14, display: "grid", gap: 8 }}>
              <div
                className="muted"
                style={{ display: "inline-flex", gap: 10, alignItems: "center" }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 12,
                    display: "grid",
                    placeItems: "center",
                    border: "1px solid rgba(37, 99, 235, 0.18)",
                    background: "rgba(239,246,255,0.7)"
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 999,
                      background: "rgba(37,99,235,0.45)"
                    }}
                  />
                </span>
                Remote-first • Worldwide delivery
              </div>
              <a
                href="mailto:hello@su-solutions.com"
                style={{ display: "inline-flex", gap: 10, alignItems: "center" }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 12,
                    display: "grid",
                    placeItems: "center",
                    border: "1px solid rgba(37, 99, 235, 0.18)",
                    background: "rgba(239,246,255,0.7)"
                  }}
                >
                  <IconMail />
                </span>
                <span className="muted">hello@su-solutions.com</span>
              </a>
              <a
                href="tel:+10000000000"
                style={{ display: "inline-flex", gap: 10, alignItems: "center" }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 12,
                    display: "grid",
                    placeItems: "center",
                    border: "1px solid rgba(37, 99, 235, 0.18)",
                    background: "rgba(239,246,255,0.7)"
                  }}
                >
                  <IconPhone />
                </span>
                <span className="muted">+1 (000) 000-0000</span>
              </a>
            </div>
          </div>

          <div style={{ display: "grid", gap: 10, justifyItems: "end" }}>
            <div style={{ fontWeight: 700, letterSpacing: "-0.01em" }}>
              Social
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <a
                aria-label="LinkedIn"
                href="#"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 14,
                  display: "grid",
                  placeItems: "center",
                  border: "1px solid rgba(37, 99, 235, 0.18)",
                  background: "rgba(239,246,255,0.7)",
                  transition: "transform 180ms ease, box-shadow 180ms ease"
                }}
              >
                <IconLinkedIn />
              </a>
              <a
                aria-label="GitHub"
                href="#"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 14,
                  display: "grid",
                  placeItems: "center",
                  border: "1px solid rgba(37, 99, 235, 0.18)",
                  background: "rgba(239,246,255,0.7)",
                  transition: "transform 180ms ease, box-shadow 180ms ease"
                }}
              >
                <IconGitHub />
              </a>
              <a
                aria-label="X"
                href="#"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 14,
                  display: "grid",
                  placeItems: "center",
                  border: "1px solid rgba(37, 99, 235, 0.18)",
                  background: "rgba(239,246,255,0.7)",
                  transition: "transform 180ms ease, box-shadow 180ms ease"
                }}
              >
                <IconX />
              </a>
              <a
                aria-label="Email"
                href="mailto:hello@su-solutions.com"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 14,
                  display: "grid",
                  placeItems: "center",
                  border: "1px solid rgba(37, 99, 235, 0.18)",
                  background: "rgba(239,246,255,0.7)",
                  transition: "transform 180ms ease, box-shadow 180ms ease"
                }}
              >
                <IconMail />
              </a>
            </div>
            <div className="muted" style={{ fontSize: 12 }}>
              © {new Date().getFullYear()} SU Solutions. All rights reserved.
            </div>
          </div>
        </div>
      </div>

      <style>{`
        footer a[aria-label]:hover { transform: translateY(-1px); box-shadow: 0 16px 50px rgba(37, 99, 235, 0.16); }
        @media (max-width: 980px) {
          footer .container > div { grid-template-columns: 1fr !important; }
          footer .container > div > div:last-child { justify-items: start !important; }
        }
      `}</style>
    </footer>
  );
}

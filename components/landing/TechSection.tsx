import { technologies } from "@/components/landing/data";
import { Tag } from "@/components/landing/SectionPrimitives";

const architectureItems = [
  {
    title: "Typed contracts",
    description:
      "Interfaces stay explicit across frontend, backend, and data boundaries so teams move faster with less guesswork."
  },
  {
    title: "Pragmatic infrastructure",
    description:
      "We prefer tooling that keeps operations calm, onboarding reasonable, and deployment paths predictable."
  },
  {
    title: "Long-lived codebases",
    description:
      "Technology choices should support hiring continuity, maintainability, and sane iteration speed over time."
  }
] as const;

const engineeringTags = [
  "Performance budgets",
  "CI/CD",
  "Observability",
  "Access control",
  "Design systems",
  "Operational dashboards"
] as const;

export default function TechSection() {
  return (
    <section id="tech" className="section">
      <div className="container">
        <div className="sectionHeader">
          <div>
            <div className="sectionEyebrow">Technology</div>
            <h2 className="sectionTitle">
              Pragmatic tooling, selected for clarity and long-term velocity.
            </h2>
            <p className="sectionLead">
              We work with a focused stack that supports modern product experiences,
              strong backend foundations, and stable production operations.
            </p>
          </div>

          <div className="sectionAside">
            The best stack is rarely the loudest one. We choose tools that help teams
            ship quickly without creating operational drag later.
          </div>
        </div>

        <div className="techLayout">
          <div className="sectionPanel">
            <div className="panelBadge">Tech foundations</div>
            <h3 className="panelTitle">
              A serious engineering stack with fewer moving parts and stronger guarantees.
            </h3>
            <p className="panelCopy">
              We align platform decisions around maintainability, performance, and the
              realities of production support instead of trend-chasing.
            </p>

            <div className="architectureList">
              {architectureItems.map((item) => (
                <div key={item.title} className="architectureItem">
                  <strong>{item.title}</strong>
                  <span>{item.description}</span>
                </div>
              ))}
            </div>

            <div className="techPillRow" style={{ marginTop: 24 }}>
              {engineeringTags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>

          <div className="techGrid">
            {technologies.map(({ label, note, Icon }) => (
              <article key={label} className="card techCard">
                <div className="techCardTop">
                  <div className="techIcon">
                    <Icon />
                  </div>
                  <span className="techNote">{note}</span>
                </div>
                <div className="techLabel">{label}</div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

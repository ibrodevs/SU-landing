import { IconBackend, IconCheck, IconGlobe } from "@/components/icons";
import { ChecklistItem, Stat, Tag } from "@/components/landing/SectionPrimitives";

const principles = [
  {
    title: "Senior ownership",
    description: "One technical point of view from kickoff through release, with fewer handoffs and less drift.",
    icon: IconBackend
  },
  {
    title: "Visible delivery",
    description: "Short feedback loops, direct communication, and progress shaped around what actually matters next.",
    icon: IconGlobe
  },
  {
    title: "Quality by default",
    description: "Testing, review discipline, and operational clarity are part of the build, not optional add-ons.",
    icon: IconCheck
  }
] as const;

const checklist = [
  "Clear milestones and realistic delivery sequencing",
  "Architecture decisions that stay maintainable six months later",
  "Strong collaboration with product, design, and stakeholders"
] as const;

const operatingModel = [
  {
    title: "Frame the problem early",
    text: "We reduce wasted motion by aligning business goals, delivery constraints, and technical tradeoffs before sprinting."
  },
  {
    title: "Ship in smaller cuts",
    text: "Useful increments keep risk visible, let teams react quickly, and prevent late-stage surprises."
  },
  {
    title: "Leave teams stronger",
    text: "The codebase, design system, and release process should be cleaner after we leave than when we started."
  }
] as const;

const coreTags = [
  "React / Next.js",
  "TypeScript",
  "Python",
  "Django",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Design systems"
] as const;

const aboutStats = [
  { value: "Small", label: "Release increments" },
  { value: "Clear", label: "Decision trail" },
  { value: "Stable", label: "Long-term ownership" }
] as const;

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="sectionHeader">
          <div>
            <div className="sectionEyebrow">About</div>
            <h2 className="sectionTitle">
              We behave like a senior product engineering team from the first week.
            </h2>
            <p className="sectionLead">
              SU Solutions helps ambitious teams move from idea to production with more
              confidence, less noise, and a sharper operational model. We care about
              design quality, delivery clarity, and systems that hold up under pressure.
            </p>
          </div>

          <div className="sectionAside">
            Strong execution comes from two things: architectural clarity and honest
            visibility into what matters next. We optimize for both.
          </div>
        </div>

        <div className="aboutGrid">
          <div className="sectionPanel aboutSummary">
            <div className="aboutPrinciples">
              {principles.map(({ title, description, icon: Icon }) => (
                <article key={title} className="principleCard">
                  <div className="principleIcon">
                    <Icon />
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>

            <div className="aboutMatrix">
              <div className="aboutMatrixBlock">
                <div className="panelBadge">What teams get</div>
                <div className="aboutChecklist">
                  {checklist.map((item) => (
                    <ChecklistItem key={item} size={26}>
                      {item}
                    </ChecklistItem>
                  ))}
                </div>
              </div>

              <div className="aboutMatrixBlock">
                <div className="stackStatementTitle">Core stack focus</div>
                <div className="aboutTagGrid">
                  {coreTags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="sectionPanel aboutPanel">
            <div className="panelBadge">Operating rhythm</div>
            <h3 className="panelTitle">Fast alignment, small releases, clean handoff.</h3>
            <p className="panelCopy">
              We keep risk visible, decisions documented, and delivery paced around
              measurable milestones instead of vague momentum.
            </p>

            <div className="operatingList">
              {operatingModel.map((item, index) => (
                <article key={item.title} className="operatingItem">
                  <div className="operatingIndex">0{index + 1}</div>
                  <div>
                    <div className="operatingTitle">{item.title}</div>
                    <div className="operatingText">{item.text}</div>
                  </div>
                </article>
              ))}
            </div>

            <div className="heroStatGrid">
              {aboutStats.map((item) => (
                <Stat key={item.label} value={item.value} label={item.label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

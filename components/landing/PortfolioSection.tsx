import { portfolio } from "@/components/landing/data";
import { Tag } from "@/components/landing/SectionPrimitives";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <div className="sectionHeader">
          <div>
            <div className="sectionEyebrow">Portfolio</div>
            <h2 className="sectionTitle">
              Representative work across serious, operations-heavy digital products.
            </h2>
            <p className="sectionLead">
              These examples show the kind of systems we like building: high-trust
              interfaces, clear workflows, and backend foundations that scale cleanly.
            </p>
          </div>

          <div className="sectionAside">
            Detailed case studies, architecture notes, and private references can be
            shared in direct conversations and under NDA when needed.
          </div>
        </div>

        <div className="grid3">
          {portfolio.map((item) => (
            <article key={item.title} className="card portfolioCard">
              <div className="cardInner">
                <div className="caseMeta">{item.category}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="portfolioMetric">{item.metric}</div>
                <div className="tagRow" style={{ marginTop: 16 }}>
                  {item.tech.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
                <div className="cardFootnote">Detailed case study available on request</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { processSteps } from "@/components/landing/data";

export default function ProcessSection() {
  return (
    <section id="process" className="section sectionTint">
      <div className="container">
        <div className="sectionHeader">
          <div>
            <div className="sectionEyebrow">Process</div>
            <h2 className="sectionTitle">
              A delivery model designed to reduce uncertainty at every stage.
            </h2>
            <p className="sectionLead">
              The workflow stays simple on purpose: decisions become clearer, releases
              become calmer, and stakeholders stay aligned around real progress.
            </p>
          </div>

          <div className="sectionAside">
            We keep the process structured enough to reduce risk, but not heavy enough
            to slow down product momentum.
          </div>
        </div>

        <div className="sectionPanel">
          <div className="processTimeline">
            {processSteps.map((step) => (
              <article key={step.step} className="processCard">
                <div className="stepNumber">{step.step}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                <div className="stepOutcome">{step.outcome}</div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

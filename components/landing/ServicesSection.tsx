import { services } from "@/components/landing/data";

export default function ServicesSection() {
  return (
    <section id="services" className="section sectionTint">
      <div className="container">
        <div className="sectionHeader">
          <div>
            <div className="sectionEyebrow">Services</div>
            <h2 className="sectionTitle">
              Product, platform, and design work built for modern technology teams.
            </h2>
            <p className="sectionLead">
              We focus on the layers that most influence speed, trust, and long-term
              maintainability across digital products.
            </p>
          </div>

          <div className="sectionAside">
            The goal is not to add noise to your roadmap. It is to remove friction and
            help the core product move faster with better technical judgment.
          </div>
        </div>

        <div className="grid4">
          {services.map(({ title, description, icon: Icon, meta }, index) => (
            <article key={title} className="card serviceCard">
              <div className="serviceCardIndex">0{index + 1}</div>
              <div className="cardInner">
                <div className="serviceIcon">
                  <Icon />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="serviceMeta">{meta}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { testimonials } from "@/components/landing/data";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section sectionTint">
      <div className="container">
        <div className="sectionHeader">
          <div>
            <div className="sectionEyebrow">Testimonials</div>
            <h2 className="sectionTitle">
              Trusted for technical judgment, delivery calm, and interface quality.
            </h2>
            <p className="sectionLead">
              The recurring theme is consistent: strong communication, mature execution,
              and digital products that feel more credible after the work is done.
            </p>
          </div>

          <div className="sectionAside">
            We are most useful for teams that need design quality and engineering
            discipline to improve together, not separately.
          </div>
        </div>

        <div className="grid3">
          {testimonials.map((item) => (
            <article key={item.name + item.company} className="card testimonialCard">
              <div className="cardInner">
                <div className="quoteMark">“</div>
                <p>{item.quote}</p>
                <div className="testimonialPerson">
                  <strong>{item.name}</strong>
                  <span>{item.company}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

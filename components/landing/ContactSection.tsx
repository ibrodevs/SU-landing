import ContactForm from "@/components/ContactForm";
import { IconMail, IconPhone } from "@/components/icons";
import { ChecklistItem, ContactIcon } from "@/components/landing/SectionPrimitives";

const contactItems = [
  "Free technical consultation with a realistic delivery angle",
  "NDA-friendly conversations for internal tools or private roadmaps",
  "Typical response within one business day"
] as const;

export default function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contactGrid">
          <div className="sectionPanel contactPanel">
            <div className="sectionEyebrow">Contact</div>
            <h2 className="sectionTitle">
              Plan the next release with a team that ships cleanly.
            </h2>
            <p className="sectionLead">
              Tell us what you are building, what is blocking momentum, and what a good
              outcome looks like. We respond with clarifying questions and a credible
              next-step plan.
            </p>

            <div className="contactList">
              {contactItems.map((item) => (
                <ChecklistItem key={item} size={28}>
                  {item}
                </ChecklistItem>
              ))}
            </div>

            <div className="contactInfoGrid">
              <a className="contactInfoCard" href="mailto:hello@su-solutions.com">
                <ContactIcon>
                  <IconMail />
                </ContactIcon>
                <div>
                  <strong>hello@su-solutions.com</strong>
                  <span>Share scope, deck, or product context</span>
                </div>
              </a>

              <a className="contactInfoCard" href="tel:+10000000000">
                <ContactIcon>
                  <IconPhone />
                </ContactIcon>
                <div>
                  <strong>+1 (000) 000-0000</strong>
                  <span>Intro calls and working sessions by arrangement</span>
                </div>
              </a>
            </div>
          </div>

          <div className="sectionPanel contactFormPanel">
            <div className="panelBadge">Project brief</div>
            <h3 className="panelTitle">Share scope, timeline, and constraints.</h3>
            <p className="panelCopy">
              We return with questions, technical direction, and a realistic path
              forward instead of a generic sales reply.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

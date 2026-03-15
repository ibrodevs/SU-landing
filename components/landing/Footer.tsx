import Image from "next/image";
import { IconGitHub, IconLinkedIn, IconMail, IconX } from "@/components/icons";
import { SocialLink } from "@/components/landing/SectionPrimitives";

const footerLinks = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Tech", "#tech"],
  ["Portfolio", "#portfolio"],
  ["Contact", "#contact"]
] as const;

export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="container">
        <div className="footerGrid">
          <div>
            <div className="footerBrand">
              <span aria-hidden="true" className="brandMark">
                <Image
                  src="/Logo_SU.png"
                  alt=""
                  width={30}
                  height={30}
                  className="brandLogo"
                />
              </span>
              <span className="brandWordmark">
                <strong>SU Solutions</strong>
                <span>Modern technology delivery</span>
              </span>
            </div>

            <p className="footerText">
              We build serious digital products for teams that care about visual quality,
              architectural clarity, and releases that feel controlled instead of rushed.
            </p>
          </div>

          <div className="footerStack">
            <p className="footerHeading">Navigate</p>
            <div className="footerLinks">
              {footerLinks.map(([label, href]) => (
                <a key={href} href={href} className="footerLink">
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className="footerStack">
            <p className="footerHeading">Connect</p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <SocialLink ariaLabel="LinkedIn">
                <IconLinkedIn />
              </SocialLink>
              <SocialLink ariaLabel="GitHub">
                <IconGitHub />
              </SocialLink>
              <SocialLink ariaLabel="X">
                <IconX />
              </SocialLink>
              <SocialLink ariaLabel="Email" href="mailto:hello@su-solutions.com">
                <IconMail />
              </SocialLink>
            </div>
            <a href="mailto:hello@su-solutions.com" className="footerLink">
              hello@su-solutions.com
            </a>
            <div className="footerMeta">Remote-first. Worldwide delivery.</div>
            <div className="footerMeta">
              © {new Date().getFullYear()} SU Solutions. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

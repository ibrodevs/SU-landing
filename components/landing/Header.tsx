import Image from "next/image";
import Link from "next/link";
import { IconArrowRight } from "@/components/icons";

const navItems = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Tech", "#tech"],
  ["Process", "#process"],
  ["Portfolio", "#portfolio"],
  ["Contact", "#contact"]
] as const;

export default function Header() {
  return (
    <header className="glassHeader">
      <div className="container">
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
            <span className="brandWordmark">
              <strong>SU Solutions</strong>
              <span>Technology delivery partner</span>
            </span>
          </Link>

          <nav aria-label="Primary" className="glassNav">
            <div className="navTrack">
              {navItems.map(([label, href]) => (
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
    </header>
  );
}

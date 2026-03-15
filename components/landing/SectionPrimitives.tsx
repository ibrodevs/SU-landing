import type { ReactNode } from "react";
import { IconCheck } from "@/components/icons";

export function ChecklistItem({
  children,
  size
}: {
  children: ReactNode;
  size: number;
}) {
  const iconSize = Math.max(12, Math.round(size * 0.52));

  return (
    <div className="checkItem">
      <span
        aria-hidden="true"
        className="checkIcon"
        style={{ width: size, height: size, minWidth: size }}
      >
        <IconCheck width={iconSize} height={iconSize} />
      </span>
      <span>{children}</span>
    </div>
  );
}

export function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="statCard">
      <span className="statValue">{value}</span>
      <span className="statLabel">{label}</span>
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return <span className="tag">{children}</span>;
}

export function ContactIcon({ children }: { children: ReactNode }) {
  return (
    <span aria-hidden="true" className="contactIcon">
      {children}
    </span>
  );
}

export function SocialLink({
  ariaLabel,
  children,
  href = "#"
}: {
  ariaLabel: string;
  children: ReactNode;
  href?: string;
}) {
  return (
    <a aria-label={ariaLabel} href={href} className="socialLink">
      {children}
    </a>
  );
}

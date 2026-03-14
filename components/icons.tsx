import * as React from "react";

export type IconProps = React.SVGProps<SVGSVGElement> & { title?: string };

function Svg({
  children,
  title,
  ...props
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : "presentation"}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M5 12h12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function IconSpark(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M12 2l1.6 5.2L19 9l-5.4 1.7L12 16l-1.6-5.3L5 9l5.4-1.8L12 2z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M20 7L10.2 16.8 4 10.6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function IconGlobe(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M3.8 12h16.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 3.5c2.6 2.6 2.6 14.4 0 17"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function IconMobile(props: IconProps) {
  return (
    <Svg {...props}>
      <rect
        x="7"
        y="3.5"
        width="10"
        height="17"
        rx="2.2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M10 17.2h4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function IconBackend(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M6.5 7.2c0-1.5 2.5-2.7 5.5-2.7s5.5 1.2 5.5 2.7-2.5 2.7-5.5 2.7-5.5-1.2-5.5-2.7z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M6.5 7.2v9.6c0 1.5 2.5 2.7 5.5 2.7s5.5-1.2 5.5-2.7V7.2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M6.5 12c0 1.5 2.5 2.7 5.5 2.7s5.5-1.2 5.5-2.7"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </Svg>
  );
}

export function IconUx(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M4.5 6.5h15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M4.5 12h10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M4.5 17.5h12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M17.5 10.8l2 2-4.2 4.2-2.3.3.3-2.3 4.2-4.2z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function IconMail(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M5 7.5h14c.8 0 1.5.7 1.5 1.5v8c0 .8-.7 1.5-1.5 1.5H5c-.8 0-1.5-.7-1.5-1.5V9c0-.8.7-1.5 1.5-1.5z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M5.5 9l6.5 5 6.5-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function IconPhone(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M8.2 4.6l2.2-.8c.7-.3 1.4 0 1.7.6l1.2 2.5c.3.6.1 1.3-.4 1.7l-1.4 1c.9 2 2.5 3.6 4.5 4.5l1-1.4c.4-.5 1.1-.7 1.7-.4l2.5 1.2c.6.3.9 1 .6 1.7l-.8 2.2c-.2.6-.8 1-1.5 1-8.6 0-15.6-7-15.6-15.6 0-.7.4-1.3 1-1.5z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function IconLinkedIn(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M6.5 9.3V18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M6.5 6.5a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z"
        fill="currentColor"
      />
      <path
        d="M10.2 18v-5.1c0-1.6 1-2.7 2.6-2.7 1.6 0 2.5 1.1 2.5 2.7V18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.2 11v-1.7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function IconGitHub(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M12 2.8c-5.1 0-9.2 4.1-9.2 9.2 0 4.1 2.7 7.6 6.5 8.8.5.1.7-.2.7-.5v-1.9c-2.6.6-3.2-1.1-3.2-1.1-.4-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.3-2.1-.2-4.3-1-4.3-4.7 0-1 .4-1.9 1.1-2.6-.1-.3-.5-1.2.1-2.6 0 0 .9-.3 2.8 1.1.8-.2 1.6-.3 2.4-.3.8 0 1.6.1 2.4.3 1.9-1.4 2.8-1.1 2.8-1.1.6 1.4.2 2.3.1 2.6.7.7 1.1 1.6 1.1 2.6 0 3.7-2.2 4.5-4.3 4.7.4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5 3.8-1.2 6.5-4.7 6.5-8.8 0-5.1-4.1-9.2-9.2-9.2z"
        fill="currentColor"
      />
    </Svg>
  );
}

export function IconX(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M18.4 4.6h-2.1l-4.1 4.7-3.2-4.7H5.4l5.3 7.6-5.2 6.2h2.1l4.1-4.8 3.3 4.8h3.6l-5.4-7.7 5.2-6.1z"
        fill="currentColor"
      />
    </Svg>
  );
}

function BadgeIcon({
  label,
  accent,
  ...props
}: {
  label: string;
  accent: "a" | "b" | "c";
} & Omit<React.SVGProps<SVGSVGElement>, "children">) {
  const accents = {
    a: ["rgba(37,99,235,0.32)", "rgba(37,99,235,0.10)"],
    b: ["rgba(59,130,246,0.26)", "rgba(59,130,246,0.08)"],
    c: ["rgba(29,78,216,0.30)", "rgba(29,78,216,0.10)"]
  } as const;
  const [s1, s2] = accents[accent];
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <defs>
        <linearGradient id={`b-${label}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={s1} />
          <stop offset="1" stopColor={s2} />
        </linearGradient>
      </defs>
      <path
        d="M12 2.6l7.9 4.6v9.6L12 21.4l-7.9-4.6V7.2L12 2.6z"
        fill={`url(#b-${label})`}
        stroke="rgba(37,99,235,0.38)"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M7.3 12h9.4"
        stroke="rgba(11,42,111,0.72)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M12 7.3v9.4"
        stroke="rgba(11,42,111,0.72)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconPython(props: IconProps) {
  return <BadgeIcon label="py" accent="a" {...props} />;
}
export function IconDjango(props: IconProps) {
  return <BadgeIcon label="dj" accent="b" {...props} />;
}
export function IconFastapi(props: IconProps) {
  return <BadgeIcon label="fa" accent="c" {...props} />;
}
export function IconAngular(props: IconProps) {
  return <BadgeIcon label="ng" accent="b" {...props} />;
}
export function IconReact(props: IconProps) {
  return <BadgeIcon label="re" accent="a" {...props} />;
}
export function IconPostgres(props: IconProps) {
  return <BadgeIcon label="pg" accent="c" {...props} />;
}
export function IconAws(props: IconProps) {
  return <BadgeIcon label="aw" accent="a" {...props} />;
}
export function IconDocker(props: IconProps) {
  return <BadgeIcon label="dk" accent="b" {...props} />;
}

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

export function IconPython(props: IconProps) {
  return (
    <Svg {...props} viewBox="0 0 24 24">
      <path
        d="M11.9 2.6c-4.5 0-4.2 2-4.2 2V7h4.2v.7H6c-2.2 0-4 1.3-4 3.9 0 2.5 1.5 4 4 4h2.4V13c0-1.8 1.5-3.4 3.5-3.4h5.8c1.6 0 3-1.3 3-3V4.9c0-1.8-1.5-3.1-3-3.1h-5.8z"
        fill="#3776AB"
      />
      <circle cx="9.3" cy="5.1" r="1" fill="#fff" />
      <path
        d="M12.1 21.4c4.5 0 4.2-2 4.2-2V17h-4.2v-.7H18c2.2 0 4-1.3 4-3.9 0-2.5-1.5-4-4-4h-2.4V11c0 1.8-1.5 3.4-3.5 3.4H6.3c-1.6 0-3 1.3-3 3v1.7c0 1.8 1.5 3.1 3 3.1h5.8z"
        fill="#FFD43B"
      />
      <circle cx="14.7" cy="18.9" r="1" fill="#fff" />
    </Svg>
  );
}
export function IconDjango(props: IconProps) {
  return (
    <Svg {...props} viewBox="0 0 24 24">
      <path
        d="M5.5 5.1h3.3v10.4c0 2.2-1.1 3.4-3.1 3.4-.8 0-1.4-.1-1.9-.3v-2.7c.3.1.6.1 1 .1.6 0 .7-.4.7-1.2V5.1z"
        fill="#092E20"
      />
      <path
        d="M10.9 5.1h3.3v2.7h-3.3V5.1zm0 3.8h3.3v9.7h-3.3V8.9z"
        fill="#092E20"
      />
      <path
        d="M20.2 8.9h-3.3v5c0 1.4.8 2 1.8 2 .5 0 1-.1 1.5-.3v2.7c-.7.3-1.6.4-2.5.4-2.4 0-4.1-1.2-4.1-4.1V5.1h3.3v3.8h3.3v0z"
        fill="#092E20"
      />
    </Svg>
  );
}
export function IconFastapi(props: IconProps) {
  return (
    <Svg {...props} viewBox="0 0 24 24">
      <path d="M12.1 2.5L4.4 10.2h4.5v11.3h6.3v-7h4.4L12.1 2.5z" fill="#009688" />
      <path d="M11.8 9.2h2.7v12.3h-2.7V9.2z" fill="#fff" opacity="0.9" />
    </Svg>
  );
}
export function IconAngular(props: IconProps) {
  return (
    <Svg {...props} viewBox="0 0 24 24">
      <path d="M12 2.2l8 2.9-1.2 10.6L12 21.8l-6.8-6.1L4 5.1l8-2.9z" fill="#DD0031" />
      <path d="M12 2.2v19.6l6.8-6.1L20 5.1 12 2.2z" fill="#C3002F" />
      <path
        d="M12 5.6L7.1 16.5h1.8l1-2.5h4.1l1 2.5h1.8L12 5.6zm1.3 6.9h-2.6L12 9.4l1.3 3.1z"
        fill="#fff"
      />
    </Svg>
  );
}
export function IconReact(props: IconProps) {
  return (
    <Svg {...props} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="1.9" fill="#61DAFB" />
      <ellipse
        cx="12"
        cy="12"
        rx="8"
        ry="3.2"
        stroke="#61DAFB"
        strokeWidth="1.5"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="8"
        ry="3.2"
        transform="rotate(60 12 12)"
        stroke="#61DAFB"
        strokeWidth="1.5"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="8"
        ry="3.2"
        transform="rotate(120 12 12)"
        stroke="#61DAFB"
        strokeWidth="1.5"
      />
    </Svg>
  );
}
export function IconPostgres(props: IconProps) {
  return (
    <Svg {...props} viewBox="0 0 24 24">
      <path
        d="M8.3 15.9c-.9.1-1.8-.3-2.4-1-.8-.9-1.1-2.1-1-3.3.1-3 2.1-5.8 5.2-6.7 1.3-.3 2.8-.1 3.9.8 1.7 1.4 3.5 4 3.5 7.2 0 .8-.2 1.5-.6 2.2.8.2 1.5.6 2 1.3-.7.5-1.4.8-2.3 1-.3.8-1 1.6-1.9 2.3-.5-.7-.7-1.4-.8-2.1-.7.2-1.5.3-2.3.2-.4 1.1-1.1 2.2-2.1 3.1-.7-.8-1.1-1.6-1.2-2.4z"
        fill="#336791"
      />
      <circle cx="9.2" cy="9.6" r="0.9" fill="#fff" />
      <circle cx="13.4" cy="9" r="0.85" fill="#fff" />
      <path
        d="M8.5 12.8c1.8.6 4.1.4 5.8-.6"
        stroke="#fff"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </Svg>
  );
}
export function IconAws(props: IconProps) {
  return (
    <Svg {...props} viewBox="0 0 24 24">
      <path
        d="M6.2 13.8l1.7-4.5h1.8l1.7 4.5h-1.5l-.3-1H8.2l-.3 1H6.2zm2.3-2h1l-.5-1.6-.5 1.6z"
        fill="#232F3E"
      />
      <path
        d="M12.2 13.8V9.3h1.4v.6c.4-.5 1-.7 1.6-.7 1.3 0 2.2 1 2.2 2.3s-.9 2.3-2.3 2.3c-.6 0-1-.2-1.4-.5v2.2h-1.5v-1.7zm2.5-1.2c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1z"
        fill="#232F3E"
      />
      <path
        d="M4.2 16.8c4.2 2.2 10.5 2.5 15 .6.3-.1.6.2.3.4-1.5 1.3-4.8 2.8-8.7 2.8-2.8 0-5.4-.7-7.2-2-.3-.2 0-.6.6-.4z"
        fill="#FF9900"
      />
      <path
        d="M18.3 15.9c.5-.1 1.5-.2 1.7.1.2.4-.2 1.3-.4 1.8-.1.2.1.3.3.2 1.2-1 1.5-3 .9-3.7-.6-.7-2.4-.5-3.3-.1-.3.1-.2.5.1.4.2-.1.4-.1.7-.1z"
        fill="#FF9900"
      />
    </Svg>
  );
}
export function IconDocker(props: IconProps) {
  return (
    <Svg {...props} viewBox="0 0 24 24">
      <path
        d="M7.1 10.1h2v2h-2v-2zm2.4 0h2v2h-2v-2zm2.4 0h2v2h-2v-2zm-2.4-2.4h2v2h-2v-2zm2.4 0h2v2h-2v-2zm-7.2 4.8h10.8c.2 2.8-1.1 5-4.7 5-4 0-6.2-1.8-6.1-5z"
        fill="#2496ED"
      />
      <path
        d="M16.6 12.3c.1-.7.7-1.6 1.4-2 .9.6 1.4 1.5 1.5 2.5.8.1 1.6-.2 2.2-.7.3 2.4-1.1 4.1-3.6 4.1-1.3 0-2.2-.4-2.9-1.1.8-.6 1.3-1.6 1.4-2.8z"
        fill="#2496ED"
      />
      <path
        d="M8 17.5c1.2.6 2.6.8 4 .8 3 0 5.4-1.2 6.6-3.8-.8.6-1.8.9-3 .9-2.1 0-3.7-1-4.7-2.8H4.4c0 2 1.1 3.8 3.6 4.9z"
        fill="#0B72B9"
        opacity="0.18"
      />
    </Svg>
  );
}

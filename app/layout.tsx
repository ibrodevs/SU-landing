import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SU Solutions | Software Development Company",
  description:
    "Modern software development studio building web, mobile, and backend systems with a focus on clarity, quality, and delivery.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "SU Solutions | Software Development Company",
    description:
      "Web, mobile, and backend development for teams that value predictable delivery and clean engineering.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


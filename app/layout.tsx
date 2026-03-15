import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SU Solutions | Serious Technology Delivery",
  description:
    "Modern web, mobile, and backend systems for teams that need clean architecture, sharp design, and predictable releases.",
  openGraph: {
    title: "SU Solutions | Serious Technology Delivery",
    description:
      "Technology delivery partner for modern product teams building web, mobile, and backend platforms.",
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

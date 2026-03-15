import {
  AboutSection,
  ContactSection,
  Footer,
  Header,
  Hero,
  PortfolioSection,
  ProcessSection,
  ServicesSection,
  TechSection,
  TestimonialsSection
} from "@/components/landing";

export default function Page() {
  return (
    <main className="pageRoot">
      <Header />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <TechSection />
      <ProcessSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

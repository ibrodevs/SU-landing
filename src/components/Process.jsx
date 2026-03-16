import { processSteps } from "../data/siteData";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

function Process() {
  return (
    <section id="process" className="section-shell bg-brand-mist/60 dark:bg-slate-900/40">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Workflow"
          title="How We Work"
          description="A transparent and structured product lifecycle that reduces risk and keeps every stage aligned with business goals."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <Reveal key={step} delay={index * 80}>
              <div className="glass-card relative h-full border-blue-100/80 p-6 dark:border-blue-500/20">
                <div className="absolute right-5 top-5 text-5xl font-extrabold tracking-tight text-blue-100 dark:text-blue-900/60">
                  {(index + 1).toString().padStart(2, "0")}
                </div>
                <div className="relative">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-blue-300 bg-white text-sm font-bold text-blue-700 dark:border-blue-500/50 dark:bg-slate-800 dark:text-blue-300">
                    {index + 1}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                    {step}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
                    We execute {step.toLowerCase()} with clear deliverables, validation,
                    and stakeholder alignment to keep momentum and quality high.
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;

import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/siteData";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

function Projects() {
  return (
    <section id="projects" className="section-shell bg-brand-mist/60 dark:bg-slate-900/40">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Portfolio"
          title="Our Projects"
          description="Selected product engagements demonstrating scalable architecture, polished interfaces, and business-first execution."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 80}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-transparent bg-gradient-to-r from-blue-500/30 to-indigo-500/30 p-[1px] transition-transform duration-300 hover:-translate-y-1.5">
                <div className="glass-card h-full border-white/70 p-6 dark:border-slate-700/70 sm:p-7">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                      {project.name}
                    </h3>
                    <span className="mt-1 rounded-lg border border-blue-200 bg-white/90 p-2 text-blue-700 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:border-blue-500/40 dark:bg-slate-800 dark:text-blue-300">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span key={item} className="tech-chip text-xs sm:text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

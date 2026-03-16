import Reveal from "./Reveal";

function SectionHeading({ eyebrow, title, description }) {
  return (
    <Reveal>
      <div>
        <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300">
          {eyebrow}
        </span>
        <h2 className="section-title mt-5">{title}</h2>
        {description && <p className="section-lead">{description}</p>}
      </div>
    </Reveal>
  );
}

export default SectionHeading;

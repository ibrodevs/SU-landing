import Reveal from "./Reveal";

function SectionHeading({ eyebrow, title, description }) {
  return (
    <Reveal>
      <div>
        <span className="inline-flex items-center rounded-full border border-blue-200/80 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 dark:border-blue-500/40 dark:bg-blue-900/30 dark:text-blue-300">
          {eyebrow}
        </span>
        <h2 className="section-title mt-5">{title}</h2>
        {description && <p className="section-lead">{description}</p>}
      </div>
    </Reveal>
  );
}

export default SectionHeading;

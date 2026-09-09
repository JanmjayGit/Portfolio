export default function CaseStudySection({ id, title, children }) {
  return (
    <section aria-labelledby={id} className="mt-12">
      <h2 id={id} className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
        {title}
      </h2>
      <div className="mt-3 text-muted">{children}</div>
    </section>
  );
}

import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function CaseStudyPreview() {
  const featured = projects[0];
  if (!featured) {
    return null;
  }

  return (
    <aside className="px-4 md:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 border border-line bg-surface p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-accent">Featured case study</p>
          <p className="mt-1 text-lg font-semibold">{featured.title}</p>
          <p className="mt-1 max-w-xl text-sm text-muted">{featured.outcome}</p>
        </div>
        <Link
          to={`/projects/${featured.slug}`}
          className="shrink-0 border border-accent px-4 py-2 text-sm text-accent hover:bg-accent hover:text-bg"
        >
          Read the write-up
        </Link>
      </div>
    </aside>
  );
}

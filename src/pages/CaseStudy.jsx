import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import Seo from "../components/Seo";
import CaseStudySection from "../components/CaseStudySection";
import { projects } from "../data/projects";
import { profile } from "../data/profile";

export default function CaseStudy() {
  const { slug } = useParams();
  const project = projects.find((entry) => entry.slug === slug);

  if (!project) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="text-3xl font-semibold">Case study not found</h1>
        <p className="mt-3 text-muted">That slug does not match a project.</p>
        <Link to="/" className="mt-6 inline-block text-accent">
          Back home
        </Link>
      </div>
    );
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:px-6">
      <Seo
        title={`${project.title} case study`}
        description={project.description}
        path={`/projects/${project.slug}`}
        image={project.image}
      />

      <Link to="/#projects" className="inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-accent">
        <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2} />
        All projects
      </Link>

      <p className="mt-6 font-mono text-xs uppercase tracking-widest text-accent">{project.subtitle}</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">{project.title}</h1>
      <p className="mt-4 text-lg text-muted">{project.description}</p>

      <img
        src={project.image}
        alt={`${project.title} interface preview`}
        width={1280}
        height={720}
        className="mt-8 aspect-video w-full object-cover"
      />

      <CaseStudySection id="problem" title="Problem & user context">
        <p className="leading-relaxed">{project.problem}</p>
      </CaseStudySection>

      <CaseStudySection id="constraints" title="Constraints & tradeoffs">
        <p className="leading-relaxed">{project.constraints}</p>
      </CaseStudySection>

      <CaseStudySection id="architecture" title="Architecture">
        <p className="leading-relaxed">{project.architecture}</p>
        <svg
          viewBox="0 0 640 220"
          role="img"
          aria-label={`Architecture for ${project.title}: client, API, and data store`}
          className="mt-6 w-full text-accent"
        >
          <rect x="20" y="70" width="160" height="80" fill="none" stroke="currentColor" />
          <text x="100" y="116" textAnchor="middle" fill="#e8eefc" fontSize="14">
            React client
          </text>
          <rect x="240" y="70" width="160" height="80" fill="none" stroke="currentColor" />
          <text x="320" y="116" textAnchor="middle" fill="#e8eefc" fontSize="14">
            Spring Boot
          </text>
          <rect x="460" y="70" width="160" height="80" fill="none" stroke="currentColor" />
          <text x="540" y="116" textAnchor="middle" fill="#e8eefc" fontSize="14">
            Data store
          </text>
          <line x1="180" y1="110" x2="240" y2="110" stroke="currentColor" />
          <line x1="400" y1="110" x2="460" y2="110" stroke="currentColor" />
        </svg>
      </CaseStudySection>

      <CaseStudySection id="ui" title="Screenshots / UI states">
        <div className="grid gap-3 sm:grid-cols-2">
          <img
            src={project.image}
            alt={`${project.title} primary view`}
            width={1280}
            height={720}
            loading="lazy"
            className="aspect-video w-full object-cover"
          />
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex aspect-video items-center justify-center border border-dashed border-line text-sm text-accent"
          >
            Open live UI
          </a>
        </div>
      </CaseStudySection>

      <CaseStudySection id="results" title="Results & lessons">
        <ul className="list-disc space-y-2 pl-5">
          {project.results.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-4 leading-relaxed">{project.lessons}</p>
      </CaseStudySection>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-line px-4 py-2 text-sm hover:border-accent hover:text-accent"
        >
          <Github className="h-4 w-4" strokeWidth={2} />
          GitHub
        </a>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-accent px-4 py-2 text-sm text-bg"
        >
          <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          Live demo
        </a>
      </div>

      <p className="mt-12 font-mono text-xs text-muted">
        Written by {profile.name}
      </p>
    </article>
  );
}

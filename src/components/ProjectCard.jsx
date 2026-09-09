import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const MotionArticle = motion.article;

export default function ProjectCard({
  title,
  description,
  image,
  tech = [],
  githubUrl,
  liveUrl,
  stars,
  outcome,
  slug,
}) {
  return (
    <MotionArticle
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      className="flex h-full flex-col overflow-hidden border border-line bg-surface"
    >
      <Link to={`/projects/${slug}`} className="block">
        <div className="aspect-video overflow-hidden bg-surface-2">
          <img
            src={image}
            alt={`${title} cover`}
            width={1280}
            height={720}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold">
            <Link to={`/projects/${slug}`} className="hover:text-accent">
              {title}
            </Link>
          </h3>
          {typeof stars === "number" ? (
            <span className="font-mono text-xs text-muted">{stars}★</span>
          ) : null}
        </div>
        <p className="text-sm leading-relaxed text-muted">{description}</p>
        {outcome ? <p className="mt-3 font-mono text-xs text-accent">{outcome}</p> : null}
        <ul className="mt-4 flex flex-wrap gap-2">
          {tech.map((item) => (
            <li key={item} className="border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-muted">
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex gap-3 pt-5">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-muted hover:text-accent"
          >
            <Github className="h-4 w-4" strokeWidth={2} />
            Code
          </a>
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-muted hover:text-accent"
          >
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            Live
          </a>
        </div>
      </div>
    </MotionArticle>
  );
}

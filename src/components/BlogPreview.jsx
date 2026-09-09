import { articles } from "../data/articles";

export default function BlogPreview() {
  if (!articles.length) {
    return null;
  }

  return (
    <section id="writing" aria-labelledby="writing-heading" className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">Writing</p>
        <h2 id="writing-heading" className="mt-3 text-3xl font-semibold sm:text-4xl">
          Notes from the work
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {articles.map((article) => (
            <article key={article.url} className="border border-line bg-surface p-5">
              <p className="font-mono text-xs text-muted">
                {article.date} · {article.readTime}
              </p>
              <h3 className="mt-2 text-lg font-semibold">{article.title}</h3>
              <p className="mt-2 text-sm text-muted">{article.excerpt}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm text-accent"
              >
                Read →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

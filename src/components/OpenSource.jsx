import { useEffect, useState } from "react";
import { ArrowUpRight, BookMarked, GitFork, Users } from "lucide-react";
import { profile } from "../data/profile";
import { contributions } from "../data/contributions";

export default function OpenSource() {
  const username = profile.social.githubHandle;
  const chartSrc = `https://ghchart.rshah.org/22d3ee/${username}`;
  const [stats, setStats] = useState(null);
  const [chartOk, setChartOk] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    fetch(`https://api.github.com/users/${username}`, {
      signal: controller.signal,
      headers: { Accept: "application/vnd.github+json" },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`GitHub ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setStats({
          repos: data.public_repos ?? 0,
          followers: data.followers ?? 0,
          following: data.following ?? 0,
          avatar: data.avatar_url,
          login: data.login,
        });
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          setStats(null);
        }
      });

    return () => controller.abort();
  }, [username]);

  return (
    <section id="open-source" aria-labelledby="oss-heading" className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">Open source</p>
        <h2 id="oss-heading" className="mt-3 text-3xl font-semibold sm:text-4xl">
          Public work
        </h2>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="border border-line bg-surface p-4">
            {stats ? (
              <div className="flex items-center gap-4 border border-line bg-bg p-4">
                <img
                  src={stats.avatar}
                  alt=""
                  width={56}
                  height={56}
                  className="h-14 w-14 object-cover"
                />
                <div>
                  <p className="font-mono text-xs text-accent">github.com/{stats.login}</p>
                  <p className="text-lg font-semibold">{profile.name}</p>
                </div>
              </div>
            ) : (
              <div className="border border-line bg-bg p-4 font-mono text-xs text-muted">
                Loading GitHub stats…
              </div>
            )}

            {stats ? (
              <dl className="mt-4 grid grid-cols-3 gap-3">
                <div className="border border-line bg-bg p-3">
                  <dt className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-muted">
                    <BookMarked className="h-3 w-3 text-accent" strokeWidth={2} />
                    Repos
                  </dt>
                  <dd className="mt-1 text-xl font-semibold text-fg">{stats.repos}</dd>
                </div>
                <div className="border border-line bg-bg p-3">
                  <dt className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-muted">
                    <Users className="h-3 w-3 text-accent" strokeWidth={2} />
                    Followers
                  </dt>
                  <dd className="mt-1 text-xl font-semibold text-fg">{stats.followers}</dd>
                </div>
                <div className="border border-line bg-bg p-3">
                  <dt className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-muted">
                    <GitFork className="h-3 w-3 text-accent" strokeWidth={2} />
                    Following
                  </dt>
                  <dd className="mt-1 text-xl font-semibold text-fg">{stats.following}</dd>
                </div>
              </dl>
            ) : null}

            {chartOk ? (
              <img
                src={chartSrc}
                alt={`${profile.name} GitHub contribution graph`}
                width={663}
                height={104}
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={() => setChartOk(false)}
                className="mt-4 h-auto w-full"
              />
            ) : null}
          </div>

          <div>
            <ul className="space-y-3">
              {contributions.map((item) => (
                <li key={item.title} className="border border-line bg-surface p-4">
                  <p className="font-mono text-xs text-accent">{item.repo}</p>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-start gap-2 text-sm hover:text-accent"
                  >
                    {item.title}
                    <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2} />
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex border border-accent px-4 py-2 text-sm text-accent hover:bg-accent hover:text-bg"
            >
              View GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

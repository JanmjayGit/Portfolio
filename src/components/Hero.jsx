import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import { profile } from "../data/profile";
import useTypewriter from "../hooks/useTypewriter";
import useWebGLEnabled from "../hooks/useWebGLEnabled";
import { fadeUp, stagger } from "../lib/motion";

const Scene3D = lazy(() => import("./Scene3D"));
const MotionDiv = motion.div;
const MotionP = motion.p;

const socials = [
  { href: profile.social.github, label: "GitHub", icon: Github },
  { href: profile.social.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: profile.social.twitter, label: "Twitter / X", icon: Twitter },
].filter((item) => item.href);

export default function Hero() {
  const webgl = useWebGLEnabled();
  const { text } = useTypewriter(profile.roles);

  return (
    <section id="home" aria-labelledby="hero-heading" className="relative isolate min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {webgl ? (
          <Suspense fallback={<div className="mesh-fallback h-full w-full" />}>
            <Scene3D />
          </Suspense>
        ) : (
          <div className="mesh-fallback h-full w-full" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-bg/20 via-bg/55 to-bg" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-24 md:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
        <MotionDiv variants={stagger} initial="hidden" animate="show">
          <MotionP variants={fadeUp} className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-accent">
            {profile.location}
          </MotionP>
          <motion.h1
            id="hero-heading"
            variants={fadeUp}
            className="text-4xl font-semibold tracking-tight text-fg sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m {profile.name}
          </motion.h1>
          <MotionP variants={fadeUp} className="mt-4 font-mono text-lg text-accent sm:text-xl">
            {text}
            <span className="ml-0.5 inline-block w-[0.55ch] animate-pulse bg-accent align-[-0.1em]">&nbsp;</span>
          </MotionP>
          <MotionP variants={fadeUp} className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.bio}
          </MotionP>

          <MotionDiv variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="bg-accent px-5 py-2.5 text-sm font-medium text-bg hover:bg-accent-dim"
            >
              View Projects
            </a>
            <a
              href={profile.resumePath}
              download={profile.resumeFileName}
              className="border border-line px-5 py-2.5 text-sm text-fg hover:border-accent hover:text-accent"
            >
              Download Resume
            </a>
          </MotionDiv>

          <MotionDiv variants={fadeUp} className="mt-8 flex items-center gap-3">
            {socials.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="border border-line p-2 text-muted hover:border-accent hover:text-accent"
                >
                  <Icon className="h-4 w-4" strokeWidth={2} />
                </a>
              );
            })}
          </MotionDiv>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="mx-auto w-full max-w-md [perspective:1200px]"
        >
          <div className="border border-line bg-surface/90 shadow-[0_20px_80px_rgb(34_211_238/0.08)] [transform:rotateY(-12deg)_rotateX(8deg)]">
            <div className="flex items-center gap-2 border-b border-line px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
              <span className="ml-2 font-mono text-[11px] text-muted">stack.js</span>
            </div>
            <pre className="overflow-x-auto p-4 font-mono text-[11px] leading-6 text-muted sm:text-xs">
              <code>
                {`const engineer = {
  name: "${profile.firstName}",
  basedIn: "Bengaluru",
  ui: ["React", "Next.js", "TypeScript"],
  api: ["Spring Boot", "GraphQL"],
};

deploy(engineer); // 2026 passout · OPEN_TO_WORK`}
              </code>
            </pre>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}

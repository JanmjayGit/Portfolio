import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { profile } from "../data/profile";
import { skills } from "../data/skills";
import { fadeUp, stagger, viewport } from "../lib/motion";

const MotionLi = motion.li;
const MotionP = motion.p;
const MotionDiv = motion.div;

function CountUp({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!inView) {
      return undefined;
    }

    const started = performance.now();
    const duration = 900;
    let frame = 0;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const tick = (now) => {
      const progress = reduced ? 1 : Math.min(1, (now - started) / duration);
      setShown(Math.round(value * progress));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {shown}
      {suffix}
    </span>
  );
}

export default function About() {
  const preview = [...skills.languages, ...skills.frontend, ...skills.backend].slice(0, 8);

  return (
    <section id="about" aria-labelledby="about-heading" className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-6xl">
        <MotionDiv variants={stagger} initial="hidden" whileInView="show" viewport={viewport}>
          <MotionP variants={fadeUp} className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            About
          </MotionP>
          <motion.h2 id="about-heading" variants={fadeUp} className="mt-3 text-3xl font-semibold sm:text-4xl">
            A builder who likes the whole stack
          </motion.h2>
          <p className="mt-4 inline-flex border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
            {profile.companyLabel}
          </p>
        </MotionDiv>

        <div className="mt-8 max-w-3xl space-y-4 text-muted">
          {profile.summary.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <motion.ul
          className="mt-10 flex flex-wrap gap-2"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {preview.map((skill) => (
            <MotionLi
              key={skill}
              variants={fadeUp}
              className="border border-line bg-surface px-3 py-1.5 font-mono text-xs text-fg"
            >
              {skill}
            </MotionLi>
          ))}
        </motion.ul>

        <dl className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {profile.stats.map((stat) => (
            <div key={stat.label} className="border border-line bg-surface px-5 py-6">
              <dt className="font-mono text-xs uppercase tracking-widest text-muted">{stat.label}</dt>
              <dd className="mt-2 text-3xl font-semibold text-accent">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-8 font-mono text-sm text-violet">// Fun fact: {profile.funFact}</p>
      </div>
    </section>
  );
}

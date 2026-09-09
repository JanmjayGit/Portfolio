import { motion } from "framer-motion";
import { experience } from "../data/experience";
import { fadeUp, viewport } from "../lib/motion";

const MotionLi = motion.li;

export default function ExperienceTimeline() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">Experience</p>
        <h2 id="experience-heading" className="mt-3 text-3xl font-semibold sm:text-4xl">
          Timeline
        </h2>

        <ol className="relative mt-12 space-y-8 border-l border-line pl-6 sm:pl-8">
          {experience.map((entry) => (
            <MotionLi
              key={`${entry.company}-${entry.role}`}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="relative"
            >
              <span className="absolute -left-[1.9rem] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg sm:-left-[2.15rem]" />
              <p className="font-mono text-xs text-accent">
                {entry.startDate} — {entry.endDate}
              </p>
              <h3 className="mt-1 text-lg font-semibold">
                {entry.role}
                <span className="text-muted"> · {entry.company}</span>
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{entry.description}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {entry.tech.map((item) => (
                  <li key={item} className="border border-line px-2 py-0.5 font-mono text-[10px] uppercase text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </MotionLi>
          ))}
        </ol>
      </div>
    </section>
  );
}

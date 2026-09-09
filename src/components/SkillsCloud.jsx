import { motion } from "framer-motion";
import { Bot, Sparkles, Wand2 } from "lucide-react";
import {
  FaAws,
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaReact,
} from "react-icons/fa";
import {
  SiGraphql,
  SiJira,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiRedis,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { skills } from "../data/skills";
import { fadeUp, stagger, viewport } from "../lib/motion";

const MotionLi = motion.li;

const icons = {
  Java: FaJava,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  SQL: SiPostgresql,
  HTML5: FaHtml5,
  React: FaReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  CSS3: FaCss3Alt,
  Vite: SiVite,
  "Spring Boot": SiSpringboot,
  "REST APIs": SiSpringboot,
  "GraphQL APIs": SiGraphql,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Redis: SiRedis,
  Docker: FaDocker,
  Git: FaGitAlt,
  GitHub: FaGithub,
  Postman: SiPostman,
  Jira: SiJira,
  "CI/CD": FaGithub,
  Vercel: SiVercel,
  AWS: FaAws,
  "AI-assisted tools": Sparkles,
  Claude: Bot,
  Cursor: Wand2,
  ChatGPT: Sparkles,
};

const groups = [
  { key: "languages", label: "Languages" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "devops", label: "DevOps" },
  { key: "ai", label: "AI & workflow" },
];

export default function SkillsCloud() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">Skills</p>
        <h2 id="skills-heading" className="mt-3 text-3xl font-semibold sm:text-4xl">
          Tools I actually ship with
        </h2>

        <div className="mt-10 space-y-10">
          {groups.map((group) => (
            <div key={group.key}>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">
                {group.label}
              </h3>
              <motion.ul
                className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
              >
                {skills[group.key].map((skill) => {
                  const Icon = icons[skill];
                  return (
                    <MotionLi key={skill} variants={fadeUp}>
                      <div className="group flex items-center gap-3 border border-line bg-surface px-4 py-3 transition-transform duration-200 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_8px_30px_rgb(34_211_238/0.12)]">
                        {Icon ? (
                          <Icon className="h-5 w-5 text-accent transition-transform duration-200 group-hover:-translate-y-0.5" />
                        ) : null}
                        <span className="text-sm">{skill}</span>
                      </div>
                    </MotionLi>
                  );
                })}
              </motion.ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

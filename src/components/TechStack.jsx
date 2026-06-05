import { motion } from 'framer-motion';
import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaRobot, FaServer } from "react-icons/fa";
import { SiSpringboot, SiTailwindcss, SiPostgresql, SiMongodb, SiJavascript, SiMysql, SiPostman, SiDocker, SiRedis } from "react-icons/si";

const TechStack = () => {
    const technologies = [
        { name: 'Java', icon: <FaJava className="w-16 h-16" />, color: '#f89820', rgb: '248,152,32' },
        { name: 'Spring Boot', icon: <SiSpringboot className="w-16 h-16" />, color: '#6db33f', rgb: '109,179,63' },
        { name: 'JavaScript', icon: <SiJavascript className="w-16 h-16" />, color: '#f7df1e', rgb: '247,223,30' },
        { name: 'React.js', icon: <FaReact className="w-16 h-16" />, color: '#61dafb', rgb: '97,218,251' },
        { name: 'HTML5', icon: <FaHtml5 className="w-16 h-16" />, color: '#e34f26', rgb: '227,79,38' },
        { name: 'CSS3', icon: <FaCss3Alt className="w-16 h-16" />, color: '#2965f1', rgb: '41,101,241' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-16 h-16" />, color: '#38bdf8', rgb: '56,189,248' },
        { name: 'MySQL', icon: <SiMysql className="w-16 h-16" />, color: '#4479a1', rgb: '68,121,161' },
        { name: 'PostgreSQL', icon: <SiPostgresql className="w-16 h-16" />, color: '#336791', rgb: '51,103,145' },
        { name: 'MongoDB', icon: <SiMongodb className="w-16 h-16" />, color: '#4db33d', rgb: '77,179,61' },
        { name: 'Git', icon: <FaGitAlt className="w-16 h-16" />, color: '#f05032', rgb: '240,80,50' },
        { name: 'GitHub', icon: <FaGithub className="w-16 h-16" />, color: '#e6edf3', rgb: '230,237,243' },
        { name: 'Postman', icon: <SiPostman className="w-16 h-16" />, color: '#ff6c37', rgb: '255,108,55' },
        { name: 'Docker', icon: <SiDocker className="w-16 h-16" />, color: '#2496ed', rgb: '36,150,237' },
        { name: 'Spring AI', icon: <FaRobot className="w-16 h-16" />, color: '#80ea6e', rgb: '128,234,110' },
        { name: 'Redis', icon: <SiRedis className="w-16 h-16" />, color: '#dc382d', rgb: '220,56,45' },
        { name: 'Microservices', icon: <FaServer className="w-16 h-16" />, color: '#a78bfa', rgb: '167,139,250' },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.07 },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 30, scale: 0.9 },
        show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 260, damping: 20 } },
    };

    return (
        <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-zinc-900/50">
            <style>{`
                .ts-card {
                    position: relative;
                    overflow: hidden;
                    transition: border-color 0.35s ease, box-shadow 0.35s ease, background 0.35s ease;
                    box-shadow:
                        0 2px 8px rgba(0,0,0,0.4),
                        inset 0 1px 0 rgba(255,255,255,0.06),
                        inset 0 -1px 0 rgba(0,0,0,0.25);
                }
                .ts-card::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    border-radius: inherit;
                    background: radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.07), transparent 65%);
                    pointer-events: none;
                    z-index: 0;
                }
                .ts-card::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    border-radius: inherit;
                    opacity: 0;
                    transition: opacity 0.35s ease;
                    pointer-events: none;
                    background: radial-gradient(ellipse at 50% 110%, var(--glow), transparent 65%);
                    z-index: 0;
                }
                .ts-card:hover::after { opacity: 1; }
                .ts-card:hover {
                    border-color: var(--accent) !important;
                    box-shadow:
                        0 20px 45px rgba(0,0,0,0.6),
                        0 0 0 1px var(--accent),
                        0 0 30px var(--glow),
                        inset 0 1px 0 rgba(255,255,255,0.08);
                }

                .ts-dot {
                    position: absolute;
                    top: 9px;
                    right: 9px;
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: var(--accent);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                    box-shadow: 0 0 8px var(--accent);
                    z-index: 1;
                }
                .ts-card:hover .ts-dot { opacity: 1; }

                .ts-icon-box {
                    width: 64px;
                    height: 64px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 15px;
                    background: linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02));
                    border: 1px solid rgba(255,255,255,0.08);
                    margin-bottom: 14px;
                    position: relative;
                    z-index: 1;
                    box-shadow:
                        0 4px 14px rgba(0,0,0,0.45),
                        inset 0 1px 0 rgba(255,255,255,0.12),
                        inset 0 -1px 0 rgba(0,0,0,0.35);
                    transition: background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
                }
                .ts-card:hover .ts-icon-box {
                    background: linear-gradient(145deg, rgba(var(--accent-rgb), 0.18), rgba(var(--accent-rgb), 0.05));
                    border-color: rgba(var(--accent-rgb), 0.35);
                    box-shadow:
                        0 6px 22px rgba(0,0,0,0.5),
                        0 0 14px rgba(var(--accent-rgb), 0.25),
                        inset 0 1px 0 rgba(255,255,255,0.15),
                        inset 0 -1px 0 rgba(0,0,0,0.25);
                }

                .ts-icon {
                    color: #4a4a5a;
                    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
                    transition: color 0.35s ease, filter 0.35s ease, transform 0.35s cubic-bezier(.23,1.2,.32,1);
                }
                .ts-card:hover .ts-icon {
                    color: var(--accent);
                    transform: scale(1.18) translateY(-2px);
                    filter: drop-shadow(0 4px 10px var(--glow));
                }

                .ts-name {
                    position: relative;
                    z-index: 1;
                    transition: color 0.3s ease;
                }
                .ts-card:hover .ts-name { color: #cbd5e1 !important; }
            `}</style>

            <div className="max-w-7xl w-full">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Tech Stack
                </motion.h2>

                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {technologies.map((tech) => (
                        <motion.div
                            key={tech.name}
                            variants={item}
                            className="ts-card flex flex-col items-center justify-center p-6 rounded-2xl cursor-pointer border border-transparent bg-white/5"
                            whileHover={{ scale: 1.05, y: -8 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                            style={{
                                '--accent': tech.color,
                                '--accent-rgb': tech.rgb,
                                '--glow': `rgba(${tech.rgb}, 0.22)`,
                            }}
                        >
                            <div className="ts-dot" />
                            <div className="ts-icon-box">
                                <div className="ts-icon">
                                    {tech.icon}
                                </div>
                            </div>
                            <p className="ts-name mt-1 text-slate-400 font-medium text-center text-sm">
                                {tech.name}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TechStack;
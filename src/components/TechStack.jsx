import { motion } from 'framer-motion';
import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiSpringboot, SiTailwindcss, SiPostgresql, SiMongodb, SiJavascript, SiMysql } from "react-icons/si";

const TechStack = () => {
    const technologies = [
        {
            name: 'Java',
            icon: <FaJava className="w-16 h-16" />,
            color: "hover:text-red-500"
        },
        {
            name: 'Spring Boot',
            icon: <SiSpringboot className="w-16 h-16" />,
            color: "hover:text-green-500"
        },
        {
            name: 'JavaScript',
            icon: <SiJavascript className="w-16 h-16" />,
            color: "hover:text-yellow-400"
        },
        {
            name: 'React.js',
            icon: <FaReact className="w-16 h-16" />,
            color: "hover:text-cyan-400"
        },
        {
            name: 'HTML5',
            icon: <FaHtml5 className="w-16 h-16" />,
            color: "hover:text-orange-500"
        },
        {
            name: 'CSS3',
            icon: <FaCss3Alt className="w-16 h-16" />,
            color: "hover:text-blue-500"
        },
        {
            name: 'Tailwind CSS',
            icon: <SiTailwindcss className="w-16 h-16" />,
            color: "hover:text-cyan-300"
        },
        {
            name: 'MySQL',
            icon: <SiMysql className="w-16 h-16" />,
            color: "hover:text-blue-400"
        },
        {
            name: 'PostgreSQL',
            icon: <SiPostgresql className="w-16 h-16" />,
            color: "hover:text-blue-300"
        },
        {
            name: 'MongoDB',
            icon: <SiMongodb className="w-16 h-16" />,
            color: "hover:text-green-500"
        },
        {
            name: 'Git',
            icon: <FaGitAlt className="w-16 h-16" />,
            color: "hover:text-orange-600"
        },
        {
            name: 'GitHub',
            icon: <FaGithub className="w-16 h-16" />,
            color: "hover:text-white"
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-zinc-900/50">
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
                            className="flex flex-col items-center justify-center p-6 rounded-lg group cursor-pointer border border-transparent hover:border-emerald-500/20 bg-white/5 hover:bg-white/10 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <div className={`text-slate-400 ${tech.color || 'group-hover:text-emerald-500'} transition-colors duration-300 drop-shadow-lg`}>
                                {tech.icon}
                            </div>
                            <p className="mt-4 text-slate-300 font-medium text-center">{tech.name}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TechStack;

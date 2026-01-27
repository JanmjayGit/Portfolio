import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'MoneyManager',
            description: 'Full Stack Financial Platform designed for mobile and desktop. Optimized APIs for income/expense tracking and data analysis. 30% performance improvement via code optimization.',
            tags: ['React.js', 'Spring Boot', 'PostgreSQL', 'REST API'],
            image: '/project1.png',
            github: '#',
            demo: 'https://money-manager-frontend-virid.vercel.app/',
        },
        {
            title: 'CloudShare',
            description: 'Full Stack Cloud Storage Platform with responsive UI, secure file metadata management using MongoDB, and integrated 3rd party APIs like Clerk (Auth) and Razorpay.',
            tags: ['React.js', 'Spring Boot', 'MongoDB', 'Webhooks'],
            image: '/project2.png',
            github: '#',
            demo: 'https://cloud-share-frontend-ashen.vercel.app/',
        },
        {
            title: 'Email Automation System',
            description: 'AI-powered email automation using Spring AI for intelligent response generation. Reduced processing time by 40%.',
            tags: ['React.js', 'Spring Boot', 'Spring AI', 'AI/ML'],
            image: '/project3.png',
            github: '#',
            demo: 'https://email-reply-fend.vercel.app/',
        },
        {
            title: 'Fitness Tracker',
            description: 'A responsive web application to track daily workouts and calorie intake. Built with vanilla JavaScript for dynamic interactions and local storage data persistence.',
            tags: ['HTML', 'CSS', 'JavaScript'],
            image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
            github: '#',
            demo: 'https://fitness-tracker-delta-eight.vercel.app/',
        },
        {
            title: 'Patient Medicine Appointment Tracking System',
            description: 'A digital health management platform designed to simplify medical care by enabling appointment scheduling, medication tracking with reminders, secure access to medical records, and seamless communication with healthcare providers—all in one centralized, user-friendly system.',
            tags: ['HTML', 'CSS', 'JavaScript', 'React.js'],
            image: '/project5.png',
            github: '#',
            demo: 'https://patient-medicine-appointment-tracki.vercel.app/',
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
            <div className="max-w-7xl w-full">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Featured Projects
                </motion.h2>

                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:border-emerald-500/50 transition-all duration-300"
                            whileHover={{ y: -8 }}
                        >
                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden">
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.4 }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60" />
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-emerald-500 mb-2">{project.title}</h3>
                                <p className="text-slate-300 text-sm mb-4 line-clamp-4">{project.description}</p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-3 py-1 text-xs bg-white/10 text-slate-300 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-4">
                                    <a
                                        href={project.github}
                                        className="flex items-center gap-2 text-slate-300 hover:text-emerald-500 transition-colors duration-300"
                                    >
                                        <Github className="w-4 h-4" />
                                        <span className="text-sm">Code</span>
                                    </a>
                                    <a
                                        href={project.demo}
                                        className="flex items-center gap-2 text-slate-300 hover:text-emerald-500 transition-colors duration-300"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        <span className="text-sm">Demo</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;

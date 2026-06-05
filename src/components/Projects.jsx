import { motion } from 'framer-motion';
import { ExternalLink, Github, icons } from 'lucide-react';
import {
    FaGlobe,
    FaCloud,
    FaWallet,
    FaRobot,
    FaHeartbeat,
    FaDumbbell
} from "react-icons/fa";

const Projects = () => {
    const projects = [
        {
            title: 'Smart Tourism Guide',
            subtitle: 'Full Stack · Travel',
            description: [
                'Comprehensive travel assistant with location-based features.',
                'Integrated interactive maps and tourism information system.',
                'Built with Spring Boot REST APIs and MySQL for data persistence.',
            ],
            tags: ['React.js', 'Spring Boot', 'MySQL', 'REST API'],
            period: '2026',
            icon: <FaGlobe className='text-green-500' />,
            github: '#',
            demo: 'https://vaygoapp.vercel.app/',
            side: 'left',
        },
        {
            title: 'CloudShare',
            subtitle: 'Full Stack · Cloud',
            description: [
                'Cloud Storage Platform with responsive UI and secure file management.',
                'Integrated Clerk for authentication and Razorpay for payments.',
                'Used MongoDB for file metadata and webhook event handling.',
            ],
            tags: ['React.js', 'Spring Boot', 'MongoDB', 'Webhooks'],
            period: '2025',
            icon: <FaCloud className='text-sky-500' />,
            github: '#',
            demo: 'https://cloud-share-frontend-ashen.vercel.app/',
            side: 'right',
        },
        {
            title: 'MoneyManager',
            subtitle: 'Full Stack · Finance',
            description: [
                'Full Stack Financial Platform optimized for mobile and desktop.',
                'Built RESTful APIs for income/expense tracking and data analysis.',
                'Achieved 30% performance improvement via code optimization.',
            ],
            tags: ['React.js', 'Spring Boot', 'PostgreSQL', 'REST API'],
            period: '2025',
            icon: <FaWallet className='text-orange-600' />,
            github: '#',
            demo: 'https://money-manager-frontend-virid.vercel.app/',
            side: 'left',
        },
        {
            title: 'Email Automation System',
            subtitle: 'AI/ML · Automation',
            description: [
                'AI-powered email automation using Spring AI for intelligent responses.',
                'Reduced email processing time by 40% through AI integration.',
                'Built end-to-end pipeline from inbox parsing to reply generation.',
            ],
            tags: ['React.js', 'Spring Boot', 'Spring AI', 'AI/ML'],
            period: '2024',
            icon: <FaRobot className='text-blue-500' />,
            github: '#',
            demo: 'https://email-reply-fend.vercel.app/',
            side: 'right',
        },
        {
            title: 'Patient Medicine Tracker',
            subtitle: 'Full Stack · Healthcare',
            description: [
                'Digital health platform for appointment scheduling and medication reminders.',
                'Secure access to medical records and doctor communication.',
                'Centralized system with intuitive and accessible UI.',
            ],
            tags: ['HTML', 'CSS', 'JavaScript', 'React.js'],
            period: '2024',
            icon: <FaHeartbeat className='text-red-500' />,
            github: '#',
            demo: 'https://patient-medicine-appointment-tracki.vercel.app/',
            side: 'left',
        },
        {
            title: 'Fitness Tracker',
            subtitle: 'Frontend · Health',
            description: [
                'Responsive web app to track daily workouts and calorie intake.',
                'Built with vanilla JavaScript for dynamic interactions.',
                'Used local storage for persistent data without a backend.',
            ],
            tags: ['HTML', 'CSS', 'JavaScript'],
            period: '2024',
            icon: <FaDumbbell className='text-blue-400' />,
            github: '#',
            demo: 'https://fitness-tracker-delta-eight.vercel.app/',
            side: 'right',
        },
    ];

    return (
        <>
            <style>{`
                .tl-section {
                    min-height: 100vh;
                    padding: 80px 24px 100px;
                    position: relative;
                }

                .tl-inner {
                    max-width: 1100px;
                    margin: 0 auto;
                    position: relative;
                }

                /* Center vertical line */
                .tl-line {
                    position: absolute;
                    left: 50%;
                    top: 0;
                    bottom: 0;
                    width: 1px;
                    transform: translateX(-50%);
                    background: linear-gradient(to bottom,
                        transparent 0%,
                        rgba(255,255,255,0.12) 8%,
                        rgba(255,255,255,0.12) 92%,
                        transparent 100%
                    );
                }

                .tl-items {
                    display: flex;
                    flex-direction: column;
                    gap: 80px;
                    padding: 20px 0;
                }

                /* Each row */
                .tl-row {
                    display: grid;
                    grid-template-columns: 1fr 64px 1fr;
                    align-items: center;
                    gap: 0;
                    position: relative;
                }

                /* Card */
                .tl-card {
                    background: rgba(255,255,255,0.04);
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 16px;
                    padding: 28px 30px;
                    position: relative;
                    overflow: hidden;
                    transition: border-color 0.3s ease, box-shadow 0.3s ease;
                    box-shadow:
                        inset 0 1px 0 rgba(255,255,255,0.06),
                        0 4px 20px rgba(0,0,0,0.3);
                }
                .tl-card::before {
                    content: '';
                    position: absolute; inset: 0;
                    border-radius: inherit;
                    background: radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.05), transparent 60%);
                    pointer-events: none;
                }
                .tl-card:hover {
                    border-color: rgba(16,185,129,0.4);
                    box-shadow:
                        0 0 0 1px rgba(16,185,129,0.2),
                        0 16px 40px rgba(0,0,0,0.4),
                        inset 0 1px 0 rgba(255,255,255,0.08);
                }

                /* Arrow connector on card side facing the timeline */
                .tl-card-left {
                    grid-column: 1;
                    text-align: left;
                }
                .tl-card-left::after {
                    content: '';
                    position: absolute;
                    right: -9px;
                    top: 50%;
                    transform: translateY(-50%);
                    border: 9px solid transparent;
                    border-left-color: rgba(255,255,255,0.08);
                }
                .tl-card-left:hover::after {
                    border-left-color: rgba(16,185,129,0.4);
                }

                .tl-card-right {
                    grid-column: 3;
                    text-align: left;
                }
                .tl-card-right::after {
                    content: '';
                    position: absolute;
                    left: -9px;
                    top: 50%;
                    transform: translateY(-50%);
                    border: 9px solid transparent;
                    border-right-color: rgba(255,255,255,0.08);
                }
                .tl-card-right:hover::after {
                    border-right-color: rgba(16,185,129,0.4);
                }

                /* Empty placeholder for opposite side */
                .tl-empty {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .tl-period {
                    font-size: 13px;
                    font-weight: 500;
                    color: #475569;
                    letter-spacing: 0.5px;
                }

                /* Center node */
                .tl-node-col {
                    grid-column: 2;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 2;
                }
                .tl-node {
                    width: 52px;
                    height: 52px;
                    border-radius: 50%;
                    background: #0f0f17;
                    border: 1px solid rgba(255,255,255,0.15);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 22px;
                    box-shadow:
                        0 0 0 4px rgba(10,10,20,1),
                        0 0 0 5px rgba(255,255,255,0.08),
                        inset 0 1px 0 rgba(255,255,255,0.1);
                    flex-shrink: 0;
                    transition: box-shadow 0.3s ease, border-color 0.3s ease;
                }
                .tl-row:hover .tl-node {
                    border-color: rgba(16,185,129,0.6);
                    box-shadow:
                        0 0 0 4px rgba(10,10,20,1),
                        0 0 0 5px rgba(16,185,129,0.3),
                        0 0 16px rgba(16,185,129,0.15);
                }

                /* Card content */
                .tl-title {
                    font-size: 20px;
                    font-weight: 700;
                    color: #f1f5f9;
                    margin-bottom: 4px;
                    line-height: 1.3;
                }
                .tl-subtitle {
                    font-size: 12px;
                    font-weight: 500;
                    color: #10b981;
                    letter-spacing: 0.5px;
                    margin-bottom: 16px;
                    text-transform: uppercase;
                }
                .tl-bullets {
                    list-style: none;
                    padding: 0; margin: 0 0 16px;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
                .tl-bullet {
                    font-size: 13px;
                    color: #94a3b8;
                    line-height: 1.55;
                    padding-left: 16px;
                    position: relative;
                }
                .tl-bullet::before {
                    content: '';
                    position: absolute;
                    left: 0; top: 8px;
                    width: 5px; height: 5px;
                    border-radius: 50%;
                    background: rgba(16,185,129,0.6);
                }
                .tl-tags {
                    display: flex; flex-wrap: wrap; gap: 6px;
                    margin-bottom: 16px;
                }
                .tl-tag {
                    font-size: 10px;
                    padding: 3px 9px;
                    border-radius: 5px;
                    background: rgba(255,255,255,0.06);
                    color: #64748b;
                    border: 1px solid rgba(255,255,255,0.08);
                    letter-spacing: 0.3px;
                }
                .tl-links {
                    display: flex; gap: 16px;
                    padding-top: 14px;
                    border-top: 1px solid rgba(255,255,255,0.06);
                }
                .tl-link {
                    display: flex; align-items: center; gap: 5px;
                    font-size: 12px;
                    color: #475569;
                    text-decoration: none;
                    transition: color 0.2s;
                }
                .tl-link:hover { color: #10b981; }

                /* Responsive */
                @media (max-width: 768px) {
                    .tl-line { left: 28px; }
                    .tl-row {
                        grid-template-columns: 56px 1fr;
                        grid-template-rows: auto;
                    }
                    .tl-node-col { grid-column: 1; grid-row: 1; }
                    .tl-card-left,
                    .tl-card-right {
                        grid-column: 2; grid-row: 1;
                    }
                    .tl-card-left::after,
                    .tl-card-right::after {
                        left: -9px; right: auto;
                        border-left-color: transparent;
                        border-right-color: rgba(255,255,255,0.08);
                    }
                    .tl-empty { display: none; }
                    .tl-period { display: none; }
                }
            `}</style>

            <section className="tl-section">
                <div className="tl-inner">

                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-white text-center mb-20"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Featured Projects
                    </motion.h2>

                    {/* Center line */}
                    <div className="tl-line" />

                    <div className="tl-items">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                className="tl-row"
                                initial={{ opacity: 0, y: 32 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{ duration: 0.55, delay: 0.05 }}
                            >
                                {/* Left side */}
                                {project.side === 'left' ? (
                                    <motion.div
                                        className="tl-card tl-card-left"
                                        whileHover={{ x: -4 }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                    >
                                        <div className="tl-title">{project.title}</div>
                                        <div className="tl-subtitle">{project.subtitle}</div>
                                        <ul className="tl-bullets">
                                            {project.description.map((point, i) => (
                                                <li key={i} className="tl-bullet">{point}</li>
                                            ))}
                                        </ul>
                                        <div className="tl-tags">
                                            {project.tags.map((tag, i) => (
                                                <span key={i} className="tl-tag">{tag}</span>
                                            ))}
                                        </div>
                                        <div className="tl-links">
                                            <a href={project.github} className="tl-link">
                                                <Github size={13} /> Code
                                            </a>
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="tl-link">
                                                <ExternalLink size={13} /> Live Demo
                                            </a>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <div className="tl-empty">
                                        <span className="tl-period">{project.period}</span>
                                    </div>
                                )}

                                {/* Center node */}
                                <div className="tl-node">
                                    <span className="text-2xl">
                                        {project.icon}
                                    </span>
                                </div>

                                {/* Right side */}
                                {project.side === 'right' ? (
                                    <motion.div
                                        className="tl-card tl-card-right"
                                        whileHover={{ x: 4 }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                    >
                                        <div className="tl-title">{project.title}</div>
                                        <div className="tl-subtitle">{project.subtitle}</div>
                                        <ul className="tl-bullets">
                                            {project.description.map((point, i) => (
                                                <li key={i} className="tl-bullet">{point}</li>
                                            ))}
                                        </ul>
                                        <div className="tl-tags">
                                            {project.tags.map((tag, i) => (
                                                <span key={i} className="tl-tag">{tag}</span>
                                            ))}
                                        </div>
                                        <div className="tl-links">
                                            <a href={project.github} className="tl-link">
                                                <Github size={13} /> Code
                                            </a>
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="tl-link">
                                                <ExternalLink size={13} /> Live Demo
                                            </a>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <div className="tl-empty">
                                        <span className="tl-period">{project.period}</span>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;
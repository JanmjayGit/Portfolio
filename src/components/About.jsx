import { motion } from 'framer-motion';
import { GraduationCap, MapPin, School } from 'lucide-react';

const About = () => {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
            <div className="max-w-7xl w-full">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    About Me
                </motion.h2>

                <motion.div
                    className="space-y-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <p className="text-lg text-slate-300 leading-relaxed text-center max-w-4xl mx-auto">
                        I'm a Computer Science & Engineering student from <span className="text-emerald-400">Chandigarh University, Punjab, India</span>, with a passion for building full-stack applications.
                        Skilled in Java, JavaScript, React.js, and Spring Boot, I enjoy creating scalable systems and
                        solving complex problems. I have experience with database management, version control, and cloud platforms.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                        {/* Education Card 1 */}
                        <motion.div
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-emerald-500/50 transition-colors duration-300"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <GraduationCap className="w-6 h-6 text-emerald-500" />
                                <h3 className="text-xl font-semibold text-white">University</h3>
                            </div>
                            <p className="text-slate-300 mb-2">
                                <span className="text-white font-medium">Chandigarh University</span>
                            </p>
                            <p className="text-slate-300 text-sm">B.E. Computer Science & Engineering</p>
                            <p className="text-slate-300 text-sm">CGPA: 7.38</p>
                            <p className="text-slate-300 text-sm mt-2">Punjab, India | 2022 - 2026</p>
                        </motion.div>

                        {/* Education Card 2 */}
                        <motion.div
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-emerald-500/50 transition-colors duration-300"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <School className="w-6 h-6 text-emerald-500" />
                                <h3 className="text-xl font-semibold text-white">12th Grade</h3>
                            </div>
                            <p className="text-slate-300 mb-2">
                                <span className="text-white font-medium">DAV Kapildev Public School</span>
                            </p>
                            <p className="text-slate-300 text-sm">Senior Secondary</p>
                            <p className="text-slate-300 text-sm">Score: 79.8%</p>
                            <p className="text-slate-300 text-sm mt-2">Ranchi, India | 2020 - 2022</p>
                        </motion.div>

                        {/* Education Card 3 */}
                        <motion.div
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-emerald-500/50 transition-colors duration-300"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <School className="w-6 h-6 text-emerald-500" />
                                <h3 className="text-xl font-semibold text-white">10th Grade</h3>
                            </div>
                            <p className="text-slate-300 mb-2">
                                <span className="text-white font-medium">ST Columbus Public School</span>
                            </p>
                            <p className="text-slate-300 text-sm">Secondary School</p>
                            <p className="text-slate-300 text-sm">Score: 88%</p>
                            <p className="text-slate-300 text-sm mt-2">Ranchi, India | 2019 - 2020</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;

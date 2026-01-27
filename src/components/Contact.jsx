import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, Phone, CheckCircle, AlertCircle, Code } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState(null); // null, 'submitting', 'success', 'error'

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: import.meta.env.VITE_WEB3_FORMS_ACCESS_KEY,
                    ...formData,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error("Error submitting form", error);
            setStatus('error');
        }
    };

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
                    Get In Touch
                </motion.h2>

                <motion.p
                    className="text-slate-300 text-center mb-12 text-lg"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    Open to full-stack development opportunities.
                </motion.p>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <div>
                            <label htmlFor="name" className="block text-slate-300 mb-2 text-sm">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors duration-300"
                                placeholder="Your name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-slate-300 mb-2 text-sm">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors duration-300"
                                placeholder="your.email@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-slate-300 mb-2 text-sm">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors duration-300 resize-none"
                                placeholder="Your message..."
                            />
                        </div>

                        <motion.button
                            type="submit"
                            disabled={status === 'submitting'}
                            className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-500/50 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {status === 'submitting' ? (
                                <span>Sending...</span>
                            ) : (
                                <>
                                    <Send className="w-4 h-4" />
                                    Send Message
                                </>
                            )}
                        </motion.button>

                        {status === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-2 text-emerald-500 text-sm justify-center"
                            >
                                <CheckCircle className="w-5 h-5" />
                                <span>Message sent successfully!</span>
                            </motion.div>
                        )}

                        {status === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-2 text-red-400 text-sm justify-center"
                            >
                                <AlertCircle className="w-5 h-5" />
                                <span>Something went wrong. Please try again.</span>
                            </motion.div>
                        )}
                    </motion.form>

                    {/* Social Links */}
                    <motion.div
                        className="flex flex-col justify-center space-y-6"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-white mb-6">Contact Info</h3>

                            <div className="space-y-4">
                                <motion.a
                                    href="tel:+919934824053"
                                    className="flex items-center gap-4 text-slate-300 hover:text-emerald-500 transition-colors duration-300 group"
                                    whileHover={{ x: 5 }}
                                >
                                    <div className="p-3 bg-white/5 rounded-lg group-hover:bg-emerald-500/10 transition-colors duration-300">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <span>+91-99XXXXXX53</span>
                                </motion.a>

                                <motion.a
                                    href="mailto:codewithjanmjay@gmail.com"
                                    className="flex items-center gap-4 text-slate-300 hover:text-emerald-500 transition-colors duration-300 group"
                                    whileHover={{ x: 5 }}
                                >
                                    <div className="p-3 bg-white/5 rounded-lg group-hover:bg-emerald-500/10 transition-colors duration-300">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <span>codewithjanmjay@gmail.com</span>
                                </motion.a>

                                <motion.a
                                    href="https://github.com/JanmjayGit"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 text-slate-300 hover:text-emerald-500 transition-colors duration-300 group"
                                    whileHover={{ x: 5 }}
                                >
                                    <div className="p-3 bg-white/5 rounded-lg group-hover:bg-emerald-500/10 transition-colors duration-300">
                                        <Github className="w-5 h-5" />
                                    </div>
                                    <span>GitHub</span>
                                </motion.a>

                                <motion.a
                                    href="https://www.linkedin.com/in/janmjay-prajapati-b7b96524a/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 text-slate-300 hover:text-emerald-500 transition-colors duration-300 group"
                                    whileHover={{ x: 5 }}
                                >
                                    <div className="p-3 bg-white/5 rounded-lg group-hover:bg-emerald-500/10 transition-colors duration-300">
                                        <Linkedin className="w-5 h-5" />
                                    </div>
                                    <span>LinkedIn</span>
                                </motion.a>

                                <motion.a
                                    href="https://leetcode.com/u/Janmjay_Prajapati/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 text-slate-300 hover:text-emerald-500 transition-colors duration-300 group"
                                    whileHover={{ x: 5 }}
                                >
                                    <div className="p-3 bg-white/5 rounded-lg group-hover:bg-emerald-500/10 transition-colors duration-300">
                                        <Code className="w-5 h-5" />
                                    </div>
                                    <span>LeetCode</span>
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

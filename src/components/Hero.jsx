import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const [text, setText] = useState('');
    const fullText = "Hello, I'm Janmjay Prajapati";
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        let index = 0;
        const typingInterval = setInterval(() => {
            if (index < fullText.length) {
                setText(fullText.substring(0, index + 1));
                index++;
            } else {
                clearInterval(typingInterval);
            }
        }, 100);

        return () => clearInterval(typingInterval);
    }, []);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);

        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <section className="min-h-screen flex items-center justify-center px-6">
            <div className="text-center max-w-7xl w-full mx-auto flex flex-col items-center">
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-emerald-500/10 border-2 border-emerald-500/50 mb-8 overflow-hidden flex items-center justify-center p-1"
                >
                    <img src="/profile.png" alt="Janmjay Prajapati" className="w-full h-full object-cover rounded-full" />
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl font-bold text-white mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {text}
                    <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity text-emerald-500`}>|</span>
                </motion.h1>
                <motion.p
                    className="text-xl md:text-2xl text-emerald-500 font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    Full Stack Developer
                </motion.p>
                <motion.p
                    className="mt-4 text-slate-400 max-w-lg mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    Building scalable full-stack web applications with React, Spring Boot, and Modern Tech.
                </motion.p>
            </div>
        </section>
    );
};

export default Hero;

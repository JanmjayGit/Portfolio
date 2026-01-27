import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: 'home' },
        { name: 'About', href: 'about' },
        { name: 'Tech Stack', href: 'tech-stack' },
        { name: 'Projects', href: 'projects' },
        { name: 'Contact', href: 'contact' },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-900/80 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a href="#home" className="text-2xl font-bold text-white font-mono">
                    JP<span className="text-emerald-500">.</span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-slate-300 hover:text-emerald-500 transition-colors duration-300 text-sm font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md text-sm font-medium transition-colors duration-300"
                    >
                        Hire Me
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white hover:text-emerald-500 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-zinc-900/95 backdrop-blur-md border-t border-white/10"
                    >
                        <div className="flex flex-col items-center gap-6 py-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-slate-300 hover:text-emerald-500 text-lg font-medium transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

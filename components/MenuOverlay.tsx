import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';

interface MenuOverlayProps {
    isOpen: boolean;
    onClose: () => void;
    links: { name: string; href: string }[];
}

export const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onClose, links }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-50 bg-primary flex flex-col"
                >
                    {/* Header in Overlay */}
                    <div className="flex justify-between items-center p-6 md:p-12 border-b border-white/10">
                        <span className="text-sm font-mono text-accent">NAVIGATION</span>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-white/10 rounded-full transition-colors group"
                        >
                            <X size={24} className="text-white group-hover:rotate-90 transition-transform duration-300" />
                        </button>
                    </div>

                    {/* Links */}
                    <div className="flex-1 flex flex-col justify-center px-6 md:px-24">
                        <nav className="flex flex-col space-y-4">
                            {links.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={onClose}
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: index * 0.1, duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                                    className="group flex items-center justify-between text-4xl md:text-7xl font-bold text-accent hover:text-white transition-colors tracking-tighter"
                                >
                                    <span>{link.name}</span>
                                    <ArrowUpRight size={32} className="opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-2 group-hover:-translate-y-2 lg:w-16 lg:h-16" />
                                </motion.a>
                            ))}
                        </nav>
                    </div>

                    {/* Footer in Overlay */}
                    <div className="p-6 md:p-12 border-t border-white/10 flex justify-between items-end">
                        <div className="text-accent text-sm font-mono">
                            <p>BENGALURU, IN</p>
                            <p>{new Date().getFullYear()}</p>
                        </div>
                        <div className="text-accent text-sm font-mono text-right">
                            <p>INSTAGRAM</p>
                            <p>TWITTER</p>
                            <p>LINKEDIN</p>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

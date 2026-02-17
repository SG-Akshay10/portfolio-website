import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer id="contact" className="bg-primary text-secondary pt-24 pb-8 px-4 md:px-8 relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col justify-between min-h-[50vh]">

                <div className="flex justify-between items-start">
                    <div className="max-w-md">
                        <h3 className="text-2xl font-bold mb-4">Let's build something together.</h3>
                        <a href="mailto:akshay10sg@gmail.com" className="text-xl underline decoration-1 underline-offset-4 hover:text-white/70 transition-colors">
                            akshay10sg@gmail.com
                        </a>
                    </div>

                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="p-4 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300"
                    >
                        <ArrowUp size={24} />
                    </button>
                </div>

                <div className="mt-24">
                    <h1 className="text-[12vw] font-bold leading-none tracking-tighter opacity-20 select-none">
                        AKSHAY S G
                    </h1>
                    <div className="flex justify-between items-end mt-8 border-t border-white/10 pt-8 text-sm font-mono text-accent">
                        <p>© {new Date().getFullYear()} — All Rights Reserved</p>
                        <div className="flex gap-4">
                            <span>TWITTER</span>
                            <span>LINKEDIN</span>
                            <span>GITHUB</span>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};

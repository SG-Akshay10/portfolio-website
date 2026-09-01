import React, { useState, useEffect } from 'react';
import { RESUME_DATA } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownRight, Sparkles, MapPin, FileText, Send } from 'lucide-react';
import profileImg from '../assest/images/DSC_0609.JPG';

export const Hero: React.FC = () => {
  const roles = [
    "AI & Machine Learning Engineer",
    "Associate Software Engineer",
    "RAG & Agentic AI Architect",
    "Full-Stack Developer"
  ];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col justify-center min-h-[75vh] relative pt-8 pb-12">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Column - Main Copy & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
        >
          {/* Status Badge Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white dark:bg-[#181C28] border border-slate-200 dark:border-[#222838] shadow-sm text-xs font-mono text-slate-700 dark:text-slate-300"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Available for new opportunities</span>
            <span className="text-slate-400 dark:text-slate-600">•</span>
            <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
              <MapPin size={12} className="text-accent" /> Bengaluru, IN
            </span>
          </motion.div>

          {/* Large Headline */}
          <div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.05]">
              Hello, I'm <br />
              <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-accent dark:from-white dark:via-slate-100 dark:to-accent-light bg-clip-text text-transparent">
                Akshay S G
              </span>
            </h1>
          </div>

          {/* Dynamic Role Switcher */}
          <div className="h-10 sm:h-12 overflow-hidden relative w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentRole}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-2 text-xl sm:text-2xl font-semibold text-accent"
              >
                <Sparkles size={20} className="text-accent" />
                <span>{roles[currentRole]}</span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Subheading / Description */}
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
            Associate Software Engineer specializing in building intelligent <span className="text-slate-900 dark:text-white font-semibold">Agentic Workflows</span>, <span className="text-slate-900 dark:text-white font-semibold">RAG Systems</span>, and high-performance Machine Learning pipelines. Transforming complex data into robust production applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-accent hover:bg-sky-600 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5"
            >
              Explore Work
              <ArrowDownRight size={18} />
            </a>

            {RESUME_DATA.links.resume && (
              <a
                href={RESUME_DATA.links.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white dark:bg-[#181C28] hover:bg-slate-100 dark:hover:bg-[#222838] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-[#222838] hover:border-slate-400 font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
              >
                <FileText size={16} className="text-accent" />
                Resume
              </a>
            )}

            <a
              href={`mailto:${RESUME_DATA.contact.email}`}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-transparent hover:bg-slate-200/50 dark:hover:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-transparent hover:border-slate-300 dark:hover:border-[#222838] text-sm font-medium transition-all"
            >
              <Send size={15} />
              Contact
            </a>
          </div>
        </motion.div>

        {/* Right Column - Portrait & Visual Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative group">
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent via-sky-400 to-blue-500 rounded-3xl blur-xl opacity-30 dark:opacity-40 group-hover:opacity-60 transition duration-500"></div>

            {/* Main Image Container Card */}
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl bg-white dark:bg-[#181C28] p-3 border border-slate-200 dark:border-[#222838] overflow-hidden shadow-2xl flex flex-col">
              <div className="w-full h-full rounded-xl overflow-hidden relative">
                <img
                  src={profileImg}
                  alt="Akshay S G"
                  className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 dark:from-[#0B0D13]/80 via-transparent to-transparent"></div>
              </div>

              {/* Floating Mini Overlay Tag */}
              <div className="absolute bottom-6 left-6 right-6 p-3 rounded-xl bg-white/90 dark:bg-[#121620]/90 backdrop-blur-md border border-slate-200 dark:border-[#222838] flex items-center justify-between shadow-lg">
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">Akshay S G</p>
                  <p className="text-[11px] font-mono text-accent">Digital.ai • Bengaluru</p>
                </div>
                <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
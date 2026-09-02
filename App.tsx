import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Menu, X, Github, Linkedin, Mail, Phone, FileText, Check, Copy, ArrowUpRight, Sparkles, Sun, Moon } from 'lucide-react';
import { RESUME_DATA } from './constants';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(RESUME_DATA.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const navLinks = [
    { name: 'About', href: '#hero' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <div className="min-h-screen bg-[#fbfcfd] dark:bg-[#080808] text-slate-900 dark:text-slate-200 selection:bg-accent selection:text-white relative overflow-x-hidden font-sans transition-colors duration-300">
      
      {/* Background Dot Texture */}
      <div className="fixed inset-0 bg-dot-grid opacity-30 dark:opacity-20 pointer-events-none z-0"></div>

      {/* Floating Header Navigation */}
      <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="bg-white/85 dark:bg-[#101010]/85 backdrop-blur-xl border border-slate-200 dark:border-[#303030] rounded-full px-5 py-2.5 flex items-center justify-between shadow-[0_8px_30px_rgba(15,23,42,.08)] dark:shadow-2xl dark:shadow-black/40 transition-colors duration-300">
          
          {/* Logo Name (Clean Name without ASG icon) */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-semibold text-base sm:text-lg tracking-[-0.04em] text-slate-900 dark:text-white cursor-pointer flex items-center font-display"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span>Akshay S G</span>
          </motion.div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 font-medium text-xs font-mono">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#2a2a2a]/60 px-3.5 py-2 rounded-full transition-all"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Right Controls: Theme Toggle & Resume Action */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Switcher Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-slate-100 dark:bg-[#181818] text-slate-700 dark:text-slate-300 hover:text-accent border border-slate-200 dark:border-[#2a2a2a] transition-colors shadow-sm"
              title={isDarkMode ? "Switch to Light Theme" : "Switch to Dark Theme"}
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun size={16} className="text-amber-400" /> : <Moon size={16} className="text-amber-600" />}
            </button>

            {RESUME_DATA.links.resume && (
              <a
                href={RESUME_DATA.links.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-accent hover:bg-accent-dark text-white text-xs font-semibold font-mono transition-all shadow-md shadow-accent/20"
              >
                <span>Resume</span>
                <ArrowUpRight size={14} />
              </a>
            )}
          </div>

          {/* Mobile Menu & Theme Controls */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-[#181818] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-[#2a2a2a]"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-violet-600" />}
            </button>

            <button
              onClick={toggleMenu}
              className="p-2 rounded-full text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#2a2a2a] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="md:hidden mt-2 bg-white/95 dark:bg-[#101010]/95 backdrop-blur-xl border border-slate-200 dark:border-[#2a2a2a] rounded-2xl p-4 shadow-2xl space-y-2 overflow-hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#2a2a2a] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              {RESUME_DATA.links.resume && (
                <a
                  href={RESUME_DATA.links.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 mt-2 rounded-xl text-sm font-bold text-white bg-accent text-center shadow-lg shadow-accent/20"
                >
                  <FileText size={16} />
                  Download Resume
                </a>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Floating Social Bar (Left Desktop) */}
      <div className="hidden lg:flex fixed left-6 bottom-10 flex-col items-center space-y-4 z-40">
        <SocialIcon href={`mailto:${RESUME_DATA.contact.email}`} icon={<Mail size={18} />} title="Email" />
        <SocialIcon href={RESUME_DATA.links.github} icon={<Github size={18} />} title="GitHub" />
        <SocialIcon href={RESUME_DATA.links.linkedin} icon={<Linkedin size={18} />} title="LinkedIn" />
        <SocialIcon href={`tel:${RESUME_DATA.contact.phone.replace(/\s/g, '')}`} icon={<Phone size={18} />} title="Phone" />
        <div className="w-[1px] h-16 bg-slate-300 dark:bg-[#2a2a2a] mt-2"></div>
      </div>

      {/* Main Content Sections */}
      <main className="relative z-10 pt-20">
        <section id="hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
        </section>

        <section id="experience" className="border-t border-slate-200 dark:border-[#303030]/60 bg-slate-100/50 dark:bg-[#0e0e0e]/50 transition-colors duration-300">
          <SectionWrapper id="experience" title="Work Experience" index="01">
            <Experience />
          </SectionWrapper>
        </section>

        <section id="projects" className="border-t border-slate-200 dark:border-[#303030]/60 bg-[#fbfcfd] dark:bg-[#080808] transition-colors duration-300">
          <SectionWrapper id="projects" title="Featured Projects" index="02">
            <Projects />
          </SectionWrapper>
        </section>

        <section id="skills" className="border-t border-slate-200 dark:border-[#303030]/60 bg-slate-100/50 dark:bg-[#0e0e0e]/50 transition-colors duration-300">
          <SectionWrapper id="skills" title="Technical Skills" index="03">
            <Skills />
          </SectionWrapper>
        </section>

        <section id="education" className="border-t border-slate-200 dark:border-[#303030]/60 bg-[#fbfcfd] dark:bg-[#080808] transition-colors duration-300">
          <SectionWrapper id="education" title="Education & Degree" index="04">
            <Education />
          </SectionWrapper>
        </section>

        {/* High Impact Contact CTA Footer */}
        <section className="border-t border-slate-200 dark:border-[#2a2a2a]/80 bg-white/70 dark:bg-[#181818]/60 relative overflow-hidden py-20 transition-colors duration-300">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/[0.06] rounded-full blur-[120px] pointer-events-none"></div>

          <div className="max-w-4xl mx-auto px-4 text-center space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-xs font-mono text-accent">
              <Sparkles size={14} />
              <span>Let's collaborate</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
              Have a project or opportunity in mind?
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              I'm always open to discussing new AI/ML projects, full-stack architectures, or potential engineering opportunities.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-accent hover:bg-accent-dark text-white font-semibold text-sm transition-all duration-300 shadow-xl shadow-accent/25 hover:-translate-y-0.5"
              >
                {copiedEmail ? <Check size={16} /> : <Copy size={16} />}
                <span>{copiedEmail ? "Email Copied!" : "Copy Email Address"}</span>
              </button>

              <a
                href={`mailto:${RESUME_DATA.contact.email}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white dark:bg-[#101010] hover:bg-slate-100 dark:hover:bg-[#2a2a2a] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-[#2a2a2a] text-sm font-semibold transition-all hover:-translate-y-0.5 shadow-sm"
              >
                <Mail size={16} className="text-accent" />
                <span>Send Direct Mail</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-[#2a2a2a] bg-slate-100 dark:bg-[#080808] py-10 relative z-10 text-slate-500 dark:text-slate-400 font-mono text-xs transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Akshay S G</p>
          <div className="flex items-center space-x-6">
            <a href={RESUME_DATA.links.github} target="_blank" rel="noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors">GitHub</a>
            <a href={RESUME_DATA.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors">LinkedIn</a>
            <a href={`mailto:${RESUME_DATA.contact.email}`} className="hover:text-slate-900 dark:hover:text-white transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Section Wrapper Component
const SectionWrapper: React.FC<{ id: string; title: string; index: string; children: React.ReactNode }> = ({ id, title, index, children }) => (
  <motion.section
    id={id}
    className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.6 }}
  >
    <div className="flex items-center gap-4 mb-12">
      <span className="font-mono text-xs font-bold text-accent px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
        {index}
      </span>
      <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white tracking-[-.05em] font-display">
        {title}
      </h2>
      <div className="h-[1px] flex-grow ml-4 bg-slate-200 dark:bg-[#2a2a2a] opacity-60 hidden sm:block"></div>
    </div>
    {children}
  </motion.section>
);

// Social Icon Link Component
const SocialIcon: React.FC<{ href: string; icon: React.ReactNode; title: string }> = ({ href, icon, title }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noreferrer"
    title={title}
    whileHover={{ y: -3, scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="p-3 rounded-full bg-white dark:bg-[#181818] border border-slate-200 dark:border-[#2a2a2a] text-slate-500 dark:text-slate-400 hover:text-accent dark:hover:text-white hover:border-accent/60 transition-all shadow-md"
  >
    {icon}
  </motion.a>
);

export default App;

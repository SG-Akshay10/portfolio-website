import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Menu, X, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { RESUME_DATA } from './constants';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'About', href: '#hero' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <div className="min-h-screen bg-primary text-gray-300 selection:bg-accent selection:text-white relative overflow-x-hidden font-sans">

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-primary/80 backdrop-blur-md border-b border-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0 font-bold text-2xl tracking-tighter text-white font-sans cursor-pointer flex items-center gap-2"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Akshay S G
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="text-gray-300 hover:text-accent transition-colors px-3 py-2 rounded-md text-sm font-medium uppercase tracking-widest"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden absolute right-4 top-6">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-secondary border-b border-accent/20 overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-accent uppercase tracking-widest"
                  >
                    {link.name}
                  </a>
                ))}
                {RESUME_DATA.links.resume && (
                  <a
                    href={RESUME_DATA.links.resume}
                    target="_blank"
                    rel="noreferrer"
                    className="block px-3 py-2 mt-4 rounded-md text-base font-bold text-accent bg-accent/10 hover:bg-accent/20 border border-accent/30 text-center uppercase tracking-widest"
                  >
                    Download Resume
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Left Sidebar Social Links */}
      <div className="hidden lg:flex fixed left-8 bottom-8 flex-col items-center space-y-6 z-40">
        <SocialLink href={`mailto:${RESUME_DATA.contact.email}`} icon={<Mail size={28} />} />
        <SocialLink href={RESUME_DATA.links.github} icon={<Github size={28} />} />
        <SocialLink href={RESUME_DATA.links.linkedin} icon={<Linkedin size={28} />} />
        <SocialLink href={`tel:${RESUME_DATA.contact.phone.replace(/\s/g, '')}`} icon={<Phone size={28} />} />
      </div>

      {/* Floating Resume Button */}
      {RESUME_DATA.links.resume && (
        <motion.a
          href={RESUME_DATA.links.resume}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="hidden md:flex fixed bottom-8 right-8 z-50 bg-secondary text-white border border-gray-700 px-6 py-3 rounded-full text-sm font-bold hover:border-accent hover:text-accent transition-colors flex items-center gap-2 shadow-lg shadow-accent/10"
        >
          DOWNLOAD RESUME
        </motion.a>
      )}

      <main className="relative z-10 lg:pl-24">
        <section id="hero" className="min-h-screen flex items-center bg-primary relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 relative z-10">
            <Hero />
          </div>
        </section>

        <div className="bg-primary text-white border-t border-secondary/50 relative">
          <SectionWrapper id="experience" title="Experience" index="01">
            <Experience />
          </SectionWrapper>
        </div>

        <div className="bg-secondary/30 text-white border-t border-secondary/50 relative">
          <SectionWrapper id="projects" title="Projects" index="02">
            <Projects />
          </SectionWrapper>
        </div>

        <div className="bg-primary text-white border-t border-secondary/50 relative">
          <SectionWrapper id="skills" title="Technical Skills" index="03">
            <Skills />
          </SectionWrapper>
        </div>

        <div className="bg-secondary/30 text-white border-y border-secondary/50 relative">
          <SectionWrapper id="education" title="Education" index="04">
            <Education />
          </SectionWrapper>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-gray-400 py-12 relative z-10 lg:pl-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="flex lg:hidden space-x-8 mb-8">
            <SocialLink href={`mailto:${RESUME_DATA.contact.email}`} icon={<Mail size={32} />} />
            <SocialLink href={RESUME_DATA.links.linkedin} icon={<Linkedin size={32} />} />
            <SocialLink href={RESUME_DATA.links.github} icon={<Github size={32} />} />
            <SocialLink href={`tel:${RESUME_DATA.contact.phone.replace(/\s/g, '')}`} icon={<Phone size={32} />} />
          </div>
          <p className="font-sans text-center text-sm">
            Designed & Built by Akshay S G.
          </p>
        </div>
      </footer>
    </div >
  );
};

// Helper Components for cleaner structure

const SectionWrapper: React.FC<{ id: string; title: string; index: string; children: React.ReactNode }> = ({ id, title, index, children }) => (
  <motion.section
    id={id}
    className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6 }}
  >
    <div className="flex items-center mb-16">
      <span className="font-mono text-xl md:text-2xl mr-4 text-accent">{index}.</span>
      <h2 className="text-3xl md:text-5xl font-bold whitespace-nowrap tracking-tight text-white">{title}</h2>
      <div className="h-[1px] w-full ml-8 hidden md:block opacity-30 bg-gradient-to-r from-accent to-transparent"></div>
    </div>
    {children}
  </motion.section>
);

const SocialLink: React.FC<{ href: string; icon: React.ReactNode }> = ({ href, icon }) => (
  <motion.div
    onClick={() => window.open(href, '_blank', 'noopener,noreferrer')}
    className="text-gray-400 hover:text-accent transition-colors block cursor-pointer"
    whileHover={{ y: -3 }}
    whileTap={{ scale: 0.9 }}
  >
    {icon}
  </motion.div>
);

export default App;
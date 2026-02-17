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
    <div className="min-h-screen bg-primary text-std selection:bg-accent selection:text-primary relative overflow-x-hidden font-sans bg-grid-pattern">

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-primary/95 backdrop-blur-md border-b border-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0 font-bold text-2xl tracking-tighter text-accent font-mono cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Akshay S G<span className="text-white"></span>
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
                    className="text-accent hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {link.name}
                  </motion.a>
                ))}

                {/* Resume Button */}
                {RESUME_DATA.links.resume && (
                  <motion.a
                    href={RESUME_DATA.links.resume}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                    className="bg-accent text-primary px-4 py-2 rounded-md text-sm font-bold hover:bg-white transition-colors ml-4"
                  >
                    Download Resume
                  </motion.a>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-accent hover:text-white focus:outline-none"
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
              className="md:hidden bg-primary border-b border-accent/20 overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-accent hover:text-white"
                  >
                    {link.name}
                  </a>
                ))}
                {RESUME_DATA.links.resume && (
                  <a
                    href={RESUME_DATA.links.resume}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-bold text-primary bg-accent hover:bg-white mt-2 text-center"
                  >
                    Download Resume
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="relative z-10">
        <section id="hero" className="min-h-screen flex items-center bg-primary relative overflow-hidden">
          {/* Decorative Elements */}
          {/* Decorative Elements */}
          <motion.div
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-20 w-32 h-32 border-t-4 border-r-4 border-accent rounded-tr-3xl opacity-50"
          ></motion.div>
          <motion.div
            animate={{ y: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 left-20 w-24 h-24 border-b-4 border-l-4 border-accent rounded-bl-3xl opacity-50"
          ></motion.div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
            <Hero />
          </div>
        </section>

        {/* Experience - Lime Background */}
        <div className="bg-accent text-primary">
          <SectionWrapper id="experience" title="Experience" index="01" variant="lime">
            <Experience />
          </SectionWrapper>
        </div>

        {/* Projects - Blue Background */}
        <div className="bg-primary text-std">
          <SectionWrapper id="projects" title="Projects" index="02" variant="blue">
            <Projects />
          </SectionWrapper>
        </div>

        {/* Skills - Lime Background */}
        <div className="bg-accent text-primary">
          <SectionWrapper id="skills" title="Technical Skills" index="03" variant="lime">
            <Skills />
          </SectionWrapper>
        </div>

        {/* Education - Blue Background */}
        <div className="bg-primary text-std">
          <SectionWrapper id="education" title="Education" index="04" variant="blue">
            <Education />
          </SectionWrapper>
        </div>
      </main>

      {/* Footer - Lime Background */}
      <footer className="bg-accent text-primary py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="flex space-x-8 mb-8">
            <SocialLink href={`mailto:${RESUME_DATA.contact.email}`} icon={<Mail size={24} />} />
            <SocialLink href={RESUME_DATA.links.linkedin} icon={<Linkedin size={24} />} />
            <SocialLink href={RESUME_DATA.links.github} icon={<Github size={24} />} />
            <SocialLink href={`tel:${RESUME_DATA.contact.phone.replace(/\s/g, '')}`} icon={<Phone size={24} />} />
          </div>
          <p className="text-primary font-mono text-center font-bold">
            Designed & Built by Akshay S G.
          </p>
        </div>
      </footer>

    </div>
  );
};

// Helper Components for cleaner structure

const SectionWrapper: React.FC<{ id: string; title: string; index: string; children: React.ReactNode; variant: 'blue' | 'lime' }> = ({ id, title, index, children, variant }) => (
  <motion.section
    id={id}
    className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6 }}
  >
    <div className="flex items-center mb-16">
      <span className={`font-mono text-xl md:text-2xl mr-4 opacity-70 ${variant === 'blue' ? 'text-accent' : 'text-primary'}`}>{index}.</span>
      <h2 className={`text-3xl md:text-5xl font-bold whitespace-nowrap tracking-tight ${variant === 'blue' ? 'text-accent' : 'text-primary'}`}>{title}</h2>
      <div className={`h-[2px] w-full ml-8 max-w-[200px] hidden md:block opacity-30 ${variant === 'blue' ? 'bg-accent' : 'bg-primary'}`}></div>
    </div>
    {children}
  </motion.section>
);

const SocialLink: React.FC<{ href: string; icon: React.ReactNode }> = ({ href, icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="text-primary hover:text-white transition-colors"
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
  >
    {icon}
  </motion.a>
);

export default App;
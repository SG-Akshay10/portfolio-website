import React from 'react';
import { RESUME_DATA } from '../constants';
import { Github, Puzzle, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export const Projects: React.FC = () => {
  return (
    <div className="space-y-16 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {RESUME_DATA.projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="group relative bg-[#111111]/80 rounded-2xl p-6 md:p-8 border border-gray-800 hover:border-accent/40 hover:bg-[#151515] transition-all duration-300 flex flex-col h-full overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
          >
            {/* Ambient Background Glow on Hover */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            {/* Large Index Number */}
            <div className="absolute -top-6 -right-4 text-[120px] font-black text-white/5 select-none transition-all duration-300 group-hover:text-accent/10 pointer-events-none">
              {String(index + 1).padStart(2, '0')}
            </div>

            <div className="flex justify-between items-start mb-6 z-10 w-full">
              <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors z-10">
                {project.name}
              </h3>
              <div className="flex gap-4 z-20">
                {project.addonLink && (
                  <a href={project.addonLink} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-accent transition-colors p-2 -m-2 opacity-70 hover:opacity-100" title="Add-on">
                    <Puzzle size={22} />
                  </a>
                )}
                <a href={project.link} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-accent transition-colors p-2 -m-2 opacity-70 hover:opacity-100" title="Source">
                  <Github size={22} />
                </a>
              </div>
            </div>

            <div className="text-gray-400 font-medium text-sm md:text-base space-y-4 leading-relaxed flex-grow z-10 text-justify">
              {project.description.map((desc, i) => (
                <p key={i} className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-accent/50 before:rounded-full group-hover:before:bg-accent before:transition-colors">{desc}</p>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mt-8 z-10 relative">
              {project.tech.split(', ').map((tech, i) => (
                <span key={i} className="text-xs font-mono font-medium text-accent bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-full">
                  {tech}
                </span>
              ))}
            </div>

            <a href={project.link} target="_blank" rel="noreferrer" className="absolute inset-0 z-0 cursor-pointer">
              <span className="sr-only">View project</span>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
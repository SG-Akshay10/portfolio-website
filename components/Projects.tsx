import React from 'react';
import { RESUME_DATA } from '../constants';
import { Folder, ExternalLink, Github, Puzzle } from 'lucide-react';
import { motion } from 'framer-motion';

export const Projects: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {RESUME_DATA.projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group relative bg-primary rounded-lg p-6 border-2 border-accent hover:shadow-[8px_8px_0px_0px_rgba(204,243,129,1)] transition-all duration-200 flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="text-accent">
                <Folder size={28} strokeWidth={2} />
              </div>
              <div className="flex gap-3 z-10">
                {project.addonLink && (
                  <a href={project.addonLink} target="_blank" rel="noreferrer" className="text-accent/60 hover:text-accent transition-colors" title="Firefox Add-on">
                    <Puzzle size={20} />
                  </a>
                )}
                <a href={project.link} target="_blank" rel="noreferrer" className="text-accent/60 hover:text-accent transition-colors" title="View Source">
                  <Github size={20} />
                </a>
              </div>
            </div>

            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors leading-tight">
              {project.name}
            </h3>

            <div className="text-accent/80 text-xs mb-4 space-y-1 leading-relaxed flex-grow font-mono">
              {project.description.map((desc, i) => (
                <p key={i} className="line-clamp-2">{desc}</p>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-accent/20">
              {project.tech.split(', ').slice(0, 3).map((tech, i) => (
                <span key={i} className="text-[10px] font-bold text-primary bg-accent px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>

            {/* Clickable overlay */}
            <a href={project.link} target="_blank" rel="noreferrer" className="absolute inset-0 z-0"></a>
          </motion.div>
        ))}
      </div>

    </div>
  );
};
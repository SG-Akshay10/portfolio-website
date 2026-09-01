import React from 'react';
import { RESUME_DATA } from '../constants';
import { Github, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Projects: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {RESUME_DATA.projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            viewport={{ once: true, margin: "-40px" }}
            className="group relative bg-white dark:bg-[#181C28]/90 backdrop-blur-sm rounded-2xl p-7 border border-slate-200 dark:border-[#222838] hover:border-accent/60 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-md dark:shadow-lg hover:shadow-xl hover:shadow-accent/15"
          >
            {/* Ambient Background Glow on Hover */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            {/* Top Row: Index Badge & Links */}
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="font-mono text-xs font-bold text-accent px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                  Project {String(index + 1).padStart(2, '0')}
                </span>

                <div className="flex items-center gap-2 z-20">
                  {project.addonLink && (
                    <a
                      href={project.addonLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-accent bg-slate-100 dark:bg-[#121620] hover:bg-slate-200 dark:hover:bg-[#222838] px-3 py-1.5 rounded-lg border border-slate-200 dark:border-[#222838] transition-colors"
                      title="Live App / Add-on"
                    >
                      <span>Demo</span>
                      <ArrowUpRight size={14} className="text-accent" />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-slate-100 dark:bg-[#121620] hover:bg-slate-200 dark:hover:bg-[#222838] text-slate-700 dark:text-slate-300 hover:text-accent border border-slate-200 dark:border-[#222838] transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github size={16} />
                    </a>
                  )}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-accent transition-colors mb-4 tracking-tight">
                {project.name}
              </h3>

              {/* Descriptions */}
              <div className="text-slate-600 dark:text-slate-300 text-sm space-y-2.5 leading-relaxed mb-6 font-normal">
                {project.description.map((desc, i) => (
                  <p key={i} className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity"></span>
                    <span>{desc}</span>
                  </p>
                ))}
              </div>
            </div>

            {/* Bottom Row: Tech Tags */}
            <div className="pt-4 border-t border-slate-200 dark:border-[#222838]/60 flex flex-wrap gap-2">
              {project.tech.split(', ').map((tech, i) => (
                <span
                  key={i}
                  className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-[#121620] border border-slate-200 dark:border-[#222838] px-2.5 py-1 rounded-md group-hover:border-accent/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
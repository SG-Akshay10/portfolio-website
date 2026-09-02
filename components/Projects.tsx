import React from 'react';
import { RESUME_DATA } from '../constants';
import { ArrowUpRight, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export const Projects: React.FC = () => (
  <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
    {RESUME_DATA.projects.map((project, index) => {
      return <motion.article key={project.name} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: .45, delay: Math.min(index * .05, .25) }} className="group relative min-h-[320px] overflow-hidden rounded-[2rem] border border-slate-200 bg-[#eaf6fc] p-6 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_18px_50px_-26px_rgba(14,165,233,.55)] dark:border-[#283343] dark:bg-[#101b27]">
        <div className="absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_1px_1px,rgba(14,165,233,.22)_1px,transparent_0)] [background-size:18px_18px] dark:opacity-30" />
        <span aria-hidden="true" className="absolute -bottom-4 -right-1 font-display text-[8.5rem] font-semibold leading-none tracking-[-.12em] text-slate-950/[0.055] dark:text-white/[0.055]">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="relative z-10 flex h-full flex-col"><div className="flex items-start justify-between gap-3"><span className="rounded-full border border-accent/20 bg-white/70 px-3 py-1.5 font-mono text-[11px] font-medium text-accent shadow-sm backdrop-blur dark:bg-[#152537]/80">Project {String(index + 1).padStart(2, '0')}</span><div className="flex gap-2">{project.addonLink && <a href={project.addonLink} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`} className="rounded-full border border-white/75 bg-white/80 p-2 text-slate-600 hover:text-accent dark:border-white/10 dark:bg-[#152537]/80 dark:text-slate-300"><ArrowUpRight size={16} /></a>}{project.link && <a href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.name} source`} className="rounded-full border border-white/75 bg-white/80 p-2 text-slate-600 hover:text-accent dark:border-white/10 dark:bg-[#152537]/80 dark:text-slate-300"><Github size={16} /></a>}</div></div><div className="mt-auto pt-10"><h3 className="max-w-[75%] text-2xl font-semibold tracking-[-.05em] text-slate-950 dark:text-white">{project.name}</h3><p className="mt-3 max-w-lg text-sm leading-relaxed text-slate-600 dark:text-slate-300">{project.description[0]}</p></div><div className="mt-5 flex flex-wrap gap-1.5">{project.tech.split(', ').slice(0, 3).map(tech => <span key={tech} className="rounded-full bg-white/75 px-2.5 py-1 font-mono text-[10px] text-slate-600 dark:bg-white/10 dark:text-slate-300">{tech}</span>)}</div></div>
      </motion.article>;
    })}
  </div>
);

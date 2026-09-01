import React from 'react';
import { RESUME_DATA } from '../constants';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, ChevronRight } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto py-6 space-y-8">
      {RESUME_DATA.experience.map((job, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="group relative bg-white dark:bg-[#181C28]/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-[#222838] hover:border-accent/60 transition-all duration-300 shadow-md dark:shadow-xl hover:shadow-xl hover:shadow-accent/10"
        >
          {/* Subtle Ambient Hover Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          {/* Header Row: Role, Company & Timeframe */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-[#222838]/60">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-lg bg-accent/10 text-accent border border-accent/20">
                  <Briefcase size={18} />
                </span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-accent transition-colors">
                  {job.role}
                </h3>
              </div>
              <p className="text-lg font-semibold text-slate-700 dark:text-slate-300 pl-11">
                {job.company}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-[#121620] border border-slate-200 dark:border-[#222838] text-slate-700 dark:text-slate-300">
                <Calendar size={13} className="text-accent" />
                {job.period}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-[#121620] border border-slate-200 dark:border-[#222838] text-slate-600 dark:text-slate-400">
                <MapPin size={13} className="text-slate-400 dark:text-slate-500" />
                {job.location}
              </span>
            </div>
          </div>

          {/* Experience Highlights / Deliverables */}
          <div className="mt-6 space-y-5 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            {job.highlights.map((highlight, i) => (
              <div key={i} className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-accent group-hover:scale-125 transition-transform duration-300 shadow-[0_0_8px_#8b5cf6]"></span>
                  <p className="text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                    {typeof highlight === 'string' ? highlight : highlight.text}
                  </p>
                </div>

                {/* Sub-Items List */}
                {typeof highlight !== 'string' && highlight.subItems && (
                  <div className="ml-5 pl-4 border-l-2 border-slate-200 dark:border-[#222838] space-y-2.5 my-2">
                    {highlight.subItems.map((sub, j) => (
                      <div key={j} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        <ChevronRight size={14} className="mt-0.5 text-accent flex-shrink-0 opacity-80" />
                        <span className="leading-normal">{sub}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};
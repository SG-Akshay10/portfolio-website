import React from 'react';
import { RESUME_DATA } from '../constants';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export const Education: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {RESUME_DATA.education.map((edu, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="group relative bg-white dark:bg-[#181C28]/90 backdrop-blur-sm p-7 rounded-2xl border border-slate-200 dark:border-[#222838] hover:border-accent/60 transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start sm:items-center shadow-md dark:shadow-lg hover:shadow-xl hover:shadow-accent/10"
        >
          {/* Ambient Glow */}
          <div className="absolute top-1/2 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -translate-y-1/2"></div>

          <div className="flex-shrink-0 bg-slate-100 dark:bg-[#121620] p-4 rounded-xl border border-slate-200 dark:border-[#222838] text-slate-700 dark:text-slate-300 group-hover:text-accent transition-all shadow-inner">
            <GraduationCap size={36} />
          </div>

          <div className="flex-grow space-y-2">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-accent transition-colors">
              {edu.institution}
            </h3>
            <p className="text-accent font-semibold text-base sm:text-lg">
              {edu.degree}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 font-mono text-xs text-slate-600 dark:text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 dark:bg-[#121620] border border-slate-200 dark:border-[#222838]">
                <Calendar size={13} className="text-accent" />
                {edu.period}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-semibold">
                <Award size={13} />
                {edu.gpa}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
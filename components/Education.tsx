import React from 'react';
import { RESUME_DATA } from '../constants';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

export const Education: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {RESUME_DATA.education.map((edu, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="relative group bg-secondary/30 p-8 rounded-2xl border border-secondary/50 hover:border-accent/50 hover:bg-secondary/50 transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start sm:items-center overflow-hidden"
        >
          {/* Ambient Glow */}
          <div className="absolute top-1/2 right-10 w-32 h-32 bg-accent/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -translate-y-1/2"></div>

          <div className="flex-shrink-0 bg-[#1a1a1a] p-4 rounded-xl border border-gray-800 text-white group-hover:text-accent group-hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all shadow-lg z-10">
            <GraduationCap size={36} />
          </div>
          <div className="flex-grow z-10">
            <h3 className="text-2xl font-bold text-white tracking-tight">{edu.institution}</h3>
            <p className="text-accent font-medium mt-1 text-lg">{edu.degree}</p>
            <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-400 font-mono">
              <span className="bg-[#1a1a1a] px-3 py-1 rounded-md border border-gray-800">{edu.period}</span>
              <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
              <span className="font-semibold text-gray-300">GPA: {edu.gpa}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
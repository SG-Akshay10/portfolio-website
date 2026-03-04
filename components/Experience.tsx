import React from 'react';
import { RESUME_DATA } from '../constants';
import { motion } from 'framer-motion';
import { MapPin, ChevronRight, Calendar } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto py-10 relative">
      <div className="space-y-12">
        {RESUME_DATA.experience.map((job, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative bg-[#111111]/80 p-8 md:p-10 rounded-3xl border border-gray-800 hover:border-accent/40 hover:bg-[#151515] transition-all duration-300 shadow-lg hover:shadow-[0_0_40px_rgba(139,92,246,0.1)] overflow-hidden w-full text-left"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              <div className="flex flex-col md:flex-row justify-between md:items-center mb-8 border-b border-gray-800/60 pb-8 group-hover:border-accent/30 transition-colors relative z-10">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-accent transition-colors duration-300 tracking-tight">
                    {job.role}
                  </h3>
                  <h4 className="text-lg md:text-xl font-bold text-gray-300 mt-2">{job.company}</h4>
                </div>
                <div className="flex flex-col md:items-end gap-2 mt-5 md:mt-0 text-gray-400 font-mono text-sm tracking-wide">
                  <span className="flex items-center gap-2 bg-[#1a1a1a] px-4 py-1.5 rounded-full border border-gray-800">
                    <Calendar size={14} className="text-accent" /> {job.period}
                  </span>
                  <span className="flex items-center gap-2 px-2 mt-1">
                    <MapPin size={14} className="text-accent" /> {job.location}
                  </span>
                </div>
              </div>

              <div className="relative z-10">
                <ul className="space-y-5 text-gray-300 text-base md:text-lg leading-relaxed text-left md:text-justify">
                  {job.highlights.map((highlight, i) => (
                    <li key={i} className="flex flex-col items-start gap-3">
                      <div className="flex">
                        <ChevronRight size={22} className="text-accent shrink-0 mt-0.5 mr-3" />
                        <span className="font-medium text-gray-300 w-full">
                          {typeof highlight === 'string' ? highlight : highlight.text}
                        </span>
                      </div>
                      {typeof highlight !== 'string' && highlight.subItems && (
                        <ul className="ml-10 space-y-3 mt-2 w-full pr-4 text-left md:text-justify">
                          {highlight.subItems.map((sub, j) => (
                            <li key={j} className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-accent/40 before:rounded-full group-hover:before:bg-accent before:transition-colors text-gray-400 text-sm md:text-[15px] leading-relaxed w-full">
                              {sub}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
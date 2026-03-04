import React from 'react';
import { RESUME_DATA } from '../constants';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto py-10">
      {/* Central Line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent via-accent/30 to-transparent transform md:-translate-x-1/2 z-0">
      </div>

      <div className="space-y-16">
        {RESUME_DATA.experience.map((job, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`relative flex flex-col md:flex-row items-center justify-between w-full ${isEven ? 'md:flex-row-reverse' : ''
                }`}
            >
              {/* Year/Dot */}
              <div className="absolute left-6 md:left-1/2 w-6 h-6 rounded-full bg-primary border-4 border-accent flex items-center justify-center transform -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(139,92,246,0.6)]">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
              </div>

              {/* Left Side (Company/Period or Role Detail depending on isEven) */}
              <div className={`w-full md:w-5/12 pl-16 md:pl-0 ${isEven ? 'md:text-left' : 'md:text-right'} mb-4 md:mb-0`}>
                <h3 className="text-2xl md:text-3xl font-black text-white">{job.company}</h3>
                <span className="text-accent font-mono text-sm uppercase tracking-wider">{job.period}</span>
                <span className={`flex items-center text-gray-400 text-sm mt-2 ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                  <MapPin size={14} className="mr-1" /> {job.location}
                </span>
              </div>

              {/* Right Side */}
              <div className={`w-full md:w-5/12 pl-16 md:pl-0 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                <div className="bg-secondary/40 p-6 rounded-xl border border-secondary hover:border-accent/40 transition-colors group">
                  <h4 className="text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors md:text-left">{job.role}</h4>
                  <ul className="space-y-3 text-gray-300 text-sm md:text-base text-left">
                    {job.highlights.map((highlight, i) => (
                      <li key={i} className="flex flex-col items-start gap-2">
                        <div className="flex">
                          <ChevronRight size={16} className="text-accent shrink-0 mt-1 mr-2" />
                          <span className="leading-relaxed">
                            {typeof highlight === 'string' ? highlight : highlight.text}
                          </span>
                        </div>
                        {typeof highlight !== 'string' && highlight.subItems && (
                          <ul className="ml-6 space-y-1 w-full">
                            {highlight.subItems.map((sub, j) => (
                              <li key={j} className="text-gray-400 text-[13px] border-l border-gray-700 pl-3 py-1">
                                {sub}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
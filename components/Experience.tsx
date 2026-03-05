import React from 'react';
import { RESUME_DATA } from '../constants';
import { motion } from 'framer-motion';
import { MapPin, ChevronRight, Calendar } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto py-10">

      {/* Central Separator Line */}
      <div className="hidden md:block absolute left-1/3 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary via-gray-700 to-primary z-0 transform -translate-x-1/2"></div>

      <div className="space-y-16">
        {RESUME_DATA.experience.map((job, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative flex flex-col md:flex-row items-start w-full group mb-16 md:mb-0"
            >
              {/* Left Side: Metadata */}
              <div className="w-full md:w-1/3 flex flex-col items-start md:items-end md:text-right relative z-10 md:pr-12 md:pb-16">
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute -right-[6px] top-2 w-3 h-3 rounded-full bg-primary border-[3px] border-gray-600 group-hover:border-accent group-hover:bg-accent transition-all duration-300 shadow-[0_0_0_rgba(139,92,246,0)] group-hover:shadow-[0_0_15px_rgba(139,92,246,0.6)]"></div>

                <h3 className="text-2xl lg:text-3xl font-black text-white group-hover:text-accent transition-colors duration-300 tracking-tight leading-tight">
                  {job.role}
                </h3>
                <h4 className="text-lg font-bold text-gray-300 mt-2">{job.company}</h4>

                <div className="flex flex-col md:items-end gap-2 mt-4 text-gray-400 font-mono text-xs tracking-wide">
                  <span className="flex items-center gap-2">
                    <Calendar size={12} className="text-accent" /> {job.period}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={12} className="text-accent" /> {job.location}
                  </span>
                </div>
              </div>

              {/* Right Side: Detailed Descriptions */}
              <div className="w-full md:w-2/3 md:pl-8 text-left relative z-10 mt-6 md:mt-0 md:pb-16">
                <ul className="space-y-4 text-gray-300 text-[15px] md:text-base leading-relaxed text-opacity-90">
                  {job.highlights.map((highlight, i) => (
                    <li key={i} className="flex flex-col items-start gap-2">
                      <div className="flex items-start">
                        <span className="font-medium">
                          {typeof highlight === 'string' ? highlight : highlight.text}
                        </span>
                      </div>
                      {typeof highlight !== 'string' && highlight.subItems && (
                        <ul className="ml-8 space-y-2 mt-2 w-full pr-4">
                          {highlight.subItems.map((sub, j) => (
                            <li key={j} className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2 before:w-[5px] before:h-[5px] before:bg-gray-600 before:rounded-full group-hover:before:bg-accent/60 before:transition-colors text-gray-400 text-sm leading-relaxed">
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
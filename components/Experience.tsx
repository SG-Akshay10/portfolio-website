import React from 'react';
import { RESUME_DATA } from '../constants';
import { motion } from 'framer-motion';
import { MapPin, ChevronRight, Calendar } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto py-10">
      <div className="space-y-20">
        {RESUME_DATA.experience.map((job, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 w-full group"
            >
              {/* Left Side: Role, Company, Period */}
              <div className="w-full md:w-1/3 flex flex-col md:items-end md:text-right border-l md:border-l-0 md:border-r-[2px] border-primary/20 pl-6 md:pl-0 md:pr-10 relative">

                {/* Vertical Line DOT indicator */}
                <div className="absolute left-[-9px] md:left-auto md:right-[-9px] top-2 w-4 h-4 rounded-full bg-primary border-2 border-accent shadow-[0_0_10px_rgba(139,92,246,0.6)] group-hover:bg-accent transition-colors duration-300"></div>

                <h3 className="text-3xl lg:text-4xl font-black text-white group-hover:text-accent transition-colors duration-300 leading-tight">
                  {job.role}
                </h3>
                <h4 className="text-xl font-bold text-accent/90 mt-3">{job.company}</h4>

                <div className="flex flex-col md:items-end gap-2 mt-6 text-gray-400 font-mono text-sm tracking-wide">
                  <span className="flex items-center gap-2">
                    <Calendar size={14} className="text-accent" /> {job.period}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={14} className="text-accent" /> {job.location}
                  </span>
                </div>
              </div>

              {/* Right Side: Description */}
              <div className="w-full md:w-2/3">
                <div className="bg-[#111111]/80 p-8 rounded-2xl border border-gray-800 hover:border-accent/40 hover:bg-[#151515] transition-all duration-300 shadow-lg group-hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]">
                  <ul className="space-y-5 text-gray-300 text-base md:text-lg leading-relaxed text-left">
                    {job.highlights.map((highlight, i) => (
                      <li key={i} className="flex flex-col items-start gap-3">
                        <div className="flex">
                          <ChevronRight size={22} className="text-accent shrink-0 mt-1 mr-3" />
                          <span className="text-gray-300 font-medium">
                            {typeof highlight === 'string' ? highlight : highlight.text}
                          </span>
                        </div>
                        {typeof highlight !== 'string' && highlight.subItems && (
                          <ul className="ml-9 space-y-3 mt-2 w-full">
                            {highlight.subItems.map((sub, j) => (
                              <li key={j} className="text-gray-400 text-sm md:text-base border-l-2 border-gray-800 group-hover:border-accent/50 transition-colors pl-4 py-1 leading-relaxed">
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
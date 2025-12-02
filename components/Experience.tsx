import React, { useState } from 'react';
import { RESUME_DATA } from '../constants';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-12">
      {/* Tabs list */}
      <div className="flex md:flex-col overflow-x-auto md:overflow-visible md:w-max border-b md:border-b-0 md:border-l border-primary/20 scrollbar-hide shrink-0">
        {RESUME_DATA.experience.map((job, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-3 text-left whitespace-nowrap text-sm font-mono transition-all border-b-2 md:border-b-0 md:border-l-2 -mb-[2px] md:-ml-[2px] relative group ${activeTab === index
              ? 'border-primary text-primary font-bold bg-primary/10'
              : 'border-transparent text-primary/60 hover:text-primary hover:bg-primary/5'
              }`}
          >
            {job.company}
            {activeTab === index && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute bottom-0 left-0 w-full h-[2px] md:w-[2px] md:h-full md:top-0 bg-primary"
              />
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <div className="mb-6">
              <h3 className="text-xl md:text-2xl text-primary font-bold mb-2 flex flex-wrap gap-2 items-center">
                <span>{RESUME_DATA.experience[activeTab].role}</span>
                <span className="text-primary/70">@ {RESUME_DATA.experience[activeTab].company}</span>
              </h3>

              <div className="flex flex-wrap gap-4 text-xs md:text-sm font-mono text-primary/70 mt-1">
                <span className="flex items-center">
                  <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-2 text-primary" /> {RESUME_DATA.experience[activeTab].period}
                </span>
                <span className="flex items-center">
                  <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-2 text-primary" /> {RESUME_DATA.experience[activeTab].location}
                </span>
              </div>
            </div>

            <ul className="space-y-3">
              {RESUME_DATA.experience[activeTab].highlights.map((highlight, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start text-primary/80 text-sm md:text-base font-medium"
                >
                  <span className="text-primary mr-3 mt-1.5 min-w-[12px]"><ChevronRight size={14} /></span>
                  <div className="leading-relaxed">
                    {typeof highlight === 'string' ? (
                      highlight
                    ) : (
                      <>
                        {highlight.text}
                        <ul className="mt-2 space-y-2 ml-4 border-l border-primary/20 pl-4">
                          {highlight.subItems.map((sub, j) => (
                            <li key={j} className="flex items-start text-primary/70 text-sm">
                              <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-primary/40 rounded-full shrink-0"></span>
                              <span>{sub}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
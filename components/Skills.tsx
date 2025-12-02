import React from 'react';
import { RESUME_DATA } from '../constants';
import { Terminal, Database, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

export const Skills: React.FC = () => {
  const categories = [
    { name: "Languages & Frameworks", icon: <Terminal className="w-6 h-6" />, skills: RESUME_DATA.skills.languages },
    { name: "AI / ML & Data Science", icon: <Brain className="w-6 h-6" />, skills: RESUME_DATA.skills.ai_ml },
    { name: "Tools & Databases", icon: <Database className="w-6 h-6" />, skills: RESUME_DATA.skills.tools },
  ];

  return (
    <div className="grid grid-cols-1 gap-12">
      {categories.map((cat, index) => (
        <div key={index} className="relative group">
          <div className="flex items-center gap-3 mb-6">
            <div className="text-accent bg-primary p-3 rounded-lg border border-primary group-hover:border-primary/80 transition-colors duration-300">
              {cat.icon}
            </div>
            <h3 className="text-xl font-bold text-primary">{cat.name}</h3>
            <div className="h-[2px] bg-primary/20 flex-grow ml-4 group-hover:bg-primary/40 transition-colors"></div>
          </div>

          <div className="flex flex-wrap gap-3">
            {cat.skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-3 bg-white/50 text-primary rounded-md hover:text-white hover:bg-primary transition-all text-sm font-medium border border-primary/10 cursor-default shadow-sm hover:shadow-md font-mono"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
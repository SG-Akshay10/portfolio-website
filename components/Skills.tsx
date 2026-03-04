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
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-10">
      {categories.map((cat, index) => (
        <div key={index} className="relative group bg-[#111111]/80 p-8 rounded-2xl border border-gray-800 hover:border-accent/40 hover:bg-[#151515] transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] flex flex-col h-full overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          <div className="flex items-center gap-4 mb-8 relative z-10">
            <div className="text-white bg-accent border border-accent/50 p-3 rounded-xl shadow-[0_0_15px_rgba(139,92,246,0.5)]">
              {cat.icon}
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">{cat.name}</h3>
          </div>

          <div className="flex flex-wrap gap-3 relative z-10 mt-auto">
            {cat.skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -3 }}
                className="px-4 py-2 bg-[#1a1a1a] text-gray-300 rounded-lg border border-gray-800 hover:text-white hover:border-accent/50 hover:shadow-[0_0_10px_rgba(139,92,246,0.2)] transition-all text-sm font-medium cursor-default font-mono"
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
import React from 'react';
import { RESUME_DATA } from '../constants';
import { Download, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full max-w-5xl text-white"
    >
      <motion.div variants={item}>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-none text-std">
          Akshay S G<span className="text-accent">.</span>
        </h1>
      </motion.div>

      <motion.div variants={item}>
        <h2 className="text-accent font-mono text-xl md:text-2xl mb-8 tracking-wide">
          {RESUME_DATA.title}
        </h2>
        <p className="text-muted text-lg md:text-xl font-mono max-w-3xl leading-relaxed">
          I build intelligent systems that blend machine learning, data engineering, and LLM workflows to solve real-world problems across products and platforms.
        </p>
      </motion.div>

      <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
        <div>
          <h3 className="text-muted font-mono text-sm mb-4 border-l-2 border-accent pl-4">
            Building practical intelligence for products that need more than just models.
          </h3>
        </div>
        <div>
          <h3 className="text-muted font-mono text-sm mb-4 border-l-2 border-accent pl-4">
            Specializing in Multi-Agent Systems, Computer Vision, and Gen AI.
          </h3>
        </div>
      </motion.div>
    </motion.div>
  );
};
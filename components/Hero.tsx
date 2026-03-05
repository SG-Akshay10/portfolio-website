import React, { useState, useEffect } from 'react';
import { RESUME_DATA } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import profileImg from '../assest/images/DSC_0609.JPG';

export const Hero: React.FC = () => {
  const roles = ["AI Engineer", "Full-Stack Dev", "Tech Enthusiast"];
  const [currentRole, setCurrentRole] = useState(0);
  const [isImageHovered, setIsImageHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between min-h-[70vh] relative pb-20">
      {/* Left side */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="z-20 md:w-1/3 flex flex-col items-center md:items-start"
      >
        <span className="text-accent text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 block w-full text-center md:text-left">Hello! I'm</span>
        <h1 className="text-6xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[0.9] w-full text-center md:text-left">
          AKSHAY<br />S G
        </h1>
      </motion.div>

      {/* Center 3D Placeholder */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="z-10 w-full md:w-1/3 flex justify-center my-8 md:my-0 relative"
      >
        <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-b from-secondary to-primary border-4 border-secondary shadow-[0_0_60px_rgba(139,92,246,0.3)] flex items-center justify-center overflow-hidden relative group">
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
            style={{ backgroundImage: `url(${profileImg})` }}
          ></div>
        </div>
      </motion.div>

      {/* Right side Roles */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="z-20 w-full md:w-1/3 flex flex-col items-center text-center mt-6 md:mt-0 md:pl-8 lg:pl-12"
      >
        <div className="relative w-full overflow-visible min-h-[60px] md:min-h-[120px] flex items-center justify-center">
          <AnimatePresence mode="popLayout">
            <motion.h2
              key={currentRole}
              initial={{ opacity: 0, y: 20, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -20, rotateX: 90 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)] whitespace-normal md:whitespace-nowrap px-4 md:px-0"
            >
              {roles[currentRole]}
            </motion.h2>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
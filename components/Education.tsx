import React from 'react';
import { RESUME_DATA } from '../constants';
import { GraduationCap } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <div className="max-w-3xl">
      {RESUME_DATA.education.map((edu, index) => (
        <div key={index} className="flex gap-4 p-6 bg-primary rounded-lg border border-accent hover:shadow-[4px_4px_0px_0px_rgba(204,243,129,1)] transition-all duration-200">
          <div className="flex-shrink-0 mt-1 text-accent">
            <GraduationCap size={32} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
            <p className="text-accent font-medium mt-1">{edu.degree}</p>
            <div className="flex items-center gap-4 mt-2 text-sm text-accent/80 font-mono">
              <span>{edu.period}</span>
              <span className="w-1 h-1 bg-accent rounded-full"></span>
              <span>{edu.gpa}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
import React from 'react';
import { RESUME_DATA } from '../constants';
import { motion } from 'framer-motion';
import { Code2, BrainCircuit, Wrench } from 'lucide-react';
import llamaIndexSvg from '../assest/logo/llamaindex.svg';
import llamaIndexColorSvg from '../assest/logo/llamaindex-color.svg';

const skillToSlug: Record<string, string> = {
  "Python": "python",
  "C": "c",
  "JavaScript": "javascript",
  "HTML/CSS": "html5",
  "React.js": "react",
  "FastAPI": "fastapi",
  "Tableau": "tableau",
  "SQL": "sqlite",
  "PostgreSQL": "postgresql",
  "Snowflake": "snowflake",
  "MongoDB": "mongodb",
  "Figma": "figma",
  "GitHub": "github",
  "Docker": "docker",
  "Hugging Face": "huggingface",
  "PyTorch": "pytorch",
  "TensorFlow": "tensorflow",
  "LangChain": "langchain",
  "LlamaIndex": "llamaindex",
  "FAISS": "meta",
  "PGVector": "postgresql",
  "Ollama": "ollama",
  "Pandas": "pandas",
  "NumPy": "numpy",
  "OpenCV": "opencv"
};

export const Skills: React.FC = () => {
  const categories = [
    {
      title: "AI, ML & RAG Stack",
      icon: <BrainCircuit size={20} className="text-accent" />,
      skills: RESUME_DATA.skills.ai_ml,
    },
    {
      title: "Languages & Frameworks",
      icon: <Code2 size={20} className="text-accent" />,
      skills: RESUME_DATA.skills.languages,
    },
    {
      title: "Tools & Databases",
      icon: <Wrench size={20} className="text-accent" />,
      skills: RESUME_DATA.skills.tools,
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto py-6 space-y-10">
      {categories.map((cat, catIdx) => (
        <div key={catIdx} className="space-y-4">
          <div className="flex items-center gap-2.5 text-lg font-bold text-slate-900 dark:text-white tracking-wide border-b border-slate-200 dark:border-[#222838]/60 pb-3">
            <span className="p-2 rounded-lg bg-white dark:bg-[#181C28] border border-slate-200 dark:border-[#222838] shadow-sm">
              {cat.icon}
            </span>
            <span>{cat.title}</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {cat.skills.map((skill, index) => {
              const slug = skillToSlug[skill] || "generic";
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: index * 0.03, duration: 0.3 }}
                  className="group relative flex flex-col items-center justify-center p-4 bg-white dark:bg-[#181C28]/80 rounded-xl border border-slate-200 dark:border-[#222838] hover:border-accent/60 transition-all duration-300 shadow-sm dark:shadow-md hover:shadow-xl hover:shadow-accent/10 cursor-default"
                >
                  <div className="relative w-10 h-10 mb-2 flex items-center justify-center">
                    {skill === 'LlamaIndex' ? (
                      <>
                        <img
                          src={llamaIndexSvg}
                          className="absolute inset-0 w-full h-full object-contain dark:brightness-200 opacity-90 group-hover:opacity-0 transition-opacity duration-300"
                          alt={skill}
                        />
                        <img
                          src={llamaIndexColorSvg}
                          className="absolute inset-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_0_10px_rgba(14,165,233,0.4)]"
                          alt={skill}
                        />
                      </>
                    ) : skill === 'Tableau' ? (
                      <>
                        <img
                          src={`/logos/tableau-color.svg`}
                          className="absolute inset-0 w-full h-full object-contain dark:brightness-0 dark:invert opacity-80 group-hover:opacity-0 transition-opacity duration-300"
                          alt={skill}
                        />
                        <img
                          src={`/logos/tableau-color.svg`}
                          className="absolute inset-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_0_10px_rgba(139,92,246,0.3)]"
                          alt={skill}
                        />
                      </>
                    ) : slug !== "generic" ? (
                      <>
                        <img
                          src={`/logos/${slug}-white.svg`}
                          className="absolute inset-0 w-full h-full object-contain brightness-0 dark:brightness-200 opacity-70 dark:opacity-90 group-hover:opacity-0 transition-opacity duration-300"
                          alt={skill}
                        />
                        <img
                          src={`/logos/${slug}-color.svg`}
                          className="absolute inset-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_0_10px_rgba(14,165,233,0.4)]"
                          alt={skill}
                        />
                      </>
                    ) : (
                      <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-[#121620] border border-slate-200 dark:border-[#222838] flex items-center justify-center text-accent font-mono text-xs font-bold">
                        {skill.charAt(0)}
                      </div>
                    )}
                  </div>
                  <span className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300 group-hover:text-accent dark:group-hover:text-white transition-colors text-center leading-tight">
                    {skill}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
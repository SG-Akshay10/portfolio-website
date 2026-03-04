import React from 'react';
import { RESUME_DATA } from '../constants';
import { motion } from 'framer-motion';

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
  const allSkills = [
    ...RESUME_DATA.skills.languages,
    ...RESUME_DATA.skills.ai_ml,
    ...RESUME_DATA.skills.tools,
  ];

  return (
    <div className="max-w-6xl mx-auto py-12">
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {allSkills.map((skill, index) => {
          const slug = skillToSlug[skill] || "generic";
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (index % 10) * 0.05, duration: 0.4 }}
              className="group relative flex flex-col items-center justify-center w-24 h-24 sm:w-28 sm:h-28 bg-[#111111]/80 rounded-2xl border border-gray-800 hover:border-accent/40 hover:bg-[#151515] transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] cursor-default"
            >
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 mb-3">
                {slug !== "generic" ? (
                  <>
                    <img
                      src={`https://cdn.simpleicons.org/${slug}/white`}
                      className="absolute inset-0 w-full h-full object-contain opacity-100 group-hover:opacity-0 transition-opacity duration-300"
                      alt={skill}
                    />
                    <img
                      src={`https://cdn.simpleicons.org/${slug}`}
                      className="absolute inset-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
                      alt={skill}
                    />
                  </>
                ) : (
                  <div className="w-full h-full bg-gray-600 rounded-md opacity-50 group-hover:bg-accent transition-colors duration-300"></div>
                )}
              </div>
              <span className="text-xs sm:text-sm font-mono text-gray-400 group-hover:text-white transition-colors duration-300 text-center px-2 line-clamp-1 w-full">
                {skill}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
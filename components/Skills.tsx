import React from 'react';
import { RESUME_DATA } from '../constants';
import { motion } from 'framer-motion';
import llamaIndexSvg from '../assest/logo/llamaindex.svg';
import llamaIndexColorSvg from '../assest/logo/llamaindex-color.svg';

const skillToSlug: Record<string, string> = {
  Python: 'python', C: 'c', JavaScript: 'javascript', 'HTML/CSS': 'html5', 'React.js': 'react', FastAPI: 'fastapi',
  Tableau: 'tableau', SQL: 'sqlite', PostgreSQL: 'postgresql', Snowflake: 'snowflake', MongoDB: 'mongodb', Figma: 'figma', GitHub: 'github', Docker: 'docker', 'Hugging Face': 'huggingface',
  PyTorch: 'pytorch', TensorFlow: 'tensorflow', LangChain: 'langchain', LlamaIndex: 'llamaindex', FAISS: 'meta', PGVector: 'postgresql', Ollama: 'ollama', Pandas: 'pandas', NumPy: 'numpy', OpenCV: 'opencv',
};

export const Skills: React.FC = () => {
  const skills = [...RESUME_DATA.skills.languages, ...RESUME_DATA.skills.ai_ml, ...RESUME_DATA.skills.tools];

  return (
    <div className="mx-auto grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-5">
      {skills.map((skill, index) => {
        const slug = skillToSlug[skill] || 'generic';
        return <motion.div key={skill} initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-40px' }} transition={{ delay: Math.min(index * .025, .25), duration: .3 }} className="group flex aspect-square flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg hover:shadow-accent/10 dark:border-[#303030] dark:bg-[#151515]">
          <div className="relative mb-3 h-10 w-10">
            {skill === 'LlamaIndex' ? <><img src={llamaIndexSvg} className="absolute inset-0 h-full w-full object-contain opacity-80 transition-opacity duration-300 group-hover:opacity-0 dark:brightness-200" alt={skill} /><img src={llamaIndexColorSvg} className="absolute inset-0 h-full w-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100" alt="" /></> : skill === 'Tableau' ? <><img src="/logos/tableau-color.svg" className="absolute inset-0 h-full w-full object-contain opacity-80 transition-opacity duration-300 group-hover:opacity-0 dark:brightness-0 dark:invert" alt={skill} /><img src="/logos/tableau-color.svg" className="absolute inset-0 h-full w-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100" alt="" /></> : slug !== 'generic' ? <><img src={`/logos/${slug}-white.svg`} className="absolute inset-0 h-full w-full object-contain brightness-0 opacity-80 transition-opacity duration-300 group-hover:opacity-0 dark:brightness-200 dark:opacity-90" alt={skill} /><img src={`/logos/${slug}-color.svg`} className="absolute inset-0 h-full w-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100" alt="" /></> : <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 font-mono text-sm font-bold text-accent">{skill.charAt(0)}</div>}
          </div>
          <span className="text-center font-mono text-[11px] font-medium leading-tight text-slate-600 transition-colors group-hover:text-accent dark:text-slate-300 dark:group-hover:text-white">{skill}</span>
        </motion.div>;
      })}
    </div>
  );
};

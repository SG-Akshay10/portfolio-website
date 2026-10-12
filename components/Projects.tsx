import React, { useState, useEffect, useMemo } from 'react';
import { RESUME_DATA } from '../constants';
import { ArrowUpRight, Github } from 'lucide-react';
import { motion } from 'framer-motion';

// Hook to track window dimensions reactively
function useWindowWidth(): number {
  const [width, setWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

// Compute maximum allowable columns based on viewport breakpoint
function getMaxColsForWidth(width: number): number {
  if (width < 640) return 1;      // Mobile (<640px)
  if (width < 768) return 2;      // Small tablet (640px-768px)
  if (width < 1024) return 3;     // Tablet / small laptop (768px-1024px)
  if (width < 1280) return 4;     // Desktop (1024px-1280px)
  return 5;                       // Large desktop (>=1280px)
}

// Mathematical function to find optimal grid layout (cols & rows)
// to form a perfect square or rectangular grid as much as possible.
export function getOptimalGridConfig(count: number, maxCols: number) {
  if (count <= 0) return { cols: 1, rows: 0, emptySlots: 0, isSquare: true, isExact: true };
  if (maxCols <= 1) return { cols: 1, rows: count, emptySlots: 0, isSquare: count === 1, isExact: true };

  const effectiveMaxCols = Math.min(count, maxCols);
  let bestCols = effectiveMaxCols;
  let minScore = Infinity;

  for (let c = effectiveMaxCols; c >= 1; c--) {
    const rows = Math.ceil(count / c);
    const emptySlots = rows * c - count;
    const aspectDiff = Math.abs(c - rows);
    const isExact = emptySlots === 0;

    // Score formula:
    // Heavy penalty for empty slots to favor exact factor grids (0 empty slots).
    // Penalize aspect ratio difference |c - rows| to favor square/rectangular grids.
    let score = emptySlots * 100 + aspectDiff * 10;

    // If not exact factor, add penalty
    if (!isExact) {
      score += 1000;
    }

    // Secondary preference: favor wider column count on wide screens
    score -= c * 0.1;

    if (score < minScore) {
      minScore = score;
      bestCols = c;
    }
  }

  const bestRows = Math.ceil(count / bestCols);
  const emptySlots = bestRows * bestCols - count;
  const isSquare = bestCols === bestRows;
  const isExact = emptySlots === 0;

  return { cols: bestCols, rows: bestRows, emptySlots, isSquare, isExact };
}

export const Projects: React.FC = () => {
  const windowWidth = useWindowWidth();
  const maxCols = getMaxColsForWidth(windowWidth);

  const projects = RESUME_DATA.projects;
  const count = projects.length;

  // Calculate grid config dynamically based on project count and screen width
  const { cols, rows } = useMemo(
    () => getOptimalGridConfig(count, maxCols),
    [count, maxCols]
  );

  const itemsInLastRow = count - (rows - 1) * cols;
  const hasIncompleteLastRow = itemsInLastRow > 0 && itemsInLastRow < cols;
  const lastRowStartCol = hasIncompleteLastRow
    ? Math.floor((cols - itemsInLastRow) / 2) + 1
    : 1;

  return (
    <motion.div
      layout
      className="grid gap-4 transition-all duration-300"
      style={{
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
      }}
    >
      {projects.map((project, index) => {
        const isLastRowFirstItem = hasIncompleteLastRow && index === (rows - 1) * cols;
        const gridStyle: React.CSSProperties = isLastRowFirstItem
          ? { gridColumnStart: lastRowStartCol }
          : {};

        // Dynamic typography & layout scaling based on column count
        const titleSize = cols >= 5 ? 'text-lg' : cols >= 4 ? 'text-xl' : 'text-2xl';
        const paddingClass = cols >= 5 ? 'p-4' : cols >= 4 ? 'p-5' : 'p-6';
        const watermarkSize = cols >= 5 ? 'text-[5.5rem]' : cols >= 4 ? 'text-[6.5rem]' : 'text-[8.5rem]';

        return (
          <motion.article
            layout
            key={project.name}
            style={gridStyle}
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.25) }}
            className={`group relative min-h-[300px] overflow-hidden rounded-[2rem] border border-slate-200 bg-[#fff8eb] ${paddingClass} transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_18px_50px_-26px_rgba(217,119,6,.55)] dark:border-[#303030] dark:bg-[#121212] flex flex-col justify-between`}
          >
            {/* Dot Texture Overlay */}
            <div className="absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_1px_1px,rgba(217,119,6,.22)_1px,transparent_0)] [background-size:18px_18px] dark:opacity-30 pointer-events-none" />

            {/* Index Watermark */}
            <span
              aria-hidden="true"
              className={`absolute -bottom-4 -right-1 font-display ${watermarkSize} font-semibold leading-none tracking-[-.12em] text-slate-950/[0.055] dark:text-white/[0.055] pointer-events-none select-none transition-all`}
            >
              {String(index + 1).padStart(2, '0')}
            </span>

            {/* Top Card Header */}
            <div className="relative z-10 flex items-start justify-between gap-2">
              <span className="rounded-full border border-accent/20 bg-white/80 px-2.5 py-1 font-mono text-[10px] font-medium text-accent shadow-sm backdrop-blur dark:bg-[#181818]/90">
                Project {String(index + 1).padStart(2, '0')}
              </span>
              <div className="flex gap-1.5">
                {project.addonLink && (
                  <a
                    href={project.addonLink}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.name}`}
                    className="rounded-full border border-white/75 bg-white/80 p-1.5 text-slate-600 hover:text-accent dark:border-white/10 dark:bg-[#181818]/80 dark:text-slate-300 transition-colors"
                  >
                    <ArrowUpRight size={15} />
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.name} source`}
                    className="rounded-full border border-white/75 bg-white/80 p-1.5 text-slate-600 hover:text-accent dark:border-white/10 dark:bg-[#181818]/80 dark:text-slate-300 transition-colors"
                  >
                    <Github size={15} />
                  </a>
                )}
              </div>
            </div>

            {/* Main Card Content */}
            <div className="relative z-10 mt-auto pt-6">
              <h3 className={`${titleSize} font-semibold tracking-[-.05em] text-slate-950 dark:text-white transition-all line-clamp-2`}>
                {project.name}
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300 line-clamp-3">
                {project.description[0]}
              </p>
            </div>

            {/* Tech Badges Footer */}
            <div className="relative z-10 mt-4 flex flex-wrap gap-1.5">
              {project.tech.split(', ').slice(0, cols >= 5 ? 2 : 3).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-white/80 px-2.5 py-0.5 font-mono text-[10px] text-slate-600 dark:bg-white/10 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.article>
        );
      })}
    </motion.div>
  );
};

'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { ContainerTextFlip } from './ContainerTextFlip';

interface AnimatedTitleProps {
  title: string;
  subtitle?: string;
  tagline?: string;
  className?: string;
  flipWords?: string[];
}

export default function AnimatedTitle({ 
  title,
  subtitle, 
  tagline,
  className = '',
  flipWords = ["evento", "fiesta", "peña"]
}: AnimatedTitleProps) {
  return (
    <div className={`text-center ${className}`}>
      {/* Main title with gradient and animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-6"
      >
        <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
          {title}
        </h1>
        {tagline && (
          <div className="flex items-center justify-center gap-2 text-yellow-400">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-medium">{tagline}</span>
            <Sparkles className="w-5 h-5" />
          </div>
        )}
      </motion.div>

      {/* Subtitle with Container Text Flip */}
      {subtitle && (
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-4xl md:text-7xl font-bold">
            <span>Todo para tu</span>
            <ContainerTextFlip 
              words={flipWords}
              interval={3000}
              className="text-black shadow-2xl border-2 border-yellow-300"
              textClassName="text-black font-bold"
            />
          </div>
        </motion.div>
      )}
    </div>
  );
} 
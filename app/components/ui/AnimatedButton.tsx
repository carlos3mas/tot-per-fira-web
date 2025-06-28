'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface AnimatedButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  external?: boolean;
  className?: string;
}

export default function AnimatedButton({ 
  href, 
  children, 
  variant = 'primary', 
  external = false,
  className = ''
}: AnimatedButtonProps) {
  const baseClasses = "group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium rounded-lg shadow-2xl transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl";
  
  const variantClasses = {
    primary: "text-blue-600 bg-white hover:bg-gray-50",
    secondary: "text-white bg-green-500 hover:bg-green-600"
  };

  const buttonContent = (
    <>
      <span className={`absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 opacity-10 rotate-12 group-hover:-translate-x-40 ease ${
        variant === 'primary' ? 'bg-yellow-400' : 'bg-white'
      }`}></span>
      <span className="relative flex items-center gap-2">
        {children}
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </span>
    </>
  );

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      {external ? (
        <a 
          href={href} 
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseClasses} ${variantClasses[variant]}`}
        >
          {buttonContent}
        </a>
      ) : (
        <Link 
          href={href} 
          className={`${baseClasses} ${variantClasses[variant]}`}
        >
          {buttonContent}
        </Link>
      )}
    </motion.div>
  );
} 
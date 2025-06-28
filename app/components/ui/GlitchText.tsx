"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface GlitchTextProps {
  children: React.ReactNode;
  className?: string;
  glitchDuration?: number;
  glitchDelay?: number;
}

const GlitchText: React.FC<GlitchTextProps> = ({
  children,
  className = "",
  glitchDuration = 0.3,
  glitchDelay = 0.8,
}) => {
  const [isGlitching, setIsGlitching] = useState(false);
  const [glitchIntensity, setGlitchIntensity] = useState(0);

  useEffect(() => {
    const startGlitching = () => {
      // Secuencia de glitch más agresiva
      const glitchSequence = [
        { intensity: 0, delay: 0 },
        { intensity: 0.5, delay: 50 },
        { intensity: 0.8, delay: 100 },
        { intensity: 1, delay: 150 },
        { intensity: 1, delay: 200 },
        { intensity: 0.8, delay: 250 },
        { intensity: 0.5, delay: 300 },
        { intensity: 0, delay: 350 },
      ];

      setTimeout(() => {
        setIsGlitching(true);
        
        // Aplicar secuencia de intensidad
        glitchSequence.forEach(({ intensity, delay }) => {
          setTimeout(() => {
            setGlitchIntensity(intensity);
          }, delay);
        });

        // Terminar el glitch
        setTimeout(() => {
          setIsGlitching(false);
          setGlitchIntensity(0);
        }, glitchDuration * 1000);
      }, glitchDelay * 1000);
    };

    startGlitching();
    const interval = setInterval(startGlitching, 2500); // Más frecuente para mayor impacto

    return () => clearInterval(interval);
  }, [glitchDuration, glitchDelay]);

  // Efectos de glitch más suaves y variados
  const glitchVariants = {
    normal: { x: 0, y: 0, opacity: 1 },
    glitch: {
      x: [0, -3, 3, -2, 2, -1, 1, 0],
      y: [0, 1, -1, 0.5, -0.5, 0],
      opacity: [1, 0.8, 0.9, 0.7, 1],
      transition: {
        duration: 0.15,
        repeat: isGlitching ? 12 : 0,
        ease: "easeInOut" as const,
      }
    }
  };

  const redGlitchVariants = {
    normal: { x: 0, y: 0, opacity: 0 },
    glitch: {
      x: [0, 4, -4, 2, -2, 1, -1, 0],
      y: [0, -1, 1, -0.5, 0.5, 0],
      opacity: [0, glitchIntensity * 1.2, 0],
      transition: {
        duration: 0.1,
        repeat: isGlitching ? 15 : 0,
        ease: "easeInOut" as const,
      }
    }
  };

  const blueGlitchVariants = {
    normal: { x: 0, y: 0, opacity: 0 },
    glitch: {
      x: [0, -4, 4, -2, 2, -1, 1, 0],
      y: [0, 1, -1, 0.5, -0.5, 0],
      opacity: [0, glitchIntensity * 1.0, 0],
      transition: {
        duration: 0.12,
        repeat: isGlitching ? 12 : 0,
        ease: "easeInOut" as const,
      }
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Texto principal */}
      <motion.div
        variants={glitchVariants}
        animate={isGlitching ? "glitch" : "normal"}
        className="relative z-10"
      >
        {children}
      </motion.div>

      {/* Capa de glitch roja */}
      <motion.div
        variants={redGlitchVariants}
        animate={isGlitching ? "glitch" : "normal"}
        className={`absolute inset-0 z-20 ${className}`}
        style={{
          color: "#ff0000",
          mixBlendMode: "multiply",
        }}
      >
        {children}
      </motion.div>

      {/* Capa de glitch azul */}
      <motion.div
        variants={blueGlitchVariants}
        animate={isGlitching ? "glitch" : "normal"}
        className={`absolute inset-0 z-30 ${className}`}
        style={{
          color: "#00ffff",
          mixBlendMode: "multiply",
        }}
      >
        {children}
      </motion.div>

      {/* Efecto de ruido sutil */}
      {isGlitching && (
        <motion.div
          className="absolute inset-0 z-40 pointer-events-none"
          animate={{
            opacity: [0, 0.3, 0],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 0.1,
            repeat: 8,
            ease: "easeInOut",
          }}
          style={{
            background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.3'/%3E%3C/svg%3E")`,
            filter: "contrast(1.5) brightness(1.2)",
          }}
        />
      )}

      {/* Efecto de distorsión adicional */}
      {isGlitching && (
        <motion.div
          className="absolute inset-0 z-50 pointer-events-none"
          animate={{
            opacity: [0, 0.2, 0],
            rotate: [0, 0.5, -0.5, 0],
          }}
          transition={{
            duration: 0.05,
            repeat: 6,
            ease: "easeInOut",
          }}
          style={{
            background: "linear-gradient(45deg, transparent 30%, rgba(255,0,0,0.1) 50%, transparent 70%)",
            transformOrigin: "center",
          }}
        />
      )}
    </div>
  );
};

export default GlitchText; 
'use client';

import { motion } from 'framer-motion';
import AnimatedButton from '../ui/AnimatedButton';
import GlitchText from '../ui/GlitchText';
import { ContainerTextFlip } from '../ui/ContainerTextFlip';

export default function Hero() {
  return (
    <section className="relative text-white py-20 px-4 overflow-hidden min-h-screen flex items-center">
      {/* Video de fondo sin parallax */}
      <div className="absolute inset-0 scale-110">
        <div className="relative w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>

          {/* Overlay aplicado directamente al video */}
          <div 
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at top, transparent 0%, rgba(0,0,0,0.4) 70%),
                radial-gradient(ellipse at bottom, rgba(251,191,36,0.1) 0%, transparent 50%),
                linear-gradient(45deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%)
              `
            }}
          />
        </div>
      </div>
      
      <div className="relative w-full max-w-6xl mx-auto text-center" style={{ zIndex: 20 }}>
        {/* Título principal con GlitchText */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: "spring",
            damping: 15,
            stiffness: 120
          }}
          className="mb-4 sm:mb-6"
        >
          <GlitchText
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-1 sm:mb-2 uppercase leading-none drop-shadow-2xl"
            glitchDuration={0.3}
            glitchDelay={0.8}
          >
            TOT PER FIRA
          </GlitchText>
        </motion.div>

        {/* Subtítulo con ContainerTextFlip */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-6 sm:mb-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4 leading-tight drop-shadow-xl">
            Todo para tu{" "}
            <ContainerTextFlip
              words={["evento", "fiesta", "peña"]}
              className="bg-transparent shadow-none text-yellow-400"
              textClassName="text-yellow-400"
            />
          </h2>
        </motion.div>

        {/* Descripción optimizada */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-lg sm:text-xl md:text-2xl text-white font-light mb-10 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0 drop-shadow-lg"
        >
          Alquiler de equipos de música, congeladores, grifos y barriles de cerveza. 
          Reparto en Onda y alrededores. ¡Haz tu evento inolvidable!
        </motion.p>

        {/* Animated buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <AnimatedButton href="#contacto" variant="primary">
            Solicitar Presupuesto
          </AnimatedButton>

          <AnimatedButton href="https://wa.me/34600000000" variant="secondary" external>
            WhatsApp
          </AnimatedButton>
        </motion.div>
      </div>
    </section>
  );
} 
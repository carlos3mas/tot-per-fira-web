"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProfileCardProps {
  title: string;
  description: string;
  image?: string;
  icon?: string;
  category?: string;
  className?: string;
}

export default function ProfileCard({
  title,
  description,
  image,
  icon = "📷",
  category,
  className = ""
}: ProfileCardProps) {
  return (
    <div className={`group relative ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative h-80 w-full rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 transition-all duration-300 group-hover:scale-105"
      >
        <div className="relative h-full w-full rounded-2xl bg-white p-6 flex flex-col justify-between">
          {/* Imagen del producto */}
          <div className="relative h-32 w-full rounded-xl bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center overflow-hidden">
            {image ? (
              <Image 
                src={image} 
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            ) : (
              <div className="text-white text-center">
                <div className="text-4xl mb-2">{icon}</div>
                <p className="font-semibold text-sm">{title}</p>
              </div>
            )}
            
            {/* Overlay con gradiente en hover */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          
          {/* Contenido */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-gray-900">
                  {title}
                </h3>
                {category && (
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                    {category}
                  </span>
                )}
              </div>
              <p className="text-gray-600 text-sm">
                {description}
              </p>
            </div>
          </div>
        </div>
        
        {/* Efecto de brillo en hover */}
        <motion.div 
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ opacity: 0, x: "-100%" }}
          whileHover={{ opacity: 1, x: "100%" }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </div>
  );
} 
"use client";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Productos", href: "/productos" },
  { label: "Cobertura", href: "/#cobertura" },
  { label: "Reseñas", href: "/#resenas" },
  { label: "Contacto", href: "/#contacto" },
];

export default function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    if (href.startsWith('/#')) {
      // Para enlaces internos con hash, hacer scroll suave
      const elementId = href.substring(2); // Remover '/#'
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // Cerrar el menú móvil después de hacer clic
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[95%] max-w-lg">
      {/* Navbar principal - visible en desktop */}
      <div className="hidden md:flex rounded-full border border-gray-200 dark:border-white/20 bg-white/90 dark:bg-black/80 shadow-lg justify-center px-4 py-2 backdrop-blur-md">
        <ul className="flex items-center gap-4">
          {navItems.map((item) => (
            <li key={item.label} className="relative">
              <Link
                href={item.href}
                className={`px-3 py-1 rounded-full font-medium text-sm transition-colors duration-200 hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-900/40 ${active === item.label ? "bg-blue-600 text-white" : "text-gray-800 dark:text-gray-200"}`}
                onMouseEnter={() => setActive(item.label)}
                onMouseLeave={() => setActive(null)}
                onClick={() => handleNavClick(item.href)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Navbar móvil - hamburger menu */}
      <div className="md:hidden">
        {/* Botón hamburguesa */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-full bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-full border border-gray-200 dark:border-white/20 shadow-lg p-3 flex items-center justify-center"
        >
          <div className="flex flex-col space-y-1">
            <span className={`block w-6 h-0.5 bg-gray-800 dark:bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-800 dark:bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-800 dark:bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>

        {/* Menú desplegable */}
        <div className={`absolute top-full left-0 right-0 mt-2 bg-white/95 dark:bg-black/95 backdrop-blur-md rounded-lg border border-gray-200 dark:border-white/20 shadow-lg transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
          <ul className="py-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="block px-4 py-3 text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
} 
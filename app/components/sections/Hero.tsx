'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Todo para tu fiesta
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Alquiler de equipos de música, congeladores, grifos y barriles de cerveza. 
          Reparto en Onda y alrededores. ¡Haz tu evento inolvidable!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="#contacto" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contactar ahora
          </Link>
          <Link 
            href="https://wa.me/34600000000" 
            target="_blank"
            className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
          >
            WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
} 
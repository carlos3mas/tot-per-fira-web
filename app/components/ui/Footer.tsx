"use client";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Contenido principal del footer */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Información de la empresa */}
          <div>
            <h3 className="text-xl font-bold mb-4">Todo para tu Fiesta</h3>
            <p className="text-gray-300 mb-4">
              Alquiler de equipos de música, congeladores, grifos y barriles de cerveza. 
              Venta de alcohol y bebidas con servicio de reparto en Onda y provincia de Castellón.
            </p>
            <div className="flex items-center text-gray-300">
              <span className="mr-2">📍</span>
              <span>Onda, Castellón</span>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#productos" className="text-gray-300 hover:text-white transition-colors">
                  Productos y Servicios
                </Link>
              </li>
              <li>
                <Link href="#cobertura" className="text-gray-300 hover:text-white transition-colors">
                  Zona de Cobertura
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-gray-300 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto y redes sociales */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="mr-2">💬</span>
                <a 
                  href="https://wa.me/34600000000" 
                  target="_blank"
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📞</span>
                <a 
                  href="tel:+34600000000" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Llamar
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📋</span>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Formulario Google
                </a>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3">Síguenos</h5>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors"
                  aria-label="Facebook"
                >
                  <span className="text-sm">📘</span>
                </a>
                <a 
                  href="#" 
                  className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition-colors"
                  aria-label="Instagram"
                >
                  <span className="text-sm">📷</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Todo para tu Fiesta. Todos los derechos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de Privacidad
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Términos de Servicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 
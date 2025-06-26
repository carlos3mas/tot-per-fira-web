'use client';

export default function Contacto() {
  return (
    <section id="contacto" className="py-16 px-4 bg-blue-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            ¿Listo para tu evento?
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            Contacta con nosotros y te ayudaremos a hacer de tu evento un éxito. 
            Disponibles por WhatsApp, formularios de Google y redes sociales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Información de contacto</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-2xl">📍</div>
                <div>
                  <h4 className="font-semibold">Ubicación</h4>
                  <p>Onda, Castellón</p>
                  <p className="text-blue-200">Provincia de Castellón</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-2xl">🚚</div>
                <div>
                  <h4 className="font-semibold">Servicio de Reparto</h4>
                  <p>Furgoneta propia</p>
                  <p className="text-blue-200">Toda la provincia de Castellón</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-2xl">⏰</div>
                <div>
                  <h4 className="font-semibold">Horario de atención</h4>
                  <p>Lunes a Domingo</p>
                  <p className="text-blue-200">9:00 - 21:00</p>
                </div>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors"
                  aria-label="Facebook"
                >
                  <span className="text-xl">📘</span>
                </a>
                <a 
                  href="#" 
                  className="bg-pink-600 p-3 rounded-full hover:bg-pink-700 transition-colors"
                  aria-label="Instagram"
                >
                  <span className="text-xl">📷</span>
                </a>
              </div>
            </div>
          </div>

          {/* Formularios y CTAs */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Formas de contacto</h3>
            
            <div className="space-y-6">
              {/* WhatsApp */}
              <div className="bg-green-600 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">💬</div>
                  <div>
                    <h4 className="text-xl font-bold">WhatsApp</h4>
                    <p className="text-green-100">Respuesta inmediata</p>
                  </div>
                </div>
                <a 
                  href="https://wa.me/34600000000" 
                  target="_blank"
                  className="block w-full bg-white text-green-600 text-center py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Contactar por WhatsApp
                </a>
              </div>

              {/* Formulario Google */}
              <div className="bg-blue-600 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">📋</div>
                  <div>
                    <h4 className="text-xl font-bold">Formulario de Google</h4>
                    <p className="text-blue-100">Solicitud detallada</p>
                  </div>
                </div>
                <a 
                  href="#" 
                  className="block w-full bg-white text-blue-600 text-center py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Rellenar formulario
                </a>
              </div>

              {/* Llamada */}
              <div className="bg-purple-600 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">📞</div>
                  <div>
                    <h4 className="text-xl font-bold">Llamada telefónica</h4>
                    <p className="text-purple-100">Atención personalizada</p>
                  </div>
                </div>
                <a 
                  href="tel:+34600000000" 
                  className="block w-full bg-white text-purple-600 text-center py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Llamar ahora
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA final */}
        <div className="mt-12 text-center">
          <div className="bg-white text-blue-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">
              ¡No esperes más!
            </h3>
            <p className="text-lg mb-6">
              Miles de eventos exitosos avalan nuestro servicio. 
              Contacta ahora y recibe un presupuesto personalizado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/34600000000" 
                target="_blank"
                className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                WhatsApp Rápido
              </a>
              <a 
                href="#" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Formulario Detallado
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
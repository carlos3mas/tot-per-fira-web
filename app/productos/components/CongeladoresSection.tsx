'use client';

export default function CongeladoresSection() {
  const congeladores = [
    {
      id: 1,
      modelo: "Congelador Sin Hielo",
      capacidad: "0 sacas",
      descripcion: "Solo el congelador, sin hielo incluido",
      caracteristicas: ["Compacto", "Fácil transporte", "Económico"],
      conHielo: false,
      sinHielo: true,
      imagen: "/images/congeladores/congelador-sin-hielo.jpg"
    },
    {
      id: 2,
      modelo: "Congelador + 5 Sacas",
      capacidad: "5 sacas",
      descripcion: "Congelador con 5 sacas de hielo incluidas",
      caracteristicas: ["Capacidad media", "Eficiente", "Versátil"],
      conHielo: true,
      sinHielo: false,
      imagen: "/images/congeladores/congelador-5-sacas.jpg"
    },
    {
      id: 3,
      modelo: "Congelador + 10 Sacas",
      capacidad: "10 sacas",
      descripcion: "Congelador con 10 sacas de hielo incluidas",
      caracteristicas: ["Gran capacidad", "Potente", "Profesional"],
      conHielo: true,
      sinHielo: false,
      imagen: "/images/congeladores/congelador-10-sacas.jpg"
    },
    {
      id: 4,
      modelo: "Congelador + 15 Sacas",
      capacidad: "15 sacas",
      descripcion: "Congelador con 15 sacas de hielo incluidas",
      caracteristicas: ["Máxima capacidad", "Potente", "Profesional"],
      conHielo: true,
      sinHielo: false,
      imagen: "/images/congeladores/congelador-15-sacas.jpg"
    }
  ];

  const sacasSueltas = [
    { cantidad: "10 sacas", imagen: "/images/hielo/sacas-10.jpg" },
    { cantidad: "15 sacas", imagen: "/images/hielo/sacas-15.jpg" },
    { cantidad: "20 sacas", imagen: "/images/hielo/sacas-20.jpg" }
  ];

  return (
    <section id="congeladores" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ❄️ Congeladores y Hielo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Congeladores de diferentes tamaños con o sin hielo. 
            También vendemos sacas de hielo sueltas.
          </p>
        </div>

        {/* Grid de congeladores */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {congeladores.map((congelador) => (
            <div key={congelador.id} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              {/* Imagen del congelador */}
              <div className="h-32 bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center relative overflow-hidden">
                {/* Placeholder para imagen - se reemplazará con imagen real */}
                <div className="text-white text-center">
                  <div className="text-2xl mb-1">❄️</div>
                  <p className="font-semibold text-sm">{congelador.capacidad}</p>
                </div>
                {/* Cuando tengas la imagen real, descomenta estas líneas:
                <img 
                  src={congelador.imagen} 
                  alt={congelador.modelo}
                  className="w-full h-full object-cover"
                />
                */}
              </div>
              
              <div className="p-4">
                <div className="text-center mb-3">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">
                    {congelador.modelo}
                  </h3>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                    {congelador.capacidad}
                  </span>
                </div>
                
                <p className="text-gray-600 text-xs mb-3 text-center">
                  {congelador.descripcion}
                </p>
                
                <div className="mb-3">
                  <h4 className="font-semibold text-gray-900 mb-1 text-xs">Características:</h4>
                  <ul className="space-y-1">
                    {congelador.caracteristicas.map((caracteristica, index) => (
                      <li key={index} className="text-xs text-gray-600 flex items-center">
                        <span className="text-blue-500 mr-1">•</span>
                        {caracteristica}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="flex flex-col space-y-1">
                    {congelador.conHielo && (
                      <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">
                        Con Hielo
                      </span>
                    )}
                    {congelador.sinHielo && (
                      <span className="bg-gray-600 text-white px-2 py-1 rounded text-xs">
                        Sin Hielo
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sección de sacas sueltas */}
        <div className="bg-blue-50 rounded-lg p-8 mb-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              🧊 Sacas de Hielo Sueltas
            </h3>
            <p className="text-gray-600">
              También vendemos sacas de hielo individuales para tus necesidades
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {sacasSueltas.map((saca, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg mb-3 flex items-center justify-center relative overflow-hidden">
                  {/* Placeholder para imagen - se reemplazará con imagen real */}
                  <div className="text-white text-center">
                    <div className="text-2xl mb-1">🧊</div>
                    <p className="font-semibold text-sm">{saca.cantidad}</p>
                  </div>
                  {/* Cuando tengas la imagen real, descomenta estas líneas:
                  <img 
                    src={saca.imagen} 
                    alt={`Hielo ${saca.cantidad}`}
                    className="w-full h-full object-cover"
                  />
                  */}
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">{saca.cantidad}</h4>
                <p className="text-sm text-gray-600">Hielo de máxima calidad</p>
              </div>
            ))}
          </div>
        </div>

        {/* Información adicional */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Servicio de Hielo Completo</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">✅</span>
                  Hielo de máxima calidad
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✅</span>
                  Entrega en el mismo día
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✅</span>
                  Recogida del congelador incluida
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✅</span>
                  Instalación y configuración
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚚</div>
              <p className="text-lg">
                Reparto en toda la provincia de Castellón con nuestra furgoneta refrigerada
              </p>
            </div>
          </div>
        </div>

        {/* CTA simple */}
        <div className="mt-8 text-center">
          <div className="bg-blue-600 text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">
              ¿Necesitas más información?
            </h3>
            <p className="mb-4">
              No dudes en contactarnos para reservar tus congeladores y sacas de hielo o si necesitas más información.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/34600000000" 
                target="_blank"
                className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                WhatsApp
              </a>
              <a 
                href="#" 
                className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Solicitar Presupuesto
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
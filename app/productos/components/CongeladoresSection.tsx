'use client';

export default function CongeladoresSection() {
  const congeladores = [
    {
      id: 1,
      modelo: "Congelador Pequeño",
      capacidad: "5-8 sacas",
      descripcion: "Ideal para eventos pequeños y familiares",
      caracteristicas: ["Compacto", "Fácil transporte", "Económico"],
      conHielo: true,
      sinHielo: true,
      imagen: "/images/congeladores/congelador-pequeno.jpg"
    },
    {
      id: 2,
      modelo: "Congelador Mediano",
      capacidad: "10-12 sacas",
      descripcion: "Perfecto para fiestas y eventos medianos",
      caracteristicas: ["Capacidad media", "Eficiente", "Versátil"],
      conHielo: true,
      sinHielo: true,
      imagen: "/images/congeladores/congelador-mediano.jpg"
    },
    {
      id: 3,
      modelo: "Congelador Grande",
      capacidad: "15-20 sacas",
      descripcion: "Para eventos grandes y celebraciones",
      caracteristicas: ["Gran capacidad", "Potente", "Profesional"],
      conHielo: true,
      sinHielo: true,
      imagen: "/images/congeladores/congelador-grande.jpg"
    }
  ];

  const sacasSueltas = [
    { cantidad: "1 saca", imagen: "/images/hielo/saca-1.jpg" },
    { cantidad: "3 sacas", imagen: "/images/hielo/sacas-3.jpg" },
    { cantidad: "5 sacas", imagen: "/images/hielo/sacas-5.jpg" }
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {congeladores.map((congelador) => (
            <div key={congelador.id} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              {/* Imagen del congelador */}
              <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center relative overflow-hidden">
                {/* Placeholder para imagen - se reemplazará con imagen real */}
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">❄️</div>
                  <p className="font-semibold">{congelador.capacidad}</p>
                </div>
                {/* Cuando tengas la imagen real, descomenta estas líneas:
                <img 
                  src={congelador.imagen} 
                  alt={congelador.modelo}
                  className="w-full h-full object-cover"
                />
                */}
              </div>
              
              <div className="p-6">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {congelador.modelo}
                  </h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {congelador.capacidad}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 text-center">
                  {congelador.descripcion}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Características:</h4>
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
                  <div className="flex flex-col space-y-2">
                    {congelador.conHielo && (
                      <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
                        Con Hielo
                      </span>
                    )}
                    {congelador.sinHielo && (
                      <span className="bg-gray-600 text-white px-3 py-1 rounded text-sm">
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
      </div>
    </section>
  );
} 
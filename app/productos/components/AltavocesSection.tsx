'use client';

export default function AltavocesSection() {
  const altavoces = [
    {
      id: 1,
      modelo: "Altavoz Compacto 500W",
      potencia: "500W",
      descripcion: "Ideal para eventos pequeños e íntimos",
      caracteristicas: ["Compacto", "Fácil transporte", "Sonido claro"],
      imagen: "/images/altavoces/altavoz-500w.jpg"
    },
    {
      id: 2,
      modelo: "Altavoz Profesional 1000W",
      potencia: "1000W",
      descripcion: "Perfecto para eventos de hasta 100 personas",
      caracteristicas: ["Activo", "Ecualizador integrado", "Conexión Bluetooth"],
      imagen: "/images/altavoces/altavoz-1000w.jpg"
    },
    {
      id: 3,
      modelo: "Altavoz Profesional 1500W",
      potencia: "1500W",
      descripcion: "Para eventos de hasta 150 personas",
      caracteristicas: ["Activo", "Ecualizador integrado", "Conexión Bluetooth"],
      imagen: "/images/altavoces/altavoz-1500w.jpg"
    },
    {
      id: 4,
      modelo: "Sistema 2000W + Subwoofer",
      potencia: "2000W",
      descripcion: "Altavoz principal + subwoofer para eventos de hasta 200 personas",
      caracteristicas: ["Altavoz principal 1500W", "Subwoofer 500W", "Sonido envolvente"],
      imagen: "/images/altavoces/sistema-2000w.jpg"
    },
    {
      id: 5,
      modelo: "Altavoz Concert 3000W",
      potencia: "3000W",
      descripcion: "Alta potencia para eventos de hasta 300 personas",
      caracteristicas: ["Máxima potencia", "Sonido profesional", "Ideal para exteriores"],
      imagen: "/images/altavoces/altavoz-3000w.jpg"
    },
    {
      id: 6,
      modelo: "Altavoz Concert 4000W",
      potencia: "4000W",
      descripcion: "Máxima potencia para grandes eventos",
      caracteristicas: ["Máxima potencia", "Sonido envolvente", "Profesional"],
      imagen: "/images/altavoces/altavoz-4000w.jpg"
    }
  ];

  return (
    <section id="altavoces" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            🔊 Altavoces Profesionales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Amplia gama de altavoces desde 500W hasta 4000W. 
            Desde eventos íntimos hasta grandes conciertos.
          </p>
        </div>

        {/* Grid de altavoces */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {altavoces.map((altavoz) => (
            <div key={altavoz.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Imagen del producto */}
              <div className="h-64 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative overflow-hidden">
                {/* Placeholder para imagen - se reemplazará con imagen real */}
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">🔊</div>
                  <p className="font-semibold">{altavoz.potencia}</p>
                </div>
                {/* Cuando tengas la imagen real, descomenta estas líneas:
                <img 
                  src={altavoz.imagen} 
                  alt={altavoz.modelo}
                  className="w-full h-full object-cover"
                />
                */}
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {altavoz.modelo}
                  </h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {altavoz.potencia}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">
                  {altavoz.descripcion}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Características:</h4>
                  <ul className="space-y-1">
                    {altavoz.caracteristicas.map((caracteristica, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <span className="text-blue-500 mr-2">•</span>
                        {caracteristica}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>  
            </div>
          ))}
        </div>

        {/* Información adicional */}
        <div className="mt-12 bg-blue-600 text-white p-8 rounded-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Servicio Completo de Sonido</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">✅</span>
                  Instalación y configuración incluida
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✅</span>
                  Micrófonos inalámbricos disponibles
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✅</span>
                  Mezcladores y ecualizadores
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✅</span>
                  Soporte técnico durante el evento
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎵</div>
              <p className="text-lg">
                También disponemos de equipos completos de DJ con mesas de mezclas
              </p>
            </div>
          </div>
        </div>

        {/* Equipos de alta potencia disponibles */}
        <div className="mt-8 bg-gray-50 p-6 rounded-lg">
          <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">
            Equipos de alta potencia disponibles:
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              "5000W", "6000W", "7000W", "Sistemas DJ"
            ].map((equipo) => (
              <div key={equipo} className="text-sm text-gray-600 bg-white p-2 rounded shadow-sm">
                {equipo}
              </div>
            ))}
          </div>
        </div>

        {/* CTA simple */}
        <div className="mt-8 text-center">
          <div className="bg-blue-600 text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">
              ¿Necesitas más información?
            </h3>
            <p className="mb-4">
              No dudes en contactarnos para reservar tus equipos o si necesitas más información.
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
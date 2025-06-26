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
      modelo: "Altavoz Profesional 1500W",
      potencia: "1500W",
      descripcion: "Para eventos de hasta 150 personas",
      caracteristicas: ["Activo", "Ecualizador integrado", "Conexión Bluetooth"],
      imagen: "/images/altavoces/altavoz-1500w.jpg"
    },
    {
      id: 3,
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
      </div>
    </section>
  );
} 
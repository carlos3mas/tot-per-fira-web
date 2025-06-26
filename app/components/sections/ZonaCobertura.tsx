'use client';

export default function ZonaCobertura() {
  const pueblos = [
    "Onda",
    "Castellón de la Plana", 
    "Villarreal",
    "Burriana",
    "Nules",
    "Moncofa",
    "Torreblanca",
    "Oropesa del Mar",
    "Benicàssim",
    "Almassora",
    "Vall d'Uixó",
    "Náquera",
    "Segorbe",
    "Altura",
    "Jérica"
  ];

  return (
    <section id="cobertura" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Zona de Cobertura
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Servimos a Onda y todos los pueblos de la provincia de Castellón. 
            Disponemos de servicio de reparto con furgoneta propia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mapa placeholder */}
          <div className="bg-gray-100 rounded-lg p-8 h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🗺️</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">
                Mapa de Cobertura
              </h3>
              <p className="text-gray-600">
                Aquí se mostrará un mapa interactivo con nuestra zona de servicio
              </p>
            </div>
          </div>

          {/* Lista de pueblos */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Pueblos que servimos:
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {pueblos.map((pueblo, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">{pueblo}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h4 className="text-lg font-semibold text-blue-900 mb-2">
                🚚 Servicio de Reparto
              </h4>
              <p className="text-blue-800 mb-4">
                Realizamos entregas en toda la provincia con nuestra furgoneta. 
                Consulta las tarifas según la distancia.
              </p>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Entrega en el mismo día (Onda y alrededores)</li>
                <li>• Entrega programada (resto de pueblos)</li>
                <li>• Montaje e instalación incluido</li>
                <li>• Recogida al finalizar el evento</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-4 bg-green-100 text-green-800 px-6 py-3 rounded-full">
            <span className="text-2xl">📍</span>
            <span className="font-semibold">
              Ubicados en Onda, Castellón - Servicio en toda la provincia
            </span>
          </div>
        </div>
      </div>
    </section>
  );
} 
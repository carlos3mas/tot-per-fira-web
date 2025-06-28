'use client';

export default function GrifosBarrilesSection() {
  const grifos = [
    {
      id: 1,
      modelo: "Grifo Simple",
      descripcion: "Un grifo para servir cerveza de barril",
      caracteristicas: ["Fácil instalación", "Mantenimiento simple", "Económico"],
      imagen: "/images/grifos/grifo-simple.jpg"
    },
  ];

  const barriles = [
    {
      id: 1,
      marca: "Mahou",
      capacidad: "30L",
      descripcion: "Cerveza Mahou Clásica",
      tipo: "Lager",
      imagen: "/images/barriles/mahou.jpg"
    },
    {
      id: 2,
      marca: "Estrella Damm",
      capacidad: "30L",
      descripcion: "Estrella Damm Inedit",
      tipo: "Wheat Beer",
      imagen: "/images/barriles/estrella-damm.jpg"
    },
    {
      id: 3,
      marca: "San Miguel",
      capacidad: "30L",
      descripcion: "San Miguel Especial",
      tipo: "Lager",
      imagen: "/images/barriles/san-miguel.jpg"
    }
  ];

  return (
    <section id="grifos-barriles" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            🍺 Grifos y Barriles de Cerveza
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Grifos profesionales y barriles de las mejores marcas de cerveza. 
            Servicio completo de instalación y mantenimiento.
          </p>
        </div>

        {/* Sección de Grifos */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Grifos Profesionales
          </h3>
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              {grifos.map((grifo) => (
                <div key={grifo.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center relative overflow-hidden">
                    {/* Placeholder para imagen - se reemplazará con imagen real */}
                    <div className="text-white text-center">
                      <div className="text-4xl mb-2">🍺</div>
                      <p className="font-semibold">{grifo.modelo}</p>
                    </div>
                    {/* Cuando tengas la imagen real, descomenta estas líneas:
                    <img 
                      src={grifo.imagen} 
                      alt={grifo.modelo}
                      className="w-full h-full object-cover"
                    />
                    */}
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      {grifo.modelo}
                    </h4>
                    
                    <p className="text-gray-600 mb-4">
                      {grifo.descripcion}
                    </p>
                    
                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Características:</h5>
                      <ul className="space-y-1">
                        {grifo.caracteristicas.map((caracteristica, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-center">
                            <span className="text-amber-500 mr-2">•</span>
                            {caracteristica}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sección de Barriles */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Barriles de Cerveza
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {barriles.map((barril) => (
              <div key={barril.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center relative overflow-hidden">
                  {/* Placeholder para imagen - se reemplazará con imagen real */}
                  <div className="text-white text-center">
                    <div className="text-3xl mb-2">🍺</div>
                    <p className="font-semibold">{barril.marca}</p>
                  </div>
                  {/* Cuando tengas la imagen real, descomenta estas líneas:
                  <img 
                    src={barril.imagen} 
                    alt={`Barril ${barril.marca}`}
                    className="w-full h-full object-cover"
                  />
                  */}
                </div>
                
                <div className="p-6">
                  <div className="text-center mb-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {barril.marca}
                    </h4>
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                      {barril.capacidad}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-3 text-center">
                    {barril.descripcion}
                  </p>
                  
                  <div className="text-center">
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {barril.tipo}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Información adicional */}
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8 rounded-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Servicio Completo de Cerveza</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">✅</span>
                  Instalación y configuración del grifo
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✅</span>
                  Mantenimiento durante el evento
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✅</span>
                  Cerveza fría y en perfectas condiciones
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✅</span>
                  Recogida y limpieza incluida
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚚</div>
              <p className="text-lg">
                Entrega en frío y recogida del barril vacío incluida en el servicio
              </p>
            </div>
          </div>
        </div>

        {/* Otras marcas disponibles */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
          <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">
            Otras marcas disponibles bajo pedido:
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {["Heineken", "Corona", "Cruzcampo", "Budweiser"].map((marca) => (
              <div key={marca} className="text-sm text-gray-600 bg-gray-50 p-2 rounded">
                {marca}
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
              No dudes en contactarnos para reservar tus grifos y barriles o si necesitas más información.
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
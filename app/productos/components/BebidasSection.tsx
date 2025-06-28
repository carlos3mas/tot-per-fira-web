'use client';

export default function BebidasSection() {
  const categorias = [
    {
      id: 'ginebra',
      nombre: 'Ginebra',
      icono: '🍸',
      productos: [
        { marca: 'Bombay Sapphire', descripcion: 'Ginebra Premium', imagen: "/images/bebidas/bombay-sapphire.jpg" },
        { marca: 'Beefeater', descripcion: 'Ginebra London Dry', imagen: "/images/bebidas/beefeater.jpg" },
        { marca: 'Hendrick\'s', descripcion: 'Ginebra Premium', imagen: "/images/bebidas/hendricks.jpg" },
        { marca: 'Gordon\'s', descripcion: 'Ginebra London Dry', imagen: "/images/bebidas/gordons.jpg" }
      ]
    },
    {
      id: 'whisky',
      nombre: 'Whisky',
      icono: '🥃',
      productos: [
        { marca: 'Jack Daniel\'s', descripcion: 'Whisky Tennessee', imagen: "/images/bebidas/jack-daniels.jpg" },
        { marca: 'Johnnie Walker', descripcion: 'Whisky Escocés', imagen: "/images/bebidas/johnnie-walker.jpg" },
        { marca: 'Jameson', descripcion: 'Whisky Irlandés', imagen: "/images/bebidas/jameson.jpg" },
        { marca: 'Ballantine\'s', descripcion: 'Whisky Escocés', imagen: "/images/bebidas/ballantines.jpg" }
      ]
    },
    {
      id: 'ron',
      nombre: 'Ron',
      icono: '🍹',
      productos: [
        { marca: 'Bacardi', descripcion: 'Ron Blanco', imagen: "/images/bebidas/bacardi.jpg" },
        { marca: 'Havana Club', descripcion: 'Ron Cubano', imagen: "/images/bebidas/havana-club.jpg" },
        { marca: 'Captain Morgan', descripcion: 'Ron Especiado', imagen: "/images/bebidas/captain-morgan.jpg" },
        { marca: 'Brugal', descripcion: 'Ron Dominicano', imagen: "/images/bebidas/brugal.jpg" }
      ]
    },
    {
      id: 'licores',
      nombre: 'Licores',
      icono: '🍷',
      productos: [
        { marca: 'Jägermeister', descripcion: 'Licor de hierbas', imagen: "/images/bebidas/jagermeister.jpg" },
        { marca: 'Tequila Rosa', descripcion: 'Tequila con sabor', imagen: "/images/bebidas/tequila-rosa.jpg" },
        { marca: 'Limoncello', descripcion: 'Licor de limón', imagen: "/images/bebidas/limoncello.jpg" },
        { marca: 'Cremas', descripcion: 'Licores cremosos', imagen: "/images/bebidas/cremas.jpg" }
      ]
    },
    {
      id: 'bebidas',
      nombre: 'Bebidas',
      icono: '🥤',
      productos: [
        { marca: 'Coca-Cola', descripcion: 'Cola 2L', imagen: "/images/bebidas/coca-cola.jpg" },
        { marca: 'Fantas', descripcion: 'Naranja 2L y Limón 2L', imagen: "/images/bebidas/fanta.jpg" },
        { marca: 'Red Bull', descripcion: 'Bebida energética', imagen: "/images/bebidas/red-bull.jpg" },
        { marca: 'Agua', descripcion: 'Agua mineral', imagen: "/images/bebidas/agua.jpg" }
      ]
    },
    {
      id: 'cervezas',
      nombre: 'Cervezas',
      icono: '🍺',
      productos: [
        { marca: 'Mahou', descripcion: 'Cerveza Española', imagen: "/images/bebidas/mahou.jpg" },
        { marca: 'Estrella Damm', descripcion: 'Cerveza Catalana', imagen: "/images/bebidas/estrella-damm.jpg" },
        { marca: 'San Miguel', descripcion: 'Cerveza Española', imagen: "/images/bebidas/san-miguel.jpg" },
        { marca: 'Cruzcampo', descripcion: 'Cerveza Andaluza', imagen: "/images/bebidas/cruzcampo.jpg" }
      ]
    }
  ];

  return (
    <section id="bebidas" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            🥤 Alcohol y Bebidas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Amplia selección de alcohol y bebidas de primeras marcas. 
            Precios competitivos y entrega rápida.
          </p>
        </div>

        {/* Grid de categorías */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categorias.map((categoria) => (
            <div key={categoria.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">{categoria.icono}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {categoria.nombre}
                </h3>
              </div>

              <div className="space-y-4">
                {categoria.productos.map((producto, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center relative overflow-hidden">
                        {/* Placeholder para imagen - se reemplazará con imagen real */}
                        <div className="text-white text-center">
                          <div className="text-lg">{categoria.icono}</div>
                        </div>
                        {/* Cuando tengas la imagen real, descomenta estas líneas:
                        <img 
                          src={producto.imagen} 
                          alt={producto.marca}
                          className="w-full h-full object-cover"
                        />
                        */}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">
                          {producto.marca}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {producto.descripcion}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Información adicional */}
        <div className="mt-12 bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Servicio de Bebidas</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">✅</span>
                  Productos de primera calidad
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✅</span>
                  Entrega en el mismo día
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✅</span>
                  Precios competitivos
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✅</span>
                  Pedidos mínimos flexibles
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚚</div>
              <p className="text-lg">
                Reparto gratuito en Onda y alrededores. 
                Consulta tarifas para otras zonas.
              </p>
            </div>
          </div>
        </div>

        {/* Otras bebidas disponibles */}
        <div className="mt-8 bg-gray-50 p-6 rounded-lg">
          <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">
            Otras bebidas disponibles:
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              "Vodka", "Tónica", "Zumos", "Vino", 
              "Cava", "Sidra", "Champagne", "Licor de Café"
            ].map((bebida) => (
              <div key={bebida} className="text-sm text-gray-600 bg-white p-2 rounded shadow-sm">
                {bebida}
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
              No dudes en contactarnos para reservar tus bebidas o si necesitas más información.
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
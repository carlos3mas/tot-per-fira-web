'use client';

export default function Productos() {
  const productos = [
    {
      id: 1,
      titulo: "Equipos de Música",
      descripcion: "Altavoces, micrófonos, mezcladores y todo lo necesario para tu evento",
      imagen: "/images/equipos-musica.jpg",
      categoria: "alquiler"
    },
    {
      id: 2,
      titulo: "Congeladores",
      descripcion: "Congeladores con o sin hielo para mantener tus bebidas frías",
      imagen: "/images/congeladores.jpg",
      categoria: "alquiler"
    },
    {
      id: 3,
      titulo: "Grifos y Barriles",
      descripcion: "Grifos de cerveza y barriles para el servicio perfecto",
      imagen: "/images/grifos-barriles.jpg",
      categoria: "alquiler"
    },
    {
      id: 4,
      titulo: "Alcohol y Bebidas",
      descripcion: "Amplia variedad de bebidas alcohólicas y refrescos",
      imagen: "/images/bebidas.jpg",
      categoria: "venta"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros Productos y Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos todo lo necesario para hacer de tu evento un éxito. 
            Alquiler de equipos y venta de bebidas con servicio de reparto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productos.map((producto) => (
            <div key={producto.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <div className="text-gray-500 text-center p-4">
                  <div className="text-4xl mb-2">📷</div>
                  <p>Imagen de {producto.titulo}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {producto.titulo}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    producto.categoria === 'alquiler' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {producto.categoria === 'alquiler' ? 'Alquiler' : 'Venta'}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  {producto.descripcion}
                </p>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Solicitar información
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
} 
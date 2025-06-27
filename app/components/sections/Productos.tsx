'use client';
import ProfileCard from '../ui/ProfileCard';

export default function Productos() {
  const productos = [
    {
      id: 1,
      titulo: "Equipos de Música",
      descripcion: "Altavoces, micrófonos, mezcladores y todo lo necesario para tu evento",
      imagen: "/images/equipos-musica.jpg",
      categoria: "alquiler",
      icono: "🔊"
    },
    {
      id: 2,
      titulo: "Congeladores",
      descripcion: "Congeladores con o sin hielo para mantener tus bebidas frías",
      imagen: "/images/congeladores.jpg",
      categoria: "alquiler",
      icono: "❄️"
    },
    {
      id: 3,
      titulo: "Grifos y Barriles",
      descripcion: "Grifos de cerveza y barriles para el servicio perfecto",
      imagen: "/images/grifos-barriles.jpg",
      categoria: "alquiler",
      icono: "🍺"
    },
    {
      id: 4,
      titulo: "Alcohol y Bebidas",
      descripcion: "Amplia variedad de bebidas alcohólicas y refrescos",
      imagen: "/images/bebidas.jpg",
      categoria: "venta",
      icono: "🥤"
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
            <ProfileCard
              key={producto.id}
              title={producto.titulo}
              description={producto.descripcion}
              image={producto.imagen}
              icon={producto.icono}
              category={producto.categoria === 'alquiler' ? 'Alquiler' : 'Venta'}
              className="delay-100"
            />
          ))}
        </div>

        {/* Información adicional con nuevo diseño */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">Servicio de Reparto</h3>
          <p className="text-lg mb-6">
            Disponemos de furgoneta para el reparto de todos nuestros productos 
            en Onda y alrededores. ¡Pregunta por nuestras tarifas!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Consultar reparto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 
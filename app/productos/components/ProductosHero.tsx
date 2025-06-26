'use client';

export default function ProductosHero() {
  const categorias = [
    { id: 'altavoces', nombre: 'Altavoces', icono: '🔊', descripcion: 'Desde 500W hasta 4000W' },
    { id: 'congeladores', nombre: 'Congeladores', icono: '❄️', descripcion: 'Pequeños, medianos y grandes' },
    { id: 'grifos-barriles', nombre: 'Grifos y Barriles', icono: '🍺', descripcion: 'Cerveza de diferentes marcas' },
    { id: 'bebidas', nombre: 'Alcohol y Bebidas', icono: '🥤', descripcion: 'Primeras marcas' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Nuestros Productos
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
          Amplia gama de equipos para alquiler y bebidas para venta. 
          Todo lo necesario para hacer de tu evento un éxito.
        </p>

        {/* Navegación rápida a categorías */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categorias.map((categoria) => (
            <button
              key={categoria.id}
              onClick={() => scrollToSection(categoria.id)}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-105"
            >
              <div className="text-4xl mb-3">{categoria.icono}</div>
              <h3 className="text-xl font-semibold mb-2">{categoria.nombre}</h3>
              <p className="text-blue-100 text-sm">{categoria.descripcion}</p>
            </button>
          ))}
        </div>

        {/* Información adicional */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Servicio Completo</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-2">🚚</div>
              <h3 className="font-semibold mb-2">Reparto</h3>
              <p className="text-blue-100 text-sm">Furgoneta propia en toda la provincia</p>
            </div>
            <div>
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-semibold mb-2">Instalación</h3>
              <p className="text-blue-100 text-sm">Montaje e instalación incluido</p>
            </div>
            <div>
              <div className="text-3xl mb-2">📞</div>
              <h3 className="font-semibold mb-2">Atención</h3>
              <p className="text-blue-100 text-sm">Soporte durante todo el evento</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
'use client';

export default function Resenas() {
  const reseñas = [
    {
      id: 1,
      nombre: "María García",
      evento: "Boda en Castellón",
      texto: "Excelente servicio. El equipo de música funcionó perfectamente y las bebidas llegaron a tiempo. Muy profesionales.",
      rating: 5,
      fecha: "2024"
    },
    {
      id: 2,
      nombre: "Carlos López",
      evento: "Fiesta de empresa en Onda",
      texto: "Alquilaron congeladores y grifos de cerveza. Todo perfecto y el reparto fue puntual. Muy recomendables.",
      rating: 5,
      fecha: "2024"
    },
    {
      id: 3,
      nombre: "Ana Martínez",
      evento: "Cumpleaños en Villarreal",
      texto: "Gran variedad de bebidas y equipos. El servicio de instalación incluido fue un plus. Repetiremos seguro.",
      rating: 5,
      fecha: "2024"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>
        ★
      </span>
    ));
  };

  return (
    <section id="resenas" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Miles de eventos exitosos avalan nuestro servicio. 
            La satisfacción de nuestros clientes es nuestra mejor publicidad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reseñas.map((reseña) => (
            <div key={reseña.id} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-3">⭐</div>
                <div>
                  <div className="flex text-lg mb-1">
                    {renderStars(reseña.rating)}
                  </div>
                  <p className="text-sm text-gray-500">{reseña.fecha}</p>
                </div>
              </div>
              
              <blockquote className="text-gray-700 mb-4 italic">
                &ldquo;{reseña.texto}&rdquo;
              </blockquote>
              
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{reseña.nombre}</p>
                <p className="text-sm text-gray-600">{reseña.evento}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-600 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">
              ¿Tienes un evento próximo?
            </h3>
            <p className="text-lg mb-6">
              Únete a nuestros clientes satisfechos. 
              Solicita un presupuesto personalizado para tu evento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Solicitar presupuesto
              </button>
              <button className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                Contactar por WhatsApp
              </button>
            </div>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Síguenos en redes sociales
          </h3>
          <div className="flex justify-center space-x-6">
            <a 
              href="#" 
              className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 transition-colors"
              aria-label="Facebook"
            >
              <span className="text-2xl">📘</span>
            </a>
            <a 
              href="#" 
              className="bg-pink-600 text-white p-4 rounded-full hover:bg-pink-700 transition-colors"
              aria-label="Instagram"
            >
              <span className="text-2xl">📷</span>
            </a>
          </div>
          <p className="text-gray-600 mt-4">
            Descubre nuestros eventos y ofertas especiales
          </p>
        </div>
      </div>
    </section>
  );
} 
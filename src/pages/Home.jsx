// Importamos React y un componente especial llamado Slider que sirve para hacer carruseles (como una galería que se desliza)
import React from 'react';
import Slider from 'react-slick';

// Importamos los datos de los restaurantes desde otro archivo
import { restaurantsData } from '../data';

// Importamos los estilos necesarios para que el carrusel se vea bien
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Este es el componente principal de la pantalla de inicio
// Si no se pasan restaurantes desde otro lugar, usamos los de restaurantsData
const Home = ({ restaurants = restaurantsData }) => {

  // Configuraciones del carrusel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      }
    ]
  };

  // Función para asignar color por categoría
  const getCategoryClasses = (category) => {
    switch (category) {
      case 'Gourmet':
        return 'bg-red-100 text-red-600';
      case 'Tradicional':
        return 'bg-green-100 text-green-600';
      default:
        return 'bg-blue-100 text-blue-600';
    }
  };

  return (
    <div className="bg-gradient-to-br from-yellow-100 via-pink-100 to-red-100 font-sans min-h-screen w-full p-8">

      {/* Título */}
      <h2 className="text-4xl font-serif font-bold text-center mb-28 text-gray-800 pt-8">
        🍷 Restaurantes Destacados
      </h2>

      {/* Contenedor del carrusel con overflow visible */}
      <div className="relative overflow-visible">
        <Slider {...settings}>
          {restaurants.map((rest) => (
            <div key={rest.id} className="px-4 overflow-visible">
              <div
                className="relative flex justify-center bg-white/30 backdrop-blur-md border border-white/50 rounded-3xl shadow-xl pt-12 pb-6 px-6 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-all duration-300"
                style={{ minHeight: '20rem' }} // <-- más altura para evitar corte
              >

                {/* Imagen sobresaliente */}
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg z-10">
                  <img src={rest.image} alt={rest.name} className="object-cover w-full h-full" />
                </div>

                {/* Contenido de la tarjeta */}
                <div className="flex flex-col items-center justify-center flex-grow">
                  <h3 className="text-2xl font-serif font-bold mb-2 text-gray-900">{rest.name}</h3>

                  <div className="flex justify-center gap-1 text-yellow-400 mb-2">
                    {'⭐'.repeat(rest.rating)}
                  </div>

                  <span className={`inline-block ${getCategoryClasses(rest.category)} text-xs font-semibold px-3 py-1 rounded-full mb-3`}>
                    Tipo: {rest.type}
                  </span>

                  <p className="text-gray-700 mb-3">{rest.description}</p>
                  <p className="text-gray-800 text-sm"><strong>📍 Dirección:</strong> {rest.address}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Home;

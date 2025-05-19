import React from 'react';
import Slider from 'react-slick';
import { restaurantsData } from '../data';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Home = ({ restaurants = restaurantsData }) => {
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

  return (
    <div className="bg-gradient-to-br from-yellow-100 via-pink-100 to-red-100 font-sans min-h-screen w-full p-8">
      <h2 className="text-4xl font-serif font-bold text-center mb-12 text-gray-800 pt-8">🍷 Restaurantes Destacados</h2>
      <Slider {...settings}>
        {restaurants.map((rest) => (
          <div key={rest.id} className="px-4">
            <div className="bg-white/30 backdrop-blur-md border border-white/50 rounded-3xl shadow-xl p-6 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-all duration-300" style={{ minHeight: '28rem' }}>
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
                <img src={rest.image} alt={rest.name} className="object-cover w-full h-full" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-2 text-gray-900">{rest.name}</h3>
              <div className="flex justify-center gap-1 text-yellow-400 mb-2">
                {'⭐'.repeat(rest.rating)}
              </div>
              <span className={`inline-block bg-${rest.category === 'Gourmet' ? 'red' : rest.category === 'Tradicional' ? 'green' : 'blue'}-100 text-${rest.category === 'Gourmet' ? 'red' : rest.category === 'Tradicional' ? 'green' : 'blue'}-600 text-xs font-semibold px-3 py-1 rounded-full mb-3`}>
                {rest.category}
              </span>
              <p className="text-gray-700 mb-3">{rest.description}</p>
              <p className="text-gray-800 text-sm"><strong>📍 Dirección:</strong> {rest.address}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home;

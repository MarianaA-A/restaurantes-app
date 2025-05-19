import React from 'react'

const Home = ({ restaurants }) => {
  return (
    <div className="bg-gradient-to-br from-yellow-100 via-pink-100 to-red-100 font-sans min-h-screen w-full">
      <h2 className="text-4xl font-serif font-bold text-center mb-12 text-gray-800 pt-8">🍷 Restaurantes Destacados</h2>
      <br />
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4 pb-8">
        {restaurants.map((rest) => (
          <div key={rest.id} className="relative bg-white/30 backdrop-blur-md border border-white/50 rounded-3xl shadow-xl p-6 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <div className="absolute -top-12 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img src={rest.image} alt={rest.name} className="object-cover w-full h-full" />
            </div>
            <div className="mt-16">
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
      </div>
    </div>
  );
};

export default Home;

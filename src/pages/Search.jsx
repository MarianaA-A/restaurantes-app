// Traemos lo necesario de React para poder usar esta función que guarda lo que el usuario escribe
import React, { useState } from 'react';

// Esta parte es el componente principal donde se muestra el buscador y los restaurantes
const Search = ({ restaurants }) => {
    // Aquí guardamos lo que el usuario escribe en el cuadro de búsqueda
    const [searchTerm, setSearchTerm] = useState('');

    // Filtramos los restaurantes que contengan el texto que el usuario escribió
    const filteredRestaurants = restaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        // Fondo de colores suaves y forma básica de la página
        <div className="bg-gradient-to-br from-yellow-100 via-pink-100 to-red-100 font-sans min-h-screen">
            
            {/* Contenedor general con espacio hacia adentro */}
            <div className="container mx-auto p-4">

                {/* Título grande en la parte superior */}
                <h2 className="text-3xl font-bold text-center mb-6"> 🔍 Buscar Restaurantes</h2>

                {/* Cuadro donde el usuario escribe para buscar */}
                <div className="flex justify-center mb-20">
                    <input
                        type="text"
                        placeholder="Buscar por nombre..." // Texto que aparece si no se ha escrito nada
                        value={searchTerm} // Aquí se muestra lo que el usuario escribió
                        onChange={(e) => setSearchTerm(e.target.value)} // Cada vez que el usuario escribe, se actualiza el texto
                        className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Lugar donde se muestran los restaurantes en forma de cuadritos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* Recorremos cada restaurante para mostrar su información */}
                    {filteredRestaurants.map((restaurant, index) => {
                        // Aquí armamos las estrellitas según la calificación del restaurante
                        const stars = '⭐'.repeat(restaurant.rating) + '☆'.repeat(5 - restaurant.rating);
                        
                        return (
                            // Tarjeta con la información del restaurante
                            <div
                                key={index}
                                className="relative bg-white/30 backdrop-blur-md border border-white/50 rounded-3xl shadow-xl p-6 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-all duration-300"
                            >
                                {/* Parte redonda que muestra la imagen del restaurante en la parte superior */}
                                <div className="absolute -top-12 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                    <img src={restaurant.image} alt={restaurant.name} className="object-cover w-full h-full" />
                                </div>

                                {/* Toda la información del restaurante (nombre, estrellas, descripción, etc.) */}
                                <div className="mt-16">
                                    {/* Nombre del restaurante */}
                                    <h3 className="text-2xl font-serif font-bold mb-2 text-gray-900">{restaurant.name}</h3>

                                    {/* Estrellitas de calificación */}
                                    <div className="flex justify-center gap-1 text-yellow-400 mb-2">
                                        {stars.split('').map((star, i) => (
                                            <span key={i}>{star}</span>
                                        ))}
                                    </div>

                                    {/* Tipo de comida o categoría */}
                                    <span className="inline-block bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                                        {restaurant.category}
                                    </span>

                                    {/* Descripción breve del restaurante */}
                                    <p className="text-gray-700 mb-3">{restaurant.description}</p>

                                    {/* Dirección del restaurante */}
                                    <p className="text-gray-800 text-sm">
                                        <strong>📍 Dirección:</strong> {restaurant.address}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

// Exportamos este componente para poder usarlo desde otros lugares
export default Search;

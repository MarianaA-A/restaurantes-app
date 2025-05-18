import React, { useState } from 'react';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const restaurants = [
        {
            name: "El Retiro del Sabor",
            description: "Una experiencia única de sabores en un ambiente acogedor.",
            address: "CL 45 CR 25 -16",
            image: "https://fastly.picsum.photos/id/42/3456/2304.jpg?hmac=dhQvd1Qp19zg26MEwYMnfz34eLnGv8meGk_lFNAJR3g",
            category: "Gourmet",
            rating: 5
        },
        {
            name: "Raíz & Vanguardia",
            description: "Platos tradicionales con un toque moderno e innovador.",
            address: "Circ 5 Cl 16 -32",
            image: "https://fastly.picsum.photos/id/163/2000/1333.jpg?hmac=htdHeSJwlYOxS8b0TTpz2s8tD_QDlmsd3JHYa_HGrg8",
            category: "Fusión",
            rating: 4
        },
        {
            name: "Corte & Aroma",
            description: "Delicias gourmet en un entorno elegante y exclusivo.",
            address: "Cr 79 Cl 20 A -94",
            image: "https://fastly.picsum.photos/id/431/5000/3334.jpg?hmac=T2rL_gBDyJYpcr1Xm8Kv7L6bhwvmZS8nKT5w3ok58kA",
            category: "Steakhouse",
            rating: 5
        }
    ];

    const filteredRestaurants = restaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-gradient-to-br from-yellow-100 via-pink-100 to-red-100 font-sans min-h-screen">


            <div className="container mx-auto p-4">
                <h2 className="text-3xl font-bold text-center mb-6"> 🔍 Buscar Restaurantes</h2>

                <div className="flex justify-center mb-20">
                    <input
                        type="text"
                        placeholder="Buscar por nombre..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredRestaurants.map((restaurant, index) => {
                        const stars = '⭐'.repeat(restaurant.rating) + '☆'.repeat(5 - restaurant.rating);
                        return (
                            <div key={index} className="relative bg-white/30 backdrop-blur-md border border-white/50 rounded-3xl shadow-xl p-6 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
                                <div className="absolute -top-12 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                    <img src={restaurant.image} alt={restaurant.name} className="object-cover w-full h-full" />
                                </div>
                                <div className="mt-16">
                                    <h3 className="text-2xl font-serif font-bold mb-2 text-gray-900">{restaurant.name}</h3>
                                    <div className="flex justify-center gap-1 text-yellow-400 mb-2">
                                        {stars.split('').map((star, i) => (
                                            <span key={i}>{star}</span>
                                        ))}
                                    </div>
                                    <span className="inline-block bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">{restaurant.category}</span>
                                    <p className="text-gray-700 mb-3">{restaurant.description}</p>
                                    <p className="text-gray-800 text-sm"><strong>📍 Dirección:</strong> {restaurant.address}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Search;

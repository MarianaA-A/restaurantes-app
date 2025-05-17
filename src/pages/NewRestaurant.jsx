import React, { useState } from 'react'

const NewRestaurant = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        address: '',
        image: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.description || !formData.address || !formData.image) {
            Swal.fire({
                title: 'Error',
                text: 'Por favor completa todos los campos.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
            return;
        }

        console.log('Datos enviados:', formData);
    };

    return (
        <div className="bg-gradient-to-br from-yellow-100 via-pink-100 to-red-100 font-sans min-h-screen">

            <div className="container mx-auto p-4">
                <h2 className="text-3xl font-bold text-center mb-10"> 🍽 Agregar Nuevo Restaurante</h2>

                <div className="max-w-2xl mx-auto bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-200">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-gray-800 font-semibold mb-1">Nombre</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Ej: La Casa del Sabor"
                                className="w-full p-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                            />
                        </div>

                        <div>
                            <label htmlFor="description" className="block text-gray-800 font-semibold mb-1">Descripción</label>
                            <textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                rows="4"
                                placeholder="Describe la experiencia, el tipo de comida, etc."
                                className="w-full p-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                            ></textarea>
                        </div>

                        <div>
                            <label htmlFor="address" className="block text-gray-800 font-semibold mb-1">Dirección</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="Ej: Cra 10 #20-30"
                                className="w-full p-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                            />
                        </div>

                        <div>
                            <label htmlFor="image" className="block text-gray-800 font-semibold mb-1">URL de la Imagen</label>
                            <input
                                type="url"
                                id="image"
                                name="image"
                                value={formData.image}
                                onChange={handleChange}
                                placeholder="https://example.com/imagen.jpg"
                                className="w-full p-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                            />
                        </div>

                        <div className="space-y-4 mt-8">
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-gray-300 to-red-100 text-black text-lg font-semibold py-3 rounded-xl shadow-md hover:brightness-110 transition"
                            >
                                ➕ Guardar Restaurante
                            </button>

                            <button
                                type="button"
                                className="w-full bg-gradient-to-r from-gray-300 to-red-100 text-black text-lg font-semibold py-3 rounded-xl shadow-md hover:brightness-110 transition"
                            >
                                🔍 Consultar Restaurante
                            </button>

                            <button
                                type="button"
                                className="w-full bg-gradient-to-r from-gray-300 to-red-100 text-black text-lg font-semibold py-3 rounded-xl shadow-md hover:brightness-110 transition"
                            >
                                🗑 Eliminar Restaurante
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewRestaurant;
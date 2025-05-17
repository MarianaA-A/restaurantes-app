import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-serif font-bold tracking-wide">🍽 Directorio de restaurantes</h1>
        <div className="space-x-6 text-lg font-medium">
          <Link to="/" className='hover:text-blue-300 transition duration-300 ease-in-out'>🏛 Home</Link>
          <Link to="/search" className='hover:text-blue-300 transition duration-300 ease-in-out'>🔍 Search</Link>
          <Link to="/new" className='hover:text-blue-300 transition duration-300 ease-in-out'>📝 New Restaurant</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

import { useState } from 'react';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './ui/Navbar';
import Home from './pages/Home';
import Search from './pages/Search';
import NewRestaurant from './pages/NewRestaurant';
import { restaurantsData } from './data';

function App() {
  const [restaurants, setRestaurants] = useState(restaurantsData);

  const addRestaurant = (newRestaurant) => {
    setRestaurants((prevRestaurants) => [
      ...prevRestaurants,
      { id: prevRestaurants.length + 1, ...newRestaurant },
    ]);
  };

  const editRestaurant = (updatedRestaurant) => {
    setRestaurants((prevRestaurants) =>
      prevRestaurants.map((rest) =>
        rest.id === updatedRestaurant.id ? updatedRestaurant : rest
      )
    );
  };

  const deleteRestaurant = (id) => {
    setRestaurants((prevRestaurants) =>
      prevRestaurants.filter((rest) => rest.id !== id)
    );
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="w-full p-0">
          <Routes>
            <Route path="/" element={<Home restaurants={restaurants} />} />
            <Route path="/search" element={<Search restaurants={restaurants} />} />
            <Route
              path="/new"
              element={
                <NewRestaurant
                  restaurants={restaurants}
                  addRestaurant={addRestaurant}
                  editRestaurant={editRestaurant}
                  deleteRestaurant={deleteRestaurant}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

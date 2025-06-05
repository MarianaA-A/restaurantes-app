import { useState, useEffect } from 'react';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './ui/Navbar';
import Home from './pages/Home';
import Search from './pages/Search';
import NewRestaurant from './pages/NewRestaurant';
// import { restaurantsData } from './data';

import { db } from './firebase';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy
} from 'firebase/firestore';

function App() {
  const [restaurants, setRestaurants] = useState([]);

  // Fetch restaurants from Firestore on mount
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const q = query(collection(db, 'restaurants'), orderBy('id'));
        const querySnapshot = await getDocs(q);
        const restaurantsList = querySnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: data.id === null || data.id === undefined ? doc.id : data.id,
            ...data,
            docId: doc.id
          };
        });
        setRestaurants(restaurantsList);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      }
    };

    fetchRestaurants();
  }, []);

  const addRestaurant = async (newRestaurant) => {
    try {
      // Generate new id based on current max id
      const maxId = restaurants.reduce((max, r) => (r.id > max ? r.id : max), 0);
      const restaurantToAdd = { id: maxId + 1, ...newRestaurant };
      const docRef = await addDoc(collection(db, 'restaurants'), restaurantToAdd);
      setRestaurants(prev => [...prev, { ...restaurantToAdd, docId: docRef.id }]);
    } catch (error) {
      console.error('Error adding restaurant:', error);
    }
  };

  const editRestaurant = async (updatedRestaurant) => {
    try {
      const restaurantDoc = restaurants.find(r => r.id === updatedRestaurant.id);
      if (!restaurantDoc) return;
      const docRef = doc(db, 'restaurants', restaurantDoc.docId);
      await updateDoc(docRef, updatedRestaurant);
      setRestaurants(prev =>
        prev.map(r => (r.id === updatedRestaurant.id ? { ...updatedRestaurant, docId: r.docId } : r))
      );
    } catch (error) {
      console.error('Error updating restaurant:', error);
    }
  };

  const deleteRestaurant = async (id) => {
    try {
      const restaurantDoc = restaurants.find(r => r.id === id);
      if (!restaurantDoc) return;
      const docRef = doc(db, 'restaurants', restaurantDoc.docId);
      await deleteDoc(docRef);
      setRestaurants(prev => prev.filter(r => r.id !== id));
    } catch (error) {
      console.error('Error deleting restaurant:', error);
    }
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

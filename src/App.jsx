import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './ui/Navbar'
import Home from './pages/Home'
import Search from './pages/Search'
import NewRestaurant from './pages/NewRestaurant'

function App() {
  
  return (
    <Router>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <div className="w-full p-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/new" element={<NewRestaurant />} />
            </Routes>
          </div>
        </div>
    </Router>
    
  );
}

export default App;
// src/App.jsx
import { Routes, Route } from "react-router-dom";
import './App.css';

import Navbar from './components/navbar/navbar';
import Home from './pages/home/home';
import Favorites from './pages/favorites/favorites';
import Details from './pages/details/details';

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Navbar stays on all pages */}
      <Navbar />

      {/* Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/recipe-item/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

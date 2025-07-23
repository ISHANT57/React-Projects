import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Recipe App</h1>
      <ul className="flex space-x-4">
        <li>
          <NavLink to="/" className="hover:text-yellow-300">Home</NavLink>
        </li>
        <li>
          <NavLink to="/add" className="hover:text-yellow-300">Add Recipe</NavLink>
        </li>
        <li>
          <NavLink to="/bookmarks" className="hover:text-yellow-300">Bookmarks</NavLink>
        </li>
        <li>
          <NavLink to="/login" className="hover:text-yellow-300">Login</NavLink>
        </li>
        <li>
          <NavLink to="/register" className="hover:text-yellow-300">Register</NavLink>
        </li>
      </ul>
    </nav>
  );
}

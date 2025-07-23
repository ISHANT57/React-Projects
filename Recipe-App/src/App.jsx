// File: App.jsx
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import RecipeDetail from './pages/RecipeDetail';
// import AddRecipe from './pages/AddRecipe';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Bookmarks from './pages/Bookmarks';
// import SearchBar from './components/SearchBar';
import Navbar from "./components/navbar/navbar.jsx";
import Footer from "./components/Footer/footer.jsx"; // ✅ lowercase + no trailing space
 // ✅ correct

import Home from './pages/home/home.jsx';
import RecipeDetail from './pages/RecipeDetail/details.jsx';
import AddRecipe from './pages/AddRecipe/addrecipe.jsx';
import Login from './pages/Login/login.jsx';
import Register from "./pages/Register/register.jsx";
import Bookmarks from './pages/Bookmark/bookmark.jsx';
import SearchBar from './components/SearchBar/searchbar.jsx';

export default function App() {
  // 🔖 Bookmarks stored in localStorage
  const [bookmarks, setBookmarks] = useState(() => {
    const stored = localStorage.getItem('bookmarks');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const addBookmark = (recipe) => {
    if (!bookmarks.some((b) => b.id === recipe.id)) {
      setBookmarks([...bookmarks, recipe]);
    }
  };

  const removeBookmark = (id) => {
    setBookmarks(bookmarks.filter((b) => b.id !== id));
  };

  // 🔍 Search term state
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-6">
        {/* 🔍 SearchBar on Home Page */}
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <Routes>
          <Route path="/" element={<Home addBookmark={addBookmark} searchTerm={searchTerm} />} />
          <Route path="/recipe/:id" element={<RecipeDetail addBookmark={addBookmark} />} />
          <Route path="/add" element={<AddRecipe />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/bookmarks" element={<Bookmarks bookmarks={bookmarks} removeBookmark={removeBookmark} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

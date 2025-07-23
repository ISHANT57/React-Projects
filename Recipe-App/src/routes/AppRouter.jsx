import { Routes, Route } from "react-router-dom";

import Favorites from "../pages/favorites/favorites";
import Details from "../pages/details/details";
import Login from "../pages/Login/login";
import SignUp from "../pages/SignUp/signup";
import AddRecipe from '../pages/AddRecipe/addrecipe.jsx'; // ✅ match file name exactly
import Home from '../pages/home/home.jsx';                 // ✅ lowercase




export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/recipe-item/:id" element={<Details />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/add-recipe" element={<AddRecipe/>} />
        </Routes>
    );
}

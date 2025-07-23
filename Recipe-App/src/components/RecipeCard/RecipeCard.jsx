import React from 'react';
import { Link } from 'react-router-dom';

export default function RecipeCard({ recipe, addBookmark }) {
  return (
    <div className="bg-white rounded shadow p-4">
      <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover rounded" />
      <h2 className="text-lg font-semibold mt-2">{recipe.title}</h2>
      <p className="text-gray-600">Category: {recipe.category}</p>
      <div className="flex justify-between mt-2">
        <Link to={`/recipe/${recipe.id}`} className="text-green-600">View</Link>
        <button
          className="text-sm bg-green-100 text-green-600 px-2 py-1 rounded"
          onClick={() => addBookmark(recipe)}
        >
          Bookmark
        </button>
      </div>
    </div>
  );
}

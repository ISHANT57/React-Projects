import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function RecipeDetail({ addBookmark }) {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => {
        const meal = data.meals[0];
        setRecipe({
          id: meal.idMeal,
          title: meal.strMeal,
          category: meal.strCategory,
          image: meal.strMealThumb,
          instructions: meal.strInstructions,
        });
      });
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} className="w-full max-w-md mb-4 rounded" />
      <p className="mb-2">Category: {recipe.category}</p>
      <p className="mb-4 whitespace-pre-wrap">{recipe.instructions}</p>
      <button
        className="bg-green-600 text-white px-4 py-2 rounded"
        onClick={() => addBookmark(recipe)}
        disabled={!recipe}
      >
        Bookmark
      </button>
    </div>
  );
}

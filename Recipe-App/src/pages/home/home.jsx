// import React, { useEffect, useState } from 'react';
// import RecipeCard from "../../components/RecipeCard/RecipeCard.jsx";
// import AddRecipe from '../AddRecipe/addrecipe.jsx';

// const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

// export default function Home({ addBookmark, searchTerm }) {
//   const [recipes, setRecipes] = useState([]);

//   useEffect(() => {
//     const fetchRecipes = async () => {
//       try {
//         const response = await fetch(API_URL + (searchTerm || ''));
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json();

//         const meals = data.meals || [];
//         const formatted = meals.map((meal) => ({
//           id: meal.idMeal,
//           title: meal.strMeal,
//           category: meal.strCategory,
//           image: meal.strMealThumb,
//         }));

//         setRecipes(formatted);
//       } catch (error) {
//         console.error('Failed to fetch recipes:', error);
//       }
//     };

//     fetchRecipes();
//   }, [searchTerm]);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
//       {recipes.length > 0 ? (
//         recipes.map((recipe) => (
//           <RecipeCard key={recipe.id} recipe={recipe} addBookmark={addBookmark} />
//         ))
//       ) : (
//         <p className="text-center col-span-full text-gray-500">No recipes found.</p>
//       )}
//     </div>
//   );
// }
// Home.jsx
import React, { useEffect, useState } from 'react';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import { useRecipeContext } from '../../context/RecipeContext';

const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

export default function Home({ addBookmark, searchTerm }) {
  const [recipes, setRecipes] = useState([]);
  const { userRecipes } = useRecipeContext(); // fetch manually added ones

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(API_URL + (searchTerm || ''));
        const data = await response.json();
        const meals = data.meals || [];

        const formatted = meals.map((meal) => ({
          id: meal.idMeal,
          title: meal.strMeal,
          category: meal.strCategory,
          image: meal.strMealThumb,
        }));

        setRecipes(formatted);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchRecipes();
  }, [searchTerm]);

  const combinedRecipes = [...userRecipes, ...recipes];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {combinedRecipes.length > 0 ? (
        combinedRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} addBookmark={addBookmark} />
        ))
      ) : (
        <p className="text-center col-span-full text-gray-500">No recipes found.</p>
      )}
    </div>
  );
}

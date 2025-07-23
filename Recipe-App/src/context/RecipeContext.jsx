import React, { createContext, useContext, useState } from 'react';

const RecipeContext = createContext();

export const useRecipeContext = () => useContext(RecipeContext);

export const RecipeProvider = ({ children }) => {
  const [userRecipes, setUserRecipes] = useState([]); // manually added recipes

  const addUserRecipe = (recipe) => {
    setUserRecipes((prev) => [
      { ...recipe, id: Date.now().toString() },
      ...prev,
    ]);
  };

  return (
    <RecipeContext.Provider value={{ userRecipes, addUserRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};

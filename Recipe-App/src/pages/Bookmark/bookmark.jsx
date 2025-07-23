import React from 'react';
import RecipeCard from "../../components/RecipeCard/RecipeCard.jsx";

export default function Bookmarks({ bookmarks = [], removeBookmark = () => {} }) {
  const [clicked, setClicked] = React.useState([]);

  const handleToggle = (id) => {
    if (clicked.includes(id)) {
      setClicked(clicked.filter((item) => item !== id));
    } else {
      setClicked([...clicked, id]);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Bookmarked Recipes</h2>
      {bookmarks.length === 0 ? (
        <p>No bookmarks yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookmarks.map((recipe) => (
            <div key={recipe.id} className="relative">
              {!recipe ? (
                <p>Loading...</p>
              ) : (
                <>
                  <RecipeCard recipe={recipe} addBookmark={() => {}} />
                  <button
                    className={`absolute top-2 right-2 text-xs px-2 py-1 rounded transition-colors duration-200 ${
                      clicked.includes(recipe.id)
                        ? "bg-green-600 text-white"
                        : "bg-red-500 text-white"
                    }`}
                    onClick={() => {
                      handleToggle(recipe.id);
                      removeBookmark(recipe.id);
                    }}
                  >
                    {clicked.includes(recipe.id) ? "Removed" : "Remove"}
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

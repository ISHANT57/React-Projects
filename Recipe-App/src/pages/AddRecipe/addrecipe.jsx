// import React, { useState } from 'react';

// export default function AddRecipe() {
//   const [title, setTitle] = useState('');
//   const [category, setCategory] = useState('');
//   const [image, setImage] = useState('');
//   const [instructions, setInstructions] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log({ title, category, image, instructions });
//     alert('Recipe added!');
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
//       <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 border rounded" />
//       <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} className="w-full p-2 border rounded" />
//       <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} className="w-full p-2 border rounded" />
//       <textarea placeholder="Instructions" value={instructions} onChange={(e) => setInstructions(e.target.value)} className="w-full p-2 border rounded h-40" />
//       <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Add Recipe</button>
//     </form>
//   );
// }
// addrecipe.jsx
import React, { useState } from 'react';
import { useRecipeContext } from '../../context/RecipeContext';
import { useNavigate } from 'react-router-dom';

export default function AddRecipe() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const { addUserRecipe } = useRecipeContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !category || !image) return alert('All fields required');

    addUserRecipe({ title, category, image });
    navigate('/'); // redirect to homepage
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-4 rounded shadow mt-6">
      <h2 className="text-xl font-bold mb-4">Add New Recipe</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full mb-2 p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full mb-2 p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="w-full mb-2 p-2 border rounded"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add Recipe
      </button>
    </form>
  );
}

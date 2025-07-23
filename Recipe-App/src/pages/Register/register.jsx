import React from 'react';

export default function Register() {
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Register</h2>
      <input type="text" placeholder="Name" className="w-full mb-2 p-2 border rounded" />
      <input type="email" placeholder="Email" className="w-full mb-2 p-2 border rounded" />
      <input type="password" placeholder="Password" className="w-full mb-2 p-2 border rounded" />
      <button className="bg-green-600 text-white px-4 py-2 rounded">Register</button>
    </div>
  );
}

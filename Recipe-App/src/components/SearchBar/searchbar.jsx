import React from 'react';

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      onKeyDown={(e) => e.key === 'Enter' && setSearchTerm(e.target.value)}
      placeholder="Search recipes..."
      className="border px-4 py-2 rounded w-full md:w-1/2"
    />
  );
}

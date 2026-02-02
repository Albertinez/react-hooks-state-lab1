import React from 'react';

function Filter({ selectedCategory, onCategoryChange }) {
  const categories = ['All', 'Dairy', 'Produce', 'Fruits'];

  return (
    <select 
      value={selectedCategory} 
      onChange={(e) => onCategoryChange(e.target.value)}
    >
      {categories.map(category => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}

export default Filter;
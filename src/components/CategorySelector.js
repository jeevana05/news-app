// src/components/CategorySelector.js
import React, { useState } from 'react';
import NavigationBar from './NavigationBar';
import News from './News';

const CategorySelector = () => {
  const [selectedCategory, setSelectedCategory] = useState('General');
  const categories = ['General', 'Business', 'Technology', 'Entertainment','Health', 'Sports', 'Science' /* Add more categories here */];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <NavigationBar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategoryChange}
      />
      <News category={selectedCategory} />
    </div>
  );
};

export default CategorySelector;

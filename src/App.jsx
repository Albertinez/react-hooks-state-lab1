import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Filter from './components/Filter';
import { sampleProducts } from './data';

// Sample products data
 

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState([]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Filter products by category
  const filteredProducts = selectedCategory === 'All' 
    ? sampleProducts 
    : sampleProducts.filter(product => product.category === selectedCategory);

  // Add item to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
     <button onClick={toggleDarkMode}>
  {isDarkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
</button>
      
      <Filter 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      
      <ProductList 
        products={filteredProducts}
        onAddToCart={addToCart}
      />
      
      <Cart items={cart} />
    </div>
  );
}

export { sampleProducts };
export default App;
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Filter from './components/Filter';
// Sample products data
const sampleProducts = [
  { id: 1, name: 'Apple', category: 'Fruits', price: 1.99 },
  { id: 2, name: 'Banana', category: 'Fruits', price: 0.99 },
  { id: 3, name: 'Milk', category: 'Dairy', price: 3.49 },
  { id: 4, name: 'Cheese', category: 'Dairy', price: 4.99 },
  { id: 5, name: 'Carrot', category: 'Produce', price: 1.49 },
  { id: 6, name: 'Lettuce', category: 'Produce', price: 2.29 }
];

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
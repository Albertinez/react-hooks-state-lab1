import { useState } from 'react';
import DarkModeToggle from './components/DarkModeToggle';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

// Sample product data
const products = [
  { id: 1, name: 'Milk', category: 'Dairy', price: 3.99 },
  { id: 2, name: 'Bread', category: 'Bakery', price: 2.49 },
  { id: 3, name: 'Cheese', category: 'Dairy', price: 5.99 },
  { id: 4, name: 'Apples', category: 'Produce', price: 4.99 },
  { id: 5, name: 'Chicken', category: 'Meat', price: 8.99 },
  { id: 6, name: 'Carrots', category: 'Produce', price: 2.99 },
  { id: 7, name: 'Croissant', category: 'Bakery', price: 3.49 },
  { id: 8, name: 'Yogurt', category: 'Dairy', price: 4.49 },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState('All');

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  // Get unique categories
  const categories = ['All', ...new Set(products.map(p => p.category))];

  return (
    <div className={darkMode ? 'app dark-mode' : 'app'}>
      <header>
        <h1>Grocery Shopping App</h1>
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </header>

      <div className="category-filter">
        <label htmlFor="category">Filter by Category: </label>
        <select id="category" value={category} onChange={handleCategoryChange}>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="main-content">
        <ProductList 
          products={products} 
          category={category}
          addToCart={addToCart}
        />
        <Cart cart={cart} />
      </div>
    </div>
  );
}

export default App;
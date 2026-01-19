import { useState } from "react";
import DarkModeToggle from "./components/DarkModeToggle";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Milk", category: "Dairy" },
    { id: 2, name: "Cheese", category: "Dairy" },
    { id: 3, name: "Apple", category: "Produce" },
    { id: 4, name: "Carrot", category: "Produce" },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className={darkMode ? "dark" : "light"}>
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Produce">Produce</option>
      </select>

      <ProductList
        products={products}
        category={category}
        addToCart={addToCart}
      />

      <Cart cart={cart} />
    </div>
  );
}

export default App;

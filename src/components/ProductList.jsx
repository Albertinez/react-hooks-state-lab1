import ProductCard from './ProductCard';

function ProductList({ products, category, addToCart }) {
  const filteredProducts = category === 'All' 
    ? products 
    : products.filter(product => product.category === category);

  return (
    <div className="product-list">
      <h2>Products</h2>
      <div className="products-grid">
        {filteredProducts.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
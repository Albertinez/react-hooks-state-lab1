import React from 'react';

function ProductList({ products, onAddToCart }) {
  if (products.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
          <button 
            data-testid={`product-${product.id}`}
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
function ProductCard({ product, addToCart }) {
  return (
    <div>
      <p>{product.name}</p>
      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;

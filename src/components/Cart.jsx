function Cart({ cart }) {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name} is in your cart.</li>
          ))}
        </ul>
      )}
      <p className="cart-total">Items in cart: {cart.length}</p>
    </div>
  );
}

export default Cart;
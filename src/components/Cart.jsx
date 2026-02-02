import React from 'react';

function Cart({ items }) {
  return (
    <div>
      <h2>Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <p>Shopping Cart</p>
          {items.map((item, index) => (
            <div key={index}>
              <p>{item.name} - ${item.price}</p>
            </div>
          ))}
          <p>Total: ${items.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
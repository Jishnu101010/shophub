import React from "react";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <div className="cart-page">

      <h1>
        My Cart
      </h1>

      <div className="empty-cart">

        <div className="cart-icon">
          🛒
        </div>

        <h2>
          Your Shopping Cart is Empty
        </h2>

        <p>
          Add products to your cart and they will appear here.
        </p>

        <Link
          to="/products"
          className="continue-shopping-button"
        >
          Continue Shopping
        </Link>

      </div>

    </div>
  );
}

export default Cart;
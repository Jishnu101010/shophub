import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {

  return (

    <Link
      to={`/product/${product.id}`}
      className="product-card"
    >

      <div className="product-image">

        <img
          src={product.image}
          alt={product.name}
        />

      </div>

      <h3>
        {product.name}
      </h3>

      <div className="rating">
        ⭐⭐⭐⭐⭐
        <span>
          ({product.reviews})
        </span>
      </div>

      <div className="product-price">
        ₹{product.price.toLocaleString("en-IN")}
      </div>

      <div className="old-price">
        M.R.P.
        <s>
          ₹{product.oldPrice.toLocaleString("en-IN")}
        </s>
      </div>

      <p className="delivery">
        FREE Delivery
      </p>

      <button
        className="cart-button"
        onClick={(e) => e.preventDefault()}
      >
        Add to Cart
      </button>

    </Link>
  );
}

export default ProductCard;
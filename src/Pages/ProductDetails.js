import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { Link } from "react-router-dom";

function ProductDetails() {

  const { id } = useParams();

  const product = products.find(
    item => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="not-found">
        <h1>Product not found</h1>
      </div>
    );
  }

  return (

    <div className="product-details">

      <div className="details-image">

        <img
          src={product.image}
          alt={product.name}
        />

      </div>


      <div className="details-info">

        <h1>
          {product.name}
        </h1>

        <div className="details-rating">

          ⭐⭐⭐⭐⭐

          <span>
            {product.rating}
          </span>

          <span>
            ({product.reviews} ratings)
          </span>

        </div>

        <hr />

        <p className="deal">
          Limited time deal
        </p>

        <div className="details-price">
          ₹{product.price.toLocaleString("en-IN")}
        </div>

        <p>
          M.R.P.
          <s>
            ₹{product.oldPrice.toLocaleString("en-IN")}
          </s>
        </p>

        <p className="tax">
          Inclusive of all taxes
        </p>

        <hr />

        <h3>
          About this product
        </h3>

        <p className="description">
          {product.description}
        </p>

        <h3>
          Features
        </h3>

        <ul>

          {product.features.map(
            (feature, index) => (

              <li key={index}>
                {feature}
              </li>

            )
          )}

        </ul>


        <div className="purchase-box">

          <p>
            🚚 FREE Delivery
          </p>

          <p>
            📦 In Stock
          </p>

          <button>
            Add to Cart
          </button>

<Link
  to="/buy"
  className="buy-now"
>
  Buy Now
</Link>
        </div>

      </div>

    </div>
  );
}

export default ProductDetails;
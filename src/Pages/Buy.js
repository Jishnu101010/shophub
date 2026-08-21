import React from "react";
import { Link } from "react-router-dom";

function Buy() {

  return (

    <div className="buy-page">

      <div className="buy-container">

        <h1>
          Complete Your Order
        </h1>

        {/* DELIVERY ADDRESS */}

        <div className="buy-section">

          <h2>
            1. Delivery Address
          </h2>

          <div className="address-box">

            <input
              type="text"
              placeholder="Full Name"
            />

            <input
              type="text"
              placeholder="Phone Number"
            />

            <textarea
              placeholder="Full Delivery Address"
              rows="3"
            />

            <div className="address-row">

              <input
                type="text"
                placeholder="City"
              />

              <input
                type="text"
                placeholder="PIN Code"
              />

            </div>

          </div>

        </div>


        {/* PRODUCT */}

        <div className="buy-section">

          <h2>
            2. Order Summary
          </h2>

          <div className="order-product">

            <div className="order-product-image">
              📦
            </div>

            <div>

              <h3>
                Selected Product
              </h3>

              <p>
                Quantity: 1
              </p>

              <strong>
                ₹1,999
              </strong>

            </div>

          </div>

        </div>


        {/* PAYMENT */}

        <div className="buy-section">

          <h2>
            3. Payment Method
          </h2>

          <label className="payment-option">

            <input
              type="radio"
              name="payment"
              defaultChecked
            />

            <span>
              💳 Credit / Debit Card
            </span>

          </label>

          <label className="payment-option">

            <input
              type="radio"
              name="payment"
            />

            <span>
              📱 UPI
            </span>

          </label>

          <label className="payment-option">

            <input
              type="radio"
              name="payment"
            />

            <span>
              💵 Cash on Delivery
            </span>

          </label>

        </div>


        {/* ORDER TOTAL */}

        <div className="order-total">

          <h2>
            Order Total
          </h2>

          <div className="total-row">
            <span>Product</span>
            <span>₹1,999</span>
          </div>

          <div className="total-row">
            <span>Delivery</span>
            <span>FREE</span>
          </div>

          <hr />

          <div className="total-final">
            <span>Total</span>
            <span>₹1,999</span>
          </div>

          <button className="place-order-button">
            Place Order
          </button>

        </div>


        <Link
          to="/products"
          className="back-products"
        >
          ← Continue Shopping
        </Link>

      </div>

    </div>
  );
}

export default Buy;
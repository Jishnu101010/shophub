import React from "react";
import { Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {

  return (

    <div>

      {/* =========================
          HERO
      ========================= */}

      <section className="hero">

        <div className="hero-content">

          <p>BIG SAVINGS ARE HERE</p>

          <h1>
            Everything you need.
            <br />
            All in one place.
          </h1>

          <span>
            Discover amazing products at amazing prices.
          </span>

          <br />

          <Link
            to="/products"
            className="shop-button"
          >
            Shop Now →
          </Link>

        </div>

      </section>


      {/* =========================
          CATEGORIES
      ========================= */}

      <section className="categories-section">

        <h2>
          Shop by Category
        </h2>

        <div className="category-grid">


          {/* ELECTRONICS */}

          <Link
            to="/products"
            className="category-item"
          >

            <img
              src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500"
              alt="Electronics"
            />

            <h3>
              Electronics
            </h3>

          </Link>


          {/* FASHION */}

          <Link
            to="/products"
            className="category-item"
          >

            <img
              src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=500"
              alt="Fashion"
            />

            <h3>
              Fashion
            </h3>

          </Link>


          {/* HOME */}

          <Link
            to="/products"
            className="category-item"
          >

            <img
              src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=500"
              alt="Home & Kitchen"
            />

            <h3>
              Home & Kitchen
            </h3>

          </Link>


          {/* FOOTWEAR */}

          <Link
            to="/products"
            className="category-item"
          >

            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
              alt="Footwear"
            />

            <h3>
              Footwear
            </h3>

          </Link>


        </div>

      </section>


      {/* =========================
          TODAY'S DEALS
      ========================= */}

      <section className="section">

        <div className="section-title">

          <h2>
            Today's Best Deals
          </h2>

          <Link to="/products">
            See all →
          </Link>

        </div>


        <div className="product-grid">

          {products.slice(0, 4).map(product => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))}

        </div>

      </section>


    </div>
  );
}

export default Home;
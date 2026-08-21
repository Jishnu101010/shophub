import React, { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Products() {

  const [categoryOpen, setCategoryOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);

  return (

    <div className="products-page">

      {/* PAGE HEADER */}

      <div className="page-header">
        <h1>All Products</h1>
        <p>Explore our collection of products</p>
      </div>


      <div className="products-layout">

        {/* =========================
            FILTERS
        ========================= */}

        <aside className="filters">

          {/* CATEGORY */}

          <div className="filter-section">

            <button
              className="filter-title"
              onClick={() => setCategoryOpen(!categoryOpen)}
            >
              <span>Categories</span>

              <span>
                {categoryOpen ? "▲" : "▼"}
              </span>
            </button>


            {categoryOpen && (

              <div className="filter-options">

                <label>
                  <input type="checkbox" />
                  Electronics
                </label>

                <label>
                  <input type="checkbox" />
                  Fashion
                </label>

                <label>
                  <input type="checkbox" />
                  Home
                </label>

                <label>
                  <input type="checkbox" />
                  Beauty
                </label>

              </div>

            )}

          </div>


          {/* PRICE */}

          <div className="filter-section">

            <button
              className="filter-title"
              onClick={() => setPriceOpen(!priceOpen)}
            >
              <span>Price</span>

              <span>
                {priceOpen ? "▲" : "▼"}
              </span>
            </button>


            {priceOpen && (

              <div className="filter-options">

                <label>
                  <input type="checkbox" />
                  Under ₹500
                </label>

                <label>
                  <input type="checkbox" />
                  ₹500 - ₹1,000
                </label>

                <label>
                  <input type="checkbox" />
                  ₹1,000 - ₹5,000
                </label>

                <label>
                  <input type="checkbox" />
                  Above ₹5,000
                </label>

              </div>

            )}

          </div>

        </aside>


        {/* =========================
            PRODUCTS
        ========================= */}

        <main className="all-products">

          <div className="product-grid">

            {products.map((product) => (

              <ProductCard
                key={product.id}
                product={product}
              />

            ))}

          </div>

        </main>

      </div>

    </div>
  );
}

export default Products;
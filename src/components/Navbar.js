import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      {/* LOGO */}
      <Link to="/" className="logo">
        Shop<span>Hub</span>
      </Link>

      {/* ALL */}
      <Link to="/products" className="nav-link">
        ☰ All
      </Link>

      {/* SEARCH */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
        />

        <button>
          🔍
        </button>
      </div>

      {/* NAVIGATION */}
      <div className="nav-links">

        <Link to="/products">
          All Products
        </Link>

        <Link to="/profile">
          👤 Profile
        </Link>

        <Link to="/cart">
          🛒 My Cart
        </Link>

        {/* SIGN IN */}
        <Link
          to="/login"
          className="signin-nav-button"
        >
          Sign In
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;
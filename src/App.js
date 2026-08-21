import React from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Buy from "./Pages/Buy";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
<Route
  path="/buy"
  element={<Buy />}
/>
        <Route path="/" element={<Home />} />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
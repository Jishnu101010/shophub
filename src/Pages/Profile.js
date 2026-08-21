import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="profile-page">

      <h1>My Profile</h1>

      <div className="profile-card">

        <div className="profile-avatar">
          👤
        </div>

        <h2>
          Welcome to ShopHub
        </h2>

        <p>
          Sign in to view your orders and manage your account.
        </p>

        <Link
          to="/login"
          className="profile-signin-button"
        >
          Sign In
        </Link>

      </div>

    </div>
  );
}

export default Profile;
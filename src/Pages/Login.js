import React from "react";

function Login() {

  return (

    <div className="login-page">

      <div className="login-box">

        <h1>
          ShopHub
        </h1>

        <h2>
          Sign in
        </h2>

        <label>
          Email or mobile number
        </label>

        <input
          type="text"
          placeholder="Enter email or mobile"
        />

        <label>
          Password
        </label>

        <input
          type="password"
          placeholder="Enter password"
        />

        <button>
          Sign In
        </button>

        <p>
          New to ShopHub?
        </p>

        <button className="create-account">
          Create your ShopHub account
        </button>

      </div>

    </div>
  );
}

export default Login;
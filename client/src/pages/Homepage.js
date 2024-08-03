import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const token = localStorage.getItem("token");

  if (!token) {
    return (
      <Link to="/login">
        <p>please login</p>
      </Link>
    );
  }
  return (
    <div>
      <h1>Welcome to the E-Commerce Platform</h1>
    </div>
  );
}

export default HomePage;

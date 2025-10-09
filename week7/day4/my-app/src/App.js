import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Example1 from "./Example1";
import Example2 from "./Example2";
import Example3 from "./Example3";
import WebhookPoster from "./WebhookPoster";

import ErrorBoundary from "./ErrorBoundary";
import PostList from "./PostList"; // from Exercise 2 — optional to show on home

// Simple functional components
const HomeScreen = () => (
  <div className="container mt-4">
    <h1>Home</h1>
    <p>Welcome to the demo home page.</p>
    <PostList /> {/* optional: show posts list here (Exercise 2) */}
  </div>
);

const ProfileScreen = () => (
  <div className="container mt-4">
    <h1>Profile</h1>
    <p>This is the profile screen.</p>
  </div>
);

// ShopScreen intentionally throws an error to test ErrorBoundary
const ShopScreen = () => {
  throw new Error("Shop crashed intentionally for demo");
  // return <div className="container mt-4"><h1>Shop</h1></div>;
};

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            MyDemo
          </NavLink>
          <li className="nav-item">
            <NavLink to="/webhook" className="nav-link">
              Webhook
            </NavLink>
          </li>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/profile" className="nav-link">
                  Profile
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/shop" className="nav-link">
                  Shop
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <ErrorBoundary>
              <HomeScreen />
            </ErrorBoundary>
          }
        />
        <Route
          path="/profile"
          element={
            <ErrorBoundary>
              <ProfileScreen />
            </ErrorBoundary>
          }
        />
        <Route
          path="/shop"
          element={
            <ErrorBoundary>
              <ShopScreen />
            </ErrorBoundary>
          }
        />
        <Route
          path="/webhook"
          element={
            <ErrorBoundary>
              <WebhookPoster />
            </ErrorBoundary>
          }
        />
      </Routes>
      <div className="container mt-5">
        <h2>Other Examples</h2>
        <Example1 />
        <Example2 />
        <Example3 />
      </div>
    </BrowserRouter>
  );
}

export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';

function App() {
  // Get cart items from Redux store and calculate total quantity
  const cartItems = useSelector((state) => state.cart.items);
  const totalCartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Landing Page Component (Required: Welcome Message + Get Started Button)
  const LandingPage = () => {
    return (
      <div className="landing-page">
        <h1>Welcome To Paradise Nursery</h1>
        <h2>Where Green Meets Serenity!</h2>
        <p>
          At Paradise Nursery, we are passionate about bringing nature closer to you. Our mission is to provide a wide range of high-quality plants that enhance the beauty of your surroundings and enable a sustainable lifestyle. From air-purifying plants to aromatic greens, from medicinal herbs to decorative foliage, we have everything to turn your space into a green paradise.
        </p>
        <Link to="/products">
          <button className="get-started-btn">Get Started</button>
        </Link>
      </div>
    );
  };

  return (
    <Router>
      {/* Global Navigation Bar */}
      <nav className="navbar">
        <Link to="/" className="navbar-logo">Paradise Nursery</Link>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/products">Plants</Link>
          <Link to="/about">About Us</Link>
          <Link to="/cart" className="cart-icon">
            🛒 Cart
            <span className="cart-count">{totalCartQuantity}</span>
          </Link>
        </div>
      </nav>

      {/* Route Configuration */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;

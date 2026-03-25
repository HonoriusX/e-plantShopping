
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateQuantity, removeItem } from './CartSlice';
import './CartItem.css';

const CartItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate subtotal for a single item
  const calculateItemTotal = (item) => {
    const price = parseFloat(item.cost.substring(1)); // Parse "$12" to 12
    return price * item.quantity;
  };

  // Calculate total cart amount
  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + calculateItemTotal(item), 0);
  };

  // Handle quantity increment
  const handleIncrement = (item) => {
    const newQuantity = item.quantity + 1;
    dispatch(updateQuantity({ name: item.name, amount: newQuantity }));
  };

  // Handle quantity decrement (delete if quantity reaches 0)
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      const newQuantity = item.quantity - 1;
      dispatch(updateQuantity({ name: item.name, amount: newQuantity }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  // Handle item deletion
  const handleRemove = (itemName) => {
    dispatch(removeItem(itemName));
  };

  // Navigate back to product list
  const handleContinueShopping = () => {
    navigate('/products');
  };

  // Checkout placeholder (required: alert only)
  const handleCheckoutShopping = () => {
    alert('Functionality to be added for future reference');
  };

  // Empty cart state
  if (cartItems.length === 0) {
    return (
      <div className="container cart-container">
        <h1>Your Shopping Cart</h1>
        <div className="empty-cart">
          <p>Your cart is empty. Start shopping to add plants to your paradise!</p>
          <button className="continue-shopping-btn" onClick={handleContinueShopping}>
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  // Cart with items
  return (
    <div className="container cart-container">
      <h1>Your Shopping Cart</h1>
      <div className="cart-items-list">
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item-card">
            <div className="cart-item-img">
              <img src={item.img} alt={item.name} />
            </div>
            <div className="cart-item-info">
              <h3 className="cart-item-name">{item.name}</h3>
              <p className="cart-item-unit-price">Unit Price: {item.cost}</p>
            </div>
            <div className="cart-item-quantity">
              <button className="quantity-btn" onClick={() => handleDecrement(item)}>-</button>
              <span className="quantity-value">{item.quantity}</span>
              <button className="quantity-btn" onClick={() => handleIncrement(item)}>+</button>
            </div>
            <div className="cart-item-subtotal">
              <p>Total: ${calculateItemTotal(item).toFixed(2)}</p>
            </div>
            <div className="cart-item-delete">
              <button className="delete-btn" onClick={() => handleRemove(item.name)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-footer">
        <div className="cart-total">
          <h2>Total Cart Amount: ${calculateTotalAmount().toFixed(2)}</h2>
        </div>
        <div className="cart-actions">
          <button className="continue-shopping-btn" onClick={handleContinueShopping}>
            Continue Shopping
          </button>
          <button className="checkout-btn" onClick={handleCheckoutShopping}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

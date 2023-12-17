// src/components/OnlineStore.jsx
import React, { useState } from 'react';
import './OnlineStore.css';

const OnlineStore = () => {
  const [cart, setCart] = useState([]);
  const [products] = useState([
    { id: 1, name: 'Suco de Laranja', price: 5.99 },
    { id: 2, name: 'Suco de Maçã', price: 4.99 },
    { id: 3, name: 'Suco de Uva', price: 6.99 },
    // Adicione mais produtos conforme necessário
  ]);

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const confirmOrder = () => {
    // Lógica para confirmar o pedido, pode ser adicionada aqui
    console.log('Pedido Confirmado:', cart);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Smart Factory Online Store</h1>
      </div>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <div className="product-info">
              <span className="product-name">{product.name}</span>
              <span className="product-price">${product.price.toFixed(2)}</span>
            </div>
            <div>
              <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart">
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <button className="confirm-order-btn" onClick={confirmOrder}>
            Confirm Order
          </button>
        </div>
        <ul className="cart-items">
          {cart.map((item, index) => (
            <li key={index} className="cart-item">
              <div className="cart-item-info">
                <span className="cart-product-name">{item.name}</span>
                <span className="cart-product-price">${item.price.toFixed(2)}</span>
              </div>
              <div>
                <button className="remove-from-cart-btn" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OnlineStore;

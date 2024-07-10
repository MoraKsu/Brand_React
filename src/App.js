import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Cart from './pages/Cart';
import Catalog from './pages/Catalog';
import SinglePage from './pages/SinglePage';

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = (product) => {
    setCart((prevCart) => {
      const newCart = [...prevCart];
      const existingProductIndex = newCart.findIndex(item => item.id === product.id);
      if (existingProductIndex >= 0) {
        newCart[existingProductIndex].quantity += 1;
      } else {
        newCart.push({ ...product, quantity: 1 });
      }
      saveCartToJson(newCart);
      return newCart;
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const newCart = prevCart.filter((item) => item.id !== id);
      saveCartToJson(newCart);
      return newCart;
    });
  };

  const updateQuantity = (id, quantity) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === id ? { ...item, quantity: parseInt(quantity, 10) } : item
      );
      saveCartToJson(updatedCart);
      return updatedCart;
    });
  };

  const clearCart = () => {
    const newCart = [];
    setCart(newCart);
    saveCartToJson(newCart);
  };

  const saveCartToJson = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/Brand_React" element={<Home addToCart={addToCart} cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />} />
        <Route path="/checkout" element={<Checkout cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} clearCart={clearCart} />} />
        <Route path="/catalog" element={<Catalog addToCart={addToCart} cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />} />
        <Route path="/singlePage" element={<SinglePage addToCart={addToCart} cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />} />
      </Routes>
    </Router>
  );
}

export default App;

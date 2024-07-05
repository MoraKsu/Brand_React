import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import TopNav from '../components/Header/TopNav';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import Reviews from '../components/Reviews/Reviews';
import CartItems from '../components/CartItems/CartItems';
import Footer from '../components/Footer/Footer';
import FooterSoc from '../components/Footer/FooterSoc';

function Cart({ cart, removeFromCart, updateQuantity, clearCart }) {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const products = require('../data/products.json');
    setProductsData(products);
  }, []);

  return (
    <div>
      <Header cart={cart} />
      <TopNav />
      <Breadcrumbs />
      <CartItems products={productsData} cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} clearCart={clearCart} />
      <div style={{ paddingTop: '100px' }}>
        <Reviews />
      </div>
      <Footer />
      <FooterSoc />
    </div>
  );
}

export default Cart;


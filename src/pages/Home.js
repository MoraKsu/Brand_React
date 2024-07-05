import React, { useState, useEffect } from 'react';
import TopNav from '../components/Header/TopNav';
import Header from '../components/Header/Header';
import BgrdHomeTop from '../components/BgrdHomeTop/BgrdHomeTop';
import PromoHome from '../components/PromoHome/PromoHome';
import Product from '../components/Product/Product';
import Reviews from '../components/Reviews/Reviews';
import Footer from '../components/Footer/Footer';
import FooterSoc from '../components/Footer/FooterSoc';

const Home = ({ addToCart, cart, removeFromCart, updateQuantity }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsData = require('../data/products.json');
    setProducts(productsData);
  }, []);

  return (
    <div>
      <Header cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
      <TopNav />
      <BgrdHomeTop />
      <PromoHome />
      <Product products={products} addToCart={addToCart} />
      <Reviews />
      <Footer />
      <FooterSoc />
    </div>
  );
};

export default Home;

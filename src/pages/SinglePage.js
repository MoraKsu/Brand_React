import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import TopNav from '../components/Header/TopNav';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import Reviews from '../components/Reviews/Reviews';
import Footer from '../components/Footer/Footer';
import FooterSoc from '../components/Footer/FooterSoc';
import SliderImg from '../components/SliderImg/SliderImg';
import SinglePageDescription from '../components/SinglePageDescription/SinglePageDescription';
import SinglePageProduct from '../components/SinglePageProduct/SinglePageProduct';


function SinglePage({ addToCart, cart, removeFromCart, updateQuantity}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsData = require('../data/singlePageProducts.json');
    setProducts(productsData);
  }, []);
  return (
    <div>
      <Header cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
      <TopNav />
      <Breadcrumbs />
      <SliderImg />
      <SinglePageDescription products={products} addToCart={addToCart} />
      <SinglePageProduct products={products} addToCart={addToCart} />
      <div style={{ paddingTop: '100px' }}>
        <Reviews />
      </div>
      <Footer />
      <FooterSoc />
    </div>
  );
}

export default SinglePage;
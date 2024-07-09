import React from 'react';
import Header from '../components/Header/Header';
import TopNav from '../components/Header/TopNav';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import Reviews from '../components/Reviews/Reviews';

import Footer from '../components/Footer/Footer';
import FooterSoc from '../components/Footer/FooterSoc';


function SinglePage({ cart, removeFromCart, updateQuantity}) {



  return (
    <div>
      <Header cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
      <TopNav />
      <Breadcrumbs />
      <div style={{ paddingTop: '100px' }}>
        <Reviews />
      </div>
      <Footer />
      <FooterSoc />
    </div>
  );
}

export default SinglePage;
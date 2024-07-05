import React from 'react';
import TopNav from '../components/Header/TopNav';
import Header from '../components/Header/Header';
import Reviews from '../components/Reviews/Reviews';
import Footer from '../components/Footer/Footer';
import FooterSoc from '../components/Footer/FooterSoc';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import ShippingAddress from '../components/ShippingAddress/ShippingAddress';

const Checkout = ({ cart, removeFromCart }) => {
  return (
    <div>
      <Header cart={cart} removeFromCart={removeFromCart} />
      <TopNav />
      <Breadcrumbs />
      <ShippingAddress />
      <div style={{ paddingTop: '100px' }}>
        <Reviews />
      </div>
      <Footer />
      <FooterSoc />
    </div>
  );
};

export default Checkout;

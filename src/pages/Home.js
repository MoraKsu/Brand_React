import React from 'react';
import TopNav from '../components/Header/TopNav';
import Header from '../components/Header/Header';
import BgrdHomeTop from '../components/BgrdHomeTop/BgrdHomeTop';
import PromoHome from '../components/PromoHome/PromoHome';
import Product from '../components/Product/Product';
import Reviews from '../components/Reviews/Reviews';
import Footer from '../components/Footer/Footer';
import FooterSoc from '../components/Footer/FooterSoc';

const Home = () => {
  const [cart, setCart] = React.useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div>
      <Header cart={cart} />
      <TopNav />
      <BgrdHomeTop />
      <PromoHome />
      <Product addToCart={addToCart} />
      <Reviews />
      <Footer />
      <FooterSoc />
    </div>
  );
};

export default Home;

import React from 'react';
import Header from '../components/Header/Header';
import TopNav from '../components/Header/TopNav';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import Reviews from '../components/Reviews/Reviews';
import Footer from '../components/Footer/Footer';
import FooterSoc from '../components/Footer/FooterSoc';
import SideBar from '../components/SideBar/SideBar';
import CatalogSort from '../components/CatalogSort/CatalogSort';
import Advantages from '../components/CatalogSort/Advantages';


function Catalog({ cart, removeFromCart, updateQuantity, addToCart, filterProductsBySize }) {
  return (
    <div>
      <Header cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
      <TopNav />
      <Breadcrumbs />
      <section className="catalog container center">
        <SideBar />
        <CatalogSort addToCart={addToCart} filteredProducts={filterProductsBySize} />
        {/* Your main catalog content here */}
      </section>
      <Advantages />
      <Reviews />
      <Footer />
      <FooterSoc />
    </div>
  );
}

export default Catalog;


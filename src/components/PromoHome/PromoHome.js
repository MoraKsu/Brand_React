import React from 'react';
import { Link } from 'react-router-dom';
import advance1 from '../../img/advance_1_big.png';
import advance2 from '../../img/advance_2.png';
import advance3 from '../../img/advance_3.png';
import advance4 from '../../img/advance_4_big.png';
import './PromoHome.css';

function PromoHome() {
  return (
    <section className="promo container center">
      <Link to="/catalog" className="promo__card card1">
        <img src={advance1} alt="men" />
        <div className="promo__item">
          <p className="promo__desc">HOT DEAL</p>
          <h3 className="promo__title">FOR MEN</h3>
        </div>
      </Link>
      <Link to="/catalog" className="promo__card card2">
        <img src={advance2} alt="women" />
        <div className="promo__item">
          <p className="promo__desc">30% OFFER</p>
          <h3 className="promo__title">WOMEN</h3>
        </div>
      </Link>
      <Link to="/catalog" className="promo__card card3">
        <img src={advance3} alt="Accessories" />
        <div className="promo__item">
          <p className="promo__desc">LUXIROUS &amp; TRENDY</p>
          <h3 className="promo__title">ACCESORIES</h3>
        </div>
      </Link>
      <Link to="/catalog" className="promo__card card4">
        <img src={advance4} alt="kids" />
        <div className="promo__item">
          <p className="promo__desc">NEW ARRIVALS</p>
          <h3 className="promo__title">FOR KIDS</h3>
        </div>
      </Link>
    </section>
  );
}

export default PromoHome;

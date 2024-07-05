import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logoImg from '../../img/logo.png';

const Footer = () => {
  return (
    <footer className="footer container center">
      <div className="footer__info">
        <div className="footer__brand">
        <Link to="/Brand_React"><img src={logoImg} alt="logo" /></Link>
          <p className="footer__text">
            Objectively transition extensive data rather than cross functional solutions. Monotonectally syndicate multidisciplinary materials before go forward benefits. Intrinsicly syndicate an expanded array of processes and cross-unit partnerships.
          </p>
          <p className="footer__text">
            Efficiently plagiarize 24/365 action items and focused infomediaries. Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.
          </p>
        </div>
        <div className="footer__company">
          <h2 className="footer__title">COMPANY</h2>
          <ul className="footer__items">
            <li className="footer__item"><Link to="/Brand_React">Home</Link></li>
            <li className="footer__item"><Link to="/catalog">Shop</Link></li>
            <li className="footer__item"><Link to="/about">About</Link></li>
            <li className="footer__item"><Link to="/how-it-works">How It Works</Link></li>
            <li className="footer__item"><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer__company">
          <h2 className="footer__title">INFORMATION</h2>
          <ul className="footer__items">
            <li className="footer__item"><Link to="/terms">Terms & Condition</Link></li>
            <li className="footer__item"><Link to="/privacy">Privacy Policy</Link></li>
            <li className="footer__item"><Link to="/how-to-buy">How to Buy</Link></li>
            <li className="footer__item"><Link to="/how-to-sell">How to Sell</Link></li>
            <li className="footer__item"><Link to="/promotion">Promotion</Link></li>
          </ul>
        </div>
        <div className="footer__company">
          <h2 className="footer__title">SHOP CATEGORY</h2>
          <ul className="footer__items">
            <li className="footer__item"><Link to="/catalog">Men</Link></li>
            <li className="footer__item"><Link to="/catalog">Women</Link></li>
            <li className="footer__item"><Link to="/catalog">Child</Link></li>
            <li className="footer__item"><Link to="/catalog">Apparel</Link></li>
            <li className="footer__item"><Link to="/catalog">Browse All</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

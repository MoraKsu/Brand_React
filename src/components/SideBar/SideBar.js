import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';

const SideBar = () => {
  return (
    <div className="catalog__filter">
      <details className="catalog__category">
        <summary className="catalog__text">Category</summary>
        <ul className="catalog__items">
          <li className="catalog__item">
            <Link to="#" className="catalog__link">Accessories</Link>
          </li>
          <li className="catalog__item">
            <Link to="#" className="catalog__link">Bags</Link>
          </li>
          <li className="catalog__item">
            <Link to="#" className="catalog__link">Denim</Link>
          </li>
          <li className="catalog__item">
            <Link to="#" className="catalog__link">Hoodies & Sweatshirts</Link>
          </li>
          <li className="catalog__item">
            <Link to="#" className="catalog__link">Jackets & Coats</Link>
          </li>
          <li className="catalog__item">
            <Link to="#" className="catalog__link">Pants</Link>
          </li>
          <li className="catalog__item">
            <Link to="#" className="catalog__link">Polos</Link>
          </li>
          <li className="catalog__item">
            <Link to="#" className="catalog__link">Shirts</Link>
          </li>
          <li className="catalog__item">
            <Link to="#" className="catalog__link">Sweaters & Knits</Link>
          </li>
          <li className="catalog__item">
            <Link to="#" className="catalog__link">T-Shirts</Link>
          </li>
          <li className="catalog__item">
            <Link to="#" className="catalog__link">Tanks</Link>
          </li>
        </ul>
      </details>
      <details className="catalog__category">
        <summary className="catalog__text">Brand</summary>
        <ul className="catalog__items">
          <li className="catalog__item">
            <Link to="#" className="catalog__link">Accessories</Link>
          </li>
          <li className="catalog__item">
            <Link to="#" className="catalog__link">Bags</Link>
          </li>
          <li className="catalog__item">
            <Link to="#" className="catalog__link">Denim</Link>
          </li>
          <li className="catalog__item">
            <Link to="#" className="catalog__link">Hoodies & Sweatshirts</Link>
          </li>
          <li className="catalog__item">
            <Link to="#" className="catalog__link">Jackets & Coats</Link>
          </li>
          <li className="catalog__item">
            <Link to="#" className="catalog__link">Pants</Link>
          </li>
          <li className="catalog__item">
            <Link to="#" className="catalog__link">Polos</Link>
          </li>
          <li className="catalog__item">
            <Link to="#" className="catalog__link">Shirts</Link>
          </li>
          <li className="catalog__item">
            <Link to="#" className="catalog__link">Sweaters & Knits</Link>
          </li>
          <li className="catalog__item">
            <Link to="#" className="catalog__link">T-Shirts</Link>
          </li>
          <li className="catalog__item">
            <Link to="#" className="catalog__link">Tanks</Link>
          </li>
        </ul>
      </details>
      <details className="catalog__category">
        <summary className="catalog__text">Designer</summary>
        <ul className="catalog__items">
          <li className="catalog__item">
            <Link to="#" className="catalog__link">Accessories</Link>
          </li>
          <li className="catalog__item">
            <Link to="#" className="catalog__link">Bags</Link>
          </li>
          <li className="catalog__item">
            <Link to="#" className="catalog__link">Denim</Link>
          </li>
          <li className="catalog__item">
            <Link to="#" className="catalog__link">Hoodies & Sweatshirts</Link>
          </li>
          <li className="catalog__item">
            <Link to="#" className="catalog__link">Jackets & Coats</Link>
          </li>
          <li className="catalog__item">
            <Link to="#" className="catalog__link">Pants</Link>
          </li>
          <li className="catalog__item">
            <Link to="#" className="catalog__link">Polos</Link>
          </li>
          <li className="catalog__item">
            <Link to="#" className="catalog__link">Shirts</Link>
          </li>
          <li className="catalog__item">
            <Link to="#" className="catalog__link">Sweaters & Knits</Link>
          </li>
          <li className="catalog__item">
            <Link to="#" className="catalog__link">T-Shirts</Link>
          </li>
          <li className="catalog__item">
            <Link to="#" className="catalog__link">Tanks</Link>
          </li>
        </ul>
      </details>
    </div>
  );
};

export default SideBar;

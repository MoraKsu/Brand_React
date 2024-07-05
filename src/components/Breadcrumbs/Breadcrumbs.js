import React from 'react';
import { Link } from 'react-router-dom';
import './Breadcrumbs.css';

const Breadcrumbs = () => {
  return (
    <div className="breadcrumbs__top container center">
      <div className="breadcrumbs__info">
        <h1 className="breadcrumbs__heading">NEW ARRIVALS</h1>
      </div>
      <div className="breadcrumbs__list">
        <ul className="breadcrumbs__items">
          <li className="breadcrumbs__item">
            <Link to="/Brand_React" className="breadcrumbs__link">HOME</Link>
          </li>
          <li className="breadcrumbs__item">
            <Link to="/catalog" className="breadcrumbs__link">/ MAN</Link>
          </li>
          <li className="breadcrumbs__item">
            <Link to="/catalog" className="breadcrumbs__link active">/ NEW ARRIVALS</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumbs;
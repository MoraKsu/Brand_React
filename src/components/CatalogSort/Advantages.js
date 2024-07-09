import React from 'react';
import truckImage from '../../img/truck.png';
import salesImage from '../../img/sales.png';
import crownImage from '../../img/crown.png';
import './Advantages.css';

const Advantages = () => {
  return (
    <section className="advantages center">
      <article className="advantages__item">
        <img className="advantages__img" src={truckImage} alt="Free Delivery" />
        <h3 className="advantages__heading">Free Delivery</h3>
        <p className="advantages__text">
          Worldwide delivery on all. Authoritatively morph next-generation innovation with extensive models.
        </p>
      </article>
      <article className="advantages__item">
        <img className="advantages__img" src={salesImage} alt="Sales & Discounts" />
        <h3 className="advantages__heading">Sales & Discounts</h3>
        <p className="advantages__text">
          Worldwide delivery on all. Authoritatively morph next-generation innovation with extensive models.
        </p>
      </article>
      <article className="advantages__item">
        <img className="advantages__img" src={crownImage} alt="Quality Assurance" />
        <h3 className="advantages__heading">Quality Assurance</h3>
        <p className="advantages__text">
          Worldwide delivery on all. Authoritatively morph next-generation innovation with extensive models.
        </p>
      </article>
    </section>
  );
};

export default Advantages;

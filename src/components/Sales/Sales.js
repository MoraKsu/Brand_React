import React from 'react';
import './Sales.css';
import deliveryImg from '../../img/delivery.png';
import truckImg from '../../img/truck.png';
import salesImg from '../../img/sales.png';
import crownImg from '../../img/crown.png';

const Sales = () => {
  return (
    <section className="sales container center">
      <div className="sales__top">
        <div className="sales__delivery">
          <img src={deliveryImg} alt="delivery" />
          <div className="sales__item">
            <h2 className="sales__title">30% <span className="sales__span">OFFER</span></h2>
            <h3 className="sales__des">FOR WOMEN</h3>
          </div>
        </div>
        <div className="sales__advantages">
          <div className="sales__advantages__items">
            <div className="sales__advantages__item">
              <div className="sales__advantages__img">
                <img src={truckImg} alt="truck" />
              </div>
              <div className="sales__advantages_text">
                <h3 className="sales__advantages__title">Free Delivery</h3>
                <p className="sales__advantages__des">Worldwide delivery on all. Authoritatively morph next-generation innovation with extensive models.</p>
              </div>
            </div>
            <div className="sales__advantages__item">
              <div className="sales__advantages__img">
                <img src={salesImg} alt="sales" />
              </div>
              <div className="sales__advantages_text">
                <h3 className="sales__advantages__title">Sales & discounts</h3>
                <p className="sales__advantages__des">Worldwide delivery on all. Authoritatively morph next-generation innovation with extensive models.</p>
              </div>
            </div>
            <div className="sales__advantages__item">
              <div className="sales__advantages__img">
                <img src={crownImg} alt="crown" />
              </div>
              <div className="sales__advantages_text">
                <h3 className="sales__advantages__title">Quality assurance</h3>
                <p className="sales__advantages__des">Worldwide delivery on all. Authoritatively morph next-generation innovation with extensive models.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sales;

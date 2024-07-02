import React from 'react';
import './BgrdHomeTop.css';
import topBackground from '../../img/top_background.png';

const BgrdHomeTop = () => {
  return (
    <section className="bagrd">
      <div className="bagrd__position">
        <img className="bagrd__top" src={topBackground} alt="top" />
      </div>
      <div className="bagrd__content container center">
        <div className="bagrd__info">
          <span className="bagrd__border"></span>
          <h1 className="bagrd__title">THE BRAND</h1>
          <h2 className="bagrd__heading">OF LUXURIOUS <span className="bagrd__span">FASHION</span></h2>
        </div>
      </div>
    </section>
  );
};

export default BgrdHomeTop;

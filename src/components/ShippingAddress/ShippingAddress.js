import React from 'react';
import { Link } from 'react-router-dom';
import './ShippingAddress.css';

const ShippingAddress = () => {
  return (
    <section className="register container center">
      <details className="register__shipping" open>
        <summary className="register__head">01. Shipping Address</summary>
        <div className="register__form">
          <div className="register__check">
            <h3 className="register__heading">Check as a guest or register</h3>
            <p className="register__text">Register with us for future convenience</p>
            <form className="register__checking" action="#">
              <input type="radio" name="option" id="checkout" />
              <label className="register__radio" htmlFor="checkout">checkout as guest</label>
              <input type="radio" name="option" id="register" defaultChecked />
              <label className="register__radio" htmlFor="register">register</label>
            </form>
            <h3 className="register__heading">register and save time!</h3>
            <p className="register__text">Register with us for future convenience</p>
            <Link to="#" className="register__fast"><i className="fa fa-angle-double-right" aria-hidden="true"></i>Fast and easy checkout</Link>
            <Link to="#" className="register__fast"><i className="fa fa-angle-double-right" aria-hidden="true"></i>Easy access to your order history and status</Link>
            <div className="register__button">
              <Link to="#" className="register__btn">Continue</Link>
            </div>
          </div>
          <div className="register__registration">
            <h3 className="register__heading">Already registered?</h3>
            <p className="register__text">Please log in below</p>
            <form className="register__info" action="#">
              <label className="register__contact" htmlFor="email">EMAIL ADDRESS <span style={{color: 'red'}}>*</span></label>
              <input className="register__area" type="email" name="email" id="email" required />
              <label className="register__contact" htmlFor="password">PASSWORD <span style={{color: 'red'}}>*</span></label>
              <input className="register__area" type="password" name="password" id="password" required />
            </form>
            <p className="register__txt">* Required Fields</p>
            <div className="register__button">
              <Link to="/checkout" className="register__btn">Log in</Link>
              <Link to="/checkout" className="register__btn register__noborder">Forgot Password ?</Link>
            </div>
          </div>
        </div>
      </details>
      <details className="register__shipping">
        <summary className="register__head">02. BILLING INFORMATION</summary>
      </details>
      <details className="register__shipping">
        <summary className="register__head">03. SHIPPING INFORMATION</summary>
      </details>
      <details className="register__shipping">
        <summary className="register__head">04. SHIPPING METHOD</summary>
      </details>
      <details className="register__shipping">
        <summary className="register__head">05. PAYMENT METHOD</summary>
      </details>
      <details className="register__shipping">
        <summary className="register__head">06. ORDER REVIEW</summary>
      </details>
    </section>
  );
};

export default ShippingAddress;



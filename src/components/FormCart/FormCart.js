import React from 'react';
import { Link } from 'react-router-dom';
import './FormCart.css';

const FormCart = ({ cart }) => {
    const calculateTotal = (cart) => {
        return cart.reduce((total, item) => {
            const itemPrice = parseFloat(item.price.slice(1));
            const itemQuantity = item.quantity || 1;
            return total + itemPrice * itemQuantity;
        }, 0).toFixed(2);
    };

    const total = calculateTotal(cart);

    return (
        <section className="form container center">
            <div className="form__address">
                <h3 className="form__heading">Shipping Address</h3>
                <form action="#" className="form__contact">
                    <select className="form__country" name="country" id="country">
                        <option className="form__item" value="Bangladesh">Bangladesh</option>
                        <option className="form__item" value="Russia">Russia</option>
                        <option className="form__item" value="Thailand">Thailand</option>
                        <option className="form__item" value="Nepal">Nepal</option>
                        <option className="form__item" value="Butane">Butane</option>
                        <option className="form__item" value="India">India</option>
                        <option className="form__item" value="Vietnam">Vietnam</option>
                        <option className="form__item" value="Myanmar">Myanmar</option>
                        <option className="form__item" value="Laos">Laos</option>
                        <option className="form__item" value="Cambodia">Cambodia</option>
                        <option className="form__item" value="China">China</option>
                        <option className="form__item" value="Kazakhstan">Kazakhstan</option>
                    </select>
                    <input className="form__state" type="text" name="state" placeholder="State" />
                    <input className="form__postcode" type="text" name="Postcode" id="Postcode" placeholder="Postcode / Zip" />
                    <input className="form__submit" type="submit" value="GET A QUOTE" />
                </form>
            </div>
            <div className="form__coupon">
                <h3 className="form__heading">Coupon Discount</h3>
                <p className="form__text">Enter your coupon code if you have one</p>
                <br />
                <input className="form__state" type="text" name="state" placeholder="State" />
                <input className="form__submit" type="submit" value="Apply coupon" />
            </div>
            <div className="form__total">
                <p className="form__sub-total">Sub total <span style={{ paddingLeft: '20px' }}>${total}</span></p>
                <p className="form__grand-total">Grand total <span style={{ paddingLeft: '20px', color: '#f16d7f' }}>${total}</span></p>
                <div className="form__button">
                <Link to="/checkout" className="form__btn">Proceed to Checkout</Link>
                </div>
            </div>
        </section>
    );
};

export default FormCart;


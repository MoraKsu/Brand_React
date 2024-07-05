import React from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import './CartItems.css';

const CartItems = ({ products, cart, removeFromCart, updateQuantity, clearCart }) => {
  return (
    <section className="cart container center">
      <table className="cart__table">
        <thead>
          <tr className="cart__items">
            <th className="cart__column cart_left">Product Details</th>
            <th className="cart__column">Unit Price</th>
            <th className="cart__column">Quantity</th>
            <th className="cart__column">Shipping</th>
            <th className="cart__column">Subtotal</th>
            <th className="cart__column cart_right">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => {
            const product = products.find((prod) => prod.id === item.id);

            if (!product) return null;

            return (
              <tr className="cart__items" key={item.id}>
                <td className="cart__row">
                  <div className="cart__box cart_left">
                    <div className="cart__img"><img src={require(`../../${product.image}`)} alt={product.title} /></div>
                    <div className="cart__desc">
                      <h3 className="cart__heading">{item.title}</h3>
                      <p className="cart__color"><b>Color:</b> <span style={{ fontWeight: 300, padding: '5px' }}>{item.color}</span></p>
                      <p className="cart__size"><b>Size:</b> <span style={{ fontWeight: 300, padding: '5px' }}>{item.size}</span></p>
                    </div>
                  </div>
                </td>
                <td className="cart__row">{item.price}</td>
                <td className="cart__row">
                  <div className="cart__number-container">
                            <input
                              type="number"
                              name="quantity"
                              min="1"
                              max="30"
                              value={item.quantity || 1}
                              className="cart__number"
                              onChange={(e) => updateQuantity(item.id, e.target.value)}
                            />
                    </div>
                </td>
                <td className="cart__row">FREE</td>
                <td className="cart__row">${(parseFloat(item.price.slice(1)) * item.quantity).toFixed(2)}</td>
                <td className="cart__row">
                  <div className="cart__circle" onClick={() => removeFromCart(item.id)}>
                  <CloseIcon />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="cart__button">
        <button className="cart__btn" onClick={clearCart}>CLEAR SHOPPING CART</button>
        <Link to="/Brand_React" className="cart__btn">CONTINUE SHOPPING</Link>
      </div>
    </section>
  );
};

export default CartItems;

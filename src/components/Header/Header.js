import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ExpandMore, ExpandLess, Search } from '@mui/icons-material';
import logo from '../../img/logo.png';
import basketImg from '../../img/forma_1_1113.png';
import Rating from '@mui/material/Rating';
import CloseIcon from '@mui/icons-material/Close';
import './Header.css';

const CustomMenu = styled(Menu)({
  '& .MuiPaper-root': {
    backgroundColor: '#fff',
    boxShadow: '0px 8px 16px 0px rgba(0, 0, 0, 0.2)',
    borderRadius: '5px',
    width: '262px',
    padding: '20px',
  },
});

const CustomMenuItem = styled(MenuItem)({
  fontSize: '14px',
  lineHeight: '28px',
  fontWeight: '400',
  letterSpacing: '0.025em',
  textAlign: 'left',
  color: 'var(--base-color-text)',
  '&:hover': {
    backgroundColor: '#fff',
    color: 'var(--base-color-pink)',
  },
});

const CustomButton = styled(Button)({
  borderRadius: '3px 0 0 3px',
  padding: '2px 8px',
  backgroundColor: '#cdcdcc',
  backgroundImage: 'linear-gradient(180deg, #f9f9f9 0%, #f5f5f5 100%)',
  border: '1px solid #e6e6e6',
  fontSize: '14px',
  lineHeight: '32px',
  fontWeight: '300',
  letterSpacing: '0.025em',
  color: 'var(--base-color-text)',
  textAlign: 'center',
  cursor: 'pointer',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: 'var(--base-color-pink)',
    backgroundImage: 'linear-gradient(180deg, var(--base-color-pink) 0%, var(--base-color-pink) 100%)',
    color: '#FFF',
    transition: 'all 0.2s',
  },
});

function Header({ cart, removeFromCart, updateQuantity }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isBasketOpen, setIsBasketOpen] = React.useState(false);

  const basketFunction = () => {
    setIsBasketOpen(!isBasketOpen);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="header container center">
      <div className="header__head">
        <div className="header__left">
          <Link to="/Brand_React"><img className="header__logo" src={logo} alt="logo" /></Link>
          <div className="header__form">
            <CustomButton
              aria-controls="browse-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              Browse {anchorEl ? <ExpandLess /> : <ExpandMore />}
            </CustomButton>
            <CustomMenu
              id="browse-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <CustomMenuItem disabled>
                <h3 className="header__title">Women</h3>
              </CustomMenuItem>
              <CustomMenuItem onClick={handleClose}>
                <Link className="header__link" to="/dresses">Dresses</Link>
              </CustomMenuItem>
              <CustomMenuItem onClick={handleClose}>
                <Link className="header__link" to="/tops">Tops</Link>
              </CustomMenuItem>
              <CustomMenuItem onClick={handleClose}>
                <Link className="header__link" to="/sweaters-knits">Sweaters/Knits</Link>
              </CustomMenuItem>
              <CustomMenuItem onClick={handleClose}>
                <Link className="header__link" to="/jackets-coats">Jackets/Coats</Link>
              </CustomMenuItem>
              <CustomMenuItem onClick={handleClose}>
                <Link className="header__link" to="/blazers">Blazers</Link>
              </CustomMenuItem>
              <CustomMenuItem onClick={handleClose}>
                <Link className="header__link" to="/denim">Denim</Link>
              </CustomMenuItem>
              <CustomMenuItem onClick={handleClose}>
                <Link className="header__link" to="/leggings-pants">Leggings/Pants</Link>
              </CustomMenuItem>
              <CustomMenuItem onClick={handleClose}>
                <Link className="header__link" to="/skirts-shorts">Skirts/Shorts</Link>
              </CustomMenuItem>
              <CustomMenuItem onClick={handleClose}>
                <Link className="header__link" to="/accessories">Accessories</Link>
              </CustomMenuItem>
              <CustomMenuItem disabled>
                <h3 className="header__title">Men</h3>
              </CustomMenuItem>
              <CustomMenuItem onClick={handleClose}>
                <Link className="header__link" to="/tees-tank-tops">Tees/Tank tops</Link>
              </CustomMenuItem>
              <CustomMenuItem onClick={handleClose}>
                <Link className="header__link" to="/shirts-polos">Shirts/Polos</Link>
              </CustomMenuItem>
              <CustomMenuItem onClick={handleClose}>
                <Link className="header__link" to="/sweaters">Sweaters</Link>
              </CustomMenuItem>
              <CustomMenuItem onClick={handleClose}>
                <Link className="header__link" to="/sweatshirts-hoodies">Sweatshirts/Hoodies</Link>
              </CustomMenuItem>
              <CustomMenuItem onClick={handleClose}>
                <Link className="header__link" to="/blazers">Blazers</Link>
              </CustomMenuItem>
              <CustomMenuItem onClick={handleClose}>
                <Link className="header__link" to="/jackets-vests">Jackets/Vests</Link>
              </CustomMenuItem>
            </CustomMenu>
          </div>
          <form className="header__form" action="#">
            <input type="search" className="header__control" placeholder="Search for Item..." />
            <button className="header__search" type="submit"><Search /></button>
          </form>
        </div>
        <div className="header__right">
          <div className="header__basket">
            <div className="header__basket-drd" onClick={basketFunction}>
              <img src={basketImg} alt="basket" />
              {cart.length > 0 && <span className="header__basket-count">{cart.length}</span>}
              {isBasketOpen && (
                <div className="header__content-basket show" id="basketDropdown">
                  {cart.map((item, index) => (
                    <div className="header__basket-item-container" key={item.id}>
                      <div className="header__basket-box">
                        <Link to={`/singlePage/${item.id}`}>
                          <div className="header__basket-img">
                            <img src={require(`../../${item.image}`)} alt={item.title} />
                          </div>
                        </Link>
                        <div className="header__basket-item">
                          <p className="header__basket-text">{item.title}</p>
                          <p className="cart__color"><b>Color:</b> <span style={{ fontWeight: 300, padding: '5px' }}>{item.color}</span></p>
                          <p className="cart__size"><b>Size:</b> <span style={{ fontWeight: 300, padding: '5px' }}>{item.size}</span></p>
                          <Rating
                            name="simple-controlled"
                            value={item.rating || 0}
                            onChange={(event, newValue) => {
                              // updateQuantity(item.id, newValue); // Неправильное использование функции обновления рейтинга.
                            }}
                          />
                          <p className="header__basket-cash">1 x {item.price}</p>
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
                        </div>
                      </div>
                      <div className="header__basket-times" onClick={() => removeFromCart(item.id)}>
                        <CloseIcon />
                      </div>
                      {index < cart.length - 1 && <hr />}
                    </div>
                  ))}
                  <hr />
                  <div className="header__basket-total">
                    <p className="total">TOTAL</p>
                    <p className="price">
                      ${cart.reduce((total, item) => total + parseFloat(item.price.slice(1)) * (item.quantity || 1), 0).toFixed(2)}
                    </p>
                  </div>
                  <div className="header__basket-btn">
                    <Link to="/checkout" className="header__basket-check">Checkout</Link>
                    <Link to="/cart" className="header__basket-check">Go to cart</Link>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="header__dropdown-account">
            <button className="header__btn-account" type="button">
              <Link className="header__dropdown-account-content" to="/checkout">My Account</Link>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

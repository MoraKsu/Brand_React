import React from 'react';
import { Link } from 'react-router-dom';
import rectangle_23 from '../../img/rectangle_23_1802.png';
import './TopNav.css';

const menuItems = [
  {
    title: "HOME",
    links: ["Dresses", "Tops", "Sweaters/Knits", "Jackets/Coats", "Blazers", "Denim", "Leggings/Pants", "Skirts/Shorts", "Accessories"],
  },
  {
    title: "MAN",
    links: ["Dresses", "Tops", "Sweaters/Knits", "Jackets/Coats", "Blazers", "Denim", "Leggings/Pants", "Skirts/Shorts", "Accessories"],
  },
  {
    title: "WOMEN",
    links: ["Dresses", "Tops", "Sweaters/Knits", "Jackets/Coats", "Blazers", "Denim", "Leggings/Pants", "Skirts/Shorts", "Accessories"],
    special: true,
  },
  {
    title: "KIDS",
    links: ["Dresses", "Tops", "Sweaters/Knits", "Jackets/Coats", "Blazers", "Denim", "Leggings/Pants", "Skirts/Shorts", "Accessories"],
  },
  {
    title: "ACCOSERIESE",
    links: ["Dresses", "Tops", "Sweaters/Knits", "Jackets/Coats", "Blazers", "Denim", "Leggings/Pants", "Skirts/Shorts", "Accessories"],
  },
  {
    title: "FEATURED",
    links: ["Dresses", "Tops", "Sweaters/Knits", "Jackets/Coats", "Blazers", "Denim", "Leggings/Pants", "Skirts/Shorts", "Accessories"],
    special: true,
  },
  {
    title: "HOT DEALS",
    links: ["Dresses", "Tops", "Sweaters/Knits", "Jackets/Coats", "Blazers", "Denim", "Leggings/Pants", "Skirts/Shorts", "Accessories"],
  },
];

function TopNav() {
  return (
    <section className="top">
      <nav className="top__nav container center">
        <ul className="top__nav-items">
          {menuItems.map((item, index) => (
            <li key={index} className={`top__nav-item ${item.title === 'HOT DEALS' || item.title === 'FEATURED' ? 'last' : ''}`}>
              <Link to="/Brand_React" className="top__nav-link">{item.title}</Link>
              <div className="top__mega__box">
                {item.special ? (
                  <>
                    <div className="top__mega__item">
                      <h3 className="top__mega__title">{item.title}</h3>
                      {item.links.slice(0, 9).map((link, j) => (
                        <Link key={j} to={`/${link.toLowerCase().replace(/\s/g, '-')}`} className="top__mega__link">{link}</Link>
                      ))}
                    </div>
                    <div className="top__mega__item">
                      <h3 className="top__mega__title">{item.title}</h3>
                      {item.links.slice(0, 5).map((link, j) => (
                        <Link key={j} to={`/${link.toLowerCase().replace(/\s/g, '-')}`} className="top__mega__link">{link}</Link>
                      ))}
                      <br />
                      <h3 className="top__mega__title">{item.title}</h3>
                      {item.links.slice(0, 3).map((link, j) => (
                        <Link key={j} to={`/${link.toLowerCase().replace(/\s/g, '-')}`} className="top__mega__link">{link}</Link>
                      ))}
                    </div>
                    <div className="top__mega__item">
                      <h3 className="top__mega__title">{item.title}</h3>
                      {item.links.slice(0, 4).map((link, j) => (
                        <Link key={j} to={`/${link.toLowerCase().replace(/\s/g, '-')}`} className="top__mega__link">{link}</Link>
                      ))}
                      <br />
                      <img src={rectangle_23} alt="sale" />
                    </div>
                  </>
                ) : (
                  Array(3).fill(null).map((_, i) => (
                    <div key={i} className="top__mega__item">
                      <h3 className="top__mega__title">{item.title}</h3>
                      {item.links.map((link, j) => (
                        <Link key={j} to={`/${link.toLowerCase().replace(/\s/g, '-')}`} className="top__mega__link">{link}</Link>
                      ))}
                    </div>
                  ))
                )}
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}

export default TopNav;


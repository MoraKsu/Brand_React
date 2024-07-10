import React from 'react';
import { Link } from 'react-router-dom';
import './SinglePageDescription.css';
import line from '../../img/line.png';
import line2 from '../../img/line_2.png';

const SinglePageDescription = () => {
  return (
    <section className="description container center">
      <div className="description__content">
        <h3 className="description__collection">WOMEN COLLECTION</h3>
        <img src={line} alt="line" />
        <h2 className="description__title">Moschino Cheap And Chic</h2>
        <p className="description__txt">
          Compellingly actualize fully researched processes before proactive
          outsourcing. Progressively syndicate collaborative architectures before cutting-edge services.
          Completely visualize parallel core competencies rather than exceptional portals.
        </p>
        <div className="description__short">
          <h3 className="description__author">MATERIAL: <b>COTTON</b></h3>
          <h3 className="description__author">DESIGNER: <b>BINBURHAN</b></h3>
        </div>
        <h2 className="description__price">$561</h2>
        <img src={line2} alt="line" />
        <div className="description__filter">
          <div className="description__filter-color">
            <label className="description__color-label" htmlFor="color">CHOOSE COLOR</label>
            <select id="color" className="description__color-select">
              <option className="description__select description__red" value="Red">Red</option>
              <option className="description__select description__blue" value="Blue">Blue</option>
              <option className="description__select description__green" value="Green">Green</option>
            </select>
          </div>
          <div className="description__filter-size">
            <label className="description__color-label" htmlFor="size">CHOOSE SIZE</label>
            <select id="size" className="description__size-select">
              <option className="description__select" value="XXL">XXL</option>
              <option className="description__select" value="XL">XL</option>
              <option className="description__select" value="L">L</option>
              <option className="description__select" value="M">M</option>
              <option className="description__select" value="S">S</option>
              <option className="description__select" value="XS">XS</option>
            </select>
          </div>
          <div className="description__filter-quantity">
            <label className="description__color-label" htmlFor="quantity">QUANTITY</label>
            <input type="number" name="quantity" id="quantity" min="1" max="30" placeholder="2" />
          </div>
        </div>
        <div className="description__button">
          <Link to={'/cart'} className="description__btn">
            <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21.9509 23.2667H21.8386C21.2294 23.2667 20.7177 22.7671 20.6735 22.1294C20.629 21.4607 21.1175 20.8785 21.7626 20.8346C21.788 20.8329 21.8145 20.832 21.8405 20.832C22.4575 20.832 22.9743 21.3219 23.0201 21.9487C23.0319 22.1971 22.9914 22.5514 22.736 22.8439L22.73 22.8507L22.7242 22.8575C22.5275 23.0912 22.2607 23.2321 21.9509 23.2667ZM8.21887 23.2604C7.5683 23.2604 7.03906 22.7174 7.03906 22.05C7.03906 21.3832 7.5683 20.8406 8.21887 20.8406C8.86945 20.8406 9.39868 21.3832 9.39868 22.05C9.39868 22.7174 8.86945 23.2604 8.21887 23.2604Z"
                fill="#ef5b70"
              />
              <path
                d="M21.876 22.2662C21.921 22.2549 21.9423 22.2339 21.96 22.2129C21.9678 22.2037 21.9756 22.1946 21.9835 22.1855C22.02 22.1438 22.0233 22.0553 22.0224 22.0105C22.0092 21.9044 21.9185 21.8315 21.8412 21.8315C21.8375 21.8315 21.8336 21.8317 21.8312 21.8318C21.7531 21.8372 21.6653 21.9409 21.6719 22.0625C21.6813 22.1793 21.7675 22.2662 21.8392 22.2662H21.876ZM8.21954 22.2599C8.31873 22.2599 8.39935 22.1655 8.39935 22.0496C8.39935 21.9341 8.31873 21.8401 8.21954 21.8401C8.12042 21.8401 8.03973 21.9341 8.03973 22.0496C8.03973 22.1655 8.12042 22.2599 8.21954 22.2599ZM21.9995 24.2662C21.9517 24.2662 21.8878 24.2662 21.8392 24.2662C20.7017 24.2662 19.7567 23.3545 19.6765 22.198C19.5964 20.9929 20.4937 19.9183 21.6953 19.8364C21.7441 19.8331 21.7928 19.8315 21.8412 19.8315C22.9799 19.8315 23.9413 20.7324 24.019 21.8884C24.0505 22.4915 23.8741 23.0612 23.4898 23.5012C23.1055 23.9575 22.5764 24.2177 21.9995 24.2662ZM8.21954 24.2599C7.01532 24.2599 6.03973 23.2709 6.03973 22.0496C6.03973 20.8291 7.01532 19.8401 8.21954 19.8401C9.42371 19.8401 10.3994 20.8291 10.3994 22.0496C10.3994 23.2709 9.42371 24.2599 8.21954 24.2599ZM21.1984 17.3938H9.13306C8.70013 17.3938 8.31586 17.1005 8.20331 16.6775L4.27753 2.24768H1.52173C0.993408 2.24768 0.560547 1.80859 0.560547 1.27039C0.560547 0.733032 0.993408 0.292969 1.52173 0.292969H4.99933C5.43134 0.292969 5.81561 0.586304 5.9281 1.01025L9.85394 15.4391H20.5576L24.1144 7.13379H12.2578C11.7286 7.13379 11.2957 6.69373 11.2957 6.15649C11.2957 5.61914 11.7286 5.17908 12.2578 5.17908H25.3508C25.714 5.17908 26.0569 5.37085 26.2535 5.68823C26.449 6.00391 26.4845 6.39197 26.3452 6.73975L22.1321 17.0542C22.0027 17.3691 21.6218 17.3938 21.1984 17.3938Z"
                fill="#ef5b70"
              />
            </svg>
            Add to Cart
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SinglePageDescription;

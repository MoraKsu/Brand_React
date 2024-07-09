import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CatalogSort.css';
import CatalogNav from './CatalogNav';
import CatalogProduct from '../CatalogProduct/CatalogProduct';
import Pagination from '../Pagination/Pagination';

const CatalogSort = ({ addToCart }) => {
  const [catalogProducts, setProductsData] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  useEffect(() => {
    const products = require('../../data/catalogProducts.json');
    setProductsData(products);
  }, []);


  const sliderTrack = useRef(null);
  const [sliderOneValue, setSliderOneValue] = useState(52);
  const [sliderTwoValue, setSliderTwoValue] = useState(400);
  const displayValOne = useRef(null);
  const displayValTwo = useRef(null);

  useEffect(() => {
    const fillColor = () => {
      const percent1 = (sliderOneValue / 500) * 100;
      const percent2 = (sliderTwoValue / 500) * 100;
      sliderTrack.current.style.background = `linear-gradient(to right, #dadae5 ${percent1}%, #f16d7f ${percent1}%, #f16d7f ${percent2}%, #dadae5 ${percent2}%)`;
    };

    fillColor();
    displayValOne.current.textContent = `$${sliderOneValue}`;
    displayValTwo.current.textContent = `$${sliderTwoValue}`;
  }, [sliderOneValue, sliderTwoValue]);

  const slideOne = (e) => {
    const newValue = parseInt(e.target.value);
    const minGap = 10;
    if (sliderTwoValue - newValue <= minGap) {
      setSliderOneValue(sliderTwoValue - minGap);
    } else {
      setSliderOneValue(newValue);
    }
  };

  const slideTwo = (e) => {
    const newValue = parseInt(e.target.value);
    const minGap = 10;
    if (newValue - sliderOneValue <= minGap) {
      setSliderTwoValue(sliderOneValue + minGap);
    } else {
      setSliderTwoValue(newValue);
    }
  };

  const filterProductsBySize = () => {
    if (selectedSizes.length === 0) {
      return catalogProducts;
    } else {
      return catalogProducts.filter(product => selectedSizes.includes(product.size));
    }
  };

  const handleSizeCheckboxChange = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setSelectedSizes(prevSizes => [...prevSizes, name]);
    } else {
      setSelectedSizes(prevSizes => prevSizes.filter(size => size !== name));
    }
  };

  const filteredProducts = filterProductsBySize();

  return (
    <div className="catalog__sort">
      <div className="catalog__sorting">
        <div className="catalog__trending">
          <h3 className="catalog__head">Trending now</h3>
          <ul className="catalog__sort__items">
            <li className="catalog__sort__item"><Link to="#" className="catalog__sort__link">Bohemian</Link></li>
            <li className="catalog__sort__item"><Link to="#" className="catalog__sort__link">Floral</Link></li>
            <li className="catalog__sort__item"><Link to="#" className="catalog__sort__link">Lace</Link></li>
            <li className="catalog__sort__item"><Link to="#" className="catalog__sort__link">Floral</Link></li>
            <li className="catalog__sort__item"><Link to="#" className="catalog__sort__link">Lace</Link></li>
            <li className="catalog__sort__item"><Link to="#" className="catalog__sort__link">Bohemian</Link></li>
          </ul>
        </div>
        <div className="catalog__size">
          <h3 className="catalog__head">Size</h3>
          <ul className="catalog__size__items">
            {['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
              <li className="catalog__size__item" key={size}>
                <label htmlFor={size} className="catalog__sort__checkbox">
                  <input
                    type="checkbox"
                    name={size}
                    id={size}
                    onChange={handleSizeCheckboxChange}
                  />
                  {size}
                  <span className="checkmark"></span>
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="catalog__range">
      <h3 className="catalog__head">Price</h3>
      <div className="catalog__wrapper">
        <div className="catalog__container">
          <div className="slider-track" ref={sliderTrack}></div>
          <input
            type="range"
            min="0"
            max="500"
            value={sliderOneValue}
            id="slider-1"
            onChange={slideOne}
          />
          <input
            type="range"
            min="0"
            max="500"
            value={sliderTwoValue}
            id="slider-2"
            onChange={slideTwo}
          />
        </div>
        <div className="catalog__values">
          <div id="range1" ref={displayValOne}></div>
          <div id="range2" ref={displayValTwo}></div>
        </div>
      </div>
    </div>
      </div>
      <CatalogNav />
      <CatalogProduct filteredProducts={filteredProducts} addToCart={addToCart} />
      <Pagination />
    </div>
  );
};

export default CatalogSort;

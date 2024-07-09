import React from 'react';
import './CatalogNav.css';

const CatalogNav = () => {
  return (
    <div className="catalog__show">
      <div className="catalog__sort_by">
        <p className="catalog__text_sort_by">Sort By</p>
      </div>
      <div className="catalog__sort__dropdown">
        <select name="sort_by" className="catalog__sort__list">
          <option value="Name">Name</option>
          <option value="accessories">Accessories</option>
          <option value="bags">Bags</option>
          <option value="pants">Pants</option>
          <option value="shirts">Shirts</option>
          <option value="polos">Polos</option>
          <option value="shoes">Shoes</option>
        </select>
      </div>
      <div className="catalog__sort_by">
        <p className="catalog__text_sort_by">Show</p>
      </div>
      <div className="catalog__sort__dropdown">
        <select name="show_count" className="catalog__sort__list">
          <option value="09">09</option>
          <option value="12">12</option>
          <option value="15">15</option>
          <option value="18">18</option>
          <option value="21">21</option>
          <option value="24">24</option>
          <option value="27">27</option>
        </select>
      </div>
    </div>
  );
};

export default CatalogNav;

import React from 'react';
import { Link } from 'react-router-dom';
import './Pagination.css';

const Pagination = () => {
  return (
    <div className="catalog__view">
      <div className="catalog__pagination">
        <Link to="#"><i className="fa fa-angle-left" aria-hidden="true"></i></Link>
        <Link className="active" to="#">1</Link>
        <Link to="#">2</Link>
        <Link to="#">3</Link>
        <Link to="#">4</Link>
        <Link to="#">5</Link>
        <Link to="#">6</Link>
        <Link to="#">....</Link>
        <Link to="#">20</Link>
        <Link to="#"><i className="fa fa-angle-right" aria-hidden="true"></i></Link>
      </div>
      <div className="catalog__btn__catalog">
        <Link to="#" className="catalog__product__catalog">View All</Link>
      </div>
    </div>
  );
};

export default Pagination;

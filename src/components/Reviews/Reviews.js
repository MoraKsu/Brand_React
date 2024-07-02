import React, { useState } from 'react';
import './Reviews.css';
import ellipseImg from '../../img/ellipse.png';
import subscribeBg from '../../img/subscribe.jpg';

const reviewsData = [
  {
    text: "“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”",
    name: "Bin Burhan",
    location: "Dhaka, Bd"
  },
  {
    text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.”",
    name: "Jane Doe",
    location: "New York, USA"
  },
  {
    text: "“Curabitur facilisis, velit vitae scelerisque tempus, arcu lorem ultricies risus, eu tincidunt lorem risus vitae lorem.”",
    name: "John Smith",
    location: "London, UK"
  }
];

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const handleReviewChange = (index) => {
    setCurrentReview(index);
  };

  return (
    <section className="reviews container center" style={{ backgroundImage: `url(${subscribeBg})` }}>
      <div className="reviews__review">
        <figure className="reviews__review__promo">
          <figcaption className="reviews__review_text">
            <div className="reviews__review__img">
              <img src={ellipseImg} alt="ellipse" />
            </div>
            <blockquote className="reviews__review__quote">
              <p className="reviews__review__des">
                {reviewsData[currentReview].text}
              </p>
              <br />
              <cite className="reviews__quote__name">{reviewsData[currentReview].name}</cite>
              <p className="reviews__quote__location">{reviewsData[currentReview].location}</p>
            </blockquote>
            <br />
          </figcaption>
          <div className="reviews__line">
            {reviewsData.map((_, index) => (
              <span 
                key={index} 
                className={`reviews__line__span ${currentReview === index ? 'active' : ''}`} 
                onClick={() => handleReviewChange(index)}>
              </span>
            ))}
          </div>
        </figure>
        <div className="reviews__subscribe">
          <h3 className="reviews__subscribe__head">SUBSCRIBE</h3>
          <p className="reviews__subscribe__heading">FOR OUR NEWSLETTER AND PROMOTION</p>
          <form action="#">
            <input className="reviews__subscribe__email" type="email" placeholder="Enter Your Email" required />
            <button className="reviews__subscribe__button" type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reviews;


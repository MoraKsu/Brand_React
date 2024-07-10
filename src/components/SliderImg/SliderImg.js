import React, { useState } from 'react';
import './SliderImg.css';
import { Link } from 'react-router-dom';
import img1 from '../../img/layer_42_2490.png';
import img2 from '../../img/like1.png';
import img3 from '../../img/layer_42_2490.png';

const SliderImg = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [img1, img2, img3];

    const plusSlides = (n) => {
        let newIndex = currentSlide + n;
        if (newIndex < 0) {
            newIndex = slides.length - 1;
        } else if (newIndex >= slides.length) {
            newIndex = 0;
        }
        setCurrentSlide(newIndex);
    };

    return (
        <section className="slide">
            {slides.map((slide, index) => (
                <div 
                    key={index} 
                    className={`slide__show fade container center ${index === currentSlide ? 'active' : ''}`}>
                    <img src={slide} alt={`slide-${index}`} />
                </div>
            ))}
            <Link className="prev" onClick={() => plusSlides(-1)}>&#10094;</Link>
            <Link className="next" onClick={() => plusSlides(1)}>&#10095;</Link>
        </section>
    );
};

export default SliderImg;


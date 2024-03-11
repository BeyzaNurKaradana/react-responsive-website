import React from 'react'
import "./Testimonials.css"
import Slider from "react-slick";

function Testimonials() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <img src='https://m.media-amazon.com/images/M/MV5BOTRiMjUzYzktOGVlZS00YTZlLWE5MjEtODQwMzg0NmVhM2FiXkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg'/>
        </div>
        <div>
        <img src='https://m.media-amazon.com/images/M/MV5BOTRiMjUzYzktOGVlZS00YTZlLWE5MjEtODQwMzg0NmVhM2FiXkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg'/>
        </div>
        <div>
        <img src='https://m.media-amazon.com/images/M/MV5BOTRiMjUzYzktOGVlZS00YTZlLWE5MjEtODQwMzg0NmVhM2FiXkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg'/>
        </div>
        <div>
        <img src='https://m.media-amazon.com/images/M/MV5BOTRiMjUzYzktOGVlZS00YTZlLWE5MjEtODQwMzg0NmVhM2FiXkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg'/>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    );
  }
export default Testimonials
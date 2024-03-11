import React from "react";
import "./Testimonials.css";
import Slider from "react-slick";
import CommentCards from "../CommentCards/CommentCards";

function Testimonials() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} >
      <div className="deneme">
        
          <CommentCards
            imgSrc={"https://greatstack.in/assets/user-1-dp2DpvM_.png"}
            name={"Emily Williams"}
            location={"edusity,usa"}
            comment={
              "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."
            }
          />
        
        
      </div>
      <div>
      <CommentCards
            imgSrc={"https://greatstack.in/assets/user-1-dp2DpvM_.png"}
            name={"Emily Williams"}
            location={"edusity,usa"}
            comment={
              "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."
            }
          />
      </div>
      <div>
      <CommentCards
            imgSrc={"https://greatstack.in/assets/user-1-dp2DpvM_.png"}
            name={"Emily Williams"}
            location={"edusity,usa"}
            comment={
              "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."
            }
          />
      </div>
      <div>
      <CommentCards
            imgSrc={"https://greatstack.in/assets/user-1-dp2DpvM_.png"}
            name={"Emily Williams"}
            location={"edusity,usa"}
            comment={
              "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."
            }
          />
      </div>
      
    </Slider>
  );
}
export default Testimonials;

import React from "react";
import "./CommentCards.css";

const CommentCards = ({imgSrc,name,location,comment}) => {
  return (
    <div className="comment-box">
      <div className="person-info">
        <div>
          <img src={imgSrc} />
          <div>
          <h3>{name}</h3>
          <span> {location}</span>
        </div>
        </div>
      </div>

      <p>
        {comment}
      </p>
    </div>
  );
};

export default CommentCards;

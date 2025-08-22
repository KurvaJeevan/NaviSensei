import React from "react";

const Card = ({ image, title, description }) => {
  return (
    <div className="card">
      <div className="card-content">
        <img src={image} alt={title} className="card-image" />
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;

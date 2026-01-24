import React from "react";
import "./Card1.css";

function Card({ image, title, description, tech, onClick }) {
  return (
    <div className="card1">
      <div className="card1-imageWrapper">
        <img src={image} alt={title} />
      </div>

      {/* Desktop-only content */}
      <div className="card1-desktopContent">
        <h3 className="card1-title">{title}</h3>
        <p className="card1-description">{description}</p>

        <div className="card1-techStack">
          {tech.map((item, index) => (
            <span key={index} className="card1-tech">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Mobile-only button */}
      <button 
        className="card1-mobileButton"
        onClick={(e) => {
          e.stopPropagation(); // Prevent triggering parent click
          if (onClick) onClick(e);
        }}
        aria-label={`View ${title} details`}
      >
        Visit Website
      </button>
    </div>
  );
}

export default Card;
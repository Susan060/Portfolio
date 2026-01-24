// import React from "react";
import { Link } from "react-router-dom";
import styles from "./card1.module.css";

function Card({ image, title, description, tech, onClick }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} />
      </div>

      {/* Desktop-only content */}
      <div className={styles.desktopContent}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <div className={styles.techStack}>
          {tech.map((item, index) => (
            <span key={index} className={styles.tech}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Mobile-only button */}
            <button 
        className={styles.mobileButton}
        onClick={(e) => {
          e.stopPropagation(); // Prevent triggering parent click
          if (onClick) onClick(e);
        }}
        aria-label={`View ${title} details`}
      >
        View Details
      </button>
    </div>
  );
}

export default Card;

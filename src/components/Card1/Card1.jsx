// import React from "react";
import styles from "./card1.module.css";

function Card({ image, title, description, tech, link }) {
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
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.mobileButton}
      >
        Visit Website
      </a>
    </div>
  );
}

export default Card;

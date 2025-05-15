"use client";

import React, { useState, useEffect } from "react";
import styles from "../styles/ModernCarousel.module.css";
import Image from "next/image";

const ModernCarousel = () => {
 const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    "/images/fashion1.jpg", 
    "/images/astoncarousel.jpg"
  ];

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.carousel}>
      <div className={styles.slides}>
        {images.map((src, index) => (
          <div 
            key={index}
            className={`${styles.slide} ${index === activeIndex ? styles.active : ''}`}
          >
            <Image
              src={src}
              alt={`Hero image ${index + 1}`}
              fill
              priority={index === 0}
              className={styles.carouselImage}
              sizes="100vw"
            />
          </div>
        ))}

        <div className={styles.text}>
          <h1>
            We Build{" "}
          </h1>
          <h2>
          <span className={styles.dynamicTextContainer}>
              <span className={styles.dynamicText}></span>
            </span>
          </h2>
            
        </div>
      </div>
    </div>
  );
};

export default ModernCarousel;

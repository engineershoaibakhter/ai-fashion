"use client";
import React, { useState, useRef, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import styles from '../styles/Project.module.css';

const Project = () => {
  const imageListRef = useRef(null);
  const scrollbarThumbRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'images/building.jpg', 'images/buildingImage.png', 'images/projectImage1.webp',
    'images/buildingImage.png', 'images/building.jpg', 'images/projectImage1.webp',
    'images/buildingImage.png', 'images/building.jpg', 'images/projectImage1.webp',
  ];

  const handleNextSlide = () => {
    if (imageListRef.current) {
      const maxScrollLeft = imageListRef.current.scrollWidth - imageListRef.current.clientWidth;
      const scrollAmount = imageListRef.current.clientWidth;
      const newScrollLeft = Math.min(imageListRef.current.scrollLeft + scrollAmount, maxScrollLeft);
      imageListRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
    }
  };

  const handlePrevSlide = () => {
    if (imageListRef.current) {
      const scrollAmount = imageListRef.current.clientWidth;
      const newScrollLeft = Math.max(imageListRef.current.scrollLeft - scrollAmount, 0);
      imageListRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
    }
  };

  const updateScrollThumbPosition = () => {
    if (imageListRef.current && scrollbarThumbRef.current) {
      const maxScrollLeft = imageListRef.current.scrollWidth - imageListRef.current.clientWidth;
      const scrollPosition = imageListRef.current.scrollLeft;
      const thumbPosition = (scrollPosition / maxScrollLeft) * (imageListRef.current.clientWidth - scrollbarThumbRef.current.offsetWidth);
      scrollbarThumbRef.current.style.left = `${thumbPosition}px`;
    }
  };

  useEffect(() => {
    const imageListElement = imageListRef.current;

    const handleMouseMove = (e) => {
      const startX = e.clientX;
      const thumbPosition = scrollbarThumbRef.current.offsetLeft;
      const maxThumbPosition = imageListElement.clientWidth - scrollbarThumbRef.current.offsetWidth;

      const handleMouseMove = (e) => {
        const deltaX = e.clientX - startX;
        const newThumbPosition = thumbPosition + deltaX;
        const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
        const maxScrollLeft = imageListElement.scrollWidth - imageListElement.clientWidth;
        const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

        scrollbarThumbRef.current.style.left = `${boundedPosition}px`;
        imageListElement.scrollLeft = scrollPosition;
      };

      const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    };

    if (scrollbarThumbRef.current) {
      scrollbarThumbRef.current.addEventListener('mousedown', handleMouseMove);
    }

    const handleScroll = () => {
      updateScrollThumbPosition();
    };

    if (imageListElement) {
      imageListElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollbarThumbRef.current) {
        scrollbarThumbRef.current.removeEventListener('mousedown', handleMouseMove);
      }

      if (imageListElement) {
        imageListElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className={styles.Project}>
        <h2 className={styles.Heading}>Our Projects</h2>
    <div className={styles.container}>
      <div className={styles.sliderWrapper}>
        <button
          id="prev-slide"
          className={`${styles.slideButton} ${styles.leftButton}`}
          onClick={handlePrevSlide}
        >
          <MdChevronLeft />
        </button>
        <ul className={styles.imageList} ref={imageListRef}>
          {images.map((src, index) => (
            <li key={index} className={styles.imageItemWrapper}>
              <img className={styles.imageItem} src={src} alt={`img-${index + 1}`} />
            </li>
          ))}
        </ul>
        <button
          id="next-slide"
          className={`${styles.slideButton} ${styles.rightButton}`}
          onClick={handleNextSlide}
        >
          <MdChevronRight />
        </button>
      </div>
      <div className={styles.sliderScrollbar}>
        <div className={styles.scrollbarTrack}>
          <div
            className={styles.scrollbarThumb}
            ref={scrollbarThumbRef}
          ></div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Project;

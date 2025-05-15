"use client";
import Image from 'next/image';
import styles from '../styles/CommercialCarousel.module.css';

const CommercialCarousel = ({ companyName, companyDescription,carouselImage }) => {
  const isBlurred = (companyName !== "Central Square" && companyName !== "Aston Square" && companyName !== "Jarrah Grange Estate" && companyName !== "Iramoo Waters");
  
  return (
    <div className={styles.carousel}>
      <div className={styles.carouselSlide}>
        <div className={`${styles.carouselImageContainer} ${isBlurred ? styles.blurred : ''}`}>
          <img
            src={carouselImage}
            alt={companyName} // Use dynamic alt text for better accessibility
            className={styles.carouselImage}
            layout="responsive" 
            fill
            
            objectFit="cover"
            quality={100} // Use highest quality (default is 75)
          />
        </div>
        <div className={styles.carouselContent}>
          <h1>{companyName}</h1>
          <p>{companyDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default CommercialCarousel;

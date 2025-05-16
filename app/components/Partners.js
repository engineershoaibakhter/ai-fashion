"use client";
import Image from 'next/image';
import styles from '../styles/Partners.module.css';

const Partners = () => {
  const images = [
    '/images/clients/clean.webp',
    '/images/clients/iga.svg',
    '/images/clients/anytimefitness.jpg',
    '/images/clients/subway-logo.avif',
    '/images/clients/clean.webp',
    '/images/clients/iga.svg',
    '/images/clients/anytimefitness.jpg',
    '/images/clients/subway-logo.avif',
    '/images/clients/clean.webp',
    '/images/clients/iga.svg',
    '/images/clients/anytimefitness.jpg',
    '/images/clients/subway-logo.avif',
  ];

  return (
    <div className={styles.Partners} id='partners'>
      <h2 className={styles.h2}>Our Partners</h2>
      <div className={styles.slider}>
        <div className={styles.slideTrack}>
          {images.map((source, index) => (
            <div className={styles.slide} key={index}>
              <Image src={source} layout="responsive" width={100} height={100} objectFit="cover" alt={`Partner ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;

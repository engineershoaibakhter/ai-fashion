"use client";
import React, {  useRef, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import styles from '../styles/Commercial.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {
  const imageListRef = useRef(null);
  const scrollbarThumbRef = useRef(null);

  const testimonials = [
    {
      companyImage: "/images/commercial/THRONHILL_PARK-110.jpg",
      companyLocation: "VIC, Thornhill Park",
      companyProjectName: "Central Square",
      companyInfo: "Local Activity Centre with diverse tenancies and ample.",
      leasingLink: "https://www.pspproperty.com.au/property?property_id=1064509/2-sadie-avenue-thornhill-park",
      detailsLink: "/thornhill",
    },
    {
      companyImage: "/images/commercial/aston.jpg",
      companyLocation: "VIC, Craigieburn",
      companyProjectName: "Aston Square",
      companyInfo: "Upcoming neighbourhood centre with childcare, and gym.",
      leasingLink: "https://www.pspproperty.com.au/property?property_id=1241993/179-elevation-boulevard-craigieburn",
      detailsLink: "/craigieburn",
    },
    {
      companyImage: "/images/coming soon.jpg",
      companyLocation: "VIC, Clyde North",
      companyProjectName: "Clyde Square",
      companyInfo: "Unique mix of commercial, industrial lots, and boutique.",
      leasingLink: "",
      detailsLink: "/clydesquare",
    },
    {
      companyImage: "/images/commercial/woolert.jpg",
      companyLocation: "VIC, Wollert",
      companyProjectName: "Jarrah Grange Estate",
      companyInfo: "129 residential lots with over 1Ha green space in Wollert.",
      leasingLink: "",
      detailsLink: "/wollert",
    },
    ,
    {
      companyImage: "/images/coming soon.jpg",
      companyLocation: "VIC, Toorak",
      companyProjectName: "Orrong Tower",
      companyInfo: "Boutique architecturally designed apartment block soon.",
      leasingLink: "",
      detailsLink: "/orrongtower",
    },
    ,
    {
      companyImage: "/images/commercial/iroomo.jpg",
      companyLocation: "VIC, Thornhill Park",
      companyProjectName: "Iramoo Waters",
      companyInfo: "150+ residential lots, 2Ha green space, wetland, and walk.",
      leasingLink: "",
      detailsLink: "/iramoo",
    },
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
    const scrollbarThumbElement = scrollbarThumbRef.current; // Copy ref to a variable

    const handleMouseMove = (e) => {
      const startX = e.clientX;
      const thumbPosition = scrollbarThumbElement.offsetLeft;
      const maxThumbPosition = imageListElement.clientWidth - scrollbarThumbElement.offsetWidth;

      const onMouseMove = (e) => {
        const deltaX = e.clientX - startX;
        const newThumbPosition = thumbPosition + deltaX;
        const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
        const maxScrollLeft = imageListElement.scrollWidth - imageListElement.clientWidth;
        const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

        scrollbarThumbElement.style.left = `${boundedPosition}px`;
        imageListElement.scrollLeft = scrollPosition;
      };

      const onMouseUp = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    };

    if (scrollbarThumbElement) {
      scrollbarThumbElement.addEventListener('mousedown', handleMouseMove);
    }

    const handleScroll = () => {
      updateScrollThumbPosition();
    };

    if (imageListElement) {
      imageListElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollbarThumbElement) {
        scrollbarThumbElement.removeEventListener('mousedown', handleMouseMove);
      }

      if (imageListElement) {
        imageListElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className={styles.Project} id='projects'>
      <div className={styles.header}>
           <h2 className={styles.title}>Our Projects</h2>
           <p className={styles.description}>
             High performance businesses need high-performance places to function as the engine-rooms of their success. From the home of Australia’s biggest blue-chip companies to world-class innovation precincts supporting the next wave of entrepreneurs, our commercial neighbourhoods are fueling the future of work.
           </p>
         </div>
      <div className={styles.container}>
        <div className={styles.sliderWrapper}>
          <button
            id="prev-slide"
            className={`${styles.slideButton} ${styles.leftButton}`}
            onClick={handlePrevSlide}
            style={{padding:"0px 10px 0px 10px"}}
          >
                      <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <ul className={styles.imageList} ref={imageListRef}>
            {testimonials.map((content, index) => (
              <li key={index} className={styles.imageItemWrapper}>
                <div className={styles.allImage}>
                  <div className={`${styles.imageItem} ${index === 0 ? styles.firstImage : ''}`}>
                    <div className={styles.companyContent}>
                      <div className={styles.companyImage}>
                      <Image fill src={content.companyImage} alt={'Company Logo'} className={styles.CompanyLogoImage} />
                      </div>
                      <div className={styles.cardContent}>
                <p className={styles.location}>{content.companyLocation}</p>
                <h4 className={styles.projectName}>{content.companyProjectName}</h4>
                <p className={styles.features}>{content.companyInfo}</p>
                <div className={styles.footer}>
                  {
                    content.leasingLink !== content.leasingLink.slice(0,2)?(
                      <Link href={content.leasingLink} target="_blank" rel="noopener noreferrer"><button className={styles.leasing}>Leasing now</button></Link>
                    ):(
                      <button className={`${styles.leasing} ${styles.leasingButton}`}>Leasing now</button>
                    )

                  }
                  <Link href={content.detailsLink}><button className={styles.detailsLink}>More details ➔</button></Link>
                </div>
              </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <button
            id="next-slide"
            className={`${styles.slideButton} ${styles.rightButton}`}
            onClick={handleNextSlide}
            style={{padding:"0px 10px 0px 10px"}}
          >
                         <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
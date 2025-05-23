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
      companyImage: "/images/pilot-programs.jpg",
      companyLocation: "VIC, Thornhill Park",
      companyProjectName: "Pilot Programs",
      companyInfo: "Case studies or showcases of your early-stage deployments (e.g., initial retailers using the platform in Melbourne).",
      leasingLink: "",
      detailsLink: "/",
    },
    {
      companyImage: "/images/retailer-integrations.jpg",
      companyLocation: "VIC, Craigieburn",
      companyProjectName: "Retailer Integrations",
      companyInfo: "Projects showing how fashion retailers integrated your tech — including API work, fitting workflows, and sales results.",
      leasingLink: "",
      detailsLink: "/",
    },
    {
      companyImage: "/images/technology-in-action.jpg",
      companyLocation: "VIC, Clyde North",
      companyProjectName: "Technology in Action",
      companyInfo: "Highlight the core AI features used in real-world settings: virtual fitting rooms, LiDAR-based scanning, and personalized style engines.",
      leasingLink: "",
      detailsLink: "/",
    },
    {
      companyImage: "/images/sustainability-impact.jpg",
      companyLocation: "VIC, Wollert",
      companyProjectName: "Sustainability Impact",
      companyInfo: "Projects that show how your platform helps reduce carbon emissions and waste (fewer returns, smarter stock management).",
      leasingLink: "",
      detailsLink: "/",
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
            Experience perfectly tailored fashion with our AI-Powered Fashion Designer — merging LiDAR precision, 3D scanning, and generative design to transform your shopping experience.
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
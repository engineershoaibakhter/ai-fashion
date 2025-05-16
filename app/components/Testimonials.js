"use client";
import React, { useState, useRef, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import styles from '../styles/Testimonials.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {
  const imageListRef = useRef(null);
  const scrollbarThumbRef = useRef(null);

  const testimonials = [
    {
      companyLogo: "/images/testimonials/igatestimonials.svg",
      companyInfo: "Working with BCA Corp has been a game-changer for our supermarket. Their proactive collaboration and seamless integration have significantly assisted us in smooth supermarket mobilisation. The intuitive design and reliability of their system have not only streamlined our processes but also improved our overall efficiency. Their support team is responsive and knowledgeable, making the transition smooth and hassle-free. We highly recommend BCA Corp to any business looking to partner with them and  achieve tangible results.",
      authorName: "Tripti Gupta",
      authorPosition: "IGA",
      imgSrc: "/images/testimonials/firstImage.png"
    },
    {
      companyLogo: "/images/clients/cleanlarge.png",
      companyInfo: "Working with Ankur and Michael from BCA Corp at Central Square has been a truly exceptional experience. From our first interaction, their professionalism and commitment to excellence were evident. They made the entire process remarkably easy, ensuring that all our needs were met with a friendly and approachable demeanor. Ankur and Michael were consistently responsive, addressing our enquiries and concerns promptly, which greatly facilitated our collaboration. Their proactive communication and attention to detail made us feel valued and confident in every decision.",
      authorName: "David",
      authorPosition: "Clean Streak Laundry",
      imgSrc: "/images/testimonials/fourImage.png"
    },
    // {
    //   companyLogo: "/images/clients/anytimeheader-logo.png",
    //   companyInfo: "Partnering with Verida to enhance their offerings with NEAR features is exciting. The upcoming Verida Wallet will enable seamless DIDs and messaging for NEAR users, simplifying the adoption of Web3 technologies and making it more accessible for everyday users, businesses man, developers.",
    //   authorName: "Illia Polosukhin",
    //   authorPosition: "Anytime Fitness",
    //   imgSrc: "/images/testimonials/secondImage.png"
    // },
    {
      companyLogo: "/images/clients/subway.png",
      companyInfo: "Subway Thornhill Park is thrilled to have partnered with BCA Corp for our latest store in Thornhill Park. BCA Corp's exceptional expertise and commitment to excellence were evident throughout the entire process. From the initial design phase to the final build, their team demonstrated remarkable professionalism and attention to detail.We look forward to collaborating with BCA Corp on future projects and highly recommend their services to any organization seeking a reliable and innovative development partner.",
      authorName: "Jolly",
      authorPosition: "Subway",
      imgSrc: "/images/testimonials/thirdImage.png"
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
    <div className={styles.Project}>
      <h2 className={styles.Heading}>What Our Clients Say</h2>
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
            {/* <MdChevronLeft />  */}
          <ul className={styles.imageList} ref={imageListRef}>
            {testimonials.map((content, index) => (
              <li key={index} className={styles.imageItemWrapper}>
                <div className={styles.allImage}>
                  <div className={styles.imageItem}>
                    <div className={styles.companyContent}>
                      <div className={styles.CompanyLogoImage}>
                      <Image src={content.companyLogo} layout="responsive" objectFit="cover" width={200} height={100} alt={'Company Logo'} className={styles.CompanyImage}/>
                      </div>
                      <div className={styles.companyInfoContainer}>
                      <p className={styles.companyInfo}>{content.companyInfo}</p>
                      </div>
                      <div className={styles.row}>
                        <div className={styles.textContainer}>
                          <h3 className={styles.authorName}>{content.authorName}</h3>
                          <p className={styles.authorPosition}>{content.authorPosition}</p>
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
            {/* <MdChevronRight /> */}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

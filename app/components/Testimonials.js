"use client";
import React, { useState, useRef, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import styles from "../styles/Testimonials.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  const imageListRef = useRef(null);
  const scrollbarThumbRef = useRef(null);

  const testimonials = [
    {
      companyLogo: "/images/testimonials/igatestimonials.svg",
      companyInfo:"Partnering with AI Fashion has completely transformed how our customers shop. The precision of their AI fitting tool drastically reduced our return rates, and the virtual try-on experience has boosted customer confidence. It’s like having a digital fitting room on every product page. Our team felt supported every step of the way.",
      authorName: "Alex Tran",
      authorPosition: "StyleTheory Australia",
      imgSrc: "/images/testimonials/firstImage.png",
    },
    {
      companyLogo: "/images/clients/cleanlarge.png",
      companyInfo:
        "The AI Fashion platform delivered beyond expectations. We saw a measurable 28% drop in returns within just 3 months. What really stood out was their generative design tool — it allowed us to offer custom-fit designs that delighted our audience. Their integration with Shopify was seamless.",
      authorName: "Meera Patel",
      authorPosition: "Founder, Urban Thread",
      imgSrc: "/images/testimonials/fourImage.png",
    },
    {
      companyLogo: "/images/clients/anytimeheader-logo.png",
      companyInfo: "The technology speaks for itself — our customers are happier, our operations are leaner, and we’re proud to reduce our carbon footprint thanks to fewer returns. The AI Fashion team was responsive, strategic, and ahead of the curve. Highly recommended for any forward-thinking fashion brand.",
      authorName: "Liam Jennings",
      authorPosition: "Creative Director, Edgewear",
      imgSrc: "/images/testimonials/secondImage.png"
    },
    {
      companyLogo: "/images/clients/subway.png",
     companyInfo:"Partnering with AI Fashion has completely transformed how our customers shop. The precision of their AI fitting tool drastically reduced our return rates, and the virtual try-on experience has boosted customer confidence. It’s like having a digital fitting room on every product page. Our team felt supported every step of the way.",
      authorName: "Alex Tran",
      authorPosition: "StyleTheory Australia",
      imgSrc: "/images/testimonials/thirdImage.png",
    },
  ];

  const handleNextSlide = () => {
    if (imageListRef.current) {
      const maxScrollLeft =
        imageListRef.current.scrollWidth - imageListRef.current.clientWidth;
      const scrollAmount = imageListRef.current.clientWidth;
      const newScrollLeft = Math.min(
        imageListRef.current.scrollLeft + scrollAmount,
        maxScrollLeft
      );
      imageListRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const handlePrevSlide = () => {
    if (imageListRef.current) {
      const scrollAmount = imageListRef.current.clientWidth;
      const newScrollLeft = Math.max(
        imageListRef.current.scrollLeft - scrollAmount,
        0
      );
      imageListRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const updateScrollThumbPosition = () => {
    if (imageListRef.current && scrollbarThumbRef.current) {
      const maxScrollLeft =
        imageListRef.current.scrollWidth - imageListRef.current.clientWidth;
      const scrollPosition = imageListRef.current.scrollLeft;
      const thumbPosition =
        (scrollPosition / maxScrollLeft) *
        (imageListRef.current.clientWidth -
          scrollbarThumbRef.current.offsetWidth);
      scrollbarThumbRef.current.style.left = `${thumbPosition}px`;
    }
  };

  useEffect(() => {
    const imageListElement = imageListRef.current;
    const scrollbarThumbElement = scrollbarThumbRef.current; // Copy ref to a variable

    const handleMouseMove = (e) => {
      const startX = e.clientX;
      const thumbPosition = scrollbarThumbElement.offsetLeft;
      const maxThumbPosition =
        imageListElement.clientWidth - scrollbarThumbElement.offsetWidth;

      const onMouseMove = (e) => {
        const deltaX = e.clientX - startX;
        const newThumbPosition = thumbPosition + deltaX;
        const boundedPosition = Math.max(
          0,
          Math.min(maxThumbPosition, newThumbPosition)
        );
        const maxScrollLeft =
          imageListElement.scrollWidth - imageListElement.clientWidth;
        const scrollPosition =
          (boundedPosition / maxThumbPosition) * maxScrollLeft;

        scrollbarThumbElement.style.left = `${boundedPosition}px`;
        imageListElement.scrollLeft = scrollPosition;
      };

      const onMouseUp = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    };

    if (scrollbarThumbElement) {
      scrollbarThumbElement.addEventListener("mousedown", handleMouseMove);
    }

    const handleScroll = () => {
      updateScrollThumbPosition();
    };

    if (imageListElement) {
      imageListElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollbarThumbElement) {
        scrollbarThumbElement.removeEventListener("mousedown", handleMouseMove);
      }

      if (imageListElement) {
        imageListElement.removeEventListener("scroll", handleScroll);
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
            style={{ padding: "0px 10px 0px 10px" }}
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
                        <Image
                          src={content.companyLogo}
                          layout="responsive"
                          objectFit="cover"
                          width={200}
                          height={100}
                          alt={"Company Logo"}
                          className={styles.CompanyImage}
                        />
                      </div>
                      <div className={styles.companyInfoContainer}>
                        <p className={styles.companyInfo}>
                          {content.companyInfo}
                        </p>
                      </div>
                      <div className={styles.row}>
                        <div className={styles.textContainer}>
                          <h3 className={styles.authorName}>
                            {content.authorName}
                          </h3>
                          <p className={styles.authorPosition}>
                            {content.authorPosition}
                          </p>
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
            style={{ padding: "0px 10px 0px 10px" }}
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

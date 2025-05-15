"use client";
import React, { useState, useRef } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import styles from '../styles/LatestNews.module.css';
import Image from 'next/image';


const LatestNews = () => {
    const newsData = [
      {
        date: 'December 15, 2023',
        title: 'Verida and inDAO Team Up to Help Uzbekistan Adopt Web3 Tech',
        image: '/images/news/robotnews.png',
      },
      {
        date: 'December 7, 2023',
        title: 'Verida Mainnet is launching soon',
        image: '/images/news/verida.png',
      },
      {
        date: 'December 1, 2023',
        title: 'Aussie Innovators Join Forces to Tokenize $100T+ Assets with End to End Solution for Tokenization',
        image: '/images/news/tomb.png',
      },
      {
        date: 'December 15, 2023',
        title: 'Verida and inDAO Team Up to Help Uzbekistan Adopt Web3 Tech',
        image: '/images/news/varida2.png',
      },
      {
        date: 'December 7, 2023',
        title: 'Verida Mainnet is launching soon',
        image: '/images/news/s.png',
      },
      {
        date: 'December 1, 2023',
        title: 'Aussie Innovators Join Forces to Tokenize $100T+ Assets with End to End Solution for Tokenization',
        image: '/images/news/varida3.png',
      },
      {
        date: 'December 15, 2023',
        title: 'Verida and inDAO Team Up to Help Uzbekistan Adopt Web3 Tech',
        image: '/images/news/bitcoin.png',
      },
      {
        date: 'December 7, 2023',
        title: 'Verida Mainnet is launching soon',
        image: '/images/news/varida4.png',
      },
      {
        date: 'December 1, 2023',
        title: 'Aussie Innovators Join Forces to Tokenize $100T+ Assets with End to End Solution for Tokenization',
        image: '/images/news/bitcoin.png',
      },
    ];

    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        scrollContainerRef.current.scrollBy({ left: -510, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollContainerRef.current.scrollBy({ left: 510, behavior: 'smooth' });
    };

    return (
        <div className={styles.latestNews} id='news'>
            <h2 className={styles.title}>LATEST NEWS</h2>
            <div className={styles.cardContainer} ref={scrollContainerRef}>
                {newsData.map((news, index) => (
                    <div key={index} className={styles.card}>
                        <Image src={news.image} alt={news.title} className={styles.cardImage} />
                        <p className={styles.date}>{news.date}</p>
                        <h3 className={styles.cardTitle}>{news.title}</h3>
                    </div>
                ))}
            </div>
            <div className={styles.navigation}>
                <button className={`${styles.navButton} ${styles.prev}`} onClick={scrollLeft}><MdChevronLeft size={24} /></button>
                <button className={`${styles.navButton} ${styles.next}`} onClick={scrollRight}><MdChevronRight size={24} /></button>
            </div>
        </div>
    );
};

export default LatestNews;
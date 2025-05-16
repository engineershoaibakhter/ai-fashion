"use client"

import React from 'react'
import styles from '../styles/Gallery.module.css'
import Image from 'next/image'

const Gallery = ({companyName}) => {
  const isBlurred = companyName !== "Central Square";
  return (
    <div className={styles.Gallery}>
      <h2>Gallery</h2>
      <p>{companyName} is set to redefine innovation.</p>
      <div className={styles.Images}>
        <div className={`${styles.image} ${isBlurred? styles.blurred:""}`}>
        <Image src='/images/commercial/gallery/1.jpg' alt='sixth image' layout="responsive" width={200} height={100} objectFit="cover" />
         
        </div>
        <div className={`${styles.image} ${isBlurred? styles.blurred:""}`}>
          <Image src='/images/commercial/gallery/2.jpg' alt='second image' layout="responsive" width={200} height={100} objectFit="cover" />
        </div>
        <div className={`${styles.image} ${isBlurred? styles.blurred:""}`}>
          <Image src='/images/commercial/gallery/3.jpg' alt='third image' layout="responsive" objectFit="cover" width={200} height={100} />
        </div>
        <div className={`${styles.image} ${isBlurred? styles.blurred:""}`}>
          <Image src='/images/commercial/gallery/4.jpg' alt='fifth image' layout="responsive" objectFit="cover" width={200} height={100}/>
        </div>
        <div className={`${styles.image} ${isBlurred? styles.blurred:""}`}>
          <Image src='/images/commercial/gallery/5.jpg' alt='first image' layout="responsive" objectFit="cover" width={200} height={100}/>
        </div>
        <div className={`${styles.image} ${isBlurred? styles.blurred:""}`}>
          <Image src='/images/commercial/gallery/6.jpg' alt='sixth image' layout="responsive" objectFit="cover" width={200} height={100} />
        </div>
        <div className={`${styles.image} ${isBlurred? styles.blurred:""}`}>
          <Image src='/images/commercial/gallery/7.jpg' alt='sixth image' layout="responsive" objectFit="cover" width={200} height={100} />
        </div>
        <div className={`${styles.image} ${isBlurred? styles.blurred:""}`}>
          <Image src='/images/commercial/gallery/8.jpg' alt='sixth image' layout="responsive" objectFit="cover" width={200} height={100} />
        </div>
      </div>
    </div>
  )
}

export default Gallery

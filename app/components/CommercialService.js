"use client"

import React from 'react'
import styles from '../styles/CommercialService.module.css'
import Image from 'next/image'

const CommercialService = () => {
  return (
    <div className={styles.commercialService}>
        <div className={styles.serviceItem}>
            <Image src='/images/commercial/Sustainable.svg' alt='Net-zero image' width={100} height={100}/>
            <h1>Net-zero</h1>
            <p>Emissions target in operation</p>
        </div>
        <div className={styles.serviceItem}>
            <Image src='/images/commercial/star.svg' alt='6 Star image' width={100} height={100}/>
            <h1>6 Star</h1>
            <p>Green Star certification target</p>
        </div>
        <div className={styles.serviceItem}>
            <Image src='/images/commercial/5GreenStar.svg' alt='5.5 Star image' width={100} height={100}/>
            <h1>5.5 Star</h1>
            <p>NABERS Energy Rating target</p>
        </div>
        <div className={styles.serviceItem}>
            <Image src='/images/commercial/leaf.svg' alt='80% image' width={100} height={100} />
            <h1>80%</h1>
            <p>Waste diversion from landfill target</p>
        </div>
    </div>
  )
}

export default CommercialService

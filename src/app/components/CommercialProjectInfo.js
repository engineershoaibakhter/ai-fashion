import React from 'react'
import styles from '../styles/CommercialProjectInfo.module.css'
import Link from 'next/link'

const CommercialProjectInfo = ({ locationMap, contactUrl, location, pdfFile,developmentStatus, paragraph1, point1, point2, point3 }) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContent}>
        <p className={styles.description}>
          {paragraph1}
        </p>
        <ul className={styles.featuresList}>
          <li>{point1}</li>
          <li>{point2}</li>
          <li>{point3}</li>
        </ul>
      </div>
      <div className={styles.rightContent}>
        <div className={styles.status}>
          <h3>Development Status</h3>
          <p>{developmentStatus}</p>
        </div>
        <div className={styles.location}>
          <h3>Location</h3>
          <p>{location}</p>
          <Link href={locationMap} target="_blank" rel="noopener noreferrer" className={styles.mapLink}>Google Map</Link>
        </div>
        <div className={styles.buttons}>
          {pdfFile ? (
            <Link href={pdfFile} target='_blank'>
              <button className={styles.updateButton}>Master Plan</button>
            </Link>
          ) : (
            <button className={`${styles.updateButton} ${styles.disabledButton}`} disabled>Master Plan</button>
          )}
          <Link href={contactUrl} target='_blank'>
            <button className={styles.updateButton}>Contact</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CommercialProjectInfo

import React from 'react'
import styles from '../styles/CommercialProjectMoreInfo.module.css'

const CommercialProjectMoreInfo = ({point1,point2,point3,point4,point5,point6,point7}) => {
  return (
    <div className={styles.container}>
    <div className={styles.leftContent}>
      <ul className={styles.featuresList}>
        <li>{point1}</li>
        <li>{point2}</li>
        <li>{point3}</li>
      </ul>
    </div>
    <div className={styles.rightContent}>
    <ul className={styles.featuresList}>
      <li>{point4}</li>
      <li>{point5}</li>
      <li>{point6}</li>
      <li>{point7}</li>
        </ul>
    </div>
  </div>
  )
}

export default CommercialProjectMoreInfo
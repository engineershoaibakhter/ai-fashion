"use client"
import styles from "../styles/CommercialLocation.module.css"

const CommercialLocation = ({locationSrc,companyName}) => {
  return (
    <div>
        <div className={styles.locationContainer}>
      <h2>Our Location</h2>
      <p>{companyName} is set to redefine innovation.</p>
      <div className={styles.mapContainer}>
        <iframe src={locationSrc} 
        width="2000" 
        height="450" 
        style={{border:0}} 
        allowFullScreen="" 
        loading="lazy" 
        title="BCA CORP"
        ></iframe>

      </div>
    </div>
    </div>
  )
}

export default CommercialLocation
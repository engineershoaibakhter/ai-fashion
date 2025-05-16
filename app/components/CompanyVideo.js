"use client"
import styles from '../styles/CompanyVideo.module.css'
function CompanyVideo() {
  return (
    <>
    <div className={styles.videoContainer}>
        <video className={styles.video} controls>
            <source src='/video/company_video' type='video/mp4'/>
            Your browser does not support the video tag.
        </video>

    </div>
    </>
  )
}

export default CompanyVideo
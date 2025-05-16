import React from 'react'
import styles from "../styles/CentralPlaceSydney.module.css";

const CentralPlaceSydney = ({companyName,paragraph2,paragraph3}) => {
  return (
    <div className={styles.centralPlaceSydney}>
        <div className={styles.heading}>
            <h1>{companyName}</h1>
        </div>
        <div className={styles.paragraph}>
        <p>{paragraph2}</p>
        <p>{paragraph3}</p>
        </div>
    </div>
  )
}

export default CentralPlaceSydney
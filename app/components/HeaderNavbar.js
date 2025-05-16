"use client";
import styles from '../styles/HeaderNavbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLocationDot, faPhoneVolume, faClock } from '@fortawesome/free-solid-svg-icons';
// import { faFacebookF, faTwitter, faYoutube, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faPhoneVolume, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const HeaderNavbar = () => {
  return (
    <div className={styles.HeaderNavbar}>
      <div className={styles.RightContent}>
        <div className={styles.AddressContainer}>
          <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
          <h6 className={styles.h6}>Melbourne, Victoria</h6>
        </div>
        <span className={styles.BreakLine}>|</span>
        <div className={styles.NumberContainer}>
          <FontAwesomeIcon icon={faPhoneVolume} className={styles.icon} />
          <h6 className={styles.h6}><Link href="tel:+61392224000" className={styles.phoneLink}>03 9222 4000</Link></h6>
        </div>
      </div>
      <div className={styles.LeftContent}>
        <div className={styles.icons}>
          <span ><Link href={process.env.NEXT_PUBLIC_FACEBOOK_LINK} target='_blank'><FontAwesomeIcon icon={faFacebook} style={{fontSize:"18px"}} className={styles.icon} /></Link></span>
          <span><Link href={process.env.NEXT_PUBLIC_TWITTER_LINK} target='_blank'><FontAwesomeIcon icon={faTwitter} style={{fontSize:"18px"}} className={styles.icon} /></Link></span>
          <span><Link href={process.env.NEXT_PUBLIC_YOUTUBE_LINK} target='_blank'><FontAwesomeIcon icon={faYoutube} style={{fontSize:"18px"}} className={styles.icon} /></Link></span>
          <span><Link href={process.env.NEXT_PUBLIC_INSTAGRAM_LINK} target='_blank'><FontAwesomeIcon icon={faInstagram} style={{fontSize:"18px"}} className={styles.icon}/></Link></span>
          <span><Link href={process.env.NEXT_PUBLIC_LINKEDIN_LINK} target='_blank'><FontAwesomeIcon icon={faLinkedin} style={{fontSize:"18px"}} className={styles.icon}/></Link></span>
        </div>
        
      </div>
    </div>
  );
};

export default HeaderNavbar;

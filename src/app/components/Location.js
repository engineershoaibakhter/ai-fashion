import Link from 'next/link';
import styles from '../styles/Location.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhoneVolume, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className={styles.location}>
        <h2 className={styles.heading}>Our Location</h2>
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={`${styles.leftContent} ${styles.leftSide}`}>
          {/* Add your left content here */}
          <div className={`${styles.details} ${styles.address}`}>
          <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
            <div className={styles.topic}>Address</div>
            <div className={styles.textOne}>Level 8/468 St Kilda Road</div>
            <div className={styles.textTwo}>Melbourne VIC 3004</div>
          </div>
          <div className={`${styles.details} ${styles.phone}`}>
            {/* <i className="fas fa-phone-alt" id='icon'></i> */}
          <FontAwesomeIcon icon={faPhoneVolume} className={styles.icon} />
            <div className={styles.topic}>Phone</div>
            <div className={styles.textOne}><Link href="tel:+61392224000">03 9222 4000</Link></div>
          </div>
          <div className={`${styles.details} ${styles.email}`}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
            <div className={styles.topic}>Email</div>
            <div className={styles.textOne}><Link href="mailto:info@bcacorp.com.au">info@bcacorp.com.au</Link></div>
          </div>
        </div>
        <div className={`${styles.rightContent} ${styles.rightSide}`}>
        <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.820788404048!2d144.9738940752896!3d-37.84108113559879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6681bed7b7575%3A0x276e5d58b462d42!2s8%2F468%20St%20Kilda%20Rd%2C%20Melbourne%20VIC%203004%2C%20Australia!5e0!3m2!1sen!2s!4v1720614641305!5m2!1sen!2s"
    width="100%"
    height="400"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    title="BCA CORP"
  ></iframe>

        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;

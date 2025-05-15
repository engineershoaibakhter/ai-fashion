"use client";
import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import styles from '../styles/Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);

  useEffect(() => {
    if (formSubmitted || formError) {
      const timer = setTimeout(() => {
        setFormSubmitted(false);
        setFormError(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [formSubmitted, formError]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      e.target,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID
    )
      .then((result) => {
          console.log(result.text);
          setFormSubmitted(true);
          setFormError(false);
      }, (error) => {
          console.log(error.text);
          setFormError(true);
      });

    e.target.reset();
  };

  return (
    <div className={styles.contact_us}>
      <div className={styles.contactContainer} id='contact_us'>
        <div className={styles.leftSection}>
          <h2 className={styles.h2}>CONTACT US</h2>
          <p>We&apos;d love to hear from you! Whether you have a question, feedback, or simply want to say hello, our team is here to help. Your thoughts and inquiries are important to us, and we are committed to providing you with the best possible support.</p>
          <h2>Drop Us a Message</h2>
          <p>For your convenience, we have provided a contact form. Simply fill out the form, and one of our representatives will get back to you as soon as possible. We strive to respond to all inquiries within 24 hours.</p>
        </div>
        <div className={styles.rightSection}>
          <form className={styles.contactForm} onSubmit={sendEmail}>
            <div className={`${styles.formGroup} ${styles.row}`}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name*</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email*</label>
                <input type="email" id="email" name="email" placeholder="your_email@gmail.com" required />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Additional Message</label>
              <textarea id="message" name="message" placeholder="Please write any note here..."></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>Submit</button>
          </form>
          {formSubmitted && <p className={styles.successMessage}>Thank you! Your message has been sent.</p>}
          {formError && <p className={styles.errorMessage}>Oops! Something went wrong. Please try again.</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;

'use client';

import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';

const NavbarWeb = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link href={'/'}>
        <Image src={'/weblogo.png'} alt="Company Logo" className={styles.logoImage} filllayout="responsive" width={200} height={100} objectFit="cover"/>
        </Link>      
      </div>
      <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
        <Link href="/" onClick={closeMenu}>Home</Link>
        <Link href="/#projects" onClick={closeMenu}>Projects</Link>
        <Link href="/#partners" onClick={closeMenu}>Partners</Link>
        <Link href="/#contact_us" onClick={closeMenu}>Contact Us</Link>
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
    </div>
  );
};

export default NavbarWeb;

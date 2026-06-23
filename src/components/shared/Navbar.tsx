"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from './Button';
import styles from './Navbar.module.css';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.logoText}>DIAMOND GYM</span>
          </Link>
        </div>

        <div className={`${styles.navLinks} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
          <Link href="#home" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="#facilities" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Facilities</Link>
          <Link href="#trainers" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Trainers</Link>
          <Link href="#success" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Success Stories</Link>
          <Link href="#memberships" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Memberships</Link>
          <Link href="#contact" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          
          <div className={styles.mobileCta}>
            <Button variant="primary">Book Free Trial</Button>
          </div>
        </div>

        <div className={styles.desktopCta}>
          <Button variant="primary">Book Free Trial</Button>
        </div>

        <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle Menu">
          <div className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.line1Open : ''}`}></div>
          <div className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.line2Open : ''}`}></div>
          <div className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.line3Open : ''}`}></div>
        </button>
      </div>
    </nav>
  );
};

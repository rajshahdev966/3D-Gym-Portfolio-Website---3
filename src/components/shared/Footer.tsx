"use client";

import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.brandCol}>
          <div className={styles.logo}>
            <Link href="/">
              <span className={styles.logoText}>DIAMOND GYM</span>
            </Link>
          </div>
          <p className={styles.description}>
            A premium, immersive, transformation-focused luxury gym experience.
          </p>
        </div>

        <div className={styles.linksCol}>
          <h4 className={styles.colTitle}>Quick Links</h4>
          <ul className={styles.linkList}>
            <li><Link href="#facilities">Facilities</Link></li>
            <li><Link href="#trainers">Trainers</Link></li>
            <li><Link href="#memberships">Memberships</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </div>

        <div className={styles.contactCol}>
          <h4 className={styles.colTitle}>Contact Information</h4>
          <ul className={styles.linkList}>
            <li><a href="tel:+15551234567">+1 (555) 123-4567</a></li>
            <li><a href="mailto:info@diamondgym.com">info@diamondgym.com</a></li>
            <li>123 Luxury Avenue, Elite District, NY 10001</li>
          </ul>
        </div>

        <div className={styles.socialCol}>
          <h4 className={styles.colTitle}>Social Media</h4>
          <ul className={styles.linkList}>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">YouTube</a></li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className="container">
          <div className={styles.bottomContent}>
            <p>© {new Date().getFullYear()} Diamond Gym Lounge. All Rights Reserved.</p>
            <div className={styles.legalLinks}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

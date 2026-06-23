"use client";

import React, { useState } from 'react';
import styles from './CommitmentCTA.module.css';
import { BookingModal } from '../shared/BookingModal';

export const CommitmentCTA: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <section className={styles.ctaSection} id="contact">
        <div className="container">
          <div className={styles.content}>
            <h2 className="text-display-lg">
              YOUR TRANSFORMATION<br />STARTS WITH A DECISION
            </h2>
            <p className="text-body-lg">
              One step today.<br />
              A completely different version of yourself tomorrow.
            </p>

            <div className={styles.actionArea}>
              <button 
                className={`${styles.commitmentButton} ${isHovered ? styles.hovered : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setIsModalOpen(true)}
              >
                <div className={styles.buttonTextWrapper}>
                  <span className={`${styles.defaultText} ${isHovered ? styles.hidden : ''}`}>
                    I'M THINKING ABOUT IT
                  </span>
                  <span className={`${styles.hoverText} ${isHovered ? styles.visible : ''}`}>
                    START MY TRANSFORMATION
                  </span>
                </div>
                <div className={styles.portalPulse}></div>
              </button>

              <div className={styles.supportingText}>
                <span>Free Trial Available</span>
                <span className={styles.dot}>•</span>
                <span>No Commitment Required</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

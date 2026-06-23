"use client";

import React, { useState } from 'react';
import styles from './BookingModal.module.css';
import { Button } from './Button';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call to Google Sheets backend as per wireframe
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 3000);
    }, 1500);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
          ×
        </button>
        
        {isSuccess ? (
          <div className={styles.successState}>
            <div className={styles.successIcon}>✓</div>
            <h3 className="text-heading-md">Application Received</h3>
            <p className="text-body-md">One of our elite coaches will contact you within 24 hours.</p>
          </div>
        ) : (
          <div className={styles.formState}>
            <div className={styles.modalHeader}>
              <h3 className="text-heading-md">START YOUR TRANSFORMATION</h3>
              <p className="text-body-md">Complete the form below to book your free trial.</p>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Full Name</label>
                <input type="text" id="name" required className={styles.input} placeholder="John Doe" />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email Address</label>
                <input type="email" id="email" required className={styles.input} placeholder="john@example.com" />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>Phone Number</label>
                <input type="tel" id="phone" required className={styles.input} placeholder="+1 (555) 000-0000" />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="plan" className={styles.label}>Interested Plan</label>
                <select id="plan" className={styles.select}>
                  <option value="starter">Starter Plan (₹4999/Mo)</option>
                  <option value="pro">Pro Plan (₹9999/Mo)</option>
                  <option value="elite">Elite Plan (₹14999/Mo)</option>
                </select>
              </div>

              <div className={styles.submitWrapper}>
                <Button variant="primary" type="submit" disabled={isSubmitting} className={styles.submitBtn}>
                  {isSubmitting ? 'Processing...' : 'Submit Application'}
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

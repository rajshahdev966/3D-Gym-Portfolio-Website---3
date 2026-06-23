"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './CoachSelector.module.css';
import { Button } from '../shared/Button';
import { PortalFrame } from '../shared/PortalFrame';

const coaches = [
  {
    id: 'fatloss',
    role: 'Fat Loss Specialist',
    name: 'Elena Silva',
    experience: '8+ Years',
    specialization: 'Metabolic Conditioning & Fat Loss',
    achievements: 'Helped 200+ clients lose 10kg+',
    image: '/images/trainer_fatloss_1782221992340.png',
  },
  {
    id: 'strength',
    role: 'Strength Coach',
    name: 'Marcus Thorne',
    experience: '12+ Years',
    specialization: 'Powerlifting & Absolute Strength',
    achievements: 'National Powerlifting Champion',
    image: '/images/trainer_strength_1782222007669.png',
  },
  {
    id: 'muscle',
    role: 'Muscle Building Coach',
    name: 'David Vance',
    experience: '10+ Years',
    specialization: 'Hypertrophy & Bodybuilding',
    achievements: 'IFBB Pro Card Holder',
    image: '/images/trainer_muscle_1782222022780.png',
  },
  {
    id: 'functional',
    role: 'Functional Fitness Coach',
    name: 'Sarah Jenkins',
    experience: '6+ Years',
    specialization: 'Cross-Training & Mobility',
    achievements: 'CrossFit Games Athlete',
    image: '/images/trainer_functional_1782222034902.png',
  }
];

export const CoachSelector: React.FC = () => {
  const [activeCoach, setActiveCoach] = useState(coaches[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSelectCoach = (coach: typeof coaches[0]) => {
    if (coach.id === activeCoach.id) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveCoach(coach);
      setIsTransitioning(false);
    }, 300); // Matches CSS transition duration
  };

  return (
    <section className={styles.coachSection} id="trainers">
      <div className="container">
        <div className={styles.header}>
          <h2 className="text-display-lg">FIND YOUR PERFECT TRAINER</h2>
          <p className="text-body-lg">Different goals require different expertise.</p>
        </div>

        <div className={styles.contentGrid}>
          {/* Left: Options */}
          <div className={styles.optionsPanel}>
            {coaches.map(coach => (
              <button 
                key={coach.id}
                className={`${styles.optionButton} ${activeCoach.id === coach.id ? styles.activeOption : ''}`}
                onClick={() => handleSelectCoach(coach)}
              >
                <div className={styles.radioCircle}>
                  <div className={styles.radioInner}></div>
                </div>
                <span>{coach.role}</span>
              </button>
            ))}
          </div>

          {/* Center: Avatar */}
          <div className={styles.avatarPanel}>
            <PortalFrame className={styles.avatarWrapper}>
              <div className={`${styles.avatarContainer} ${isTransitioning ? styles.fade : ''}`}>
                <Image 
                  src={activeCoach.image}
                  alt={activeCoach.name}
                  fill
                  className={styles.avatarImage}
                />
              </div>
            </PortalFrame>
          </div>

          {/* Right: Info */}
          <div className={styles.infoPanel}>
            <div className={`${styles.infoCard} ${isTransitioning ? styles.slideFade : ''}`}>
              <h3 className="text-heading-lg">{activeCoach.name}</h3>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Experience</span>
                <span className={styles.infoValue}>{activeCoach.experience}</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Specialization</span>
                <span className={styles.infoValue}>{activeCoach.specialization}</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Achievements</span>
                <span className={styles.infoValue}>{activeCoach.achievements}</span>
              </div>
              
              <div className={styles.ctaWrapper}>
                <Button variant="primary">Train With This Coach</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

"use client";

import React, { useState } from 'react';
import styles from './AchievementWall.module.css';

const achievements = [
  {
    id: 'google',
    title: 'Google Ratings',
    value: '4.9/5.0',
    subtitle: 'From 500+ Reviews',
    testimonials: [
      'The best gym experience I have ever had. The trainers are top-notch. - Mark T.',
      'Incredible facility. The luxury touches make working out a pleasure. - Sarah J.',
      'Achieved my goals in 3 months. The atmosphere is purely motivating. - David L.'
    ]
  },
  {
    id: 'awards',
    title: 'Transformation Awards',
    value: 'Best in Class',
    subtitle: '2025 Fitness Excellence',
    testimonials: [
      'Awarded for our 180-day transformation program.',
      'Recognized for outstanding client retention.',
      'Voted most luxurious training environment in the city.'
    ]
  },
  {
    id: 'milestones',
    title: 'Milestones',
    value: '10K+',
    subtitle: 'Transformations Completed',
    testimonials: [
      'Over 10,000 lives changed through our proven system.',
      '50,000+ kg of fat lost across our community.',
      'A thriving culture of excellence and discipline.'
    ]
  }
];

export const AchievementWall: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className={styles.achievementSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="text-display-lg">PROVEN RESULTS</h2>
        </div>

        <div className={styles.featuredStats}>
          <div className={styles.mainStat}>
            <span className={styles.stars}>★★★★★</span>
            <span className="text-heading-md">4.9 Rating</span>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.mainStat}>
            <span className="text-heading-md">500+</span>
            <span className={styles.statLabel}>Happy Members</span>
          </div>
        </div>

        <div className={styles.trophyGrid}>
          {achievements.map((item) => (
            <div 
              key={item.id} 
              className={`${styles.trophyCard} ${hoveredCard === item.id ? styles.expanded : ''}`}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={styles.cardHeader}>
                <h3 className="text-label-md">{item.title}</h3>
                <div className={styles.cardValue}>{item.value}</div>
                <div className={styles.cardSubtitle}>{item.subtitle}</div>
              </div>

              <div className={styles.testimonialWrapper}>
                <div className={styles.testimonialScroller}>
                  {item.testimonials.map((text, idx) => (
                    <div key={idx} className={styles.testimonialItem}>
                      "{text}"
                    </div>
                  ))}
                  {/* Duplicate for infinite scroll effect */}
                  {item.testimonials.map((text, idx) => (
                    <div key={`dup-${idx}`} className={styles.testimonialItem}>
                      "{text}"
                    </div>
                  ))}
                </div>
              </div>
              
              <div className={styles.shine}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

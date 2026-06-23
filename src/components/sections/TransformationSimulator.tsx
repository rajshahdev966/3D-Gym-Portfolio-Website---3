"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './TransformationSimulator.module.css';
import { Button } from '../shared/Button';
import { PortalFrame } from '../shared/PortalFrame';

const stages = [
  {
    id: 'before',
    label: 'Before',
    weight: '92kg',
    bodyFat: '32%',
    muscleMass: 'Low',
    story: 'Struggled with consistency. Low energy levels and poor sleep quality.',
    image: '/images/silhouette_before_1782222053015.png',
  },
  {
    id: '30days',
    label: '30 Days',
    weight: '87kg',
    bodyFat: '28%',
    muscleMass: 'Improving',
    story: 'Established routine. Energy levels soaring, starting to see initial definition.',
    image: '/images/silhouette_30days_1782222067607.png',
  },
  {
    id: '90days',
    label: '90 Days',
    weight: '80kg',
    bodyFat: '22%',
    muscleMass: 'Moderate',
    story: 'Major clothing size drops. Form improved significantly, lifting heavier.',
    image: '/images/silhouette_90days_1782222078440.png',
  },
  {
    id: '180days',
    label: '180 Days',
    weight: '74kg',
    bodyFat: '17%',
    muscleMass: 'High',
    story: 'Complete physical and mental transformation. A completely different version of myself.',
    image: '/images/silhouette_180days_1782222089320.png',
  }
];

export const TransformationSimulator: React.FC = () => {
  const [activeStage, setActiveStage] = useState(stages[0]);

  return (
    <section className={styles.simulatorSection} id="success">
      <div className="container">
        <div className={styles.header}>
          <h2 className="text-display-lg">SEE WHAT CONSISTENCY CAN DO</h2>
          <p className="text-body-lg">Real transformations from real members.</p>
        </div>

        <div className={styles.simulatorGrid}>
          {/* Left: Metrics & Story */}
          <div className={styles.dataPanel}>
            <div className={styles.metricsGrid}>
              <div className={styles.metricBox}>
                <span className={styles.metricLabel}>Weight</span>
                <span className={styles.metricValue}>{activeStage.weight}</span>
              </div>
              <div className={styles.metricBox}>
                <span className={styles.metricLabel}>Body Fat</span>
                <span className={styles.metricValue}>{activeStage.bodyFat}</span>
              </div>
              <div className={styles.metricBox}>
                <span className={styles.metricLabel}>Muscle Mass</span>
                <span className={styles.metricValue}>{activeStage.muscleMass}</span>
              </div>
            </div>
            
            <div className={styles.storyBox}>
              <h4 className="text-heading-md">The Journey</h4>
              <p className="text-body-md">{activeStage.story}</p>
            </div>

            <div className={styles.ctaWrapper}>
              <Button variant="primary">Start Your Own Journey</Button>
            </div>
          </div>

          {/* Center: Image */}
          <div className={styles.modelPanel}>
            <PortalFrame className={styles.modelWrapper}>
              <div className={styles.imageContainer}>
                {stages.map((stage) => (
                  <Image 
                    key={stage.id}
                    src={stage.image}
                    alt={stage.label}
                    fill
                    className={`${styles.modelImage} ${activeStage.id === stage.id ? styles.activeModel : ''}`}
                  />
                ))}
              </div>
            </PortalFrame>
          </div>

          {/* Right: Timeline */}
          <div className={styles.timelinePanel}>
            <div className={styles.timelineLine}></div>
            {stages.map((stage, index) => (
              <div 
                key={stage.id}
                className={`${styles.timelineMarkerWrapper} ${activeStage.id === stage.id ? styles.activeMarkerWrapper : ''}`}
                onMouseEnter={() => setActiveStage(stage)}
                onClick={() => setActiveStage(stage)}
              >
                <div className={styles.markerDot}></div>
                <div className={styles.markerLabel}>{stage.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

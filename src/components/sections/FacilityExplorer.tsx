"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './FacilityExplorer.module.css';
import { PortalFrame } from '../shared/PortalFrame';
import { Button } from '../shared/Button';

const zones = [
  {
    id: 'cardio',
    name: 'Cardio Zone',
    image: '/images/cardio_zone_1782221934145.png',
    features: ['High-Performance Treadmills', 'Ellipticals', 'Stair Climbers', 'Rowing Machines'],
  },
  {
    id: 'strength',
    name: 'Strength Zone',
    image: '/images/strength_zone_1782221946140.png',
    features: ['Olympic Racks', 'Free Weights', 'Cable Stations', 'Powerlifting Area'],
  },
  {
    id: 'functional',
    name: 'Functional Training',
    image: '/images/functional_zone_1782221959963.png',
    features: ['Turf Track', 'Kettlebells', 'Plyo Boxes', 'Battle Ropes'],
  },
  {
    id: 'recovery',
    name: 'Recovery Area',
    image: '/images/recovery_zone_1782221973424.png',
    features: ['Cold Plunge Tubs', 'Massage Beds', 'Saunas', 'Stretching Area'],
  }
];

export const FacilityExplorer: React.FC = () => {
  const [activeZone, setActiveZone] = useState(zones[1]); // Default to strength

  return (
    <section className={styles.facilitySection} id="facilities">
      <div className="container">
        <div className={styles.header}>
          <h2 className="text-display-lg">EXPLORE YOUR TRAINING ENVIRONMENT</h2>
          <p className="text-body-lg">Every area designed to maximize performance.</p>
        </div>

        <div className={styles.explorerGrid}>
          {/* Navigation / Zone Selection */}
          <div className={styles.zoneNav}>
            {zones.map(zone => (
              <button 
                key={zone.id}
                className={`${styles.zoneButton} ${activeZone.id === zone.id ? styles.activeZone : ''}`}
                onMouseEnter={() => setActiveZone(zone)}
                onClick={() => setActiveZone(zone)}
              >
                {zone.name}
              </button>
            ))}
          </div>

          {/* Interactive 3D View */}
          <div className={styles.zoneViewer}>
            <PortalFrame className={styles.portalWrapper}>
              <div className={styles.imageContainer}>
                {zones.map((zone) => (
                  <Image 
                    key={zone.id}
                    src={zone.image}
                    alt={zone.name}
                    fill
                    className={`${styles.zoneImage} ${activeZone.id === zone.id ? styles.visibleImage : ''}`}
                  />
                ))}
              </div>
            </PortalFrame>
            
            {/* Information Card overlay */}
            <div className={styles.infoCard}>
              <h3 className="text-heading-md">{activeZone.name}</h3>
              <hr className={styles.divider} />
              <ul className={styles.featureList}>
                {activeZone.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.footerAction}>
          <Button variant="primary">Schedule A Visit</Button>
        </div>
      </div>
    </section>
  );
};

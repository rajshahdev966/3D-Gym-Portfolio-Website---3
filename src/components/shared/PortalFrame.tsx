import React from 'react';
import styles from './PortalFrame.module.css';

interface PortalFrameProps {
  children: React.ReactNode;
  className?: string;
}

export const PortalFrame: React.FC<PortalFrameProps> = ({ children, className = '' }) => {
  return (
    <div className={`${styles.portalFrame} ${className}`}>
      <div className={styles.particlesContainer}>
        {/* Simple CSS-based particles can be added here or we can just use a background overlay */}
        <div className={styles.particleOverlay}></div>
      </div>
      <div className={styles.portalContent}>
        {children}
      </div>
    </div>
  );
};

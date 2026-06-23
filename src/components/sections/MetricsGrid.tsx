"use client";

import React, { useEffect, useState, useRef } from 'react';
import styles from './MetricsGrid.module.css';

interface MetricCardProps {
  endValue: number;
  suffix: string;
  label: string;
}

const CountUp: React.FC<{ endValue: number; suffix: string }> = ({ endValue, suffix }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const increment = endValue / (duration / 16); // 60fps

          const timer = setInterval(() => {
            start += increment;
            if (start >= endValue) {
              setCount(endValue);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [endValue, hasAnimated]);

  return (
    <div ref={ref} className={styles.numberWrapper}>
      <span className={styles.number}>{count}</span>
      <span className={styles.suffix}>{suffix}</span>
    </div>
  );
};

export const MetricsGrid: React.FC = () => {
  const metrics = [
    { endValue: 500, suffix: '+', label: 'Active Members' },
    { endValue: 15, suffix: '+', label: 'Certified Trainers' },
    { endValue: 10, suffix: '+', label: 'Years Experience' },
    { endValue: 98, suffix: '%', label: 'Member Retention' },
  ];

  return (
    <section className={styles.metricsSection}>
      <div className={`container ${styles.metricsContainer}`}>
        <div className={styles.grid}>
          {metrics.map((metric, index) => (
            <div key={index} className={styles.card}>
              <CountUp endValue={metric.endValue} suffix={metric.suffix} />
              <p className={styles.label}>{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

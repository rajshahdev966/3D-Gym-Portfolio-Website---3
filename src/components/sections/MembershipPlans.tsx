"use client";

import React, { useState, useRef, MouseEvent } from 'react';
import styles from './MembershipPlans.module.css';
import { Button } from '../shared/Button';

const plans = [
  {
    id: 'starter',
    name: 'STARTER',
    description: 'Perfect for beginners',
    price: '₹4999',
    period: '/Month',
    features: ['Gym Access', 'Locker Access', 'Fitness Assessment'],
    isPopular: false,
  },
  {
    id: 'pro',
    name: 'PRO',
    description: 'Most Popular',
    price: '₹9999',
    period: '/Month',
    features: ['Everything in Starter', 'Personal Guidance', 'Nutrition Support', 'Group Classes'],
    isPopular: true,
  },
  {
    id: 'elite',
    name: 'ELITE',
    description: 'Premium Experience',
    price: '₹14999',
    period: '/Month',
    features: ['Everything in Pro', 'Dedicated Coach', 'Priority Support', 'Advanced Programs'],
    isPopular: false,
  }
];

export const MembershipPlans: React.FC = () => {
  return (
    <section className={styles.membershipSection} id="memberships">
      <div className="container">
        <div className={styles.header}>
          <h2 className="text-display-lg">CHOOSE YOUR MEMBERSHIP</h2>
        </div>

        <div className={styles.plansGrid}>
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingCard: React.FC<{ plan: typeof plans[0] }> = ({ plan }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [magneticStyle, setMagneticStyle] = useState({});

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element.
    const y = e.clientY - rect.top;  // y position within the element.
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    setMagneticStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`,
      transition: 'none'
    });
  };

  const handleMouseLeave = () => {
    setMagneticStyle({
      transform: `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`,
      transition: 'transform 0.5s ease'
    });
  };

  return (
    <div 
      ref={cardRef}
      className={`${styles.card} ${plan.isPopular ? styles.popular : ''}`}
      style={magneticStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.cardHeader}>
        {plan.isPopular && <div className={styles.popularBadge}>MOST POPULAR</div>}
        <h3 className="text-heading-md">{plan.name}</h3>
        <p className={styles.description}>{plan.description}</p>
      </div>

      <div className={styles.priceContainer}>
        <span className={styles.price}>{plan.price}</span>
        <span className={styles.period}>{plan.period}</span>
      </div>

      <div className={styles.featuresList}>
        {plan.features.map((feature, idx) => (
          <div key={idx} className={styles.featureItem}>
            <span className={styles.checkIcon}>✓</span>
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <div className={styles.actionContainer}>
        <Button variant={plan.isPopular ? 'primary' : 'secondary'} className={styles.fullWidthBtn}>
          Join Now
        </Button>
      </div>
    </div>
  );
};

"use client";

import React, { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.css';
import { Button } from '../shared/Button';

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  const frameCount = 240;

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      // Format number to 3 digits e.g. 001, 045, 240
      const formattedNumber = i.toString().padStart(3, '0');
      img.src = `/hero_section_arena_frames/ezgif-frame-${formattedNumber}.jpg`;
      
      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          // All images loaded, initial draw
          if (canvasRef.current && loadedImages[0]) {
            drawFrame(loadedImages[0]);
          }
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const drawFrame = (img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions to match image ratio
    if (canvas.width !== img.width || canvas.height !== img.height) {
      canvas.width = img.width;
      canvas.height = img.height;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Draw image covering the canvas (can be adjusted for object-fit: cover behavior if needed)
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  };

  // Handle scroll to animate frames
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || images.length === 0) return;

      const html = document.documentElement;
      const scrollPos = html.scrollTop;
      const maxScroll = containerRef.current.scrollHeight - window.innerHeight;

      // Calculate scroll fraction (0 to 1)
      let scrollFraction = scrollPos / maxScroll;
      
      // Clamp between 0 and 1
      scrollFraction = Math.max(0, Math.min(1, scrollFraction));
      
      // Map to frame index
      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(scrollFraction * frameCount)
      );

      requestAnimationFrame(() => {
        if (images[frameIndex]) {
          drawFrame(images[frameIndex]);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [images]);

  return (
    <section className={styles.heroContainer} ref={containerRef} id="home">
      <div className={styles.stickyContent}>
        <div className={`container ${styles.grid}`}>
          
          <div className={styles.leftColumn}>
            <div className={styles.label}>WELCOME TO THE ARENA</div>
            <h1 className="text-display-xl">
              BUILD THE BODY<br />YOU DESERVE
            </h1>
            <p className="text-body-lg">
              Premium equipment.<br />
              Expert coaches.<br />
              A community that pushes you further.
            </p>
            
            <div className={styles.actions}>
              <div className={styles.primaryActionWrapper}>
                <Button variant="primary">Start Your Transformation</Button>
                <div className={styles.actionTooltip}>Transformation starts from this decision</div>
              </div>
              <Button variant="secondary">Watch Gym Tour</Button>
            </div>

            <div className={styles.trustRow}>
              <div className={styles.trustItem}>
                <span className={styles.trustNumber}>500+</span>
                <span className={styles.trustLabel}>Members</span>
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustNumber}>15+</span>
                <span className={styles.trustLabel}>Trainers</span>
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustNumber}>4.9</span>
                <span className={styles.trustLabel}>Rating</span>
              </div>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.canvasWrapper}>
              <canvas 
                ref={canvasRef} 
                className={styles.canvas}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

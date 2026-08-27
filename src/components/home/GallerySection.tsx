'use client';

import { useState, useEffect } from 'react';
import styles from './GallerySection.module.css';

const images = [
  'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=800',
];

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(Math.floor(images.length / 2));

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 3000); // Auto scroll every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Discover</span>
          <h2 className={styles.title}>
            Our <span className={styles.titleHighlight}>Gallery</span>
          </h2>
        </div>
      </div>
      
      <div className={styles.galleryContainer}>
        <div className={styles.galleryTrack}>
          {images.map((src, index) => {
            let offset = index - activeIndex;
            
            // Make the offset circular
            const halfLength = Math.floor(images.length / 2);
            if (offset > halfLength) {
              offset -= images.length;
            } else if (offset < -halfLength) {
              offset += images.length;
            }
            
            const absOffset = Math.abs(offset);
            
            // Math for the 3D perspective effect
            const rotateY = offset * -20; // Angle them towards the center
            const translateZ = absOffset * -100; // Push further back the further they are from center
            const translateX = offset * 80; // Spread them out horizontally
            
            return (
              <div 
                key={src} 
                className={`${styles.galleryItem} ${index === activeIndex ? styles.active : ''}`}
                style={{
                  transform: `translateX(${translateX}%) translateZ(${translateZ}px) rotateY(${rotateY}deg)`,
                  zIndex: images.length - absOffset,
                }}
                onClick={() => setActiveIndex(index)}
              >
                <img src={src} alt={`Gallery image ${index + 1}`} className={styles.image} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

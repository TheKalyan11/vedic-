import React from 'react';
import Link from 'next/link';
import { Venue } from '../../models/types';
import styles from './VenueCard.module.css';

interface VenueCardProps {
  venue: Venue;
}

export const VenueCard: React.FC<VenueCardProps> = ({ venue }) => {
  return (
    <div className={styles.card}>
      <Link href={`/venues/${venue.id}`} className={styles.linkOverlay} aria-label={`View details for ${venue.name}`} />
      
      <div className={styles.imageContainer}>
        <img src={venue.imageUrls[0]} alt={venue.name} className={styles.image} loading="lazy" />
        <div className={styles.badge}>{venue.type}</div>
      </div>
      
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{venue.name}</h3>
          <span className={styles.rating}>★ {venue.rating}</span>
        </div>
        
        <p className={styles.location}>
          <span aria-hidden="true">📍</span> {venue.location}
        </p>
        
        <div className={styles.details}>
          <div className={styles.capacity}>
            <span aria-hidden="true">👥</span> Up to {venue.capacity}
          </div>
          <div className={styles.priceBlock}>
            <span className={styles.priceLabel}>Starting from</span>
            <span className={styles.price}>₹{venue.pricePerDay.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

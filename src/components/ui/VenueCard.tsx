'use client';

import React from 'react';
import Link from 'next/link';
import { Venue } from '../../models/types';
import styles from './VenueCard.module.css';

interface VenueCardProps {
  venue: Venue;
}

export const VenueCard: React.FC<VenueCardProps> = ({ venue }) => {
  const getCategoryName = (v: Venue) => {
    if (v.name.includes('Banquet')) return 'Banquet Halls';
    if (v.name.includes('Marriage Garden') || v.name.includes('Lawns')) return 'Marriage Garden / Lawns';
    if (v.name.includes('Resort')) return 'Wedding Resorts';
    if (v.name.includes('Kalyana Mandapam')) return 'Kalyana Mandapams';
    if (v.name.includes('Destination')) return 'Destination Wedding Venues';
    if (v.name.includes('Farmhouse')) return 'Wedding Farmhouses';
    return `${v.type} Venues`;
  };

  return (
    <div className={styles.cardFrame}>
      <Link href={`/venues/${venue.id}`} className={styles.linkOverlay} aria-label={`View details for ${venue.name}`} />

      {/* Top Image Area */}
      <div className={styles.imageWrapper}>
        <img
          src={venue.imageUrls[0]}
          alt={venue.name}
          className={styles.image}
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1000&auto=format&fit=crop&q=80';
          }}
        />
        
        {/* Floating Top Badges (Left Tags Only) */}
        <div className={styles.badgeContainer}>
          <span className={styles.badgeOrange}>PRICE ON REQUEST</span>
          <span className={styles.badgeGreen}>VERIFIED</span>
        </div>
      </div>

      {/* Bottom Floating White Info Box */}
      <div className={styles.infoCard}>
        {/* Category & Star Rating at Right End */}
        <div className={styles.categoryRow}>
          <span className={styles.venueType}>{getCategoryName(venue)}</span>
          <span className={styles.ratingBadge}>★ {venue.rating}</span>
        </div>

        {/* Address / Location */}
        <p className={styles.addressText}>{venue.location}</p>

        {/* Venue Name */}
        <h3 className={styles.venueTitle}>{venue.name}</h3>

        {/* Venue Specs Row (Capacity, Mandap spaces, Catering) */}
        <div className={styles.specsRow}>
          <div className={styles.specItem}>
            {/* Guests Capacity Icon */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.specIcon}>
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <span>{venue.capacity} Guests</span>
          </div>

          <span className={styles.specDivider}>|</span>

          <div className={styles.specItem}>
            {/* Mandap / Lawns Icon */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.specIcon}>
              <path d="M12 2L2 7h20L12 2z"/>
              <path d="M5 10v10M12 10v10M19 10v10"/>
              <path d="M2 20h20"/>
            </svg>
            <span>Indoor & Lawn</span>
          </div>

          <span className={styles.specDivider}>|</span>

          <div className={styles.specItem}>
            {/* Sattvic Cuisine Icon */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.specIcon}>
              <path d="M12 4a8 8 0 0 0-8 8h16a8 8 0 0 0-8-8zM2 15h20M12 15v5M8 20h8"/>
              <circle cx="12" cy="2.5" r="1" fill="currentColor"/>
            </svg>
            <span>Pure Veg</span>
          </div>
        </div>

        {/* Footer / Managed by */}
        <div className={styles.footerRow}>
          MANAGED BY <span className={styles.listedBrand}>VEDIC VENUES</span>
        </div>
      </div>
    </div>
  );
};

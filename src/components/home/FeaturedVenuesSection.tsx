'use client';

import React from 'react';
import Link from 'next/link';
import { Venue } from '../../models/types';
import { VenueCard } from '../ui/VenueCard';
import { useLanguage } from '../../context/LanguageContext';
import styles from '../../app/page.module.css';

interface FeaturedVenuesSectionProps {
  venues: Venue[];
}

export const FeaturedVenuesSection: React.FC<FeaturedVenuesSectionProps> = ({ venues }) => {
  const { t } = useLanguage();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionSub}>{t('featuredVenues.badge')}</span>
            <h2 className={styles.sectionTitle}>{t('featuredVenues.title')}</h2>
          </div>
          <Link href="/venues" className={styles.viewAll}>
            {t('common.exploreAllVenues')} <span aria-hidden="true">→</span>
          </Link>
        </div>
        
        <div className={styles.venueGrid}>
          {venues.map((venue) => (
            <VenueCard key={venue.id} venue={venue} />
          ))}
        </div>
      </div>
    </section>
  );
};

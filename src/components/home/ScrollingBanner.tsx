'use client';

import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './ScrollingBanner.module.css';

const BANNER_ICONS = [
  // 0: Venues
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7h20L12 2z" />
      <path d="M4 10v10" />
      <path d="M9 10v10" />
      <path d="M15 10v10" />
      <path d="M20 10v10" />
      <path d="M2 20h20" />
    </svg>
  ),
  // 1: Transparent pricing
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  // 2: Sacred Mandaps
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2c.5 2.5 3 4.5 3 7.5a6 6 0 1 1-12 0c0-3 2.5-5 3-7.5 1.5 2 2.5 3.5 3 4.5.5-1 1.5-2.5 3-4.5z" />
      <path d="M12 12a3 3 0 0 1 3 3c0 1.5-1.5 3-3 3s-3-1.5-3-3a3 3 0 0 1 3-3z" />
    </svg>
  ),
  // 3: Sattvic Catering
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4a8 8 0 0 0-8 8h16a8 8 0 0 0-8-8zM2 15h20M12 15v5M8 20h8" />
      <circle cx="12" cy="2.5" r="1" fill="currentColor" />
    </svg>
  ),
  // 4: Heritage Palaces
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6M9 9h.01M15 9h.01" />
    </svg>
  ),
  // 5: Dedicated Concierge
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  // 6: Direct Negotiations
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
];

const SeparatorStar = () => (
  <svg className={styles.starSeparator} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
  </svg>
);

export const ScrollingBanner = () => {
  const { t } = useLanguage();

  const items = [
    { id: '1', text: t('highlights.0'), icon: BANNER_ICONS[0] },
    { id: '2', text: t('highlights.1'), icon: BANNER_ICONS[1] },
    { id: '3', text: t('highlights.2'), icon: BANNER_ICONS[2] },
    { id: '4', text: t('highlights.3'), icon: BANNER_ICONS[3] },
    { id: '5', text: t('highlights.4'), icon: BANNER_ICONS[4] },
    { id: '6', text: t('highlights.5'), icon: BANNER_ICONS[5] },
    { id: '7', text: t('highlights.6'), icon: BANNER_ICONS[6] },
  ];

  return (
    <div className={styles.bannerContainer} aria-label="Key Vedic Venues Highlights">
      <div className={styles.marqueeTrack}>
        {/* First group of items */}
        <div className={styles.marqueeGroup}>
          {items.map((item) => (
            <React.Fragment key={`group1-${item.id}`}>
              <div className={styles.bannerItem}>
                <span className={styles.itemIcon}>{item.icon}</span>
                <span className={styles.itemText}>{item.text}</span>
              </div>
              <SeparatorStar />
            </React.Fragment>
          ))}
        </div>

        {/* Second group for smooth continuous infinite marquee */}
        <div className={styles.marqueeGroup} aria-hidden="true">
          {items.map((item) => (
            <React.Fragment key={`group2-${item.id}`}>
              <div className={styles.bannerItem}>
                <span className={styles.itemIcon}>{item.icon}</span>
                <span className={styles.itemText}>{item.text}</span>
              </div>
              <SeparatorStar />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

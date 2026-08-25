import React from 'react';
import styles from './ScrollingBanner.module.css';

const BANNER_ITEMS = [
  {
    id: 'venues',
    text: '1,000+ Verified Sacred Venues & Mandapams',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7h20L12 2z" />
        <path d="M4 10v10" />
        <path d="M9 10v10" />
        <path d="M15 10v10" />
        <path d="M20 10v10" />
        <path d="M2 20h20" />
      </svg>
    ),
  },
  {
    id: 'rituals',
    text: 'Authentic Vedic Wedding Ceremonies & Rituals',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c.5 2.5 3 4.5 3 7.5a6 6 0 1 1-12 0c0-3 2.5-5 3-7.5 1.5 2 2.5 3.5 3 4.5.5-1 1.5-2.5 3-4.5z" />
        <path d="M12 12a3 3 0 0 1 3 3c0 1.5-1.5 3-3 3s-3-1.5-3-3a3 3 0 0 1 3-3z" />
      </svg>
    ),
  },
  {
    id: 'palace',
    text: 'Destination Temple & Heritage Palace Bookings',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6M9 9h.01M15 9h.01" />
      </svg>
    ),
  },
  {
    id: 'catering',
    text: 'Pure Sattvic & Traditional Catering Partners',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 4a8 8 0 0 0-8 8h16a8 8 0 0 0-8-8zM2 15h20M12 15v5M8 20h8" />
        <circle cx="12" cy="2.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'muhurat',
    text: 'Auspicious Shubh Muhurat & Astro Consultation',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
    ),
  },
  {
    id: 'genie',
    text: 'Dedicated Vedic Genie Concierge Support',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 18l1-11 5 4 5-4 1 11H5z" />
        <circle cx="6" cy="7" r="0.75" fill="currentColor" />
        <circle cx="12" cy="11" r="0.75" fill="currentColor" />
        <circle cx="18" cy="7" r="0.75" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'trust',
    text: '100% Transparent Pricing & Zero Booking Fees',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
];

const SeparatorStar = () => (
  <svg className={styles.starSeparator} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
  </svg>
);

export const ScrollingBanner = () => {
  return (
    <div className={styles.bannerContainer} aria-label="Key Vedic Venues Highlights">
      <div className={styles.marqueeTrack}>
        {/* First group of items */}
        <div className={styles.marqueeGroup}>
          {BANNER_ITEMS.map((item) => (
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
          {BANNER_ITEMS.map((item) => (
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

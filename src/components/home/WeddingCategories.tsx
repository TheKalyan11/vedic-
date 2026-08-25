'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';
import styles from './WeddingCategories.module.css';

interface WeddingCategory {
  key: string;
  defaultTitle: string;
  count: string;
  href: string;
  image: string;
  icon: React.ReactNode;
}

const DEFAULT_FALLBACK = 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&auto=format&fit=crop&q=80';

const CATEGORIES_DATA: WeddingCategory[] = [
  {
    key: 'venues',
    defaultTitle: 'Venues',
    count: '2,400+ Spaces',
    href: '/venues',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&auto=format&fit=crop&q=80',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M5 21V10l7-6 7 6v11M9 21v-6a3 3 0 0 1 6 0v6M12 4v2" />
      </svg>
    ),
  },
  {
    key: 'photographers',
    defaultTitle: 'Photographers',
    count: '1,850+ Studios',
    href: '/vendors?category=photographers',
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&auto=format&fit=crop&q=80',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
        <circle cx="12" cy="13" r="4"/>
        <path d="M12 11a2 2 0 1 0 2 2"/>
      </svg>
    ),
  },
  {
    key: 'makeup',
    defaultTitle: 'Bridal Makeup',
    count: '980+ Artists',
    href: '/vendors?category=makeup',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&auto=format&fit=crop&q=80',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
  },
  {
    key: 'decor',
    defaultTitle: 'Planning & Decor',
    count: '760+ Planners',
    href: '/vendors?category=decor',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3c-1.5 3-4.5 4.5-4.5 7.5a4.5 4.5 0 0 0 9 0c0-3-3-4.5-4.5-7.5z"/>
        <path d="M12 18c-3.5 0-6-2.5-6-5 2.5 0 4.5-1.5 6 0 1.5-1.5 3.5 0 6 0 0 2.5-2.5 5-6 5z"/>
        <path d="M12 18v4M9 22h6"/>
      </svg>
    ),
  },
  {
    key: 'wear',
    defaultTitle: 'Bridal & Groom Wear',
    count: '1,150+ Designers',
    href: '/vendors?category=wear',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&auto=format&fit=crop&q=80',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>
        <path d="M10 2v4a2 2 0 0 0 4 0V2"/>
      </svg>
    ),
  },
  {
    key: 'mehndi',
    defaultTitle: 'Mehndi Artists',
    count: '640+ Artists',
    href: '/vendors?category=mehndi',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=80',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.5 2 2 6.5 2 12c0 4.5 3 8.3 7 9.5.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.3-3.4-1.3-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3"/>
        <path d="M12 6c3.3 0 6 2.7 6 6 0 2.2-1.2 4.1-3 5.1"/>
        <circle cx="12" cy="12" r="2"/>
      </svg>
    ),
  },
  {
    key: 'catering',
    defaultTitle: 'Pure Veg Catering',
    count: '820+ Caterers',
    href: '/vendors?category=catering',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800&auto=format&fit=crop&q=80',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3a1 1 0 0 1 1 1v1a9 9 0 0 1 9 9v1H2v-1a9 9 0 0 1 9-9V4a1 1 0 0 1 1-1z"/>
        <path d="M2 19h20M4 22h16"/>
        <circle cx="12" cy="11" r="2"/>
      </svg>
    ),
  },
  {
    key: 'music',
    defaultTitle: 'Music & Dance',
    count: '540+ Troupes',
    href: '/vendors?category=music',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop&q=80',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13M9 9l12-2"/>
        <circle cx="6" cy="18" r="3"/>
        <circle cx="18" cy="16" r="3"/>
      </svg>
    ),
  },
  {
    key: 'invites',
    defaultTitle: 'Invites & Gifts',
    count: '430+ Designers',
    href: '/invites',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&auto=format&fit=crop&q=80',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2"/>
        <path d="M3 7l9 6 9-6M12 13v4M10 17h4"/>
      </svg>
    ),
  },
  {
    key: 'pandit',
    defaultTitle: 'Pandit & Astro Services',
    count: '390+ Acharyas',
    href: '/vendors?category=pandit',
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&auto=format&fit=crop&q=80',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c1.5 2.5 3 4.5 3 7a3 3 0 0 1-6 0c0-2.5 1.5-4.5 3-7z"/>
        <path d="M5 13a7 7 0 0 0 14 0c0-2-1-3.5-2.5-4.5M6 21h12M8 17v4M16 17v4"/>
      </svg>
    ),
  },
];

export const WeddingCategories: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className={styles.categoriesSection} aria-label="Wedding Categories">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div>
            <span className={styles.sectionBadge}>{t('weddingCategories.badge')}</span>
            <h2 className={styles.title}>{t('weddingCategories.title')}</h2>
            <p className={styles.subtitle}>{t('weddingCategories.subtitle')}</p>
          </div>

          <Link href="/vendors" className={styles.viewAllLink}>
            {t('common.exploreAllCategories')} <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* 10-Card Category Grid (2 Rows of 5) */}
        <div className={styles.grid}>
          {CATEGORIES_DATA.map((cat) => (
            <Link key={cat.key} href={cat.href} className={styles.categoryCard}>
              <img
                src={cat.image}
                alt={t(`weddingCategories.items.${cat.key}`)}
                className={styles.bgImage}
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = DEFAULT_FALLBACK;
                }}
              />
              <div className={styles.overlay} />

              {/* Floating Top Icon Badge */}
              <div className={styles.iconBadge} aria-hidden="true">
                {cat.icon}
              </div>

              {/* Bottom Info Content */}
              <div className={styles.content}>
                <h3 className={styles.categoryTitle}>{t(`weddingCategories.items.${cat.key}`)}</h3>
                <p className={styles.countText}>{cat.count}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

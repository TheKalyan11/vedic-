'use client';

import React from 'react';
import Link from 'next/link';
import styles from './WeddingCategories.module.css';

interface WeddingCategory {
  title: string;
  count: string;
  href: string;
  image: string;
  icon: React.ReactNode;
}

const DEFAULT_FALLBACK = 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&auto=format&fit=crop&q=80';

const CATEGORIES_DATA: WeddingCategory[] = [
  {
    title: 'Venues',
    count: '2,400+ Spaces',
    href: '/venues',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&auto=format&fit=crop&q=80',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7h20L12 2z"/>
        <path d="M5 10v10M12 10v10M19 10v10"/>
        <path d="M2 20h20"/>
      </svg>
    ),
  },
  {
    title: 'Photographers',
    count: '1,850+ Studios',
    href: '/vendors?category=photographers',
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&auto=format&fit=crop&q=80',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
        <circle cx="12" cy="13" r="4"/>
      </svg>
    ),
  },
  {
    title: 'Bridal Makeup',
    count: '980+ Artists',
    href: '/vendors?category=makeup',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&auto=format&fit=crop&q=80',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
  },
  {
    title: 'Planning & Decor',
    count: '760+ Planners',
    href: '/vendors?category=decor',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    title: 'Bridal & Groom Wear',
    count: '1,150+ Designers',
    href: '/vendors?category=wear',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&auto=format&fit=crop&q=80',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>
      </svg>
    ),
  },
  {
    title: 'Mehndi Artists',
    count: '640+ Artists',
    href: '/vendors?category=mehndi',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=80',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/>
        <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"/>
        <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/>
        <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>
      </svg>
    ),
  },
  {
    title: 'Pure Veg Catering',
    count: '820+ Caterers',
    href: '/vendors?category=catering',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800&auto=format&fit=crop&q=80',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 4a8 8 0 0 0-8 8h16a8 8 0 0 0-8-8zM2 15h20M12 15v5M8 20h8"/>
        <circle cx="12" cy="2.5" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: 'Music & Dance',
    count: '540+ Troupes',
    href: '/vendors?category=music',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop&q=80',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13"/>
        <circle cx="6" cy="18" r="3"/>
        <circle cx="18" cy="16" r="3"/>
      </svg>
    ),
  },
  {
    title: 'Invites & Gifts',
    count: '430+ Designers',
    href: '/invites',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&auto=format&fit=crop&q=80',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"/>
        <path d="M4 6v12c0 1.1.9 2 2 2h14v-4"/>
        <path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z"/>
      </svg>
    ),
  },
  {
    title: 'Pandit & Astro Services',
    count: '390+ Acharyas',
    href: '/vendors?category=pandit',
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&auto=format&fit=crop&q=80',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="2" x2="12" y2="6"/>
        <line x1="12" y1="18" x2="12" y2="22"/>
        <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/>
        <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/>
        <line x1="2" y1="12" x2="6" y2="12"/>
        <line x1="18" y1="12" x2="22" y2="12"/>
      </svg>
    ),
  },
];

export const WeddingCategories: React.FC = () => {
  return (
    <section className={styles.categoriesSection} aria-label="Wedding Categories">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div>
            <span className={styles.sectionBadge}>EVERYTHING YOU NEED</span>
            <h2 className={styles.title}>Wedding Categories</h2>
            <p className={styles.subtitle}>
              Explore all essential celebration services, venues, and handcrafted experiences for your special day
            </p>
          </div>

          <Link href="/vendors" className={styles.viewAllLink}>
            Explore all categories <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* 10-Card Category Grid (2 Rows of 5) */}
        <div className={styles.grid}>
          {CATEGORIES_DATA.map((cat) => (
            <Link key={cat.title} href={cat.href} className={styles.categoryCard}>
              <img
                src={cat.image}
                alt={cat.title}
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
                <h3 className={styles.categoryTitle}>{cat.title}</h3>
                <p className={styles.countText}>{cat.count}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

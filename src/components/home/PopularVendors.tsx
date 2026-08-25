'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';
import styles from './PopularVendors.module.css';

interface VendorItem {
  id: string;
  name: string;
  category: string;
  categoryKey: string;
  location: string;
  rating: number;
  reviews: number;
  startingPrice: string;
  image: string;
}

const DEFAULT_FALLBACK = 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&auto=format&fit=crop&q=80';

const CATEGORY_KEYS = [
  { key: 'all', filter: 'All' },
  { key: 'photographers', filter: 'Photography' },
  { key: 'makeup', filter: 'Bridal Artistry' },
  { key: 'decor', filter: 'Decor' },
  { key: 'mehndi', filter: 'Henna' },
  { key: 'catering', filter: 'Catering' },
  { key: 'music', filter: 'Sangeet' },
] as const;

const VENDORS_DATA: VendorItem[] = [
  {
    id: 'v-1',
    name: 'Omkara Wedding Films',
    category: 'Candid & Cinematic Photography',
    categoryKey: 'photographers',
    location: 'Delhi NCR · Pan India',
    rating: 4.9,
    reviews: 142,
    startingPrice: '₹75,000',
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'v-2',
    name: 'Sitaara Bridal Studio',
    category: 'HD Airbrush & Vedic Bridal Artistry',
    categoryKey: 'makeup',
    location: 'Mumbai & Pune',
    rating: 5.0,
    reviews: 98,
    startingPrice: '₹25,000',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'v-3',
    name: 'Mandapam Royal Decor',
    category: 'Grand Floral & Palace Decorators',
    categoryKey: 'decor',
    location: 'Jaipur & Udaipur',
    rating: 4.9,
    reviews: 115,
    startingPrice: '₹1,50,000',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'v-4',
    name: 'Aishwarya Mehendi Art',
    category: 'Organic Bridal Henna & Figures',
    categoryKey: 'mehndi',
    location: 'Bangalore & Chennai',
    rating: 4.8,
    reviews: 86,
    startingPrice: '₹12,000',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'v-5',
    name: 'Annapurna Sattvic Feasts',
    category: 'Pure Vegetarian Royal Catering',
    categoryKey: 'catering',
    location: 'Delhi NCR · Varanasi',
    rating: 4.9,
    reviews: 130,
    startingPrice: '₹1,200 / Plate',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'v-6',
    name: 'Sangeet Symphony Band',
    category: 'Live Shehnai & Sangeet DJs',
    categoryKey: 'music',
    location: 'Mumbai & Hyderabad',
    rating: 4.9,
    reviews: 74,
    startingPrice: '₹50,000',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'v-7',
    name: 'Vaidarbhi Silk Couture',
    category: 'Royal Kanjeevarams & Lehengas',
    categoryKey: 'wear',
    location: 'Chennai & Hyderabad',
    rating: 5.0,
    reviews: 110,
    startingPrice: 'Price on Request',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'v-8',
    name: 'Rajputana Regal Wear',
    category: 'Bespoke Zari Sherwanis & Safas',
    categoryKey: 'wear',
    location: 'Jaipur & Delhi NCR',
    rating: 4.8,
    reviews: 65,
    startingPrice: 'Price on Request',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80',
  },
];

export const PopularVendors: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState<string>('all');
  const { t } = useLanguage();

  const filteredVendors = selectedKey === 'all'
    ? VENDORS_DATA
    : VENDORS_DATA.filter((v) => {
        const item = CATEGORY_KEYS.find((c) => c.key === selectedKey);
        return item ? v.category.includes(item.filter) : true;
      });

  return (
    <section className={styles.vendorsSection} aria-label="Popular Wedding Vendors">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div>
            <span className={styles.sectionBadge}>{t('popularVendors.badge')}</span>
            <h2 className={styles.title}>{t('popularVendors.title')}</h2>
            <p className={styles.subtitle}>{t('popularVendors.subtitle')}</p>
          </div>

          <Link href="/vendors" className={styles.viewAllLink}>
            {t('common.exploreAllVendors')} <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Category Tabs */}
        <div className={styles.tabsWrapper}>
          {CATEGORY_KEYS.map((cat) => (
            <button
              key={cat.key}
              type="button"
              className={`${styles.tabBtn} ${selectedKey === cat.key ? styles.activeTab : ''}`}
              onClick={() => setSelectedKey(cat.key)}
            >
              {t(`popularVendors.tabs.${cat.key}`)}
            </button>
          ))}
        </div>

        {/* 4-Column Grid with Reference Card Design */}
        <div className={styles.grid}>
          {filteredVendors.map((vendor) => (
            <div key={vendor.id} className={styles.vendorCard}>
              {/* Inset Photo Area with Rating and Verified Badges */}
              <div className={styles.imageWrapper}>
                <img
                  src={vendor.image}
                  alt={vendor.name}
                  className={styles.image}
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = DEFAULT_FALLBACK;
                  }}
                />

                {/* Rating Badge on Top Left */}
                <div className={styles.ratingBadgeTop}>
                  <svg viewBox="0 0 20 20" fill="currentColor" className={styles.starIconSvg} aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>{vendor.rating}</span>
                  <span className={styles.reviewsCount}>({vendor.reviews})</span>
                </div>

                {/* Verified Pro Badge on Top Right */}
                <div className={styles.verifiedProBadge}>
                  <svg viewBox="0 0 24 24" fill="currentColor" className={styles.checkShieldIcon}>
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                  </svg>
                  {t('common.verifiedPro')}
                </div>
              </div>

              {/* Card Body */}
              <div className={styles.cardBody}>
                <h3 className={styles.vendorTitle}>{vendor.name}</h3>
                <p className={styles.vendorSubtitle}>{vendor.category}</p>

                {/* Meta Row with Price Tag & Location */}
                <div className={styles.metaRow}>
                  <div className={styles.metaItem}>
                    {/* Price Tag Icon */}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.metaIcon}>
                      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                      <line x1="7" y1="7" x2="7.01" y2="7" />
                    </svg>
                    <span>
                      {vendor.startingPrice.startsWith('₹') ? `${t('common.from')} ` : ''}
                      <span className={styles.metaAmount}>
                        {vendor.startingPrice === 'Price on Request' ? t('common.priceOnRequest') : vendor.startingPrice}
                      </span>
                    </span>
                  </div>

                  <div className={styles.metaItem}>
                    {/* Location Pin Icon */}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.metaIcon}>
                      <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className={styles.metaAmount}>{vendor.location.split('·')[0].trim()}</span>
                  </div>
                </div>

                {/* Bottom Action Row (Full Width Dark Pill CTA) */}
                <div className={styles.actionRow}>
                  <Link href={`/vendors/${vendor.id}`} className={styles.primaryCta}>
                    {t('common.inquireVendor')}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

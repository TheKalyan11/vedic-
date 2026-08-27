'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';
import { Building2, Camera, Brush, Tent, Shirt, Flower2, Utensils, Music, Mail, Flame } from 'lucide-react';
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
    icon: <Building2 size={28} strokeWidth={1.5} />,
  },
  {
    key: 'photographers',
    defaultTitle: 'Photographers',
    count: '1,850+ Studios',
    href: '/vendors?category=photographers',
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&auto=format&fit=crop&q=80',
    icon: <Camera size={28} strokeWidth={1.5} />,
  },
  {
    key: 'makeup',
    defaultTitle: 'Bridal Makeup',
    count: '980+ Artists',
    href: '/vendors?category=makeup',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&auto=format&fit=crop&q=80',
    icon: <Brush size={28} strokeWidth={1.5} />,
  },
  {
    key: 'decor',
    defaultTitle: 'Planning & Decor',
    count: '760+ Planners',
    href: '/vendors?category=decor',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80',
    icon: <Tent size={28} strokeWidth={1.5} />,
  },
  {
    key: 'wear',
    defaultTitle: 'Bridal & Groom Wear',
    count: '1,150+ Designers',
    href: '/vendors?category=wear',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&auto=format&fit=crop&q=80',
    icon: <Shirt size={28} strokeWidth={1.5} />,
  },
  {
    key: 'mehndi',
    defaultTitle: 'Mehndi Artists',
    count: '640+ Artists',
    href: '/vendors?category=mehndi',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=80',
    icon: <Flower2 size={28} strokeWidth={1.5} />,
  },
  {
    key: 'catering',
    defaultTitle: 'Pure Veg Catering',
    count: '820+ Caterers',
    href: '/vendors?category=catering',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800&auto=format&fit=crop&q=80',
    icon: <Utensils size={28} strokeWidth={1.5} />,
  },
  {
    key: 'music',
    defaultTitle: 'Music & Dance',
    count: '540+ Troupes',
    href: '/vendors?category=music',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop&q=80',
    icon: <Music size={28} strokeWidth={1.5} />,
  },
  {
    key: 'invites',
    defaultTitle: 'Invites & Gifts',
    count: '430+ Designers',
    href: '/invites',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&auto=format&fit=crop&q=80',
    icon: <Mail size={28} strokeWidth={1.5} />,
  },
  {
    key: 'pandit',
    defaultTitle: 'Pandit & Astro Services',
    count: '390+ Acharyas',
    href: '/vendors?category=pandit',
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&auto=format&fit=crop&q=80',
    icon: <Flame size={28} strokeWidth={1.5} />,
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

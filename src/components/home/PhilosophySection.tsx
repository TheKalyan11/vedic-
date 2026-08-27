'use client';

import React from 'react';
import Link from 'next/link';
import { Crown, Landmark, BadgeCheck, ArrowRight, Star } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './PhilosophySection.module.css';

const MAIN_IMAGE = 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&auto=format&fit=crop&q=80';
const SECONDARY_IMAGE = 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&auto=format&fit=crop&q=80';
const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&auto=format&fit=crop&q=80';

export const PhilosophySection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className={styles.philosophySection} aria-label="Our Philosophy">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Narrative Column */}
          <div className={styles.contentCol}>
            <span className={styles.badge}>{t('philosophy.badge')}</span>
            <h2 className={styles.title}>
              {t('philosophy.title')}{' '}
              <span className={styles.titleHighlight}>{t('philosophy.titleHighlight')}</span>
            </h2>
            <p className={styles.description}>
              {t('philosophy.description')}
            </p>

            {/* 3 Core Value Pillars */}
            <div className={styles.pillarsList}>
              {/* Pillar 1 */}
              <div className={styles.pillarItem}>
                <div className={styles.iconBox} aria-hidden="true">
                  <Crown size={22} strokeWidth={1.75} />
                </div>
                <div className={styles.pillarText}>
                  <h3 className={styles.pillarTitle}>{t('philosophy.pillar1Title')}</h3>
                  <p className={styles.pillarDesc}>{t('philosophy.pillar1Desc')}</p>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className={styles.pillarItem}>
                <div className={styles.iconBox} aria-hidden="true">
                  <Landmark size={22} strokeWidth={1.75} />
                </div>
                <div className={styles.pillarText}>
                  <h3 className={styles.pillarTitle}>{t('philosophy.pillar2Title')}</h3>
                  <p className={styles.pillarDesc}>{t('philosophy.pillar2Desc')}</p>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className={styles.pillarItem}>
                <div className={styles.iconBox} aria-hidden="true">
                  <BadgeCheck size={22} strokeWidth={1.75} />
                </div>
                <div className={styles.pillarText}>
                  <h3 className={styles.pillarTitle}>{t('philosophy.pillar3Title')}</h3>
                  <p className={styles.pillarDesc}>{t('philosophy.pillar3Desc')}</p>
                </div>
              </div>
            </div>

            {/* Direct CTA */}
            <Link href="/venues" className={styles.ctaBtn}>
              {t('philosophy.cta')} <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>

          {/* Right Visual Stack with Main & Inset Images */}
          <div className={styles.mediaCol}>
            {/* Main Palace Photography */}
            <div className={styles.mainImageWrapper}>
              <img
                src={MAIN_IMAGE}
                alt="Royal heritage celebration palace"
                className={styles.mainImage}
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = FALLBACK_IMAGE;
                }}
              />
              <div className={styles.imageOverlay} />
            </div>

            {/* Overlapping Inset Photography */}
            <div className={styles.secondaryImageWrapper}>
              <img
                src={SECONDARY_IMAGE}
                alt="Traditional temple courtyard"
                className={styles.secondaryImage}
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = FALLBACK_IMAGE;
                }}
              />
            </div>

            {/* Floating Glass Trust Badge */}
            <div className={styles.trustBadge}>
              <div className={styles.trustBadgeIcon} aria-hidden="true">
                <Star size={20} fill="#D35400" strokeWidth={1.5} />
              </div>
              <div className={styles.trustBadgeText}>
                <span className={styles.trustBadgeScore}>{t('philosophy.trustScore')}</span>
                <span className={styles.trustBadgeLabel}>{t('philosophy.trustLabel')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

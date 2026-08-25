'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';
import styles from './PhilosophySection.module.css';

const MAIN_IMAGE = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&auto=format&fit=crop&q=80';
const SECONDARY_IMAGE = 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&auto=format&fit=crop&q=80';
const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&auto=format&fit=crop&q=80';

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
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className={styles.pillarText}>
                  <h3 className={styles.pillarTitle}>{t('philosophy.pillar1Title')}</h3>
                  <p className={styles.pillarDesc}>{t('philosophy.pillar1Desc')}</p>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className={styles.pillarItem}>
                <div className={styles.iconBox} aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21h18M5 21V10l7-6 7 6v11M9 21v-6a3 3 0 0 1 6 0v6M12 4v2"/>
                  </svg>
                </div>
                <div className={styles.pillarText}>
                  <h3 className={styles.pillarTitle}>{t('philosophy.pillar2Title')}</h3>
                  <p className={styles.pillarDesc}>{t('philosophy.pillar2Desc')}</p>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className={styles.pillarItem}>
                <div className={styles.iconBox} aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <path d="M9 12l2 2 4-4"/>
                  </svg>
                </div>
                <div className={styles.pillarText}>
                  <h3 className={styles.pillarTitle}>{t('philosophy.pillar3Title')}</h3>
                  <p className={styles.pillarDesc}>{t('philosophy.pillar3Desc')}</p>
                </div>
              </div>
            </div>

            {/* Direct CTA */}
            <Link href="/venues" className={styles.ctaBtn}>
              {t('philosophy.cta')} <span aria-hidden="true">→</span>
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
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
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

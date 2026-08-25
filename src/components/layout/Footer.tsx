'use client';

import React from 'react';
import Link from 'next/link';
import { APP_CONFIG } from '../../config/constants';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Footer.module.css';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoVedic}>Vedic</span>
            <span className={styles.logoVenues}>Venues</span>
          </div>
          <p className={styles.description}>
            {t('footer.description')}
          </p>
        </div>
        
        <div className={styles.links}>
          <h3>{t('footer.contact')}</h3>
          <a href={`mailto:${APP_CONFIG.contact.email}`}>{APP_CONFIG.contact.email}</a>
          <a href={`tel:${APP_CONFIG.contact.phone.replace(/[^0-9+]/g, '')}`}>{APP_CONFIG.contact.phone}</a>
          <p className={styles.address}>{APP_CONFIG.contact.address}</p>
        </div>
        
        <div className={styles.links}>
          <h3>{t('footer.quickLinks')}</h3>
          <Link href="/venues">{t('common.exploreAllVenues')}</Link>
          <Link href="/about">{t('philosophy.badge')}</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} {t('footer.rights')}</p>
      </div>
    </footer>
  );
};

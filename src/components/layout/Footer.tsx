import React from 'react';
import Link from 'next/link';
import { APP_CONFIG } from '../../config/constants';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoVedic}>Vedic</span>
            <span className={styles.logoVenues}>Venues</span>
          </div>
          <p className={styles.description}>
            Elevating your spiritual ceremonies and celebrations with premium, handpicked venues that blend tradition with modern elegance.
          </p>
        </div>
        
        <div className={styles.links}>
          <h3>Contact Us</h3>
          <a href={`mailto:${APP_CONFIG.contact.email}`}>{APP_CONFIG.contact.email}</a>
          <a href={`tel:${APP_CONFIG.contact.phone.replace(/[^0-9+]/g, '')}`}>{APP_CONFIG.contact.phone}</a>
          <p className={styles.address}>{APP_CONFIG.contact.address}</p>
        </div>
        
        <div className={styles.links}>
          <h3>Quick Links</h3>
          <Link href="/venues">Explore Venues</Link>
          <Link href="/about">Our Story</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Vedic Venues. All rights reserved.</p>
      </div>
    </footer>
  );
};

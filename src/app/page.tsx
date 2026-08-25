import { venueService } from '../services/mockApi';
import { VenueCard } from '../components/ui/VenueCard';
import { Button } from '../components/ui/Button';
import { Hero } from '../components/home/Hero';
import { ScrollingBanner } from '../components/home/ScrollingBanner';
import { VenuesByCity } from '../components/home/VenuesByCity';
import { PopularVendors } from '../components/home/PopularVendors';
import Link from 'next/link';
import styles from './page.module.css';

export default async function Home() {
  const venues = await venueService.getVenues();
  const featuredVenues = venues.slice(0, 6);

  return (
    <div className={styles.page}>
      {/* Premium Hero Section */}
      <Hero />

      {/* Infinite Scrolling Highlights Banner */}
      <ScrollingBanner />

      {/* Featured Collection */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div>
              <span className={styles.sectionSub}>Exclusive Collection</span>
              <h2 className={styles.sectionTitle}>Featured Popular Venues</h2>
            </div>
            <Link href="/venues" className={styles.viewAll}>
              Explore all venues <span aria-hidden="true">→</span>
            </Link>
          </div>
          
          <div className={styles.venueGrid}>
            {featuredVenues.map((venue) => (
              <VenueCard key={venue.id} venue={venue} />
            ))}
          </div>
        </div>
      </section>

      {/* Venues by City Section */}
      <VenuesByCity />

      {/* Popular Vendors Section */}
      <PopularVendors />

      {/* Philosophy / Value Proposition */}
      <section className={`${styles.section} ${styles.philosophySection}`}>
        <div className={styles.container}>
          <div className={styles.philosophyGrid}>
            <div className={styles.philosophyContent}>
              <span className={styles.sectionSub}>Our Philosophy</span>
              <h2 className={styles.sectionTitle}>Where Tradition Meets Elegance</h2>
              <p className={styles.philosophyText}>
                We believe that the space where you celebrate your most sacred moments should be as profound as the moments themselves. Our meticulously curated portfolio of properties ensures that every venue meets rigorous standards of aesthetic beauty, spiritual purity, and modern comfort.
              </p>
              
              <ul className={styles.featuresList}>
                <li>
                  <span className={styles.featureIcon}>✦</span>
                  <div>
                    <strong>Architectural Grandeur</strong>
                    <span>Handpicked properties featuring authentic traditional designs.</span>
                  </div>
                </li>
                <li>
                  <span className={styles.featureIcon}>✦</span>
                  <div>
                    <strong>Uncompromising Quality</strong>
                    <span>Modern amenities seamlessly integrated for ultimate comfort.</span>
                  </div>
                </li>
                <li>
                  <span className={styles.featureIcon}>✦</span>
                  <div>
                    <strong>Spiritual Integrity</strong>
                    <span>Environments conducive to authentic ceremonies and rituals.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className={styles.philosophyImageWrapper}>
              <div className={styles.philosophyImageDecoration}></div>
              <img 
                src="https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=1000" 
                alt="Traditional architecture" 
                className={styles.philosophyImage}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

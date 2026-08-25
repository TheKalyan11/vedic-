import { venueService } from '../services/mockApi';
import { VenueCard } from '../components/ui/VenueCard';
import { Button } from '../components/ui/Button';
import Link from 'next/link';
import styles from './page.module.css';

export default async function Home() {
  const venues = await venueService.getVenues();
  const featuredVenues = venues.slice(0, 3);

  return (
    <div className={styles.page}>
      {/* Premium Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>Welcome to Vedic Venues</span>
          <h1 className={styles.title}>Sacred Spaces for <br/> <span className={styles.highlight}>Timeless Moments</span></h1>
          <p className={styles.subtitle}>
            Curated premium venues that seamlessly blend rich traditions with modern luxury, providing the perfect canvas for your spiritual events and celebrations.
          </p>
          <div className={styles.heroActions}>
            <Link href="/venues">
              <Button size="lg" variant="primary">Explore Collection</Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className={styles.outlineInverse}>Our Heritage</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div>
              <span className={styles.sectionSub}>Exclusive Collection</span>
              <h2 className={styles.sectionTitle}>Featured Properties</h2>
            </div>
            <Link href="/venues" className={styles.viewAll}>
              View entire collection <span aria-hidden="true">→</span>
            </Link>
          </div>
          
          <div className={styles.venueGrid}>
            {featuredVenues.map((venue) => (
              <VenueCard key={venue.id} venue={venue} />
            ))}
          </div>
        </div>
      </section>

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

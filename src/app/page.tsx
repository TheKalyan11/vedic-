import { venueService } from '../services/mockApi';
import { VenueCard } from '../components/ui/VenueCard';
import { Button } from '../components/ui/Button';
import { Hero } from '../components/home/Hero';
import { ScrollingBanner } from '../components/home/ScrollingBanner';
import { VenuesByCity } from '../components/home/VenuesByCity';
import { PopularVendors } from '../components/home/PopularVendors';
import { WeddingCategories } from '../components/home/WeddingCategories';
import { PhilosophySection } from '../components/home/PhilosophySection';
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

      {/* Wedding Categories Section */}
      <WeddingCategories />

      {/* Philosophy / Value Proposition Showcase */}
      <PhilosophySection />
    </div>
  );
}

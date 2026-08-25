import { venueService } from '../services/mockApi';
import { Hero } from '../components/home/Hero';
import { ScrollingBanner } from '../components/home/ScrollingBanner';
import { FeaturedVenuesSection } from '../components/home/FeaturedVenuesSection';
import { VenuesByCity } from '../components/home/VenuesByCity';
import { PopularVendors } from '../components/home/PopularVendors';
import { WeddingCategories } from '../components/home/WeddingCategories';
import { PhilosophySection } from '../components/home/PhilosophySection';
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
      <FeaturedVenuesSection venues={featuredVenues} />

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

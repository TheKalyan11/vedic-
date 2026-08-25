import { venueService } from '../../../services/mockApi';
import { Button } from '../../../components/ui/Button';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from './page.module.css';

export default async function VenueDetailsPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const venue = await venueService.getVenueById(id);

  if (!venue) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <div className={styles.imageHeader}>
        <img src={venue.imageUrls[0]} alt={venue.name} className={styles.heroImage} />
        <div className={styles.imageOverlay}></div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.contentGrid}>
          <div className={styles.mainContent}>
            <div className={styles.header}>
              <div className={styles.badgeWrapper}>
                <span className={styles.badge}>{venue.type}</span>
              </div>
              <h1 className={styles.title}>{venue.name}</h1>
              <p className={styles.location}>📍 {venue.location}</p>
            </div>
            
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>The Experience</h2>
              <p className={styles.description}>{venue.description}</p>
            </section>
            
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Premium Amenities</h2>
              <ul className={styles.amenitiesList}>
                {venue.amenities.map((item, index) => (
                  <li key={index} className={styles.amenityItem}>
                    <span className={styles.checkIcon}>✓</span> {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
          
          <div className={styles.sidebar}>
            <div className={styles.bookingCard}>
              <div className={styles.priceHeader}>
                <div className={styles.priceBlock}>
                  <span className={styles.price}>Price on Request</span>
                  <span className={styles.perDay}>Custom packages & dates</span>
                </div>
                <div className={styles.ratingBlock}>
                  <span className={styles.ratingValue}>★ {venue.rating}</span>
                </div>
              </div>
              
              <div className={styles.infoList}>
                <div className={styles.infoRow}>
                  <span>Maximum Capacity</span>
                  <strong>Up to {venue.capacity} guests</strong>
                </div>
                <div className={styles.infoRow}>
                  <span>Venue Type</span>
                  <strong>{venue.type} Mandap & Lawns</strong>
                </div>
              </div>
              
              <Link href={`/venues/${id}/book`} className={styles.bookAction}>
                <Button size="lg" fullWidth variant="primary">
                  Request Pricing & Availability
                </Button>
              </Link>
              
              <p className={styles.guarantee}>Direct inquiry. Expert Vedic coordinator assistance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

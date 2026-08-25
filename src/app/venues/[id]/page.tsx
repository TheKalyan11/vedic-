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
                  <svg viewBox="0 0 20 20" fill="currentColor" style={{ width: 14, height: 14, color: '#D35400' }} aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className={styles.ratingValue}>{venue.rating}</span>
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

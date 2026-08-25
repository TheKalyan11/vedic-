import { venueService } from '../../services/mockApi';
import { VenueCard } from '../../components/ui/VenueCard';
import styles from './page.module.css';

export default async function VenuesPage() {
  const venues = await venueService.getVenues();

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Explore the Collection</h1>
          <p className={styles.subtitle}>Discover spaces that elevate your most cherished moments.</p>
        </div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.filterSection}>
          <div className={styles.filters}>
            <div className={styles.filterGroup}>
              <label htmlFor="venueType">Venue Type</label>
              <div className={styles.selectWrapper}>
                <select id="venueType" className={styles.select}>
                  <option value="All">All Types</option>
                  <option value="Temple">Temple</option>
                  <option value="Banquet">Banquet</option>
                  <option value="Ashram">Ashram</option>
                  <option value="Resort">Resort</option>
                  <option value="Heritage">Heritage</option>
                </select>
                <span className={styles.selectArrow}>▼</span>
              </div>
            </div>
            
            <div className={styles.filterGroup}>
              <label htmlFor="location">Location</label>
              <div className={styles.selectWrapper}>
                <select id="location" className={styles.select}>
                  <option value="All">All Locations</option>
                  <option value="Rishikesh">Rishikesh</option>
                  <option value="Jaipur">Jaipur</option>
                  <option value="Varanasi">Varanasi</option>
                </select>
                <span className={styles.selectArrow}>▼</span>
              </div>
            </div>
          </div>
          
          <div className={styles.resultsCount}>
            Showing {venues.length} curated venues
          </div>
        </div>

        <div className={styles.venueGrid}>
          {venues.map((venue) => (
            <VenueCard key={venue.id} venue={venue} />
          ))}
        </div>
      </div>
    </div>
  );
}

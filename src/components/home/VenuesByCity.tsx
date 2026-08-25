'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useLocation } from '../../context/LocationContext';
import styles from './VenuesByCity.module.css';

interface CityCardItem {
  name: string;
  count: string;
  image: string;
}

const DEFAULT_FALLBACK = 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&auto=format&fit=crop&q=80';

const CITY_PAGES: CityCardItem[][] = [
  // Page 1 (The 10 primary cities)
  [
    {
      name: 'Bangalore',
      count: '2,469 Venues',
      image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&auto=format&fit=crop&q=80', // Vidhana Soudha
    },
    {
      name: 'Chennai',
      count: '1,965 Venues',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&auto=format&fit=crop&q=80', // Chennai Architecture
    },
    {
      name: 'Hyderabad',
      count: '1,696 Venues',
      image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&auto=format&fit=crop&q=80', // Charminar
    },
    {
      name: 'Mumbai',
      count: '1,977 Venues',
      image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&auto=format&fit=crop&q=80', // Gateway of India
    },
    {
      name: 'Delhi',
      count: '1,463 Venues',
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&auto=format&fit=crop&q=80', // Lotus Temple
    },
    {
      name: 'Kolkata',
      count: '1,047 Venues',
      image: 'https://images.unsplash.com/photo-1558431382-27e303142255?w=800&auto=format&fit=crop&q=80', // Victoria Memorial
    },
    {
      name: 'Coimbatore',
      count: '671 Venues',
      image: 'https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?w=800&auto=format&fit=crop&q=80', // Sacred Foothills & Adiyogi Temple
    },
    {
      name: 'Kochi',
      count: '532 Venues',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&auto=format&fit=crop&q=80', // Kerala Houseboat
    },
    {
      name: 'Pune',
      count: '1,125 Venues',
      image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=800&auto=format&fit=crop&q=80', // Shaniwar Wada
    },
    {
      name: 'Noida',
      count: '375 Venues',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=80', // Grand Temple & Palace
    },
  ],
  // Page 2 (Additional top destinations)
  [
    {
      name: 'Jaipur',
      count: '1,840 Venues',
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&auto=format&fit=crop&q=80', // Hawa Mahal
    },
    {
      name: 'Goa',
      count: '920 Venues',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&auto=format&fit=crop&q=80', // Beach Resort
    },
    {
      name: 'Udaipur',
      count: '860 Venues',
      image: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?w=800&auto=format&fit=crop&q=80', // Lake Palace
    },
    {
      name: 'Rishikesh',
      count: '480 Venues',
      image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&auto=format&fit=crop&q=80', // Ganga Ghats
    },
    {
      name: 'Varanasi',
      count: '620 Venues',
      image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&auto=format&fit=crop&q=80', // Kashi Ghats
    },
    {
      name: 'Chandigarh',
      count: '740 Venues',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&auto=format&fit=crop&q=80', // Gardens
    },
    {
      name: 'Lucknow',
      count: '890 Venues',
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&auto=format&fit=crop&q=80', // Rumi Darwaza
    },
    {
      name: 'Ahmedabad',
      count: '950 Venues',
      image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&auto=format&fit=crop&q=80', // Haveli
    },
    {
      name: 'Jim Corbett',
      count: '310 Venues',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&auto=format&fit=crop&q=80', // Resort
    },
    {
      name: 'Tirupati',
      count: '420 Venues',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=80', // Mandapam
    },
  ],
];

export const VenuesByCity = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { setSelectedLocation } = useLocation();

  const handleNext = useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % CITY_PAGES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentPage((prev) => (prev === 0 ? CITY_PAGES.length - 1 : prev - 1));
  }, []);

  // Automatic scrolling / page rotation every 4.5 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  const handleCityClick = (cityName: string) => {
    setSelectedLocation(cityName);
  };

  const currentCities = CITY_PAGES[currentPage];

  return (
    <section className={styles.citySection} aria-label="Explore Wedding Venues by City">
      <div className={styles.container}>
        {/* Header with Title, Grammatically Correct Subtitle, and Navigation Arrow Buttons */}
        <div className={styles.header}>
          <div>
            <span className={styles.sectionBadge}>POPULAR DESTINATIONS</span>
            <h2 className={styles.title}>Wedding Venues by City</h2>
            <p className={styles.subtitle}>Explore curated sacred spaces and celebration halls across top Indian cities</p>
          </div>
          
          <div className={styles.navButtons}>
            <button
              type="button"
              className={styles.navBtn}
              onClick={handlePrev}
              aria-label="View previous cities"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              type="button"
              className={styles.navBtn}
              onClick={handleNext}
              aria-label="View next cities"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* 10-Card Landmark Grid (2 Rows of 5) with Automatic Scrolling and Pause on Hover */}
        <div
          className={styles.sliderWrapper}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div key={currentPage} className={styles.grid}>
            {currentCities.map((city) => (
              <Link
                key={city.name}
                href={`/venues?city=${encodeURIComponent(city.name)}`}
                className={styles.cityCard}
                onClick={() => handleCityClick(city.name)}
              >
                <img
                  src={city.image}
                  alt={`${city.name} Landmark`}
                  className={styles.bgImage}
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = DEFAULT_FALLBACK;
                  }}
                />
                <div className={styles.overlay} />
                <div className={styles.cardContent}>
                  <h3 className={styles.cityName}>{city.name}</h3>
                  <p className={styles.venueCount}>{city.count}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className={styles.pagination}>
          {CITY_PAGES.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`${styles.dot} ${currentPage === index ? styles.activeDot : ''}`}
              onClick={() => setCurrentPage(index)}
              aria-label={`Go to city page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

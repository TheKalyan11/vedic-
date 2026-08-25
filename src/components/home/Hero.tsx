'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from '../../context/LocationContext';
import styles from './Hero.module.css';

const HERO_IMAGES = [
  'https://img2.wallspic.com/crops/0/5/0/0/5/150050/150050-monochrome-gesture-black-male-ring-3840x2160.jpg',
  'https://img1.wallspic.com/crops/7/5/2/7/77257/77257-red-blue-cloud-sky_lantern-atmosphere-3840x2160.jpg',
  'https://images.pexels.com/photos/25956380/pexels-photo-25956380.jpeg',
  'https://images.unsplash.com/photo-1708569176850-9de9aa6b179b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1620704043184-bc985bebeb8e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

interface DropdownItem {
  label: string;
  isBold?: boolean;
}

interface DropdownSection {
  title: string;
  items: DropdownItem[];
}

const SEARCH_COLUMNS: DropdownSection[][] = [
  // Column 1
  [
    {
      title: 'Venues',
      items: [
        { label: 'Banquet Halls' },
        { label: 'Marriage Garden / Lawns' },
        { label: 'Wedding Resorts' },
        { label: 'Small Function / Party Halls' },
        { label: 'Destination Wedding Venue' },
        { label: 'Kalyana Mandapams' },
        { label: '4 Star & Above Hotels' },
        { label: '5 Star Luxury Hotels' },
        { label: 'Wedding Farmhouses' },
        { label: 'View All Venues', isBold: true },
      ],
    },
    {
      title: 'Photographers',
      items: [
        { label: 'Photographers' },
      ],
    },
    {
      title: 'Makeup',
      items: [
        { label: 'Bridal Makeup Artists' },
        { label: 'Family Makeup' },
      ],
    },
  ],
  // Column 2
  [
    {
      title: 'Planning & Decor',
      items: [
        { label: 'Wedding Planners' },
        { label: 'Decorators' },
      ],
    },
    {
      title: 'Virtual Planning',
      items: [
        { label: 'Virtual planning' },
      ],
    },
    {
      title: 'Mehndi',
      items: [
        { label: 'Mehendi Artists' },
      ],
    },
    {
      title: 'Music & Dance',
      items: [
        { label: 'DJs' },
        { label: 'Sangeet Choreographer' },
        { label: 'Wedding Entertainment' },
      ],
    },
  ],
  // Column 3
  [
    {
      title: 'Invites & Gifts',
      items: [
        { label: 'Invitations' },
        { label: 'Favors' },
        { label: 'Trousseau Packers' },
        { label: 'Invitation Gifts' },
        { label: 'Mehndi Favors' },
        { label: 'View All Invites & Gifts', isBold: true },
      ],
    },
    {
      title: 'Food',
      items: [
        { label: 'Catering Services' },
        { label: 'Cake' },
        { label: 'Chaat & Food Stalls' },
        { label: 'Bartenders' },
        { label: 'View All Food', isBold: true },
      ],
    },
    {
      title: 'Pre Wedding Shoot',
      items: [
        { label: 'Pre Wedding Photographers' },
      ],
    },
  ],
  // Column 4
  [
    {
      title: 'Bridal Wear',
      items: [
        { label: 'Bridal Lehengas' },
        { label: 'Kanjeevaram / Silk Sarees' },
        { label: 'Cocktail Gowns' },
        { label: 'Trousseau Sarees' },
        { label: 'Bridal Lehenga on Rent' },
        { label: 'View All Bridal Wear', isBold: true },
      ],
    },
    {
      title: 'Groom Wear',
      items: [
        { label: 'Sherwani' },
        { label: 'Wedding Suits / Tuxes' },
        { label: 'Sherwani On Rent' },
        { label: 'View All Groom Wear', isBold: true },
      ],
    },
  ],
];

export const Hero = () => {
  const { selectedLocation } = useLocation();
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [fade, setFade] = useState(true);
  
  const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false);
  const [selectedSearchType, setSelectedSearchType] = useState('Vendors');
  
  const searchRef = useRef<HTMLDivElement>(null);

  const heroPhrases = [
    `Plan a Wedding in ${selectedLocation}`,
    `Celebrate a Birthday in ${selectedLocation}`,
    `Host an Annaprashan in ${selectedLocation}`,
    `Plan a Reception in ${selectedLocation}`,
    `Celebrate a Special Occasion in ${selectedLocation}`
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Image Carousel Effect
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(imageInterval);
  }, []);

  // Text Animation Effect
  useEffect(() => {
    const textInterval = setInterval(() => {
      setFade(false); 
      setTimeout(() => {
        setCurrentPhraseIndex((prev) => (prev + 1) % heroPhrases.length);
        setFade(true);
      }, 500); 
    }, 3500);

    return () => clearInterval(textInterval);
  }, [heroPhrases.length]);

  const handleSearchSelect = (label: string) => {
    setSelectedSearchType(label);
    setIsSearchDropdownOpen(false);
  };

  const handleToggleDropdown = () => {
    const nextState = !isSearchDropdownOpen;
    setIsSearchDropdownOpen(nextState);

    if (nextState) {
      setTimeout(() => {
        if (searchRef.current) {
          const rect = searchRef.current.getBoundingClientRect();
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          // Offset for fixed top navbar (approx 120px) so the search bar sits near the top below nav
          const targetY = rect.top + scrollTop - 120;
          window.scrollTo({
            top: Math.max(0, targetY),
            behavior: 'smooth',
          });
        }
      }, 50);
    }
  };

  return (
    <section className={styles.heroSection}>
      {/* Background Images Carousel Container */}
      <div className={styles.heroBackgroundContainer}>
        {HERO_IMAGES.map((src, index) => (
          <div
            key={src}
            className={`${styles.heroImage} ${index === currentImageIndex ? styles.activeImage : ''}`}
            style={{ backgroundImage: `url("${src}")` }}
          />
        ))}
        <div className={styles.heroOverlay}></div>
      </div>

      {/* Hero Content */}
      <div className={styles.heroContent}>
        
        <div className={styles.animatedHeadingContainer}>
          <h1 className={`${styles.animatedHeading} ${fade ? styles.fadeIn : styles.fadeOut}`}>
            {heroPhrases[currentPhraseIndex]}
          </h1>
        </div>
        
        {/* Search / Discovery Bar */}
        <div className={styles.searchBarWrapper} ref={searchRef}>
          <div 
            className={styles.searchBar} 
            onClick={handleToggleDropdown}
          >
            {/* Left Icon Area */}
            <div className={styles.searchIconArea}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            
            {/* Main Text Area */}
            <div className={styles.searchText}>
              Find {selectedSearchType} in {selectedLocation}
            </div>
            
            {/* Right Arrow */}
            <div className={styles.searchArrow}>
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className={isSearchDropdownOpen ? styles.arrowUp : ''}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>
          
          {/* Multi-column Mega Dropdown Panel */}
          {isSearchDropdownOpen && (
            <div className={styles.searchDropdown}>
              <div className={styles.dropdownGrid}>
                {SEARCH_COLUMNS.map((column, colIndex) => (
                  <div key={colIndex} className={styles.dropdownColumn}>
                    {column.map((section, secIndex) => (
                      <div key={secIndex} className={styles.dropdownSection}>
                        <h4 className={styles.sectionTitle}>{section.title}</h4>
                        <ul className={styles.sectionList}>
                          {section.items.map((item) => (
                            <li key={item.label}>
                              <button
                                type="button"
                                className={`${styles.dropdownItemButton} ${item.isBold ? styles.boldItem : ''}`}
                                onClick={() => handleSearchSelect(item.label)}
                              >
                                {item.label}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
      </div>
    </section>
  );
};

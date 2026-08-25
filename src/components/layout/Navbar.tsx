'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { APP_CONFIG } from '../../config/constants';
import { LoginButton } from '../ui/LoginButton';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState(
    APP_CONFIG.navigation.topBar.defaultLocation || 'Hyderabad'
  );
  const [locationSearch, setLocationSearch] = useState('');
  
  const locationRef = useRef<HTMLDivElement>(null);
  const navMenuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (locationRef.current && !locationRef.current.contains(event.target as Node)) {
        setIsLocationOpen(false);
      }
      if (navMenuRef.current && !navMenuRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelectCity = (city: string) => {
    setSelectedLocation(city);
    setIsLocationOpen(false);
    setLocationSearch('');
  };

  return (
    <div className={styles.navWrapper}>
      {/* 1. Top Navigation Bar */}
      <div className={styles.topBar}>
        <div className={styles.topBarContainer}>
          {/* Left: Tagline + Location Selector Box */}
          <div className={styles.topBarLeft}>
            <span className={styles.tagline}>{APP_CONFIG.navigation.topBar.tagline}</span>
            
            {/* Location Selector Mega Dropdown Container */}
            <div className={styles.locationContainer} ref={locationRef}>
              <button 
                type="button"
                className={`${styles.locationButton} ${isLocationOpen ? styles.locationButtonActive : ''}`}
                onClick={() => setIsLocationOpen(!isLocationOpen)}
                aria-expanded={isLocationOpen}
                aria-label="Select City or State"
              >
                <span className={styles.selectedCityText}>{selectedLocation}</span>
                <span className={`${styles.dropdownArrow} ${isLocationOpen ? styles.dropdownArrowOpen : ''}`}>▼</span>
              </button>

              {/* Location Mega Dropdown Modal */}
              {isLocationOpen && (
                <div className={styles.locationMegaDropdown}>
                  {/* Search City / State */}
                  <div className={styles.locationSearchWrapper}>
                    <svg viewBox="0 0 24 24" className={styles.searchIcon} fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <input
                      type="text"
                      placeholder="Search City, State..."
                      value={locationSearch}
                      onChange={(e) => setLocationSearch(e.target.value)}
                      className={styles.locationSearchInput}
                      autoFocus
                    />
                  </div>

                  {/* Multi-column Grid */}
                  <div className={styles.locationGrid}>
                    {APP_CONFIG.navigation.topBar.locationCategories.map((category) => {
                      const filteredCities = category.cities.filter((city) =>
                        city.toLowerCase().includes(locationSearch.toLowerCase())
                      );

                      if (locationSearch && filteredCities.length === 0) {
                        return null;
                      }

                      return (
                        <div key={category.title} className={styles.locationColumn}>
                          <h4 className={styles.columnTitle}>{category.title}</h4>
                          <ul className={styles.cityList}>
                            {filteredCities.map((city) => (
                              <li key={city}>
                                <button
                                  type="button"
                                  className={`${styles.cityItem} ${selectedLocation === city ? styles.cityItemActive : ''}`}
                                  onClick={() => handleSelectCity(city)}
                                >
                                  {city}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Right: Actions with thin separators */}
          <div className={styles.topBarRight}>
            {APP_CONFIG.navigation.topBar.actions.map((action, index) => (
              <React.Fragment key={action.label}>
                {index > 0 && <span className={styles.topBarDivider} aria-hidden="true">|</span>}
                <Link 
                  href={action.href} 
                  className={`${styles.topBarLink} ${action.icon === 'app' ? styles.appLink : styles.reviewLink}`}
                >
                  {action.icon === 'review' && (
                    <svg 
                      viewBox="0 0 24 24" 
                      className={styles.actionIcon} 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                  )}
                  {action.icon === 'app' && (
                    <svg 
                      viewBox="0 0 24 24" 
                      className={`${styles.actionIcon} ${styles.appIcon}`} 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                      <line x1="12" y1="18" x2="12.01" y2="18"></line>
                    </svg>
                  )}
                  <span className={styles.actionText}>{action.label}</span>
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      
      {/* 2. Main Navigation Bar */}
      <header className={`${styles.mainNavContainer} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.mainNav}>
          <div className={styles.navInner}>
            
            {/* Logo (Far Left) */}
            <Link href="/" className={styles.logoLink} aria-label="Vedic Venues Home">
              <img 
                src="/mian_logo-removebg-preview.png" 
                alt="Vedic Venues Logo" 
                className={styles.brandLogo} 
              />
            </Link>

            {/* Desktop Center Menu with Mega Dropdowns */}
            <nav className={styles.desktopMenu} ref={navMenuRef}>
              {APP_CONFIG.navigation.mainMenu.map((item) => {
                // 1. Venues Mega Dropdown
                if (item.dropdownType === 'venues') {
                  const isOpen = activeDropdown === 'venues';
                  return (
                    <div 
                      key={item.label}
                      className={styles.menuItemWrapper}
                      onMouseEnter={() => setActiveDropdown('venues')}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <Link 
                        href={item.href} 
                        className={`${styles.navLink} ${isOpen ? styles.navLinkActive : ''}`}
                      >
                        {item.label}
                      </Link>

                      {isOpen && (
                        <div className={styles.venuesMegaDropdown}>
                          <div className={styles.venuesMegaContainer}>
                            {/* By Type Column */}
                            <div className={styles.venueColumn}>
                              <h4 className={styles.venueColumnTitle}>By Type</h4>
                              <ul className={styles.venueList}>
                                {APP_CONFIG.navigation.venuesDropdown.byType.map((typeItem) => (
                                  <li key={typeItem.label}>
                                    <Link 
                                      href={typeItem.href} 
                                      className={`${styles.venueLink} ${typeItem.isBold ? styles.boldLink : ''}`}
                                      onClick={() => setActiveDropdown(null)}
                                    >
                                      {typeItem.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* By City Column */}
                            <div className={styles.venueColumn}>
                              <h4 className={styles.venueColumnTitle}>By City</h4>
                              <ul className={styles.venueList}>
                                {APP_CONFIG.navigation.venuesDropdown.byCity.map((cityItem) => (
                                  <li key={cityItem.label}>
                                    <Link 
                                      href={cityItem.href} 
                                      className={`${styles.venueLink} ${cityItem.isBold ? styles.boldLink : ''}`}
                                      onClick={() => setActiveDropdown(null)}
                                    >
                                      {cityItem.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Temple & Destination Venues (Right Grid) */}
                            <div className={styles.destinationSection}>
                              <h4 className={styles.destinationTitle}>
                                {APP_CONFIG.navigation.venuesDropdown.destinationsTitle || 'Temple & Destination Venues'}
                              </h4>
                              <div className={styles.destinationGrid}>
                                {APP_CONFIG.navigation.venuesDropdown.destinations.map((dest) => (
                                  <Link 
                                    key={dest.name} 
                                    href={dest.href} 
                                    className={styles.destinationCard}
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    <div className={styles.destinationImageWrapper}>
                                      <img 
                                        src={dest.image} 
                                        alt={`${dest.name} ${dest.tag || ''}`} 
                                        className={styles.destinationImage} 
                                        loading="lazy"
                                      />
                                    </div>
                                    <span className={styles.destinationName}>{dest.name}</span>
                                    {dest.tag && (
                                      <span className={styles.destinationTag}>{dest.tag}</span>
                                    )}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                // 2. Vendors Mega Dropdown
                if (item.dropdownType === 'vendors') {
                  const isOpen = activeDropdown === 'vendors';
                  return (
                    <div 
                      key={item.label}
                      className={styles.menuItemWrapper}
                      onMouseEnter={() => setActiveDropdown('vendors')}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <Link 
                        href={item.href} 
                        className={`${styles.navLink} ${isOpen ? styles.navLinkActive : ''}`}
                      >
                        {item.label}
                      </Link>

                      {isOpen && (
                        <div className={styles.vendorsMegaDropdown}>
                          <div className={styles.vendorsMegaContainer}>
                            {APP_CONFIG.navigation.vendorsDropdown.columns.map((col, colIndex) => (
                              <div key={colIndex} className={styles.vendorColumn}>
                                {col.sections.map((section) => (
                                  <div key={section.title} className={styles.vendorSection}>
                                    <h4 className={styles.vendorSectionTitle}>{section.title}</h4>
                                    <ul className={styles.vendorList}>
                                      {section.items.map((subItem) => (
                                        <li key={subItem.label}>
                                          <Link 
                                            href={subItem.href} 
                                            className={`${styles.vendorLink} ${subItem.isBold ? styles.boldLink : ''}`}
                                            onClick={() => setActiveDropdown(null)}
                                          >
                                            <span>{subItem.label}</span>
                                            {subItem.badge && (
                                              <span className={styles.serviceBadge}>{subItem.badge}</span>
                                            )}
                                          </Link>
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
                  );
                }

                // 3. Weddings Mega Dropdown
                if (item.dropdownType === 'weddings') {
                  const isOpen = activeDropdown === 'weddings';
                  return (
                    <div 
                      key={item.label}
                      className={styles.menuItemWrapper}
                      onMouseEnter={() => setActiveDropdown('weddings')}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <Link 
                        href={item.href} 
                        className={`${styles.navLink} ${isOpen ? styles.navLinkActive : ''}`}
                      >
                        {item.label}
                      </Link>

                      {isOpen && (
                        <div className={styles.weddingsMegaDropdown}>
                          <div className={styles.weddingsMegaContainer}>
                            {/* Column 1: By City */}
                            <div className={styles.weddingColumn}>
                              <h4 className={styles.weddingColumnTitle}>By City</h4>
                              <ul className={styles.weddingList}>
                                {APP_CONFIG.navigation.weddingsDropdown.byCity.map((city) => (
                                  <li key={city.label}>
                                    <Link 
                                      href={city.href} 
                                      className={`${styles.weddingLink} ${city.isBold ? styles.boldLink : ''}`}
                                      onClick={() => setActiveDropdown(null)}
                                    >
                                      {city.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Column 2: By Culture */}
                            <div className={styles.weddingColumn}>
                              <h4 className={styles.weddingColumnTitle}>By Culture</h4>
                              <ul className={styles.weddingList}>
                                {APP_CONFIG.navigation.weddingsDropdown.byCulture.map((culture) => (
                                  <li key={culture.label}>
                                    <Link 
                                      href={culture.href} 
                                      className={`${styles.weddingLink} ${culture.isBold ? styles.boldLink : ''}`}
                                      onClick={() => setActiveDropdown(null)}
                                    >
                                      {culture.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Column 3: By Theme */}
                            <div className={styles.weddingColumn}>
                              <h4 className={styles.weddingColumnTitle}>By Theme</h4>
                              <ul className={styles.weddingList}>
                                {APP_CONFIG.navigation.weddingsDropdown.byTheme.map((theme) => (
                                  <li key={theme.label}>
                                    <Link 
                                      href={theme.href} 
                                      className={`${styles.weddingLink} ${theme.isBold ? styles.boldLink : ''}`}
                                      onClick={() => setActiveDropdown(null)}
                                    >
                                      {theme.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Column 4: Latest Real Weddings */}
                            <div className={styles.weddingCardsColumn}>
                              <h4 className={styles.weddingColumnTitle}>
                                {APP_CONFIG.navigation.weddingsDropdown.latestWeddingsTitle}
                              </h4>
                              <div className={styles.weddingCardsList}>
                                {APP_CONFIG.navigation.weddingsDropdown.latestWeddings.map((wedding) => (
                                  <Link 
                                    key={wedding.title} 
                                    href={wedding.href} 
                                    className={styles.weddingCard}
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    <div className={styles.weddingCardImageWrapper}>
                                      <img 
                                        src={wedding.image} 
                                        alt={wedding.title} 
                                        className={styles.weddingCardImage} 
                                        loading="lazy"
                                      />
                                    </div>
                                    <span className={styles.weddingCardTitle}>{wedding.title}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>

                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                // 4. Photos Mega Dropdown
                if (item.dropdownType === 'photos') {
                  const isOpen = activeDropdown === 'photos';
                  return (
                    <div 
                      key={item.label}
                      className={styles.menuItemWrapper}
                      onMouseEnter={() => setActiveDropdown('photos')}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <Link 
                        href={item.href} 
                        className={`${styles.navLink} ${isOpen ? styles.navLinkActive : ''}`}
                      >
                        {item.label}
                      </Link>

                      {isOpen && (
                        <div className={styles.photosMegaDropdown}>
                          <div className={styles.photosMegaContainer}>
                            {APP_CONFIG.navigation.photosDropdown.columns.map((col, colIndex) => (
                              <div key={colIndex} className={styles.photoColumn}>
                                {col.sections.map((section) => (
                                  <div key={section.title} className={styles.photoSection}>
                                    <h4 className={styles.photoSectionTitle}>{section.title}</h4>
                                    <ul className={styles.photoList}>
                                      {section.items.map((subItem) => (
                                        <li key={subItem.label}>
                                          <Link 
                                            href={subItem.href} 
                                            className={`${styles.photoLink} ${subItem.isBold ? styles.boldLink : ''}`}
                                            onClick={() => setActiveDropdown(null)}
                                          >
                                            {subItem.label}
                                          </Link>
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
                  );
                }

                // 5. E-Invites Dropdown
                if (item.dropdownType === 'invites') {
                  const isOpen = activeDropdown === 'invites';
                  return (
                    <div 
                      key={item.label}
                      className={styles.menuItemWrapper}
                      onMouseEnter={() => setActiveDropdown('invites')}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <Link 
                        href={item.href} 
                        className={`${styles.navLink} ${isOpen ? styles.navLinkActive : ''}`}
                      >
                        {item.label}
                      </Link>

                      {isOpen && (
                        <div className={styles.invitesDropdown}>
                          <h4 className={styles.invitesTitle}>
                            {APP_CONFIG.navigation.invitesDropdown.title}
                          </h4>
                          <ul className={styles.invitesList}>
                            {APP_CONFIG.navigation.invitesDropdown.items.map((subItem) => (
                              <li key={subItem.label}>
                                <Link 
                                  href={subItem.href} 
                                  className={styles.invitesLink}
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {subItem.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link key={item.label} href={item.href} className={styles.navLink}>
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Side Actions: [ Search Glass Button ] [ Login Glass Button ] */}
            <div className={styles.actions}>
              <button className={styles.searchGlassButton} aria-label="Search">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
              
              <LoginButton />
              
              <button 
                className={styles.mobileToggle} 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? '✕' : '☰'}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <nav className={styles.mobileNavLinks}>
            {APP_CONFIG.navigation.mainMenu.map(item => (
              <Link key={item.label} href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
            <hr className={styles.mobileDivider} />
            {APP_CONFIG.navigation.topBar.actions.map(action => (
              <Link key={action.label} href={action.href} onClick={() => setIsMobileMenuOpen(false)} className={styles.mobileActionLink}>
                {action.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </div>
  );
};

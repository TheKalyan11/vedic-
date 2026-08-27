'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { APP_CONFIG } from '../../config/constants';
import { LoginButton } from '../ui/LoginButton';
import { useLocation } from '../../context/LocationContext';
import { useLanguage } from '../../context/LanguageContext';
import { Globe, ChevronDown, Check } from 'lucide-react';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { selectedLocation, setSelectedLocation } = useLocation();
  const { language, setLanguage, t, languages } = useLanguage();
  const [locationSearch, setLocationSearch] = useState('');
  
  const locationRef = useRef<HTMLDivElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close location & language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (locationRef.current && !locationRef.current.contains(event.target as Node)) {
        setIsLocationOpen(false);
      }
      if (languageRef.current && !languageRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false);
      }
      if (navContainerRef.current && !navContainerRef.current.contains(event.target as Node)) {
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

  const handleMouseEnterNav = (dropdownType?: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    if (dropdownType) {
      setActiveDropdown(dropdownType);
    }
  };

  const handleMouseLeaveNav = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  const handleMouseEnterDropdown = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const getLocalizedNavLabel = (label: string) => {
    switch (label) {
      case 'Venues': return t('nav.venues');
      case 'Vendors': return t('nav.vendors');
      case 'Weddings': return t('nav.weddings');
      case 'Photos': return t('nav.photos');
      case 'E-Invites': return t('nav.invites');
      case 'Blog': return t('nav.blog');
      case 'Genie': return t('nav.genie');
      default: return label;
    }
  };

  const getLocalizedActionLabel = (label: string) => {
    if (label === 'Write A Review') return t('nav.writeReview');
    if (label === 'Download App') return t('nav.downloadApp');
    return label;
  };

  return (
    <div className={styles.navWrapper} ref={navContainerRef}>
      {/* 1. Top Navigation Bar */}
      <div className={styles.topBar}>
        <div className={styles.topBarContainer}>
          {/* Left: Tagline + Location Selector Box + Language Selector */}
          <div className={styles.topBarLeft}>
            <span className={styles.tagline}>{t('nav.tagline')}</span>
            
            {/* Location Selector Mega Dropdown Container */}
            <div className={styles.locationContainer} ref={locationRef}>
              <button 
                type="button"
                className={`${styles.locationButton} ${isLocationOpen ? styles.locationButtonActive : ''}`}
                onClick={() => {
                  setIsLocationOpen(!isLocationOpen);
                  setIsLanguageOpen(false);
                }}
                aria-expanded={isLocationOpen}
                aria-label={t('nav.selectLocation')}
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
                      placeholder={t('nav.searchCityPlaceholder')}
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

            {/* Language Selector Dropdown Container */}
            <div className={styles.languageContainer} ref={languageRef}>
              <button 
                type="button"
                className={`${styles.languageButton} ${isLanguageOpen ? styles.languageButtonActive : ''}`}
                onClick={() => {
                  setIsLanguageOpen(!isLanguageOpen);
                  setIsLocationOpen(false);
                }}
                aria-expanded={isLanguageOpen}
                aria-label={t('common.selectLanguage')}
              >
                <Globe size={16} strokeWidth={1.5} className={styles.globeIcon} />
                <span className={styles.selectedLangText}>
                  {languages.find((l) => l.code === language)?.nativeName || 'English'}
                </span>
                <ChevronDown size={14} strokeWidth={2} className={`${styles.dropdownArrow} ${isLanguageOpen ? styles.dropdownArrowOpen : ''}`} />
              </button>

              {/* Language Dropdown Menu */}
              {isLanguageOpen && (
                <div className={styles.languageDropdown}>
                  <ul className={styles.languageList}>
                    {languages.map((langOption) => (
                      <li key={langOption.code}>
                        <button
                          type="button"
                          className={`${styles.languageItem} ${language === langOption.code ? styles.languageItemActive : ''}`}
                          onClick={() => {
                            setLanguage(langOption.code);
                            setIsLanguageOpen(false);
                          }}
                        >
                          <span>{langOption.nativeName} ({langOption.label})</span>
                          {language === langOption.code && (
                            <Check size={16} strokeWidth={2.5} className={styles.langCheckIcon} />
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
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
                  target={action.isExternal ? '_blank' : undefined}
                  rel={action.isExternal ? 'noopener noreferrer' : undefined}
                >
                  {/* External Website Icon */}
                  {action.icon === 'external' && (
                    <svg 
                      viewBox="0 0 24 24" 
                      className={styles.actionIcon} 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                  )}

                  {/* Write A Review Icon (Document with text lines and pencil at bottom-right) */}
                  {action.icon === 'review' && (
                    <svg 
                      viewBox="0 0 24 24" 
                      className={styles.actionIcon} 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h7"></path>
                      <line x1="8" y1="7" x2="16" y2="7"></line>
                      <line x1="8" y1="11" x2="14" y2="11"></line>
                      <line x1="8" y1="15" x2="11" y2="15"></line>
                      <path d="M16 19l4-4 1.5 1.5-4 4H16v-1.5z"></path>
                      <path d="M18.5 13.5l2 2"></path>
                    </svg>
                  )}

                  {/* Download App Icon (Smartphone with download arrow and home dot) */}
                  {action.icon === 'app' && (
                    <svg 
                      viewBox="0 0 24 24" 
                      className={`${styles.actionIcon} ${styles.appIcon}`} 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <rect x="5" y="2" width="14" height="20" rx="3" ry="3"></rect>
                      <line x1="12" y1="7" x2="12" y2="13"></line>
                      <polyline points="9 10 12 13 15 10"></polyline>
                      <circle cx="12" cy="18" r="0.75" fill="currentColor"></circle>
                    </svg>
                  )}

                  <span className={styles.actionText}>{getLocalizedActionLabel(action.label)}</span>
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      
      {/* 2. Main Navigation Bar */}
      <header 
        className={`${styles.mainNavContainer} ${isScrolled ? styles.scrolled : ''}`}
        onMouseLeave={handleMouseLeaveNav}
      >
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

            {/* Desktop Center Menu */}
            <nav className={styles.desktopMenu}>
              {APP_CONFIG.navigation.mainMenu.map((item) => {
                const isActive = activeDropdown === item.dropdownType;
                return (
                  <div 
                    key={item.label}
                    className={styles.menuItemWrapper}
                    onMouseEnter={() => handleMouseEnterNav(item.dropdownType)}
                  >
                    <Link 
                      href={item.href} 
                      className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                    >
                      {getLocalizedNavLabel(item.label)}
                    </Link>
                  </div>
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

        {/* 3. Single Unified Mega-Menu Dropdown (Myntra-style fixed position & width) */}
        {activeDropdown && (
          <div 
            className={styles.unifiedMegaDropdown}
            onMouseEnter={handleMouseEnterDropdown}
            onMouseLeave={handleMouseLeaveNav}
          >
            <div className={styles.unifiedMegaInner}>
              
              {/* Dropdown 1: Venues */}
              {activeDropdown === 'venues' && (
                <div className={styles.venuesGridUnified}>
                  {/* By Type */}
                  <div className={styles.unifiedColumn}>
                    <h4 className={styles.unifiedSectionTitle}>By Type</h4>
                    <ul className={styles.unifiedList}>
                      {APP_CONFIG.navigation.venuesDropdown.byType.map((typeItem) => (
                        <li key={typeItem.label}>
                          <Link 
                            href={typeItem.href} 
                            className={`${styles.unifiedLink} ${typeItem.isBold ? styles.unifiedBoldLink : ''}`}
                            onClick={() => setActiveDropdown(null)}
                          >
                            {typeItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* By City */}
                  <div className={styles.unifiedColumn}>
                    <h4 className={styles.unifiedSectionTitle}>By City</h4>
                    <ul className={styles.unifiedList}>
                      {APP_CONFIG.navigation.venuesDropdown.byCity.map((cityItem) => (
                        <li key={cityItem.label}>
                          <Link 
                            href={cityItem.href} 
                            className={`${styles.unifiedLink} ${cityItem.isBold ? styles.unifiedBoldLink : ''}`}
                            onClick={() => setActiveDropdown(null)}
                          >
                            {cityItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Temple & Destination Photo Cards */}
                  <div className={styles.unifiedDestinationSection}>
                    <h4 className={styles.unifiedSectionTitle}>
                      {APP_CONFIG.navigation.venuesDropdown.destinationsTitle || 'Temple & Destination Venues'}
                    </h4>
                    <div className={styles.unifiedDestinationGrid}>
                      {APP_CONFIG.navigation.venuesDropdown.destinations.map((dest) => (
                        <Link 
                          key={dest.name} 
                          href={dest.href} 
                          className={styles.unifiedDestinationCard}
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className={styles.unifiedCardImageWrapper}>
                            <img 
                              src={dest.image} 
                              alt={`${dest.name} ${dest.tag || ''}`} 
                              className={styles.unifiedCardImage} 
                              loading="lazy"
                            />
                          </div>
                          <span className={styles.unifiedCardTitle}>{dest.name}</span>
                          {dest.tag && (
                            <span className={styles.unifiedCardTag}>{dest.tag}</span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Dropdown 2: Vendors */}
              {activeDropdown === 'vendors' && (
                <div className={styles.standardFourColumnsGrid}>
                  {APP_CONFIG.navigation.vendorsDropdown.columns.map((col, colIndex) => (
                    <div key={colIndex} className={styles.unifiedColumnStacked}>
                      {col.sections.map((section) => (
                        <div key={section.title} className={styles.unifiedSubSection}>
                          <h4 className={styles.unifiedSectionTitle}>{section.title}</h4>
                          <ul className={styles.unifiedList}>
                            {section.items.map((subItem) => {
                              const item = subItem as { label: string; href: string; isBold?: boolean; badge?: string };
                              return (
                                <li key={item.label}>
                                  <Link 
                                    href={item.href} 
                                    className={`${styles.unifiedLink} ${item.isBold ? styles.unifiedBoldLink : ''}`}
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    <span>{item.label}</span>
                                    {item.badge && (
                                      <span className={styles.unifiedBadge}>{item.badge}</span>
                                    )}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}

              {/* Dropdown 3: Weddings */}
              {activeDropdown === 'weddings' && (
                <div className={styles.weddingsGridUnified}>
                  {/* By City */}
                  <div className={styles.unifiedColumn}>
                    <h4 className={styles.unifiedSectionTitle}>By City</h4>
                    <ul className={styles.unifiedList}>
                      {APP_CONFIG.navigation.weddingsDropdown.byCity.map((city) => (
                        <li key={city.label}>
                          <Link 
                            href={city.href} 
                            className={`${styles.unifiedLink} ${city.isBold ? styles.unifiedBoldLink : ''}`}
                            onClick={() => setActiveDropdown(null)}
                          >
                            {city.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* By Culture */}
                  <div className={styles.unifiedColumn}>
                    <h4 className={styles.unifiedSectionTitle}>By Culture</h4>
                    <ul className={styles.unifiedList}>
                      {APP_CONFIG.navigation.weddingsDropdown.byCulture.map((culture) => (
                        <li key={culture.label}>
                          <Link 
                            href={culture.href} 
                            className={`${styles.unifiedLink} ${culture.isBold ? styles.unifiedBoldLink : ''}`}
                            onClick={() => setActiveDropdown(null)}
                          >
                            {culture.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* By Theme */}
                  <div className={styles.unifiedColumn}>
                    <h4 className={styles.unifiedSectionTitle}>By Theme</h4>
                    <ul className={styles.unifiedList}>
                      {APP_CONFIG.navigation.weddingsDropdown.byTheme.map((theme) => (
                        <li key={theme.label}>
                          <Link 
                            href={theme.href} 
                            className={`${styles.unifiedLink} ${theme.isBold ? styles.unifiedBoldLink : ''}`}
                            onClick={() => setActiveDropdown(null)}
                          >
                            {theme.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Latest Real Weddings */}
                  <div className={styles.unifiedRealWeddingsSection}>
                    <h4 className={styles.unifiedSectionTitle}>
                      {APP_CONFIG.navigation.weddingsDropdown.latestWeddingsTitle}
                    </h4>
                    <div className={styles.unifiedWeddingsCardList}>
                      {APP_CONFIG.navigation.weddingsDropdown.latestWeddings.map((wedding) => (
                        <Link 
                          key={wedding.title} 
                          href={wedding.href} 
                          className={styles.unifiedWeddingStoryCard}
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className={styles.unifiedWeddingImageWrapper}>
                            <img 
                              src={wedding.image} 
                              alt={wedding.title} 
                              className={styles.unifiedCardImage} 
                              loading="lazy"
                            />
                          </div>
                          <span className={styles.unifiedStoryTitle}>{wedding.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Dropdown 4: Photos */}
              {activeDropdown === 'photos' && (
                <div className={styles.standardThreeColumnsGrid}>
                  {APP_CONFIG.navigation.photosDropdown.columns.map((col, colIndex) => (
                    <div key={colIndex} className={styles.unifiedColumnStacked}>
                      {col.sections.map((section) => (
                        <div key={section.title} className={styles.unifiedSubSection}>
                          <h4 className={styles.unifiedSectionTitle}>{section.title}</h4>
                          <ul className={styles.unifiedList}>
                            {section.items.map((subItem) => (
                              <li key={subItem.label}>
                                <Link 
                                  href={subItem.href} 
                                  className={`${styles.unifiedLink} ${subItem.isBold ? styles.unifiedBoldLink : ''}`}
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
              )}

              {/* Dropdown 5: E-Invites */}
              {activeDropdown === 'invites' && (
                <div className={styles.standardFourColumnsGrid}>
                  {APP_CONFIG.navigation.invitesDropdown.columns.map((col, colIndex) => (
                    <div key={colIndex} className={styles.unifiedColumnStacked}>
                      {col.sections.map((section) => (
                        <div key={section.title} className={styles.unifiedSubSection}>
                          <h4 className={styles.unifiedSectionTitle}>{section.title}</h4>
                          <ul className={styles.unifiedList}>
                            {section.items.map((subItem) => (
                              <li key={subItem.label}>
                                <Link 
                                  href={subItem.href} 
                                  className={`${styles.unifiedLink} ${subItem.isBold ? styles.unifiedBoldLink : ''}`}
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <span>{subItem.label}</span>
                                  {subItem.badge && (
                                    <span className={styles.unifiedBadge}>{subItem.badge}</span>
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
              )}

              {/* Dropdown 6: Blog */}
              {activeDropdown === 'blog' && (
                <div className={styles.standardFourColumnsGrid}>
                  {APP_CONFIG.navigation.blogDropdown.columns.map((col, colIndex) => (
                    <div key={colIndex} className={styles.unifiedColumnStacked}>
                      {col.sections.map((section) => (
                        <div key={section.title} className={styles.unifiedSubSection}>
                          <h4 className={styles.unifiedSectionTitle}>{section.title}</h4>
                          <ul className={styles.unifiedList}>
                            {section.items.map((subItem) => (
                              <li key={subItem.label}>
                                <Link 
                                  href={subItem.href} 
                                  className={`${styles.unifiedLink} ${subItem.isBold ? styles.unifiedBoldLink : ''}`}
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
              )}

              {/* Dropdown 7: Genie */}
              {activeDropdown === 'genie' && (
                <div className={styles.genieUnifiedContainer}>
                  <div className={styles.genieHeaderBlock}>
                    <h3 className={styles.genieMainTitle}>{APP_CONFIG.navigation.genieDropdown.title}</h3>
                    <p className={styles.genieSubTitle}>{APP_CONFIG.navigation.genieDropdown.subtitle}</p>
                  </div>
                  <div className={styles.genieCardsGrid}>
                    {APP_CONFIG.navigation.genieDropdown.services.map((service) => (
                      <Link 
                        key={service.title} 
                        href={service.href} 
                        className={styles.genieServiceCard}
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className={styles.genieCardTop}>
                          <span className={styles.genieCardTitle}>{service.title}</span>
                          <span className={styles.unifiedBadge}>{service.badge}</span>
                        </div>
                        <p className={styles.genieCardDesc}>{service.desc}</p>
                        <span className={styles.genieCardCta}>Explore Concierge →</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

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

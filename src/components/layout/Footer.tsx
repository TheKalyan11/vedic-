'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Check, Sparkles } from 'lucide-react';
import styles from './Footer.module.css';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className={styles.footerWrapper}>
      {/* Top App Download CTA Banner */}
      <div className={styles.appBannerSection}>
        <div className={styles.appBannerContainer}>
          {/* Left Text & Download Buttons */}
          <div className={styles.appContentCol}>
            <h2 className={styles.appTitle}>
              Ready To Plan Your Dream Wedding?
            </h2>
            <p className={styles.appSubtitle}>
              Turn planning into effortless moments. With Vedic Venues, booking regal palaces, sacred mandaps, and verified vendors is just a tap away — secure, seamless, and made for you.
            </p>

            <div className={styles.storeBadges}>
              {/* Google Play Button */}
              <a href="#playstore" className={styles.playstoreButton} aria-label="Get it on Google Play">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={styles.icon} viewBox="0 0 512 512">
                  <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z" />
                </svg>
                <span className={styles.texts}>
                  <span className={styles.text1}>GET IT ON</span>
                  <span className={styles.text2}>Google Play</span>
                </span>
              </a>

              {/* App Store Button */}
              <a href="#appstore" className={styles.playstoreButton} aria-label="Download on the App Store">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={styles.icon} viewBox="0 0 384 512">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
                <span className={styles.texts}>
                  <span className={styles.text1}>Download on the</span>
                  <span className={styles.text2}>App Store</span>
                </span>
              </a>
            </div>
          </div>

          {/* Right Mobile Phone Mockup */}
          <div className={styles.appPhoneCol}>
            <div className={styles.phoneFrame}>
              <div className={styles.phoneDynamicIsland}></div>
              
              {/* Phone Screen Mockup Content */}
              <div className={styles.phoneScreen}>
                {/* Phone Status Bar */}
                <div className={styles.phoneStatusBar}>
                  <span className={styles.phoneTime}>9:41</span>
                  <div className={styles.phoneStatusIcons}>
                    <span className={styles.signalBar}></span>
                    <span className={styles.batteryIcon}></span>
                  </div>
                </div>

                {/* Phone Header */}
                <div className={styles.phoneHeader}>
                  <div>
                    <span className={styles.phoneUserGreet}>Namaste, Kalyan</span>
                    <h4 className={styles.phoneWelcome}>Welcome to Vedic</h4>
                  </div>
                  <div className={styles.phoneAvatar}>
                    <img 
                      src="/seondlogo.png" 
                      alt="Vedic App Logo" 
                      className={styles.phoneAvatarImg}
                    />
                  </div>
                </div>

                {/* Featured App Card */}
                <div className={styles.phoneCard}>
                  <img 
                    src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&auto=format&fit=crop&q=80" 
                    alt="Palace Venue" 
                    className={styles.phoneCardImg}
                  />
                  <div className={styles.phoneCardBadge}>
                    <Sparkles size={11} />
                    <span>Royal Heritage</span>
                  </div>
                  <div className={styles.phoneCardInfo}>
                    <span className={styles.phoneCardTitle}>Taj Falaknuma Palace</span>
                    <span className={styles.phoneCardLocation}>Hyderabad • 1,200 Capacity</span>
                  </div>
                </div>

                {/* Category Chips */}
                <div className={styles.phoneChips}>
                  <span className={`${styles.phoneChip} ${styles.chipActive}`}>Grand Palaces</span>
                  <span className={styles.phoneChip}>Beach Mandaps</span>
                  <span className={styles.phoneChip}>Resorts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Light Footer */}
      <div className={styles.lightFooter}>
        <div className={styles.footerContainerLight}>
          
          {/* Column 1: Logo & Description */}
          <div className={styles.footerBrandCol}>
            <Link href="/" className={styles.footerLogo} aria-label="Vedic Venues Home">
              <img 
                src="/mian_logo-removebg-preview.png" 
                alt="Vedic Venues Logo" 
                className={styles.footerLogoImg} 
              />
            </Link>
            <p className={styles.footerDescription}>
              The most trusted platform for booking regal palaces, sacred mandaps, and verified vendors.
            </p>
          </div>

          {/* Column 2: Information */}
          <div className={styles.footerLinksCol}>
            <h4 className={styles.footerLinkTitle}>Information</h4>
            <ul className={styles.footerNavListLight}>
              <li><Link href="/contact">Contact us</Link></li>
              <li><Link href="/terms">Terms &amp; privacy</Link></li>
              <li><Link href="/privacy">Your Privacy Choices</Link></li>
              <li><Link href="/register-vendor">Register your business</Link></li>
              <li><Link href="/about">About us</Link></li>
              <li><Link href="/editorial-policy">Editorial team &amp; policies</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/venues">Wedding website</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal / Socials */}
          <div className={styles.footerLinksCol}>
            <h4 className={styles.footerLinkTitle}>Legal</h4>
            <ul className={styles.footerNavListLight}>
              <li><Link href="/privacy" className={styles.externalLink}>Privacy Policy <ArrowUpRight className={styles.linkIcon} size={13} /></Link></li>
              <li><Link href="/terms" className={styles.externalLink}>Terms & Cond. <ArrowUpRight className={styles.linkIcon} size={13} /></Link></li>
              <li><Link href="/cancellation" className={styles.externalLink}>Cancellation <ArrowUpRight className={styles.linkIcon} size={13} /></Link></li>
              <li><Link href="/#faq" className={styles.externalLink}>FAQs <ArrowUpRight className={styles.linkIcon} size={13} /></Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className={styles.footerNewsletterCol}>
            <h4 className={styles.footerLinkTitle}>Newsletter</h4>
            <p className={styles.newsletterDescLight}>
              Receive product updates news, exclusive discounts and early access.
            </p>

            <form onSubmit={handleSubscribe} className={styles.newsletterFormLight}>
              <span className={styles.newsletterAt}>@</span>
              <input 
                type="email" 
                placeholder="Enter your email..." 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={styles.newsletterInputLight} 
              />
              <button type="submit" className={styles.newsletterBtnLight} aria-label="Subscribe">
                {subscribed ? <Check size={16} /> : <ArrowRight size={16} />}
              </button>
            </form>

            {subscribed && (
              <p className={styles.subscribedMsg}>Thank you for subscribing!</p>
            )}

            <div className={styles.vendorBtnWrapper}>
              <Link href="/register-vendor" className={styles.vendorBtn}>
                <span className={styles.vendorBtnCircle} aria-hidden="true">
                  <span className={`${styles.vendorBtnIcon} ${styles.vendorBtnArrow}`} />
                </span>
                <span className={styles.vendorBtnText}>Register as Vendor</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className={styles.footerBottomLight}>
          <div className={styles.footerBottomLeft}>
            <p className={styles.copyrightTextLight}>
              © {new Date().getFullYear()} Vedic Venues · All rights reserved · Made with Vedic Venues
            </p>
          </div>
          <div className={styles.footerBottomRight}>
            <span className={styles.builtText}>Follow us</span>
            <div className={styles.bottomSocials}>
              {/* Globe Icon */}
              <a href="#" className={styles.bottomSocialIcon} aria-label="Website">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </a>
              {/* Instagram Icon (replacing Behance for this context) */}
              <a href="#" className={styles.bottomSocialIcon} aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* Twitter Icon */}
              <a href="#" className={styles.bottomSocialIcon} aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

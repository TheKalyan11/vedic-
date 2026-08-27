'use client';

import { useState } from 'react';
import { PhoneCall } from 'lucide-react';
import styles from './FaqSection.module.css';

const faqs = [
  {
    question: "How do I book a venue on Vedic?",
    answer: "You can easily book a venue by browsing our curated list, selecting your preferred date, and clicking 'Book Now' on the venue's profile page. You can also book a free 15-minute consultation with our experts."
  },
  {
    question: "Are there any hidden fees?",
    answer: "No, we pride ourselves on transparency. The price you see during checkout is the final price, inclusive of all standard taxes and Vedic service charges."
  },
  {
    question: "Can I visit the venue before booking?",
    answer: "Yes! You can schedule a free site visit directly through our platform to explore the venue in person before making your final decision."
  },
  {
    question: "Do you provide catering and decoration services?",
    answer: "Many of our venues offer in-house catering and decor. You can also explore our 'Popular Vendors' section to hire top-rated independent professionals."
  },
  {
    question: "What is your cancellation policy?",
    answer: "Cancellation policies vary by venue. You can view the specific cancellation terms on each venue's dedicated page before confirming your booking."
  },
  {
    question: "Can I customize my wedding package?",
    answer: "Absolutely. Most of our partner venues offer customizable packages to suit your specific guest count, theme, and dietary requirements."
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Column */}
          <div className={styles.leftCol}>
            <div className={styles.badgeWrapper}>
              <span className={styles.dot}></span>
              <span className={styles.badge}>FAQs</span>
            </div>
            
            <h2 className={styles.title}>
              Frequently Asked<br/>Questions
            </h2>
            
            <div className={styles.bookingCard}>
              <div className={styles.avatarGlow}></div>
              <div className={styles.logoWrapper}>
                <img 
                  src="/seondlogo.png" 
                  alt="Vedic Venues Logo" 
                  className={styles.cardLogo} 
                />
              </div>
              <h3 className={styles.cardTitle}>Need Help Finding a Venue?</h3>
              <p className={styles.cardText}>
                Have questions about venues, dates, or vendor packages? Schedule a free 15-minute call with our wedding experts before booking.
              </p>
              <button className={styles.bookButton}>
                <span className={styles.btnIconWrapper}>
                  <PhoneCall size={18} className={styles.phoneIcon} strokeWidth={2.2} />
                </span>
                <span>Book a Free Call!</span>
              </button>
            </div>
          </div>

          {/* Right Column (Accordion) */}
          <div className={styles.rightCol}>
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`${styles.faqItem} ${isOpen ? styles.open : ''}`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <div className={styles.faqHeader}>
                    <h4 className={styles.question}>{faq.question}</h4>
                    <button className={styles.toggleBtn}>
                      {isOpen ? '×' : '+'}
                    </button>
                  </div>
                  {isOpen && (
                    <div className={styles.answerWrapper}>
                      <p className={styles.answer}>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

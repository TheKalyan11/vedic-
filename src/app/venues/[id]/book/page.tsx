'use client';

import React, { useState, use } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '../../../../components/ui/Button';
import styles from './page.module.css';

export default function BookingPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className={styles.successContainer}>
        <div className={styles.successCard}>
          <div className={styles.successIcon}>✨</div>
          <h1 className={styles.successTitle}>Request Submitted</h1>
          <p className={styles.successMessage}>
            Your booking request has been securely transmitted. Our concierge team will review the details and contact you shortly to finalize your reservation.
          </p>
          <Button onClick={() => router.push('/venues')} className={styles.backButton}>
            Return to Collection
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.formCard}>
          <div className={styles.formHeader}>
            <h1 className={styles.title}>Reservation Request</h1>
            <p className={styles.subtitle}>Provide your details below to initiate the booking process. We ensure complete privacy of your information.</p>
          </div>
          
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formSection}>
              <h2 className={styles.sectionTitle}>Contact Details</h2>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" required className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" required className={styles.input} />
                </div>
              </div>
              
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" required className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" required className={styles.input} />
                </div>
              </div>
            </div>

            <div className={styles.formSection}>
              <h2 className={styles.sectionTitle}>Event Details</h2>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="startDate">Start Date</label>
                  <input type="date" id="startDate" required className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="endDate">End Date</label>
                  <input type="date" id="endDate" required className={styles.input} />
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="guests">Estimated Guest Count</label>
                <input type="number" id="guests" min="1" required className={styles.input} />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="notes">Special Requirements or Event Type</label>
                <textarea id="notes" rows={4} className={styles.textarea} placeholder="e.g. Wedding ceremony, specific dietary requirements..."></textarea>
              </div>
            </div>
            
            <div className={styles.actions}>
              <Button type="button" variant="ghost" onClick={() => router.back()}>Cancel</Button>
              <Button type="submit" variant="primary" size="lg" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Processing...' : 'Submit Request'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

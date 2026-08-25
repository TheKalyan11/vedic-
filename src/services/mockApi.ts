import { Venue, Booking } from '../models/types';

const mockVenues: Venue[] = [
  {
    id: 'v1',
    name: 'Ananda Heritage Hall',
    description: 'A beautiful heritage hall with traditional architecture, perfect for spiritual gatherings and weddings.',
    location: 'Rishikesh, Uttarakhand',
    capacity: 500,
    pricePerDay: 25000,
    amenities: ['Catering', 'Parking', 'Audio System', 'Priest Services'],
    imageUrls: ['https://images.unsplash.com/photo-1542038383921-6b22eb01cb95?w=800&q=80'],
    rating: 4.8,
    type: 'Heritage'
  },
  {
    id: 'v2',
    name: 'Vedic Gardens Banquet',
    description: 'Expansive green lawns with a modern banquet hall for large celebrations.',
    location: 'Jaipur, Rajasthan',
    capacity: 1000,
    pricePerDay: 50000,
    amenities: ['Air Conditioning', 'Decor', 'Stage', 'Lighting'],
    imageUrls: ['https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80'],
    rating: 4.9,
    type: 'Banquet'
  },
  {
    id: 'v3',
    name: 'Omkara Ashram Retreat',
    description: 'A serene environment for meditation retreats and intimate ceremonies.',
    location: 'Varanasi, Uttar Pradesh',
    capacity: 100,
    pricePerDay: 10000,
    amenities: ['Accommodation', 'Vegetarian Meals', 'Yoga Hall'],
    imageUrls: ['https://images.unsplash.com/photo-1599839619722-39751411ea63?w=800&q=80'],
    rating: 4.7,
    type: 'Ashram'
  }
];

export const venueService = {
  getVenues: async (): Promise<Venue[]> => {
    // Simulate network delay
    return new Promise((resolve) => setTimeout(() => resolve(mockVenues), 800));
  },
  
  getVenueById: async (id: string): Promise<Venue | undefined> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockVenues.find(v => v.id === id));
      }, 500);
    });
  }
};

export const bookingService = {
  createBooking: async (bookingData: Omit<Booking, 'id' | 'status'>): Promise<Booking> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          ...bookingData,
          id: Math.random().toString(36).substring(7),
          status: 'Pending'
        });
      }, 1000);
    });
  }
};

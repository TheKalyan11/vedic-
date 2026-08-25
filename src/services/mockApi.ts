import { Venue, Booking } from '../models/types';

const mockVenues: Venue[] = [
  {
    id: 'v1',
    name: 'Ananda Grand Banquet Hall',
    description: 'A luxurious air-conditioned banquet hall with royal chandeliers, premium seating, and state-of-the-art stage setup.',
    location: '4517 Sacred Valley, Rishikesh, UK 249201',
    capacity: 600,
    pricePerDay: 135990,
    amenities: ['Central AC', 'Catering', 'Parking', 'Audio System', 'Bridal Suite'],
    imageUrls: ['https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1000&q=80'],
    rating: 4.9,
    type: 'Banquet'
  },
  {
    id: 'v2',
    name: 'Vedic Imperial Marriage Garden & Lawns',
    description: 'Expansive natural green wedding lawns with open-air gazebos, royal lighting, and traditional mandap areas.',
    location: '88 Royal Crest Way, Jaipur, RJ 302001',
    capacity: 1500,
    pricePerDay: 150000,
    amenities: ['Lush Lawns', 'Floral Decor', 'Stage', 'Valet Parking'],
    imageUrls: ['https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1000&q=80'],
    rating: 5.0,
    type: 'Heritage'
  },
  {
    id: 'v3',
    name: 'Omkara Luxury Wedding Resort',
    description: 'A serene 5-star destination wedding resort featuring private villas, pool decks, and scenic banquet halls.',
    location: '108 Ganges Path, Varanasi, UP 221001',
    capacity: 750,
    pricePerDay: 185000,
    amenities: ['Guest Rooms', 'Poolside Deck', 'Vegetarian Kitchen', 'Spa'],
    imageUrls: ['https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1000&q=80'],
    rating: 4.8,
    type: 'Resort'
  },
  {
    id: 'v4',
    name: 'Tirupati Sacred Kalyana Mandapam',
    description: 'Traditional Dravidian sacred mandapam equipped for sacred muhurats, homams, and Vedic wedding rituals.',
    location: '108 Temple Road, Tirupati, AP 517501',
    capacity: 900,
    pricePerDay: 110000,
    amenities: ['Yajnashala', 'Pure Sattvic Dining', 'Guest Accommodation', 'Pooja Setup'],
    imageUrls: ['https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1000&auto=format&fit=crop&q=80'],
    rating: 4.9,
    type: 'Temple'
  },
  {
    id: 'v5',
    name: 'Udaipur Royal Destination Wedding Palace',
    description: 'An iconic lakeside destination palace venue for fairytale luxury weddings with panoramic royal views.',
    location: '42 Heritage Lake Lane, Udaipur, RJ 313001',
    capacity: 1200,
    pricePerDay: 225000,
    amenities: ['Lake View', 'Palace Courtyard', 'Royal Suites', 'Helipad'],
    imageUrls: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1000&q=80'],
    rating: 5.0,
    type: 'Heritage'
  },
  {
    id: 'v6',
    name: 'Vedic Palm Heritage Farmhouse',
    description: 'Exclusive private wedding farmhouse with rustic elegance, open party lawns, and peaceful private suites.',
    location: '77 Farmhouse Boulevard, Delhi NCR 110037',
    capacity: 500,
    pricePerDay: 85000,
    amenities: ['Private Pool', 'Sprawling Lawn', 'Kitchen Setup', 'Audio Setup'],
    imageUrls: ['https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1000&q=80'],
    rating: 4.8,
    type: 'Ashram'
  }
];

export const venueService = {
  getVenues: async (): Promise<Venue[]> => {
    return new Promise((resolve) => setTimeout(() => resolve(mockVenues), 600));
  },
  
  getVenueById: async (id: string): Promise<Venue | undefined> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockVenues.find(v => v.id === id));
      }, 400);
    });
  }
};

export const bookingService = {
  createBooking: async (bookingData: Omit<Booking, 'id' | 'status'>): Promise<Booking> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newBooking: Booking = {
          ...bookingData,
          id: `b_${Date.now()}`,
          status: 'Confirmed'
        };
        resolve(newBooking);
      }, 800);
    });
  }
};

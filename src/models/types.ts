export interface Venue {
  id: string;
  name: string;
  description: string;
  location: string;
  capacity: number;
  pricePerDay: number;
  amenities: string[];
  imageUrls: string[];
  rating: number;
  type: 'Temple' | 'Banquet' | 'Ashram' | 'Resort' | 'Heritage';
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
}

export interface Booking {
  id: string;
  venueId: string;
  userId: string;
  startDate: string;
  endDate: string;
  status: 'Pending' | 'Confirmed' | 'Cancelled';
  totalAmount: number;
}

# Vedic Venues - India's Favourite Venue & Event Planning Platform

A luxury Vedic and Indian wedding, sacred ceremonies, and venue discovery platform built with **Next.js (App Router)**, **TypeScript**, and **Pure CSS Modules**.

---

## ✨ Features

- **Dual-Navigation Bar Experience**:
  - **Top Bar**: Fixed saffron bar with interactive Location selector (searchable multi-column city modal) and animated actions (*Write a Review*, *Download App*).
  - **Main Bar**: Smooth scroll-triggered transition from solid white to a floating liquid-glass capsule with zero compression of layout elements.
- **Interactive Mega Dropdowns**:
  - **Venues Dropdown**: Categorized by *Type* (Banquet Halls, Lawns, Resorts, Kalyana Mandapams, Luxury Hotels, Birthday Celebrations, Annaprashan), *City*, and a 6-card photo grid of iconic temple destinations (Vrindavan Chandrodaya Mandir, Rishikesh, Varanasi, Tirupati, Jaipur, Puri).
  - **Vendors Dropdown**: 4-column mega dropdown covering Photographers, Makeup with Vedic Service tags, Planning & Decor, Virtual Planning, Mehndi, Music & Dance, Invites & Gifts, Catering/Food, Bridal/Groom Wear, Jewellery, and Vedic Pandits.
- **Centralized Configuration**:
  - All contact numbers, addresses, navigation links, and dropdown structures are centrally defined in `src/config/constants.ts`.
- **Pages & Flows**:
  - **Home (`/`)**: Hero search, featured luxury properties, Vedic philosophy, and testimonials.
  - **Venues Explorer (`/venues`)**: Dynamic search, filters, pricing tags, and verified badges.
  - **Venue Details (`/venues/[id]`)**: Full image galleries, pricing, capacity, and enquiry forms.
  - **Booking Flow (`/venues/[id]/book`)**: Clean booking and sacred ceremony scheduling.
  - **Persistent Floating WhatsApp**: Direct WhatsApp concierge access wired to configuration.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Tech Stack
- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Pure CSS Modules with Global Custom Properties & Liquid-Glass Design Tokens
- **Icons**: Inline SVG icons optimized for high performance

---

## 📄 License
MIT License

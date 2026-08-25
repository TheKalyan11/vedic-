export const APP_CONFIG = {
  // Contact Information
  contact: {
    whatsappNumber: '+919876543210',
    whatsappMessage: 'Hari Om! I am interested in booking a venue. Can we talk?',
    email: 'namaste@vedicvenues.com',
    phone: '+91 98765 43210',
    address: '108 Sacred Path, Near Triveni Ghat, Rishikesh, Uttarakhand 249201, India',
  },
  
  // Layout & UI configuration (logical constants)
  layout: {
    maxWidth: '1200px',
  },

  // Navigation Links
  navigation: {
    topBar: {
      tagline: "India's Favourite Venue Planning Platform",
      defaultLocation: "Hyderabad",
      locationCategories: [
        {
          title: "Top Cities",
          cities: ["All Cities", "Delhi NCR", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Jaipur", "Pune", "Lucknow"]
        },
        {
          title: "Popular Cities",
          cities: ["Gurgaon", "Goa", "Udaipur", "Jim Corbett", "Chandigarh", "Rishikesh", "Agra", "Ahmedabad", "Kochi", "Lonavala"]
        },
        {
          title: "Other Cities",
          cities: ["Nagpur", "Thane", "Surat", "Patna", "Raipur", "Coimbatore", "Varanasi", "Gwalior", "Indore", "Dehradun"]
        },
        {
          title: "States",
          cities: ["Kerala", "Rajasthan", "Himachal Pradesh", "Maharashtra"]
        },
        {
          title: "International Cities",
          cities: ["Thailand", "Sri Lanka", "Bali", "Vietnam"]
        }
      ],
      actions: [
        { label: 'Write A Review', href: '/review', icon: 'review' },
        { label: 'Download App', href: '/app', icon: 'app' },
      ]
    },
    mainMenu: [
      { label: 'Venues', href: '/venues', dropdownType: 'venues' },
      { label: 'Vendors', href: '/vendors', dropdownType: 'vendors' },
      { label: 'Photos', href: '/photos' },
      { label: 'Real Weddings', href: '/real-weddings' },
      { label: 'Blog', href: '/blog' },
      { label: 'E-Invites', href: '/invites' },
      { label: 'Genie', href: '/genie' },
    ],
    venuesDropdown: {
      byType: [
        { label: 'Banquet Halls', href: '/venues?type=banquet' },
        { label: 'Marriage Garden / Lawns', href: '/venues?type=lawns' },
        { label: 'Wedding Resorts', href: '/venues?type=resorts' },
        { label: 'Small Function / Party Halls', href: '/venues?type=small-party' },
        { label: 'Destination Wedding Venues', href: '/venues?type=destination' },
        { label: 'Kalyana Mandapams', href: '/venues?type=mandapams' },
        { label: 'Luxury Hotels', href: '/venues?type=luxury-hotels' },
        { label: 'Birthday Celebration', href: '/venues?type=birthday' },
        { label: 'Annaprashan', href: '/venues?type=annaprashan' },
        { label: 'Wedding Farmhouses', href: '/venues?type=farmhouses' },
        { label: 'View all Venues', href: '/venues', isBold: true },
      ],
      byCity: [
        { label: 'Mumbai', href: '/venues?city=Mumbai' },
        { label: 'Bangalore', href: '/venues?city=Bangalore' },
        { label: 'Pune', href: '/venues?city=Pune' },
        { label: 'Kolkata', href: '/venues?city=Kolkata' },
        { label: 'Jaipur', href: '/venues?city=Jaipur' },
        { label: 'Lucknow', href: '/venues?city=Lucknow' },
        { label: 'Hyderabad', href: '/venues?city=Hyderabad' },
        { label: 'More', href: '/venues', isBold: true },
      ],
      destinationsTitle: 'Temple & Destination Venues',
      destinations: [
        {
          name: 'Vrindavan',
          tag: 'Chandrodaya Mandir',
          image: '/destinations/vrindavan.jpg',
          href: '/venues?destination=Vrindavan'
        },
        {
          name: 'Rishikesh',
          tag: 'Ganga Ghats & Mandir',
          image: '/destinations/rishikesh.jpg',
          href: '/venues?destination=Rishikesh'
        },
        {
          name: 'Varanasi',
          tag: 'Kashi Vishwanath',
          image: '/destinations/varanasi.jpg',
          href: '/venues?destination=Varanasi'
        },
        {
          name: 'Tirupati',
          tag: 'Kalyana Mandapam',
          image: '/destinations/tirupati.jpg',
          href: '/venues?destination=Tirupati'
        },
        {
          name: 'Jaipur',
          tag: 'Govind Dev Ji Heritage',
          image: '/destinations/jaipur.jpg',
          href: '/venues?destination=Jaipur'
        },
        {
          name: 'Puri',
          tag: 'Jagannath Sacred Coast',
          image: '/destinations/puri.jpg',
          href: '/venues?destination=Puri'
        }
      ]
    },
    vendorsDropdown: {
      columns: [
        {
          sections: [
            {
              title: 'Photographers',
              items: [
                { label: 'Photographers', href: '/vendors?category=photographers' }
              ]
            },
            {
              title: 'Makeup',
              items: [
                { label: 'Bridal Makeup Artists', href: '/vendors?category=bridal-makeup' },
                { label: 'Family Makeup', href: '/vendors?category=family-makeup', badge: 'VEDIC SERVICE' }
              ]
            },
            {
              title: 'Planning & Decor',
              items: [
                { label: 'Wedding Planners', href: '/vendors?category=wedding-planners' },
                { label: 'Decorators', href: '/vendors?category=decorators' }
              ]
            },
            {
              title: 'Virtual Planning',
              items: [
                { label: 'Virtual planning', href: '/vendors?category=virtual-planning', badge: 'VEDIC SERVICE' }
              ]
            },
            {
              title: 'Mehndi',
              items: [
                { label: 'Mehendi Artists', href: '/vendors?category=mehndi' }
              ]
            }
          ]
        },
        {
          sections: [
            {
              title: 'Music & Dance',
              items: [
                { label: 'DJs', href: '/vendors?category=djs' },
                { label: 'Sangeet Choreographer', href: '/vendors?category=choreographers' },
                { label: 'Wedding Entertainment', href: '/vendors?category=entertainment' }
              ]
            },
            {
              title: 'Invites & Gifts',
              items: [
                { label: 'Invitations', href: '/vendors?category=invitations' },
                { label: 'Favors', href: '/vendors?category=favors' },
                { label: 'Trousseau Packers', href: '/vendors?category=trousseau' },
                { label: 'Invitation Gifts', href: '/vendors?category=invitation-gifts' },
                { label: 'Mehndi Favors', href: '/vendors?category=mehndi-favors' },
                { label: 'View All Invites & Gifts', href: '/vendors?category=invites-gifts', isBold: true }
              ]
            },
            {
              title: 'Food',
              items: [
                { label: 'Catering Services', href: '/vendors?category=catering' },
                { label: 'Cake', href: '/vendors?category=cakes' },
                { label: 'Chaat & Food Stalls', href: '/vendors?category=food-stalls' },
                { label: 'Bartenders', href: '/vendors?category=bartenders' },
                { label: 'View All Food', href: '/vendors?category=food', isBold: true }
              ]
            }
          ]
        },
        {
          sections: [
            {
              title: 'Pre Wedding Shoot',
              items: [
                { label: 'Pre Wedding Shoot Locations', href: '/vendors?category=pre-wedding-locations' },
                { label: 'Pre Wedding Photographers', href: '/vendors?category=pre-wedding-photographers' }
              ]
            },
            {
              title: 'Bridal Wear',
              items: [
                { label: 'Bridal Lehengas', href: '/vendors?category=bridal-lehengas' },
                { label: 'Kanjeevaram / Silk Sarees', href: '/vendors?category=silk-sarees' },
                { label: 'Cocktail Gowns', href: '/vendors?category=cocktail-gowns' },
                { label: 'Trousseau Sarees', href: '/vendors?category=trousseau-sarees' },
                { label: 'Bridal Lehenga on Rent', href: '/vendors?category=bridal-lehenga-rent' },
                { label: 'View All Bridal Wear', href: '/vendors?category=bridal-wear', isBold: true }
              ]
            },
            {
              title: 'Groom Wear',
              items: [
                { label: 'Sherwani', href: '/vendors?category=sherwani' },
                { label: 'Wedding Suits / Tuxes', href: '/vendors?category=wedding-suits' },
                { label: 'Sherwani On Rent', href: '/vendors?category=sherwani-rent' },
                { label: 'View All Groom Wear', href: '/vendors?category=groom-wear', isBold: true }
              ]
            }
          ]
        },
        {
          sections: [
            {
              title: 'Jewellery & Accessories',
              items: [
                { label: 'Jewellery', href: '/vendors?category=jewellery' },
                { label: 'Flower Jewellery', href: '/vendors?category=flower-jewellery' },
                { label: 'Bridal Jewellery on Rent', href: '/vendors?category=bridal-jewellery-rent' },
                { label: 'Accessories', href: '/vendors?category=accessories' },
                { label: 'View All Jewellery & Accessories', href: '/vendors?category=jewellery-accessories', isBold: true }
              ]
            },
            {
              title: 'Pandits',
              items: [
                { label: 'Wedding Pandits', href: '/vendors?category=pandits' }
              ]
            },
            {
              title: 'Bridal Grooming',
              items: [
                { label: 'Beauty and Wellness', href: '/vendors?category=grooming' }
              ]
            }
          ]
        }
      ]
    }
  }
};

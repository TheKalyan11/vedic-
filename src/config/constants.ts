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
      { label: 'Weddings', href: '/real-weddings', dropdownType: 'weddings' },
      { label: 'Photos', href: '/photos', dropdownType: 'photos' },
      { label: 'E-Invites', href: '/invites', dropdownType: 'invites' },
      { label: 'Blog', href: '/blog', dropdownType: 'blog' },
      { label: 'Genie', href: '/genie', dropdownType: 'genie' },
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
    },
    weddingsDropdown: {
      byCity: [
        { label: 'Mumbai', href: '/real-weddings?city=Mumbai' },
        { label: 'Bangalore', href: '/real-weddings?city=Bangalore' },
        { label: 'Pune', href: '/real-weddings?city=Pune' },
        { label: 'Kolkata', href: '/real-weddings?city=Kolkata' },
        { label: 'Jaipur', href: '/real-weddings?city=Jaipur' },
        { label: 'Others', href: '/real-weddings', isBold: true },
      ],
      byCulture: [
        { label: 'Maharashtrian', href: '/real-weddings?culture=Maharashtrian' },
        { label: 'Punjabi / Sikh', href: '/real-weddings?culture=Punjabi-Sikh' },
        { label: 'Bengali', href: '/real-weddings?culture=Bengali' },
        { label: 'Gujarati', href: '/real-weddings?culture=Gujarati' },
        { label: 'Marwari', href: '/real-weddings?culture=Marwari' },
        { label: 'Telugu', href: '/real-weddings?culture=Telugu' },
        { label: 'Others', href: '/real-weddings', isBold: true },
      ],
      byTheme: [
        { label: 'Destination', href: '/real-weddings?theme=Destination' },
        { label: 'Grand & Luxurious', href: '/real-weddings?theme=Grand-Luxurious' },
        { label: 'Pocket Friendly Stunners', href: '/real-weddings?theme=Pocket-Friendly' },
        { label: 'Intimate & Minimalist', href: '/real-weddings?theme=Intimate-Minimalist' },
        { label: 'Modern & Stylish', href: '/real-weddings?theme=Modern-Stylish' },
        { label: 'International', href: '/real-weddings?theme=International' },
        { label: 'Others', href: '/real-weddings', isBold: true },
      ],
      latestWeddingsTitle: 'Latest Real Weddings',
      latestWeddings: [
        {
          title: 'Nireeksha and Dhananjay (Bangalore)',
          image: '/weddings/wedding1.jpg',
          href: '/real-weddings/nireeksha-dhananjay'
        },
        {
          title: 'Deepshikha and Saiteej (Delhi NCR)',
          image: '/weddings/wedding2.jpg',
          href: '/real-weddings/deepshikha-saiteej'
        }
      ]
    },
    photosDropdown: {
      columns: [
        {
          sections: [
            {
              title: 'Outfit',
              items: [
                { label: 'Bridal Lehenga', href: '/photos?category=bridal-lehenga' },
                { label: 'Wedding Sarees', href: '/photos?category=wedding-sarees' },
                { label: 'Engagement', href: '/photos?category=engagement-outfit' },
                { label: 'Mehndi', href: '/photos?category=mehndi-outfit' },
                { label: 'Blouse Designs', href: '/photos?category=blouse-designs' },
                { label: 'More', href: '/photos?category=outfit', isBold: true }
              ]
            },
            {
              title: 'Jewellery & Accessories',
              items: [
                { label: 'Bridal Jewellery', href: '/photos?category=bridal-jewellery' },
                { label: 'Engagement Rings', href: '/photos?category=engagement-rings' },
                { label: 'Floral Jewellery', href: '/photos?category=floral-jewellery' },
                { label: 'More', href: '/photos?category=jewellery', isBold: true }
              ]
            },
            {
              title: 'Mehndi',
              items: [
                { label: 'Arabic', href: '/photos?category=arabic-mehndi' },
                { label: 'Mehndi Designs', href: '/photos?category=mehndi-designs' },
                { label: 'Simple', href: '/photos?category=simple-mehndi' },
                { label: 'Unique', href: '/photos?category=unique-mehndi' },
                { label: 'More', href: '/photos?category=mehndi', isBold: true }
              ]
            }
          ]
        },
        {
          sections: [
            {
              title: 'Decor & Ideas',
              items: [
                { label: 'Wedding Decor', href: '/photos?category=wedding-decor' },
                { label: 'Bridal Entry', href: '/photos?category=bridal-entry' },
                { label: 'Groom Entry', href: '/photos?category=groom-entry' },
                { label: 'Wedding Games', href: '/photos?category=wedding-games' },
                { label: 'More', href: '/photos?category=decor', isBold: true }
              ]
            },
            {
              title: 'Wedding Card Designs',
              items: [
                { label: 'Designs', href: '/photos?category=card-designs' },
                { label: 'Wedding Gifts', href: '/photos?category=wedding-gifts' },
                { label: 'Wedding Invitations', href: '/photos?category=wedding-invitations' },
                { label: 'More', href: '/photos?category=invitations', isBold: true }
              ]
            },
            {
              title: 'Wedding Photography',
              items: [
                { label: 'Pre Wedding Shoot', href: '/photos?category=pre-wedding-shoot' },
                { label: 'Wedding', href: '/photos?category=wedding-photography' },
                { label: 'Wedding Photoshoot & Poses', href: '/photos?category=wedding-poses' },
                { label: 'More', href: '/photos?category=photography', isBold: true }
              ]
            }
          ]
        },
        {
          sections: [
            {
              title: 'Groom Wear',
              items: [
                { label: 'Sherwani for Groom', href: '/photos?category=sherwani-groom' },
                { label: 'Wedding Suits for Groom', href: '/photos?category=suits-groom' },
                { label: 'More', href: '/photos?category=groom-wear', isBold: true }
              ]
            },
            {
              title: 'Bridal Makeup & Hair',
              items: [
                { label: 'Bridal Makeup', href: '/photos?category=bridal-makeup' },
                { label: 'Bridal Hairstyles', href: '/photos?category=bridal-hairstyles' },
                { label: 'Engagement', href: '/photos?category=engagement-makeup' },
                { label: 'Mehndi', href: '/photos?category=mehndi-makeup' },
                { label: 'More', href: '/photos?category=makeup-hair', isBold: true }
              ]
            }
          ]
        }
      ]
    },
    invitesDropdown: {
      columns: [
        {
          sections: [
            {
              title: 'Wedding Invitation Maker',
              items: [
                { label: 'Wedding Card Designs', href: '/invites?type=cards' },
                { label: 'Invitation Video Templates', href: '/invites?type=video-templates' },
                { label: 'Save the Date Templates', href: '/invites?type=save-the-date' },
                { label: 'Digital WhatsApp Invites', href: '/invites?type=whatsapp-invites' },
                { label: 'View All E-Invites', href: '/invites', isBold: true }
              ]
            }
          ]
        },
        {
          sections: [
            {
              title: 'Invitation Styles',
              items: [
                { label: 'Traditional Vedic Invites', href: '/invites?style=vedic' },
                { label: 'Royal Rajasthani Scrolls', href: '/invites?style=royal' },
                { label: 'Floral & Botanical Themes', href: '/invites?style=floral' },
                { label: 'Modern Minimalist E-Cards', href: '/invites?style=minimal' },
                { label: 'Explore All Styles', href: '/invites?style=all', isBold: true }
              ]
            }
          ]
        },
        {
          sections: [
            {
              title: 'Ceremonial Stationery',
              items: [
                { label: 'Engagement Invites', href: '/invites?ceremony=engagement' },
                { label: 'Mehndi & Sangeet Cards', href: '/invites?ceremony=sangeet' },
                { label: 'Haldi & Pooja Invites', href: '/invites?ceremony=haldi' },
                { label: 'Annaprashan Ceremony Cards', href: '/invites?ceremony=annaprashan' },
                { label: 'Birthday E-Invites', href: '/invites?ceremony=birthday' }
              ]
            }
          ]
        },
        {
          sections: [
            {
              title: 'Custom Design Concierge',
              items: [
                { label: 'Custom Video Animation', href: '/invites?custom=video', badge: 'POPULAR' },
                { label: 'Custom Vedic Caricature', href: '/invites?custom=caricature' },
                { label: 'Print + Digital Combo Box', href: '/invites?custom=combo' },
                { label: 'Talk to Invite Designer', href: '/invites/contact', isBold: true }
              ]
            }
          ]
        }
      ]
    },
    blogDropdown: {
      columns: [
        {
          sections: [
            {
              title: 'Planning & Advice',
              items: [
                { label: 'Wedding Planning Checklist', href: '/blog?cat=planning' },
                { label: 'Budget Planning Guides', href: '/blog?cat=budget' },
                { label: 'Vedic Wedding Rituals Explained', href: '/blog?cat=vedic-rituals' },
                { label: 'Muhurat & Auspicious Dates', href: '/blog?cat=muhurat' },
                { label: 'View All Advice', href: '/blog?cat=all-advice', isBold: true }
              ]
            }
          ]
        },
        {
          sections: [
            {
              title: 'Fashion & Beauty',
              items: [
                { label: 'Bridal Lehenga Trends', href: '/blog?cat=bridal-trends' },
                { label: 'Jewellery Styling Tips', href: '/blog?cat=jewellery-tips' },
                { label: 'Groom Fashion Guides', href: '/blog?cat=groom-fashion' },
                { label: 'Bridal Skincare Routines', href: '/blog?cat=skincare' },
                { label: 'View All Trends', href: '/blog?cat=all-trends', isBold: true }
              ]
            }
          ]
        },
        {
          sections: [
            {
              title: 'Themes & Decor',
              items: [
                { label: 'Temple & Heritage Decors', href: '/blog?cat=heritage-decor' },
                { label: 'Minimalist Mandap Ideas', href: '/blog?cat=mandap-ideas' },
                { label: 'Eco-Friendly Weddings', href: '/blog?cat=eco-weddings' },
                { label: 'Floral Stage Inspirations', href: '/blog?cat=floral-stage' },
                { label: 'View All Decor Guides', href: '/blog?cat=all-decor', isBold: true }
              ]
            }
          ]
        },
        {
          sections: [
            {
              title: 'Real Stories',
              items: [
                { label: 'Celebrity Wedding Highlights', href: '/blog?cat=celebrity' },
                { label: 'Destination Wedding Experiences', href: '/blog?cat=destination-stories' },
                { label: 'Budget-Friendly Success Stories', href: '/blog?cat=real-stories' },
                { label: 'Submit Your Wedding Story', href: '/blog/submit', isBold: true }
              ]
            }
          ]
        }
      ]
    },
    genieDropdown: {
      title: 'Vedic Genie - Your Personal Wedding & Venue Concierge',
      subtitle: 'Free expert assistance from dedicated venue coordinators & smart planning tools',
      services: [
        {
          title: 'Venue Recommendation Engine',
          desc: 'Get matched with top-rated Vedic temples, luxury hotels & lawns within your budget.',
          badge: 'AI POWERED',
          href: '/genie?service=venues'
        },
        {
          title: 'Dedicated Event Concierge',
          desc: 'Direct consultation with seasoned venue experts to negotiate best pricing.',
          badge: 'VEDIC EXPERT',
          href: '/genie?service=concierge'
        },
        {
          title: 'Budget & Guest Estimator',
          desc: 'Accurately plan expenses for catering, decor, rituals, photography and stays.',
          badge: 'FREE TOOL',
          href: '/genie?service=calculator'
        },
        {
          title: 'Auspicious Muhurat Finder',
          desc: 'Discover verified Vedic shubh muhurat dates and timings for sacred nuptials.',
          badge: 'VEDIC ASTRO',
          href: '/genie?service=muhurat'
        }
      ]
    }
  }
};

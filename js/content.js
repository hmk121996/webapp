/**
 * ╔══════════════════════════════════════════════════════════════╗
 *   HOTEL MOUNT KAILASH — WEBSITE CONTENT & PRICES
 *   ─────────────────────────────────────────────────────────────
 *   THIS IS THE ONLY FILE YOU NEED TO EDIT.
 *
 *   ✅  enabled: true  → shows the item on the website
 *   ❌  enabled: false → hides the item (keeps it saved for later)
 *
 *   After saving this file, refresh the browser to see changes.
 * ╚══════════════════════════════════════════════════════════════╝
 */

const SITE = {


  // ══════════════════════════════════════════════════════════════
  //  1.  HOTEL INFO  (phone, address, social links, footer text)
  // ══════════════════════════════════════════════════════════════
  hotel: {
    name:        "Hotel Mount Kailash",
    phone:       "+91 94185 45319",
    whatsapp:    "919418545319",           // country code + number, no spaces
    address:     "Sangla, Kinnaur, Himachal Pradesh, India",
    facebook:    "https://www.facebook.com/Hotel-Mount-Kailash-Sangla-100139412365009/",
    instagram:   "https://www.instagram.com/hotel_mount_kailash/",
    footerAbout: "Luxury mountain accommodation in the heart of Sangla Valley, Himachal Pradesh, offering spectacular views and unparalleled comfort.",
    copyright:   "© 2025 Hotel Mount Kailash. All Rights Reserved."
  },


  // ══════════════════════════════════════════════════════════════
  //  2.  HOME PAGE TEXT
  // ══════════════════════════════════════════════════════════════
  home: {
    hero: {
      heading: "Experience Luxury in the Heart of Himalayas",
      subtext:  "Discover unparalleled comfort and spectacular views at Hotel Mount Kailash in Sangla Valley"
    },
    welcome: {
      paragraph1: "Nestled in the pristine Sangla Valley, Hotel Mount Kailash offers a unique blend of luxury and natural beauty. Our hotel stands against the breathtaking backdrop of the Himalayan ranges, providing guests with an unforgettable mountain retreat experience.",
      paragraph2: "With traditional architecture that honors local heritage and modern amenities that ensure your comfort, we invite you to discover the perfect harmony of nature and luxury."
    },
    cta: {
      heading: "Ready for an Unforgettable Mountain Getaway?",
      text:    "Book your stay now and discover the beauty of Sangla Valley from the comfort of Hotel Mount Kailash."
    }
  },


  // ══════════════════════════════════════════════════════════════
  //  3.  ROOMS
  //      • Change "price" to update room rates
  //      • Change "name" / "shortDesc" / "longDesc" for text
  //      • Set "enabled: true/false" on each feature to
  //        show or hide it on the Rooms page
  // ══════════════════════════════════════════════════════════════
  rooms: [

    // ── ROOM 1 ──────────────────────────────────────────────────
    {
      id:       "deluxe",
      name:     "Deluxe Room",
      price:    "₹2,500",            // ← change price here
      // First image = used on Home page card + main image on Rooms page
      // Add up to 5–6 images. Remove a line to use fewer.
      // Replace files in the /img folder using the same filenames.
      images: [
        "room1.jpeg",
        "room1-1.jpeg",
        // "room1-2.jpg",
        // "room1-3.jpg",
        // "room1-4.jpg",
        // "room1-5.jpg",
      ],
      shortDesc: "Spacious room with mountain views, perfect for couples or solo travelers.",
      longDesc: [
        "Our spacious Deluxe Rooms offer the perfect blend of comfort and mountain charm. Each room features a private balcony with stunning views of the Sangla Valley, allowing you to wake up to the breathtaking sight of snow-capped peaks.",
        "With elegant décor inspired by traditional Kinnauri aesthetics and modern amenities, these rooms provide a cozy retreat after a day of exploring."
      ],
      // ── FEATURES  (set enabled: false to hide any feature) ───
      features: [
        { icon: "fa-mountain",          label: "Mountain View",        enabled: true  },
        { icon: "fa-chair", label: "Private Balconey",          enabled: true  },
        { icon: "fa-wifi",              label: "Free WiFi",            enabled: true  },
        { icon: "fa-bed",               label: "King bed",    enabled: true  },
        { icon: "fa-user-friends",      label: "Sleeps 2",             enabled: false  },
        { icon: "fa-snowflake",         label: "Climate Control",      enabled: false  },
        { icon: "fa-tv",                label: "TV",       enabled: true  },
        { icon: "fa-mug-hot",            label: "Electric Kettle",     enabled: true  },
        { icon: "fa-bath",              label: "Private Bathroom",     enabled: true  },
        { icon: "fa-concierge-bell",    label: "Room Service",         enabled: true  }
      ]
    },

    // ── ROOM 2 ──────────────────────────────────────────────────
    {
      id:       "premium",
      name:     "Super Deluxe Room",
      price:    "₹3,500",
      images: [
        "room2.jpeg",
        "room2-1.jpeg",
        "room2-2.jpeg",
        "room2-3.jpeg",
        "room2-4.jpeg",
        // "room2-2.jpg",
        // "room2-3.jpg",
        // "room2-4.jpg",
        // "room2-5.jpg",
      ],
      shortDesc: "Luxurious suite with panoramic views, separate living area and premium amenities.",
      longDesc: [
        "Our Premium Suites offer a luxurious retreat with panoramic views of the Himalayas. Featuring a separate living area and bedroom, these spacious suites are perfect for guests seeking extra comfort and privacy.",
        "Each suite is elegantly furnished with premium fabrics, local artworks, and thoughtful amenities to ensure a truly indulgent mountain stay."
      ],
      features: [
        { icon: "fa-mountain",          label: "Mountain View",       enabled: true  },
        { icon: "fa-expand-arrows-alt", label: "Spacious Room",          enabled: true  },
        { icon: "fa-chair", label: "Private Balconey",          enabled: true  },
        { icon: "fa-bed",               label: "King Bed",             enabled: true  },
        { icon: "fa-couch",             label: "Separate Living Area", enabled: false  },
        { icon: "fa-user-friends",      label: "Sleeps 2",             enabled: false },
        { icon: "fa-wifi",              label: "Free WiFi",            enabled: true  },
        { icon: "fa-snowflake",         label: "Climate Control",      enabled: false },
        { icon: "fa-tv",                label: "TV",    enabled: true  },
        { icon: "fa-utensils",          label: "Dining Area",          enabled: false  },
        { icon: "fa-mug-hot",            label: "Espresso Machine",     enabled: false  },
        { icon: "fa-mug-hot",            label: "Electric Kettle",     enabled: true  },
        { icon: "fa-bath",              label: "Private Bathroom",     enabled: true  },
        { icon: "fa-concierge-bell",    label: "Room Service",         enabled: true  }
      ]
    },

    // ── ROOM 3 ──────────────────────────────────────────────────
    {
      id:       "family",
      name:     "Suite Room",
      price:    "₹7,000",
      images: [
        "room3.jpeg",
        "room3-1.jpeg",
        "room3-2.jpeg",
        "room3-3.jpeg",
        // "room3-2.jpg",
        // "room3-3.jpg",
        // "room3-4.jpg",
        // "room3-5.jpg",
      ],
      shortDesc: "Spacious accommodation ideal for families with multiple bedrooms and living space.",
      longDesc: [
        "Perfect for families or groups, our Family Suites offer generous space with two bedrooms, a common living area, and a private terrace overlooking the valley. The master bedroom features a king-sized bed, while the second bedroom comes with twin beds.",
        "These suites are thoughtfully designed to provide both togetherness and privacy, making them ideal for memorable family vacations in the mountains."
      ],
      features: [
        { icon: "fa-mountain",          label: "Mountain View",          enabled: true  },
        { icon: "fa-tree", label: "Fully Wooden Interiors",          enabled: true  },
        { icon: "fa-utensils",          label: "Dining Area",          enabled: true  },
        { icon: "fa-bed",               label: "King Bed ", enabled: true  },
        { icon: "fa-door-open",         label: "2 Bedrooms",           enabled: false  },
        { icon: "fa-couch",             label: "Living Room",          enabled: false  },
        { icon: "fa-user-friends",      label: "Sleeps 4–5",           enabled: false  },
        { icon: "fa-wifi",              label: "Free WiFi",            enabled: true  },
        { icon: "fa-snowflake",         label: "Climate Control",      enabled: false  },
        { icon: "fa-tv",                label: "TV",         enabled: true  },
        { icon: "fa-mug-hot",            label: "Electric Kettle",          enabled: true  },
        { icon: "fa-bath",              label: "Private Bathroom",     enabled: true  },
        { icon: "fa-concierge-bell",    label: "Room Service",         enabled: true  }
      ]
    }

  ],


  // ══════════════════════════════════════════════════════════════
  //  4.  STANDARD AMENITIES  (Rooms page — "What's in every room")
  //      Set enabled: false on any item to remove it.
  // ══════════════════════════════════════════════════════════════
  amenities: [
    {
      category: "Comfort",
      icon: "fa-bed",
      items: [
        { label: "Premium Mattresses",   enabled: true  },
        { label: "Luxury Linens",        enabled: true  },
        { label: "Fully ",        enabled: true  },
        { label: "Blackout Curtains",    enabled: false  },
        { label: "Climate Control",      enabled: false },
        { label: "Soundproofed Rooms",   enabled: false }
      ]
    },
    {
      category: "Bathroom",
      icon: "fa-bath",
      items: [
        { label: "Walk-in Shower",       enabled: true  },
        { label: "Signature Toiletries", enabled: true  },
        { label: "Hairdryer",            enabled: true  },
        { label: "Slippers",  enabled: true  },
        { label: "Heated Floors",        enabled: false }
      ]
    },
    {
      category: "Entertainment",
      icon: "fa-tv",
      items: [
        { label: "TV",       enabled: true  },
        { label: "Satellite Channels",   enabled: true  },
        { label: "High-speed WiFi",      enabled: true  },
        { label: "Charging Ports",   enabled: true  },
        { label: "Bluetooth Speakers",   enabled: false }
      ]
    },
    {
      category: "Services",
      icon: "fa-concierge-bell",
      items: [
        { label: "18hr Room Service",    enabled: true  },
        { label: "Daily Housekeeping",   enabled: true  },
        { label: "Laundry Service",      enabled: true  },
        { label: "Turn-down Service",    enabled: false },
        { label: "Concierge Assistance", enabled: false  }
      ]
    }
  ],


  // ══════════════════════════════════════════════════════════════
  //  5.  IN-HOUSE FEATURES  (Home page highlights section)
  //      Set enabled: false to hide a feature card.
  // ══════════════════════════════════════════════════════════════
  features: [
    {
      icon:        "fa-utensils",
      title:       "Restaurant",
      description: "Enjoy traditional Himachali cuisine and international dishes made with locally sourced ingredients.",
      enabled:     true
    },
    {
      icon:        "fa-mountain",
      title:       "Mountain Views",
      description: "Wake up to breathtaking views of snow-capped peaks and lush valleys from every room.",
      enabled:     true
    },
    {
      icon:        "fa-car",
      title:       "Parking Space",
      description: "Drive-in Property, Ample private parking space.",
      enabled:     true
    },
    {
      icon:        "fa-fire",
      title:       "Bon Fire",
      description: "Unwind under the starry mountain sky with a warm bonfire, and the quiet charm of the Himalayas.",
      enabled:     true
    }
  ],


  // ══════════════════════════════════════════════════════════════
  //  6.  GUEST TESTIMONIALS
  //      Set enabled: false to hide a review.
  // ══════════════════════════════════════════════════════════════
  testimonials: [
    {
      text:     "Me and my friend joy had a very fun times in this hotel, the view was breathtaking and I surely wish to stay here again",
      author:   "Jeremy Withak",
      location: "United Kingdom",
      enabled:  true
    },
    {
      text:     "Very nice hotel with excellent food and service.",
      author:   "Sanjay Das",
      location: "Delhi, India",
      enabled:  true
    },
    {
      text:     "An incredible experience that connected us with nature while enjoying premium service. The local cuisine served at the restaurant was exceptional.",
      author:   "Ananya Singh",
      location: "Mumbai",
      enabled:  true
    }
  ],


  // ══════════════════════════════════════════════════════════════
  //  7.  ABOUT PAGE
  // ══════════════════════════════════════════════════════════════
  about: {
    story: {
      heading:    "Inspired by Nature",
      paragraph1: "Established in 1996, Hotel Mount Kailash is the oldest and most enduring retreat in the heart of Sangla Valley. Nestled in a prime location, the hotel offers breathtaking panoramic views of the majestic Kinner Kailash, lush pine forests, the quaint Kamru village, and a serene monastery.",
      paragraph2: "Blending timeless Himalayan charm with modern comforts, Hotel Mount Kailash invites you to experience a slower, more graceful way of life. Step back, unwind, and make your holiday truly memorable in the tranquil embrace of the mountains."
    },
    philosophy: [
      { icon: "fa-leaf",          title: "Sustainable Practices", description: "We are committed to minimizing our environmental footprint through energy-efficient operations, waste reduction, and responsible sourcing.",                            enabled: true },
      { icon: "fa-hands-helping", title: "Community Support",     description: "We actively engage with and support the local community through employment opportunities and partnerships with local artisans and suppliers.",                          enabled: true },
      { icon: "fa-heart",         title: "Authentic Experiences", description: "We curate experiences that authentically showcase the rich cultural heritage and natural beauty of Sangla Valley.",                                                      enabled: true },
      { icon: "fa-star",          title: "Excellence in Service", description: "We strive for excellence in every interaction, ensuring that each guest leaves with cherished memories and a desire to return.",                                          enabled: true }
    ],
    // ── TEAM MEMBERS ────────────────────────────────────────────
    //    Set enabled: false to hide a team member.
    //    Replace image file in /img folder with the same filename.
    team: [
      {
        name:     "Jyotsna Negi",
        position: "General Manager",
        bio:      "A Kinnaur native with over 5 years of hospitality experience, Jyotsna ensures every aspect of your stay exceeds expectations.",
        image:    "stonu.jpg",
        enabled:  true
      },
      {
        name:     "Nitika Negi",
        position: "General Manager",
        bio:      "A Kinnaur native with over 5 years of hospitality experience, Jyotsna ensures every aspect of your stay exceeds expectations.",
        image:    "stonu.jpg",
        enabled:  true
      },
      {
        name:     "Stonuu",
        position: "General Manager",
        bio:      "A Kinnaur native with over 5 years of hospitality experience, Jyotsna ensures every aspect of your stay exceeds expectations.",
        image:    "stonu.jpg",
        enabled:  true
      }
    ],
    cta: {
      heading: "Experience the Magic of Sangla Valley",
      text:    "Book your stay at Hotel Mount Kailash and create memories that will last a lifetime."
    }
  },


  // ══════════════════════════════════════════════════════════════
  //  8.  CONTACT PAGE
  // ══════════════════════════════════════════════════════════════
  contact: {
    hours: {
      frontDesk:    "24/7",
      reservations: "8:00 AM – 8:00 PM",
      restaurant:   "7:00 AM – 10:30 PM"
    },
    // ── FAQ ──────────────────────────────────────────────────────
    //    Set enabled: false to hide a question.
    faq: [
      {
        question: "What are your check-in and check-out times?",
        answer:   "Standard check-in time is 2:00 PM and check-out time is 11:00 AM. Early check-in and late check-out can be arranged subject to availability. Please contact our front desk for more information.",
        enabled:  true
      },
      {
        question: "Is there internet connectivity at the hotel?",
        answer:   "Yes, we provide complimentary high-speed Wi-Fi throughout the property. Please note that due to our remote mountain location, occasional connectivity issues can occur.",
        enabled:  true
      },
      {
        question: "Do you arrange sightseeing tours and activities?",
        answer:   "Yes, we offer a variety of guided tours and activities including hiking, village visits, cultural experiences, and adventure sports. Our concierge can help you plan these activities.",
        enabled:  true
      },
      {
        question: "What is the best time to visit Sangla?",
        answer:   "The best time to visit Sangla is from April to June and September to November. Summers offer pleasant weather; autumn brings clear skies and stunning views. Winter is beautiful but some roads may close.",
        enabled:  true
      },
      {
        question: "Do you cater to special dietary requirements?",
        answer:   "Yes, our restaurant can accommodate various dietary requirements including vegetarian, vegan, and gluten-free. Please inform us of your requirements when booking or upon arrival.",
        enabled:  true
      }
    ]
  },


  // ══════════════════════════════════════════════════════════════
  //  9.  GALLERY
  //
  //  CATEGORIES
  //    • id    — used internally to match photos to filter tabs
  //    • label — text shown on the filter button
  //    You can rename labels, add new categories, or remove ones.
  //    The 'id' must match the 'category' field in each photo.
  //
  //  PHOTOS
  //    • image    — filename inside the /img folder  (e.g. "gallery-hotel-1.jpg")
  //    • category — must match one of the category ids above
  //    • title    — heading shown on hover and in the lightbox
  //    • caption  — short description shown on hover and in the lightbox
  //    • enabled  — false = hidden without deleting
  //
  //  HOW TO ADD A PHOTO
  //    1. Drop the image file into the /img folder
  //    2. Copy any photo block below, paste it at the end of the photos list
  //    3. Fill in image filename, category, title, caption
  // ══════════════════════════════════════════════════════════════
  gallery: {

    categories: [
      { id: "hotel",        label: "The Hotel"      },
      { id: "rooms",        label: "Rooms & Suites" },
      { id: "dining",       label: "Dining"         },
      { id: "surroundings", label: "Surroundings"   }
      // { id: "experiences",  label: "Experiences"    }
    ],

    photos: [

      // ── The Hotel ──────────────────────────────────────────
      { category: "hotel",        image: "welcome.png",       title: "Hotel Exterior",            caption: "The main entrance to Hotel Mount Kailash.",               enabled: true },
      { category: "hotel",        image: "welcome1.jpg",       title: "Hotel Exterior",            caption: "The main entrance to Hotel Mount Kailash.",                  enabled: true },
      { category: "hotel",        image: "hotel2.jpeg",       title: "Hotel Exterior",      caption: "spectacular views.",   enabled: true },
      { category: "hotel",        image: "gallery-hotel-4.jpg",       title: "Main Lobby",                caption: "The spacious lobby with traditional décor elements.",       enabled: false },

      // ── Rooms & Suites ─────────────────────────────────────
      { category: "rooms",        image: "room1.jpeg",        title: "Deluxe Room",               caption: "Comfortable and elegantly appointed Deluxe Room.",         enabled: true },
      { category: "rooms",        image: "room2.jpeg",        title: "Super Deluxe Room",             caption: "Luxurious Premium Suite with panoramic views.",            enabled: true },
      { category: "rooms",        image: "room3.jpeg",        title: "Suite Room",              caption: "Spacious Family Suite perfect for larger groups.",          enabled: true },
      

      // ── Dining ─────────────────────────────────────────────
      { category: "dining",       image: "dining1.jpeg",      title: "Mountain View Restaurant",  caption: "Our main restaurant with panoramic views.",                enabled: false },
      { category: "dining",       image: "dining1.jpeg",      title: "Fine Dining Area",          caption: "Experience gourmet dining in an elegant setting.",          enabled: true },
      { category: "dining",       image: "gallery-dining-3.jpg",      title: "Himachali Cuisine",         caption: "Authentic local dishes prepared with fresh ingredients.",    enabled: false },
      { category: "dining",       image: "dining2.jpeg",      title: "Cosy food",         caption: "Authentic local dishes prepared with fresh ingredients.",     enabled: true },

      // ── Surroundings ───────────────────────────────────────
      { category: "surroundings", image: "valley 2.jpeg",        title: "Kinnaur Kailash Range",     caption: "The magnificent mountain range visible from the hotel.",   enabled: false },
      { category: "surroundings", image: "valley.jpeg",        title: "Sangla Valley",             caption: "The beautiful valley that surrounds our hotel.",           enabled: true },
      { category: "surroundings", image: "gallery-surr-3.jpg",        title: "Forest Trails",             caption: "Scenic forest paths perfect for nature walks.",            enabled: false },
      { category: "surroundings", image: "gallery-surr-4.jpg",        title: "Traditional Kinnauri Village", caption: "Explore authentic mountain villages nearby.",          enabled: false },

      // ── Experiences ────────────────────────────────────────
      { category: "experiences",  image: "gallery-exp-1.jpg",         title: "Mountain Hiking",           caption: "Guided hiking trips to surrounding peaks.",                enabled: false },
      { category: "experiences",  image: "gallery-exp-2.jpg",         title: "Evening Campfire",          caption: "Enjoy storytelling and music around the campfire.",        enabled: false },
      { category: "experiences",  image: "gallery-exp-3.jpg",         title: "Cultural Performances",     caption: "Traditional Kinnauri dance and music performances.",       enabled: false },
      { category: "experiences",  image: "gallery-exp-4.jpg",         title: "Trout Fishing",             caption: "Try your hand at fishing in the Baspa River.",             enabled: false }

    ]
  }

};

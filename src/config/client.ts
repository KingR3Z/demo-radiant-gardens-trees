export const client = {
  // Business Details
  name: "Radiant Gardens & Trees",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Southsea.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "07772 057856",
  email: "",
  website: "",

  // Location
  address: "Southsea",
  city: "Southsea",
  county: "",
  postcode: "",
  basedIn: "Southsea",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "8",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Nicky Dodd", rating: 5, text: "Absolutely thrilled with the work Lewis carried out to put a lawn in for us. He also took additional garden waste away for us for a reasonable price. I would not hesitate to recommend Lewis for your gardening needs. …  ", date: "11 months ago" },
    { name: "Stephen Griffiths", rating: 5, text: "We were very pleased with the garden works Lewis carried out - reducing the size of the hedge allowing in light, cutting back bushes and taking away all the cuttings. We found him very helpful, reliable and hard-working. Excellent work! ", date: "4 months ago" },
    { name: "Emily Corbett", rating: 5, text: "Lewis came out to remove a tree from our children's day nursery. He was very professional, efficient and tidy. We will definitely be having him back for more work in the future. ", date: "6 months ago" },
    { name: "Essie F", rating: 5, text: "Lewis did a great job digging out all of our shrubs and was very understanding of the state of our garden. Very polite and professional, Will definitely use again! ", date: "5 months ago" },
    { name: "Leyton Ede", rating: 5, text: "Lewis is fantastic! He was punctual, prepared, knowledgeable and did an excellent job on our garden! A genuinely nice guy and I'd highly recommend him for any garden work ", date: "8 months ago" },
    { name: "M Turner", rating: 5, text: "We had our very overgrown garden completely overhauled. A great job done - really helpful and efficient service! ", date: "3 months ago" },
    { name: "Ali Rowsell", rating: 5, text: "Did a fantastic job for me. Very reliable, friendly and was so pleased with what he had done, as well as how well he cleared up. Thank you so much. Would highly recommend ", date: "9 months ago" },
    { name: "Richard Webb", rating: 5, text: "Very happy with Lewis, he removed out of control conifers and pruned and shaped an out of reach tree. A lot more sunlight in our garden, and this has inspired up to enjoy the garden again. ", date: "11 months ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Radiant Gardens & Trees | Landscaper in Southsea",
    description: "Professional landscaper in Southsea. 5.0-star rated on Google. Call for a free quote.",
  },
};

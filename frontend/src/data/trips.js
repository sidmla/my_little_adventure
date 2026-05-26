// Trips data — built from the client's own trip folders (Google Drive).
// Categories: Pilgrimage, Couple Trips, Group Trips, Domestic, International.
// Images are the client's real photos, stored locally in src/assets/trips/.
// Descriptions written for the site (no prices/dates until client provides them).

import coupleAndaman from "@/assets/trips/couple-andaman.jpg";
import coupleKashmir from "@/assets/trips/couple-kashmir.jpg";
import coupleKerala from "@/assets/trips/couple-kerala.jpg";
import coupleManali from "@/assets/trips/couple-manali-and-kasol.jpg";

import groupCoorg from "@/assets/trips/group-coorg-and-chikmanglur.jpg";
import groupGokarna from "@/assets/trips/group-gokarna-and-dandeli.jpg";
import groupKashmir from "@/assets/trips/group-kashmir.jpg";
import groupKerala from "@/assets/trips/group-kerala.jpg";
import groupManali from "@/assets/trips/group-manali-and-kasol.jpg";
import groupOoty from "@/assets/trips/group-ooty.jpg";
import groupRajasthan from "@/assets/trips/group-rajasthan.jpg";
import groupWayanad from "@/assets/trips/group-wayanad.jpg";

import intlBali from "@/assets/trips/intl-bali.jpg";
import intlDubai from "@/assets/trips/intl-dubai.jpg";
import intlMaldives from "@/assets/trips/intl-maldives.jpg";
import intlSriLanka from "@/assets/trips/intl-sri-lanka.jpg";
import intlThailand from "@/assets/trips/intl-thailand.jpg";
import intlVietnam from "@/assets/trips/intl-veitnam.jpg";

import pilgKashi from "@/assets/trips/pilg-kashi-ayodhya-and-prayagraj.jpg";
import pilgKedarnath from "@/assets/trips/pilg-kedarnath-and-badrinath.jpg";
import pilgPuri from "@/assets/trips/pilg-puri-and-bhuvneshwar.jpg";
import pilgShirdi from "@/assets/trips/pilg-shirdi-2-jyotirlanga.jpg";
import pilgUjjain from "@/assets/trips/pilg-ujjain-omkareshwar.jpg";

export const TRIPS = [
  // ---------- COUPLE TRIPS ----------
  {
    id: "couple-andaman",
    title: "Andaman",
    categoryKey: "couple",
    region: "Couple",
    state: "Andaman & Nicobar",
    image: coupleAndaman,
    blurb: "Turquoise waters, white-sand beaches, and coral reefs — a dreamy island escape made for two.",
    highlights: ["Radhanagar Beach", "Scuba Diving", "Island Hopping"],
  },
  {
    id: "couple-kashmir",
    title: "Kashmir",
    categoryKey: "couple",
    region: "Couple",
    state: "Jammu & Kashmir",
    image: coupleKashmir,
    blurb: "Shikara rides on Dal Lake, snow-dusted meadows, and cozy houseboats — romance in paradise on earth.",
    highlights: ["Dal Lake", "Gulmarg", "Houseboat Stay"],
  },
  {
    id: "couple-kerala",
    title: "Kerala",
    categoryKey: "couple",
    region: "Couple",
    state: "Kerala",
    image: coupleKerala,
    blurb: "Backwater houseboats, swaying palms, and misty tea hills — God's own country, just the two of you.",
    highlights: ["Backwaters", "Munnar Hills", "Houseboat"],
  },
  {
    id: "couple-manali-kasol",
    title: "Manali & Kasol",
    categoryKey: "couple",
    region: "Couple",
    state: "Himachal Pradesh",
    image: coupleManali,
    blurb: "Snow peaks, riverside cafés, and pine-scented valleys — a cozy Himalayan getaway for couples.",
    highlights: ["Solang Valley", "Kasol Riverside", "Snow Points"],
  },

  // ---------- GROUP TRIPS ----------
  {
    id: "group-coorg-chikmagalur",
    title: "Coorg & Chikmagalur",
    categoryKey: "group",
    region: "Group",
    state: "Karnataka",
    image: groupCoorg,
    blurb: "Misty coffee hills, waterfalls, and plantation stays — the perfect group escape into the Western Ghats.",
    highlights: ["Coffee Estates", "Waterfalls", "Misty Hills"],
  },
  {
    id: "group-gokarna-dandeli",
    title: "Gokarna & Dandeli",
    categoryKey: "group",
    region: "Group",
    state: "Karnataka",
    image: groupGokarna,
    blurb: "Beach bonfires meet white-water rafting — sun, sand, and adventure for the whole gang.",
    highlights: ["Beaches", "River Rafting", "Bonfire Nights"],
  },
  {
    id: "group-kashmir",
    title: "Kashmir",
    categoryKey: "group",
    region: "Group",
    state: "Jammu & Kashmir",
    image: groupKashmir,
    blurb: "Gondola rides, alpine meadows, and lakeside evenings — a stunning Himalayan trip best shared with friends.",
    highlights: ["Gulmarg Gondola", "Pahalgam", "Dal Lake"],
  },
  {
    id: "group-kerala",
    title: "Kerala",
    categoryKey: "group",
    region: "Group",
    state: "Kerala",
    image: groupKerala,
    blurb: "Backwaters, beaches, and tea country — a vibrant South India journey packed with shared moments.",
    highlights: ["Alleppey", "Munnar", "Beaches"],
  },
  {
    id: "group-manali-kasol",
    title: "Manali & Kasol",
    categoryKey: "group",
    region: "Group",
    state: "Himachal Pradesh",
    image: groupManali,
    blurb: "Snow adventures, Parvati Valley treks, and riverside hangouts — the classic Himalayan group trip.",
    highlights: ["Solang Valley", "Kasol", "Trekking"],
  },
  {
    id: "group-ooty",
    title: "Ooty",
    categoryKey: "group",
    region: "Group",
    state: "Tamil Nadu",
    image: groupOoty,
    blurb: "Rolling tea gardens, the heritage toy train, and cool hill air — the Queen of Hills awaits your crew.",
    highlights: ["Tea Gardens", "Toy Train", "Botanical Garden"],
  },
  {
    id: "group-rajasthan",
    title: "Rajasthan",
    categoryKey: "group",
    region: "Group",
    state: "Rajasthan",
    image: groupRajasthan,
    blurb: "Majestic forts, desert dunes, and royal palaces — a colourful journey through India's land of kings.",
    highlights: ["Forts & Palaces", "Desert Safari", "Pink City"],
  },
  {
    id: "group-wayanad",
    title: "Wayanad",
    categoryKey: "group",
    region: "Group",
    state: "Kerala",
    image: groupWayanad,
    blurb: "Lush forests, waterfalls, and wildlife trails — a green, easygoing group retreat in the hills.",
    highlights: ["Forests", "Waterfalls", "Wildlife"],
  },

  // ---------- INTERNATIONAL ----------
  {
    id: "intl-bali",
    title: "Bali",
    categoryKey: "international",
    region: "International",
    state: "Indonesia",
    image: intlBali,
    blurb: "Rice terraces, beach clubs, and temple sunsets — the island of the gods, endlessly photogenic.",
    highlights: ["Ubud Rice Terraces", "Beaches", "Temples"],
  },
  {
    id: "intl-dubai",
    title: "Dubai",
    categoryKey: "international",
    region: "International",
    state: "UAE",
    image: intlDubai,
    blurb: "Sky-high views, desert safaris, and dazzling nights — luxury and adventure in the city of superlatives.",
    highlights: ["Burj Khalifa", "Desert Safari", "Marina"],
  },
  {
    id: "intl-maldives",
    title: "Maldives",
    categoryKey: "international",
    region: "International",
    state: "Maldives",
    image: intlMaldives,
    blurb: "Overwater villas, crystal lagoons, and coral reefs — the ultimate slice of tropical paradise.",
    highlights: ["Overwater Villas", "Snorkeling", "Lagoons"],
  },
  {
    id: "intl-sri-lanka",
    title: "Sri Lanka",
    categoryKey: "international",
    region: "International",
    state: "Sri Lanka",
    image: intlSriLanka,
    blurb: "Ancient rock fortresses, hill-country tea trails, and golden beaches — a compact island of wonders.",
    highlights: ["Sigiriya", "Tea Country", "Beaches"],
  },
  {
    id: "intl-thailand",
    title: "Thailand",
    categoryKey: "international",
    region: "International",
    state: "Thailand",
    image: intlThailand,
    blurb: "Island beaches, buzzing markets, and grand temples — vibrant culture and nightlife in equal measure.",
    highlights: ["Phuket", "Bangkok", "Island Tours"],
  },
  {
    id: "intl-vietnam",
    title: "Vietnam",
    categoryKey: "international",
    region: "International",
    state: "Vietnam",
    image: intlVietnam,
    blurb: "Emerald bays, lantern-lit old towns, and scenic cruises — a breathtaking sweep of Southeast Asia.",
    highlights: ["Ha Long Bay", "Hoi An", "Cruises"],
  },

  // ---------- PILGRIMAGE ----------
  {
    id: "pilg-kashi-ayodhya-prayagraj",
    title: "Kashi, Ayodhya & Prayagraj",
    categoryKey: "pilgrimage",
    region: "Pilgrimage",
    state: "Uttar Pradesh",
    image: pilgKashi,
    blurb: "The sacred trio — Ganga aarti at Kashi, the Ram temple at Ayodhya, and the holy Sangam at Prayagraj.",
    highlights: ["Ganga Aarti", "Ram Mandir", "Triveni Sangam"],
  },
  {
    id: "pilg-kedarnath-badrinath",
    title: "Kedarnath & Badrinath",
    categoryKey: "pilgrimage",
    region: "Pilgrimage",
    state: "Uttarakhand",
    image: pilgKedarnath,
    blurb: "Two of the holiest Himalayan shrines amid towering peaks — a soul-stirring journey of devotion.",
    highlights: ["Kedarnath Temple", "Badrinath", "Himalayas"],
  },
  {
    id: "pilg-puri-bhubaneswar",
    title: "Puri & Bhubaneswar",
    categoryKey: "pilgrimage",
    region: "Pilgrimage",
    state: "Odisha",
    image: pilgPuri,
    blurb: "The revered Jagannath Temple, ancient stone shrines, and the golden Puri shoreline.",
    highlights: ["Jagannath Temple", "Konark Sun Temple", "Puri Beach"],
  },
  {
    id: "pilg-shirdi-jyotirlinga",
    title: "Shirdi & 2 Jyotirlinga",
    categoryKey: "pilgrimage",
    region: "Pilgrimage",
    state: "Maharashtra",
    image: pilgShirdi,
    blurb: "Darshan at Sai Baba's Shirdi paired with two sacred Jyotirlinga shrines — a deeply blessed circuit.",
    highlights: ["Sai Baba Temple", "Jyotirlinga Darshan", "Aarti"],
  },
  {
    id: "pilg-ujjain-omkareshwar",
    title: "Ujjain & Omkareshwar",
    categoryKey: "pilgrimage",
    region: "Pilgrimage",
    state: "Madhya Pradesh",
    image: pilgUjjain,
    blurb: "Mahakaleshwar's revered Jyotirlinga and the island temple of Omkareshwar on the sacred Narmada.",
    highlights: ["Mahakaleshwar", "Omkareshwar", "Bhasma Aarti"],
  },
];

// "Domestic" = a curated handful of India trips (client asked for 3–4).
const DOMESTIC_IDS = ["couple-kashmir", "group-rajasthan", "group-kerala", "couple-manali-kasol"];

// Helper to fetch trips for a category key (handles the virtual "domestic" set).
export function tripsForCategory(key) {
  if (key === "domestic") return TRIPS.filter((t) => DOMESTIC_IDS.includes(t.id));
  return TRIPS.filter((t) => t.categoryKey === key);
}

export const CATEGORY_META = {
  pilgrimage: {
    label: "Pilgrimage",
    title: "Sacred Journeys",
    sub: "Temple darshans, holy rivers, and revered shrines across India — travel that touches the soul.",
    image: pilgKedarnath,
  },
  couple: {
    label: "Couple Trips",
    title: "Trips for Two",
    sub: "Handpicked romantic escapes — beaches, mountains, and backwaters made for couples.",
    image: coupleKashmir,
  },
  group: {
    label: "Group Trips",
    title: "Better Together",
    sub: "Small-group adventures across India — shared moments, new friends, zero hassle.",
    image: groupManali,
  },
  domestic: {
    label: "Domestic",
    title: "Explore India",
    sub: "From the Himalayas to the backwaters — our favourite getaways within India.",
    image: groupRajasthan,
  },
  international: {
    label: "International",
    title: "Beyond Borders",
    sub: "Bali, Dubai, Maldives and more — unforgettable trips abroad, planned end to end.",
    image: intlMaldives,
  },
};

export const TOP_SELLERS = [
  { tag: "Couple Trips", image: coupleKashmir },
  { tag: "Group Trips", image: groupManali },
  { tag: "Pilgrimage", image: pilgKedarnath },
  { tag: "International", image: intlBali },
  { tag: "Beaches", image: intlMaldives },
  { tag: "Mountains", image: coupleManali },
];

export const REVIEWS = [
  {
    name: "Jaswanth Gowtham",
    rating: 5,
    place: "Year-end Adventure",
    text: "Had a great year-end adventure with Captain Naveen! Friendly and decisive. Limited places but fun, made new friends. Night camping was a highlight.",
  },
  {
    name: "Bhuvakar Bhargav",
    rating: 5,
    place: "Group Trip",
    text: "The trip was budget-friendly and well-organized. Vaishnavi handled check-ins, checkouts, and itinerary smoothly, ensuring travelers' comfort and giving her best efforts.",
  },
  {
    name: "Shilpa Manchikatla",
    rating: 5,
    place: "Coorg & Chikmagalur",
    text: "Exceeded expectations in Coorg and Chikmagaluru. Clean, aesthetic accommodations, unique tent stay. Captain Naveen was friendly and efficient. Well-organized trip!",
  },
];

export const FAQS = [
  {
    q: "Are these group trips?",
    a: "Yes — small, curated groups. You get the safety and savings of a group with enough breathing space to do your own thing. We also do private couple and family versions.",
  },
  {
    q: "What does the price include?",
    a: "Stay, major sightseeing, group transport, and a trip captain. Message us on WhatsApp for the full inclusions of any specific trip.",
  },
  {
    q: "Can I customize the itinerary?",
    a: "Absolutely. Ping us on WhatsApp and we'll build a private custom version of any trip — couple, family, or group.",
  },
  {
    q: "How do I book?",
    a: "Tap any trip's Details button or message us on WhatsApp at +91 90595 89696 and our team will help you plan and confirm.",
  },
];

export const NAV_LINKS = [
  { label: "Explore", to: "/" },
  { label: "Pilgrimage", to: "/pilgrimage" },
  { label: "Couple Trips", to: "/couple" },
  { label: "Group Trips", to: "/group" },
  { label: "Domestic", to: "/domestic" },
  { label: "International", to: "/international" },
  { label: "Who Travels With Us", to: "/who-travels-with-us" },
];

export const CONTACT = {
  phone: "+91 90595 89696",
  whatsapp: "https://api.whatsapp.com/message/QS2U43PAMLYIN1?autoload=1&app_absent=0",
  instagram: "https://www.instagram.com/mylittleadventure___/",
  email: "hello@mylittleadventure.in",
};

export const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export const POPULAR_PLACES = [
  "Andaman", "Kashmir", "Kerala", "Manali & Kasol", "Coorg & Chikmagalur",
  "Gokarna & Dandeli", "Ooty", "Rajasthan", "Wayanad",
  "Bali", "Dubai", "Maldives", "Sri Lanka", "Thailand", "Vietnam",
  "Kashi / Ayodhya", "Kedarnath", "Puri", "Shirdi", "Ujjain", "Other",
];

// Popup: category -> the places shown once that category is picked.
export const LEAD_CATEGORIES = [
  { key: "couple", label: "Couple Trip" },
  { key: "group", label: "Group Trip" },
  { key: "pilgrimage", label: "Pilgrimage" },
  { key: "international", label: "International" },
  { key: "other", label: "Other / Not sure" },
];

export const CATEGORY_PLACES = {
  couple: ["Andaman", "Kashmir", "Kerala", "Manali & Kasol"],
  group: ["Coorg & Chikmagalur", "Gokarna & Dandeli", "Kashmir", "Kerala", "Manali & Kasol", "Ooty", "Rajasthan", "Wayanad"],
  pilgrimage: ["Kashi / Ayodhya / Prayagraj", "Kedarnath & Badrinath", "Puri & Bhubaneswar", "Shirdi", "Ujjain & Omkareshwar"],
  international: ["Bali", "Dubai", "Maldives", "Sri Lanka", "Thailand", "Vietnam"],
  other: ["Not decided yet", "Custom trip"],
};

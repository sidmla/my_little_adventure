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
  {
    id: "couple-andaman",
    title: "Andaman",
    categoryKey: "couple",
    tripTypes: ["domestic"],
    domState: "Andaman & Nicobar",
    region: "Couple",
    state: "Andaman & Nicobar",
    image: coupleAndaman,
    blurb: "Turquoise waters, white-sand beaches, and coral reefs — a dreamy island escape made for two.",
    highlights: ["Radhanagar Beach", "Scuba Diving", "Island Hopping"],
    duration: "5 Nights / 6 Days",
    price: { from: "Ask us", note: "Message us for current dates & pricing" },
    details: {
      duration: "5 Nights / 6 Days",
      bestTime: "October to May",
      idealFor: "Couples & honeymooners",
      about: "The Andaman Islands are a slice of the tropics right in India — powder-white beaches, water in every shade of blue, and coral reefs teeming with life. This couple's escape pairs the buzz of Port Blair with the calm of Havelock and Neil Island.\n\nWe handle the ferries, stays, and sightseeing so the two of you can focus on the sunsets.",
      itinerary: [
        { day: "1", title: "Arrive in Port Blair", desc: "Airport pickup, check-in, and the Cellular Jail Light & Sound show in the evening." },
        { day: "2", title: "Ferry to Havelock", desc: "Cruise to Havelock and unwind at the famous Radhanagar Beach for sunset." },
        { day: "3", title: "Scuba & Elephant Beach", desc: "Snorkeling or scuba at Elephant Beach amid living coral reefs." },
        { day: "4", title: "Neil Island", desc: "Natural bridge, Bharatpur and Laxmanpur beaches — the quiet, romantic side." },
        { day: "5", title: "Back to Port Blair", desc: "Ferry back, Corbyn's Cove beach and local market shopping." },
        { day: "6", title: "Departure", desc: "Transfer to the airport for your flight home." }
      ],
      inclusions: ["Couple-friendly stays", "Daily breakfast", "All inter-island ferries", "Airport & sightseeing transfers", "Trip coordinator support"],
      exclusions: ["Flights to/from Port Blair", "Scuba & water-sport charges", "Lunch & dinner", "Anything not listed in inclusions"],
    },
  },
  {
    id: "couple-kashmir",
    title: "Kashmir",
    categoryKey: "couple",
    tripTypes: ["domestic"],
    domState: "Kashmir",
    region: "Couple",
    state: "Jammu & Kashmir",
    image: coupleKashmir,
    blurb: "Shikara rides on Dal Lake, snow-dusted meadows, and cozy houseboats — romance in paradise on earth.",
    highlights: ["Dal Lake", "Gulmarg", "Houseboat Stay"],
    duration: "4 Nights / 5 Days",
    price: { from: "Ask us", note: "Message us for current dates & pricing" },
    details: {
      duration: "4 Nights / 5 Days",
      bestTime: "March to October",
      idealFor: "Couples & honeymooners",
      about: "Few places feel as romantic as Kashmir — mirror-still lakes, Mughal gardens, and meadows ringed by snow peaks. This trip blends Srinagar's houseboats with day trips to Gulmarg, Pahalgam and Sonmarg.\n\nExpect shikara rides, gondola gardens, and slow evenings by the water.",
      itinerary: [
        { day: "1", title: "Arrive Srinagar", desc: "Houseboat check-in and an evening shikara ride on Dal Lake." },
        { day: "2", title: "Gulmarg", desc: "Day trip to Gulmarg — the Gondola cable car and snow meadows." },
        { day: "3", title: "Pahalgam", desc: "Drive through saffron fields to the Lidder valley and Betaab valley." },
        { day: "4", title: "Srinagar sightseeing", desc: "Mughal gardens — Nishat, Shalimar — and old-city markets." },
        { day: "5", title: "Departure", desc: "Transfer to the airport." }
      ],
      inclusions: ["Comfortable accommodation on sharing basis", "Daily breakfast", "All transfers & sightseeing by road", "Experienced trip captain / coordinator", "Toll, parking & driver charges"],
      exclusions: ["Flights / train tickets to the start point", "Lunch & dinner unless specified", "Entry tickets, activities & personal expenses", "Anything not listed under inclusions", "5% GST on package amount"],
    },
  },
  {
    id: "couple-kerala",
    title: "Kerala",
    categoryKey: "couple",
    tripTypes: ["domestic"],
    domState: "Kerala",
    region: "Couple",
    state: "Kerala",
    image: coupleKerala,
    blurb: "Backwater houseboats, swaying palms, and misty tea hills — God's own country, just the two of you.",
    highlights: ["Backwaters", "Munnar Hills", "Houseboat"],
    duration: "4 Nights / 5 Days",
    price: { from: "Ask us", note: "Message us for current dates & pricing" },
    details: {
      duration: "4 Nights / 5 Days",
      bestTime: "September to March",
      idealFor: "Couples & honeymooners",
      about: "Kerala layers tea-green hills, palm-lined backwaters and quiet beaches into one easy journey. This trip moves from Munnar's plantations to an overnight houseboat in Alleppey.\n\nA gentle, scenic escape made for slowing down together.",
      itinerary: [
        { day: "1", title: "Arrive Kochi", desc: "Pickup and drive to Munnar through spice country." },
        { day: "2", title: "Munnar", desc: "Tea gardens, Eravikulam National Park and Mattupetty dam." },
        { day: "3", title: "Alleppey houseboat", desc: "Transfer to Alleppey for an overnight backwater houseboat with meals." },
        { day: "4", title: "Beach day", desc: "Drive to a coastal town for beach and leisure time." },
        { day: "5", title: "Departure", desc: "Transfer to the station / airport." }
      ],
      inclusions: ["Comfortable accommodation on sharing basis", "Daily breakfast", "All transfers & sightseeing by road", "Experienced trip captain / coordinator", "Toll, parking & driver charges"],
      exclusions: ["Flights / train tickets to the start point", "Lunch & dinner unless specified", "Entry tickets, activities & personal expenses", "Anything not listed under inclusions", "5% GST on package amount"],
    },
  },
  {
    id: "couple-manali-kasol",
    title: "Manali & Kasol",
    categoryKey: "couple",
    tripTypes: ["weekend"],
    region: "Couple",
    state: "Himachal Pradesh",
    image: coupleManali,
    blurb: "Snow peaks, riverside cafes, and pine-scented valleys — a cozy Himalayan getaway for couples.",
    highlights: ["Solang Valley", "Kasol Riverside", "Snow Points"],
    duration: "4 Nights / 5 Days",
    price: { from: "Ask us", note: "Message us for current dates & pricing" },
    details: {
      duration: "4 Nights / 5 Days",
      bestTime: "October to June",
      idealFor: "Couples",
      about: "Manali and Kasol pack big mountain views into a short, easy trip — snow points above Manali, and the laid-back riverside cafe culture of Kasol in the Parvati valley.\n\nA cozy mix of adventure and chill.",
      itinerary: [
        { day: "1", title: "Arrive Manali", desc: "Check-in and explore Mall Road and Hadimba temple." },
        { day: "2", title: "Solang & Atal Tunnel", desc: "Snow activities at Solang valley and a drive through the Atal Tunnel." },
        { day: "3", title: "Kasol & Manikaran", desc: "Drive to the Parvati valley — Kasol riverside and Manikaran hot springs." },
        { day: "4", title: "Leisure / Jibhi or Naggar", desc: "Optional sightseeing and cafe-hopping." },
        { day: "5", title: "Departure", desc: "Transfer for your onward journey." }
      ],
      inclusions: ["Comfortable accommodation on sharing basis", "Daily breakfast", "All transfers & sightseeing by road", "Experienced trip captain / coordinator", "Toll, parking & driver charges"],
      exclusions: ["Flights / train tickets to the start point", "Lunch & dinner unless specified", "Entry tickets, activities & personal expenses", "Anything not listed under inclusions", "5% GST on package amount"],
    },
  },
  {
    id: "group-coorg-chikmagalur",
    title: "Coorg & Chikmagalur",
    categoryKey: "group",
    tripTypes: ["domestic", "weekend"],
    domState: "Karnataka",
    region: "Group",
    state: "Karnataka",
    image: groupCoorg,
    blurb: "Misty coffee hills, waterfalls, and plantation stays — the perfect group escape into the Western Ghats.",
    highlights: ["Coffee Estates", "Waterfalls", "Misty Hills"],
    duration: "2 Nights / 3 Days",
    price: {
      from: "₹7,499",
      fromCity: "₹6,699 (MYS/BLR)",
      city: "HYD / CHE / BZA",
      ac3: "₹8,999 (3rd AC)",
      note: "+5% GST · ₹500 off"
    },
    details: {
      duration: "2 Nights / 3 Days",
      departure: "Every Friday · HYD (Kachiguda 7:05 PM) / BLR (KSR 6:10 AM Sat)",
      bestTime: "September to March",
      idealFor: "Friends & groups",
      about: "Coorg and Chikmagalur are the coffee heart of the Western Ghats — rolling estates, waterfalls and cool, misty mornings. An easy weekend escape with plenty of group fun.\n\nThink plantation walks, viewpoints and a campfire night.",
      itinerary: [
        { day: "1", title: "Coorg", desc: "Reach Mysore, drive to Coorg — Golden Temple, hanging bridge, elephant camp and the musical fountain; stay in Coorg." },
        { day: "2", title: "Mandalpatti & Chikmagalur", desc: "Mandalpatti trek, Abbey Falls and Raja's Seat; drive to Chikmagalur — Belur Temple and Yagachi Dam; stay in Chikmagalur." },
        { day: "3", title: "Mullayanagiri & return", desc: "Sunrise at Mullayanagiri peak (6 AM), Jhari Waterfalls and Mysore Palace if time permits; board the 3:00 PM train." }
      ],
      inclusions: ["SL class train tickets", "Local transport for 3 days", "Accommodation (4 or 3 sharing)", "Trip coordinator (10+ pax batch)", "Driver charges, tolls & taxes", "First aid"],
      exclusions: ["Food & entry tickets", "Jeep rides & other activities", "Anything not listed under inclusions"],
    },
  },
  {
    id: "group-gokarna-dandeli",
    title: "Gokarna & Dandeli",
    categoryKey: "group",
    tripTypes: ["domestic", "weekend"],
    domState: "Karnataka",
    region: "Group",
    state: "Karnataka",
    image: groupGokarna,
    blurb: "Beach bonfires meet white-water rafting — sun, sand, and adventure for the whole gang.",
    highlights: ["Beaches", "River Rafting", "Bonfire Nights"],
    duration: "2 Nights / 3 Days",
    price: {
      from: "₹6,199",
      fromCity: "₹5,399 (Hubli–Hubli)",
      city: "HYD / BLR / BZA",
      ac3: "₹7,699 (3rd AC)",
      note: "+5% GST · ₹800 off"
    },
    details: {
      duration: "2 Nights / 3 Days",
      departure: "Every Friday · HYD (Nampally 3:50 PM) / BLR (KSR 9:50 PM) / BZA (Vijayawada Jn 1:20 PM)",
      bestTime: "October to March",
      idealFor: "Friends & groups",
      about: "This combo pairs Gokarna's relaxed beaches with Dandeli's river adventures — rafting, beach-hopping and a bonfire under the stars. A favourite high-energy group weekend.",
      itinerary: [
        { day: "1", title: "Dandeli water activities", desc: "Gather at Hubli, drive 2 hrs to Dandeli. Boating, kayaking, zorbing, archery and rain dance; bonfire, music and overnight camping tent." },
        { day: "2", title: "Waterfalls & temples", desc: "Vibhuti Waterfalls, Mirjan Fort, mangrove forest, Honavar and Murudeshwar Temple; night stay in Gokarna (camping)." },
        { day: "3", title: "Gokarna beaches", desc: "Gokarna Temple (ethnic wear), Gokarna Beach, Om Beach and Kudle Beach; drive back, drop at Hubli station 8:30 PM." }
      ],
      inclusions: ["SL class train tickets", "Local transport for 3 days", "Accommodation (4 or 3 sharing)", "3 water activities in Dandeli", "1 day food in Dandeli", "Swimming-pool resort in Dandeli", "Driver charges, tolls & taxes", "Entry tickets", "Trip coordinator (10+ pax batch)"],
      exclusions: ["Food for 2 days", "River rafting & zipline", "Other activities & boat rides", "Anything not listed under inclusions"],
    },
  },
  {
    id: "group-kashmir",
    title: "Kashmir",
    categoryKey: "group",
    tripTypes: ["backpacking"],
    region: "Group",
    state: "Jammu & Kashmir",
    image: groupKashmir,
    blurb: "Gondola rides, alpine meadows, and lakeside evenings — a stunning Himalayan trip best shared with friends.",
    highlights: ["Gulmarg Gondola", "Pahalgam", "Dal Lake"],
    duration: "4 Nights / 5 Days",
    price: { from: "Ask us", note: "Message us for current dates & pricing" },
    details: {
      duration: "4 Nights / 5 Days",
      bestTime: "March to October",
      idealFor: "Friends & groups",
      about: "Kashmir on a group trip means shared shikara rides, Gondola adventures in Gulmarg and big-view drives to Pahalgam and Sonmarg. The valley delivers postcard scenery at every stop.",
      itinerary: [
        { day: "1", title: "Arrive Srinagar", desc: "Houseboat / hotel check-in and a shikara ride on Dal Lake." },
        { day: "2", title: "Gulmarg", desc: "Gondola cable car and snow meadows." },
        { day: "3", title: "Pahalgam", desc: "Lidder and Betaab valleys, scenic drives." },
        { day: "4", title: "Sonmarg / Srinagar", desc: "Day trip to Sonmarg or Mughal gardens and markets." },
        { day: "5", title: "Departure", desc: "Transfer to the airport." }
      ],
      inclusions: ["Comfortable accommodation on sharing basis", "Daily breakfast", "All transfers & sightseeing by road", "Experienced trip captain / coordinator", "Toll, parking & driver charges"],
      exclusions: ["Flights / train tickets to the start point", "Lunch & dinner unless specified", "Entry tickets, activities & personal expenses", "Anything not listed under inclusions", "5% GST on package amount"],
    },
  },
  {
    id: "group-kerala",
    title: "Kerala",
    categoryKey: "group",
    tripTypes: ["backpacking"],
    region: "Group",
    state: "Kerala",
    image: groupKerala,
    blurb: "Backwaters, beaches, and tea country — a vibrant South India journey packed with shared moments.",
    highlights: ["Alleppey", "Munnar", "Beaches"],
    duration: "4 Nights / 5 Days",
    price: { from: "Ask us", note: "Message us for current dates & pricing" },
    details: {
      duration: "4 Nights / 5 Days",
      bestTime: "September to March",
      idealFor: "Friends & groups",
      about: "A full Kerala loop for groups — tea hills in Munnar, an Alleppey houseboat, and beach time, with the easy camaraderie of travelling together.",
      itinerary: [
        { day: "1", title: "Arrive Kochi", desc: "Drive to Munnar; evening at leisure." },
        { day: "2", title: "Munnar", desc: "Tea gardens, Eravikulam park and viewpoints." },
        { day: "3", title: "Alleppey", desc: "Backwater houseboat experience with meals." },
        { day: "4", title: "Beach / leisure", desc: "Coastal town for beach and free time." },
        { day: "5", title: "Departure", desc: "Transfer to the station / airport." }
      ],
      inclusions: ["Comfortable accommodation on sharing basis", "Daily breakfast", "All transfers & sightseeing by road", "Experienced trip captain / coordinator", "Toll, parking & driver charges"],
      exclusions: ["Flights / train tickets to the start point", "Lunch & dinner unless specified", "Entry tickets, activities & personal expenses", "Anything not listed under inclusions", "5% GST on package amount"],
    },
  },
  {
    id: "group-manali-kasol",
    title: "Kullu Manali & Kasol",
    categoryKey: "group",
    tripTypes: ["domestic", "backpacking"],
    domState: "Himachal",
    region: "Group",
    state: "Himachal Pradesh",
    image: groupManali,
    blurb: "Snow adventures, Parvati Valley treks, and riverside hangouts — the classic Himalayan group trip.",
    highlights: ["Solang Valley", "Kasol", "Trekking"],
    duration: "3 Nights / 4 Days",
    price: {
      from: "₹10,899",
      fromCity: "₹8,999 (Delhi–Delhi)",
      city: "HYD – HYD",
      note: "+5% GST"
    },
    details: {
      duration: "3 Nights / 4 Days",
      departure: "Every Tuesday & Friday · Delhi (Kashmiri Gate 7:30 PM)",
      bestTime: "October to June",
      idealFor: "Friends & groups",
      about: "The classic Himachal group trip — Manali's snow points, the Atal Tunnel, and the backpacker vibe of Kasol and Tosh in the Parvati valley. Big mountains, great company.",
      itinerary: [
        { day: "1", title: "Manali", desc: "Reach Manali ~8:30 AM. Jogini Waterfalls, Hadimba, Vashisht and Ram temples, Club House, Van Vihar, Mall Road and Old Manali; dinner and stay." },
        { day: "2", title: "Solang & Atal Tunnel", desc: "Atal Tunnel and Solang Valley adventure activities; back by 6:30 PM; dinner." },
        { day: "3", title: "Kullu & Kasol", desc: "Kullu — river rafting and paragliding, sightseeing & shopping; night camping in Kasol with DJ night and campfire." },
        { day: "4", title: "Kasol & return", desc: "Manikaran temple, gurudwara and Kasol nature park; bus back to Delhi." }
      ],
      inclusions: ["Volvo semi-sleeper both ways (Delhi–Delhi)", "Accommodation (1 Kasol & 2 Manali)", "3 breakfasts & 3 dinners", "DJ night in Kasol", "Campfire & music (Manali)", "Local transport in Manali & Kasol", "Tolls, taxes & parking", "Trip coordinator (Manali–Manali)", "Driver charges"],
      exclusions: ["Entry tickets (Atal Tunnel & Rohtang Pass)", "Lunch on all days", "Snow activities & paragliding", "Personal expenses", "Anything not listed under inclusions"],
    },
  },
  {
    id: "group-ooty",
    title: "Ooty & Coonoor",
    categoryKey: "group",
    tripTypes: ["weekend"],
    region: "Group",
    state: "Tamil Nadu",
    image: groupOoty,
    blurb: "Rolling tea gardens, the heritage toy train, and cool hill air — the Queen of Hills awaits your crew.",
    highlights: ["Tea Gardens", "Toy Train", "Botanical Garden"],
    duration: "2 Nights / 3 Days",
    price: {
      from: "₹7,499",
      fromCity: "₹6,699 (MYS/BLR)",
      city: "HYD / BZA / CHE",
      ac3: "₹8,999 (3rd AC)",
      note: "+5% GST · ₹800 off"
    },
    details: {
      duration: "2 Nights / 3 Days",
      departure: "Every Friday · HYD (KCG 7:05 PM) to BLR/MYS",
      bestTime: "All year (cool in summer)",
      idealFor: "Friends & families",
      about: "Ooty, the Queen of Hill Stations, is all tea-green slopes, a heritage toy train and crisp mountain air. An easy, scenic weekend for groups and families.",
      itinerary: [
        { day: "1", title: "Mysore & into the Nilgiris", desc: "Reach BLR/MYS — Mysore Palace, Bandipur forest, Needle Rock viewpoint and a boat ride; night stay in Ooty." },
        { day: "2", title: "Coonoor toy train", desc: "Reach Ooty, ride the heritage toy train to Coonoor — Dolphin's Nose, tea gardens, tea factory and Rose Garden; night stay in Ooty." },
        { day: "3", title: "Ooty & return", desc: "Pine Forest, Pykara Waterfalls and Shooting Point; drive to Mysore for the 3:10 PM train." }
      ],
      inclusions: ["SL class train tickets", "Local transport for 3 days", "Accommodation (4 or 3 sharing)", "Toy train tickets", "Driver charges, tolls & taxes", "Trip coordinator (11 pax batch)", "First aid"],
      exclusions: ["Food & entry tickets", "Other activities & boat rides", "Anything not listed under inclusions"],
    },
  },
  {
    id: "group-rajasthan",
    title: "Rajasthan",
    categoryKey: "group",
    tripTypes: ["domestic", "backpacking"],
    domState: "Rajasthan",
    region: "Group",
    state: "Rajasthan",
    image: groupRajasthan,
    blurb: "Majestic forts, desert dunes, and royal palaces — a colourful journey through India's land of kings.",
    highlights: ["Forts & Palaces", "Desert Safari", "Pink City"],
    duration: "5 Nights / 6 Days",
    price: {
      from: "₹14,399",
      note: "+5% GST · ₹4,000 booking (non-refundable)"
    },
    details: {
      duration: "5 Nights / 6 Days",
      departure: "Jaipur arrival (railway station / airport pickup)",
      bestTime: "October to March",
      idealFor: "Friends & families",
      about: "Rajasthan is royal India at its most colourful — Jaipur's forts, Jaisalmer's golden desert and Udaipur's lakes. This loop captures the highlights with a desert-camp night.",
      itinerary: [
        { day: "1", title: "Jaipur arrival", desc: "Pickup, hotel check-in. Sisodiya Rani & Birla temples, Hawa Mahal photo stop; optional Chokhi Dhani evening; stay in Jaipur." },
        { day: "2", title: "Jaipur sightseeing", desc: "Amber Fort, Jal Mahal, City Palace, Jantar Mantar and Sheesh Mahal; evening shopping; stay in Jaipur." },
        { day: "3", title: "Ajmer, Pushkar & Jodhpur", desc: "Ajmer Sharif Dargah and Pushkar (Brahma Temple & lake); evening reach Jodhpur; dinner & stay." },
        { day: "4", title: "Jodhpur to Jaisalmer", desc: "Mehrangarh Fort, Umaid Bhawan, Jaswant Thada, Mandore Garden and the clock tower; evening drive to Jaisalmer." },
        { day: "5", title: "Jaisalmer & desert camp", desc: "Jaisalmer Fort, the havelis, Gadisar Lake and Bada Bagh; Sam Sand Dunes camel safari, folk night, campfire and buffet dinner at a desert camp." },
        { day: "6", title: "Jaisalmer to Jaipur", desc: "Breakfast, drive back to Jaipur; drop at airport / railway station." }
      ],
      inclusions: ["Local transport for 6 days", "Airport pickup & drop", "Dinner & breakfast", "Accommodation", "Driver charges, tolls & parking"],
      exclusions: ["Train / airfare", "Activities (camel ride, photo shoots, etc.)", "Entry tickets", "Anything not listed under inclusions"],
    },
  },
  {
    id: "group-wayanad",
    title: "Wayanad",
    categoryKey: "group",
    tripTypes: ["domestic", "weekend"],
    domState: "Kerala",
    region: "Group",
    state: "Kerala",
    image: groupWayanad,
    blurb: "Lush forests, waterfalls, and wildlife trails — a green, easygoing group retreat in the hills.",
    highlights: ["Forests", "Waterfalls", "Wildlife"],
    duration: "2 Nights / 3 Days",
    price: {
      from: "₹7,499",
      fromCity: "₹6,699 (BLR–BLR)",
      city: "HYD / BZA / CHE",
      ac3: "₹8,999 (3rd AC)",
      note: "+5% GST · couple room ₹2,799 / tatkal ₹300 pp"
    },
    details: {
      duration: "2 Nights / 3 Days",
      departure: "Every Friday · HYD (KCG 7:05 PM) to BLR/MYS",
      bestTime: "October to May",
      idealFor: "Friends & groups",
      about: "Wayanad is Kerala's green highland — forests, waterfalls, caves and easy wildlife. A relaxed nature weekend with a bit of light adventure.",
      itinerary: [
        { day: "1", title: "Into Wayanad", desc: "From Mysore drive to Wayanad — Kuruvadweep and Banasura Sagar Dam; stay in Wayanad." },
        { day: "2", title: "Chembra & falls", desc: "Chembra Peak trek, Soochipara Waterfalls, 900 Kandi glass bridge, zipline and shopping; night stay in Wayanad." },
        { day: "3", title: "Caves & return", desc: "Edakkal Caves or Mysore Palace; drive back to Mysore railway station." }
      ],
      inclusions: ["Sleeper train tickets", "Local transport for 3 days", "Accommodation (4 or 3 sharing)", "Driver charges, tolls & taxes", "Trip coordinator (11 pax batch)", "First aid"],
      exclusions: ["Food", "Entry tickets & jeep ride", "Other activities & boat rides", "Anything not listed under inclusions"],
    },
  },
  {
    id: "intl-bali",
    title: "Bali",
    categoryKey: "international",
    tripTypes: ["international"],
    region: "International",
    state: "Indonesia",
    image: intlBali,
    blurb: "Rice terraces, beach clubs, and temple sunsets — the island of the gods, endlessly photogenic.",
    highlights: ["Ubud Rice Terraces", "Beaches", "Temples"],
    duration: "5 Nights / 6 Days",
    price: { from: "Ask us", note: "Message us for current dates & pricing" },
    details: {
      duration: "5 Nights / 6 Days",
      bestTime: "April to October",
      idealFor: "Couples & friends",
      about: "Bali blends emerald rice terraces, clifftop temples and beach-club energy. This itinerary splits time between cultural Ubud and the beaches of the south.",
      itinerary: [
        { day: "1", title: "Arrive Bali", desc: "Airport pickup and transfer to your hotel; evening at leisure." },
        { day: "2", title: "Ubud", desc: "Tegalalang rice terraces, sacred monkey forest and a swing experience." },
        { day: "3", title: "Temples & waterfalls", desc: "Tirta Empul temple, Tegenungan waterfall and Ubud market." },
        { day: "4", title: "South Bali", desc: "Uluwatu temple sunset and Kecak fire dance; beach clubs." },
        { day: "5", title: "Nusa Penida day trip", desc: "Boat day trip to Nusa Penida's iconic viewpoints and beaches." },
        { day: "6", title: "Departure", desc: "Transfer to the airport." }
      ],
      inclusions: ["Hotel accommodation on sharing basis", "Daily breakfast", "Airport transfers & tours per itinerary", "English-speaking local guide/driver", "Trip coordinator"],
      exclusions: ["International flights", "Visa (visa-on-arrival fee)", "Lunch & dinner", "Activities & entry tickets not listed", "Travel insurance"],
    },
  },
  {
    id: "intl-dubai",
    title: "Dubai",
    categoryKey: "international",
    tripTypes: ["international"],
    region: "International",
    state: "UAE",
    image: intlDubai,
    blurb: "Sky-high views, desert safaris, and dazzling nights — luxury and adventure in the city of superlatives.",
    highlights: ["Burj Khalifa", "Desert Safari", "Marina"],
    duration: "4 Nights / 5 Days",
    price: { from: "Ask us", note: "Message us for current dates & pricing" },
    details: {
      duration: "4 Nights / 5 Days",
      bestTime: "November to March",
      idealFor: "Friends, couples & families",
      about: "Dubai is the city of superlatives — the world's tallest tower, golden desert dunes and glittering nights. This trip balances city dazzle with a classic desert safari.",
      itinerary: [
        { day: "1", title: "Arrive Dubai", desc: "Airport pickup; evening at the Dubai Marina / JBR." },
        { day: "2", title: "City tour & Burj Khalifa", desc: "Dubai city tour and 'At the Top' Burj Khalifa observation deck." },
        { day: "3", title: "Desert safari", desc: "Dune bashing, camel ride and a BBQ dinner with live shows." },
        { day: "4", title: "Abu Dhabi / leisure", desc: "Optional Abu Dhabi tour or theme parks; shopping." },
        { day: "5", title: "Departure", desc: "Transfer to the airport." }
      ],
      inclusions: ["Hotel accommodation on sharing basis", "Daily breakfast", "Airport transfers & tours per itinerary", "Desert safari with dinner", "Trip coordinator"],
      exclusions: ["International flights", "UAE visa", "Lunch & dinner unless specified", "Burj Khalifa / park tickets not listed", "Travel insurance"],
    },
  },
  {
    id: "intl-maldives",
    title: "Maldives",
    categoryKey: "international",
    tripTypes: ["international"],
    region: "International",
    state: "Maldives",
    image: intlMaldives,
    blurb: "Overwater villas, crystal lagoons, and coral reefs — the ultimate slice of tropical paradise.",
    highlights: ["Overwater Villas", "Snorkeling", "Lagoons"],
    duration: "3 Nights / 4 Days",
    price: { from: "Ask us", note: "Message us for current dates & pricing" },
    details: {
      duration: "3 Nights / 4 Days",
      bestTime: "November to April",
      idealFor: "Couples & honeymooners",
      about: "The Maldives is barefoot luxury — turquoise lagoons, house-reef snorkeling and overwater living. A short, dreamy escape that feels worlds away.",
      itinerary: [
        { day: "1", title: "Arrive Male", desc: "Speedboat / seaplane transfer to your resort or island; leisure." },
        { day: "2", title: "Island & reef", desc: "Snorkeling on the house reef and beach time." },
        { day: "3", title: "Water activities", desc: "Sandbank trip, sunset cruise or dolphin watching (optional)." },
        { day: "4", title: "Departure", desc: "Transfer back to Male for your flight." }
      ],
      inclusions: ["Resort / island accommodation", "Daily breakfast (or as per resort plan)", "Speedboat / ferry transfers", "Trip coordinator support"],
      exclusions: ["International flights", "Seaplane upgrade if applicable", "Lunch & dinner unless specified", "Water sports & excursions", "Travel insurance"],
    },
  },
  {
    id: "intl-sri-lanka",
    title: "Sri Lanka",
    categoryKey: "international",
    tripTypes: ["international"],
    region: "International",
    state: "Sri Lanka",
    image: intlSriLanka,
    blurb: "Ancient rock fortresses, hill-country tea trails, and golden beaches — a compact island of wonders.",
    highlights: ["Sigiriya", "Tea Country", "Beaches"],
    duration: "5 Nights / 6 Days",
    price: { from: "Ask us", note: "Message us for current dates & pricing" },
    details: {
      duration: "5 Nights / 6 Days",
      bestTime: "December to April",
      idealFor: "Friends, couples & families",
      about: "Sri Lanka packs a lot into a small island — the Sigiriya rock fortress, Kandy's temple, Nuwara Eliya's tea hills and southern beaches, all within easy drives.",
      itinerary: [
        { day: "1", title: "Arrive Colombo", desc: "Pickup and drive towards the cultural triangle." },
        { day: "2", title: "Sigiriya & Dambulla", desc: "Climb Sigiriya rock fortress and visit the Dambulla cave temple." },
        { day: "3", title: "Kandy", desc: "Temple of the Tooth and a cultural dance show." },
        { day: "4", title: "Nuwara Eliya", desc: "Scenic train / drive through tea country and plantations." },
        { day: "5", title: "Bentota / beaches", desc: "Drive south for beach and leisure time." },
        { day: "6", title: "Departure", desc: "Transfer to Colombo airport." }
      ],
      inclusions: ["Hotel accommodation on sharing basis", "Daily breakfast", "Airport transfers & tours per itinerary", "English-speaking driver/guide", "Trip coordinator"],
      exclusions: ["International flights", "Sri Lanka visa (ETA)", "Lunch & dinner", "Entry tickets not listed", "Travel insurance"],
    },
  },
  {
    id: "intl-thailand",
    title: "Thailand",
    categoryKey: "international",
    tripTypes: ["international"],
    region: "International",
    state: "Thailand",
    image: intlThailand,
    blurb: "Island beaches, buzzing markets, and grand temples — vibrant culture and nightlife in equal measure.",
    highlights: ["Phuket", "Bangkok", "Island Tours"],
    duration: "5 Nights / 6 Days",
    price: { from: "Ask us", note: "Message us for current dates & pricing" },
    details: {
      duration: "5 Nights / 6 Days",
      bestTime: "November to March",
      idealFor: "Friends & couples",
      about: "Thailand serves up beaches, temples and night markets with famously warm hospitality. This trip splits time between island Phuket and buzzing Bangkok.",
      itinerary: [
        { day: "1", title: "Arrive Phuket", desc: "Airport pickup; evening at Patong beach." },
        { day: "2", title: "Phi Phi islands", desc: "Speedboat island tour — Phi Phi, Maya Bay and snorkeling." },
        { day: "3", title: "Phuket leisure", desc: "Big Buddha, Old Town and optional Phuket activities." },
        { day: "4", title: "Fly to Bangkok", desc: "Transfer to Bangkok; evening at leisure." },
        { day: "5", title: "Bangkok city", desc: "Grand Palace, temples and a night market." },
        { day: "6", title: "Departure", desc: "Transfer to the airport." }
      ],
      inclusions: ["Hotel accommodation on sharing basis", "Daily breakfast", "Airport transfers & tours per itinerary", "Island tour by speedboat", "Trip coordinator"],
      exclusions: ["International flights", "Thailand visa if applicable", "Internal Phuket-Bangkok flight unless specified", "Lunch & dinner", "Travel insurance"],
    },
  },
  {
    id: "intl-vietnam",
    title: "Vietnam",
    categoryKey: "international",
    tripTypes: ["international"],
    region: "International",
    state: "Vietnam",
    image: intlVietnam,
    blurb: "Emerald bays, lantern-lit old towns, and scenic cruises — a breathtaking sweep of Southeast Asia.",
    highlights: ["Ha Long Bay", "Hoi An", "Cruises"],
    duration: "6 Nights / 7 Days",
    price: { from: "Ask us", note: "Message us for current dates & pricing" },
    details: {
      duration: "6 Nights / 7 Days",
      bestTime: "October to April",
      idealFor: "Friends & couples",
      about: "Vietnam runs from Hanoi's old quarter and the emerald karsts of Ha Long Bay to the lantern-lit streets of Hoi An — a scenic, culture-rich journey.",
      itinerary: [
        { day: "1", title: "Arrive Hanoi", desc: "Pickup and Old Quarter walk; egg coffee." },
        { day: "2", title: "Ha Long Bay cruise", desc: "Overnight cruise among the limestone karsts; kayaking." },
        { day: "3", title: "Back to Hanoi", desc: "Cruise breakfast, return to Hanoi; city sights." },
        { day: "4", title: "Fly to Da Nang / Hoi An", desc: "Transfer to Hoi An ancient town; lantern evening." },
        { day: "5", title: "Hoi An & Marble Mountains", desc: "Old town, Marble Mountains and a basket-boat ride." },
        { day: "6", title: "Ba Na Hills", desc: "Golden Bridge and Ba Na Hills cable car." },
        { day: "7", title: "Departure", desc: "Transfer to the airport." }
      ],
      inclusions: ["Hotel accommodation on sharing basis", "Daily breakfast", "Ha Long Bay overnight cruise", "Airport transfers & tours per itinerary", "Trip coordinator"],
      exclusions: ["International flights", "Vietnam visa", "Internal flights unless specified", "Lunch & dinner", "Travel insurance"],
    },
  },
  {
    id: "pilg-kashi-ayodhya-prayagraj",
    title: "Kashi, Ayodhya & Prayagraj",
    categoryKey: "pilgrimage",
    tripTypes: ["pilgrimage"],
    region: "Pilgrimage",
    state: "Uttar Pradesh",
    image: pilgKashi,
    blurb: "The sacred trio — Ganga aarti at Kashi, the Ram temple at Ayodhya, and the holy Sangam at Prayagraj.",
    highlights: ["Ganga Aarti", "Ram Mandir", "Triveni Sangam"],
    duration: "3 Nights / 4 Days",
    price: {
      from: "₹10,299",
      note: "+5% GST per head"
    },
    details: {
      duration: "3 Nights / 4 Days",
      departure: "From HYD / BLR / BZA / CHE",
      bestTime: "October to March",
      idealFor: "Families & devotees",
      about: "This circuit covers three of North India's holiest cities — Varanasi (Kashi), Ayodhya and Prayagraj — taking in the Ganga aarti, the Ram Mandir and the sacred Triveni Sangam.",
      itinerary: [
        { day: "1", title: "Varanasi", desc: "Pickup, check-in. Ganga aarti, Kalabhairava temple and local shopping; night stay." },
        { day: "2", title: "Kashi & Prayagraj", desc: "Kashi Vishwanath temple, Assi Ghat, Sankat Mochan Hanuman temple and BHU; drive to Prayagraj; night stay." },
        { day: "3", title: "Sangam & Ayodhya", desc: "Early Triveni Sangam and Hanuman temple at Prayagraj; drive to Ayodhya — Ram Mandir; night stay in Ayodhya." },
        { day: "4", title: "Ayodhya", desc: "Sankat Mochan Hanuman Mandir and Ayodhya city; onward journey." }
      ],
      inclusions: ["Sleeper class train tickets (up & down)", "Local transport for 4 days", "3 breakfasts", "Triveni Sangam boat ride", "Driver allowances, tolls & taxes", "Trip guide (11 pax)", "1 darshanam ticket in Kashi", "First aid"],
      exclusions: ["Food", "Entry tickets", "Other activities", "Personal expenses"],
    },
  },
  {
    id: "pilg-kedarnath-badrinath",
    title: "Kedarnath & Badrinath",
    categoryKey: "pilgrimage",
    tripTypes: ["pilgrimage"],
    region: "Pilgrimage",
    state: "Uttarakhand",
    image: pilgKedarnath,
    blurb: "Two of the holiest Himalayan shrines amid towering peaks — a soul-stirring journey of devotion.",
    highlights: ["Kedarnath Temple", "Badrinath", "Himalayas"],
    duration: "5 Nights / 6 Days",
    price: {
      from: "₹15,499",
      fromCity: "₹11,899 (Delhi–Delhi)",
      city: "HYD / BLR / BZA / CHE",
      note: "+5% GST"
    },
    details: {
      duration: "5 Nights / 6 Days",
      departure: "Every Wednesday · From Delhi",
      bestTime: "May to June & Sept to Oct",
      idealFor: "Devotees & families",
      about: "Kedarnath and Badrinath are two of the revered Char Dham shrines, set high in the Garhwal Himalayas. This yatra covers the trek to Kedarnath and the drive to Badrinath, amid stunning mountain scenery.",
      itinerary: [
        { day: "1", title: "Delhi to Rishikesh", desc: "Reach Delhi by 8 AM, drive to Haridwar by 2 PM; explore Rishikesh — Ganga aarti, Ram Jhula & Laxman Jhula; stay in Rishikesh." },
        { day: "2", title: "To Guptkashi", desc: "Drive from Haridwar to Guptkashi via Devprayag; night stay in rooms." },
        { day: "3", title: "Kedarnath trek", desc: "Start 2 AM to Sonprayag, sumo to Gaurikund, trek 16 km to Kedarnath; temple darshan; night camping." },
        { day: "4", title: "Return to Guptkashi", desc: "Morning temple view, descend and drive to Rishikesh side; night stay in Guptkashi." },
        { day: "5", title: "Rishikesh rafting", desc: "Drive to Rishikesh, 16 km river rafting, sightseeing; night stay in Rishikesh." },
        { day: "6", title: "Rishikesh to Delhi", desc: "Drive back to Delhi; trip ends." }
      ],
      inclusions: ["Sleeper class train tickets", "Delhi–Haridwar train tickets", "Local tempo traveller", "Accommodation for 3 nights", "Entry tickets", "River rafting (16 km)", "Trip organizer"],
      exclusions: ["Food", "Water bottles", "Personal expenses", "Anything not listed under inclusions"],
    },
  },
  {
    id: "pilg-puri-bhubaneswar",
    title: "Puri & Bhubaneswar",
    categoryKey: "pilgrimage",
    tripTypes: ["pilgrimage"],
    region: "Pilgrimage",
    state: "Odisha",
    image: pilgPuri,
    blurb: "The revered Jagannath Temple, ancient stone shrines, and the golden Puri shoreline.",
    highlights: ["Jagannath Temple", "Konark Sun Temple", "Puri Beach"],
    duration: "3 Nights / 4 Days",
    price: { from: "Ask us", note: "Message us for current dates & pricing" },
    details: {
      duration: "3 Nights / 4 Days",
      bestTime: "October to March",
      idealFor: "Families & devotees",
      about: "Odisha's spiritual heart — the Jagannath Temple at Puri, the UNESCO Konark Sun Temple and Bhubaneswar's ancient shrines, paired with a golden stretch of coastline.",
      itinerary: [
        { day: "1", title: "Arrive Bhubaneswar", desc: "Lingaraj and ancient temples; transfer to Puri." },
        { day: "2", title: "Puri darshan", desc: "Jagannath Temple darshan and Puri beach evening." },
        { day: "3", title: "Konark", desc: "Konark Sun Temple and Chandrabhaga beach; Chilika optional." },
        { day: "4", title: "Departure", desc: "Transfer for your onward journey." }
      ],
      inclusions: ["Comfortable accommodation on sharing basis", "Daily breakfast", "All transfers & sightseeing by road", "Experienced trip captain / coordinator", "Toll, parking & driver charges"],
      exclusions: ["Flights / train tickets to the start point", "Lunch & dinner unless specified", "Entry tickets, activities & personal expenses", "Anything not listed under inclusions", "5% GST on package amount"],
    },
  },
  {
    id: "pilg-shirdi-jyotirlinga",
    title: "Shirdi & 3 Jyotirlinga",
    categoryKey: "pilgrimage",
    tripTypes: ["pilgrimage"],
    region: "Pilgrimage",
    state: "Maharashtra",
    image: pilgShirdi,
    blurb: "Darshan at Sai Baba's Shirdi paired with two sacred Jyotirlinga shrines — a deeply blessed circuit.",
    highlights: ["Sai Baba Temple", "Jyotirlinga Darshan", "Aarti"],
    duration: "2 Nights / 3 Days",
    price: {
      from: "₹7,999",
      note: "+5% GST"
    },
    details: {
      duration: "2 Nights / 3 Days",
      departure: "From Hyderabad",
      bestTime: "All year",
      idealFor: "Families & devotees",
      about: "A blessed short circuit — darshan at Sai Baba's Shirdi together with the Bhimashankar and Trimbakeshwar Jyotirlinga shrines in Maharashtra.",
      itinerary: [
        { day: "1", title: "Bhimashankar", desc: "Reach Pune, check-in. Bhimashankar Jyotirlinga; drive to Nashik; night stay in Nashik." },
        { day: "2", title: "Trimbakeshwar & Grishneshwar", desc: "Trimbakeshwar temple, Panchavati; Grishneshwar Jyotirlinga and Ellora Caves; drive to Shirdi; night stay." },
        { day: "3", title: "Shirdi", desc: "Early Sai Baba darshan, Dwarakamai and Sai Museum if time permits; drive to Pune station and board the train." }
      ],
      inclusions: ["Sleeper class train tickets (up & down)", "Local transport for 3 days", "Accommodation (4 or 3 sharing)", "Driver allowances, tolls & taxes", "Trip coordinator (11 pax)"],
      exclusions: ["Food", "Entry tickets", "Temple special darshanam tickets", "Personal expenses"],
    },
  },
  {
    id: "pilg-ujjain-omkareshwar",
    title: "Ujjain & Omkareshwar",
    categoryKey: "pilgrimage",
    tripTypes: ["pilgrimage"],
    region: "Pilgrimage",
    state: "Madhya Pradesh",
    image: pilgUjjain,
    blurb: "Mahakaleshwar's revered Jyotirlinga and the island temple of Omkareshwar on the sacred Narmada.",
    highlights: ["Mahakaleshwar", "Omkareshwar", "Bhasma Aarti"],
    duration: "2 Nights / 3 Days",
    price: {
      from: "₹7,999",
      note: "+5% GST"
    },
    details: {
      duration: "2 Nights / 3 Days",
      departure: "From Hyderabad",
      bestTime: "October to March",
      idealFor: "Families & devotees",
      about: "Madhya Pradesh's sacred duo — the powerful Mahakaleshwar Jyotirlinga at Ujjain (famed for its Bhasma aarti) and the island shrine of Omkareshwar on the Narmada.",
      itinerary: [
        { day: "1", title: "Ujjain", desc: "Drive to Ujjain, check-in. Mahakaleshwar Jyotirlinga, Kal Bhairav and Harsiddhi Mata temples; local shopping; overnight in Ujjain." },
        { day: "2", title: "Indore & Omkareshwar", desc: "Indore — Rajwada Palace, Annapurna temple, street food & shopping; drive ~3 hrs to Omkareshwar; overnight stay." },
        { day: "3", title: "Omkareshwar", desc: "Omkareshwar Jyotirlinga and Mamleshwar temple, a Narmada walk or boat ride; return and board the train." }
      ],
      inclusions: ["Sleeper class train tickets (up & down)", "Local transport", "Auto cost for Ujjain (5–6 per auto)", "AC hotel — 1 night Ujjain + 1 night Omkareshwar (3/4 sharing, extra mattress)", "Driver allowances, tolls & taxes", "Tour guide (10 pax)"],
      exclusions: ["Food", "Any darshanam or puja tickets", "Narmada river boating", "Personal expenses", "Anything not listed under inclusions"],
    },
  },
  {
    id: "group-pondicherry",
    title: "Pondicherry",
    categoryKey: "group",
    tripTypes: ["weekend"],
    region: "Group",
    state: "Tamil Nadu",
    image: groupOoty,
    imagePlaceholder: true, // TODO: replace with real photo for this trip
    blurb: "French-quarter charm, rocky beaches and Auroville calm — a breezy coastal weekend.",
    highlights: ["Rock Beach", "Auroville", "Paradise Beach"],
    duration: "2 Nights / 3 Days",
    price: {
      from: "₹7,499",
      fromCity: "₹6,699 (CHE–CHE)",
      city: "HYD / BLR / BZA",
      ac3: "₹8,999 (3rd AC)",
      note: "+5% GST · ₹500 off"
    },
    details: {
      duration: "2 Nights / 3 Days",
      departure: "From Chennai · weekend getaway",
      idealFor: "Friends & groups",
      about: "Pondicherry trades pace for a French-quarter saunter — pastel streets, seaside promenades and the meditative calm of Auroville, with a day trip out to mangroves and temple-town beaches.",
      itinerary: [
        { day: "1", title: "Pondicherry beaches", desc: "Reach Chennai, drive to Pondicherry. Chunnambar boat house, Paradise Beach, Rock & Serenity beaches, Promenade Beach and the French colonial landmarks." },
        { day: "2", title: "Auroville & mangroves", desc: "Sunrise on the beach, Auroville by 9:30 AM, Pichavaram mangrove forest, Paradise and Promenade beaches." },
        { day: "3", title: "Mahabalipuram", desc: "Check out, Mahabalipuram temple and Marina Beach; trip ends." }
      ],
      inclusions: ["SL class train tickets", "Local transport (AC)", "Accommodation (4 or 3 sharing)", "Driver charges", "Tolls, taxes & parking", "Trip organizer (11+ pp)"],
      exclusions: ["Personal expenses", "Food expenses", "Anything not listed under inclusions"],
    },
  },
  {
    id: "group-arunachalam-pondicherry",
    title: "Arunachalam & Pondicherry",
    categoryKey: "group",
    tripTypes: ["domestic", "weekend"],
    domState: "Tamil Nadu",
    region: "Group",
    state: "Tamil Nadu",
    image: groupOoty,
    imagePlaceholder: true, // TODO: replace with real photo for this trip
    blurb: "Temple-town serenity meets seaside calm — Ramana Maharshi's Arunachalam paired with Pondicherry.",
    highlights: ["Ramana Ashram", "Auroville", "Mahabalipuram"],
    duration: "2 Nights / 3 Days",
    price: {
      from: "₹7,499",
      note: "+5% GST"
    },
    details: {
      duration: "2 Nights / 3 Days",
      departure: "From Hyderabad",
      idealFor: "Friends & groups",
      about: "A gentle spiritual-and-seaside pairing — the calm of Tiruvannamalai's Ramana Maharshi Ashram, then Pondicherry's French colony, Auroville and the temples of Mahabalipuram.",
      itinerary: [
        { day: "1", title: "Arunachalam", desc: "Reach Chennai, drive to Arunachalam, check-in. Sri Ramana Maharshi Ashram, temple prasadam and optional local shopping; dinner & rest." },
        { day: "2", title: "Mangroves & Pondicherry", desc: "Pichavaram mangrove boat ride (self-paid), drive to Pondicherry — Auroville, French colony and the beaches; dinner & rest." },
        { day: "3", title: "Mahabalipuram", desc: "Mahabalipuram temple and Marina Beach; board the train." }
      ],
      inclusions: ["Sleeper class train tickets (up & down)", "Local transport for 3 days", "Accommodation (4 or 3 sharing)", "Driver allowances & toll taxes", "State permits", "Trip coordinator (11 pax)", "First aid"],
      exclusions: ["Food", "Entry tickets", "Other activities", "Personal expenses"],
    },
  },
  {
    id: "group-hampi-gokarna-murdeshwar",
    title: "Hampi, Gokarna, Dandeli & Murdeshwar",
    categoryKey: "group",
    tripTypes: ["domestic"],
    domState: "Karnataka",
    region: "Group",
    state: "Karnataka",
    image: groupGokarna,
    imagePlaceholder: true, // TODO: replace with real photo for this trip
    blurb: "Ruins, rivers, beaches and a temple by the sea — a packed 4-day Karnataka adventure.",
    highlights: ["Hampi Ruins", "Dandeli Rafting", "Murudeshwar"],
    duration: "3 Nights / 4 Days",
    price: {
      from: "₹8,699",
      fromCity: "₹7,899 (BLR–BLR)",
      city: "HYD / BZA / CHE",
      ac3: "₹10,199 (3rd AC)",
      note: "+5% GST"
    },
    details: {
      duration: "3 Nights / 4 Days",
      departure: "HYD (Nampally 3:50 PM) / BLR (KSR 11:00 PM) / BZA (Vijayawada 1:10 PM)",
      idealFor: "Friends & groups",
      about: "This loop strings together Hampi's boulder-strewn ruins, Dandeli's river adventures and the coastal calm of Gokarna and Murudeshwar — history, adrenaline and beaches in one go.",
      itinerary: [
        { day: "1", title: "Hampi", desc: "Reach Hubli, freshen up and drive to Hampi — Achyutaraya & Vijaya Vittala temples and Hippie Island; night stay Hubli." },
        { day: "2", title: "Dandeli", desc: "Drive to Dandeli for boating, kayaking, zorbing, sky cycling, 360 cycling, land zipline and archery; rain dance, campfire and camping." },
        { day: "3", title: "Coast", desc: "Vibhuti Waterfalls, Yana caves (optional), Honavar, Murudeshwar temple and mangroves; stay in Gokarna." },
        { day: "4", title: "Gokarna", desc: "Mahabaleshwar temple, Mirjan Fort, Om & Kudle beaches; back to station for the 7:30 PM train." }
      ],
      inclusions: ["SL train (up/down)", "Dandeli food (1 day)", "6 activities in Dandeli", "Local transportation", "Accommodation (4 or 3 sharing)", "Entry tickets & fares", "First aid", "Trip organizer"],
      exclusions: ["Food expense", "Water activities", "Personal expenses", "Anything not listed under inclusions"],
    },
  },
  {
    id: "group-coorg-wayanad",
    title: "Coorg & Wayanad",
    categoryKey: "group",
    tripTypes: ["weekend"],
    region: "Group",
    state: "Karnataka & Kerala",
    image: groupCoorg,
    imagePlaceholder: true, // TODO: replace with real photo for this trip
    blurb: "Coffee-country hills and Wayanad's green highlands across a relaxed long weekend.",
    highlights: ["Chembra Peak", "Mandalpatti", "Banasura Dam"],
    duration: "3 Nights / 4 Days",
    price: {
      from: "₹8,699",
      fromCity: "₹7,899 (BLR–BLR)",
      city: "HYD / BZA / CHE",
      ac3: "₹10,199 (3rd AC)",
      note: "+5% GST"
    },
    details: {
      duration: "3 Nights / 4 Days",
      departure: "From Hyderabad (Kachiguda 7:05 PM)",
      idealFor: "Friends & groups",
      about: "Two of the south's greenest highlands back to back — Wayanad's peaks and dams, then Coorg's coffee estates and Mandalpatti trek.",
      itinerary: [
        { day: "1", title: "Wayanad", desc: "Reach Mysore ~9:30 AM, drive to Wayanad — Kuruvadweep bamboo rafting and Banasura Sagar Dam; homestay." },
        { day: "2", title: "Chembra trek", desc: "Early Chembra Peak trek, Soochipara Waterfalls, zipline and glass bridge; overnight stay." },
        { day: "3", title: "Coorg", desc: "Golden Temple, elephant camp, music fountain and hanging bridge; overnight in Coorg." },
        { day: "4", title: "Mandalpatti", desc: "Mandalpatti trek, Abbey Falls, Raja's Seat (if time permits) and shopping; drive to Mysore." }
      ],
      inclusions: ["SL class train ticket", "Local tempo for 4 days (non-AC)", "Accommodation (4 or 3 sharing)", "Trip coordinator (11 pax)", "Driver charges", "Tolls & taxes", "First aid"],
      exclusions: ["River rafting, zipline & other activities", "Entry tickets", "Food & personal expenses", "Anything not listed under inclusions"],
    },
  },
  {
    id: "group-shimla-manali",
    title: "Shimla, Kullu Manali & Kasol",
    categoryKey: "group",
    tripTypes: ["domestic", "backpacking"],
    domState: "Himachal",
    region: "Group",
    state: "Himachal Pradesh",
    image: groupManali,
    imagePlaceholder: true, // TODO: replace with real photo for this trip
    blurb: "Snow valleys, riverside Kasol and colonial Shimla — the full Himachal circuit.",
    highlights: ["Solang Valley", "Kasol", "Shimla Ridge"],
    duration: "4 Nights / 5 Days",
    price: {
      from: "₹12,799",
      fromCity: "₹10,999 (Delhi–Delhi)",
      note: "+5% GST"
    },
    details: {
      duration: "4 Nights / 5 Days",
      departure: "Every Tuesday & Friday · Delhi (Kashmiri Gate 7:30 PM)",
      idealFor: "Friends & groups",
      about: "A fuller Himachal loop — Manali's snow points and Atal Tunnel, the Parvati-valley vibe of Kullu and Kasol, capped with a day in colonial-era Shimla.",
      itinerary: [
        { day: "1", title: "Manali", desc: "Reach Manali ~8:30 AM. Jogini Waterfalls, Hadimba, Vashisht & Ram temples, Club House, Van Vihar, Mall Road and Old Manali; dinner & stay." },
        { day: "2", title: "Solang & Atal Tunnel", desc: "Atal Tunnel and Solang Valley adventure activities; back by 6:30 PM; dinner." },
        { day: "3", title: "Kullu & Kasol", desc: "Kullu river rafting and paragliding, sightseeing & shopping; night camping in Kasol with DJ night & campfire." },
        { day: "4", title: "Kasol to Shimla", desc: "Manikaran temple, gurudwara and Kasol nature park; drive to Shimla." },
        { day: "5", title: "Shimla", desc: "Christ Church, the Ridge, Mall Road, Botanical Garden and Lakkar Bazaar; bus from Shimla to Delhi." }
      ],
      inclusions: ["Volvo semi-sleeper both ways (Delhi–Delhi)", "Accommodation (1 Kasol, 2 Manali, Shimla)", "4 breakfasts & 4 dinners", "DJ night in Kasol", "Campfire & music (Manali)", "Local transport in Manali & Kasol", "Tolls, taxes & parking", "Trip coordinator (10+ pax)", "Driver charges"],
      exclusions: ["Entry tickets (Atal Tunnel & Rohtang Pass)", "Lunch on all days", "Snow activities & paragliding", "Personal expenses", "Anything not listed under inclusions"],
    },
  },
  {
    id: "group-goa",
    title: "Goa",
    categoryKey: "group",
    tripTypes: ["backpacking"],
    region: "Group",
    state: "Goa",
    image: groupGokarna,
    imagePlaceholder: true, // TODO: replace with real photo for this trip
    blurb: "Beaches, pool parties, a night cruise and North-and-South Goa tours — the classic Goa blowout.",
    highlights: ["Baga & Calangute", "Night Cruise", "Pool Party"],
    duration: "4 Nights / 5 Days",
    price: {
      from: "₹14,599",
      fromCity: "₹13,499 (Goa–Goa)",
      city: "HYD – HYD",
      note: "+5% GST"
    },
    details: {
      duration: "4 Nights / 5 Days",
      departure: "From Hyderabad",
      idealFor: "Friends & groups",
      about: "The full-tilt Goa package — beach days across North and South Goa, a hotel pool party, a night cruise and time to roam Panjim, all transfers handled.",
      itinerary: [
        { day: "1", title: "North Goa nights", desc: "Reach by 11 AM, resort check-in, pool party; explore Baga & Calangute beaches; dinner (veg & non-veg)." },
        { day: "2", title: "North Goa", desc: "Fort Aguada, Vagator and Anjuna beaches; night stay with dinner." },
        { day: "3", title: "South Goa", desc: "Miramar, Dona Paula, Old Goa church, Mangueshi & Balaji temples, wax museum and Panjim; night stay with dinner." },
        { day: "4", title: "Water sports / cruise", desc: "Scuba & water activities or beach chill-out; night cruise party." },
        { day: "5", title: "Panjim & return", desc: "Checkout, Immaculate Conception church, Panjim street and shopping; drive home." }
      ],
      inclusions: ["Train tickets (SL class)", "Accommodation", "Goa pickup & drop", "4 breakfasts & 4 dinners (veg & non-veg)", "One day South Goa tour", "One day North Goa tour", "Pickup & drop to Dudhsagar point", "Free use of swimming pool"],
      exclusions: ["Dudhsagar Waterfalls activity charges", "Shopping & personal expenses", "Scuba + watersport (₹2,000 pp)", "Dinner cruise (₹2,000 pp)", "Anything not listed under inclusions"],
    },
  },
  {
    id: "group-golden-triangle",
    title: "Golden Triangle",
    categoryKey: "group",
    tripTypes: ["backpacking"],
    region: "Group",
    state: "Delhi · Agra · Jaipur",
    image: groupRajasthan,
    imagePlaceholder: true, // TODO: replace with real photo for this trip
    blurb: "Taj Mahal, Pink-City forts and Old Delhi — India's iconic Delhi–Agra–Jaipur circuit.",
    highlights: ["Taj Mahal", "Amber Fort", "Red Fort"],
    duration: "4 Nights / 5 Days",
    price: {
      from: "₹9,999",
      note: "+5% GST per head"
    },
    details: {
      duration: "4 Nights / 5 Days",
      departure: "From Hyderabad",
      idealFor: "Friends & groups",
      about: "The classic first-timer's loop — Agra's Taj Mahal and fort, Jaipur's palaces and forts, and Delhi's landmarks, tied together with comfortable road transfers.",
      itinerary: [
        { day: "1", title: "Agra", desc: "Reach Agra, check-in. Taj Mahal, Agra Fort and a city tour; dinner and night stay." },
        { day: "2", title: "Jaipur", desc: "Drive to Jaipur (~4 hrs). Hawa Mahal and Jantar Mantar; dinner and night stay." },
        { day: "3", title: "Jaipur to Delhi", desc: "Amber Palace, Jal Mahal, Nahargarh Fort and Albert Museum; drive to Delhi; night stay." },
        { day: "4", title: "Delhi", desc: "Red Fort, Lotus Temple, India Gate and Qutub Minar if time permits; drive to the railway station." }
      ],
      inclusions: ["Sleeper class train tickets (up & down)", "Local transport for 4 days", "Accommodation", "3 dinners", "Driver allowances & toll taxes", "First aid"],
      exclusions: ["Food", "Entry tickets", "Personal expenses", "Anything not listed under inclusions"],
    },
  },
  {
    id: "group-nainital-rishikesh",
    title: "Nainital & Rishikesh",
    categoryKey: "group",
    tripTypes: ["domestic", "backpacking"],
    domState: "Uttarakhand",
    region: "Group",
    state: "Uttarakhand",
    image: pilgKedarnath,
    imagePlaceholder: true, // TODO: replace with real photo for this trip
    blurb: "Lake-town calm, Kainchi Dham and Rishikesh adventure — hills, temples and white water.",
    highlights: ["Naini Lake", "Kainchi Dham", "River Rafting"],
    duration: "3 Nights / 4 Days",
    price: {
      from: "₹13,899",
      note: "+5% GST per person"
    },
    details: {
      duration: "3 Nights / 4 Days",
      departure: "From Hyderabad · Delhi to Delhi",
      idealFor: "Friends & groups",
      about: "From Nainital's lake-town charm and the much-loved Kainchi Dham to Rishikesh's bungee, rafting and riverside aartis — a hills-and-adventure mix.",
      itinerary: [
        { day: "1", title: "Nainital", desc: "Reach Delhi, drive to Nainital. Naina Devi temple, Mall Road, Naini Lake boating, Eco Cave park and Bhimtal; night stay." },
        { day: "2", title: "Kainchi Dham & Rishikesh", desc: "Naina Peak viewpoint, Kainchi Dham darshan; drive to Rishikesh (3–4 hrs); night stay." },
        { day: "3", title: "Rishikesh adventure", desc: "Bungee jumping, river rafting and evening aarti; night stay in Rishikesh." },
        { day: "4", title: "Haridwar & return", desc: "Drive to Haridwar — morning aarti, Laxman & Ram Jhula and temples; drive to Delhi." }
      ],
      inclusions: ["Sleeper class train tickets (up & down)", "Local transport (AC)", "Accommodation (4 or 3 sharing)", "3 breakfasts", "Trip coordinator (Delhi–Delhi)"],
      exclusions: ["Food", "Entry tickets & other activities", "Personal expenses"],
    },
  },
  {
    id: "group-darjeeling",
    title: "Darjeeling",
    categoryKey: "group",
    tripTypes: ["domestic", "backpacking"],
    domState: "North East India",
    region: "Group",
    state: "West Bengal",
    image: groupKashmir,
    imagePlaceholder: true, // TODO: replace with real photo for this trip
    blurb: "Tiger Hill sunrises, toy-train loops, Mirik Lake and a peek across the Nepal border.",
    highlights: ["Tiger Hill", "Mirik Lake", "Tea Gardens"],
    duration: "3 Nights / 4 Days",
    price: {
      from: "₹20,850",
      note: "+5% GST per person"
    },
    details: {
      duration: "3 Nights / 4 Days",
      departure: "NJP railway station / Bagdogra airport",
      idealFor: "Friends & groups",
      about: "Darjeeling at its postcard best — sunrise over Kanchenjunga from Tiger Hill, monasteries and the toy-train loops, plus a Mirik Lake and Nepal-border market excursion.",
      itinerary: [
        { day: "1", title: "Arrive Darjeeling", desc: "Pickup from NJP/IXB, transfer to Darjeeling (~3–4 hrs), check-in; evening market stroll; overnight." },
        { day: "2", title: "Darjeeling sightseeing", desc: "Sunrise at Tiger Hill, then Ghoom Monastery, Batasia Loop, HMI, zoo, Tenzing Rock, refugee centre, tea garden and Japanese temple; overnight." },
        { day: "3", title: "Mirik & Nepal border", desc: "Full-day Mirik Lake excursion — boating and horse riding (own cost) and the Nepal Pashupati market; overnight." },
        { day: "4", title: "Departure", desc: "Breakfast, check-out and transfer to NJP / Bagdogra." }
      ],
      inclusions: ["Pickup & drop from NJP / Bagdogra", "Accommodation (twin/double sharing)", "Driver allowances & toll taxes"],
      exclusions: ["Food", "Entry tickets & other activities", "Personal expenses", "Nathula permits (Indo-China border)", "Zero Point (extra, paid to driver)"],
    },
  },
  {
    id: "group-leh-ladakh",
    title: "Leh – Ladakh (Leh–Leh)",
    categoryKey: "group",
    tripTypes: ["domestic", "backpacking"],
    domState: "Ladakh",
    region: "Group",
    state: "Ladakh",
    image: groupKashmir,
    imagePlaceholder: true, // TODO: replace with real photo for this trip
    blurb: "Khardung La, Nubra dunes and Pangong's electric-blue lake — a high-altitude bike/SUV odyssey.",
    highlights: ["Pangong Lake", "Nubra Valley", "Khardung La"],
    duration: "5 Nights / 6 Days",
    price: {
      from: "₹17,799",
      note: "Leh–Leh · caution deposit ₹8,000/bike"
    },
    details: {
      duration: "5 Nights / 6 Days",
      departure: "Leh (Leh–Leh)",
      idealFor: "Friends & groups",
      about: "The bucket-list Ladakh circuit by bike or SUV — over Khardung La to Nubra's dunes, out toward Turtuk, and on to the surreal blue of Pangong, with backup vehicle and oxygen support throughout.",
      itinerary: [
        { day: "1", title: "Leh", desc: "Reach Leh, check-in, acclimatize. Local sightseeing, briefing and gear collection; hotel stay." },
        { day: "2", title: "Nubra Valley", desc: "Cross Khardung La (17,582 ft), Diskit Monastery and the Maitreya Buddha; camp in Nubra." },
        { day: "3", title: "Turtuk / Siachen base", desc: "Drive to Turtuk village or Siachen base and back to the Nubra campsite." },
        { day: "4", title: "Pangong Lake", desc: "Ride along the Shyok river to Pangong Lake (14,270 ft); lakeside camping." },
        { day: "5", title: "Pangong to Leh", desc: "Cross Chang La (17,688 ft) and visit Thiksey Monastery; hotel stay in Leh." },
        { day: "6", title: "Departure", desc: "Breakfast and departure from Leh." }
      ],
      inclusions: ["Accommodation (3 sharing)", "5 breakfasts & 5 dinners", "Bike or four-wheeler of your choice", "Fuel for the entire journey", "Backup vehicle for luggage", "Mechanic assistance", "Helmets for rider & pillion", "Experienced tour captain", "First aid with 24×7 oxygen cylinders", "Sightseeing per itinerary"],
      exclusions: ["Anything not listed under inclusions", "Caution deposit ₹8,000/bike", "Permit & entry fees", "Personal expenses, insurance, laundry, biking gear (on rental)", "Leh airport pickup & drop", "Costs from itinerary changes due to weather"],
    },
  },
  {
    id: "group-munnar-thekkady",
    title: "Munnar & Thekkady",
    categoryKey: "group",
    tripTypes: ["domestic"],
    domState: "Kerala",
    region: "Group",
    state: "Kerala",
    image: groupKerala,
    imagePlaceholder: true, // TODO: replace with real photo for this trip
    blurb: "Waterfalls, tea-garden hills and a Thekkady elephant day — easygoing Kerala highlands.",
    highlights: ["Athirapally Falls", "Tea Gardens", "Elephant Ride"],
    duration: "3 Nights / 4 Days",
    price: {
      from: "₹9,999",
      note: "+5% GST per person"
    },
    details: {
      duration: "3 Nights / 4 Days",
      departure: "From base city to Ernakulam Jn",
      idealFor: "Friends & groups",
      about: "A relaxed Kerala-highlands trip — the Athirapally waterfalls, Munnar's tea gardens and viewpoints, and a Thekkady day of elephants and cultural shows.",
      itinerary: [
        { day: "1", title: "Athirapally", desc: "Athirapally, Cheeyappara and Valara waterfalls and a tea garden; night stay in Munnar with dinner." },
        { day: "2", title: "Munnar", desc: "Kundala Lake, Mattupetty Dam, Eco Point, Eravikulam / Top Station, tea museum and spice plantation; drive to Thekkady; dinner & stay." },
        { day: "3", title: "Thekkady", desc: "Elephant ride and bath, Kathakali, Kalaripayattu and a magic show; dinner & stay in Thekkady." },
        { day: "4", title: "Kochi", desc: "Drive to Kochi (~9:30 AM), shopping and beach if time permits; back to Ernakulam Jn." }
      ],
      inclusions: ["SL class train tickets", "Accommodation (4 or 3 sharing)", "3 breakfasts & 2 dinners", "Trip organizer (10+ pax)", "Driver charges", "Tolls & taxes", "Parking & first aid"],
      exclusions: ["Flight tickets & entry tickets", "Lunch on all days", "Meals in the train", "Personal expenses & activities", "Anything not listed under inclusions"],
    },
  },
  {
    id: "group-chopta-tungnath",
    title: "Chopta – Tungnath – Chandrashila Trek",
    categoryKey: "group",
    tripTypes: ["domestic"],
    domState: "Uttarakhand",
    region: "Group",
    state: "Uttarakhand",
    image: pilgKedarnath,
    imagePlaceholder: true, // TODO: replace with real photo for this trip
    blurb: "A short Himalayan trek to Tungnath temple and the Chandrashila summit — big views, Swiss camps.",
    highlights: ["Tungnath Temple", "Chandrashila", "Deoria Tal"],
    duration: "4 Nights / 5 Days",
    price: {
      from: "₹6,999",
      note: "per head · AC won't work in hilly areas"
    },
    details: {
      duration: "4 Nights / 5 Days",
      departure: "From New Delhi (overnight to Chopta)",
      idealFor: "Friends & groups",
      about: "An accessible high-Himalaya trek — through Garhwal to Chopta's Swiss camps, up to the Tungnath temple and Chandrashila summit for Nanda Devi and Trishul views, with a Deoria Tal walk to finish.",
      itinerary: [
        { day: "1", title: "Delhi to Chopta", desc: "Evening departure from Delhi by AC tempo traveller; overnight journey (~10 hrs)." },
        { day: "2", title: "Haridwar to Chopta", desc: "Morning Ganga aarti vibes at Haridwar, drive via Devprayag and Rudraprayag; reach Chopta, Swiss-camp check-in; nature walk, bonfire & music." },
        { day: "3", title: "Tungnath & Chandrashila", desc: "Trek to Tungnath temple (12,110 ft) and the Chandrashila summit (13,050 ft) — Nanda Devi, Chaukhamba and Trishul views; return to Chopta; bonfire night." },
        { day: "4", title: "Deoria Tal & return", desc: "Drive to Sari village, trek to Deoria Tal, then start back to Delhi; optional Rishikesh rafting; overnight journey." },
        { day: "5", title: "Reach Delhi", desc: "Morning arrival in Delhi; trip ends." }
      ],
      inclusions: ["AC tempo traveller (Delhi–Chopta–Delhi)", "2 nights stay (Swiss camps)", "2 breakfasts & 2 dinners", "Trek guide (Tungnath)", "Tour captain (12+ pax)", "Sightseeing per itinerary", "Bonfire & music nights", "First aid & assistance"],
      exclusions: ["Up & down train tickets", "Food", "Entry tickets & other activities", "Anything not listed under inclusions"],
    },
  },
  {
    id: "group-kerala-backpacking",
    title: "Kerala Backpacking",
    categoryKey: "group",
    tripTypes: ["backpacking"],
    region: "Group",
    state: "Kerala",
    image: groupKerala,
    imagePlaceholder: true, // TODO: replace with real photo for this trip
    blurb: "Kochi to Trivandrum in five days — waterfalls, Munnar, an Alleppey boathouse and Varkala cliffs.",
    highlights: ["Alleppey Boathouse", "Varkala Cliff", "Munnar"],
    duration: "5 Nights / 5 Days",
    price: {
      from: "Ask us",
      note: "3AC +₹1,800 both ways · Tatkal ₹400 SL / ₹600 3AC"
    },
    details: {
      duration: "5 Nights / 5 Days",
      departure: "From base city · backpacking trip",
      idealFor: "Friends & groups",
      about: "A backpacker's sweep of Kerala — Kochi's waterfalls and a Kalaripayattu show, Munnar's tea country, an Alleppey boathouse night, Varkala's cliffs and a Trivandrum temple-and-beach finish.",
      itinerary: [
        { day: "1", title: "Kochi", desc: "Arrive Kochi — Athirapally, Cheeyappara and Valara waterfalls and a Kalaripayattu show; night stay in Munnar with dinner." },
        { day: "2", title: "Munnar", desc: "Eravikulam National Park, Kundala Lake, Mattupetty Dam, Eco Point, tea museum, Blossom Park and spice plantation; dinner & stay." },
        { day: "3", title: "Alleppey", desc: "Drive to Alleppey, sightseeing & shopping; boathouse stay with dinner." },
        { day: "4", title: "Varkala", desc: "Jatayu Earth Centre and Varkala Cliff Point; night stay in Varkala." },
        { day: "5", title: "Trivandrum", desc: "Poovar boat ride, Sri Anantha Padmanabha Swamy temple, Azhimala Shiva temple and a beach; stay near Trivandrum station." }
      ],
      inclusions: ["SL class train tickets", "Local transport for 5 days (AC)", "Accommodation (3 sharing)", "Boathouse meals + 3 breakfasts", "Driver charges", "Parking & tolls", "Campfire & music", "Border taxes", "Trip coordinator (12 pax)", "First aid"],
      exclusions: ["All-day food (except boathouse & 3 breakfasts)", "Entry tickets", "Other activities & boat rides", "Anything not listed under inclusions"],
    },
  },
  {
    id: "group-kashmir-budget",
    title: "Kashmir",
    categoryKey: "group",
    tripTypes: ["domestic", "backpacking"],
    domState: "Kashmir",
    region: "Group",
    state: "Jammu & Kashmir",
    image: groupKashmir,
    imagePlaceholder: true, // TODO: replace with real photo for this trip
    blurb: "Sonmarg glaciers, Gulmarg meadows, Dal Lake houseboats and Pahalgam's valleys.",
    highlights: ["Sonmarg", "Gulmarg", "Dal Lake"],
    duration: "4 Nights / 5 Days",
    price: {
      from: "Ask us",
      note: "₹4,000 booking (non-refundable) · flights extra"
    },
    details: {
      duration: "4 Nights / 5 Days",
      departure: "Fly to Srinagar (BZA–Srinagar)",
      idealFor: "Friends & groups",
      about: "A relaxed valley loop with daily breakfast and dinner included — Sonmarg's glaciers, Gulmarg's meadows, a Dal Lake houseboat night and Pahalgam's saffron gardens and valleys.",
      itinerary: [
        { day: "1", title: "Srinagar", desc: "Reach Srinagar, hotel check-in, explore local markets; dinner and night stay." },
        { day: "2", title: "Sonmarg", desc: "Thajiwas glaciers and Zoji-La pass; hotel stay and dinner." },
        { day: "3", title: "Gulmarg", desc: "Strawberry valley, festival area, church and viewpoints." },
        { day: "4", title: "Srinagar sightseeing", desc: "Shalimar & Nishat Bagh, Dal Lake and a shikara ride; night stay in a Dal Lake houseboat." },
        { day: "5", title: "Pahalgam", desc: "Saffron gardens, Lidder river, Aru and Betaab valleys and Chandanwari." }
      ],
      inclusions: ["Daily breakfast & dinner (veg & non-veg)", "Accommodation (4 or 3 sharing)", "Shikara ride at Dal Lake", "Wi-Fi access", "First aid", "Driver allowances & toll taxes", "Parking charges", "24/7 phone support", "Srinagar airport pickup & drop"],
      exclusions: ["Flight tickets (BZA–Srinagar–BZA)", "Lunch on all days", "Activities (cable car, Zero Point, etc.)", "Personal expenses like shopping", "Anything not listed under inclusions"],
    },
  },
  {
    id: "pilg-kedarnath-badrinath-dodham",
    title: "Do Dham Yatra – Kedarnath & Badrinath",
    categoryKey: "pilgrimage",
    tripTypes: ["pilgrimage"],
    region: "Pilgrimage",
    state: "Uttarakhand",
    image: pilgKedarnath,
    imagePlaceholder: true, // TODO: replace with real photo for this trip
    blurb: "Both Himalayan dhams in one yatra — Kedarnath's trek and Badrinath, via Mana, India's last village.",
    highlights: ["Kedarnath", "Badrinath", "Mana Village"],
    duration: "6 Nights / 7 Days",
    price: {
      from: "₹17,499",
      fromCity: "₹15,999 (from Rishikesh)",
      note: "+5% GST · Ex Delhi"
    },
    details: {
      duration: "6 Nights / 7 Days",
      departure: "Ex Delhi · select Apr–Jun dates",
      idealFor: "Friends & groups",
      about: "A complete Do Dham yatra through the Garhwal Himalayas — the 18 km trek to Kedarnath along the Mandakini, then Badrinath darshan and a visit to Mana, India's last village.",
      itinerary: [
        { day: "1", title: "Delhi to Rishikesh", desc: "Report at Kashmere Gate 11 PM; overnight Volvo to Rishikesh." },
        { day: "2", title: "To Guptkashi", desc: "Transfer to local vehicle, scenic drive via Devprayag and the Bhagirathi–Alaknanda sangam; overnight in Guptkashi." },
        { day: "3", title: "Kedarnath trek", desc: "Wake 3 AM, drive to Gaurikund, 18 km trek to Kedarnath along the Mandakini; dormitory stay near the temple." },
        { day: "4", title: "Kedarnath darshan", desc: "Early darshan and sunrise, trek down to Sonprayag, drive to Pipalkoti; overnight." },
        { day: "5", title: "Badrinath & Mana", desc: "Badrinath darshan, Mana village, Vyas Gufa and Bheem Pul; overnight at Pipalkoti." },
        { day: "6", title: "Back to Rishikesh", desc: "Scenic drive back, Ram & Laxman Jhula and Ganga aarti; start return journey." },
        { day: "7", title: "Rishikesh to Delhi", desc: "Midnight Volvo, reach Delhi." }
      ],
      inclusions: ["Delhi–Rishikesh Volvo / tempo transport", "Local sightseeing vehicles", "4 nights accommodation (3/4 sharing)", "Dormitory stay at Kedarnath", "Yatra pass & permissions", "Green tax & entry charges per itinerary", "Driver allowance, toll & parking", "Trip captain (groups above 10 pax)"],
      exclusions: ["Food on all days", "Personal expenses & water bottles", "Helicopter / pony / palki / porter charges", "Extra sightseeing not mentioned", "Natural-calamity expenses", "Entry tickets not in itinerary"],
    },
  },
  {
    id: "group-spiti-valley",
    title: "Spiti Valley",
    categoryKey: "group",
    region: "Group",
    state: "Himachal Pradesh",
    image: groupManali,
    tripTypes: ["domestic", "backpacking"],
    domState: "Himachal",
    imagePlaceholder: true, // TODO: real photo
    blurb: "High-desert monasteries, moonscape valleys and the world's highest villages — raw Himalayan adventure.",
    highlights: ["Key Monastery", "Chandratal", "Cold Desert"],
    duration: "6 Nights / 7 Days",
    price: {
      from: "Ask us",
      note: "Message us for current dates & pricing"
    },
    details: {
      duration: "6 Nights / 7 Days",
      departure: "Ask us",
      idealFor: "Friends & groups",
      about: "Spiti is a high-altitude cold desert of ancient monasteries, fossil villages and star-filled skies — one of the most dramatic road journeys in the Himalayas.",
      itinerary: [
        { day: "1", title: "Shimla / Narkanda", desc: "Drive up from Shimla through apple country; acclimatize overnight." },
        { day: "2", title: "Kalpa", desc: "Sangla and Kalpa in Kinnaur, with Kinner Kailash views." },
        { day: "3", title: "Tabo & Dhankar", desc: "Cross into Spiti — Nako lake, Tabo monastery and the cliff-top Dhankar." },
        { day: "4", title: "Kaza & villages", desc: "Key Monastery, Kibber, Hikkim and Komic — the highest villages." },
        { day: "5", title: "Chandratal", desc: "Drive to the crescent Chandratal lake; camp overnight." },
        { day: "6", title: "Manali", desc: "Cross Kunzum and Rohtang passes down to Manali." },
        { day: "7", title: "Return", desc: "Departure from Manali." }
      ],
      inclusions: ["Train / transport as per itinerary", "Accommodation (4 or 3 sharing)", "Local sightseeing transfers", "Trip coordinator", "Driver charges, tolls & taxes", "First aid"],
      exclusions: ["Food unless specified", "Entry tickets & activities", "Personal expenses", "Anything not listed under inclusions"],
    },
  },
  {
    id: "group-munnar-vagamon",
    title: "Munnar & Vagamon",
    categoryKey: "group",
    region: "Group",
    state: "Kerala",
    image: groupKerala,
    tripTypes: ["domestic"],
    domState: "Kerala",
    imagePlaceholder: true, // TODO: real photo
    blurb: "Tea-carpeted hills and the rolling meadows of Vagamon — Kerala's quietest highland pairing.",
    highlights: ["Tea Gardens", "Vagamon Meadows", "Pine Forest"],
    duration: "3 Nights / 4 Days",
    price: {
      from: "Ask us",
      note: "Message us for current dates & pricing"
    },
    details: {
      duration: "3 Nights / 4 Days",
      departure: "Ask us",
      idealFor: "Friends & groups",
      about: "A relaxed highland loop — Munnar's tea estates and viewpoints with the offbeat green meadows and pine forests of Vagamon.",
      itinerary: [
        { day: "1", title: "Munnar", desc: "Drive to Munnar; tea gardens and evening at leisure." },
        { day: "2", title: "Munnar sightseeing", desc: "Eravikulam, Mattupetty, Echo Point and the tea museum." },
        { day: "3", title: "Vagamon", desc: "Drive to Vagamon — meadows, pine forest and Kurisumala." },
        { day: "4", title: "Return", desc: "Drive back to the station." }
      ],
      inclusions: ["Train / transport as per itinerary", "Accommodation (4 or 3 sharing)", "Local sightseeing transfers", "Trip coordinator", "Driver charges, tolls & taxes", "First aid"],
      exclusions: ["Food unless specified", "Entry tickets & activities", "Personal expenses", "Anything not listed under inclusions"],
    },
  },
  {
    id: "group-gokarna-udupi",
    title: "Gokarna & Udupi",
    categoryKey: "group",
    region: "Group",
    state: "Karnataka",
    image: groupGokarna,
    tripTypes: ["domestic"],
    domState: "Karnataka",
    imagePlaceholder: true, // TODO: real photo
    blurb: "Temple towns and untouched beaches — Gokarna's coast paired with Udupi's shrines and Malpe sands.",
    highlights: ["Om Beach", "Udupi Temple", "Malpe Beach"],
    duration: "2 Nights / 3 Days",
    price: {
      from: "Ask us",
      note: "Message us for current dates & pricing"
    },
    details: {
      duration: "2 Nights / 3 Days",
      departure: "Ask us",
      idealFor: "Friends & groups",
      about: "A coastal Karnataka pairing — Gokarna's laid-back beaches and the temple town of Udupi with nearby Malpe beach and St. Mary's Island.",
      itinerary: [
        { day: "1", title: "Gokarna", desc: "Om, Kudle and Half-Moon beaches; beach sunset." },
        { day: "2", title: "Udupi", desc: "Sri Krishna Matha, Malpe beach and St. Mary's Island boat ride." },
        { day: "3", title: "Return", desc: "Breakfast and drive back." }
      ],
      inclusions: ["Train / transport as per itinerary", "Accommodation (4 or 3 sharing)", "Local sightseeing transfers", "Trip coordinator", "Driver charges, tolls & taxes", "First aid"],
      exclusions: ["Food unless specified", "Entry tickets & activities", "Personal expenses", "Anything not listed under inclusions"],
    },
  },
  {
    id: "group-jaipur-pushkar",
    title: "Jaipur & Pushkar",
    categoryKey: "group",
    region: "Group",
    state: "Rajasthan",
    image: groupRajasthan,
    tripTypes: ["domestic"],
    domState: "Rajasthan",
    imagePlaceholder: true, // TODO: real photo
    blurb: "Pink-City forts and the holy lake town of Pushkar — Rajasthan's colour in a short loop.",
    highlights: ["Amber Fort", "Hawa Mahal", "Pushkar Lake"],
    duration: "2 Nights / 3 Days",
    price: {
      from: "Ask us",
      note: "Message us for current dates & pricing"
    },
    details: {
      duration: "2 Nights / 3 Days",
      departure: "Ask us",
      idealFor: "Friends & groups",
      about: "Jaipur's forts and bazaars with a day out to Pushkar's sacred lake and the Brahma temple.",
      itinerary: [
        { day: "1", title: "Jaipur", desc: "Hawa Mahal, City Palace, Jantar Mantar and markets." },
        { day: "2", title: "Jaipur forts & Pushkar", desc: "Amber Fort and Jal Mahal; drive to Pushkar — lake and Brahma temple." },
        { day: "3", title: "Return", desc: "Breakfast and onward journey." }
      ],
      inclusions: ["Train / transport as per itinerary", "Accommodation (4 or 3 sharing)", "Local sightseeing transfers", "Trip coordinator", "Driver charges, tolls & taxes", "First aid"],
      exclusions: ["Food unless specified", "Entry tickets & activities", "Personal expenses", "Anything not listed under inclusions"],
    },
  },
  {
    id: "group-udaipur-jaisalmer",
    title: "Udaipur & Jaisalmer",
    categoryKey: "group",
    region: "Group",
    state: "Rajasthan",
    image: groupRajasthan,
    tripTypes: ["domestic"],
    domState: "Rajasthan",
    imagePlaceholder: true, // TODO: real photo
    blurb: "Lake palaces and golden desert dunes — Rajasthan's most romantic and most rugged in one trip.",
    highlights: ["Lake Pichola", "Jaisalmer Fort", "Desert Camp"],
    duration: "4 Nights / 5 Days",
    price: {
      from: "Ask us",
      note: "Message us for current dates & pricing"
    },
    details: {
      duration: "4 Nights / 5 Days",
      departure: "Ask us",
      idealFor: "Friends & groups",
      about: "From Udaipur's lakes and palaces to Jaisalmer's living fort and Sam sand dunes with a desert-camp night.",
      itinerary: [
        { day: "1", title: "Udaipur", desc: "City Palace, Lake Pichola boat ride and Jagdish temple." },
        { day: "2", title: "Udaipur", desc: "Saheliyon ki Bari, Fateh Sagar and Sajjangarh." },
        { day: "3", title: "Jaisalmer", desc: "Drive to the golden city; evening at the fort." },
        { day: "4", title: "Desert camp", desc: "Havelis, Gadisar lake; Sam dunes camel safari and folk night." },
        { day: "5", title: "Return", desc: "Breakfast and onward journey." }
      ],
      inclusions: ["Train / transport as per itinerary", "Accommodation (4 or 3 sharing)", "Local sightseeing transfers", "Trip coordinator", "Driver charges, tolls & taxes", "First aid"],
      exclusions: ["Food unless specified", "Entry tickets & activities", "Personal expenses", "Anything not listed under inclusions"],
    },
  },
  {
    id: "group-mussoorie",
    title: "Mussoorie",
    categoryKey: "group",
    region: "Group",
    state: "Uttarakhand",
    image: pilgKedarnath,
    tripTypes: ["domestic"],
    domState: "Uttarakhand",
    imagePlaceholder: true, // TODO: real photo
    blurb: "The Queen of the Hills — colonial Mall Road, misty viewpoints and waterfalls above Dehradun.",
    highlights: ["Kempty Falls", "Mall Road", "Lal Tibba"],
    duration: "2 Nights / 3 Days",
    price: {
      from: "Ask us",
      note: "Message us for current dates & pricing"
    },
    details: {
      duration: "2 Nights / 3 Days",
      departure: "Ask us",
      idealFor: "Friends & groups",
      about: "A breezy hill-station break — Mussoorie's Mall Road, Kempty Falls, Lal Tibba and Camel's Back Road.",
      itinerary: [
        { day: "1", title: "Mussoorie", desc: "Reach via Dehradun; Mall Road and Gun Hill ropeway." },
        { day: "2", title: "Sightseeing", desc: "Kempty Falls, Lal Tibba, Camel's Back Road and Company Garden." },
        { day: "3", title: "Return", desc: "Optional Dhanaulti / Robber's Cave; drive back." }
      ],
      inclusions: ["Train / transport as per itinerary", "Accommodation (4 or 3 sharing)", "Local sightseeing transfers", "Trip coordinator", "Driver charges, tolls & taxes", "First aid"],
      exclusions: ["Food unless specified", "Entry tickets & activities", "Personal expenses", "Anything not listed under inclusions"],
    },
  },
  {
    id: "group-ooty-kodaikanal",
    title: "Ooty & Kodaikanal",
    categoryKey: "group",
    region: "Group",
    state: "Tamil Nadu",
    image: groupOoty,
    tripTypes: ["domestic"],
    domState: "Tamil Nadu",
    imagePlaceholder: true, // TODO: real photo
    blurb: "Two Nilgiri queens — Ooty's tea slopes and Kodaikanal's misty lake and pillar rocks.",
    highlights: ["Ooty Lake", "Kodai Lake", "Pillar Rocks"],
    duration: "3 Nights / 4 Days",
    price: {
      from: "Ask us",
      note: "Message us for current dates & pricing"
    },
    details: {
      duration: "3 Nights / 4 Days",
      departure: "Ask us",
      idealFor: "Friends & groups",
      about: "A double hill-station loop pairing Ooty's botanical gardens and toy train with Kodaikanal's lake and viewpoints.",
      itinerary: [
        { day: "1", title: "Ooty", desc: "Botanical Gardens, Ooty Lake and Doddabetta." },
        { day: "2", title: "Coonoor", desc: "Toy train, Sim's Park and tea estates." },
        { day: "3", title: "Kodaikanal", desc: "Drive to Kodai — lake, Coaker's Walk and Pillar Rocks." },
        { day: "4", title: "Return", desc: "Bryant Park and drive back." }
      ],
      inclusions: ["Train / transport as per itinerary", "Accommodation (4 or 3 sharing)", "Local sightseeing transfers", "Trip coordinator", "Driver charges, tolls & taxes", "First aid"],
      exclusions: ["Food unless specified", "Entry tickets & activities", "Personal expenses", "Anything not listed under inclusions"],
    },
  },
  {
    id: "group-ooty-coonoor-isha",
    title: "Ooty, Coonoor & Isha",
    categoryKey: "group",
    region: "Group",
    state: "Tamil Nadu",
    image: groupOoty,
    tripTypes: ["domestic"],
    domState: "Tamil Nadu",
    imagePlaceholder: true, // TODO: real photo
    blurb: "Nilgiri hills plus the Isha Yoga Center and Adiyogi — scenery with a spiritual pause.",
    highlights: ["Toy Train", "Adiyogi", "Tea Gardens"],
    duration: "3 Nights / 4 Days",
    price: {
      from: "Ask us",
      note: "Message us for current dates & pricing"
    },
    details: {
      duration: "3 Nights / 4 Days",
      departure: "Ask us",
      idealFor: "Friends & groups",
      about: "Ooty and Coonoor's tea country combined with a visit to the Isha Yoga Center and the towering Adiyogi statue near Coimbatore.",
      itinerary: [
        { day: "1", title: "Ooty", desc: "Ooty Lake, Botanical Gardens and Doddabetta." },
        { day: "2", title: "Coonoor", desc: "Heritage toy train and Coonoor viewpoints." },
        { day: "3", title: "Isha", desc: "Drive to the Isha Yoga Center — Adiyogi and Dhyanalinga." },
        { day: "4", title: "Return", desc: "Drive back." }
      ],
      inclusions: ["Train / transport as per itinerary", "Accommodation (4 or 3 sharing)", "Local sightseeing transfers", "Trip coordinator", "Driver charges, tolls & taxes", "First aid"],
      exclusions: ["Food unless specified", "Entry tickets & activities", "Personal expenses", "Anything not listed under inclusions"],
    },
  },
  {
    id: "group-dhanushkodi",
    title: "Dhanushkodi",
    categoryKey: "group",
    region: "Group",
    state: "Tamil Nadu",
    image: groupOoty,
    tripTypes: ["domestic"],
    domState: "Tamil Nadu",
    imagePlaceholder: true, // TODO: real photo
    blurb: "The ghost town at land's end — Rameswaram's temple and the haunting Dhanushkodi sandbar.",
    highlights: ["Rameswaram", "Dhanushkodi", "Pamban Bridge"],
    duration: "2 Nights / 3 Days",
    price: {
      from: "Ask us",
      note: "Message us for current dates & pricing"
    },
    details: {
      duration: "2 Nights / 3 Days",
      departure: "Ask us",
      idealFor: "Friends & groups",
      about: "Land's end of India — Rameswaram's Ramanathaswamy temple, the Pamban bridge and the eerie beauty of abandoned Dhanushkodi.",
      itinerary: [
        { day: "1", title: "Rameswaram", desc: "Ramanathaswamy temple and Agni Theertham." },
        { day: "2", title: "Dhanushkodi", desc: "Pamban bridge, Dhanushkodi point and Arichal Munai." },
        { day: "3", title: "Return", desc: "Kothandaramaswamy temple; drive back." }
      ],
      inclusions: ["Train / transport as per itinerary", "Accommodation (4 or 3 sharing)", "Local sightseeing transfers", "Trip coordinator", "Driver charges, tolls & taxes", "First aid"],
      exclusions: ["Food unless specified", "Entry tickets & activities", "Personal expenses", "Anything not listed under inclusions"],
    },
  },
  {
    id: "group-meghalaya",
    title: "Meghalaya",
    categoryKey: "group",
    region: "Group",
    state: "Meghalaya",
    image: groupKashmir,
    tripTypes: ["domestic"],
    domState: "North East India",
    imagePlaceholder: true, // TODO: real photo
    blurb: "Living root bridges, crystal pools and the cleanest village in Asia — the abode of clouds.",
    highlights: ["Living Root Bridges", "Cherrapunji", "Dawki River"],
    duration: "4 Nights / 5 Days",
    price: {
      from: "Ask us",
      note: "Message us for current dates & pricing"
    },
    details: {
      duration: "4 Nights / 5 Days",
      departure: "Ask us",
      idealFor: "Friends & groups",
      about: "Meghalaya's waterfalls, caves and the famous double-decker living root bridge, plus the turquoise Dawki river and Mawlynnong village.",
      itinerary: [
        { day: "1", title: "Shillong", desc: "Reach via Guwahati; Umiam lake and Shillong." },
        { day: "2", title: "Cherrapunji", desc: "Nohkalikai falls, Mawsmai caves and the Seven Sisters." },
        { day: "3", title: "Root bridges", desc: "Trek to the double-decker living root bridge at Nongriat." },
        { day: "4", title: "Dawki & Mawlynnong", desc: "Crystal-clear Dawki river and Asia's cleanest village." },
        { day: "5", title: "Return", desc: "Drive to Guwahati for departure." }
      ],
      inclusions: ["Train / transport as per itinerary", "Accommodation (4 or 3 sharing)", "Local sightseeing transfers", "Trip coordinator", "Driver charges, tolls & taxes", "First aid"],
      exclusions: ["Food unless specified", "Entry tickets & activities", "Personal expenses", "Anything not listed under inclusions"],
    },
  },
  {
    id: "group-sikkim",
    title: "Sikkim",
    categoryKey: "group",
    region: "Group",
    state: "Sikkim",
    image: groupKashmir,
    tripTypes: ["domestic"],
    domState: "North East India",
    imagePlaceholder: true, // TODO: real photo
    blurb: "Himalayan monasteries, alpine lakes and Kanchenjunga views — Gangtok, Tsomgo and beyond.",
    highlights: ["Tsomgo Lake", "Gangtok", "Nathula"],
    duration: "4 Nights / 5 Days",
    price: {
      from: "Ask us",
      note: "Message us for current dates & pricing"
    },
    details: {
      duration: "4 Nights / 5 Days",
      departure: "Ask us",
      idealFor: "Friends & groups",
      about: "Sikkim's monasteries, the glacial Tsomgo lake, Baba Mandir and Gangtok's vibrant MG Marg, with grand Kanchenjunga views.",
      itinerary: [
        { day: "1", title: "Gangtok", desc: "Reach via Bagdogra; evening at MG Marg." },
        { day: "2", title: "Tsomgo & Baba Mandir", desc: "Day trip to Tsomgo lake and Baba Mandir (permit)." },
        { day: "3", title: "Gangtok sightseeing", desc: "Rumtek monastery, Banjhakri falls and ropeway." },
        { day: "4", title: "Namchi / Ravangla", desc: "Char Dham, Buddha Park and tea gardens." },
        { day: "5", title: "Return", desc: "Drive to Bagdogra for departure." }
      ],
      inclusions: ["Train / transport as per itinerary", "Accommodation (4 or 3 sharing)", "Local sightseeing transfers", "Trip coordinator", "Driver charges, tolls & taxes", "First aid"],
      exclusions: ["Food unless specified", "Entry tickets & activities", "Personal expenses", "Anything not listed under inclusions"],
    },
  },
  {
    id: "intl-japan",
    title: "Japan",
    categoryKey: "international",
    region: "International",
    state: "Japan",
    image: intlBali,
    tripTypes: ["international"],
    imagePlaceholder: true, // TODO: real photo
    blurb: "Neon cities, ancient temples and bullet trains — tradition and the future side by side.",
    highlights: ["Tokyo", "Kyoto", "Mt. Fuji"],
    duration: "6 Nights / 7 Days",
    price: {
      from: "Ask us",
      note: "Message us for current dates & pricing"
    },
    details: {
      duration: "6 Nights / 7 Days",
      departure: "Ask us",
      idealFor: "Friends & groups",
      about: "Japan blends ultramodern Tokyo, the temples and gardens of Kyoto, and the iconic views of Mt. Fuji, all linked by the famous bullet train.",
      itinerary: [
        { day: "1", title: "Tokyo", desc: "Arrive Tokyo; Shibuya, Asakusa and Skytree." },
        { day: "2", title: "Tokyo", desc: "Day trips — Mt. Fuji / Hakone or DisneySea." },
        { day: "3", title: "To Kyoto", desc: "Bullet train to Kyoto; Fushimi Inari and Gion." },
        { day: "4", title: "Kyoto", desc: "Kinkaku-ji, Arashiyama bamboo grove and temples." },
        { day: "5", title: "Osaka", desc: "Osaka castle, Dotonbori and street food." },
        { day: "6", title: "Free day", desc: "Shopping or optional Nara day trip." },
        { day: "7", title: "Departure", desc: "Transfer to the airport." }
      ],
      inclusions: ["Hotel accommodation on sharing basis", "Daily breakfast", "JR / transport passes per itinerary", "English-speaking guide where applicable", "Trip coordinator"],
      exclusions: ["International flights", "Japan visa", "Lunch & dinner", "Entry tickets not listed", "Travel insurance"],
    },
  },
  {
    id: "pilg-char-dham",
    title: "Char Dham Yatra",
    categoryKey: "pilgrimage",
    region: "Pilgrimage",
    state: "Uttarakhand",
    image: pilgKedarnath,
    tripTypes: ["pilgrimage"],
    imagePlaceholder: true, // TODO: real photo
    blurb: "The complete Char Dham circuit — Yamunotri, Gangotri, Kedarnath and Badrinath in the Garhwal Himalayas.",
    highlights: ["Yamunotri", "Gangotri", "Kedarnath", "Badrinath"],
    duration: "10 Nights / 11 Days",
    price: {
      from: "Ask us",
      note: "Message us for current dates & pricing"
    },
    details: {
      duration: "10 Nights / 11 Days",
      departure: "Ask us",
      idealFor: "Friends & groups",
      about: "The grand Char Dham yatra covers all four Himalayan shrines — Yamunotri, Gangotri, Kedarnath and Badrinath — a deeply revered spiritual journey through the Garhwal Himalayas.",
      itinerary: [
        { day: "1", title: "Haridwar", desc: "Reach Haridwar; evening Ganga aarti." },
        { day: "2", title: "Yamunotri", desc: "Drive to Janki Chatti and trek to Yamunotri." },
        { day: "3", title: "Gangotri", desc: "Drive to Gangotri; temple darshan." },
        { day: "4", title: "To Guptkashi", desc: "Long scenic drive towards Kedarnath base." },
        { day: "5", title: "Kedarnath", desc: "Trek to Kedarnath; darshan and stay." },
        { day: "6", title: "Descend", desc: "Trek down and drive towards Badrinath route." },
        { day: "7", title: "Badrinath", desc: "Badrinath darshan, Mana village and Tapt Kund." },
        { day: "8", title: "Return drive", desc: "Drive back towards Rudraprayag/Rishikesh." },
        { day: "9", title: "Rishikesh", desc: "Sightseeing and Ganga aarti." },
        { day: "10", title: "Haridwar", desc: "Final temple visits." },
        { day: "11", title: "Departure", desc: "Onward journey." }
      ],
      inclusions: ["Transport for the full circuit", "Accommodation (3/4 sharing)", "Daily breakfast & dinner", "Yatra registration & permits", "Trip captain", "Driver allowance, tolls & parking"],
      exclusions: ["Train / airfare to start point", "Pony / palki / helicopter charges", "Lunch", "Personal expenses", "Anything not listed under inclusions"],
    },
  },
];

// Look up a single trip by its id (used by the trip detail page).
export function getTripById(id) {
  return TRIPS.find((t) => t.id === id);
}

// "Domestic" = a curated handful of India trips (client asked for 3–4).
const DOMESTIC_IDS = ["couple-kashmir", "group-rajasthan", "group-kerala", "couple-manali-kasol"];

// Helper to fetch trips for a category key (handles the virtual "domestic" set).
export function tripsForCategory(key) {
  if (key === "domestic") return TRIPS.filter((t) => DOMESTIC_IDS.includes(t.id));
  return TRIPS.filter((t) => t.categoryKey === key);
}

// A trip can belong to several tabs, so tripTypes is an array.
export function tripsForType(type) {
  return TRIPS.filter((t) => (t.tripTypes || []).includes(type));
}

// Domestic trips grouped by state, in the PDF's order.
export const DOMESTIC_STATE_ORDER = [
  "Himachal", "Kashmir", "Kerala", "Karnataka", "Rajasthan",
  "Uttarakhand", "Tamil Nadu", "North East India", "Ladakh",
  "Andaman & Nicobar",
];
export function domesticByState() {
  const groups = {};
  TRIPS.filter((t) => (t.tripTypes || []).includes("domestic")).forEach((t) => {
    const k = t.domState || t.state || "Other";
    (groups[k] = groups[k] || []).push(t);
  });
  const ordered = [];
  DOMESTIC_STATE_ORDER.forEach((st) => { if (groups[st]) { ordered.push([st, groups[st]]); delete groups[st]; } });
  Object.keys(groups).forEach((st) => ordered.push([st, groups[st]]));
  return ordered; // [ [state, trips[]], ... ]
}

export const TYPE_META = {
  domestic: { label: "Domestic", title: "Explore India", sub: "Every kind of trip across India — grouped by state, from the Himalayas to the south coast." },
  weekend: { label: "Weekend", title: "Weekend Getaways", sub: "Short 2–4 day escapes — perfect for a quick reset with friends or your partner." },
  international: { label: "International", title: "Beyond Borders", sub: "Vietnam, Bali, Thailand, Dubai, Japan and more — trips abroad, planned end to end." },
  backpacking: { label: "Backpacking", title: "Backpacking Adventures", sub: "Longer journeys across India — mountains, deserts, coasts and everything between." },
  pilgrimage: { label: "Pilgrimage", title: "Sacred Journeys", sub: "Temple darshans, holy rivers and revered shrines — travel that touches the soul." },
};

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
    a: "Tap any trip's Details button or message us on WhatsApp at +91 91001 20796 and our team will help you plan and confirm.",
  },
];

export const NAV_TYPES = [
  { key: "domestic", label: "Domestic", to: "/domestic" },
  { key: "international", label: "International", to: "/international" },
  { key: "pilgrimage", label: "Pilgrimage", to: "/pilgrimage" },
  { key: "weekend", label: "Weekend", to: "/weekend" },
  { key: "backpacking", label: "Backpacking", to: "/backpacking" },
];

export const NAV_LINKS = [
  { label: "Explore", to: "/" },
  { label: "Domestic", to: "/domestic" },
  { label: "International", to: "/international" },
  { label: "Pilgrimage", to: "/pilgrimage" },
  { label: "Weekend", to: "/weekend" },
  { label: "Backpacking", to: "/backpacking" },
  { label: "Who Travels With Us", to: "/who-travels-with-us" },
];

export const CONTACT = {
  phone: "+91 91001 20796",
  phoneAlt: "+91 90595 89797",
  salesManager: "+91 90595 89696",
  whatsapp: "https://wa.me/919100120796",
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


// Booking & cancellation policy (shown on trip detail / contact).
export const BOOKING_POLICY = {
  bookingAmount: "₹2,000 per person to confirm your slot (non-refundable). Kashmir & some long trips: ₹4,000.",
  cancellation: [
    "50% of the trip cost is charged if cancelled within 48 hours of departure.",
    "100% of the trip cost is charged if cancelled within 24 hours of departure.",
  ],
  fullPayment: "Remaining amount must be paid 2 days before boarding (from city of departure).",
  notes: [
    "These are budget-friendly trips, not luxury packages — planned for comfort and value.",
    "The trip host may modify the itinerary, route, activities, timings or duration based on weather, safety or operational conditions.",
    "Costs from unforeseen events (strikes, cancellations, breakdowns or natural calamities) are borne by the guest.",
  ],
};

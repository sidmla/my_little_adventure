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
    region: "Couple",
    state: "Andaman & Nicobar",
    image: coupleAndaman,
    blurb: "Turquoise waters, white-sand beaches, and coral reefs — a dreamy island escape made for two.",
    highlights: ["Radhanagar Beach", "Scuba Diving", "Island Hopping"],
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
    region: "Couple",
    state: "Jammu & Kashmir",
    image: coupleKashmir,
    blurb: "Shikara rides on Dal Lake, snow-dusted meadows, and cozy houseboats — romance in paradise on earth.",
    highlights: ["Dal Lake", "Gulmarg", "Houseboat Stay"],
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
    region: "Couple",
    state: "Kerala",
    image: coupleKerala,
    blurb: "Backwater houseboats, swaying palms, and misty tea hills — God's own country, just the two of you.",
    highlights: ["Backwaters", "Munnar Hills", "Houseboat"],
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
    region: "Couple",
    state: "Himachal Pradesh",
    image: coupleManali,
    blurb: "Snow peaks, riverside cafes, and pine-scented valleys — a cozy Himalayan getaway for couples.",
    highlights: ["Solang Valley", "Kasol Riverside", "Snow Points"],
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
    region: "Group",
    state: "Karnataka",
    image: groupCoorg,
    blurb: "Misty coffee hills, waterfalls, and plantation stays — the perfect group escape into the Western Ghats.",
    highlights: ["Coffee Estates", "Waterfalls", "Misty Hills"],
    details: {
      duration: "2 Nights / 3 Days",
      bestTime: "September to March",
      idealFor: "Friends & groups",
      about: "Coorg and Chikmagalur are the coffee heart of the Western Ghats — rolling estates, waterfalls and cool, misty mornings. An easy weekend escape with plenty of group fun.\n\nThink plantation walks, viewpoints and a campfire night.",
      itinerary: [
        { day: "1", title: "Drive in & Coorg", desc: "Reach Coorg, visit Abbey Falls and Raja's Seat sunset point; campfire night." },
        { day: "2", title: "Chikmagalur", desc: "Coffee plantation tour, Mullayanagiri views and waterfalls." },
        { day: "3", title: "Return", desc: "Breakfast and drive back." }
      ],
      inclusions: ["Comfortable accommodation on sharing basis", "Daily breakfast", "All transfers & sightseeing by road", "Experienced trip captain / coordinator", "Toll, parking & driver charges"],
      exclusions: ["Flights / train tickets to the start point", "Lunch & dinner unless specified", "Entry tickets, activities & personal expenses", "Anything not listed under inclusions", "5% GST on package amount"],
    },
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
    details: {
      duration: "2 Nights / 3 Days",
      bestTime: "October to March",
      idealFor: "Friends & groups",
      about: "This combo pairs Gokarna's relaxed beaches with Dandeli's river adventures — rafting, beach-hopping and a bonfire under the stars. A favourite high-energy group weekend.",
      itinerary: [
        { day: "1", title: "Dandeli", desc: "Reach Dandeli for white-water rafting and a jungle/riverside stay; bonfire night." },
        { day: "2", title: "Gokarna", desc: "Drive to Gokarna — Om Beach, Kudle Beach and a beach sunset." },
        { day: "3", title: "Return", desc: "Breakfast and drive back." }
      ],
      inclusions: ["Comfortable accommodation on sharing basis", "Daily breakfast", "All transfers & sightseeing by road", "Experienced trip captain / coordinator", "Toll, parking & driver charges"],
      exclusions: ["Flights / train tickets to the start point", "Lunch & dinner unless specified", "Entry tickets, activities & personal expenses", "Anything not listed under inclusions", "5% GST on package amount"],
    },
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
    region: "Group",
    state: "Kerala",
    image: groupKerala,
    blurb: "Backwaters, beaches, and tea country — a vibrant South India journey packed with shared moments.",
    highlights: ["Alleppey", "Munnar", "Beaches"],
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
    title: "Manali & Kasol",
    categoryKey: "group",
    region: "Group",
    state: "Himachal Pradesh",
    image: groupManali,
    blurb: "Snow adventures, Parvati Valley treks, and riverside hangouts — the classic Himalayan group trip.",
    highlights: ["Solang Valley", "Kasol", "Trekking"],
    details: {
      duration: "5 Nights / 6 Days",
      bestTime: "October to June",
      idealFor: "Friends & groups",
      about: "The classic Himachal group trip — Manali's snow points, the Atal Tunnel, and the backpacker vibe of Kasol and Tosh in the Parvati valley. Big mountains, great company.",
      itinerary: [
        { day: "1", title: "Journey to Manali", desc: "Overnight travel to Manali." },
        { day: "2", title: "Arrive Manali", desc: "Check-in, Mall Road and local sightseeing." },
        { day: "3", title: "Solang & Atal Tunnel", desc: "Snow activities and the drive to Sissu via Atal Tunnel." },
        { day: "4", title: "Kasol & Tosh", desc: "Parvati valley — Kasol, Manikaran and a Tosh village walk." },
        { day: "5", title: "Leisure & return journey", desc: "Free morning, then overnight return." },
        { day: "6", title: "Arrive back", desc: "Reach your city." }
      ],
      inclusions: ["Comfortable accommodation on sharing basis", "Daily breakfast", "All transfers & sightseeing by road", "Experienced trip captain / coordinator", "Toll, parking & driver charges"],
      exclusions: ["Flights / train tickets to the start point", "Lunch & dinner unless specified", "Entry tickets, activities & personal expenses", "Anything not listed under inclusions", "5% GST on package amount"],
    },
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
    details: {
      duration: "2 Nights / 3 Days",
      bestTime: "All year (cool in summer)",
      idealFor: "Friends & families",
      about: "Ooty, the Queen of Hill Stations, is all tea-green slopes, a heritage toy train and crisp mountain air. An easy, scenic weekend for groups and families.",
      itinerary: [
        { day: "1", title: "Arrive Ooty", desc: "Check-in, Ooty Lake and Botanical Gardens." },
        { day: "2", title: "Coonoor & toy train", desc: "Heritage Nilgiri toy train ride and Coonoor viewpoints." },
        { day: "3", title: "Return", desc: "Tea factory visit and drive back." }
      ],
      inclusions: ["Comfortable accommodation on sharing basis", "Daily breakfast", "All transfers & sightseeing by road", "Experienced trip captain / coordinator", "Toll, parking & driver charges"],
      exclusions: ["Flights / train tickets to the start point", "Lunch & dinner unless specified", "Entry tickets, activities & personal expenses", "Anything not listed under inclusions", "5% GST on package amount"],
    },
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
    details: {
      duration: "4 Nights / 5 Days",
      bestTime: "October to March",
      idealFor: "Friends & families",
      about: "Rajasthan is royal India at its most colourful — Jaipur's forts, Jaisalmer's golden desert and Udaipur's lakes. This loop captures the highlights with a desert-camp night.",
      itinerary: [
        { day: "1", title: "Arrive Jaipur", desc: "Pink City — Hawa Mahal, City Palace and bazaars." },
        { day: "2", title: "Jaipur forts", desc: "Amber Fort, Jal Mahal and Nahargarh sunset." },
        { day: "3", title: "Jaisalmer", desc: "Drive to the golden city; Sam sand dunes camel safari and desert camp." },
        { day: "4", title: "Jaisalmer Fort", desc: "Living fort, havelis and Gadisar lake." },
        { day: "5", title: "Departure", desc: "Transfer for your onward journey." }
      ],
      inclusions: ["Comfortable accommodation on sharing basis", "Daily breakfast", "All transfers & sightseeing by road", "Experienced trip captain / coordinator", "Toll, parking & driver charges"],
      exclusions: ["Flights / train tickets to the start point", "Lunch & dinner unless specified", "Entry tickets, activities & personal expenses", "Anything not listed under inclusions", "5% GST on package amount"],
    },
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
    details: {
      duration: "2 Nights / 3 Days",
      bestTime: "October to May",
      idealFor: "Friends & groups",
      about: "Wayanad is Kerala's green highland — forests, waterfalls, caves and easy wildlife. A relaxed nature weekend with a bit of light adventure.",
      itinerary: [
        { day: "1", title: "Arrive Wayanad", desc: "Check-in, Pookode Lake and Meenmutty or Soochipara falls." },
        { day: "2", title: "Caves & wildlife", desc: "Edakkal caves, Banasura Sagar dam and a plantation walk." },
        { day: "3", title: "Return", desc: "Breakfast and drive back." }
      ],
      inclusions: ["Comfortable accommodation on sharing basis", "Daily breakfast", "All transfers & sightseeing by road", "Experienced trip captain / coordinator", "Toll, parking & driver charges"],
      exclusions: ["Flights / train tickets to the start point", "Lunch & dinner unless specified", "Entry tickets, activities & personal expenses", "Anything not listed under inclusions", "5% GST on package amount"],
    },
  },
  {
    id: "intl-bali",
    title: "Bali",
    categoryKey: "international",
    region: "International",
    state: "Indonesia",
    image: intlBali,
    blurb: "Rice terraces, beach clubs, and temple sunsets — the island of the gods, endlessly photogenic.",
    highlights: ["Ubud Rice Terraces", "Beaches", "Temples"],
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
    region: "International",
    state: "UAE",
    image: intlDubai,
    blurb: "Sky-high views, desert safaris, and dazzling nights — luxury and adventure in the city of superlatives.",
    highlights: ["Burj Khalifa", "Desert Safari", "Marina"],
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
    region: "International",
    state: "Maldives",
    image: intlMaldives,
    blurb: "Overwater villas, crystal lagoons, and coral reefs — the ultimate slice of tropical paradise.",
    highlights: ["Overwater Villas", "Snorkeling", "Lagoons"],
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
    region: "International",
    state: "Sri Lanka",
    image: intlSriLanka,
    blurb: "Ancient rock fortresses, hill-country tea trails, and golden beaches — a compact island of wonders.",
    highlights: ["Sigiriya", "Tea Country", "Beaches"],
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
    region: "International",
    state: "Thailand",
    image: intlThailand,
    blurb: "Island beaches, buzzing markets, and grand temples — vibrant culture and nightlife in equal measure.",
    highlights: ["Phuket", "Bangkok", "Island Tours"],
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
    region: "International",
    state: "Vietnam",
    image: intlVietnam,
    blurb: "Emerald bays, lantern-lit old towns, and scenic cruises — a breathtaking sweep of Southeast Asia.",
    highlights: ["Ha Long Bay", "Hoi An", "Cruises"],
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
    region: "Pilgrimage",
    state: "Uttar Pradesh",
    image: pilgKashi,
    blurb: "The sacred trio — Ganga aarti at Kashi, the Ram temple at Ayodhya, and the holy Sangam at Prayagraj.",
    highlights: ["Ganga Aarti", "Ram Mandir", "Triveni Sangam"],
    details: {
      duration: "4 Nights / 5 Days",
      bestTime: "October to March",
      idealFor: "Families & devotees",
      about: "This circuit covers three of North India's holiest cities — Varanasi (Kashi), Ayodhya and Prayagraj — taking in the Ganga aarti, the Ram Mandir and the sacred Triveni Sangam.",
      itinerary: [
        { day: "1", title: "Arrive Varanasi", desc: "Check-in and the evening Ganga aarti at Dashashwamedh Ghat." },
        { day: "2", title: "Kashi darshan", desc: "Kashi Vishwanath temple and a sunrise boat ride on the Ganga." },
        { day: "3", title: "Ayodhya", desc: "Drive to Ayodhya — Ram Mandir and Hanuman Garhi darshan." },
        { day: "4", title: "Prayagraj", desc: "Triveni Sangam, Hanuman temple and ghats." },
        { day: "5", title: "Departure", desc: "Transfer for your onward journey." }
      ],
      inclusions: ["Comfortable accommodation on sharing basis", "Daily breakfast", "All transfers & sightseeing by road", "Experienced trip captain / coordinator", "Toll, parking & driver charges"],
      exclusions: ["Flights / train tickets to the start point", "Lunch & dinner unless specified", "Entry tickets, activities & personal expenses", "Anything not listed under inclusions", "5% GST on package amount"],
    },
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
    details: {
      duration: "5 Nights / 6 Days",
      bestTime: "May to June & Sept to Oct",
      idealFor: "Devotees & families",
      about: "Kedarnath and Badrinath are two of the revered Char Dham shrines, set high in the Garhwal Himalayas. This yatra covers the trek to Kedarnath and the drive to Badrinath, amid stunning mountain scenery.",
      itinerary: [
        { day: "1", title: "Drive to Guptkashi/Sonprayag", desc: "Scenic Himalayan drive; overnight halt." },
        { day: "2", title: "Kedarnath", desc: "Trek (or pony/heli option) to Kedarnath; temple darshan and stay." },
        { day: "3", title: "Return & onward", desc: "Trek back and drive towards Badrinath route." },
        { day: "4", title: "Badrinath", desc: "Badrinath temple darshan, Mana village and Tapt Kund." },
        { day: "5", title: "Return drive", desc: "Drive back towards Rishikesh/Haridwar." },
        { day: "6", title: "Departure", desc: "Final transfer." }
      ],
      inclusions: ["Comfortable accommodation on sharing basis", "Daily breakfast", "All transfers & sightseeing by road", "Experienced trip captain / coordinator", "Toll, parking & driver charges"],
      exclusions: ["Flights / train tickets to the start point", "Lunch & dinner unless specified", "Entry tickets, activities & personal expenses", "Anything not listed under inclusions", "5% GST on package amount"],
    },
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
    title: "Shirdi & 2 Jyotirlinga",
    categoryKey: "pilgrimage",
    region: "Pilgrimage",
    state: "Maharashtra",
    image: pilgShirdi,
    blurb: "Darshan at Sai Baba's Shirdi paired with two sacred Jyotirlinga shrines — a deeply blessed circuit.",
    highlights: ["Sai Baba Temple", "Jyotirlinga Darshan", "Aarti"],
    details: {
      duration: "2 Nights / 3 Days",
      bestTime: "All year",
      idealFor: "Families & devotees",
      about: "A blessed short circuit — darshan at Sai Baba's Shirdi together with the Bhimashankar and Trimbakeshwar Jyotirlinga shrines in Maharashtra.",
      itinerary: [
        { day: "1", title: "Arrive Shirdi", desc: "Sai Baba temple darshan and evening aarti." },
        { day: "2", title: "Trimbakeshwar", desc: "Trimbakeshwar Jyotirlinga darshan and Kushavarta kund." },
        { day: "3", title: "Bhimashankar & return", desc: "Bhimashankar Jyotirlinga darshan; drive back." }
      ],
      inclusions: ["Comfortable accommodation on sharing basis", "Daily breakfast", "All transfers & sightseeing by road", "Experienced trip captain / coordinator", "Toll, parking & driver charges"],
      exclusions: ["Flights / train tickets to the start point", "Lunch & dinner unless specified", "Entry tickets, activities & personal expenses", "Anything not listed under inclusions", "5% GST on package amount"],
    },
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
    details: {
      duration: "2 Nights / 3 Days",
      bestTime: "October to March",
      idealFor: "Families & devotees",
      about: "Madhya Pradesh's sacred duo — the powerful Mahakaleshwar Jyotirlinga at Ujjain (famed for its Bhasma aarti) and the island shrine of Omkareshwar on the Narmada.",
      itinerary: [
        { day: "1", title: "Arrive Ujjain", desc: "Mahakaleshwar temple darshan and Ram Ghat aarti." },
        { day: "2", title: "Ujjain & Bhasma Aarti", desc: "Early Bhasma aarti (advance booking), Kal Bhairav and Harsiddhi temples." },
        { day: "3", title: "Omkareshwar", desc: "Omkareshwar Jyotirlinga darshan; drive back." }
      ],
      inclusions: ["Comfortable accommodation on sharing basis", "Daily breakfast", "All transfers & sightseeing by road", "Experienced trip captain / coordinator", "Toll, parking & driver charges"],
      exclusions: ["Flights / train tickets to the start point", "Lunch & dinner unless specified", "Entry tickets, activities & personal expenses", "Anything not listed under inclusions", "5% GST on package amount"],
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

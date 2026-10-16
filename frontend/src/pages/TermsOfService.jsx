import React from 'react';
import {
  BedDouble,
  Camera,
  Compass,
  CreditCard,
  FileText,
  Gavel,
  Globe,
  HeartPulse,
  LifeBuoy,
  Luggage,
  Mail,
  MapPin,
  Megaphone,
  Phone,
  Receipt,
  RefreshCw,
  Route,
  Scale,
  ShieldCheck,
  Handshake,
  Copyright,
  Landmark,
  Users,
  CheckCircle2,
  Building2,
  Bus,
} from 'lucide-react';
import { CONTACT } from '@/data/trips';
import LegalLayout, {
  Blocks,
  LegalSection,
  SUPPORT_EMAIL,
} from '@/components/LegalLayout';

/* ------------------------------------------------------------------ */
/* Content – kept as data so the layout stays tidy                     */
/* ------------------------------------------------------------------ */
const SECTIONS = [
  {
    id: 'eligibility',
    title: 'Participation Requirements & Eligibility',
    short: 'Eligibility',
    icon: ShieldCheck,
    blocks: [
      {
        sub: '1.1 Physical fitness & health',
        list: [
          'All travellers must be physically and medically fit for their selected trip.',
          'Review the itinerary, travel duration, trekking requirements, adventure activities and physical demands before confirming your booking.',
          'If you have a medical condition, mobility limitation, disability, allergy or other health need that may affect participation, tell MLA before booking so reasonable accommodations can be discussed.',
          'Carry your prescribed medications and essential personal medical supplies.',
          'MLA may restrict participation in specific activities where there is a genuine safety concern that cannot reasonably be addressed.',
        ],
      },
      {
        sub: '1.2 Age requirements',
        list: [
          'Participants under 18 must be accompanied by a parent or authorised guardian, unless MLA has expressly approved another arrangement.',
          'Parents or guardians are responsible for the supervision, safety and behaviour of accompanying minors.',
          'Some adventure activities have minimum age, height, weight or fitness requirements set by the activity operator.',
        ],
      },
      {
        sub: '1.3 Adventure activity eligibility',
        list: [
          'Participants must meet the safety, fitness and experience requirements for activities such as trekking, rafting, ziplining and camping.',
          'MLA coordinators and authorised activity operators may restrict participation where a participant does not meet the required safety criteria.',
          'Participants must follow all instructions from activity instructors, guides and trip coordinators.',
        ],
      },
      {
        sub: '1.4 Equipment responsibility',
        list: [
          'Use any equipment provided by MLA or its activity partners responsibly.',
          'Intentional damage, misuse or negligent loss of equipment may result in additional charges.',
          'Wear or use safety equipment wherever required.',
        ],
      },
    ],
  },
  {
    id: 'conduct',
    title: 'On-Trip Behaviour & Code of Conduct',
    short: 'Code of Conduct',
    icon: Users,
    blocks: [
      {
        p: 'MLA promotes respectful, friendly and inclusive group travel. All travellers are expected to behave appropriately throughout the trip.',
      },
      {
        sub: '2.1 Prohibited behaviour',
        p: 'The following are strictly prohibited:',
        tone: 'danger',
        list: [
          'Smoking or consuming alcohol inside trip vehicles.',
          'Harassment, bullying, intimidation or inappropriate behaviour towards fellow travellers.',
          'Physical violence, abusive language, threats or discrimination.',
          'Possession or consumption of illegal drugs.',
          "Damage to vehicles, accommodation, public property or other travellers' belongings.",
          'Creating disturbances that affect the safety or comfort of the group.',
          'Carrying unauthorised weapons or dangerous objects.',
          'Engaging in illegal activities during the trip.',
        ],
      },
      {
        sub: '2.2 Authority of trip coordinators',
        list: [
          'Travellers must follow reasonable instructions from the MLA Trip Coordinator, driver, activity instructor and local authorities.',
          'The Trip Coordinator manages group movements and schedules, and handles operational and safety concerns.',
          'Decisions on immediate safety, emergency arrangements and group movement must be respected.',
          'Travellers are expected to cooperate with the coordinator and fellow participants.',
        ],
      },
      {
        sub: '2.3 Misconduct & removal from the trip',
        p: "MLA may restrict or end a traveller's participation if their behaviour creates a serious safety risk, involves harassment or unlawful conduct, or significantly disrupts the group. Where reasonably possible, the traveller will be told of the concern and given a chance to correct their behaviour. In cases of serious misconduct:",
        list: [
          'The traveller may be removed from the trip.',
          'No refund will ordinarily be given for services forfeited due to substantiated serious misconduct, subject to applicable law.',
          "Additional transportation or accommodation costs arising from removal may be the traveller's responsibility.",
          'Serious incidents may be reported to the appropriate authorities.',
        ],
      },
    ],
  },
  {
    id: 'marketing',
    title: 'Promotions, Advertisements & Marketing Material',
    short: 'Promotions & Marketing',
    icon: Megaphone,
    blocks: [
      {
        p: 'MLA uses photographs, videos, posters, social media content and other marketing materials to showcase destinations and experiences. Travellers acknowledge that:',
        list: [
          'Photographs and videos are used for promotional and illustrative purposes.',
          'Images may represent destinations, accommodation categories, activities or previous trips.',
          'Actual conditions may vary with weather, season, availability and local restrictions.',
          'Promotional images do not guarantee that every featured attraction or activity is part of a particular package.',
          'Only the services named in the confirmed itinerary and package inclusions form part of the booking.',
        ],
        after:
          'MLA aims to provide accurate information and will communicate material changes to confirmed services.',
      },
    ],
  },
  {
    id: 'medical',
    title: 'Medical Emergencies & Personal Safety',
    short: 'Medical & Safety',
    icon: HeartPulse,
    blocks: [
      {
        p: 'Traveller safety is an important priority for MLA. Travel and adventure activities, however, involve inherent risks.',
      },
      {
        sub: '4.1 Medical emergencies',
        p: 'If you fall ill or are injured during a trip:',
        list: [
          'Inform the MLA Trip Coordinator immediately.',
          'MLA will make reasonable efforts to help you reach available medical services.',
          "Medical treatment, hospitalisation, ambulance, emergency evacuation and related costs are generally the traveller's responsibility, unless expressly included in the package or covered by insurance.",
          'Carry sufficient funds or appropriate insurance cover for medical emergencies.',
        ],
      },
      {
        sub: '4.2 Travel insurance',
        list: [
          'Travel insurance is not included in MLA packages unless specifically listed in the inclusions.',
          'Travellers are strongly encouraged to buy suitable travel and medical insurance.',
          'International travellers should obtain insurance appropriate to their destination and planned activities.',
        ],
      },
      {
        sub: '4.3 Personal responsibility',
        list: [
          'Follow safety instructions during sightseeing, trekking, water activities and adventure experiences.',
          'Use suitable footwear, clothing and protective equipment wherever necessary.',
          'Do not enter restricted, dangerous or unauthorised areas.',
          'Do not undertake activities beyond your physical capabilities.',
        ],
        note: 'Nothing in these terms excludes liability that cannot lawfully be excluded.',
      },
    ],
  },
  {
    id: 'media',
    title: 'Photography, Videography & Media Consent',
    short: 'Photography & Media',
    icon: Camera,
    blocks: [
      {
        p: 'MLA frequently captures photographs and videos on group trips to document the experience and create promotional content. This content may be used on:',
        list: [
          "MLA's official website.",
          'Instagram, Facebook, YouTube and other social media platforms.',
          'Promotional advertisements and travel campaigns.',
          'Customer testimonials and travel experience videos.',
          'Marketing brochures and other promotional materials.',
        ],
      },
      {
        sub: '5.1 Media consent',
        list: [
          'MLA may capture general photographs and videos of group activities during trips.',
          'Travellers will be told that photography or videography may take place.',
          'Identifiable photographs, videos, testimonials or promotional content featuring individual travellers will be used in line with the consent obtained and applicable privacy laws.',
          'Travellers who do not wish to appear in promotional content should tell the Trip Coordinator or MLA support team.',
          'Separate consent may be requested for interviews, testimonials or dedicated promotional shoots.',
          'For minors, consent must be obtained from a parent or legal guardian.',
        ],
      },
      {
        sub: '5.2 Content ownership',
        p: 'Photographs and videos created by MLA or its authorised production team may be owned by MLA, subject to applicable intellectual property and privacy laws. Travellers retain their applicable privacy and personal rights.',
      },
    ],
  },
  {
    id: 'stay',
    title: 'Accommodation & Stay Guidelines',
    short: 'Accommodation',
    icon: BedDouble,
    blocks: [
      {
        p: 'MLA arranges accommodation according to the selected package and confirmed itinerary.',
      },
      {
        sub: '6.1 Accommodation allocation',
        list: [
          'Accommodation may include hotels, resorts, homestays, hostels, campsites or tents, depending on the package.',
          'Rooms may be allocated on double, triple, quad or group-sharing arrangements as specified in the package.',
          'Allocation depends on booking type, group composition and property availability.',
          'Budget group trips may include basic accommodation with essential facilities.',
        ],
      },
      {
        sub: '6.2 Accommodation rules',
        list: [
          'Only registered travellers in the confirmed booking may occupy the allocated accommodation.',
          'Unauthorised guests are not permitted without prior approval.',
          'Follow property check-in and check-out timings.',
          'Damage caused through negligence, misuse or intentional misconduct may be charged to the responsible traveller.',
          'Follow property-specific rules on smoking, alcohol and noise.',
        ],
      },
      {
        sub: '6.3 Accommodation changes',
        p: 'MLA may arrange comparable alternative accommodation when the planned property becomes unavailable for operational reasons. Where a material downgrade is unavoidable, MLA will communicate the change and address any price difference or remedy in line with consumer protection requirements.',
      },
    ],
  },
  {
    id: 'documents',
    title: 'Passport, Visa & Travel Documentation',
    short: 'Passport & Visa',
    icon: FileText,
    blocks: [
      {
        p: 'For domestic and international travel, travellers are responsible for carrying the necessary identification and travel documents.',
      },
      {
        sub: '7.1 Domestic travel',
        p: 'Carry valid government-issued photo identification, such as:',
        list: ['Aadhaar Card', 'Passport', 'Driving Licence', 'Voter ID'],
        after: 'Requirements may vary by transport provider and destination.',
      },
      {
        sub: '7.2 International travel',
        p: 'Travellers must have:',
        list: [
          "A valid passport meeting the destination's entry requirements.",
          'Required visas or travel authorisations.',
          'Applicable vaccination or medical certificates.',
          'Any other documents required by immigration authorities.',
        ],
      },
      {
        sub: '7.3 Documentation responsibility',
        list: [
          'MLA may give general guidance on visa and passport requirements.',
          'Final responsibility for verifying entry requirements rests with the traveller.',
          'Visa approval is decided by the relevant authorities and cannot be guaranteed by MLA.',
          'MLA is not responsible for losses caused by incorrect, expired or missing documents where the issue is attributable to the traveller.',
        ],
      },
    ],
  },
  {
    id: 'local-laws',
    title: 'Local Laws, Culture & Customs',
    short: 'Local Laws & Customs',
    icon: Landmark,
    blocks: [
      {
        p: 'MLA expects all travellers to respect the laws, traditions and cultural practices of the places they visit. Travellers must:',
        ol: [
          'Follow local laws and government regulations.',
          'Respect religious sites, cultural traditions and dress codes.',
          'Avoid littering, vandalism and damage to natural environments.',
          'Follow forest department and wildlife protection regulations.',
          'Respect local communities, guides and service providers.',
          'Avoid unauthorised photography in restricted areas.',
          'Follow instructions from police, forest officials and other authorised personnel.',
        ],
        after:
          'Violations may result in restrictions on participation and, where appropriate, referral to local authorities.',
      },
    ],
  },
  {
    id: 'itinerary',
    title: 'Itinerary Changes & Operational Flexibility',
    short: 'Itinerary Changes',
    icon: Route,
    blocks: [
      {
        p: 'MLA makes reasonable efforts to run trips according to the published itinerary, but schedules can be affected by circumstances beyond our control.',
      },
      {
        sub: '9.1 Possible reasons for itinerary changes',
        list: [
          'Weather conditions and natural disasters.',
          'Heavy traffic, especially on long weekends and holidays.',
          'Road closures or transportation disruptions.',
          'Government or forest department restrictions.',
          'Unexpected closure of tourist attractions.',
          'Delays in train, flight or other transport services.',
          'Safety concerns or operational emergencies.',
        ],
      },
      {
        sub: '9.2 Changes to the itinerary',
        p: 'MLA may reasonably:',
        list: [
          'Change the order of sightseeing locations.',
          'Adjust departure and arrival timings.',
          'Change routes or transportation arrangements.',
          'Replace unavailable activities with suitable alternatives.',
          'Reschedule or omit activities where necessary for safety or operational reasons.',
        ],
        after:
          'Travellers are expected to cooperate with the revised itinerary.',
      },
      {
        sub: '9.3 Missed sightseeing',
        list: [
          'MLA cannot guarantee that every planned attraction will be covered where external circumstances prevent access or cause substantial delays.',
          "No refund will ordinarily be given for attractions missed solely because of circumstances beyond MLA's reasonable control, subject to applicable law and any recoverable supplier refunds.",
          'MLA will make reasonable efforts to provide suitable alternatives wherever feasible.',
        ],
      },
    ],
  },
  {
    id: 'transport',
    title: 'Transportation & Departure Guidelines',
    short: 'Transportation',
    icon: Bus,
    blocks: [
      {
        sub: '10.1 Reporting time',
        list: [
          'Arrive at your designated pickup or boarding point at least 30 minutes before departure.',
          "MLA is not responsible for missed departures caused by a traveller's late arrival.",
        ],
      },
      {
        sub: '10.2 Transportation arrangements',
        list: [
          'Transport may include trains, buses, Tempo Travellers, private vehicles or other vehicles specified in the package.',
          'Vehicle type and seating depend on the confirmed package and group size.',
          'Follow driver instructions and vehicle safety regulations.',
          'Use seat belts wherever available and required.',
        ],
      },
      {
        sub: '10.3 Train & flight travel',
        list: [
          'Train and flight schedules are controlled by their respective operators.',
          'MLA cannot guarantee transport timings or seat preferences unless expressly confirmed.',
          'Changes, delays and cancellations by transport providers are subject to their applicable policies.',
          'Travellers are responsible for reaching boarding points on time.',
        ],
      },
    ],
  },
  {
    id: 'belongings',
    title: 'Personal Belongings & Luggage',
    short: 'Belongings & Luggage',
    icon: Luggage,
    blocks: [
      {
        list: [
          'Travellers are responsible for safeguarding their luggage, mobile phones, wallets, jewellery, documents and other personal belongings.',
          'MLA recommends avoiding unnecessary valuables on group trips.',
          'Pack and label your luggage properly.',
          'Report any lost or misplaced belongings to the Trip Coordinator immediately.',
          'MLA will make reasonable efforts to help locate lost belongings but cannot guarantee recovery.',
          'Liability for loss or damage will be determined according to the circumstances and applicable law.',
        ],
      },
    ],
  },
  {
    id: 'third-party',
    title: 'Third-Party Service Providers',
    short: 'Third-Party Providers',
    icon: Handshake,
    blocks: [
      {
        p: 'MLA works with hotels, transport operators, local guides, adventure activity providers and other travel partners. While MLA makes reasonable efforts to select suitable providers:',
        list: [
          'Individual providers may have their own operational rules and safety requirements.',
          'Certain activities depend on local availability, weather and operator restrictions.',
          'Travellers must follow reasonable safety instructions from authorised service providers.',
          'MLA will help travellers address service-related concerns that arise during the trip.',
        ],
        after:
          "MLA's responsibility for services included in a confirmed package remains subject to the booking agreement and applicable law.",
      },
    ],
  },
  {
    id: 'payments',
    title: 'Booking, Payments & Confirmation',
    short: 'Booking & Payments',
    icon: CreditCard,
    blocks: [
      {
        sub: '13.1 Booking confirmation',
        list: [
          'A booking is confirmed after MLA receives the required advance payment and issues a confirmation.',
          'Package prices, inclusions, exclusions and departure dates are communicated before confirmation.',
          'Travellers must provide accurate booking information.',
        ],
      },
      {
        sub: '13.2 Balance payment',
        list: [
          'Unless agreed otherwise in writing, the remaining balance must be paid at least 1 day before departure.',
          'Failure to pay by the deadline may result in cancellation of the booking, subject to the applicable cancellation policy.',
        ],
      },
      {
        sub: '13.3 Additional expenses',
        p: 'Unless specifically included in the package, travellers are responsible for:',
        list: [
          'Personal shopping and expenses.',
          'Additional meals and beverages.',
          'Entry tickets and optional activities.',
          'Adventure activities not listed in the inclusions.',
          'Additional transportation requested for personal reasons.',
          'Other expenses not expressly included in the confirmed package.',
        ],
      },
    ],
  },
  {
    id: 'cancellation',
    title: 'Cancellation & Refund Policy',
    short: 'Cancellation & Refund',
    icon: Receipt,
    blocks: [
      {
        p: "All bookings are subject to MLA's applicable Cancellation & Refund Policy. Conditions may vary by booking type:",
        list: [
          'Regular weekend departures.',
          'Long weekend and holiday departures.',
          'Special group trips.',
          'Customised family or corporate packages.',
          'International travel packages.',
        ],
        after:
          'Review the cancellation terms for your booking before making payment. Refunds, travel vouchers, cancellation deductions and processing timelines are governed by the policy communicated at the time of booking and by applicable law.',
        link: {
          to: '/cancellation-policy',
          label: 'Read the full Cancellation & Refund Policy',
        },
      },
    ],
  },
  {
    id: 'support',
    title: 'Complaints & Customer Support',
    short: 'Complaints & Support',
    icon: LifeBuoy,
    blocks: [
      {
        p: 'MLA values customer feedback and aims to resolve genuine concerns fairly.',
      },
      {
        sub: '15.1 During the trip',
        list: [
          'Report service issues to the Trip Coordinator immediately.',
          'The coordinator will make reasonable efforts to resolve the issue during the trip.',
          "Matters needing management approval may be escalated to MLA's operations or customer support team.",
        ],
      },
      {
        sub: '15.2 After the trip',
        p: `Submit complaints or feedback with your booking details and a description of the issue by email at ${SUPPORT_EMAIL} or on WhatsApp at ${CONTACT.phone}.`,
      },
    ],
  },
  {
    id: 'ip',
    title: 'Website Content & Intellectual Property',
    short: 'Website & IP',
    icon: Copyright,
    blocks: [
      {
        p: "All original content on MLA's website, including text, graphics, logos, itineraries, photographs, videos and promotional materials, is owned by MLA or used with appropriate authorisation. Users may not reproduce, distribute or commercially exploit protected content without permission. Unauthorised use may result in legal action.",
      },
    ],
  },
  {
    id: 'liability',
    title: 'Limitation of Liability',
    short: 'Limitation of Liability',
    icon: Scale,
    blocks: [
      {
        p: 'MLA will exercise reasonable care and diligence in organising and delivering its travel services. Certain risks, however, are inherent in travel, outdoor activities and adventure experiences. MLA will not be responsible for losses arising solely from:',
        list: [
          "A traveller's intentional misconduct or unlawful activities.",
          'Failure to follow reasonable safety instructions.',
          'Personal decisions to undertake unauthorised activities.',
          "Circumstances beyond MLA's reasonable control, to the extent permitted by law.",
        ],
        note: 'MLA does not exclude or limit liability for negligence, deficient services, personal injury or other matters where such exclusion is prohibited by applicable law.',
      },
    ],
  },
  {
    id: 'modification',
    title: 'Modification of Terms & Services',
    short: 'Changes to Terms',
    icon: RefreshCw,
    blocks: [
      {
        p: 'MLA may update these Terms of Service to reflect operational, legal or service-related changes.',
        list: [
          "Updated terms may be published on MLA's official website.",
          'Material changes affecting confirmed bookings will be communicated to affected travellers.',
          'Terms accepted at the time of booking will ordinarily govern that booking, unless a lawful and mutually agreed modification applies.',
          'MLA may discontinue or modify future travel packages based on operational requirements.',
        ],
      },
    ],
  },
  {
    id: 'disputes',
    title: 'Dispute Resolution & Applicable Law',
    short: 'Disputes & Law',
    icon: Gavel,
    blocks: [
      {
        list: [
          'MLA encourages travellers to contact customer support first to resolve concerns amicably.',
          'Both parties should make reasonable efforts to resolve disputes through communication.',
          'These Terms of Service are governed by applicable Indian laws.',
          'Travellers retain the right to approach appropriate consumer commissions, courts or other legally authorised dispute resolution forums.',
        ],
        note: 'Nothing in these terms restricts statutory consumer rights or remedies.',
      },
    ],
  },
  {
    id: 'acceptance',
    title: 'Acceptance of Terms',
    short: 'Acceptance',
    icon: CheckCircle2,
    blocks: [
      {
        p: 'By confirming a booking with MLA – My Little Adventure, travellers acknowledge that they have been given access to the applicable booking terms and agree to comply with the lawful conditions governing their trip. Travellers are encouraged to review:',
        list: [
          'Terms of Service',
          'Cancellation & Refund Policy',
          'Privacy Policy',
          'Trip Itinerary & Inclusions',
          'Health & Safety Guidelines',
        ],
        after:
          'Together, these documents explain the services, responsibilities and conditions that apply to MLA bookings.',
      },
    ],
  },
];

/* Company card shown right under the hero */
const COMPANY = [
  { icon: Building2, label: 'Company', value: 'MLA – My Little Adventure' },
  { icon: MapPin, label: 'Location', value: 'Hyderabad, Telangana, India' },
  {
    icon: Mail,
    label: 'Email',
    value: SUPPORT_EMAIL,
    href: `mailto:${SUPPORT_EMAIL}`,
  },
  {
    icon: Phone,
    label: 'Customer support',
    value: CONTACT.phone,
    href: `tel:${CONTACT.phone.replace(/\s/g, '')}`,
  },
  {
    icon: Globe,
    label: 'Website',
    value: 'www.mylittleadventure.in',
    href: 'https://www.mylittleadventure.in',
  },
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */
export default function TermsOfService() {
  return (
    <LegalLayout
      testId="terms-of-service-page"
      crumb="Terms of Service"
      overline="Legal"
      titleTop="Terms of Service &"
      titleAccent="Traveller Guidelines"
      intro="By booking or joining an MLA trip, you confirm you have read and accepted these Terms of Service. They govern the relationship between MLA – My Little Adventure and the traveller, customer or website user, from the moment you access our website, make a reservation or take part in an MLA-organised trip."
      chips={[
        { icon: MapPin, label: 'Hyderabad, Telangana' },
        { icon: Scale, label: 'Governed by Indian law' },
        {
          icon: Compass,
          label: 'Group trips · Adventure · Family · Corporate',
        },
      ]}
      sections={SECTIONS}
    >
      {/* company details */}
      <div
        data-testid="terms-company-card"
        className="rounded-3xl border border-[var(--mla-border)] bg-[var(--mla-surface)] p-5 sm:p-7"
      >
        <div className="overline">Who we are</div>
        <p className="mt-2 text-[var(--mla-ink-soft)] leading-relaxed max-w-3xl">
          MLA offers safe, affordable and memorable travel: group trips,
          adventure tours, family vacations, corporate outings and customised
          holiday packages.
        </p>
        <dl className="mt-5 grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
          {COMPANY.map(({ icon: Icon, label, value, href }) => {
            const body = (
              <>
                <span className="w-10 h-10 shrink-0 rounded-full bg-[var(--mla-button)] border border-[var(--mla-button-border)] text-[var(--mla-ink)] flex items-center justify-center">
                  <Icon size={16} />
                </span>
                <span className="min-w-0">
                  <dt className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[var(--mla-muted)]">
                    {label}
                  </dt>
                  <dd className="font-semibold text-[var(--mla-ink)] text-sm break-words">
                    {value}
                  </dd>
                </span>
              </>
            );
            const cls =
              'flex items-center gap-3 rounded-2xl border border-[var(--mla-border)] bg-white p-3.5';
            return href ? (
              <a
                key={label}
                href={href}
                className={`${cls} hover:border-[var(--mla-header-border-hover)] hover:shadow-sm transition`}
              >
                {body}
              </a>
            ) : (
              <div key={label} className={cls}>
                {body}
              </div>
            );
          })}
        </dl>
      </div>

      {SECTIONS.map((s, i) => (
        <LegalSection
          key={s.id}
          id={s.id}
          index={i + 1}
          icon={s.icon}
          title={s.title}
        >
          <Blocks blocks={s.blocks} />
          {s.id === 'acceptance' && (
            <div className="rounded-3xl bg-[var(--mla-ink)] text-white p-6 sm:p-8">
              <p className="font-serif-editorial italic text-xl sm:text-2xl text-[var(--mla-yellow-bright)]">
                Travel Solo, But Not Alone.
              </p>
              <p className="mt-2 text-white/70 text-sm">
                Creating unforgettable travel experiences, one adventure at a
                time.
              </p>
            </div>
          )}
        </LegalSection>
      ))}
    </LegalLayout>
  );
}

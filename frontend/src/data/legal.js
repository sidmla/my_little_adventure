import { ScrollText, Receipt } from 'lucide-react';

/* Single source for the policy pages, used by the Navbar and the Footer. */
export const LEGAL_LINKS = [
  {
    key: 'terms',
    label: 'Terms of Service',
    to: '/terms-of-service',
    icon: ScrollText,
    hint: 'Traveller rules & guidelines',
  },
  {
    key: 'cancellation',
    label: 'Cancellation & Refund',
    to: '/cancellation-policy',
    icon: Receipt,
    hint: 'Vouchers, refunds & timelines',
  },
];

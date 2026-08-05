import { Banknote, Landmark, Headset, type LucideIcon } from 'lucide-react'

export interface LocalPresenceFeature {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export const localPresenceFeatures: LocalPresenceFeature[] = [
  {
    id: 'ssp-native',
    title: 'SSP-Native Accounting',
    description: 'Reporting and bookkeeping built around the South Sudanese Pound from the ground up, not converted after the fact.',
    icon: Banknote,
  },
  {
    id: 'local-banking',
    title: 'Built Around How You Already Get Paid',
    description: 'Configured for the banking and payment workflows South Sudanese businesses actually use, not a generic global default.',
    icon: Landmark,
  },
  {
    id: 'local-support',
    title: 'Support Based in South Sudan',
    description: 'Talk to a team that works where you work and answers the phone in your timezone — not a regional call center.',
    icon: Headset,
  },
]

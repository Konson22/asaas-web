import { Target, CloudOff, SlidersHorizontal, TrendingUp, Lock, type LucideIcon } from 'lucide-react'

export interface WhyChooseUsFeature {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export const whyChooseUsFeatures: WhyChooseUsFeature[] = [
  {
    id: 'built-for-you',
    title: 'Built Around Your Business',
    description:
      'Every solution is engineered specifically for its industry. We don’t force your unique business into a rigid, generic ERP.',
    icon: Target,
  },
  {
    id: 'uninterrupted',
    title: 'Uninterrupted Operations (Online & Offline)',
    description:
      'Keep serving customers even without an internet connection. The moment your connection returns, your desktop data synchronizes with the cloud automatically.',
    icon: CloudOff,
  },
  {
    id: 'customizable',
    title: 'Endlessly Customizable',
    description:
      'Your workflows are unique. We customize reports, forms, approval chains, dashboards, and API integrations to match your exact operational requirements.',
    icon: SlidersHorizontal,
  },
  {
    id: 'scales',
    title: 'Scales With Your Growth',
    description:
      'Start with a single branch and confidently expand to hundreds. Add users, locations, and products without ever needing to migrate to a new system.',
    icon: TrendingUp,
  },
  {
    id: 'security',
    title: 'Uncompromising Security',
    description:
      'Rest easy with enterprise-grade authentication, role-based permissions, detailed audit logs, and branch-level restrictions.',
    icon: Lock,
  },
]

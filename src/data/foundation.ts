import { Cloud, Monitor, RefreshCw, Smartphone, Building2, ShieldCheck, type LucideIcon } from 'lucide-react'

export interface FoundationFeature {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export const foundationFeatures: FoundationFeature[] = [
  {
    id: 'cloud-native',
    title: 'Cloud-Native Architecture',
    description: 'Access your business from anywhere.',
    icon: Cloud,
  },
  {
    id: 'offline-desktop',
    title: 'Offline Desktop App',
    description: 'Keep operating even when the internet goes down.',
    icon: Monitor,
  },
  {
    id: 'auto-sync',
    title: 'Automatic Synchronization',
    description: 'Seamless data flow between local and cloud servers.',
    icon: RefreshCw,
  },
  {
    id: 'mobile-companion',
    title: 'Mobile Companion Apps',
    description: 'Manage operations on the go via iOS and Android.',
    icon: Smartphone,
  },
  {
    id: 'multi-branch',
    title: 'Multi-Branch Ready',
    description: 'Manage one location or a hundred from a centralized hub.',
    icon: Building2,
  },
  {
    id: 'security',
    title: 'Enterprise-Grade Security',
    description: 'Encrypted communication with strict role-based access.',
    icon: ShieldCheck,
  },
]

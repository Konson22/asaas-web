import { Cloud, Monitor, GitMerge, Smartphone, type LucideIcon } from 'lucide-react'

export interface DeploymentOption {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export const deploymentOptions: DeploymentOption[] = [
  {
    id: 'cloud',
    title: 'Cloud',
    description:
      'Access from anywhere with zero infrastructure required. Enjoy automatic updates and automated backups.',
    icon: Cloud,
  },
  {
    id: 'desktop',
    title: 'Desktop',
    description:
      'A blazing-fast, offline Windows application. The perfect solution for areas with unreliable internet connectivity.',
    icon: Monitor,
  },
  {
    id: 'hybrid',
    title: 'Hybrid',
    description:
      'The best of both worlds. An offline-first desktop application that automatically syncs to the cloud in the background. Ideal for multi-branch resilience.',
    icon: GitMerge,
  },
  {
    id: 'mobile',
    title: 'Mobile',
    description:
      'Approve transactions, monitor live reports, and manage daily operations directly from your Android or iOS device.',
    icon: Smartphone,
  },
]

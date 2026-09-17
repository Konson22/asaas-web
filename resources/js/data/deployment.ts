import { Cloud, Laptop, Server, type LucideIcon } from 'lucide-react'

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
    description: 'Centralized online access for authorized users, with automatic updates and backups.',
    icon: Cloud,
  },
  {
    id: 'offline-desktop',
    title: 'Cloud + Offline Desktop',
    description:
      'Cloud connectivity while maintaining supported local desktop operation during internet interruptions.',
    icon: Laptop,
  },
  {
    id: 'local-server',
    title: 'Local Server + Cloud Sync',
    description:
      'Operate through your internal network, synchronizing supported information with the cloud when internet is available.',
    icon: Server,
  },
]

import { ShieldCheck, KeyRound, Layers, Building2, PanelLeft, Users2, type LucideIcon } from 'lucide-react'

export interface PermissionFeature {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export const permissionFeatures: PermissionFeature[] = [
  {
    id: 'custom-roles',
    title: 'Custom Roles',
    description: 'Define roles that match how your business actually works, from cashier to CFO.',
    icon: ShieldCheck,
  },
  {
    id: 'custom-permissions',
    title: 'Custom Permissions',
    description: 'Grant access down to individual actions — view, create, edit, approve, or delete.',
    icon: KeyRound,
  },
  {
    id: 'multiple-permissions',
    title: 'Multiple Permissions',
    description: 'Assign combinations of permission sets to a single user for cross-functional roles.',
    icon: Layers,
  },
  {
    id: 'branch-assignment',
    title: 'Branch Assignment',
    description: 'Restrict staff to specific branches so they only see the data relevant to them.',
    icon: Building2,
  },
  {
    id: 'dynamic-sidebar',
    title: 'Dynamic Sidebar',
    description: 'The interface adapts automatically to show only the modules each user can access.',
    icon: PanelLeft,
  },
  {
    id: 'multi-user',
    title: 'Multi-user Management',
    description: 'Manage unlimited users across branches with centralized administration.',
    icon: Users2,
  },
]

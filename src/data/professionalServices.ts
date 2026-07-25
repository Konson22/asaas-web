import { Rocket, UploadCloud, GraduationCap, ClipboardList, LifeBuoy, type LucideIcon } from 'lucide-react'

export interface ProfessionalService {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export const professionalServices: ProfessionalService[] = [
  {
    id: 'implementation',
    title: 'Full-Service Software Implementation',
    description: 'End-to-end setup and configuration, handled by our team from kickoff to go-live.',
    icon: Rocket,
  },
  {
    id: 'migration',
    title: 'Secure Data Migration (Excel/CSV)',
    description: 'Bring your existing customers, products, and balances across without losing history.',
    icon: UploadCloud,
  },
  {
    id: 'training',
    title: 'Comprehensive Staff Training',
    description: 'On-site or remote sessions so every team member is confident from day one.',
    icon: GraduationCap,
  },
  {
    id: 'consulting',
    title: 'Business Process Analysis & Consulting',
    description: 'We map your current workflows and recommend how the platform should fit them.',
    icon: ClipboardList,
  },
  {
    id: 'support',
    title: 'Ongoing Technical Support & Maintenance',
    description: 'Dedicated support to keep every branch running smoothly, long after launch.',
    icon: LifeBuoy,
  },
]

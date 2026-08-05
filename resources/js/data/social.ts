import { FacebookIcon, LinkedinIcon, InstagramIcon, XIcon } from '@/components/common/SocialIcons'
import type { ComponentType, SVGProps } from 'react'

export interface SocialLink {
  id: string
  label: string
  href: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

export const socialLinks: SocialLink[] = [
  {
    id: 'facebook',
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61591718906417',
    icon: FacebookIcon,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: '#',
    icon: LinkedinIcon,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: '#',
    icon: InstagramIcon,
  },
  {
    id: 'x',
    label: 'X (Twitter)',
    href: '#',
    icon: XIcon,
  },
]

export const contactInfo = {
  email: 'support@asaasvantage.com',
  phone: '+211920079070',
}

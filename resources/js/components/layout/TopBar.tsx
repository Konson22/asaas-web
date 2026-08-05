import { Mail, Phone } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { contactInfo, socialLinks } from '@/data/social'

export function TopBar() {
  return (
    <div className="hidden bg-primary-darker text-white/80 md:block">
      <Container className="flex h-9 items-center justify-between text-xs">
        <div className="flex items-center gap-5">
          <a
            href={`mailto:${contactInfo.email}`}
            className="flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <Mail className="size-3.5" aria-hidden="true" />
            {contactInfo.email}
          </a>
          <a
            href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <Phone className="size-3.5" aria-hidden="true" />
            {contactInfo.phone}
          </a>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={social.label}
                className="transition-colors hover:text-white"
              >
                <Icon className="size-3.5" />
              </a>
            )
          })}
        </div>
      </Container>
    </div>
  )
}

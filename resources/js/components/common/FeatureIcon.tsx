import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FeatureIconProps {
  icon: LucideIcon
  /** Purple for most icons; green only for selected highlights; white on gradient bands. */
  tone?: 'blue' | 'green' | 'white'
  className?: string
}

const toneClasses = {
  blue: 'bg-surface-purple text-primary',
  green: 'bg-surface-green text-ink',
  white: 'bg-white/15 text-white',
}

export function FeatureIcon({ icon: Icon, tone = 'blue', className }: FeatureIconProps) {
  return (
    <div className={cn('flex size-11 shrink-0 items-center justify-center rounded-xl', toneClasses[tone], className)}>
      <Icon className="size-5" />
    </div>
  )
}

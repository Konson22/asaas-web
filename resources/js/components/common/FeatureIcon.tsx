import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FeatureIconProps {
  icon: LucideIcon
  tone?: 'lime' | 'purple' | 'green' | 'white'
  className?: string
}

const toneClasses = {
  lime: 'bg-accent text-background',
  purple: 'bg-primary/15 text-primary',
  green: 'bg-success/15 text-success',
  white: 'bg-white/10 text-white',
}

export function FeatureIcon({ icon: Icon, tone = 'lime', className }: FeatureIconProps) {
  return (
    <div className={cn('flex size-11 shrink-0 items-center justify-center rounded-full', toneClasses[tone], className)}>
      <Icon className="size-5" />
    </div>
  )
}

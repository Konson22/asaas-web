import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { BrandTone } from '@/lib/productVisuals'

interface FeatureIconProps {
  icon: LucideIcon
  /** 'purple' resolves to Primary Blue, the main brand tone. 'blue' is a minor 4th tone
   * (→ Cyan) used only for card/icon variety (What We Do, product grid) — see app.css's
   * --brand-blue-accent comment. */
  tone?: BrandTone | 'blue' | 'white'
  className?: string
}

const toneClasses: Record<NonNullable<FeatureIconProps['tone']>, string> = {
  purple: 'bg-primary/15 text-primary',
  blue: 'bg-blue-accent/15 text-blue-accent',
  orange: 'bg-accent/15 text-accent',
  white: 'bg-white/15 text-white ring-white/20',
  green: 'bg-lime/12 text-lime',
}

export function FeatureIcon({ icon: Icon, tone = 'purple', className }: FeatureIconProps) {
  return (
    <div className={cn('flex size-12 shrink-0 items-center justify-center rounded-full ring-1 ring-black/5', toneClasses[tone], className)}>
      <Icon className="size-5" />
    </div>
  )
}

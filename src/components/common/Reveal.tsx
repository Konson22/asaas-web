import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import { fadeUp, viewportOnce } from '@/animations/variants'
import { useReducedMotionSafe } from '@/hooks/useReducedMotionSafe'
import { cn } from '@/lib/utils'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'li'
}

export function Reveal({ children, className, delay = 0, as = 'div' }: RevealProps) {
  const reduceMotion = useReducedMotionSafe()
  const MotionTag = as === 'li' ? motion.li : motion.div

  if (reduceMotion) {
    const Tag = as
    return <Tag className={cn(className)}>{children}</Tag>
  }

  return (
    <MotionTag
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  )
}

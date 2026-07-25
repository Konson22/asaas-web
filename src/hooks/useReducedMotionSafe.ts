import { useReducedMotion } from 'motion/react'

/**
 * Wraps Motion's useReducedMotion with a non-null default so call sites
 * don't have to guard against `null` during the first render.
 */
export function useReducedMotionSafe(): boolean {
  return useReducedMotion() ?? false
}

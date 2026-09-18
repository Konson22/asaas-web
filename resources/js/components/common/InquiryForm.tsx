import type { FormEvent } from 'react'
import { useId, useState } from 'react'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getPlatformApiUrl } from '@/lib/platform'
import { cn } from '@/lib/utils'

type FormErrors = Partial<Record<'name' | 'email' | 'company' | 'form', string>>

interface InquiryFormProps {
  compact?: boolean
  heading?: string
  description?: string
  submitLabel?: string
  className?: string
}

export function InquiryForm({
  compact = false,
  heading = 'Start your free trial',
  description = "Tell us a little about your business and we'll get you set up.",
  submitLabel = 'Start Free Trial',
  className,
}: InquiryFormProps) {
  const uid = useId()
  const [data, setData] = useState({ name: '', email: '', company: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [processing, setProcessing] = useState(false)
  const [successful, setSuccessful] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setProcessing(true)
    setErrors({})

    try {
      const response = await fetch(getPlatformApiUrl('/contact'), {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const payload = (await response.json().catch(() => ({}))) as {
        message?: string
        errors?: Record<string, string[]>
      }

      if (!response.ok) {
        const nextErrors: FormErrors = {}
        if (payload.errors) {
          for (const [key, messages] of Object.entries(payload.errors)) {
            if (key === 'name' || key === 'email' || key === 'company') {
              nextErrors[key] = messages[0]
            }
          }
        }
        nextErrors.form = payload.message || 'Unable to send your request. Please try again.'
        setErrors(nextErrors)
        return
      }

      setSuccessful(true)
      setData({ name: '', email: '', company: '' })
    } catch {
      setErrors({ form: 'Unable to reach the platform. Please try again later.' })
    } finally {
      setProcessing(false)
    }
  }

  const fieldClass =
    'h-11 w-full rounded-lg border border-border bg-background px-3.5 text-sm text-ink outline-none transition-colors placeholder:text-ink-muted/60 focus:border-primary focus:ring-2 focus:ring-primary/20'

  if (successful) {
    return (
      <div className={cn('flex flex-col items-center gap-3 py-6 text-center', compact && 'py-4', className)}>
        <span className="flex size-11 items-center justify-center rounded-full bg-lime text-ink">
          <Check className="size-5" />
        </span>
        <p className="font-semibold text-ink">Request received</p>
        <p className="text-sm text-ink-muted">Our team will contact you shortly.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={cn('flex flex-col', compact ? 'gap-3' : 'gap-5', className)}>
      {heading ? (
        <div>
          <h2 className={cn('font-bold text-ink', compact ? 'text-base' : 'text-xl')}>{heading}</h2>
          {description ? <p className="mt-1 text-sm text-ink-muted">{description}</p> : null}
        </div>
      ) : null}

      {errors.form ? <p className="text-sm text-destructive">{errors.form}</p> : null}

      <div className="flex flex-col gap-1.5">
        <label htmlFor={`${uid}-name`} className="text-sm font-semibold text-ink">
          Full name
        </label>
        <input
          id={`${uid}-name`}
          name="name"
          type="text"
          required
          autoComplete="name"
          value={data.name}
          onChange={(event) => setData((prev) => ({ ...prev, name: event.target.value }))}
          className={fieldClass}
          placeholder="Jane Smith"
        />
        {errors.name ? <p className="text-sm text-destructive">{errors.name}</p> : null}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor={`${uid}-email`} className="text-sm font-semibold text-ink">
          Work email
        </label>
        <input
          id={`${uid}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          value={data.email}
          onChange={(event) => setData((prev) => ({ ...prev, email: event.target.value }))}
          className={fieldClass}
          placeholder="jane@company.com"
        />
        {errors.email ? <p className="text-sm text-destructive">{errors.email}</p> : null}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor={`${uid}-company`} className="text-sm font-semibold text-ink">
          Company
        </label>
        <input
          id={`${uid}-company`}
          name="company"
          type="text"
          required
          autoComplete="organization"
          value={data.company}
          onChange={(event) => setData((prev) => ({ ...prev, company: event.target.value }))}
          className={fieldClass}
          placeholder="Company Ltd."
        />
        {errors.company ? <p className="text-sm text-destructive">{errors.company}</p> : null}
      </div>

      <Button type="submit" variant="cta" size={compact ? 'default' : 'lg'} disabled={processing} className="w-full">
        {processing ? 'Sending…' : submitLabel}
      </Button>
    </form>
  )
}

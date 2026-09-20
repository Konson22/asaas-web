import { Link } from '@inertiajs/react'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CtaSection } from '@/sections/home/CtaSection'

export function CtaBannerSection() {
  return (
    <CtaSection
      layout="banner"
      eyebrow="Ready To Transform Your Business?"
      title="Let's Build Something Amazing Together"
      description="Get in touch today and let's discuss how we can help you achieve your goals."
      actions={
        <>
          <Button variant="cta" size="lg" asChild>
            <Link href="/contact">
              Get a Quote
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button variant="onGradientOutline" size="lg" asChild>
            <Link href="/contact">
              <MessageCircle className="size-4" />
              Contact Us
            </Link>
          </Button>
        </>
      }
    />
  )
}

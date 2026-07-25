import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Check, Cloud, Download, ExternalLink, Smartphone } from 'lucide-react'
import { PageTitle } from '@/components/common/PageTitle'
import { PageHero } from '@/components/common/PageHero'
import { Container } from '@/components/common/Container'
import { Reveal } from '@/components/common/Reveal'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CtaSection } from '@/sections/home/CtaSection'
import { getProductById, type Product } from '@/data/products'
import { useRegisterableApplications } from '@/hooks/useRegisterableApplications'
import { getPlatformUrl } from '@/lib/platform'
import NotFoundPage from '@/pages/NotFound'

const accessLabels: Record<Product['access'][number], string> = {
  cloud: 'Cloud',
  desktop: 'Desktop',
  mobile: 'iOS & Android',
}

export default function ProductDetailPage() {
  const { productId = '' } = useParams<{ productId: string }>()
  const registerableApplications = useRegisterableApplications()
  const product = getProductById(productId)

  if (!product) {
    return <NotFoundPage />
  }

  const Icon = product.icon
  const canRegister = Boolean(
    product.applicationCode && registerableApplications.includes(product.applicationCode),
  )

  return (
    <>
      <PageTitle title={product.name} />
      <PageHero eyebrow="Products" title={product.name} description={product.tagline}>
        <div className="flex flex-wrap items-center gap-2">
          {product.access.map((access) => (
            <Badge key={access} variant="inverted">
              {accessLabels[access]}
            </Badge>
          ))}
          {canRegister ? <Badge variant="inverted">Free trial</Badge> : null}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          {product.access.includes('cloud') && product.applicationCode && canRegister ? (
            <Button variant="cta" asChild>
              <a href={getPlatformUrl(`/get-started/${product.applicationCode}`)}>
                <Cloud className="size-4" />
                Get started
              </a>
            </Button>
          ) : product.access.includes('cloud') ? (
            <Button variant="secondary" disabled>
              <Cloud className="size-4" />
              Coming soon
            </Button>
          ) : null}
          <Button variant="secondary" asChild>
            <Link to="/products">
              <ArrowLeft className="size-4" />
              All products
            </Link>
          </Button>
        </div>
      </PageHero>

      <section className="bg-background py-24">
        <Container className="flex flex-col gap-16">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="overflow-hidden rounded-card border border-border bg-surface shadow-[0_2px_8px_rgb(15,31,68,0.06)]">
                <img
                  src={product.image}
                  alt={`${product.name} product preview`}
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h2 className="text-2xl font-bold text-ink sm:text-3xl">{product.name}</h2>
                </div>

                <p className="text-base text-ink-muted">{product.description}</p>

                <div className="flex flex-col gap-3 sm:flex-row">
                  {product.access.includes('cloud') && product.applicationCode && canRegister ? (
                    <Button variant="primary" asChild>
                      <a href={getPlatformUrl(`/get-started/${product.applicationCode}`)}>
                        <Cloud className="size-4" />
                        Get started
                      </a>
                    </Button>
                  ) : product.access.includes('cloud') ? (
                    <Button variant="outline" disabled>
                      <Cloud className="size-4" />
                      Coming soon
                    </Button>
                  ) : null}
                  {product.access.includes('desktop') && product.downloadUrl ? (
                    <Button variant="outline" asChild>
                      <a href={product.downloadUrl} download>
                        <Download className="size-4" />
                        Download for Desktop
                      </a>
                    </Button>
                  ) : null}
                  {product.access.includes('mobile') && product.downloadUrl ? (
                    <Button variant="outline" asChild>
                      <a href={product.downloadUrl}>
                        <Smartphone className="size-4" />
                        Get the App
                      </a>
                    </Button>
                  ) : null}
                  {product.launchUrl ? (
                    <Button variant="outline" asChild>
                      <a href={product.launchUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="size-4" />
                        Launch App
                      </a>
                    </Button>
                  ) : null}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-bold text-ink">What you get</h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 rounded-lg border border-border bg-surface px-4 py-3 text-sm text-ink"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaSection />
    </>
  )
}

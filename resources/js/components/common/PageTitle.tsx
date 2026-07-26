import { Head } from '@inertiajs/react'

export function PageTitle({ title }: { title?: string }) {
  return <Head title={title} />
}

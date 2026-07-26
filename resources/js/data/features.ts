import { Bot, BarChart3, Printer, Plug, type LucideIcon } from 'lucide-react'

export interface FeatureGroup {
  id: string
  title: string
  description: string
  icon: LucideIcon
  items: string[]
  note?: string
}

export const featureGroups: FeatureGroup[] = [
  {
    id: 'ai-assistant',
    title: 'AI Assistant',
    description: 'Make smarter decisions with built-in artificial intelligence.',
    icon: Bot,
    items: [
      'Proactive business insights & report summaries',
      'Predictive sales forecasting',
      'Automated inventory restock recommendations',
      'Smart search & natural language reporting',
    ],
    note: 'Optional: AI-powered customer support add-on',
  },
  {
    id: 'business-intelligence',
    title: 'Business Intelligence',
    description: 'See the big picture in real-time.',
    icon: BarChart3,
    items: [
      'Customizable executive dashboards',
      'Live KPI tracking & revenue analytics',
      'Branch-by-branch performance comparisons',
    ],
  },
  {
    id: 'hardware',
    title: 'Hardware & Output',
    description: 'Connects seamlessly with your existing equipment.',
    icon: Printer,
    items: [
      'Printers: Thermal, A4, Barcode, Receipt, Label, and Kitchen printers.',
      'Peripherals: Barcode/QR scanners, cash drawers, electronic scales.',
      'Data Portability: Generate print-ready PDFs, export to Excel/CSV, and schedule automated email reports.',
    ],
  },
  {
    id: 'integrations',
    title: 'Seamless Integrations',
    description: 'Asas Vantage plays nicely with the tools you already use.',
    icon: Plug,
    items: [
      'Payment Gateways, SMS Providers, Email, WhatsApp',
      'External Accounting Systems',
      'Developer-friendly REST API & Webhooks',
    ],
  },
]

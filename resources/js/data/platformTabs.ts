import {
  ShoppingCart,
  Boxes,
  Calculator,
  Truck,
  Users,
  UserCog,
  type LucideIcon,
} from 'lucide-react'

export interface PlatformTab {
  id: string
  label: string
  icon: LucideIcon
  title: string
  description: string
  features: string[]
}

export const platformTabs: PlatformTab[] = [
  {
    id: 'sales',
    label: 'Sales',
    icon: ShoppingCart,
    title: 'Sell everywhere, reconcile automatically',
    description:
      'Run point of sale, online orders, and quotations from one system. Every sale updates inventory and accounting in real time — no end-of-day reconciliation.',
    features: [
      'Fast, offline-capable point of sale',
      'Quotes, invoices, and recurring billing',
      'Multi-branch price lists and discounts',
      'Real-time sync with inventory and accounting',
    ],
  },
  {
    id: 'inventory',
    label: 'Inventory',
    icon: Boxes,
    title: 'Stock visibility across every branch',
    description:
      'Track stock levels, transfers, and expiry dates across warehouses and branches, with automatic reorder alerts before you run out.',
    features: [
      'Live stock levels by branch and warehouse',
      'Batch, serial, and expiry-date tracking',
      'Automated reorder points and purchase suggestions',
      'Inter-branch stock transfers with approvals',
    ],
  },
  {
    id: 'accounting',
    label: 'Accounting',
    icon: Calculator,
    title: 'Books that close themselves',
    description:
      'Sales, purchases, and payroll post directly to your ledger. Generate P&L, balance sheet, and tax reports without manual entry.',
    features: [
      'Automatic journal entries from sales & purchases',
      'Multi-currency and multi-branch consolidation',
      'Bank reconciliation and expense tracking',
      'Audit-ready financial reports',
    ],
  },
  {
    id: 'procurement',
    label: 'Procurement',
    icon: Truck,
    title: 'Purchasing that keeps you stocked',
    description:
      'Manage supplier catalogs, purchase orders, and approvals — with costs flowing straight into inventory and accounting.',
    features: [
      'Supplier catalogs and price comparisons',
      'Purchase orders with multi-level approvals',
      'Goods-received tracking against orders',
      'Landed cost allocation',
    ],
  },
  {
    id: 'crm',
    label: 'CRM',
    icon: Users,
    title: 'Every customer relationship, connected',
    description:
      'Track leads, customer history, and loyalty programs alongside every invoice and support interaction.',
    features: [
      'Unified customer and order history',
      'Loyalty points and targeted promotions',
      'Lead and pipeline tracking',
      'Segmented customer communications',
    ],
  },
  {
    id: 'workforce',
    label: 'Workforce',
    icon: UserCog,
    title: 'HR and attendance, built in',
    description:
      'Manage staff records, shifts, attendance, and payroll — with role-based access down to the branch level.',
    features: [
      'Shift scheduling and attendance tracking',
      'Payroll linked directly to accounting',
      'Role-based access by branch and department',
      'Performance and commission tracking',
    ],
  },
]

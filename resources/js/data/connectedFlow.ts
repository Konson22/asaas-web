import { Truck, Boxes, ShoppingCart, CreditCard, Calculator, BarChart3, type LucideIcon } from 'lucide-react'

export interface FlowStep {
  id: string
  label: string
  description: string
  icon: LucideIcon
}

export const connectedFlow: FlowStep[] = [
  { id: 'procurement', label: 'Procurement', description: 'Purchase orders raised', icon: Truck },
  { id: 'inventory', label: 'Inventory', description: 'Stock received & tracked', icon: Boxes },
  { id: 'sales', label: 'Sales', description: 'Orders sold in-store or online', icon: ShoppingCart },
  { id: 'payments', label: 'Payments', description: 'Payments captured & settled', icon: CreditCard },
  { id: 'accounting', label: 'Accounting', description: 'Ledger updated automatically', icon: Calculator },
  { id: 'reports', label: 'Reports', description: 'Real-time insight across branches', icon: BarChart3 },
]

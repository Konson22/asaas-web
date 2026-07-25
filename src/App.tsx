import { Route, Routes } from 'react-router-dom'
import { MainLayout } from '@/layouts/MarketingLayout'
import HomePage from '@/pages/Home'
import PlatformPage from '@/pages/Platform'
import IndustriesPage from '@/pages/Industries'
import ProductsPage from '@/pages/Products'
import ProductDetailPage from '@/pages/ProductDetail'
import PricingPage from '@/pages/Pricing'
import FaqPage from '@/pages/Faq'
import ContactPage from '@/pages/Contact'
import PrivacyPage from '@/pages/Privacy'
import TermsPage from '@/pages/Terms'
import NotFoundPage from '@/pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="platform" element={<PlatformPage />} />
        <Route path="industries" element={<IndustriesPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/:productId" element={<ProductDetailPage />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="privacy-policy" element={<PrivacyPage />} />
        <Route path="terms-of-service" element={<TermsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

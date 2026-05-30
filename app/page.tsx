import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TrustedSection } from "@/components/trusted-section"
import { ProductsSection } from "@/components/products-section"
import { FeaturesSection } from "@/components/features-section"
import { SolutionsSection } from "@/components/solutions-section"
import { DashboardPreview } from "@/components/dashboard-preview"
import { SecuritySection } from "@/components/security-section"
import { PricingSection } from "@/components/pricing-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustedSection />
        <ProductsSection />
        <FeaturesSection />
        <SolutionsSection />
        <DashboardPreview />
        <SecuritySection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}

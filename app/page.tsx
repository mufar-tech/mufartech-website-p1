import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductsSection } from "@/components/products-section"
import { FeaturesSection } from "@/components/features-section"
import { SolutionsSection } from "@/components/solutions-section"
import { SecuritySection } from "@/components/security-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { connectDB } from "@/lib/db"
import { seedDB } from "@/lib/seed"
import { SiteContent } from "@/lib/models/site-content"
import { SaasProduct } from "@/lib/models/saas-product"

export default async function Home() {
  await connectDB()
  await seedDB()

  const contentEntries = await SiteContent.find()
  const content: Record<string, string> = {}
  for (const entry of contentEntries) {
    content[entry.key] = entry.content
  }

  const products = await SaasProduct.find().sort({ order: 1 }).lean()

  return (
    <>
      <Header />
      <main>
        <HeroSection content={content} />
        <ProductsSection products={JSON.parse(JSON.stringify(products))} content={content} />
        <FeaturesSection content={content} />
        <SolutionsSection content={content} />
        <SecuritySection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}

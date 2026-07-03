import { connectDB } from "@/lib/db"
import { SaasProduct } from "@/lib/models/saas-product"
import { SaasProductManager } from "./product-manager"

export default async function SaasProductsPage() {
  await connectDB()
  const products = await SaasProduct.find().sort({ order: 1 }).lean()

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">SaaS Products</h1>
      <p className="text-muted-foreground">Manage the products shown in the Products section of your website.</p>
      <SaasProductManager products={JSON.parse(JSON.stringify(products))} />
    </div>
  )
}

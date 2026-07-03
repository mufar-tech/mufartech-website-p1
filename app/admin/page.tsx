import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { connectDB } from "@/lib/db"
import { SaasProduct } from "@/lib/models/saas-product"
import { SiteContent } from "@/lib/models/site-content"
import Link from "next/link"

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions)
  await connectDB()

  const productCount = await SaasProduct.countDocuments()
  const contentCount = await SiteContent.countDocuments()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Welcome, {session?.user?.name}</h1>
        <p className="text-muted-foreground">Manage your website content and products.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="border rounded-lg p-6">
          <p className="text-sm text-muted-foreground">Site Content Sections</p>
          <p className="text-3xl font-bold mt-1">{contentCount || 0} configured</p>
          <Link href="/admin/content" className="text-sm text-primary hover:underline mt-2 inline-block">
            Edit Content
          </Link>
        </div>

        <div className="border rounded-lg p-6">
          <p className="text-sm text-muted-foreground">SaaS Products Listed</p>
          <p className="text-3xl font-bold mt-1">{productCount}</p>
          <Link href="/admin/saas-products" className="text-sm text-primary hover:underline mt-2 inline-block">
            Manage Products
          </Link>
        </div>
      </div>
    </div>
  )
}

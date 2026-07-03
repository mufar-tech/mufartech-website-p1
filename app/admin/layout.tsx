import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import Link from "next/link"
import { LogoutButton } from "@/components/logout-button"

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions)
  if (!session) redirect("/login")

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/admin" className="font-bold text-lg">Admin Panel</Link>
          <nav className="flex items-center gap-4 text-sm">
            <Link href="/admin" className="hover:text-primary">Dashboard</Link>
            <Link href="/admin/content" className="hover:text-primary">Content</Link>
            <Link href="/admin/saas-products" className="hover:text-primary">Products</Link>
            <Link href="/" className="hover:text-primary">View Site</Link>
            <LogoutButton />
          </nav>
        </div>
      </header>
      <main className="flex-1 max-w-7xl mx-auto px-4 py-6 w-full">{children}</main>
    </div>
  )
}

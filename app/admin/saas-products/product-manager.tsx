"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

const iconOptions = [
  "FileText", "Package", "Wallet", "Receipt", "ShoppingCart",
  "CheckSquare", "MessageSquare", "Users", "Sparkles", "BarChart3",
  "Settings", "Shield", "Cloud", "Globe", "Lock",
]

const colorOptions = [
  { value: "bg-blue-500/10 text-blue-600", label: "Blue" },
  { value: "bg-emerald-500/10 text-emerald-600", label: "Green" },
  { value: "bg-amber-500/10 text-amber-600", label: "Amber" },
  { value: "bg-rose-500/10 text-rose-600", label: "Rose" },
  { value: "bg-indigo-500/10 text-indigo-600", label: "Indigo" },
  { value: "bg-cyan-500/10 text-cyan-600", label: "Cyan" },
  { value: "bg-purple-500/10 text-purple-600", label: "Purple" },
  { value: "bg-pink-500/10 text-pink-600", label: "Pink" },
  { value: "bg-primary/10 text-primary", label: "Primary" },
]

interface Product {
  _id: string
  name: string
  description: string
  icon: string
  color: string
  comingSoon: boolean
  order: number
}

export function SaasProductManager({ products }: { products: Product[] }) {
  const router = useRouter()
  const [editingId, setEditingId] = useState<string | null>(null)
  const [newProduct, setNewProduct] = useState(false)

  const [form, setForm] = useState({
    name: "",
    description: "",
    icon: "FileText",
    color: "bg-blue-500/10 text-blue-600",
    comingSoon: false,
    order: 0,
  })

  const [loading, setLoading] = useState(false)

  function resetForm() {
    setForm({ name: "", description: "", icon: "FileText", color: "bg-blue-500/10 text-blue-600", comingSoon: false, order: 0 })
    setEditingId(null)
    setNewProduct(false)
  }

  function editProduct(p: Product) {
    setForm({ name: p.name, description: p.description, icon: p.icon, color: p.color, comingSoon: p.comingSoon, order: p.order })
    setEditingId(p._id)
    setNewProduct(false)
  }

  async function handleSave() {
    setLoading(true)
    const url = "/api/saas-products"
    const method = editingId ? "PUT" : "POST"
    const body = editingId ? { _id: editingId, ...form } : form

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })

    setLoading(false)
    resetForm()
    router.refresh()
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this product?")) return
    await fetch(`/api/saas-products?id=${id}`, { method: "DELETE" })
    router.refresh()
  }

  return (
    <div className="space-y-6">
      {(newProduct || editingId) && (
        <div className="border rounded-lg p-6 space-y-4">
          <h3 className="font-semibold">{editingId ? "Edit Product" : "Add Product"}</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium mb-1">Name</label>
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-3 py-2 border rounded-md bg-background" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium mb-1">Description</label>
              <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full px-3 py-2 border rounded-md bg-background min-h-[60px]" rows={2} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Icon</label>
              <select value={form.icon} onChange={(e) => setForm({ ...form, icon: e.target.value })} className="w-full px-3 py-2 border rounded-md bg-background">
                {iconOptions.map((i) => <option key={i} value={i}>{i}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Color</label>
              <select value={form.color} onChange={(e) => setForm({ ...form, color: e.target.value })} className="w-full px-3 py-2 border rounded-md bg-background">
                {colorOptions.map((c) => <option key={c.value} value={c.value}>{c.label}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Order</label>
              <input type="number" value={form.order} onChange={(e) => setForm({ ...form, order: parseInt(e.target.value) || 0 })} className="w-full px-3 py-2 border rounded-md bg-background" />
            </div>
            <div className="flex items-center gap-2 pt-6">
              <input type="checkbox" id="comingSoon" checked={form.comingSoon} onChange={(e) => setForm({ ...form, comingSoon: e.target.checked })} className="w-4 h-4" />
              <label htmlFor="comingSoon" className="text-sm font-medium">Coming Soon</label>
            </div>
          </div>

          <div className="flex gap-3">
            <button onClick={handleSave} disabled={loading} className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm hover:opacity-90 disabled:opacity-50">
              {loading ? "Saving..." : editingId ? "Update" : "Add"}
            </button>
            <button onClick={resetForm} className="px-4 py-2 border rounded-md text-sm hover:bg-accent">Cancel</button>
          </div>
        </div>
      )}

      <div className="border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-3 font-medium">Order</th>
                <th className="text-left p-3 font-medium">Name</th>
                <th className="text-left p-3 font-medium">Icon</th>
                <th className="text-left p-3 font-medium">Color</th>
                <th className="text-center p-3 font-medium">Coming Soon</th>
                <th className="text-right p-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p._id} className="border-t hover:bg-muted/30">
                  <td className="p-3">{p.order}</td>
                  <td className="p-3 font-medium">{p.name}</td>
                  <td className="p-3 text-muted-foreground">{p.icon}</td>
                  <td className="p-3">
                    <span className={`inline-block px-2 py-0.5 rounded text-xs ${p.color}`}>
                      {p.color.split(" ")[0]}
                    </span>
                  </td>
                  <td className="p-3 text-center">
                    {p.comingSoon ? <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Yes</span> : "-"}
                  </td>
                  <td className="p-3 text-right">
                    <div className="flex justify-end gap-2">
                      <button onClick={() => editProduct(p)} className="text-primary hover:underline text-xs">Edit</button>
                      <button onClick={() => handleDelete(p._id)} className="text-destructive hover:underline text-xs">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {!newProduct && !editingId && (
        <button onClick={() => setNewProduct(true)} className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:opacity-90">
          Add Product
        </button>
      )}
    </div>
  )
}

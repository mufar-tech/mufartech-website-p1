"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export function ContentEditor({
  content,
  fields,
}: {
  content: Record<string, string>
  fields: Record<string, { label: string; type: "text" | "textarea" }>
}) {
  const router = useRouter()
  const [values, setValues] = useState(content)
  const [loading, setLoading] = useState(false)
  const [saved, setSaved] = useState(false)

  async function handleSave() {
    setLoading(true)
    setSaved(false)

    await fetch("/api/content", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })

    setLoading(false)
    setSaved(true)
    router.refresh()
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="border rounded-lg p-6 space-y-4">
      {Object.entries(fields).map(([key, field]) => (
        <div key={key}>
          <label className="block text-sm font-medium mb-1">{field.label}</label>
          {field.type === "textarea" ? (
            <textarea
              value={values[key] || ""}
              onChange={(e) => setValues({ ...values, [key]: e.target.value })}
              className="w-full px-3 py-2 border rounded-md bg-background min-h-[80px]"
              rows={3}
            />
          ) : (
            <input
              value={values[key] || ""}
              onChange={(e) => setValues({ ...values, [key]: e.target.value })}
              className="w-full px-3 py-2 border rounded-md bg-background"
            />
          )}
        </div>
      ))}

      <div className="flex items-center gap-3 pt-2">
        <button
          onClick={handleSave}
          disabled={loading}
          className="px-6 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>
        {saved && <span className="text-sm text-green-600 font-medium">Saved!</span>}
      </div>
    </div>
  )
}

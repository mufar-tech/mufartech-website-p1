import { connectDB } from "@/lib/db"
import { SiteContent } from "@/lib/models/site-content"
import { ContentEditor } from "./content-editor"

const defaultContent: Record<string, { label: string; type: "text" | "textarea" }> = {
  hero_title: { label: "Hero Title", type: "text" },
  hero_description: { label: "Hero Description", type: "textarea" },
  hero_cta: { label: "Hero CTA Button", type: "text" },
  products_heading: { label: "Products Section Heading", type: "text" },
  products_subheading: { label: "Products Section Subheading", type: "textarea" },
  features_heading: { label: "Features Section Heading", type: "text" },
  features_subheading: { label: "Features Section Subheading", type: "textarea" },
  solutions_heading: { label: "Solutions Section Heading", type: "text" },
  solutions_subheading: { label: "Solutions Section Subheading", type: "textarea" },
  pricing_heading: { label: "Pricing Section Heading", type: "text" },
  pricing_subheading: { label: "Pricing Section Subheading", type: "textarea" },
}

export default async function ContentPage() {
  await connectDB()
  const entries = await SiteContent.find()

  const content: Record<string, string> = {}
  for (const key of Object.keys(defaultContent)) {
    const existing = entries.find((e) => e.key === key)
    content[key] = existing ? existing.content : ""
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Site Content</h1>
      <ContentEditor content={content} fields={defaultContent} />
    </div>
  )
}

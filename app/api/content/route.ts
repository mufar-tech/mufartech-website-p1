import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import { SiteContent } from "@/lib/models/site-content"

const defaultContent: Record<string, string> = {
  hero_title: "Streamline Your Business with Mufar Technologies",
  hero_description: "A comprehensive suite of integrated business applications designed to automate workflows, boost productivity, and drive growth.",
  hero_cta: "Get Started",
  products_heading: "Everything You Need to Run Your Business",
  products_subheading: "A comprehensive suite of integrated applications designed to work seamlessly together. Choose what you need, scale as you grow.",
  features_heading: "Powerful Features for Modern Businesses",
  features_subheading: "Everything you need to streamline operations, collaborate effectively, and make data-driven decisions.",
  solutions_heading: "Built for Every Industry",
  solutions_subheading: "Tailored solutions that adapt to your unique business requirements, no matter your industry or size.",
  pricing_heading: "Simple, Transparent Pricing",
  pricing_subheading: "Choose the plan that fits your business. No hidden fees, no surprises.",
}

export async function GET() {
  try {
    await connectDB()
    const entries = await SiteContent.find()

    const merged: Record<string, string> = {}
    for (const key of Object.keys(defaultContent)) {
      const existing = entries.find((e) => e.key === key)
      merged[key] = existing ? existing.content : defaultContent[key]
    }

    return NextResponse.json(merged)
  } catch {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 })
  }
}

export async function PUT(req: Request) {
  try {
    await connectDB()
    const body: Record<string, string> = await req.json()

    for (const [key, content] of Object.entries(body)) {
      await SiteContent.findOneAndUpdate(
        { key },
        { key, content },
        { upsert: true, returnDocument: 'after' }
      )
    }

    return NextResponse.json({ message: "Saved" })
  } catch {
    return NextResponse.json({ error: "Failed to save" }, { status: 500 })
  }
}

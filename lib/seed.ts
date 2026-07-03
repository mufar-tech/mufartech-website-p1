import { connectDB } from "./db"
import { SaasProduct } from "./models/saas-product"
import { SiteContent } from "./models/site-content"

const defaultProducts = [
  {
    name: "Mufar Forms",
    description: "Create powerful forms, surveys, and registration pages with an intuitive drag-and-drop builder. Collect responses, analyze data, and collaborate with your team in real-time.",
    icon: "FileText",
    color: "bg-blue-500/10 text-blue-600",
    comingSoon: false,
    order: 1,
  },
  {
    name: "Mufar Tasks",
    description: "Manage projects, track tasks, and collaborate with your team using Kanban boards, calendar views, and powerful reporting. Stay organized and meet every deadline.",
    icon: "CheckSquare",
    color: "bg-emerald-500/10 text-emerald-600",
    comingSoon: false,
    order: 2,
  },
  {
    name: "Mufar CRM",
    description: "Manage leads, contacts, and opportunities with a full-featured CRM. Track your sales pipeline, forecast revenue, and build stronger customer relationships.",
    icon: "Users",
    color: "bg-purple-500/10 text-purple-600",
    comingSoon: false,
    order: 3,
  },
]

const defaultContent: Record<string, string> = {
  hero_title: "One Platform for All Your Business Operations",
  hero_description: "Mufar Technologies brings together Forms, Tasks, and CRM in a unified ecosystem. Streamline your workflow, boost productivity, and scale with confidence.",
  hero_cta: "Get Started Free",
  products_heading: "Our Product Ecosystem",
  products_subheading: "A comprehensive suite of integrated applications designed to work seamlessly together. Choose what you need, scale as you grow.",
  features_heading: "Powerful Features for Modern Businesses",
  features_subheading: "Everything you need to streamline operations, collaborate effectively, and make data-driven decisions.",
  solutions_heading: "Built for Every Industry",
  solutions_subheading: "Tailored solutions that adapt to your unique business requirements, no matter your industry or size.",
  pricing_heading: "Simple, Transparent Pricing",
  pricing_subheading: "Choose the plan that fits your business. No hidden fees, no surprises.",
}

export async function seedDB() {
  await connectDB()

  const productCount = await SaasProduct.countDocuments()
  if (productCount === 0) {
    for (const product of defaultProducts) {
      await new SaasProduct(product).save()
    }
  }

  for (const [key, content] of Object.entries(defaultContent)) {
    await SiteContent.findOneAndUpdate(
      { key },
      { key, content },
      { upsert: true, returnDocument: 'after' }
    )
  }
}

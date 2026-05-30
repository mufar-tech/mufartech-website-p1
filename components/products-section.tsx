import { Button } from "@/components/ui/button"
import { 
  FileText, 
  Package, 
  Wallet, 
  Receipt, 
  ShoppingCart, 
  CheckSquare, 
  MessageSquare, 
  Users,
  Sparkles,
  ArrowRight
} from "lucide-react"

const products = [
  {
    icon: FileText,
    name: "Forms",
    description: "Create dynamic forms, surveys, and collect data with ease. Build anything from simple feedback to complex applications.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Package,
    name: "Inventory",
    description: "Track stock levels, manage warehouses, and automate reordering. Real-time visibility across all locations.",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: Wallet,
    name: "Payroll",
    description: "Automated payroll processing, tax calculations, and compliance. Pay your team on time, every time.",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    icon: Receipt,
    name: "Billing",
    description: "Professional invoicing, recurring billing, and payment tracking. Get paid faster with automated reminders.",
    color: "bg-rose-500/10 text-rose-600",
  },
  {
    icon: ShoppingCart,
    name: "Purchase",
    description: "Streamline procurement, manage vendors, and control spending. From requisition to payment in one flow.",
    color: "bg-indigo-500/10 text-indigo-600",
  },
  {
    icon: CheckSquare,
    name: "Tasks",
    description: "Organize work, track progress, and meet deadlines. Collaborate with your team in real-time.",
    color: "bg-cyan-500/10 text-cyan-600",
  },
  {
    icon: MessageSquare,
    name: "Chat",
    description: "Team messaging, channels, and direct messages. Keep conversations organized and searchable.",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: Users,
    name: "CRM",
    description: "Manage contacts, track deals, and nurture relationships. Convert leads into loyal customers.",
    color: "bg-pink-500/10 text-pink-600",
  },
  {
    icon: Sparkles,
    name: "AI Assistant",
    description: "Coming soon: AI-powered insights, automation, and intelligent suggestions across all modules.",
    color: "bg-primary/10 text-primary",
    comingSoon: true,
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Product Ecosystem
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Everything You Need to Run Your Business
          </h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive suite of integrated applications designed to work seamlessly together. 
            Choose what you need, scale as you grow.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className={`group relative p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 ${
                product.comingSoon ? "opacity-80" : ""
              }`}
            >
              {product.comingSoon && (
                <span className="absolute top-4 right-4 px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  Coming Soon
                </span>
              )}
              
              <div className={`inline-flex p-3 rounded-lg ${product.color} mb-4`}>
                <product.icon className="h-6 w-6" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {product.name}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {product.description}
              </p>
              
              {!product.comingSoon && (
                <Button variant="ghost" size="sm" className="group/btn p-0 h-auto font-medium text-primary hover:text-primary hover:bg-transparent">
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

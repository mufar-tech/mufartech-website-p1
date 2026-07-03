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
  ArrowRight,
  BarChart3,
  Settings,
  Shield,
  Cloud,
  Globe,
  Lock,
} from "lucide-react"

const iconMap: Record<string, React.ElementType> = {
  FileText, Package, Wallet, Receipt, ShoppingCart,
  CheckSquare, MessageSquare, Users, Sparkles, BarChart3,
  Settings, Shield, Cloud, Globe, Lock,
}

interface SaasProduct {
  _id: string
  name: string
  description: string
  icon: string
  color: string
  comingSoon: boolean
  order: number
}

export function ProductsSection({ products, content }: { products: SaasProduct[]; content: Record<string, string> }) {
  return (
    <section id="products" className="py-20 lg:py-28">
      <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Product Ecosystem
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {content.products_heading || "Everything You Need to Run Your Business"}
          </h2>
          <p className="text-lg text-muted-foreground">
            {content.products_subheading || "A comprehensive suite of integrated applications designed to work seamlessly together."}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => {
            const Icon = iconMap[product.icon] || Package
            return (
              <div
                key={product._id}
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
                  <Icon className="h-6 w-6" />
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
            )
          })}
        </div>
      </div>
    </section>
  )
}

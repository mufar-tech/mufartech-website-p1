import { Store, Factory, Briefcase, Rocket, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const solutions = [
  {
    icon: Store,
    name: "Retail",
    description: "Manage inventory, process sales, track customer data, and analyze performance across all your stores.",
    features: ["POS Integration", "Multi-store management", "Customer loyalty"],
  },
  {
    icon: Factory,
    name: "Manufacturing",
    description: "Streamline production, manage supply chains, and track quality from raw materials to finished goods.",
    features: ["Production planning", "Quality control", "Supply chain"],
  },
  {
    icon: Briefcase,
    name: "Service Businesses",
    description: "Schedule appointments, manage projects, track time, and invoice clients with professional precision.",
    features: ["Project management", "Time tracking", "Client portal"],
  },
  {
    icon: Rocket,
    name: "Startups",
    description: "Move fast with tools that scale. Start lean and add features as you grow without changing platforms.",
    features: ["Quick setup", "Flexible pricing", "Growth ready"],
  },
  {
    icon: Building2,
    name: "Enterprises",
    description: "Enterprise-grade features with dedicated support, custom integrations, and advanced compliance.",
    features: ["SSO & SAML", "Custom contracts", "Priority support"],
  },
]

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Industry Solutions
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Tailored for Your Industry
          </h2>
          <p className="text-lg text-muted-foreground">
            Purpose-built configurations and workflows for different business types. 
            Get started faster with industry-specific templates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={solution.name}
              className={`group p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              } bg-card`}
            >
              <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <solution.icon className="h-6 w-6" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {solution.name}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {solution.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {solution.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-2.5 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:text-primary hover:bg-transparent">
                Explore solution →
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

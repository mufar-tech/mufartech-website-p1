import { FileText, CheckSquare, Users, Rocket, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const solutions = [
  {
    icon: FileText,
    name: "Forms for Every Need",
    description: "From customer surveys to employee registration, Mufar Forms handles it all with drag-and-drop simplicity.",
    features: ["Drag-and-drop builder", "Response analytics", "Team collaboration"],
  },
  {
    icon: CheckSquare,
    name: "Task Management",
    description: "Keep projects on track with Kanban boards, calendar views, and real-time team collaboration.",
    features: ["Kanban boards", "Calendar view", "Progress reporting"],
  },
  {
    icon: Users,
    name: "CRM & Sales",
    description: "Manage your entire customer lifecycle from lead to loyal customer with powerful CRM tools.",
    features: ["Lead tracking", "Pipeline management", "Revenue forecasting"],
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

export function SolutionsSection({ content }: { content: Record<string, string> }) {
  return (
    <section id="solutions" className="py-20 lg:py-28">
      <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Industry Solutions
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {content.solutions_heading || "Built for Every Industry"}
          </h2>
          <p className="text-lg text-muted-foreground">
            {content.solutions_subheading || "Tailored solutions that adapt to your unique business requirements."}
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

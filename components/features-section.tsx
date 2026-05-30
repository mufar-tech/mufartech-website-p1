import { 
  Layers, 
  Shield, 
  Lock, 
  Cloud, 
  Users, 
  BarChart3, 
  Smartphone, 
  Plug 
} from "lucide-react"

const features = [
  {
    icon: Layers,
    name: "Unified Platform",
    description: "All your business tools in one place. No more switching between apps or losing data in silos.",
  },
  {
    icon: Shield,
    name: "Role-Based Access",
    description: "Control who sees what with granular permissions. Set roles at team, department, or individual level.",
  },
  {
    icon: Lock,
    name: "Secure Authentication",
    description: "Enterprise-grade security with SSO, 2FA, and advanced session management built-in.",
  },
  {
    icon: Cloud,
    name: "Cloud Sync",
    description: "Your data syncs instantly across all devices. Work from anywhere, access everything.",
  },
  {
    icon: Users,
    name: "Real-Time Collaboration",
    description: "Work together with live updates, comments, and notifications. Stay in sync with your team.",
  },
  {
    icon: BarChart3,
    name: "Analytics & Reporting",
    description: "Powerful dashboards and custom reports. Make data-driven decisions with actionable insights.",
  },
  {
    icon: Smartphone,
    name: "Mobile Friendly",
    description: "Full-featured mobile experience. Manage your business from your pocket, anywhere.",
  },
  {
    icon: Plug,
    name: "API Integration",
    description: "Connect with your favorite tools via REST APIs and webhooks. Extend and customize as needed.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Platform Features
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Built for Modern Businesses
          </h2>
          <p className="text-lg text-muted-foreground">
            Every feature is designed with scalability, security, and user experience in mind.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              <div className="inline-flex p-2.5 rounded-lg bg-primary/10 text-primary mb-4">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

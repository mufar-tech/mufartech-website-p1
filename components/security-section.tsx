import { Shield, Lock, Database, Server, Eye } from "lucide-react"

const securityFeatures = [
  {
    icon: Lock,
    name: "HTTPS Encryption",
    description: "All data transmitted over TLS 1.3 encryption, ensuring your information is always protected in transit.",
  },
  {
    icon: Shield,
    name: "Secure Authentication",
    description: "Multi-factor authentication, SSO support, and advanced session management to protect your accounts.",
  },
  {
    icon: Database,
    name: "Data Protection",
    description: "Your data is encrypted at rest using AES-256. We never access your data without explicit permission.",
  },
  {
    icon: Server,
    name: "Automated Backups",
    description: "Continuous backups with point-in-time recovery. Your data is safe even in worst-case scenarios.",
  },
  {
    icon: Eye,
    name: "Privacy First",
    description: "GDPR and CCPA compliant. We collect only what&apos;s necessary and give you full control over your data.",
  },
]

export function SecuritySection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
              Security & Privacy
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Enterprise-Grade Security You Can Trust
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Your business data deserves the highest level of protection. 
              We&apos;ve built security into every layer of our platform.
            </p>

            <div className="space-y-6">
              {securityFeatures.map((feature) => (
                <div key={feature.name} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.name}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual element */}
          <div className="relative">
            <div className="relative p-8 rounded-2xl bg-card border border-border">
              {/* Shield illustration */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="w-16 h-16 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Security badges */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-4 rounded-lg bg-muted/50">
                  <p className="text-2xl font-bold text-foreground">SOC 2</p>
                  <p className="text-xs text-muted-foreground">Type II</p>
                </div>
                <div className="p-4 rounded-lg bg-muted/50">
                  <p className="text-2xl font-bold text-foreground">GDPR</p>
                  <p className="text-xs text-muted-foreground">Compliant</p>
                </div>
                <div className="p-4 rounded-lg bg-muted/50">
                  <p className="text-2xl font-bold text-foreground">ISO</p>
                  <p className="text-xs text-muted-foreground">27001</p>
                </div>
              </div>

              {/* Status indicators */}
              <div className="mt-6 p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-medium text-green-600 dark:text-green-400">
                    All systems operational
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

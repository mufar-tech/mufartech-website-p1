const stats = [
  { value: "10K+", label: "Active Users", description: "Growing daily" },
  { value: "99.9%", label: "Uptime", description: "Reliable platform" },
  { value: "50+", label: "Countries", description: "Global reach" },
  { value: "4.9/5", label: "Rating", description: "Customer satisfaction" },
]

export function TrustedSection() {
  return (
    <section className="py-16 lg:py-20 border-y border-border bg-muted/30">
      <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
            Trusted by businesses worldwide
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Numbers That Speak for Themselves
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors text-center"
            >
              <p className="text-3xl lg:text-4xl font-bold text-primary">{stat.value}</p>
              <p className="mt-2 font-medium text-foreground">{stat.label}</p>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

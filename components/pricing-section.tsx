export function PricingSection({ content }: { content: Record<string, string> }) {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-muted/30">
      <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {content.pricing_heading || "Simple, Transparent Pricing"}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {content.pricing_subheading || "Choose the plan that fits your business. No hidden fees, no surprises."}
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg">
            <span className="text-muted-foreground">Contact us for pricing:</span>
            <a href="mailto:sales@mufar.io" className="text-primary font-medium hover:underline">sales@mufar.io</a>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "Mufar has transformed how we manage our entire operation. The unified platform means we finally have all our data in one place.",
    author: "Sarah Chen",
    role: "CEO, TechStart Inc.",
    avatar: "SC",
    rating: 5,
  },
  {
    quote: "The payroll and billing modules alone saved us 20 hours a week. The integration between modules is seamless.",
    author: "Michael Rodriguez",
    role: "Operations Director, RetailMax",
    avatar: "MR",
    rating: 5,
  },
  {
    quote: "We evaluated 10+ solutions before choosing Mufar. The combination of features, pricing, and support made it an easy decision.",
    author: "Emily Watson",
    role: "CFO, ServicePro",
    avatar: "EW",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Loved by Businesses Worldwide
          </h2>
          <p className="text-lg text-muted-foreground">
            See what our customers have to say about their experience with Mufar Technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-medium text-sm">{testimonial.avatar}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

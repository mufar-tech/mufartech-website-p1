import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Now launching AI-powered features
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight text-balance">
              One Platform for{" "}
              <span className="text-primary">All Your Business</span>{" "}
              Operations
            </h1>
            
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Mufar Technologies brings together Forms, Inventory, Payroll, Billing, 
              Tasks, CRM, and more in a unified ecosystem. Streamline your workflow, 
              boost productivity, and scale with confidence.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2">
                Get Started Free
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Play className="h-4 w-4" />
                Book Demo
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Free 14-day trial
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                No credit card required
              </div>
            </div>
          </div>

          {/* Right - Dashboard mockup */}
          <div className="relative">
            <div className="relative rounded-xl bg-card border border-border shadow-2xl overflow-hidden">
              {/* Browser header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-background rounded-md px-3 py-1 text-xs text-muted-foreground">
                    app.mufar.io/dashboard
                  </div>
                </div>
              </div>
              
              {/* Dashboard content */}
              <div className="p-6 bg-background">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-semibold text-foreground">Welcome back, Alex</h3>
                    <p className="text-sm text-muted-foreground">{"Here's"} what&apos;s happening today</p>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-medium text-sm">A</span>
                  </div>
                </div>

                {/* Stats cards */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <p className="text-xs text-muted-foreground">Revenue</p>
                    <p className="text-lg font-semibold text-foreground">$24,580</p>
                    <span className="text-xs text-green-500">+12.5%</span>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <p className="text-xs text-muted-foreground">Orders</p>
                    <p className="text-lg font-semibold text-foreground">1,428</p>
                    <span className="text-xs text-green-500">+8.2%</span>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <p className="text-xs text-muted-foreground">Tasks</p>
                    <p className="text-lg font-semibold text-foreground">89</p>
                    <span className="text-xs text-primary">12 pending</span>
                  </div>
                </div>

                {/* Chart placeholder */}
                <div className="h-32 bg-muted/30 rounded-lg border border-border flex items-end justify-center gap-2 p-4">
                  {[40, 65, 45, 80, 55, 70, 90, 60].map((height, i) => (
                    <div
                      key={i}
                      className="w-8 bg-primary/80 rounded-t"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 p-3 rounded-lg bg-card border border-border shadow-lg hidden lg:block">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-medium text-foreground">Invoice Paid</p>
                  <p className="text-xs text-muted-foreground">$2,450.00</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 p-3 rounded-lg bg-card border border-border shadow-lg hidden lg:block">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-medium text-foreground">New Task</p>
                  <p className="text-xs text-muted-foreground">Added to queue</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

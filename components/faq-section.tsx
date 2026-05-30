"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How does the free trial work?",
    answer: "Start your 14-day free trial with full access to all features. No credit card required. At the end of your trial, choose a plan that fits your needs or continue with limited free access.",
  },
  {
    question: "Can I switch plans later?",
    answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle, and we'll prorate any differences.",
  },
  {
    question: "Is my data secure?",
    answer: "Security is our top priority. We use industry-standard encryption (TLS 1.3 in transit, AES-256 at rest), regular security audits, and are SOC 2 Type II compliant. Your data is backed up continuously with point-in-time recovery.",
  },
  {
    question: "Do you offer custom integrations?",
    answer: "Yes! Our Professional and Enterprise plans include API access for custom integrations. For complex requirements, our Enterprise plan includes dedicated integration support and custom development options.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "All plans include email support. Professional plans get priority support with faster response times. Enterprise customers receive dedicated account management and 24/7 phone support.",
  },
  {
    question: "Can I import data from other tools?",
    answer: "Yes, we provide import tools for common formats (CSV, Excel) and direct integrations with popular tools. Our support team can assist with complex migrations for Enterprise customers.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about Mufar Technologies.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-border bg-card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span className="font-medium text-foreground pr-4">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-200 ${
                  openIndex === index ? "pb-4" : "max-h-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

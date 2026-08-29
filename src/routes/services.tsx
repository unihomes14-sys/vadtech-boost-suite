import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/site/CTASection";
import { AI_CAPABILITIES, PRICING, SERVICES, SITE } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Websites, AI Automation & Chatbots | VadTech Studio" },
      {
        name: "description",
        content:
          "Business websites, AI automation, chatbots, booking systems, WhatsApp automation, e-commerce and maintenance from VadTech Studio.",
      },
      { property: "og:title", content: "Services — VadTech Studio" },
      {
        property: "og:description",
        content: "Websites, AI automation, chatbots, booking and WhatsApp systems for modern businesses.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">Services</span>
        <h1 className="mt-3 font-display text-3xl font-semibold sm:text-5xl">
          Digital systems built around your business
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          From your website to the automations behind it — everything designed to bring in more customers and give you
          back time.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:pb-24">
        <div className="grid gap-6 lg:grid-cols-2">
          {SERVICES.map((service) => (
            <article key={service.title} className="surface-card flex flex-col p-7">
              <span className="text-3xl" aria-hidden="true">
                {service.icon}
              </span>
              <h2 className="mt-4 font-display text-xl font-semibold">{service.title}</h2>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{service.long}</p>
              <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                <Button asChild>
                  <Link to="/contact">Get a Free Quote</Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer">
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface" aria-labelledby="ai-services">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">AI &amp; Automation</span>
          <h2 id="ai-services" className="mt-3 font-display text-2xl font-semibold sm:text-4xl">
            Where AI makes the biggest difference
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {AI_CAPABILITIES.map((cap) => (
              <article key={cap.title} className="surface-card p-6">
                <h3 className="font-display text-base font-semibold">{cap.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{cap.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24" aria-labelledby="pricing-services">
        <h2 id="pricing-services" className="font-display text-2xl font-semibold sm:text-4xl">
          Pricing approach
        </h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {PRICING.map((tier) => (
            <article key={tier.name} className="surface-card p-6">
              <h3 className="font-display text-base font-semibold">{tier.name}</h3>
              <p className="mt-2 font-display text-xl text-primary">{tier.price}</p>
              <p className="mt-3 text-sm text-muted-foreground">{tier.body}</p>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}

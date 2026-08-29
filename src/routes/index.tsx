import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Bot, Clock, Gauge, ShieldCheck, Sparkles, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CTASection } from "@/components/site/CTASection";
import { LeadForm } from "@/components/site/LeadForm";
import { AI_CAPABILITIES, FAQS, PRICING, PROCESS, SERVICES, SITE, TECHNOLOGIES } from "@/lib/site";
import { PROJECTS } from "@/lib/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VadTech Studio — Websites, AI & Automation for Businesses" },
      {
        name: "description",
        content:
          "We build digital systems that help businesses grow: websites, AI automation, chatbots, booking and WhatsApp automation. Book a free consultation.",
      },
      { property: "og:title", content: "VadTech Studio — Websites, AI & Automation for Businesses" },
      {
        property: "og:description",
        content:
          "Websites, AI automation, chatbots and booking systems that attract customers and remove repetitive work.",
      },
    ],
  }),
  component: Home,
});

const WHY = [
  { icon: BadgeCheck, title: "Professional delivery", body: "Clear scope, clear timelines and a build process you can follow from start to launch." },
  { icon: Gauge, title: "Results-focused", body: "Every page and workflow is designed around enquiries, bookings and saved hours." },
  { icon: Bot, title: "AI + web expertise", body: "We combine modern web engineering with practical AI and automation, not hype." },
  { icon: ShieldCheck, title: "Reliable support", body: "Fast response times and ongoing care so your systems keep running smoothly." },
];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1080}
          className="absolute inset-0 size-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-32">
          <div className="reveal max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground">
              <Sparkles className="size-3.5 text-primary" aria-hidden="true" />
              {SITE.tagline}
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-tight sm:text-6xl">
              We Build <span className="text-gradient">Digital Systems</span> That Help Businesses Grow.
            </h1>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
              We help businesses attract customers, automate repetitive tasks and build a stronger digital presence
              through modern technology.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Get Started <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer">
                  Book a Free Consultation
                </a>
              </Button>
            </div>
            <dl className="mt-12 grid max-w-xl grid-cols-2 gap-6 sm:grid-cols-3">
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">Demo projects</dt>
                <dd className="font-display text-2xl font-semibold">{PROJECTS.length}+</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">Industries served</dt>
                <dd className="font-display text-2xl font-semibold">4+</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">Response time</dt>
                <dd className="font-display text-2xl font-semibold">Under 24h</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24" aria-labelledby="services-heading">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 id="services-heading" className="font-display text-2xl font-semibold sm:text-4xl">
              What we build
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Websites and automation systems designed around how your business actually works.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/services">View all services</Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.slice(0, 8).map((service) => (
            <article key={service.title} className="surface-card p-6">
              <span className="text-2xl" aria-hidden="true">
                {service.icon}
              </span>
              <h3 className="mt-4 font-display text-base font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{service.short}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface" aria-labelledby="why-heading">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <h2 id="why-heading" className="font-display text-2xl font-semibold sm:text-4xl">
            Why businesses choose VadTech Studio
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map(({ icon: Icon, title, body }) => (
              <article key={title} className="surface-card p-6">
                <Icon className="size-6 text-primary" aria-hidden="true" />
                <h3 className="mt-4 font-display text-base font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24" aria-labelledby="process-heading">
        <h2 id="process-heading" className="font-display text-2xl font-semibold sm:text-4xl">
          How it works
        </h2>
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((item) => (
            <li key={item.step} className="surface-card p-6">
              <span className="font-display text-sm font-semibold text-primary">{item.step}</span>
              <h3 className="mt-3 font-display text-base font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-border bg-surface" aria-labelledby="ai-heading">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">AI &amp; Automation</span>
            <h2 id="ai-heading" className="mt-3 font-display text-2xl font-semibold sm:text-4xl">
              Not just a web agency — your AI &amp; automation partner
            </h2>
            <p className="mt-4 text-muted-foreground">
              We connect your website to systems that answer customers, capture leads and remove repetitive work.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {AI_CAPABILITIES.map((cap) => (
              <article key={cap.title} className="surface-card p-6">
                <h3 className="font-display text-base font-semibold">{cap.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{cap.body}</p>
              </article>
            ))}
            <article className="surface-card flex flex-col justify-center p-6">
              <p className="text-sm text-muted-foreground">
                Not sure which automation fits your business? We'll map it with you for free.
              </p>
              <Button className="mt-4" asChild>
                <Link to="/contact">Book a Free Consultation</Link>
              </Button>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24" aria-labelledby="portfolio-heading">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="portfolio-heading" className="font-display text-2xl font-semibold sm:text-4xl">
            Selected projects
          </h2>
          <Button variant="outline" asChild>
            <Link to="/portfolio">View all projects</Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <article key={project.slug} className="surface-card overflow-hidden">
              <img
                src={project.image}
                alt={`${project.title} website mockup`}
                loading="lazy"
                width={1024}
                height={768}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {project.category}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{project.built}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface" aria-labelledby="pricing-heading">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <h2 id="pricing-heading" className="font-display text-2xl font-semibold sm:text-4xl">
            Flexible pricing
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Every business is different, so we scope and quote after a short consultation.
          </p>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {PRICING.map((tier) => (
              <article key={tier.name} className="surface-card p-6">
                <h3 className="font-display text-base font-semibold">{tier.name}</h3>
                <p className="mt-2 font-display text-xl text-primary">{tier.price}</p>
                <p className="mt-3 text-sm text-muted-foreground">{tier.body}</p>
              </article>
            ))}
          </div>
          <Button className="mt-8" size="lg" asChild>
            <Link to="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24" aria-labelledby="trust-heading">
        <h2 id="trust-heading" className="font-display text-2xl font-semibold sm:text-4xl">
          Technologies &amp; tools we work with
        </h2>
        <ul className="mt-8 flex flex-wrap gap-3">
          {TECHNOLOGIES.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          <div className="surface-card p-6">
            <Clock className="size-5 text-primary" aria-hidden="true" />
            <h3 className="mt-3 font-display text-base font-semibold">Fast response</h3>
            <p className="mt-2 text-sm text-muted-foreground">We reply to new enquiries within 24 hours.</p>
          </div>
          <div className="surface-card p-6">
            <Star className="size-5 text-primary" aria-hidden="true" />
            <h3 className="mt-3 font-display text-base font-semibold">Real client feedback</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Verified clients can post their own testimonials on our site.
            </p>
            <Button variant="outline" size="sm" className="mt-4" asChild>
              <Link to="/testimonials">Read testimonials</Link>
            </Button>
          </div>
          <div className="surface-card p-6">
            <ShieldCheck className="size-5 text-primary" aria-hidden="true" />
            <h3 className="mt-3 font-display text-base font-semibold">Secure by default</h3>
            <p className="mt-2 text-sm text-muted-foreground">SSL-ready builds, safe forms and protected data.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:py-24">
          <h2 id="faq-heading" className="font-display text-2xl font-semibold sm:text-4xl">
            Frequently asked questions
          </h2>
          <Accordion type="single" collapsible className="mt-8">
            {FAQS.map((faq) => (
              <AccordionItem key={faq.q} value={faq.q}>
                <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:py-24" aria-labelledby="lead-heading">
        <h2 id="lead-heading" className="sr-only">
          Consultation request
        </h2>
        <LeadForm />
      </section>

      <CTASection />
    </>
  );
}

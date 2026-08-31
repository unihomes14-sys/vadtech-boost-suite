import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LeadForm } from "@/components/site/LeadForm";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact VadTech Studio — Free Business Consultation" },
      {
        name: "description",
        content:
          "Talk to VadTech Studio about websites, AI automation, chatbots and booking systems. Email vadstudio30@gmail.com or chat with us on WhatsApp.",
      },
      { property: "og:title", content: "Contact VadTech Studio — Free Business Consultation" },
      {
        property: "og:description",
        content: "Tell us what your business needs and we'll map the right website or automation with you.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <h1 className="font-display text-3xl font-semibold sm:text-5xl">
            Let's talk about your <span className="text-gradient">business goals</span>
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Tell us what you need and we'll come back within 24 hours with clear next steps — no obligation.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" aria-hidden="true" /> Chat with us on WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={`mailto:${SITE.email}`}>
                <Mail className="size-4" aria-hidden="true" /> {SITE.email}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-5">
            <article className="surface-card p-6">
              <MessageCircle className="size-5 text-primary" aria-hidden="true" />
              <h2 className="mt-3 font-display text-base font-semibold">WhatsApp</h2>
              <p className="mt-2 text-sm text-muted-foreground">{SITE.whatsappNumber}</p>
              <p className="mt-1 text-sm text-muted-foreground">Fastest way to reach us.</p>
            </article>
            <article className="surface-card p-6">
              <Mail className="size-5 text-primary" aria-hidden="true" />
              <h2 className="mt-3 font-display text-base font-semibold">Email</h2>
              <a className="mt-2 block text-sm text-muted-foreground hover:text-foreground" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </article>
            <article className="surface-card p-6">
              <Clock className="size-5 text-primary" aria-hidden="true" />
              <h2 className="mt-3 font-display text-base font-semibold">Response time</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                We reply to every enquiry within 24 hours, Monday to Saturday.
              </p>
            </article>
          </div>

          <LeadForm />
        </div>
      </section>
    </>
  );
}

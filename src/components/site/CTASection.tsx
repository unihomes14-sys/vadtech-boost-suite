import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export function CTASection({
  title = "Ready to grow your business with modern technology?",
  body = "Let's look at where a website, AI or automation would make the biggest difference for you.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
      <div className="surface-card relative overflow-hidden p-8 text-center sm:p-14">
        <div className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-48 w-2/3 rounded-full bg-gradient-primary opacity-20 blur-3xl" />
        <h2 className="relative font-display text-2xl font-semibold sm:text-4xl">{title}</h2>
        <p className="relative mx-auto mt-4 max-w-2xl text-muted-foreground">{body}</p>
        <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button size="lg" asChild>
            <Link to="/contact">Get Your Free Business Consultation</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer">
              Chat with us on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

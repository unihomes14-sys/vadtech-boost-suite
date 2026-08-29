import { createFileRoute } from "@tanstack/react-router";
import { CTASection } from "@/components/site/CTASection";
import { PROCESS, TECHNOLOGIES } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About VadTech Studio — Technology Studio for Modern Businesses" },
      {
        name: "description",
        content:
          "VadTech Studio is a professional technology studio building websites, AI automation and digital systems that deliver measurable business results.",
      },
      { property: "og:title", content: "About VadTech Studio" },
      {
        property: "og:description",
        content: "A professional technology studio focused on results, modern web engineering and practical AI.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-4 py-16 sm:py-24">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">About us</span>
        <h1 className="mt-3 font-display text-3xl font-semibold sm:text-5xl">
          A technology studio built for modern businesses
        </h1>
        <p className="mt-6 text-muted-foreground">
          VadTech Studio is a professional technology studio that designs and builds websites, AI automation and
          digital systems for growing businesses. We work with service businesses, local brands and online companies
          that want a stronger digital presence without managing a full in-house tech team.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <article className="surface-card p-6">
            <h2 className="font-display text-lg font-semibold">What we do</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              We build business websites and e-commerce stores, then connect them to AI chatbots, booking systems,
              WhatsApp automation and workflow tools so enquiries are answered and captured automatically.
            </p>
          </article>
          <article className="surface-card p-6">
            <h2 className="font-display text-lg font-semibold">Our mission</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              To make modern technology practical and accessible for everyday businesses — helping them attract more
              customers, automate repetitive tasks and operate with confidence online.
            </p>
          </article>
          <article className="surface-card p-6">
            <h2 className="font-display text-lg font-semibold">How we work</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Clear communication, defined scope and honest timelines. You always know what is being built, why it
              matters and when it will be ready.
            </p>
          </article>
          <article className="surface-card p-6">
            <h2 className="font-display text-lg font-semibold">Why businesses choose us</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              We combine web engineering with real automation expertise, focus on measurable outcomes and stay
              available after launch with fast, reliable support.
            </p>
          </article>
        </div>

        <h2 className="mt-16 font-display text-2xl font-semibold">Our process</h2>
        <ol className="mt-6 space-y-4">
          {PROCESS.map((item) => (
            <li key={item.step} className="surface-card flex gap-4 p-5">
              <span className="font-display text-sm font-semibold text-primary">{item.step}</span>
              <div>
                <h3 className="font-display text-base font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <h2 className="mt-16 font-display text-2xl font-semibold">Technologies we work with</h2>
        <ul className="mt-6 flex flex-wrap gap-3">
          {TECHNOLOGIES.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>
      </section>

      <CTASection />
    </>
  );
}

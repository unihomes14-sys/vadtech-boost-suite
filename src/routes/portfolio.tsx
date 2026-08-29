import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/site/CTASection";
import { PROJECTS, PROJECT_CATEGORIES } from "@/lib/projects";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Websites & Automation Projects | VadTech Studio" },
      {
        name: "description",
        content:
          "Explore VadTech Studio demo projects for barber, restaurant, real estate and automotive businesses, including booking and AI automation features.",
      },
      { property: "og:title", content: "Portfolio — VadTech Studio" },
      {
        property: "og:description",
        content: "Website, booking and automation projects across barber, restaurant, real estate and automotive.",
      },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">Portfolio</span>
        <h1 className="mt-3 font-display text-3xl font-semibold sm:text-5xl">Projects &amp; demo builds</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Examples of the websites and automation systems we build for service businesses.
        </p>

        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
          {PROJECT_CATEGORIES.map((category) => (
            <Button
              key={category}
              size="sm"
              variant={active === category ? "default" : "outline"}
              aria-pressed={active === category}
              onClick={() => setActive(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {visible.map((project) => (
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
                <h2 className="mt-2 font-display text-lg font-semibold">{project.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{project.built}</p>
                <ul className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span aria-hidden="true" className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="mt-6" variant="outline" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTASection title="Want a system like these for your business?" />
    </>
  );
}

import { Link } from "@tanstack/react-router";
import { Mail, MessageCircle } from "lucide-react";
import logo from "@/assets/vadtech-logo.jpg.asset.json";
import { NAV, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <img
              src={logo.url}
              alt="VadTech Studio logo"
              width={40}
              height={40}
              loading="lazy"
              className="size-10 rounded-lg object-cover"
            />
            <span className="font-display text-base font-semibold">VadTech Studio</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            {SITE.tagline}. We help businesses attract customers, automate repetitive tasks and build a stronger
            digital presence.
          </p>
          <div className="mt-5 flex flex-col gap-2 text-sm">
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="size-4" aria-hidden="true" /> {SITE.email}
            </a>
            <a
              href={SITE.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <MessageCircle className="size-4" aria-hidden="true" /> WhatsApp {SITE.whatsappNumber}
            </a>
          </div>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="text-sm font-semibold">Navigate</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-muted-foreground transition-colors hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold">Follow</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {SITE.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="text-muted-foreground transition-colors hover:text-primary">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} VadTech Studio. All rights reserved.</p>
          <p>Websites, AI &amp; Automation for modern businesses.</p>
        </div>
      </div>
    </footer>
  );
}

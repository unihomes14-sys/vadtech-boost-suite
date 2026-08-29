import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { SERVICE_OPTIONS } from "@/lib/site";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  business_name: z.string().trim().max(120).optional(),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z.string().trim().max(40).optional(),
  services: z.array(z.string()).min(1, "Select at least one option"),
  message: z.string().trim().max(1500).optional(),
});

export function LeadForm({ compact = false }: { compact?: boolean }) {
  const [services, setServices] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fd = new FormData(form);

    const parsed = schema.safeParse({
      name: String(fd.get("name") ?? ""),
      business_name: String(fd.get("business_name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      services,
      message: String(fd.get("message") ?? ""),
    });

    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.from("leads").insert({
      name: parsed.data.name,
      business_name: parsed.data.business_name || null,
      email: parsed.data.email,
      phone: parsed.data.phone || null,
      services: parsed.data.services,
      message: parsed.data.message || null,
    });
    setSubmitting(false);

    if (error) {
      toast.error("Something went wrong. Please email us instead.");
      return;
    }

    toast.success("Thank you — we'll be in touch shortly.");
    form.reset();
    setServices([]);
  }

  return (
    <form onSubmit={onSubmit} className="surface-card p-6 sm:p-8">
      <h3 className="font-display text-xl font-semibold">Get your free business consultation</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Tell us what your business needs and we'll reply with clear next steps.
      </p>

      <div className={`mt-6 grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <div className="space-y-2">
          <Label htmlFor="lf-name">Name</Label>
          <Input id="lf-name" name="name" required maxLength={100} autoComplete="name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lf-business">Business name</Label>
          <Input id="lf-business" name="business_name" maxLength={120} autoComplete="organization" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lf-email">Email</Label>
          <Input id="lf-email" name="email" type="email" required maxLength={255} autoComplete="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lf-phone">WhatsApp / Phone</Label>
          <Input id="lf-phone" name="phone" type="tel" maxLength={40} autoComplete="tel" />
        </div>
      </div>

      <fieldset className="mt-6">
        <legend className="text-sm font-medium">What does your business need?</legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {SERVICE_OPTIONS.map((option) => (
            <div key={option} className="flex items-center gap-3">
              <Checkbox
                id={`svc-${option}`}
                checked={services.includes(option)}
                onCheckedChange={(checked) =>
                  setServices((prev) => (checked ? [...prev, option] : prev.filter((s) => s !== option)))
                }
              />
              <Label htmlFor={`svc-${option}`} className="text-sm font-normal text-muted-foreground">
                {option}
              </Label>
            </div>
          ))}
        </div>
      </fieldset>

      <div className="mt-6 space-y-2">
        <Label htmlFor="lf-message">Message</Label>
        <Textarea id="lf-message" name="message" rows={4} maxLength={1500} placeholder="Tell us about your business and goals" />
      </div>

      <Button type="submit" className="mt-6 w-full" size="lg" disabled={submitting}>
        {submitting ? "Sending…" : "Get Your Free Business Consultation"}
      </Button>
    </form>
  );
}

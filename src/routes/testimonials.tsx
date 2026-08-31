import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Star, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Client Testimonials — VadTech Studio" },
      {
        name: "description",
        content:
          "Read verified feedback from VadTech Studio clients, or sign in to share your own testimonial about our websites and AI automation work.",
      },
      { property: "og:title", content: "Client Testimonials — VadTech Studio" },
      {
        property: "og:description",
        content: "Verified client feedback on VadTech Studio websites, chatbots and automation systems.",
      },
    ],
  }),
  component: TestimonialsPage,
});

const schema = z.object({
  author_name: z.string().trim().min(2, "Please enter your name").max(80),
  business_name: z.string().trim().max(120).optional(),
  rating: z.number().min(1).max(5),
  message: z.string().trim().min(10, "Tell us a little more").max(1000),
});

function Stars({ value }: { value: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${value} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          className={n <= value ? "size-4 fill-primary text-primary" : "size-4 text-muted-foreground"}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function TestimonialsPage() {
  const { user, loading } = useAuth();
  const queryClient = useQueryClient();
  const [rating, setRating] = useState(5);

  const { data: testimonials = [], isLoading } = useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("testimonials")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const create = useMutation({
    mutationFn: async (values: z.infer<typeof schema>) => {
      if (!user) throw new Error("You must be signed in");
      const { error } = await supabase.from("testimonials").insert({
        ...values,
        business_name: values.business_name || null,
        user_id: user.id,
      });
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success("Thank you for your testimonial!");
      void queryClient.invalidateQueries({ queryKey: ["testimonials"] });
    },
    onError: (error) => toast.error(error instanceof Error ? error.message : "Could not save testimonial"),
  });

  const remove = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("testimonials").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success("Testimonial removed");
      void queryClient.invalidateQueries({ queryKey: ["testimonials"] });
    },
    onError: (error) => toast.error(error instanceof Error ? error.message : "Could not delete"),
  });

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fd = new FormData(form);
    const parsed = schema.safeParse({
      author_name: String(fd.get("author_name") ?? ""),
      business_name: String(fd.get("business_name") ?? ""),
      rating,
      message: String(fd.get("message") ?? ""),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    create.mutate(parsed.data, { onSuccess: () => form.reset() });
  }

  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <h1 className="font-display text-3xl font-semibold sm:text-5xl">
            Client <span className="text-gradient">testimonials</span>
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Real feedback from businesses we work with. Signed-in clients can post and manage their own testimonial.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        {isLoading ? (
          <p className="text-sm text-muted-foreground">Loading testimonials…</p>
        ) : testimonials.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            No testimonials yet. If we've worked together, you'll be the first.
          </p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <article key={t.id} className="surface-card flex flex-col p-6">
                <Stars value={t.rating} />
                <p className="mt-4 flex-1 text-sm text-muted-foreground">"{t.message}"</p>
                <div className="mt-5 flex items-end justify-between gap-3">
                  <div>
                    <p className="font-display text-sm font-semibold">{t.author_name}</p>
                    {t.business_name && <p className="text-xs text-muted-foreground">{t.business_name}</p>}
                  </div>
                  {user?.id === t.user_id && (
                    <Button
                      variant="ghost"
                      size="sm"
                      aria-label="Delete your testimonial"
                      onClick={() => remove.mutate(t.id)}
                    >
                      <Trash2 className="size-4" aria-hidden="true" />
                    </Button>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:py-24">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">Share your experience</h2>
          {loading ? null : user ? (
            <form onSubmit={onSubmit} className="surface-card mt-8 space-y-4 p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="author_name">Your name</Label>
                  <Input id="author_name" name="author_name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="business_name">Business name</Label>
                  <Input id="business_name" name="business_name" />
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-sm font-medium">Rating</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      type="button"
                      aria-label={`Rate ${n} out of 5`}
                      onClick={() => setRating(n)}
                      className="rounded p-1"
                    >
                      <Star
                        className={n <= rating ? "size-6 fill-primary text-primary" : "size-6 text-muted-foreground"}
                        aria-hidden="true"
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Your testimonial</Label>
                <Textarea id="message" name="message" rows={5} required />
              </div>
              <Button type="submit" disabled={create.isPending}>
                {create.isPending ? "Posting…" : "Post testimonial"}
              </Button>
            </form>
          ) : (
            <div className="surface-card mt-8 p-6">
              <p className="text-sm text-muted-foreground">
                Please sign in to leave a testimonial. Accounts keep feedback verified and let you edit or remove it
                later.
              </p>
              <Button className="mt-4" asChild>
                <Link to="/auth">Sign in to leave feedback</Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}

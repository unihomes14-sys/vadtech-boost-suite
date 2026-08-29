import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const KEY = "vadtech-cookie-consent";

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.localStorage.getItem(KEY)) setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie notice"
      className="fixed bottom-0 left-0 z-40 w-full border-t border-border bg-popover/95 px-4 py-3 backdrop-blur sm:bottom-4 sm:left-4 sm:w-auto sm:max-w-sm sm:rounded-xl sm:border"
    >
      <p className="text-sm text-muted-foreground">
        We use essential cookies and basic analytics to understand how our site is used. By continuing you agree to
        this.
      </p>
      <div className="mt-3 flex gap-2">
        <Button
          size="sm"
          onClick={() => {
            window.localStorage.setItem(KEY, "accepted");
            setVisible(false);
          }}
        >
          Accept
        </Button>
        <Button
          size="sm"
          variant="ghost"
          onClick={() => {
            window.localStorage.setItem(KEY, "dismissed");
            setVisible(false);
          }}
        >
          Dismiss
        </Button>
      </div>
    </div>
  );
}

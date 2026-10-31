"use client";

import { useSitePreferences } from "@/components/site-preferences";
import { Wordmark } from "./ui";

export function PortfolioFooter() {
  const { language, t } = useSitePreferences();

  return (
    <footer className="site-footer section-shell">
      <Wordmark
        homeLabel={
          language === "es" ? "William Cely, inicio" : "William Cely, home"
        }
      />
      <span>{t.footer}</span>
      <a href="#inicio">{t.backToTop}</a>
    </footer>
  );
}

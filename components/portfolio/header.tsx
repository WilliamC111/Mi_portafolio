"use client";

"use client";

import { profile } from "@/lib/content";
import { useSitePreferences } from "@/components/site-preferences";
import { ArrowIcon, mailComposerUrl, Wordmark } from "./ui";

export function PortfolioHeader() {
  const { language, theme, t, toggleLanguage, toggleTheme } =
    useSitePreferences();
  const homeLabel =
    language === "es" ? "William Cely, inicio" : "William Cely, home";

  return (
    <>
      <a className="skip-link" href="#contenido">
        {t.skip}
      </a>
      <header className="site-header">
        <Wordmark homeLabel={homeLabel} />
        <nav className="main-nav" aria-label={t.navLabel}>
          <a href="#proyectos">{t.projects}</a>
          <a href="#trayectoria">{t.experience}</a>
          <a href="#sobre-mi">{t.about}</a>
        </nav>
        <div className="header-actions">
          <button
            className="preference-button language-button"
            type="button"
            onClick={toggleLanguage}
            aria-label={t.switchLanguage}
            aria-pressed={language === "en"}
            title={t.switchLanguage}
          >
            {language === "es" ? "EN" : "ES"}
          </button>
          <button
            className="preference-button theme-button"
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "light" ? t.switchTheme : t.switchThemeLight}
            aria-pressed={theme === "dark"}
            title={theme === "light" ? t.switchTheme : t.switchThemeLight}
          >
            {theme === "light" ? (
              <svg aria-hidden="true" viewBox="0 0 20 20">
                <path d="M17.2 12.5A7.4 7.4 0 0 1 7.5 2.8 7.5 7.5 0 1 0 17.2 12.5Z" />
              </svg>
            ) : (
              <svg aria-hidden="true" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="3.3" />
                <path d="M10 1.8v2M10 16.2v2M18.2 10h-2M3.8 10h-2m14-5.8-1.4 1.4M5.6 14.4l-1.4 1.4m11.6 0-1.4-1.4M5.6 5.6 4.2 4.2" />
              </svg>
            )}
          </button>
        </div>
        <a
          className="header-contact"
          href={mailComposerUrl(profile.email, language)}
          target="_blank"
          rel="noreferrer"
        >
          {t.contact} <ArrowIcon diagonal />
        </a>
      </header>
    </>
  );
}

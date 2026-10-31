"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { copy, type Copy, type Language, type Theme } from "@/lib/i18n";

type Preferences = {
  language: Language;
  theme: Theme;
  t: Copy;
  toggleLanguage: () => void;
  toggleTheme: () => void;
};

const PreferencesContext = createContext<Preferences | null>(null);

export function SitePreferencesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguage] = useState<Language>("es");
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("portfolio-language");
    const savedTheme = window.localStorage.getItem("portfolio-theme");

    if (savedLanguage === "es" || savedLanguage === "en") {
      setLanguage(savedLanguage);
    }
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-language", language);
    window.localStorage.setItem("portfolio-theme", theme);
  }, [language, theme]);

  const value = useMemo<Preferences>(
    () => ({
      language,
      theme,
      t: copy[language],
      toggleLanguage: () =>
        setLanguage((current) => (current === "es" ? "en" : "es")),
      toggleTheme: () =>
        setTheme((current) => (current === "light" ? "dark" : "light")),
    }),
    [language, theme],
  );

  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  );
}

export function useSitePreferences() {
  const preferences = useContext(PreferencesContext);

  if (!preferences) {
    throw new Error(
      "useSitePreferences must be used within SitePreferencesProvider.",
    );
  }

  return preferences;
}

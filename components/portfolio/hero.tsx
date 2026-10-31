"use client";

import { useSitePreferences } from "@/components/site-preferences";
import { Reveal } from "@/components/reveal";
import { ArrowIcon, mailComposerUrl } from "./ui";
import { profile } from "@/lib/content";

export function HeroSection() {
  const { t, language } = useSitePreferences();

  return (
    <section className="hero section-shell" id="inicio">
      <div className="hero-grid">
        <div className="hero-copy">
          <Reveal>
            <p className="eyebrow">
              <span className="status-dot" />
              {t.role}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1>
              <span className="sr-only">
                {t.heroLineOne} {t.heroLineTwo} {t.heroAccent} {t.heroIntro}
              </span>
              <span aria-hidden="true">
                {language === "es" ? "Integro análisis" : "I bring together"}
                <br />
                {language === "es"
                  ? "de datos, desarrollo"
                  : "data analytics,"}
                <br />
                {language === "es"
                  ? "de software"
                  : "software development,"}
                <br />
                <span className="hero-accent">{t.heroAccent}</span>
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="hero-intro">{t.heroIntro}</p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="hero-actions">
              <a className="button button-dark" href="#proyectos">
                {t.explore} <ArrowIcon />
              </a>
              <a
                className="text-link"
                href={mailComposerUrl(profile.email, language)}
                target="_blank"
                rel="noreferrer"
              >
                {t.reachOut} <ArrowIcon diagonal />
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal className="hero-art-wrap" delay={0.14}>
          <div className="hero-art">
            <div className="hero-art-top">
              <span>{t.portfolio}</span>
              <span>01 — 06</span>
            </div>
            <div className="hero-orbit-frame orbit-frame-large">
              <div className="hero-orbit orbit-large" />
            </div>
            <div className="hero-orbit-frame orbit-frame-small">
              <div className="hero-orbit orbit-small" />
            </div>
            <div className="hero-core">
              <span>W</span>
              <span className="core-dot">.</span>
            </div>
            <span className="hero-coordinate coordinate-one">4°42&apos;N</span>
            <span className="hero-coordinate coordinate-two">74°04&apos;W</span>
            <span className="hero-art-note">{t.purpose}</span>
            <span className="hero-art-number">W — 26</span>
          </div>
        </Reveal>
      </div>
      <div className="hero-bottom">
        <span>{t.scroll}</span>
        <a href="#analitica" aria-label={t.analyticsEyebrow}>
          ↓
        </a>
        <span className="hero-bottom-right">DATA · SOFTWARE · IT</span>
      </div>
    </section>
  );
}

"use client";

import { certifications, skills } from "@/lib/content";
import { useSitePreferences } from "@/components/site-preferences";
import { Reveal } from "@/components/reveal";

export function AboutSection() {
  const { language, t } = useSitePreferences();

  return (
    <section className="about-section section-shell" id="sobre-mi">
      <Reveal className="about-intro">
        <p className="eyebrow">{t.aboutEyebrow}</p>
        <h2>
          {t.aboutTitle}
          <br />
          <span className="serif-word">{t.aboutAccent}</span>
        </h2>
        <p className="about-description">{t.aboutDescription}</p>
      </Reveal>
      <div className="about-details">
        <Reveal className="education-card">
          <p className="eyebrow">{t.education}</p>
          <h3>{t.degree}</h3>
          <p>{t.university}</p>
          <span>Tunja, Colombia · 2025</span>
        </Reveal>
        <Reveal className="languages-card" delay={0.08}>
          <p className="eyebrow">{t.languages}</p>
          <div className="language-row">
            <span>{t.spanish}</span>
            <span>{t.native}</span>
          </div>
          <div className="language-row">
            <span>{t.english}</span>
            <span>{t.levelB2}</span>
          </div>
          <div className="language-row">
            <span>{t.portuguese}</span>
            <span>{t.levelA2}</span>
          </div>
        </Reveal>
      </div>
      <div className="skills-grid">
        {skills.map((group, index) => (
          <Reveal
            className="skill-group"
            delay={index * 0.08}
            key={group.title.es}
          >
            <p className="eyebrow">{group.title[language]}</p>
            <div className="skill-items">
              {group.items.map((skill) => (
                <span key={skill}>
                  {skill === "Agile"
                    ? language === "es"
                      ? "Metodologías ágiles"
                      : "Agile methods"
                    : skill === "Git"
                      ? "Git & GitHub"
                      : skill}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="certifications">
        <p className="eyebrow">{t.certifications}</p>
        <div className="certifications-grid">
          {certifications.map((certification) => (
            <div
              className="certification-item"
              key={certification.name[language]}
            >
              <span>{certification.name[language]}</span>
              <span>
                {certification.issuer} · {certification.year}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

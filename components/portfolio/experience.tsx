"use client";

import { experience } from "@/lib/content";
import { useSitePreferences } from "@/components/site-preferences";
import { Reveal } from "@/components/reveal";

export function ExperienceSection() {
  const { language, t } = useSitePreferences();

  return (
    <section className="experience-section" id="trayectoria">
      <div className="section-shell experience-inner">
        <Reveal className="section-heading experience-heading">
          <div>
            <p className="eyebrow">{t.experience}</p>
            <h2>
              {t.experienceHeading}
              <br />
              <span className="serif-word">{t.experienceAccent}</span>
            </h2>
          </div>
          <p className="section-aside">{t.experienceIntro}</p>
        </Reveal>
        <div className="timeline">
          {experience.map((item, index) => (
            <Reveal
              className="timeline-item"
              delay={index * 0.1}
              key={item.company}
            >
              <span className="timeline-date">{item.date[language]}</span>
              <div className="timeline-content">
                <div className="timeline-title">
                  <div>
                    <h3>{item.company}</h3>
                    <p>{item.role[language]}</p>
                  </div>
                  <span className="timeline-index">0{index + 1}</span>
                </div>
                <ul>
                  {item.details[language].map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

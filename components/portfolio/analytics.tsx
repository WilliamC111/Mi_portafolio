"use client";

import { useSitePreferences } from "@/components/site-preferences";
import { Reveal } from "@/components/reveal";

export function AnalyticsSection() {
  const { t } = useSitePreferences();

  return (
    <section className="analytics-section section-shell" id="analitica">
      <Reveal className="analytics-heading">
        <div>
          <p className="eyebrow">{t.analyticsEyebrow}</p>
          <h2>
            {t.analyticsTitle}
            <br />
            <span className="serif-word">{t.analyticsAccent}</span>
          </h2>
        </div>
        <p className="section-aside">{t.analyticsIntro}</p>
      </Reveal>
      <div className="analytics-grid">
        <Reveal className="analytics-item">
          <span className="analytics-index">01 / PYTHON</span>
          <h3>{t.pythonTitle}</h3>
          <p>{t.pythonDescription}</p>
        </Reveal>
        <Reveal className="analytics-item" delay={0.08}>
          <span className="analytics-index">02 / SQL</span>
          <h3>{t.sqlTitle}</h3>
          <p>{t.sqlDescription}</p>
        </Reveal>
        <Reveal className="analytics-item" delay={0.16}>
          <span className="analytics-index">03 / POWER BI</span>
          <h3>{t.powerBiTitle}</h3>
          <p>{t.powerBiDescription}</p>
        </Reveal>
      </div>
    </section>
  );
}

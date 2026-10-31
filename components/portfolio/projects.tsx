"use client";

import { profile, projects } from "@/lib/content";
import { useSitePreferences } from "@/components/site-preferences";
import { Reveal } from "@/components/reveal";
import { ArrowIcon, ProjectVisual } from "./ui";

export function ProjectsSection() {
  const { language, t } = useSitePreferences();

  return (
    <section className="projects-section section-shell" id="proyectos">
      <Reveal className="section-heading">
        <div>
          <p className="eyebrow">{t.selectedWork}</p>
          <h2>
            {t.projectTitle}
            <br />
            <span className="serif-word">{t.projectAccent}</span>
          </h2>
        </div>
        <p className="section-aside">{t.projectIntro}</p>
      </Reveal>

      <div className="project-grid">
        {projects.map((project, index) => (
          <Reveal
            className={`project-card project-card-${index + 1}`}
            delay={index % 2 === 0 ? 0 : 0.1}
            key={project.number}
          >
            <a
              className="project-link"
              href={project.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${t.visitProject}: ${project.name[language]}`}
            >
              <ProjectVisual
                visual={project.visual}
                label={project.visualLabel[language]}
                number={project.number}
                projectLabel={t.projectLabel}
              />
            </a>
            <div className="project-info">
              <div>
                <p className="project-category">
                  {project.category[language]}
                </p>
                <h3>{project.name[language]}</h3>
              </div>
              <a
                className="project-arrow"
                href={project.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${t.visitProject}: ${project.name[language]}`}
              >
                <ArrowIcon diagonal />
              </a>
            </div>
            <p className="project-description">
              {project.description[language]}
            </p>
            <div className="tag-list">
              {project.stack.map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
              <a
                className="repo-link"
                href={project.repo}
                target="_blank"
                rel="noreferrer"
              >
                {t.viewCode} <ArrowIcon diagonal />
              </a>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="github-callout">
        <span>{t.moreProjects}</span>
        <a href={profile.github} target="_blank" rel="noreferrer">
          {t.exploreGithub} <ArrowIcon diagonal />
        </a>
      </Reveal>
    </section>
  );
}

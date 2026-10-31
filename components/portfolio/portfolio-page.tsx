import { GsapEffects } from "@/components/gsap-effects";
import { AboutSection } from "./about";
import { AnalyticsSection } from "./analytics";
import { ExperienceSection } from "./experience";
import { PortfolioFooter } from "./footer";
import { PortfolioHeader } from "./header";
import { HeroSection } from "./hero";
import { ProjectsSection } from "./projects";

export function PortfolioPage() {
  return (
    <main id="contenido" tabIndex={-1}>
      <GsapEffects />
      <PortfolioHeader />
      <HeroSection />
      <AnalyticsSection />
      <ProjectsSection />
      <ExperienceSection />
      <AboutSection />
      <PortfolioFooter />
    </main>
  );
}

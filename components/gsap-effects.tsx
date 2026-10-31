"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function GsapEffects() {
  useEffect(() => {
    const context = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      const revealElements = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      gsap.set(revealElements, { autoAlpha: 0, y: 22 });

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .to(".hero-copy [data-reveal]", {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.14,
          clearProps: "transform",
        })
        .fromTo(
          ".hero-art-wrap",
          { autoAlpha: 0, x: 28, scale: 0.95 },
          {
            autoAlpha: 1,
            x: 0,
            scale: 1,
            duration: 1.1,
            clearProps: "transform",
          },
          "-=0.75",
        );

      const scrollElements = revealElements.filter(
        (element) =>
          !element.closest(".hero-copy") &&
          !element.classList.contains("hero-art-wrap"),
      );

      ScrollTrigger.batch(scrollElements, {
        start: "top 88%",
        once: true,
        onEnter: (elements) => {
          gsap.to(elements, {
            autoAlpha: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.1,
            ease: "power3.out",
            overwrite: "auto",
          });
        },
      });

      const projectVisuals = gsap.utils.toArray<HTMLElement>(
        "[data-project-visual]",
      );

      ScrollTrigger.batch(projectVisuals, {
        start: "top 86%",
        once: true,
        onEnter: (elements) => {
          gsap.fromTo(
            elements,
            { scale: 1.12, rotateX: 5, transformOrigin: "center bottom" },
            {
              scale: 1,
              rotateX: 0,
              duration: 1.15,
              stagger: 0.12,
              ease: "power3.out",
              overwrite: "auto",
            },
          );
        },
      });

      gsap.to(".orbit-frame-large", {
        rotate: 360,
        duration: 32,
        ease: "none",
        repeat: -1,
      });
      gsap.to(".orbit-frame-small", {
        rotate: -360,
        duration: 42,
        ease: "none",
        repeat: -1,
      });
      gsap.to(".hero-core", {
        scale: 1.045,
        duration: 2.4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    });

    return () => context.revert();
  }, []);

  return null;
}

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Seo from "../components/Seo";
import Hero from "../components/Hero";
import About from "../components/About";
import SkillsCloud from "../components/SkillsCloud";
import CaseStudyPreview from "../components/CaseStudyPreview";
import ProjectGrid from "../components/ProjectGrid";
import OpenSource from "../components/OpenSource";
import BlogPreview from "../components/BlogPreview";
import ExperienceTimeline from "../components/ExperienceTimeline";
import ContactCTA from "../components/ContactCTA";
import { profile } from "../data/profile";

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      return;
    }
    const node = document.querySelector(hash);
    node?.scrollIntoView({ behavior: "smooth" });
  }, [hash]);

  return (
    <>
      <Seo
        title={`${profile.name} — Full-Stack Developer Portfolio`}
        description={`${profile.name} is a full-stack developer portfolio: React, Spring Boot, and shipped product work.`}
        path="/"
      />
      <Hero />
      <About />
      <SkillsCloud />
      <CaseStudyPreview />
      <ProjectGrid />
      <OpenSource />
      <BlogPreview />
      <ExperienceTimeline />
      <ContactCTA />
    </>
  );
}

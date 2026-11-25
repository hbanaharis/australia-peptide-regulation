import { useEffect, useMemo, useState } from "react";
import { meta, sections } from "./data/briefing.js";
import { Header } from "./components/Header.jsx";
import { SectionNav } from "./components/SectionNav.jsx";
import { BriefingSection } from "./components/BriefingSection.jsx";
import { Footer } from "./components/Footer.jsx";

export function App() {
  const sectionIds = useMemo(() => sections.map((section) => section.id), []);
  const activeId = useActiveSection(sectionIds);

  return (
    <>
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <Header meta={meta} />
      <SectionNav sections={sections} activeId={activeId} />
      <main id="content">
        <div className="wrap">
          {sections.map((section) => (
            <BriefingSection key={section.id} section={section} />
          ))}
        </div>
      </main>
      <Footer meta={meta} />
    </>
  );
}

function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(ids[0] ?? "");

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (elements.length === 0) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) {
          setActiveId(visible.target.id);
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.05, 0.15, 0.4] },
    );

    for (const element of elements) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}

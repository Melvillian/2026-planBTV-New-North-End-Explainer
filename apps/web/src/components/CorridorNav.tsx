import { useEffect, useState } from 'react';

import { sections } from '../sections';

// Desktop: a vertical "North Avenue" spine with the page sections as stops.
// Mobile: a sticky horizontal chip bar.
export function CorridorNav() {
  const [activeId, setActiveId] = useState(sections[0].id);

  useEffect(() => {
    // The active stop is the last section whose top sits above the 40% line
    // of the viewport. An IntersectionObserver only triggers the recompute.
    const updateActive = () => {
      const threshold = window.innerHeight * 0.4;
      let current = sections[0].id;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && el.getBoundingClientRect().top <= threshold) {
          current = section.id;
        }
      }
      setActiveId(current);
    };
    const observer = new IntersectionObserver(updateActive, {
      threshold: [0, 0.25, 0.5, 0.75, 1],
    });
    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el) {
        observer.observe(el);
      }
    }
    updateActive();
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="corridor-nav" aria-label="Sections of this page">
      <p className="corridor-nav-title">
        <span className="badge-mono">planBTV</span>
        New North End
      </p>
      <ol className="corridor-line">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={
                section.id === activeId
                  ? 'corridor-stop active'
                  : 'corridor-stop'
              }
              aria-current={section.id === activeId ? 'true' : undefined}
            >
              <span className="stop-marker" aria-hidden="true" />
              <span className="stop-label">{section.label}</span>
            </a>
          </li>
        ))}
      </ol>
      <p className="corridor-nav-foot">Draft · June 2026</p>
    </nav>
  );
}

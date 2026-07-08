import { useState } from 'react';

import { residentImpacts } from '../data/plan';

export function YourStreetSection() {
  const [openId, setOpenId] = useState<string | null>(residentImpacts[0].id);

  return (
    <section id="your-street" className="section">
      <header className="section-header">
        <p className="section-eyebrow">What changes for you</p>
        <h2>If you live here now</h2>
        <p className="section-lede">
          The questions residents actually ask: what does this do to my street,
          my taxes, my commute, my ability to stay?
        </p>
      </header>

      <div className="impact-accordion">
        {residentImpacts.map((topic) => {
          const open = topic.id === openId;
          const panelId = `impact-${topic.id}`;
          return (
            <article key={topic.id} className={open ? 'impact open' : 'impact'}>
              <button
                type="button"
                className="impact-toggle"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenId(open ? null : topic.id)}
              >
                <span>{topic.title}</span>
                <span className="focus-card-chevron" aria-hidden="true">
                  {open ? '−' : '+'}
                </span>
              </button>
              {open && (
                <div id={panelId} className="impact-body">
                  <ul>
                    {topic.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <p className="cite">Draft plan {topic.cite}</p>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

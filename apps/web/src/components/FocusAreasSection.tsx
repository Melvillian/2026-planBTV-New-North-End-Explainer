import { useState } from 'react';

import {
  focusAreas,
  kitOfParts,
  secondarySites,
  type FocusArea,
} from '../data/plan';

function FocusAreaCard({ area }: { area: FocusArea }) {
  const [open, setOpen] = useState(false);
  const panelId = `${area.id}-detail`;

  return (
    <article id={area.id} className={open ? 'focus-card open' : 'focus-card'}>
      <button
        type="button"
        className="focus-card-toggle"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((current) => !current)}
      >
        <span className="focus-card-heading">
          <span className="focus-card-name">{area.name}</span>
          <span className="focus-card-tagline">{area.tagline}</span>
        </span>
        <span className="focus-card-meta">
          <span className="focus-homes">{area.homes}</span>
          <span
            className={
              area.ownership.startsWith('City')
                ? 'ownership city'
                : 'ownership private'
            }
          >
            {area.ownership}
          </span>
        </span>
        <span className="focus-card-chevron" aria-hidden="true">
          {open ? '−' : '+'}
        </span>
      </button>

      {open && (
        <div id={panelId} className="focus-card-detail">
          {area.commercial && (
            <p className="focus-commercial">{area.commercial}</p>
          )}
          <h4 className="detail-heading">What’s proposed</h4>
          <ul>
            {area.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          {area.phasing && <p className="focus-phasing">{area.phasing}</p>}
          <div className="feedback">
            <h4 className="detail-heading">What neighbors said</h4>
            <div className="feedback-columns">
              <div className="feedback-col support">
                <p className="feedback-label">Support</p>
                <ul>
                  {area.feedback.support.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="feedback-col concerns">
                <p className="feedback-label">Concerns</p>
                <ul>
                  {area.feedback.concerns.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <p className="cite">Draft plan {area.cite}</p>
        </div>
      )}
    </article>
  );
}

export function FocusAreasSection() {
  return (
    <section id="places" className="section">
      <header className="section-header">
        <p className="section-eyebrow">Where housing goes</p>
        <h2>Five focus areas, 835 homes</h2>
        <p className="section-lede">
          Sites were chosen through community input plus a “soft sites”
          analysis; parcels with wetlands, forests, critical infrastructure, or
          significant existing housing were excluded (pp. 14, 68–69). Every site
          vision is “illustrative rather than prescriptive” and needs further
          study and outreach (p. 139). Tap a site for details and what neighbors
          said about it.
        </p>
      </header>

      <div className="focus-cards">
        {focusAreas.map((area) => (
          <FocusAreaCard key={area.id} area={area} />
        ))}
      </div>

      <div className="secondary-sites">
        <h3 className="subheading">Supporting locations</h3>
        <p className="muted-note">
          The plan names five focus areas; these secondary locations come from
          its corridor and transportation chapters.
        </p>
        <ul className="secondary-list">
          {secondarySites.map((site) => (
            <li key={site.name}>
              <strong>{site.name}.</strong> {site.summary}{' '}
              <span className="cite">({site.cite})</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="kit-of-parts">
        <h3 className="subheading">
          The “Kit of Parts” — six building types, nothing over four stories
          (pp. 141–145)
        </h3>
        <div className="kit-grid">
          {kitOfParts.map((building) => (
            <div key={building.name} className="kit-item">
              <p className="kit-name">{building.name}</p>
              <p className="kit-desc">{building.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { headlineStats, visionStatement } from '../data/plan';

import { PlanDocuments } from './PlanDocuments';

// The three focus areas in south-to-north order along North Avenue, drawn as
// an interactive corridor strip — the page's signature element.
const corridorStops = [
  { id: 'alliance-church', short: 'Alliance Church', homes: '138' },
  { id: 'ethan-allen-plaza', short: 'Ethan Allen Plaza', homes: '323' },
  { id: 'plattsburg-north', short: 'Plattsburg Ave', homes: '139' },
];

export function Hero() {
  return (
    <section id="overview" className="hero">
      <p className="hero-eyebrow">
        <span className="badge-mono">planBTV</span> Updated draft neighborhood
        plan · September 2026 · unofficial explainer
      </p>
      <h1 className="hero-title">What the New North End plan actually says</h1>
      <PlanDocuments />
      <div className="hero-intro">
        <div className="hero-intro-text">
          <p className="hero-lede">
            Burlington needs about 7,000 new homes by 2050, and the draft plan
            is blunt: housing in the New North End “is not a question of
            ‘whether,’ but ‘how.’” Nearly every trip in the neighborhood funnels
            onto one street — North Avenue — so the plan is built around that
            corridor. Here’s the whole{' '}
            <a href="#plan-documents">209-page updated draft</a>, made readable.
          </p>

          <blockquote className="vision-quote">
            <p>“{visionStatement}”</p>
            <cite>— the plan’s vision statement (pp. 8, 30)</cite>
          </blockquote>
        </div>

        <figure className="vision-map">
          <img
            src="/neighborhood-vision-map.png"
            width={426}
            height={612}
            alt="The plan’s Neighborhood Vision map of the New North End: primary and secondary walking and biking connections crisscross the neighborhood, an active edge runs along North Avenue, neighborhood gateways mark the entry points, and three focus areas along North Avenue are each ringed by 5- and 10-minute walk circles, with schools and public plazas marked."
          />
          <figcaption>
            <strong>The plan in one picture.</strong> Connections, gateways, and
            three walkable focus areas strung along North Avenue.
            <span className="cite">
              {' '}
              Neighborhood Vision, ch. 03 (pp. 58–69)
            </span>
          </figcaption>
        </figure>
      </div>

      <figure
        className="corridor-strip"
        aria-label="The three focus areas along North Avenue, south to north"
      >
        <figcaption className="corridor-strip-caption">
          One street carries the plan: three focus areas along North Avenue
          <span className="strip-direction"> · south → north</span>
        </figcaption>
        <div className="strip-track">
          <span className="strip-terminus">VT 127</span>
          <div className="strip-line">
            {corridorStops.map((stop) => (
              <a key={stop.id} className="strip-stop" href={`#${stop.id}`}>
                <span className="strip-dot" aria-hidden="true" />
                <span className="strip-name">{stop.short}</span>
                <span className="strip-homes">{stop.homes} homes</span>
              </a>
            ))}
          </div>
          <span className="strip-terminus">Winooski River</span>
        </div>
      </figure>

      <div className="stat-tiles">
        {headlineStats.map((stat) => (
          <article key={stat.label} className="stat-tile">
            <p className="stat-value">{stat.value}</p>
            <p className="stat-label">{stat.label}</p>
            <p className="stat-detail">{stat.detail}</p>
            <p className="cite">{stat.cite}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

import { headlineStats, planPdfUrl, visionStatement } from '../data/plan';

// The five focus areas in south-to-north order along North Avenue, drawn as
// an interactive corridor strip — the page's signature element.
const corridorStops = [
  { id: 'alliance-church', short: 'Alliance Church', homes: '138' },
  { id: 'ethan-allen-parkway', short: 'Ethan Allen Pkwy', homes: '123' },
  { id: 'ethan-allen-plaza', short: 'Ethan Allen Plaza', homes: '323' },
  { id: 'plattsburg-north', short: 'Plattsburg Ave', homes: '139' },
  { id: 'starr-farm-west', short: 'Starr Farm', homes: '111–113' },
];

export function Hero() {
  return (
    <section id="overview" className="hero">
      <p className="hero-eyebrow">
        <span className="badge-mono">planBTV</span> Draft neighborhood plan ·
        June 2026 · unofficial explainer
      </p>
      <h1 className="hero-title">What the New North End plan actually says</h1>
      <p className="hero-lede">
        Burlington needs about 7,000 new homes by 2050, and the draft plan is
        blunt: housing in the New North End “is not a question of ‘whether,’ but
        ‘how.’” Nearly every trip in the neighborhood funnels onto one street —
        North Avenue — so the plan is built around that corridor. Here’s the
        whole{' '}
        <a href={planPdfUrl} target="_blank" rel="noopener noreferrer">
          219-page draft
        </a>
        , made readable.
      </p>

      <figure
        className="corridor-strip"
        aria-label="The five focus areas along North Avenue, south to north"
      >
        <figcaption className="corridor-strip-caption">
          One street carries the plan: five focus areas along North Avenue
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

      <blockquote className="vision-quote">
        <p>“{visionStatement}”</p>
        <cite>— the plan’s vision statement (pp. 8, 30)</cite>
      </blockquote>

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

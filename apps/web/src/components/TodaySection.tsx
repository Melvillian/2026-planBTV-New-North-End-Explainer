import { comparisons } from '../data/plan';

const MAX_PERCENT = 70; // scale bars against a fixed max so rows are comparable

export function TodaySection() {
  return (
    <section id="today" className="section">
      <header className="section-header">
        <p className="section-eyebrow">The NNE today</p>
        <h2>A neighborhood built for the car, growing older</h2>
        <p className="section-lede">
          About 10,500 people live between Lake Champlain and the Winooski
          River. The street network “funnels nearly all trips onto a single
          corridor — North Avenue,” and “growth cannot simply add more vehicles
          to an already constrained system” (p. 8).
        </p>
      </header>

      <figure className="compare-chart">
        <figcaption className="chart-title">
          How the New North End differs from the rest of Burlington
        </figcaption>
        <div className="chart-legend" aria-hidden="true">
          <span className="legend-item">
            <span className="legend-swatch swatch-nne" /> New North End
          </span>
          <span className="legend-item">
            <span className="legend-swatch swatch-city" /> Rest of Burlington
          </span>
        </div>
        <div className="chart-rows">
          {comparisons.map((row) => (
            <div key={row.label} className="chart-row">
              <p className="chart-row-label">{row.label}</p>
              <div className="chart-bars">
                <div
                  className="bar bar-nne"
                  style={{ width: `${(row.nne / MAX_PERCENT) * 100}%` }}
                  role="img"
                  aria-label={`New North End: ${row.nne}${row.unit}`}
                >
                  <span className="bar-value">
                    {row.nne}
                    {row.unit}
                  </span>
                </div>
                <div
                  className="bar bar-city"
                  style={{ width: `${(row.city / MAX_PERCENT) * 100}%` }}
                  role="img"
                  aria-label={`Rest of Burlington: ${row.city}${row.unit}`}
                >
                  <span className="bar-value">
                    {row.city}
                    {row.unit}
                  </span>
                </div>
              </div>
              <p className="chart-row-note">
                {row.note} <span className="cite">({row.cite})</span>
              </p>
            </div>
          ))}
        </div>
      </figure>

      <div className="fact-strip">
        <p>
          <strong>21%</strong> of residents are over 65 — the city’s largest
          share of older adults — and residents’ top aging worries are property
          taxes, senior housing options, and what happens when they can no
          longer drive (pp. 28–29, 56).
        </p>
        <p>
          The neighborhood is only <strong>2 mi × 1.5 mi</strong>; nearly all of
          it is a 5-minute bike ride from North Ave (pp. 46, 50).
        </p>
      </div>
    </section>
  );
}

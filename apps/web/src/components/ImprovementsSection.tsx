import {
  bikeWalkNetwork,
  corridorPhases,
  intersections,
  northAveRedesign,
  tdmPrograms,
  transit,
  type Improvement,
} from '../data/plan';

function ImprovementBlock({ item }: { item: Improvement }) {
  return (
    <article className="improvement">
      <h3>{item.title}</h3>
      <ul>
        {item.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <p className="cite">Draft plan {item.cite}</p>
    </article>
  );
}

export function ImprovementsSection() {
  return (
    <section id="improvements" className="section">
      <header className="section-header">
        <p className="section-eyebrow">Streets & transit</p>
        <h2>Rebuilding North Avenue, keeping the car lanes</h2>
        <p className="section-lede">
          The centerpiece is a full redesign of North Avenue — built in five
          phases, south to north, each starting with a scoping study (PDF pp.
          114–119).
        </p>
      </header>

      <ImprovementBlock item={northAveRedesign} />

      <div className="phase-timeline">
        <h3 className="subheading">The five construction phases</h3>
        <ol className="phase-list">
          {corridorPhases.map((phase) => (
            <li key={phase.phase} className="phase-item">
              <span className="phase-num badge-mono">P{phase.phase}</span>
              <span className="phase-body">
                <span className="phase-name">{phase.name}</span>
                <span className="phase-extent">{phase.extent}</span>
              </span>
              <span className="phase-when">{phase.timeframe}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="improvement-grid">
        {intersections.map((intersection) => (
          <ImprovementBlock key={intersection.title} item={intersection} />
        ))}
      </div>

      <div className="improvement-grid two-col">
        <ImprovementBlock item={bikeWalkNetwork} />
        <div>
          <ImprovementBlock item={transit} />
          <ImprovementBlock item={tdmPrograms} />
        </div>
      </div>
    </section>
  );
}

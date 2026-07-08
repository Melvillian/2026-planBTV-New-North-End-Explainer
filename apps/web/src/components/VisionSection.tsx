import { frameworks, guidingPrinciples } from '../data/plan';

export function VisionSection() {
  return (
    <section id="vision" className="section">
      <header className="section-header">
        <p className="section-eyebrow">The vision</p>
        <h2>A 15-minute neighborhood</h2>
        <p className="section-lede">
          The plan’s organizing idea: most daily needs within a 15-minute walk
          or bike ride (pp. 9, 60, 64). Three frameworks work together to get
          there — each “not a project plan or a fixed set of rules” but a menu
          of strategies.
        </p>
      </header>

      <div className="framework-cards">
        {frameworks.map((framework, index) => (
          <article key={framework.name} className="framework-card">
            <p className="framework-index badge-mono">0{index + 1}</p>
            <h3>{framework.name}</h3>
            <p>{framework.summary}</p>
          </article>
        ))}
      </div>

      <div className="principles">
        <h3 className="subheading">Six guiding principles (pp. 9, 31)</h3>
        <ul className="principle-list">
          {guidingPrinciples.map((principle) => (
            <li key={principle}>{principle}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

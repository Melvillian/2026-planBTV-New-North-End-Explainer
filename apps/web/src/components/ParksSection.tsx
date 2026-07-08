import {
  newGreenSpaces,
  parkImpacts,
  parkSafeguard,
  type ParkImpact,
} from '../data/plan';

const statusLabels: Record<ParkImpact['status'], string> = {
  enhanced: 'Enhanced',
  contested: 'Contested',
  protected: 'Protected',
  new: 'New space',
};

export function ParksSection() {
  return (
    <section id="parks" className="section">
      <header className="section-header">
        <p className="section-eyebrow">Parks & green space</p>
        <h2>More parkland than any neighborhood — and two hard questions</h2>
        <p className="section-lede">
          The NNE’s ~350 acres of parks are “destination” spaces; the
          neighborhood lacks everyday plazas and squares (pp. 54–55). Two of the
          five housing sites sit on City park land, and that’s where the
          strongest opposition lives.
        </p>
      </header>

      <aside className="safeguard">
        <p className="safeguard-label badge-mono">UD3 · safeguard</p>
        <p>{parkSafeguard}</p>
      </aside>

      <div className="park-cards">
        {parkImpacts.map((park) => (
          <article key={park.name} className="park-card">
            <div className="park-card-top">
              <h3>{park.name}</h3>
              <span className={`park-status status-${park.status}`}>
                {statusLabels[park.status]}
              </span>
            </div>
            <p>{park.summary}</p>
            <p className="cite">Draft plan {park.cite}</p>
          </article>
        ))}
      </div>

      <div className="new-green">
        <h3 className="subheading">New green spaces the plan creates</h3>
        <ul className="principle-list">
          {newGreenSpaces.map((space) => (
            <li key={space}>{space}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import { useMemo, useState } from 'react';

import { actionCategories, actions, type ActionCategory } from '../data/plan';

type CategoryFilter = ActionCategory | 'All';

const categoryClass: Record<ActionCategory, string> = {
  Mobility: 'cat-mobility',
  TDM: 'cat-tdm',
  Greenway: 'cat-greenway',
  'Urban Design': 'cat-urban',
  Placemaking: 'cat-place',
};

export function ImplementationSection() {
  const [category, setCategory] = useState<CategoryFilter>('All');
  const [quickWinsOnly, setQuickWinsOnly] = useState(false);

  const filtered = useMemo(
    () =>
      actions.filter(
        (action) =>
          (category === 'All' || action.category === category) &&
          (!quickWinsOnly || action.quickWin),
      ),
    [category, quickWinsOnly],
  );

  return (
    <section id="implementation" className="section">
      <header className="section-header">
        <p className="section-eyebrow">What happens when</p>
        <h2>44 actions — and no guarantees</h2>
        <p className="section-lede">
          The plan closes with 44 actions across five categories, each with a
          timeframe, lead agency, and cost scale (pp. 17–18, 207–219). It is
          equally clear that “implementation is not guaranteed” — it depends on
          resident participation, political will, and funding (p. 207). Below
          are the actions identifiable in this summary; timeframes marked “see
          draft” are specified in the full document.
        </p>
      </header>

      <div className="action-filters" role="group" aria-label="Filter actions">
        {(['All', ...actionCategories] as CategoryFilter[]).map((option) => (
          <button
            key={option}
            type="button"
            className={
              option === category ? 'filter-chip active' : 'filter-chip'
            }
            aria-pressed={option === category}
            onClick={() => setCategory(option)}
          >
            {option}
          </button>
        ))}
        <label className="quickwin-toggle">
          <input
            type="checkbox"
            checked={quickWinsOnly}
            onChange={(event) => setQuickWinsOnly(event.target.checked)}
          />
          Quick Wins only
        </label>
      </div>

      <div className="action-table-wrap">
        <table className="action-table">
          <thead>
            <tr>
              <th scope="col">Code</th>
              <th scope="col">Action</th>
              <th scope="col">Timeframe</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((action) => (
              <tr key={action.code}>
                <td>
                  <span
                    className={`action-code badge-mono ${categoryClass[action.category]}`}
                  >
                    {action.code}
                  </span>
                </td>
                <td>
                  {action.title}
                  {action.quickWin && (
                    <span className="quickwin-badge">Quick Win</span>
                  )}
                </td>
                <td className="action-when">{action.timeframe}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <p className="muted-note">
            No actions match these filters. Clear a filter to see more.
          </p>
        )}
      </div>
    </section>
  );
}

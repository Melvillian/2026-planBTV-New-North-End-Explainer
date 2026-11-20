import { planDocuments, planProjectUrl, whatChanged } from '../data/plan';

// Both versions of the plan, linked in one place at the top of the page.
// Links go to the City of Burlington's copies on burlingtonvt.gov.
export function PlanDocuments() {
  return (
    <section
      id="plan-documents"
      className="plan-docs"
      aria-labelledby="plan-docs-heading"
    >
      <h2 id="plan-docs-heading" className="plan-docs-heading">
        Read the plan
      </h2>
      <ul className="plan-docs-list">
        {planDocuments.map((doc) => (
          <li key={doc.id} className={`plan-doc plan-doc-${doc.id}`}>
            <p className="plan-doc-label badge-mono">{doc.label}</p>
            <a
              className="plan-doc-link"
              href={doc.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {doc.title}
            </a>
            <p className="plan-doc-meta">
              {doc.date} · {doc.pages} pages · PDF, {doc.sizeMb} MB ·
              burlingtonvt.gov
            </p>
            <p className="plan-doc-note">{doc.note}</p>
          </li>
        ))}
      </ul>
      <p className="plan-docs-project">
        Hearings, FAQs, and staff memos:{' '}
        <a href={planProjectUrl} target="_blank" rel="noopener noreferrer">
          the City’s planBTV New North End project page
        </a>
        .
      </p>
      <details className="plan-docs-changes">
        <summary>What changed between the drafts</summary>
        <ul>
          {whatChanged.map((change) => (
            <li key={change}>{change}</li>
          ))}
        </ul>
      </details>
    </section>
  );
}

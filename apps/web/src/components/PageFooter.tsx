import {
  bowlingAlleyQuote,
  planPdfUrl,
  processFacts,
  sourceNote,
} from '../data/plan';

export function PageFooter() {
  return (
    <footer className="page-footer">
      <blockquote className="bowling-quote">
        <p>{bowlingAlleyQuote}</p>
        <cite>— resident comment recorded in the plan (p. 27)</cite>
      </blockquote>

      <div className="process-facts">
        {processFacts.map((fact) => (
          <div key={fact.label} className="process-fact">
            <p className="process-label">{fact.label}</p>
            <p>{fact.text}</p>
          </div>
        ))}
      </div>

      <p className="source-note">
        {sourceNote} Read the original draft plan:{' '}
        <a href={planPdfUrl} target="_blank" rel="noopener noreferrer">
          planBTV New North End — full 219-page PDF (burlingtonvt.gov)
        </a>
        .
      </p>
    </footer>
  );
}

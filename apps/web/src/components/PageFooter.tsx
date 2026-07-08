import { bowlingAlleyQuote, processFacts, sourceNote } from '../data/plan';

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

      <p className="source-note">{sourceNote}</p>
    </footer>
  );
}

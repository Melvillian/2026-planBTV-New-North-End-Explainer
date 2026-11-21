import { useEffect, useRef } from 'react';

import { planDocuments } from '../data/plan';

const STORAGE_KEY = 'planbtv-nne:first-visit-notice-seen';

// localStorage can throw (e.g. storage disabled), so treat failures as
// "not seen" when reading and ignore them when writing.
function hasSeenNotice(): boolean {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === '1';
  } catch {
    return false;
  }
}

function markNoticeSeen(): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, '1');
  } catch {
    // Without storage the notice simply shows again next visit.
  }
}

const currentDraft = planDocuments.find((doc) => doc.id === 'current');

// Shown once per browser: a modal heads-up that the content was compiled with
// AI, with a link to the real plan. The single button takes focus on open.
export function FirstVisitNotice() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    // `open` guards against React StrictMode running this effect twice in dev.
    if (!dialog || dialog.open || hasSeenNotice()) return;
    dialog.showModal();
    buttonRef.current?.focus();
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className="first-visit-notice"
      aria-labelledby="first-visit-notice-text"
      onClose={markNoticeSeen}
    >
      <p id="first-visit-notice-text">
        ⚠️ A friendly heads up: this website’s content was compiled using AI and
        then reviewed by the site’s creator (a human!). It may contain mistakes,
        so if you’d like to ignore the AI nonsense and read the real deal,{' '}
        <a href={currentDraft?.href} target="_blank" rel="noopener noreferrer">
          click this link to see the latest draft of planBTV
        </a>
        .
      </p>
      <form method="dialog">
        <button ref={buttonRef} type="submit" className="first-visit-button">
          Got it
        </button>
      </form>
    </dialog>
  );
}

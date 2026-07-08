import '@fontsource/overpass/600.css';
import '@fontsource/overpass/700.css';
import '@fontsource/overpass/900.css';
import '@fontsource/overpass-mono/600.css';
import '@fontsource/public-sans/400-italic.css';
import '@fontsource/public-sans/400.css';
import '@fontsource/public-sans/600.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';
import './styles.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Missing #root element');
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

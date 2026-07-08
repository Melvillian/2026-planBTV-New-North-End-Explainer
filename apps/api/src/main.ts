import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import express, { json } from 'express';

const app = express();
const PORT = parseInt(process.env.PORT || '80', 10);

// Static bundle of the apps/web frontend. The default resolves to
// apps/web/dist from both dev (src/main.ts) and compiled (dist/main.js)
// entrypoints; override via WEB_DIST_PATH if the bundle lives elsewhere.
const webDistPath =
  process.env.WEB_DIST_PATH ??
  path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../web/dist');
const webDistAvailable = existsSync(path.join(webDistPath, 'index.html'));

// Middleware
app.use(json({ limit: '10mb' }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.get('/api/info', (req, res) => {
  res.json({
    service: 'api',
    version: '1.0.0',
    web: webDistAvailable ? 'served' : 'missing',
    endpoints: ['/health', '/api/info'],
  });
});

if (webDistAvailable) {
  app.use(express.static(webDistPath));
  // SPA fallback: any non-API GET serves the frontend.
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api/') || req.path === '/health') {
      next();
      return;
    }
    res.sendFile(path.join(webDistPath, 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.status(503).json({
      error: 'Web frontend not built',
      hint: 'Run `bun run build` so apps/web/dist exists, or set WEB_DIST_PATH.',
    });
  });
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on port ${PORT}`);
  console.log(
    webDistAvailable
      ? `Serving web frontend from ${webDistPath}`
      : `Web frontend missing at ${webDistPath} — API only`,
  );
});

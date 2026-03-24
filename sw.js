/* 賞屋獵人 Service Worker v1 */
const CACHE = 'house-hunter-v1';

const SHELL = [
  './',
  './index.html',
  './diary-huxin.html',
  './diary-shenghua.html',
  './shenghua.jpg',
  './manifest.json',
  './icon.svg',
];

/* ── Install: pre-cache shell ── */
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())
  );
});

/* ── Activate: clean old caches ── */
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* ── Fetch strategy ──
   HTML pages  → Network-first (fresh content), cache as fallback
   Other assets → Cache-first (fast), update cache in background
*/
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;

  const isDocument = e.request.destination === 'document';

  if (isDocument) {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
          return res;
        })
        .catch(() => caches.match(e.request))
    );
  } else {
    e.respondWith(
      caches.match(e.request).then(cached => {
        if (cached) {
          /* Serve from cache, update in background */
          fetch(e.request).then(res => {
            if (res.ok) caches.open(CACHE).then(c => c.put(e.request, res));
          }).catch(() => {});
          return cached;
        }
        return fetch(e.request).then(res => {
          if (res.ok) {
            const clone = res.clone();
            caches.open(CACHE).then(c => c.put(e.request, clone));
          }
          return res;
        });
      })
    );
  }
});

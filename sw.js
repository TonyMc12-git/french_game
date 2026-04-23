const CACHE_NAME = "french-game-pwa-v11";
const APP_VERSION = "20260423-french11";

const APP_ASSETS = [
  "./",
  "./index.html",
  "./styles.css?v=20260423-french11",
  "./app.js?v=20260423-french10",
  "./manifest.webmanifest?v=20260423-french10",
  "./favicon-192-french-v2.png",
  "./apple-touch-icon-french-v2.png?v=20260423-french11",
  "./icons/icon-192-french-v4.png",
  "./icons/icon-512-french-v4.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  const requestUrl = new URL(event.request.url);
  if (requestUrl.origin !== self.location.origin) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) {
        return cached;
      }

      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200) {
          return response;
        }

        const responseCopy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseCopy));
        return response;
      });
    })
  );
});

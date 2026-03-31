const CACHE_NAME = "uri-ise-astro-v3";

self.addEventListener("install", (event) => {
  // Immediately install the new worker, replacing the old cache
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        // Force delete every single old cache stored by the previous SW
        keys.map((key) => caches.delete(key))
      )
    )
  );
  // Tell the new SW to safely take control of the page immediately
  self.clients.claim();
});

// Network First strategy
self.addEventListener("fetch", (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') {
      return;
  }
  
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
          return networkResponse;
      })
      .catch(() => {
          // If network completely fails, check if we have a match in the cache
          return caches.match(event.request);
      })
  );
});

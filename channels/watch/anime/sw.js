const CACHE_NAME = "Animax-Cache";
const urlsToCache = [
  "Animax",
  "manifest.json",
  "https://mikasa-ackerman-cdn.pages.dev/index.jpg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

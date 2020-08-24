const OFFLINE_GIF = "images/notFound.webp";

const CACHE_NAME = "experiments-v1";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      cache.addAll(["images/favicon.ico", OFFLINE_GIF]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  console.log(event.request);
  event.respondWith(fetch(event.request).catch(() => fetch(OFFLINE_GIF)));
});

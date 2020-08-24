const OFFLINE_GIF = "images/notFound.webp";

const CACHE_NAME = "experiments-v1";
const assets = [
  "/",
  "index.html",
  "css/main.css",
  "css/pwa.css",
  "images/notFound.webp",
  "images/favicon.ico",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      cache.addAll(assets);
    })
  );
});

// activate event
// self.addEventListener("activate", (event) => {
//   event.waitUntil(
//     caches.keys().then((keys) => {
//       return Promise.all(
//         keys
//           .filter((key) => key !== CACHE_NAME)
//           .map((key) => caches.delete(key))
//       );
//     })
//   );
// });

self.addEventListener("fetch", (event) => {
  console.log(event.request);
  event.respondWith(fetch(event.request).catch(() => fetch(OFFLINE_GIF)));
});

const CACHE_NAME = 'calculadora-v1';
const urlsToCache = [
  'principio.html',
  'manifest.json',
  'imagen.png'
];

// Instalar y guardar archivos en caché
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Archivos guardados en caché');
      return cache.addAll(urlsToCache);
    })
  );
});

// Responder desde caché si no hay internet
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
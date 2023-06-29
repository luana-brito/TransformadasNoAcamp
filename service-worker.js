const CACHE_NAME = 'gerenciador-doacoes-v1';
const urlsToCache = [
  '/',
  'index.html',
  'manifest.json',
  /* Lista de outros arquivos estáticos a serem armazenados em cache */
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        return response;
      }

      return fetch(event.request);
    })
  );
});

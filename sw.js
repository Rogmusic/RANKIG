
const CACHE_NAME = 'samuelsports-v1';
const assets = [
  '/',
  '/index.html', // mude para o nome do seu arquivo principal
  '/view-empty-soccer-stadium-with-fantasy-dreamy-sky.jpg'
];

// Instala o cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

// Responde com cache primeiro, mas busca o HTML novo em segundo plano
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

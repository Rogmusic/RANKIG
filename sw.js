const CACHE_NAME = 'samuelsports-cache-v1';
const assetsToCache = [
  './',
  './index.html', // Verifique se o nome do seu arquivo é esse mesmo
  './view-empty-soccer-stadium-with-fantasy-dreamy-sky.jpg' // O fundo pesado
];

// Instalação: Salva os arquivos no celular/PC do usuário
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Arquivos cacheados com sucesso!');
      return cache.addAll(assetsToCache);
    })
  );
});

// Estratégia: Tenta carregar do Cache primeiro. Se não tiver, busca na rede.
self.addEventListener('fetch', (event) => {
  // Ignora o iframe do Google (ele precisa ser sempre atualizado)
  if (event.request.url.includes('google.com')) {
    return; 
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});

const CACHE_NAME = 'somar-totem-v1';

// No guarda nada en caché por ahora para que veas tus cambios en tiempo real
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Estrategia: Ir directamente a la red
  event.respondWith(fetch(event.request));
});

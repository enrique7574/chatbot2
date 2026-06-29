const CACHE_NAME = 'pitagorasbot-v1';
const FILES = ['index.html','styles.css','script.js','logo.jpg','chatbot_logo.jpeg','autores.jpg','manifest.webmanifest'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(FILES)).catch(() => null));
});
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(resp => resp || fetch(event.request)));
});

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('remi-cache').then(function(cache) {
      return cache.addAll([
        'remi.html',
        'manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
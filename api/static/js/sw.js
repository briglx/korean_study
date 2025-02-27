self.addEventListener('install', event => {
    console.log("Service Worker installing...");
    event.waitUntil(
        caches.open("static-cache").then(cache => {
            return cache.addAll([
                "/",
                "/static/js/app.js",
                "/static/css/styles.css",
                "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});

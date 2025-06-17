const CACHE_NAME = 'riparazioni24-v2';
const IMAGE_CACHE_NAME = 'riparazioni24-images-v2';
const STATIC_CACHE_NAME = 'riparazioni24-static-v2';

const CRITICAL_RESOURCES = [
    '/',
    '/logo.webp'
];

const STATIC_RESOURCES = [
    '/manifest.json',
    '/robots.txt',
    '/sitemap.xml'
];

// Install event - cache critical resources
self.addEventListener('install', (event) => {
    event.waitUntil(
        Promise.all([
            caches.open(CACHE_NAME).then((cache) => {
                return cache.addAll(CRITICAL_RESOURCES);
            }),
            caches.open(STATIC_CACHE_NAME).then((cache) => {
                return cache.addAll(STATIC_RESOURCES);
            })
        ]).then(() => {
            return self.skipWaiting();
        })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME &&
                        cacheName !== IMAGE_CACHE_NAME &&
                        cacheName !== STATIC_CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            return self.clients.claim();
        })
    );
});

// Fetch event - serve from cache with different strategies
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    // Skip non-GET requests
    if (event.request.method !== 'GET') {
        return;
    }

    // Handle navigation requests
    if (event.request.mode === 'navigate') {
        event.respondWith(
            caches.match('/').then((response) => {
                return response || fetch(event.request);
            })
        );
        return;
    }

    // Handle images with Cache First strategy
    if (url.pathname.startsWith('/images/') ||
        url.pathname.endsWith('.webp') ||
        url.pathname.endsWith('.jpg') ||
        url.pathname.endsWith('.jpeg') ||
        url.pathname.endsWith('.png') ||
        url.pathname.endsWith('.svg')) {

        event.respondWith(
            caches.open(IMAGE_CACHE_NAME).then((cache) => {
                return cache.match(event.request).then((response) => {
                    if (response) {
                        return response;
                    }

                    return fetch(event.request).then((fetchResponse) => {
                        // Only cache successful responses
                        if (fetchResponse && fetchResponse.status === 200) {
                            const responseToCache = fetchResponse.clone();
                            // Set cache headers for images
                            const headers = new Headers(responseToCache.headers);
                            headers.set('Cache-Control', 'public, max-age=31536000'); // 1 year

                            const cachedResponse = new Response(responseToCache.body, {
                                status: responseToCache.status,
                                statusText: responseToCache.statusText,
                                headers: headers
                            });

                            cache.put(event.request, cachedResponse.clone());
                            return fetchResponse;
                        }
                        return fetchResponse;
                    }).catch(() => {
                        // Return a placeholder image if network fails
                        return new Response(
                            '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"><rect width="300" height="200" fill="#f3f4f6"/><text x="150" y="100" text-anchor="middle" fill="#9ca3af">Immagine non disponibile</text></svg>',
                            {
                                headers: {
                                    'Content-Type': 'image/svg+xml',
                                    'Cache-Control': 'no-cache'
                                }
                            }
                        );
                    });
                });
            })
        );
        return;
    }

    // Handle CSS and JS assets
    if (url.pathname.startsWith('/assets/') ||
        url.pathname.endsWith('.css') ||
        url.pathname.endsWith('.js')) {

        event.respondWith(
            caches.open(STATIC_CACHE_NAME).then((cache) => {
                return cache.match(event.request).then((response) => {
                    if (response) {
                        return response;
                    }

                    return fetch(event.request).then((fetchResponse) => {
                        if (fetchResponse && fetchResponse.status === 200) {
                            cache.put(event.request, fetchResponse.clone());
                        }
                        return fetchResponse;
                    });
                });
            })
        );
        return;
    }

    // Handle other requests with Network First strategy
    event.respondWith(
        fetch(event.request).then((response) => {
            if (response && response.status === 200) {
                const responseToCache = response.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, responseToCache);
                });
            }
            return response;
        }).catch(() => {
            return caches.match(event.request);
        })
    );
});

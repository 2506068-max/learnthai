/**
 * Service Worker: Mali's Thai (PWA Offline Capability)
 * Strategies:
 * 1. Cache-First: Google Fonts (fonts.googleapis.com, fonts.gstatic.com) & Native Speaker Audio (/audio/, /audio_cache/)
 * 2. Stale-While-Revalidate: Local app shell & static assets (HTML, CSS, JS, JSON, SVGs)
 */

const CACHE_NAME_CORE = 'mali-thai-core-v2';
const CACHE_NAME_FONTS = 'mali-thai-fonts-v1';
const CACHE_NAME_AUDIO = 'mali-thai-audio-v1';

const CORE_ASSETS = [
  './',
  './index.html',
  './fairy_thai_academy.html',
  './css/style.css',
  './data-store.js',
  './js/audio-synth.js',
  './js/canvas-handler.js',
  './js/speech-coach.js',
  './js/navigation.js',
  './js/app.js',
  './data/alphabet.json',
  './data/curriculum.json',
  './data/dictionary.json',
  './manifest.json',
  './icon.svg'
];

// Install: Pre-cache core shell
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME_CORE).then((cache) => {
      return cache.addAll(CORE_ASSETS).catch((err) => {
        console.warn('[SW] Core assets pre-cache notice:', err);
      });
    })
  );
});

// Activate: Clean up outdated caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (![CACHE_NAME_CORE, CACHE_NAME_FONTS, CACHE_NAME_AUDIO].includes(key)) {
            console.log('[SW] Clearing old cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch dispatcher
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // Ignore non-GET and non-HTTP(S) requests (e.g. chrome-extension:)
  if (request.method !== 'GET' || !url.protocol.startsWith('http')) {
    return;
  }

  // 1. STRATEGI CACHE-FIRST: Google Fonts
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(
      caches.open(CACHE_NAME_FONTS).then((cache) => {
        return cache.match(request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          return fetch(request).then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              cache.put(request, networkResponse.clone());
            }
            return networkResponse;
          });
        });
      })
    );
    return;
  }

  // 2. STRATEGI CACHE-FIRST: Audio Data Penutur Asli
  const isAudio = url.pathname.includes('/audio/') || 
                  url.pathname.includes('/audio_cache/') ||
                  url.pathname.endsWith('.mp3') ||
                  url.pathname.endsWith('.wav') ||
                  url.pathname.endsWith('.ogg') ||
                  request.destination === 'audio';

  if (isAudio) {
    event.respondWith(
      caches.open(CACHE_NAME_AUDIO).then((cache) => {
        return cache.match(request).then((cachedAudio) => {
          if (cachedAudio) {
            return cachedAudio;
          }
          return fetch(request).then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              cache.put(request, networkResponse.clone());
            }
            return networkResponse;
          }).catch(() => {
            // Audio offline fallback if unavailable
            return new Response('', { status: 404, statusText: 'Audio Offline' });
          });
        });
      })
    );
    return;
  }

  // 3. STRATEGI STALE-WHILE-REVALIDATE: Aset HTML, CSS, JS, JSON & Shell
  event.respondWith(
    caches.open(CACHE_NAME_CORE).then((cache) => {
      return cache.match(request).then((cachedResponse) => {
        const fetchPromise = fetch(request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            cache.put(request, networkResponse.clone());
          }
          return networkResponse;
        }).catch((fetchErr) => {
          // If offline and request is navigation/HTML, return cached index.html
          if (request.mode === 'navigate') {
            return cache.match('./index.html');
          }
          return null;
        });

        // Return cached version immediately if available, otherwise wait for network
        return cachedResponse || fetchPromise;
      });
    })
  );
});


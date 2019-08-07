/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
     http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/

// Names of the two caches used in this version of the service worker.
// Change to v2, etc. when you update any of the local resources, which will
// in turn trigger the install event again.
const PRECACHE = 'precache-v1';
const RUNTIME = 'runtime';
const dataCacheName = 'whatPulse';

// A list of local resources we always want to be cached.
const PRECACHE_URLS = [
    'index.html',
    './', // Alias for index.html
    './css/styles.css',
    './css/reset.css',
    './js/main.min.js'
];

// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(PRECACHE)
            .then(cache => cache.addAll(PRECACHE_URLS))
            .then(self.skipWaiting())
    );
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', event => {
    const currentCaches = [PRECACHE, RUNTIME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
        }).then(cachesToDelete => {
            return Promise.all(cachesToDelete.map(cacheToDelete => {
                return caches.delete(cacheToDelete);
            }));
        }).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', event => {
    const dataUrl = 'https://api.whatpulse.org/';

    if (event.request.url.startsWith(dataUrl)) {
        // event.waitUntil(caches.open(dataCacheName)
        //     .then(cache => {
        //         cache.match(event.request, {ignoreSearch: true})
        //             .then(response => response.json()
        //                 .then(json => {
        //                 //     let keyTotal = 0;
        //                 //     let clickTotal = 0;
        //                 //     Object.values(json).forEach(pulse => {
        //                 //         keyTotal += +pulse.Keys;
        //                 //         clickTotal += +pulse.Clicks;
        //                 //     });
        //                 //     window.document.querySelector("#current-keys").innerHTML = keyTotal;
        //                 //     window.document.querySelector("#current-clicks").innerHTML = clickTotal;
        //                 }));
        //         cache.add(event.request.url)
        //             .then(() => console.log('data added')
        //             )
        //     })
        // );
    } else if (event.request.url.startsWith(self.location.origin)) {
        event.respondWith(
            caches.match(event.request).then(cachedResponse => {
                if (cachedResponse) {
                    return cachedResponse;
                }

                return caches.open(RUNTIME).then(cache => {
                    return fetch(event.request).then(response => {
                        // Put a copy of the response in the runtime cache.
                        return cache.put(event.request, response.clone()).then(() => {
                            return response;
                        });
                    });
                });
            })
        );
    } else {
        event.respondWith(caches.match(event.request).then(response => {
            return response || fetch(event.request);
        }))
    }
});

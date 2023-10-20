// Define the cache name
let cachedData = "appV1";

// Listen for the "install" event to set up the cache
// eslint-disable-next-line no-restricted-globals
self.addEventListener("install", (event) => {
  // Use event.waitUntil to ensure that the service worker will not
  // install until the code inside has successfully occurred
  event.waitUntil(
    // Open a cache with the cache name
    caches.open(cachedData).then((cache) => {
      // Add files to the cache
      return cache.addAll([
        "/static/js/bundle.js",
        "/static/js/hook.bundle.js",
        "/static/js/client.bundle.js",
        "/index.html",
        "/",
      ]);
    })
  );
});

// Listen for fetch events
// eslint-disable-next-line no-restricted-globals
self.addEventListener("fetch", (event) => {
  event.respondWith(
    // Check the cache for a cached version of the user's request
    caches.match(event.request).then((response) => {
      if (response) {
        // If there is a cached version, return it
        return response;
      }

      // If there isn't, fetch from the network
      return fetch(event.request).then((fetchResponse) => {
        // And cache the new fetched response
        return caches.open(cachedData).then((cache) => {
          cache.put(event.request, fetchResponse.clone());
          return fetchResponse;
        });
      });
    })
  );
});

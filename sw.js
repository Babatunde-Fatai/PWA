
//All assets that have to be cached to install/create the PWA
var CACHE_NAME = 'maxa-cache-v1';
var urlsToCache = [
  './',
  './scenes/main.js',
  './scenes/sceneManager.js',
  '/WebXR-Modules/babylon.js',
  '/WebXR-Modules/babylonjs.materials.min.js',
  '/icons',
  '/icons/icon16.png',
  '/textures/3d-model.png',
  '/textures/3d-model-02.png',
  '/style.css',
  '/scenes/index.css',
  //furball assets
  '/scenes/furballScene.html',
  '/scenes/furballScene.js',
   //furpink assets
   '/scenes/furpinkScene.html',
   '/scenes/furpinkScene.js',
  //specularBalls assets
  '/textures/environment.dds',
  '/textures/ennisSpecularHDR.dds',
  '/textures/reflectivity.png',
  '/textures/albedo.png',
  //Spiral Spring assets
  '/scenes/specularBallsScene.html',
  '/scenes/specularBallsScene.js',
  //Digital Rain assets
  '/scenes/digitalRainScene.html',
  '/scenes/digitalRainScene.js',
  '/WebXR-Modules/babylon.digitalRainPostProcess.js',
  //Twin Stone assets
  '/scenes/twinStoneScene.html',
  '/scenes/twinStoneScene.js',
  '/textures/Floor.png',
  '/textures/floor_bump.png',
  '/textures/candleopacity.png',
  '/textures/earth.jpg',
  //sketchFourier assets
  '/scenes/sketchFourier.html',
  '/scenes/sketchFourier.js',
   //gaming assets
   '/scenes/tickTac.html',
   '/scenes/tickTac.js',
   '/scenes/tickTac.css',
   
  
];

//installation
self.addEventListener('install', function(event) {

    console.log("Installing: " + event)
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Installed Cache successfully');
        console.log(urlsToCache);
        return cache.addAll(urlsToCache);
      })
  );
});


//whenever we have a fetch request
// self.addEventListener('fetch', function(event) {
//     event.respondWith(
//       caches.match(event.request)
//         .then(function(response) {
//           // Cache hit - return response
//           if (response) {
//             return response;
//           }
//           return fetch(event.request);
//         }
//       )
//     );
//   });

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        return fetch(event.request).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});


//looping through all of the caches in the service 
//worker and deleting any caches that aren't defined in the cache allowlist.
self.addEventListener('activate', function(event) {

  var cacheAllowlist = ['maxa-cache-v1']; //list all cache

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheAllowlist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

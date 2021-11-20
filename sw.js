
//All assets that have to be cached to install/create the PWA
var CACHE_NAME = 'maxa-cache-v1';
var urlsToCache = [
  './',
  './scenes/main.js',
  './scenes/sceneManager.js',
  '../WebXR-Modules/babylon.js',
  '../WebXR-Modules/babylonjs.materials.min.js',
  '/icons',
  '/icons/icon16.png',
  '/textures/3d-model.png',
  '/textures/3d-model-02.png',
  '/style.css',
  '/scenes/index.css',
  //furball assets
  '/scenes/furballScene.html',
  '/scenes/furballScene.js',
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
  
];

//installation
self.addEventListener('install', function(event) {

    console.log("Installing: " + event)
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        console.log(urlsToCache);
        return cache.addAll(urlsToCache);
      })
  );
});


//whenever we have a fetch request
self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  });
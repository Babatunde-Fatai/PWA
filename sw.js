
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
   'https://fonts.googleapis.com/css2?family=Itim&display=swap',
   'https://fonts.gstatic.com',
   
  
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
var cacheName = "Adithya";

var cacheFiles = [
    '/',
    '/index.html',
    'https://www.adithyabhat.com/static/media/about.663d874c.png',
    'https://www.adithyabhat.com/static/media/bapspatil.fc43e3ee.jpeg',
    'https://www.adithyabhat.com/static/media/rnsit.0378de47.jpeg',
    'https://www.adithyabhat.com/static/media/aikya.2ce62db0.jpeg',
    'https://www.adithyabhat.com/static/media/wallart.d4d6567a.jpeg',
    'https://fonts.gstatic.com/s/reemkufi/v4/2sDcZGJLip7W2J7v7wQzaGW5Kb8VZA.woff2',
    'https://use.fontawesome.com/releases/v5.1.0/webfonts/fa-solid-900.woff2',
    'https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
    'https://use.fontawesome.com/releases/v5.1.0/webfonts/fa-brands-400.woff2',
    'https://www.adithyabhat.com/static/media/dugout.a5e15d1c.jpeg',
    'https://www.adithyabhat.com/static/media/bgmain.e32929d7.png',
    'https://www.adithyabhat.com/static/media/bg.544a7337.png',
    'https://www.adithyabhat.com/static/media/yelpcamp.be0cd4a0.jpeg',
    'https://www.adithyabhat.com/static/media/mountain.f34ad748.jpeg',
    'https://www.adithyabhat.com/static/media/contact.797f50ca.png',
    '/css/animate.css',
    'https://www.adithyabhat.com/static/media/AdithyaNR-resume.c861eadb.pdf',
    'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
    'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
    'https://www.adithyabhat.com/static/css/main.bd607ad1.css',
    'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js',
    'https://www.adithyabhat.com/static/js/main.b59b4c5d.js',
    'https://fonts.googleapis.com/css?family=Roboto:300,400,700',
    'https://www.adithyabhat.com/static/media/webdev.adbdc40f.png',
    'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'
];

self.addEventListener('install',function(e){
    console.log('[serviceWorker] installing');
    e.waitUntil(
        caches.open(cacheName).then(function(cache){
            console.log('[ServiceWorker] caching');
            return cache.addAll(cacheFiles);
        })
    );
});

self.addEventListener('activate',function(e){
    console.log('[ServiceWorker] activating');
    e.waitUntil(
        caches.keys().then(function(keyList){
            return Promise.all(keyList.map(function(key){
                if(key !== cacheName){
                    console.log('[ServiceWorker] removing old cache');
                    return caches.delete(key);
                }
            }));
        })
    );
    return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
    e.respondWith(
      caches.match(e.request).then(function(r) {
            console.log('[Service Worker] Fetching resource: '+e.request.url);
        return r || fetch(e.request).then(function(response) {
                  return caches.open(cacheName).then(function(cache) {
            console.log('[Service Worker] Caching new resource: '+e.request.url);
            cache.put(e.request, response.clone());
            return response;
          });
        });
      })
    );
  });
  
self.addEventListener('install', (event) => {
    console.log('Service Worker installé.');
  });
  
  self.addEventListener('fetch', (event) => {
    console.log('Service Worker intercepte la requête : ', event.request.url);
  });
  
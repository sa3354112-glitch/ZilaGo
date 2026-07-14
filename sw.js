self.addEventListener('install',e=>{e.waitUntil(caches.open('zilago-v1').then(c=>c.addAll(['/ZilaGo/'])))});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});

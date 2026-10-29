// Service worker mínimo: permite instalar a app; não guarda nada em cache (a app abre sempre a versão mais recente).
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',()=>{});

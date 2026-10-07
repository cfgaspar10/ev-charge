// ==============================================================================
// kWhub - Service Worker PWA (Progressive Web App)
// Gerenciamento de Cache, Operação Offline e Suporte a Push Notifications
// Compatível com Raiz (PROD) e Subcaminhos de Proxy Reverso (HML /app-hml e /app)
// ==============================================================================

const CACHE_NAME = 'kwhub-cache-v1';

// Detecta dinamicamente o prefixo base onde o SW foi instalado
// Exemplo: se self.location.pathname for "/app-hml/sw.js", basePath será "/app-hml"
const basePath = self.location.pathname.replace(/\/sw\.js$/, '');

// Ativos fundamentais para funcionamento da casca da aplicação (App Shell)
const STATIC_ASSETS = [
  basePath + '/',
  basePath + '/index.html',
  basePath + '/manifest.json',
  basePath + '/css/estilos.css',
  basePath + '/js/api.js',
  basePath + '/js/app.js',
  basePath + '/js/pwa.js',
  basePath + '/assets/favicon.png',
  basePath + '/assets/icons/apple-touch-icon.png',
  basePath + '/assets/icons/icon-192x192.png',
  basePath + '/assets/icons/icon-512x512.png',
  basePath + '/assets/icons/favicon-32x32.png',
  basePath + '/assets/icons/favicon-16x16.png'
];

// Instalação do Service Worker e pré-cache resiliente do App Shell
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      console.log('[kWhub SW] Pré-cacheando ativos estáticos com basePath:', basePath || '/');
      try {
        await cache.addAll(STATIC_ASSETS);
      } catch (err) {
        console.warn('[kWhub SW] Aviso em addAll. Gravando individualmente no cache:', err);
        for (const asset of STATIC_ASSETS) {
          try {
            await cache.add(asset);
          } catch (e) {
            console.warn('[kWhub SW] Item estático não cacheado:', asset);
          }
        }
      }
    }).then(() => {
      return self.skipWaiting();
    })
  );
});

// Ativação e limpeza de versões anteriores de cache
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('[kWhub SW] Removendo cache obsoleto:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Interceptação de Requisições de Rede
self.addEventListener('fetch', event => {
  const requestUrl = new URL(event.request.url);

  // 1. REQUISIÇÕES DE API: Network-First com cache de leitura para catálogo offline
  if (requestUrl.pathname.includes('/api/')) {
    if (event.request.method === 'GET' && requestUrl.pathname.includes('/veiculos')) {
      // Catálogo de veículos: tenta rede e guarda em cache para uso offline em viagens
      event.respondWith(
        fetch(event.request).then(response => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        }).catch(() => {
          return caches.match(event.request);
        })
      );
      return;
    }
    // Outras requisições de API (ex: sugestões, sincronização admin): Network-Only
    return;
  }

  // 2. NAVEGAÇÃO SPA (HTML): Network-First com fallback para cache local
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(async () => {
        const cachedIndex = (await caches.match(basePath + '/index.html')) ||
                            (await caches.match(basePath + '/')) ||
                            (await caches.match(event.request));
        if (cachedIndex) return cachedIndex;
        return new Response('kWhub Offline: Sem conexão com a internet', {
          status: 503,
          statusText: 'Offline',
          headers: { 'Content-Type': 'text/plain; charset=utf-8' }
        });
      })
    );
    return;
  }

  // 3. ATIVOS ESTÁTICOS: Stale-While-Revalidate
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      const fetchPromise = fetch(event.request).then(networkResponse => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => cachedResponse);

      return cachedResponse || fetchPromise;
    })
  );
});

// Suporte a Push Notifications (Notificações de Novos Veículos Homologados)
self.addEventListener('push', event => {
  let notificationData = {
    title: 'kWhub',
    body: 'Novo veículo homologado disponível na calculadora!',
    icon: (basePath || '') + '/assets/icons/icon-192x192.png',
    badge: (basePath || '') + '/assets/icons/favicon-32x32.png',
    data: (basePath || '') + '/'
  };

  if (event.data) {
    try {
      const parsed = event.data.json();
      notificationData = { ...notificationData, ...parsed };
    } catch (e) {
      notificationData.body = event.data.text();
    }
  }

  const notificationOptions = {
    body: notificationData.body,
    icon: notificationData.icon,
    badge: notificationData.badge,
    data: notificationData.data,
    vibrate: [100, 50, 100],
    actions: [
      { action: 'open_app', title: 'Abrir kWhub' }
    ]
  };

  event.waitUntil(
    self.registration.showNotification(notificationData.title, notificationOptions)
  );
});

// Clique na Notificação Push
self.addEventListener('notificationclick', event => {
  event.notification.close();
  const urlToOpen = event.notification.data || (basePath || '') + '/';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(windowClients => {
      for (let client of windowClients) {
        if (client.url.includes(basePath || '/') && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(urlToOpen);
      }
    })
  );
});

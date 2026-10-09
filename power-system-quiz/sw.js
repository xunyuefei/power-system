/* ==========================================================================
   ⚡ 华电《电力系统分析》全真题库 - PWA Service Worker (离线缓存引擎)
   Cache Version: ncepu-quiz-pwa-v1.0.9
   ========================================================================== */

const CACHE_NAME = 'ncepu-quiz-pwa-v1.0.9';

// 核心预缓存文件列表（确保全题库与交互离线可用）
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './questions_data.js',
  './manifest.json',
  './icon.svg',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
  './favicon.png'
];

// 1. 安装事件 (Precache)
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] 预缓存核心题库与静态资源...');
      return cache.addAll(PRECACHE_ASSETS);
    }).then(() => {
      return self.skipWaiting();
    })
  );
});

// 2. 激活事件 (彻底清理所有旧版本缓存并强制接管全部页面)
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[ServiceWorker] 清理过期版本缓存:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// 3. 网络请求拦截策略
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);

  // 关键：对于核心题库数据与主页面采用 Network-First (网络优先，成功则存入缓存；断网离线时自动走本地缓存)，确保更新零延迟生效！
  const isCoreDataOrPage = url.pathname.includes('questions_data.js') || 
                           url.pathname.endsWith('index.html') || 
                           url.pathname.endsWith('/') ||
                           event.request.mode === 'navigate';

  if (isCoreDataOrPage) {
    event.respondWith(
      fetch(event.request, { cache: 'no-cache' }).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      }).catch(() => {
        // 网络请求失败（离线/断网），从本地缓存读取
        return caches.match(event.request).then((cached) => {
          if (cached) return cached;
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
          return null;
        });
      })
    );
    return;
  }

  // 其他静态静态图片、图标等资源：采用 Stale-While-Revalidate
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      }).catch(() => null);

      return cachedResponse || fetchPromise;
    })
  );
});

// 4. 监听手动更新指令
self.addEventListener('message', (event) => {
  if (event.data && event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

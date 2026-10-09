/* ==========================================================================
   ⚡ 华电《电力系统分析》全真题库 - PWA Service Worker (离线缓存引擎)
   Cache Version: ncepu-quiz-pwa-v1.0.5
   ========================================================================== */

const CACHE_NAME = 'ncepu-quiz-pwa-v1.0.5';

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

// 2. 激活事件 (清理旧缓存并接管控制权)
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

// 3. 网络请求拦截策略：Stale-While-Revalidate (优先高速本地缓存，后台静默拉取更新)
self.addEventListener('fetch', (event) => {
  // 仅处理 GET 请求与 http/https 协议
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);

  // 跨域外链字体等资源：若失败则降级
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // 无论本地是否有缓存，均尝试在后台发起网络请求进行更新 (Stale-While-Revalidate)
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      }).catch((err) => {
        // 网络不可用（离线状态）
        // 如果是单页页面导航，返回离线主页
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
        return null;
      });

      // 如果本地缓存命中，立刻返回本地缓存（实现 0ms 瞬间响应）；否则等待网络响应
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

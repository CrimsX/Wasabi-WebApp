'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1462db5fa7b5f1ac15a034f9fb95502f",
".git/config": "8650dd836982d93331e3f937e6fcfe65",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "edc18bb856426c6e4eda51266224e4af",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "fb8fcedc21d80472ee4b1a7f97b12817",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3941d982721c2ca39b0a8e332c2d6324",
".git/logs/refs/heads/main": "631cb97655b7589941730b5d2ee6b5af",
".git/logs/refs/heads/presentationtime": "b746bfcc58b89df7fed6084d2b4af6d0",
".git/logs/refs/heads/testing222": "2b3a6fcd5a710c0036a074a426d068ed",
".git/logs/refs/heads/thisisit": "f7dec6b3a80ea5105eaf64019bd2855e",
".git/logs/refs/heads/thisisrllyit": "73e1c48453db5b1f13531dae01318dbd",
".git/logs/refs/remotes/origin/HEAD": "631cb97655b7589941730b5d2ee6b5af",
".git/logs/refs/remotes/origin/presentationtime": "e71fe58770049e3188a84c7efcd9c3a1",
".git/logs/refs/remotes/origin/testing222": "d9bd09c6efcaa19f23d7543e75ad3de7",
".git/logs/refs/remotes/origin/thisisit": "c86f8a8a0825a5bdd5062753bdc4f04d",
".git/logs/refs/remotes/origin/thisisrllyit": "17cc81f15ffa3fbe3eeef1a69638b8d2",
".git/objects/0f/129145075a1da49fc9994ac32478c425ebfd4c": "7191179598d994d0f5a84b6c9b0f1a87",
".git/objects/0f/bcab770a60bd8a8c7aa9ab5971ec9e70bbec0e": "f7d7a92e0395e6ad6f0b12aad8930422",
".git/objects/1b/565d58f85656eae633c869e1c46b87cbb103aa": "71585a4cd6c033fb95d9668b2388946b",
".git/objects/1f/1e526abc5600037419f599c3a9994d9e9e6127": "c75dc330ca1832bd5dd76a2142099db2",
".git/objects/25/36cf271023e865aff3a8a59c337610d4672c98": "5d3db0766bd49bec2f7d14be9a0b6863",
".git/objects/30/2e406573fd1499b0d1dba75fda315de6dd0b2b": "9fede70cb471699d0e38cf2edba758f5",
".git/objects/35/539413761013ee40957e696f9e4de4b8d0d7f6": "f101df20f4f030c59d0b881ffd17e354",
".git/objects/36/6bf9c191014b677f7cf5623d43543355168210": "7157f3077830615c694b679d11edf9cf",
".git/objects/39/c849045302f9b026fdca0e6a823645d6c01085": "09b167e58fd0d449ab2ba0dd82e03c5f",
".git/objects/3b/8f3870b9a31b488e2646cee4bc0b57bd667d5b": "ad00dec2789bcd48f4b570bbc27bc109",
".git/objects/46/070d2015eb79c03db720fe61f361388708db5a": "4fbf525391b5bd87cc7d85d2f57f10f0",
".git/objects/4d/10134edf020dd6003f233aa7b84ac664862b33": "9f1ee487a4534cc98c5df579a7c44824",
".git/objects/4d/6d26937a58168fb4139fd9636ca0c8c623e78a": "087142b14b0dbc23711b33f4e879c828",
".git/objects/56/3093ef79b4255e2bc32b21b07e837409918c8f": "a78db4aa94a5349a5d8bd72ddeaa36b1",
".git/objects/6a/0682827bd8ad349ccf7fd7a8fe23dec9252dd1": "1c41e0b1aefd494dda1fcff2ed24772b",
".git/objects/6c/821cb7a4b3dd57822547dc32eec5fc48d34da7": "b4011b0167068345c299003004d0978e",
".git/objects/6f/79d25275cbc405cb8e7e3a39220b3e644d09ef": "da2abef092c7483a3c3ff1e963ca9bd2",
".git/objects/85/17649f966c791ba329652dcf81c08dae5c1f48": "866641212e9fc2f5869fd3792677096e",
".git/objects/8a/5af1bca2e433677a8470a7fd05ac4285e9c065": "d9913b9972958a4a983dfd33f07eec51",
".git/objects/8e/0d7cd319c8f6866affd0c89fe2bf0821ada497": "b6c71c2deef1c9d38c44f137ab29799d",
".git/objects/9b/c30b8c41c4c2cee9ac93b1ce6f0c4b7ac59ff6": "11501e455bf77187cdeb4ec73405d40e",
".git/objects/b0/5c8ce8381ad1872036ba841b14bda13f0ebc6f": "b0b9863747c256863e9c4a69ca8e5843",
".git/objects/bc/15616d593766fe6a7f5cb7447668d39642fcd9": "abd4bae2e2b13a0aacbc9d7c3ce1d64c",
".git/objects/cd/9b9f28b618eaa8dfd99b40d1338205dc763eab": "b7f3930cb95b154580877cb148eb07fa",
".git/objects/e5/a624395fc0600f73c8c876a5dff580c70fbb4e": "7402ec64d1f82aaa8426d5cba9f1d4a1",
".git/objects/ed/87fbda76999e1dbaa881b6f1790b454ba6f250": "36a9fd85dfe5b382e5bcb9e77cc47535",
".git/objects/fe/695416d6f464f808295490cdb447f963130015": "ab282a29cd45e3f6aa4fe433fda95232",
".git/objects/pack/pack-d9d47a0f539fb6b6cce72b7fbe8b517f5ec91528.idx": "555f1026334f97f0e1f8d98c2ba0d024",
".git/objects/pack/pack-d9d47a0f539fb6b6cce72b7fbe8b517f5ec91528.pack": "824d0fce1f65f3c02f5f80441b295066",
".git/packed-refs": "718c2acd1d2b11c21633d7294be612ba",
".git/refs/heads/main": "90e4816d0dfe83f2b7d73f2a5318a7f1",
".git/refs/heads/presentationtime": "25896b5bbf9530c38d634b3eebea64df",
".git/refs/heads/testing222": "17b8e4dca4018d59c8cfd75dd34ac376",
".git/refs/heads/thisisit": "a5d9783035f80de51e8b487692929003",
".git/refs/heads/thisisrllyit": "6649a16ffaba1a1f9866d759cd34c396",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/presentationtime": "25896b5bbf9530c38d634b3eebea64df",
".git/refs/remotes/origin/testing222": "17b8e4dca4018d59c8cfd75dd34ac376",
".git/refs/remotes/origin/thisisit": "a5d9783035f80de51e8b487692929003",
".git/refs/remotes/origin/thisisrllyit": "6649a16ffaba1a1f9866d759cd34c396",
"assets/AssetManifest.bin": "8daba4dbc898c6875baed238de488057",
"assets/AssetManifest.bin.json": "79f38ac596d2580e6908bd5e637ffe53",
"assets/AssetManifest.json": "98c4604ceaa396fb7c7cb1c10249a25b",
"assets/assets/DrawingImage.webp": "2348818429a218d4e5dfffa40bf73bbb",
"assets/assets/FileEdit.webp": "52a97afbb6652a59bc5d4715cf95efe7",
"assets/assets/Hi.png": "5fc84c116f45f0e9a452e4eef2899372",
"assets/assets/PowerpointImage.webp": "761048816db452b08a387a303b4cbfc5",
"assets/assets/Wasabi.png": "85b37b115f1a7ef8662090c8f9a04f6e",
"assets/assets/WasabiIcon.png": "b38dd20c545e2d538923cf73a47d589d",
"assets/assets/Welcome.png": "2eab2c215562d3da87c016362d81a516",
"assets/FontManifest.json": "7df10702a8c60a62e6694f43081d46e7",
"assets/fonts/MaterialIcons-Regular.otf": "bbd8483aa0b9ebdc0957927e56990376",
"assets/NOTICES": "a7b55f374530b21d32ec82367bee0c1d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "39e100c31980f4ec06b555d9c33e6c44",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "76bd55cc08e511bb603cc53003b81051",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.js.symbols": "a5abd9548c1ac52492fb83682355175c",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.js.symbols": "e6a058eeb908ce2c2c30d450cffb438a",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.js.symbols": "d10d5b9ecde9454f3b5e0574a3d4649c",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1f6668412a47eb0ea1c7aca66b8e2858",
"/": "1f6668412a47eb0ea1c7aca66b8e2858",
"main.dart.js": "6d2ed2ebc0769357b84b924651f96f6a",
"manifest.json": "e3653540279937c106d10c2f3fa0b1ba",
"version.json": "6dfbd941664e53f6173f53383139b86c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

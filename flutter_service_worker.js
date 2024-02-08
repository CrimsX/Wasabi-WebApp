'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/hooks/applypatch-msg.sample": "4e33b997d7d5d5274c56bbf61f0c0bf9",
".git/hooks/commit-msg.sample": "89cb67435d2c1b9503e32d599d72713c",
".git/hooks/post-update.sample": "be48e56d8b9f9108aa4ecb32dd12d435",
".git/hooks/pre-applypatch.sample": "1f6a74774ee63312b4ad8a8c6ec7f2e8",
".git/hooks/pre-commit.sample": "3ba41bb5b6fe126be0c04c17ceb564ff",
".git/hooks/pre-merge-commit.sample": "f9d3ac247a941cf41ceb86048c699cfe",
".git/hooks/pre-push.sample": "a5a56d58c7133331b00b520ea5548074",
".git/hooks/pre-receive.sample": "c5e60ee055ef7b920a10b2871b1790a2",
".git/hooks/push-to-checkout.sample": "d8204d74ffd9ca215d1687eaca1e9e5b",
".git/hooks/sendemail-validate.sample": "c4c26785acacb2553117cf802723d09f",
".git/hooks/update.sample": "edce28be0c66a0a19729dc76f8143916",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-rebase.sample": "0d4f0a0a63c6a1cbbf0a8b410b9e3c59",
".git/hooks/prepare-commit-msg.sample": "529551eb02ce07d5a84df03a8361e155",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/heads/main": "ba0b1d95d448464f58ab99df58946fb8",
".git/refs/heads/master": "45169d8e62921f5fac70c8c19df875b8",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "ba0b1d95d448464f58ab99df58946fb8",
".git/objects/pack/pack-1cf450f6ead1c8f92670d2bc39d5b779792a44f8.pack": "a8d77e2d327ccdb318742268a0443627",
".git/objects/pack/pack-1cf450f6ead1c8f92670d2bc39d5b779792a44f8.rev": "77729b6a04435dd9e2b470b4d8ccbc1f",
".git/objects/pack/pack-1cf450f6ead1c8f92670d2bc39d5b779792a44f8.idx": "2536cc0b887897f14362d1323f3d0e42",
".git/objects/af/3220e193a396795a9081ff15bfa3a3d7c36fb6": "03ccf9f264e1d700b1938d132320c5fb",
".git/objects/46/58d478058354b03ad6e9e48ea1c4ffe4bbbe4a": "f9fbcc6b7f26bf0b8da7d6af547cf8df",
".git/objects/6e/2976ab600e8bf2626f6db9c9015c4c7758a612": "8326580e69bfd03772e4f97d3da22d7b",
".git/objects/b6/677a6e1acbe2a854b2b01dbf0636dbd37f8a47": "b72c588236b260b408c9d4168b6204c0",
".git/objects/b5/64881a57631c97f6d050eb6dc1cd4285e8abfb": "4edc85e460cae2db414fb2f33da769ad",
".git/objects/f4/92dcbae2f260cc7875148cb3b48cc2da9f26a4": "3f13538b0059d2b216ca53d5fc73b916",
".git/objects/40/ae2a0da3349538a7d88ffffbd201f0099e6e59": "5cc8265f65d2f06af01ddcc77da89c31",
".git/objects/c6/644ff607920a5b9cfe9cd240bba8e071bf66da": "b35635f95f37b9bd34681b01e18d74d1",
".git/objects/a4/ac016d6bf41ccace5fc09ea9de4920d8b26834": "c03f845cf732f5d5131afc0baf8ae410",
".git/objects/c0/8881f006303d5fa86d96b0dbb0c5e69c32e191": "1167113467761f2ebf99bdd7ffaf1325",
".git/objects/2c/a784d5d9372a070e85becca00240fcd8adbfee": "7b14ee98c20bf9eb96d9ca2e6a207c38",
".git/objects/18/38c742b959586e73046cdd9003fce32a0a465b": "7bb795a1ab9a37d4bf15824a946cdff3",
".git/packed-refs": "b73594b3bd6cbf98a5ee0830967d7be2",
".git/logs/refs/remotes/origin/HEAD": "47c2396df0dcbb4f0b3c9ae7bc871f01",
".git/logs/refs/remotes/origin/main": "cff6aa306c5b058282b9c6f98313f0db",
".git/logs/refs/heads/main": "6ee6fb12d05fce474ed3a950db0f927b",
".git/logs/refs/heads/master": "080135ec59b5b201b89bcc7cd0950f02",
".git/logs/HEAD": "f939e614b433e6d552f5db8029b196d3",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/COMMIT_EDITMSG": "f0abbf5f4ff55dd8a804dd945eea4155",
".git/index": "d4952d5ea97611fdb1d5efc8ec8d353d",
".git/config": "5b603c2c0801a9ded3b79159fc38b404",
"README.md": "7d15f2491d49f8b10aea371f7e3e9660",
"assets/AssetManifest.bin": "c9fd737dc00a2dc7bd914f893e97b7eb",
"assets/AssetManifest.bin.json": "2ac1c01930b242df3c0a90612cfa41ab",
"assets/AssetManifest.json": "eb1f7e85e692076fa1c6359e4d1155c8",
"assets/FontManifest.json": "7df10702a8c60a62e6694f43081d46e7",
"assets/NOTICES": "1c84487c152a5d99393b5460f3af34a2",
"assets/assets/Hi.png": "5fc84c116f45f0e9a452e4eef2899372",
"assets/assets/Wasabi.png": "85b37b115f1a7ef8662090c8f9a04f6e",
"assets/assets/WasabiIcon.png": "b38dd20c545e2d538923cf73a47d589d",
"assets/assets/Welcome.png": "2eab2c215562d3da87c016362d81a516",
"assets/fonts/MaterialIcons-Regular.otf": "5c80f336950a0aa88316abfff172bab0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "76bd55cc08e511bb603cc53003b81051",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b1746b523b4764109f928873c28131f3",
"/": "b1746b523b4764109f928873c28131f3",
"main.dart.js": "9a1bca790532875d8a318947af7c3c4a",
"manifest.json": "46e453a3d558f5da6368a76c3e7ac593",
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

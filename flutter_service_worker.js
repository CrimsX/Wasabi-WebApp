'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/hooks/applypatch-msg.sample": "4e33b997d7d5d5274c56bbf61f0c0bf9",
".git/hooks/commit-msg.sample": "89cb67435d2c1b9503e32d599d72713c",
".git/hooks/post-update.sample": "be48e56d8b9f9108aa4ecb32dd12d435",
".git/hooks/pre-applypatch.sample": "1f6a74774ee63312b4ad8a8c6ec7f2e8",
".git/hooks/pre-commit.sample": "3e3b74d84228df7679307b963c138758",
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
".git/objects/pack/pack-29eee28aa0e85e2d36fe58e4171f2a9d8b47e144.pack": "316fd3e6ee93cd388b7dbd4d24ae7406",
".git/objects/pack/pack-29eee28aa0e85e2d36fe58e4171f2a9d8b47e144.rev": "7a92aa25c3a0c7441110d1bb4d581a96",
".git/objects/pack/pack-29eee28aa0e85e2d36fe58e4171f2a9d8b47e144.idx": "41f4fe40028ab973451d0c1688fef003",
".git/objects/e9/0fa6fd277e87c05830d9d7b892149f2ff27158": "f678acb17702031ae10dd2b5e66ff0e9",
".git/objects/d8/c1ef8a42f771e75d88849e1442ba82b843689c": "0de260fd603f5553748d66728b1aba44",
".git/objects/af/cb0ec6392aba292fce77aa8f17bb7c29000762": "9988be856de442f062daff3133a7b63c",
".git/objects/5e/6b60f7b230dd20ca8ff1040b06ec9956ccffa9": "620110ff68e6c00f02e35f8614b17916",
".git/objects/ec/2014af35ed561b830ce2e5ac6027d8d0368998": "7248242ec78d5e00cfc71f091deb495e",
".git/objects/6c/e978d5303da944d4c9800eee5ab7a14378e470": "92692c507cb4dfc60a8600a6b0f2ac3f",
".git/objects/be/b640bdb6f6936a00a58fc821c52a6af673a54f": "24c165a555645db2a1fdaa4c2ef8f5bf",
".git/objects/44/d81e2e7d14ffae796fea16bef99e36cc61a5bd": "1eb1c9e5905927bd1f650ab032b90230",
".git/objects/e6/367009f9367b674a5ea7d1cf8b7e884f65eaa6": "183d66d88747b0ebbbec06204d558b41",
".git/objects/6e/58d0eac85f77d7aa344a92ba8a472b3df35744": "b81c5c93daec1616e3fba4b6e4e10be2",
".git/objects/94/95d9c150711349082d54f48ae2e28fae30d619": "1c978bc9e027a50db4e352e691630563",
".git/objects/6a/ec198264978ec5dbc93cdd9efa33902e2fe87e": "743f2befdac4221a1302387a7ebf7a54",
".git/objects/52/433464958cf8c07b9e0f943c821bbf5c506737": "03db38bba8b7a504aaf44a934fa3cc92",
".git/objects/ac/8c0d74786dfd15be642e59941a3b61db92be3a": "e578a5fcfabd6c2efccc287d45d07889",
".git/refs/heads/2024-04-13": "c816a49ab5f8028b7f6675a377571108",
".git/refs/heads/main": "b13e089fcd1546a467991298cbe7f278",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/2024-04-13": "c816a49ab5f8028b7f6675a377571108",
".git/refs/remotes/origin/main": "b13e089fcd1546a467991298cbe7f278",
".git/packed-refs": "5fd499a7772d72ecb8012c9bfff8d625",
".git/logs/refs/remotes/origin/HEAD": "8262b87579c5eaae32a9d74ed3f68bc5",
".git/logs/refs/remotes/origin/2024-04-13": "de18ebe50c4e331d8ff207b24f5d1040",
".git/logs/refs/remotes/origin/main": "cedfa3d3a93500e9be6876bf8da40f8b",
".git/logs/refs/heads/main": "891731ab975bdb6b2dc0a06b94b51c58",
".git/logs/refs/heads/2024-04-13": "c897e49acd7307652bd86fae41d7de9d",
".git/logs/HEAD": "b1557448392131a36c77b67d21e67662",
".git/COMMIT_EDITMSG": "176ba23a2c8f4b06d9e9f2d73793b75a",
".git/config": "54506ddbcbfe08f7219cd97863b9d983",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/FETCH_HEAD": "ad2d2a628833177c0b31d261fc1d3ffa",
".git/ORIG_HEAD": "9c31b1f3b957ffaa8df40bc2d82a742d",
".git/index": "366da6ae13d159d9257579ad35fd98da",
"assets/AssetManifest.bin": "8daba4dbc898c6875baed238de488057",
"assets/AssetManifest.bin.json": "79f38ac596d2580e6908bd5e637ffe53",
"assets/AssetManifest.json": "98c4604ceaa396fb7c7cb1c10249a25b",
"assets/FontManifest.json": "7df10702a8c60a62e6694f43081d46e7",
"assets/assets/DrawingImage.webp": "2348818429a218d4e5dfffa40bf73bbb",
"assets/assets/FileEdit.webp": "52a97afbb6652a59bc5d4715cf95efe7",
"assets/assets/Hi.png": "5fc84c116f45f0e9a452e4eef2899372",
"assets/assets/PowerpointImage.webp": "761048816db452b08a387a303b4cbfc5",
"assets/assets/Wasabi.png": "85b37b115f1a7ef8662090c8f9a04f6e",
"assets/assets/WasabiIcon.png": "b38dd20c545e2d538923cf73a47d589d",
"assets/assets/Welcome.png": "2eab2c215562d3da87c016362d81a516",
"assets/fonts/MaterialIcons-Regular.otf": "6bc40c4bcdab45455400768d1b04e831",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "39e100c31980f4ec06b555d9c33e6c44",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "76bd55cc08e511bb603cc53003b81051",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/NOTICES": "7a7699ae5b6da5e33d7051fdab2559a5",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"manifest.json": "46e453a3d558f5da6368a76c3e7ac593",
"version.json": "6dfbd941664e53f6173f53383139b86c",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"index.html": "dc2c781f5938e87362ac4fc07bc5b943",
"/": "dc2c781f5938e87362ac4fc07bc5b943",
"main.dart.js": "e561924dcc9faebfaf189fcfa27bd284"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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

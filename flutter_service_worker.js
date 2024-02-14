'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"main.dart.js": "394e68275dbe39f4f7cb5ff425a7b488",
"version.json": "6dfbd941664e53f6173f53383139b86c",
"assets/assets/Wasabi.png": "85b37b115f1a7ef8662090c8f9a04f6e",
"assets/assets/WasabiIcon.png": "b38dd20c545e2d538923cf73a47d589d",
"assets/assets/Hi.png": "5fc84c116f45f0e9a452e4eef2899372",
"assets/assets/Welcome.png": "2eab2c215562d3da87c016362d81a516",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "76bd55cc08e511bb603cc53003b81051",
"assets/fonts/MaterialIcons-Regular.otf": "5c80f336950a0aa88316abfff172bab0",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.json": "eb1f7e85e692076fa1c6359e4d1155c8",
"assets/AssetManifest.bin": "c9fd737dc00a2dc7bd914f893e97b7eb",
"assets/AssetManifest.bin.json": "2ac1c01930b242df3c0a90612cfa41ab",
"assets/FontManifest.json": "7df10702a8c60a62e6694f43081d46e7",
"assets/NOTICES": "1c84487c152a5d99393b5460f3af34a2",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"manifest.json": "46e453a3d558f5da6368a76c3e7ac593",
".git/hooks/applypatch-msg.sample": "4e33b997d7d5d5274c56bbf61f0c0bf9",
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
".git/refs/heads/master": "d8e971355dfc666deddbaf1338e038fc",
".git/refs/remotes/origin/master": "92780150e4a1d6b67b0bb9ce59fcec1b",
".git/refs/remotes/origin/2024-02-13": "d8e971355dfc666deddbaf1338e038fc",
".git/objects/c8/e879d769e628010da7da46167c088fe8c1d28a": "92a48e56d128df318d8a0839179f6398",
".git/objects/90/627a910605792e003250af3f84fa60ba7de6a3": "c248d219a93c50a13232a4db237a051c",
".git/objects/74/b32e1083d67108882f351ae597ed09ec1dbd15": "ce96698b6b70ab4f8f74c40c61b7d53d",
".git/objects/d1/bd93b5fe244cfbf6c9d3a6e1b2656643bdc02f": "47fb099af496c22e3f32dcbd45bc014f",
".git/objects/af/901332cf971b2a371e9d79b8054d2c3e25ed79": "d708b1a9b79517ebb94ec11305ac6cb3",
".git/objects/af/3220e193a396795a9081ff15bfa3a3d7c36fb6": "03ccf9f264e1d700b1938d132320c5fb",
".git/objects/de/25bb4b1d1d893251191d941f09ffb57156e57b": "ca8502b753e1091ab3b2f2a35cfad7a1",
".git/objects/00/02b794cd5dca61c291fde0c14d900ecd22f014": "3bab0b2962cd86d810cf84ed3e3afb4e",
".git/objects/00/4a1bbb6c777eaa5bb9f3f4499b5798989c5f24": "201e22b095ea93d41e82582249a921c8",
".git/objects/00/344676ca8e0fecd4e77b19dfb0d24d095e55a9": "86398a89a939c22426b63b475d32e3d8",
".git/objects/c9/5b31613b20e1f8ac9d8d1f27f3182d0f2f14c5": "f70e90060cfb014ec171367df3c5f420",
".git/objects/7d/bac01f2d96c1c1246754f2a283c337c6efd299": "d9ee73cf7c94f8716d6beab6cfa5a8e7",
".git/objects/51/ce02f616fb521e8382c78157eab13e56d27677": "340d3da88d2d1bc1cc5894609c6382ae",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/91/9b58c60b938f7b1a8f2ff3113ec5941c60f752": "67e8d0260c418df036d0f4ca4469f99e",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/05/5e7a51216cb904db5fdfd7a92bc7ba987edc29": "5cc336bb8eb472368683c67f43bd1dcd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/10/8dc442a0c81ac22eba262c25caabc311afe8a8": "b98a7f418b9c8c778aaa8bceec6ec11d",
".git/objects/a7/e679d3d01038206006421e9d754294f0755ddc": "14cb567ae1cd7fe9f8be1df59be264db",
".git/objects/55/4b75eeca8f019e8ae8566fc9393c76e1a28943": "2710468dd823381178d8d07574bf5953",
".git/objects/99/dea97b678af159e8958bd5cc923741127af642": "8a8bd3faec48203a486ff6a7349a43cd",
".git/objects/30/36c9c1a0ddc867b617ca2d4efa16a43846f11d": "09f354a28053b72f66c63db2edf17e46",
".git/objects/b5/64881a57631c97f6d050eb6dc1cd4285e8abfb": "4edc85e460cae2db414fb2f33da769ad",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/8b/9afefa6cd990096a726eefc514873685daeb69": "c3657d622ae60d4342c49345d0aaf9a5",
".git/objects/7b/2bd4b9915b75b247887eb4d12be9915281deda": "29a2c7c606bc171c464e070f353dc25d",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/f4/92dcbae2f260cc7875148cb3b48cc2da9f26a4": "3f13538b0059d2b216ca53d5fc73b916",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/92/5ada374de32999bb83cb1372d0b56d4fff4db1": "02c30cd799f9fa98cbcec288b295f510",
".git/objects/27/f3dc87f5a69f401ac41c9cfa4080e882881159": "a8452a9f43cf5a810a612224fd44b2d3",
".git/objects/15/ed6da8436834e91c6477642891605f202b8345": "5f83b151b9710f2803877a6e15db50c8",
".git/objects/18/acada3f4b98931359328dc92792eb3eaf630fc": "6764e88b2b5ff7cd8e893a01241fff63",
".git/objects/fe/9f80041e1c2930dca9f18f6cee8d7c4c766ab2": "7a2aaa318b477f11dcafc909fc5c531b",
".git/objects/fc/1563e600de4e5b7e835f0dc91ba43f5f0a026b": "e08ab2efb158e8063205371d24dc7158",
".git/objects/c1/a751c31c03b6c836ac94bc3adc8fea0b22827d": "576f5d9c60e56fc3d0c8069bf8a443e1",
".git/objects/c1/7b1047fc4f1309c16b633e0b79bc6379238100": "218d8b469d3204240612406af87204a4",
".git/objects/79/7219624f86ddf20e9959a9b7273756a4d943d1": "316f59fe43c5338f8ab31a85d5d29880",
".git/COMMIT_EDITMSG": "4e5169b5e0b86795c1a44fce97fa4c78",
".git/logs/HEAD": "55f8df6a119936bddbdfa017cf721c15",
".git/logs/refs/heads/master": "de4bcdd368bd6579033e1a2db8fc8379",
".git/logs/refs/remotes/origin/master": "3a062f5ca12ee2dfe7802ddf4fb5cf75",
".git/logs/refs/remotes/origin/2024-02-13": "5b64ebb61d5488f3f957c912610fcbbb",
".git/index": "9091e3ca16cca7b0bbcb23dc410f7469",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/config": "ab7e09bec296f802265a447ee4201f43",
"index.html": "8f5f9452a356f08bf9f1d790066b4b22",
"/": "8f5f9452a356f08bf9f1d790066b4b22"};
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

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
".git/objects/e9/3ce2d1d1d423ba547811a8d33076f8ff18690d": "9df7f62ab1912ab87ff023a050aaa8d6",
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
".git/objects/52/c7ff80cbd7b3a499cb91241fe1125e5c799091": "dbc4162c5127babb514c8d4ba1cc05f6",
".git/objects/ac/8c0d74786dfd15be642e59941a3b61db92be3a": "e578a5fcfabd6c2efccc287d45d07889",
".git/objects/e7/8fe83cb55b4dc3c82f75435e333054b65022b5": "a2b54b99d9fba4aee0d4d2853e50aae3",
".git/objects/cd/d2b8cd6fbb65ddf8c79d27fbfbbc9d17333aab": "6ff00d4e4e70bec56dd4f8061180cde1",
".git/objects/99/6ffaefb394edd45cdae4d19f319137e9636afc": "49db135d749b16d925c3dea5e62d1559",
".git/objects/d0/d30e522fe030fb912214a5402374fdaee62243": "ebaa3777f222b8dbcc9f0bf10a6385c4",
".git/objects/d0/50493f8e7d04b3cc7b5333874f7d066b736186": "c7ed0f039b9974f27d0cfa3a15596268",
".git/objects/bb/e190631570ea05dc11605c8164a82f1a10af41": "3df3f0b14b77051442913563aa03c43d",
".git/objects/6d/2284d8d7ff786dd13147765dcbbf9c453c1126": "1c53efb95d80fd8c42d1a6eb3694b6ab",
".git/objects/25/a7226d93d581217da251bff54fbd08cbb4495f": "41e0fee7a97467414408a99ea282a978",
".git/objects/0c/9b3df2f7f2ed1c7b96538ca9ae5dde2321f346": "1b3fe2242d2750eb7973e619c1b2c170",
".git/objects/de/2d935bf3fb4300b60726cbf26b42ccf5ec5a79": "e6f154b9a7a92a56d2de19293678106f",
".git/objects/5f/f62220ee5cd2d05f10325b0ab9342c2144a727": "ae1b8399f560bee8a3532e705532cbdc",
".git/objects/1b/1bba1920dd73419e43c623af52eb35a80d54eb": "36333142d39b88398c8e12f70fea1d13",
".git/objects/5c/fdcad7884d5aa1dbe83855b83a4e919af64332": "4abd36cda853172b2aee7453808f5fc1",
".git/objects/81/28dd23318ae72fb51d0294f98b1b1b1e835ba7": "2abfad15ee4647b94263d478ef89fc05",
".git/objects/c5/974311ab3712deea12d783af46a7308532679f": "d63654d5b4d3c4e464c640d9f67e4b3b",
".git/objects/26/e6f48bdd0f77f817b1b6c02fd1049a7de41393": "a96476e876b091a7ed1059d4ff9e5a2d",
".git/objects/0d/aa67f56dfd0b997629d10a1c3a328caf01d368": "bd7e2943cffb61563417e1f41184d7fc",
".git/objects/29/603e93c2ef50cbd492813a603ab3dd854e02e6": "277429705e305e40d98f8a5f6408c4c9",
".git/objects/e4/ec6517125068fa25d56de59ff03314c98ac430": "f0f8660d517ab0524ceb55a555eea997",
".git/objects/e8/5e87dd29d45aa3ad248345287a6cad75e2312f": "c012abcf0927cdcaceca67b02f5795ee",
".git/objects/1e/880acfcda23188c3a7ab4cf7a06c4107a3c63a": "ff5a7aa14c71e5f2308442871d3d1612",
".git/objects/63/81bd8aabcdf771a66e227436fb252c13402a36": "1b4aad675a030f3b5d791179dbc498f4",
".git/objects/a0/2ce68eb835f28f9bb4082451b4f86735dc6240": "bb7be31b61d7b667fb7848041a27a47d",
".git/objects/d3/47d853fd5ea54890dc875a2e846ad54f91c3ea": "3ce2011c89f65c3d99377e6dd6edec8e",
".git/objects/73/57370de50bde8bca24edbfa7bc7beec5172acf": "18184c51fc04c142a46c9ba7fb24f958",
".git/objects/a7/31527d5922948f6767cd54c0ce34794fd8d0c6": "78bada774d07276dd58f3b942e2738b6",
".git/objects/21/72c18851365c4a7dbd7739362973eec3812bf6": "855e4718488101b08d7db13815348b73",
".git/objects/d4/a4847bedba2f70135e88501ef7b09c46539d19": "11fdb23a5a981dbc5f47288a29f2127b",
".git/objects/e5/e8b1b42438afb62c725cb9ed3c86f781665faa": "5a6aa768c0306f5d847f3326d801e0a0",
".git/objects/9e/1805510b5c02a123e7867e6d86eae314a94cda": "81ebbec78c1160ecc60664b766269f8c",
".git/objects/23/ae6c57777e698e88087dbb2a50109742107f64": "9ae4d980f37891b6348e6d74f8f95781",
".git/objects/47/87d3e619c9f4b2006921d36823787a5eb4d95f": "570fcc69d2eeb1d79bd2494132d573be",
".git/objects/82/77ebc20609aaf2a01206e0807f98020c7fcba4": "c2092b04d4568c601529ce425a0b6c9d",
".git/objects/41/feb3d0cf3832a2aa470cefa2a0364ea9ce339d": "8516d594bd1308f92125ff3030e81ca2",
".git/objects/22/b56caa77486ff5e959baaa50775aafdd4bf39f": "1f05915f22363af8af87b46d0d1c3b2c",
".git/objects/ca/d42d09166dde2a633316f4ffda87dba9c6c3c5": "4d243c1ba4d05e7bde5579531b1b9d14",
".git/objects/b5/aec8908f33584495cb3db8d288388f20e66909": "6f22a1650cc5802bdb5b6721c3a1e74e",
".git/objects/f0/a846cf0a96a40c4f1bdf2eef7dba15dab4b3da": "08b9589c8837c687332fda213b63f1d3",
".git/objects/3a/ec5bf62df9052ee699791a4b4f6bb99aeb28c8": "a5efa3695bc554d8b5155601ef51d25d",
".git/objects/65/83519534813a16221d4e0457e9cccae1844b0d": "09e13100af7de17f48fb671f2654b63f",
".git/objects/8b/af1d9e9dbf4c4ff9797d3fab6a74d9f933215d": "be9c33478052177536fb158940c78b54",
".git/objects/ba/e652d47aa73c048d6a0bc7353bc205a81a9290": "52713f0ace2b7574a15092a4fefb8db7",
".git/refs/heads/2024-04-13": "c816a49ab5f8028b7f6675a377571108",
".git/refs/heads/profileMode": "1dcce2d76fc9e38b5222c8a12443d5a2",
".git/refs/heads/main": "9e97fc044a2c0100c4cf137b00cad001",
".git/refs/heads/dev": "41e05422cefc7ee494c3a558f0ac9bb7",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/2024-04-13": "c816a49ab5f8028b7f6675a377571108",
".git/refs/remotes/origin/profileMode": "1dcce2d76fc9e38b5222c8a12443d5a2",
".git/refs/remotes/origin/main": "9e97fc044a2c0100c4cf137b00cad001",
".git/refs/remotes/origin/dev": "41e05422cefc7ee494c3a558f0ac9bb7",
".git/packed-refs": "5fd499a7772d72ecb8012c9bfff8d625",
".git/logs/refs/remotes/origin/HEAD": "8262b87579c5eaae32a9d74ed3f68bc5",
".git/logs/refs/remotes/origin/2024-04-13": "de18ebe50c4e331d8ff207b24f5d1040",
".git/logs/refs/remotes/origin/main": "bf8094c7faa7018d791da73a6079ac64",
".git/logs/refs/remotes/origin/profileMode": "c92c92fd415889d2f30ba415ee36bccc",
".git/logs/refs/remotes/origin/dev": "dda164cc1ae8b4f29154086daa62fbf7",
".git/logs/refs/heads/main": "5e4712913b6b576395c50ab0e38e53e8",
".git/logs/refs/heads/2024-04-13": "c897e49acd7307652bd86fae41d7de9d",
".git/logs/refs/heads/profileMode": "527e92b0374f9849ef81376e131e59a5",
".git/logs/refs/heads/dev": "c2a9b3d0ec55ffc99387916eaeb1c2f1",
".git/logs/HEAD": "f5d8ba118adb0f941f57f1992c210367",
".git/COMMIT_EDITMSG": "18adf6abd6acc8e7fbaa883eeb8aa28d",
".git/FETCH_HEAD": "0b064edd60d8512596076ad1ca2a20c2",
".git/ORIG_HEAD": "b13e089fcd1546a467991298cbe7f278",
".git/HEAD": "f01ada5d23bdfc8d97a8a8b3d70490c2",
".git/config": "76778205cc40658a689297d89a27e0c6",
".git/index": "038b03cfd8ec91440a3d3800afe22e07",
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
"main.dart.js": "1dd24f5f159ba316a80698d520e9d8b3",
"index.html": "15216cd6e7923ecc2f1dc8fa23898dc1",
"/": "15216cd6e7923ecc2f1dc8fa23898dc1"};
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

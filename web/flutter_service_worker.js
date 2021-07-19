'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "383e625d4ebdf0687945b0e0fd41ac56",
"index.html": "b3e1cd34d9688b258146acf02c3473be",
"/": "b3e1cd34d9688b258146acf02c3473be",
"main.dart.js": "5df6e26b941e42edc1f27d2835644602",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6203606eeab191c3193e6ec54f15bf84",
"assets/AssetManifest.json": "a438047fdfeb3768aa8a54f2a114b471",
"assets/NOTICES": "31fc22be1a0e95a60adefa49022e2524",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/video/Butterfly-209.mp4": "7b38560e7dbf868e58e29984509f2f96",
"assets/assets/images/check_check.jpeg": "f13564521f96fb92bdc742e225030d29",
"assets/assets/images/%25EC%25B2%25B4%25ED%2581%25AC%25EC%25B2%25B4%25ED%2581%25AC-%25EC%2588%2598%25ED%2595%25991-2.jpeg": "5cb32de0bc208e0a5b25fd06e868fe21",
"assets/assets/images/completed2.png": "08ce46eb11f508d6f8b9c2d060a93f26",
"assets/assets/images/%25EC%25B2%25B4%25ED%2581%25AC%25EC%25B2%25B4%25ED%2581%25AC-%25EC%2588%2598%25ED%2595%25991-1.jpeg": "264d79cbbef41a821f0de50db79013b4",
"assets/assets/images/completed.png": "9c787150380eab5d534eee9ca2aa1cd9",
"assets/assets/images/bag01.png": "99a5723b9584b55d754e8c0b8dd82ce3",
"assets/assets/images/thumbnail.jpg": "e28510c75775841fc0bc3052bf99861c",
"assets/assets/images/concept_doc_04.png": "ec5541ecaeb078ae168a090247718a11",
"assets/assets/images/concept_doc_01.png": "89db975dbfdae485d4496df89db00201",
"assets/assets/images/concept_doc_03.png": "251b5668214bdcda66c8244e2777e0b7",
"assets/assets/images/concept_doc_02.png": "4298ca45c7a16bcdf8771431776d0bc5",
"assets/assets/json/bookmark_info.json": "7f8fb00e21551b6e46a3e26e4ae9a28d",
"assets/assets/json/review_note_info.json": "1369f090b29d713bbc0b7ea9186d9072",
"assets/assets/json/question_info.json": "6cde93bc8d3189f20936f236b2b86de3",
"assets/assets/json/bundle_info2.json": "037ede1004cb7b4f2b68d6fe0465df04",
"assets/assets/json/comment_info.json": "f5ac743e85ee76732d52ad590e8dfcbb",
"assets/assets/json/book_1001.json": "dcb61a60b327b69e231c94d121392d3f",
"assets/assets/json/book_info.json": "cb392c8ffb14b8086d2b8bc53e9479cc",
"assets/assets/json/bundle_info.json": "eb67be7a84c4dab688862e6325e1344f",
"assets/assets/json/book_1000.json": "7a668c11665d90c97ff876c20d74e1da",
"assets/assets/quest/q0002_05.jpg": "c648536d47357c8f13a1723bb8d78d45",
"assets/assets/quest/q0002_04.jpg": "6787f49fcf9d81e1d2ea1175f117f338",
"assets/assets/quest/q0002_03.jpg": "96266eeaa155bcd9c63d3af2933e44c2",
"assets/assets/quest/q0002_02.jpg": "7b038c6c93c96f0a998a0ec991c7d370",
"assets/assets/quest/q0002_01.jpg": "85b40546f44c8aa128e2c68c9ce6f538",
"assets/assets/quest/num4.jpg": "27e54851de69e54fc8c41292b0e5b60b",
"assets/assets/quest/num5.jpg": "137024395a147725b5752419480de4cb",
"assets/assets/quest/num2.jpg": "55e2a200116b9e4e3d6dbd6596f01a3f",
"assets/assets/quest/q0002.jpg": "374efee1f2a8dd1f50121a44331ed38d",
"assets/assets/quest/q0003.jpg": "ec6e1c3e3b65e656acbc743ef952b995",
"assets/assets/quest/num3.jpg": "b8e15e6615968c956f6e5cc073b6e1eb",
"assets/assets/quest/num1.jpg": "4f9b7d3dba480468b93cd6d8cfd7d4ae",
"assets/assets/quest/q0001.jpg": "0c8133da6eb784750cbbcbaa2c7b2917",
"assets/assets/quest/a0001.jpg": "14de2929b68b28530113ae93d5c0baa3",
"assets/assets/quest/q0003_04.jpg": "7c52b595efaa7356f1c8b2c25244d494",
"assets/assets/quest/a0002.jpg": "d92a7aedb1a6fabf216389972cf00886",
"assets/assets/quest/q0003_01.jpg": "e390d074846eca9585ead0e6c39e0af2",
"assets/assets/quest/q0003_02.jpg": "9ff87e841dc17ff8780e6d53ab8e1395",
"assets/assets/quest/q0003_03.jpg": "275dc09c44f7168fc18326f8f3626f8e",
"assets/assets/quest/c0001.jpg": "a4b1af3343b1c9776a67d946a8b9bd23",
"assets/assets/quest/c0003.jpg": "f127f528131e3677881da19ddb8a253e",
"assets/assets/quest/c0002.jpg": "0d3a5ef3dfa429ad4881c8d0c636af92"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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

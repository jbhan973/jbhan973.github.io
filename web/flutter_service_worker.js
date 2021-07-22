'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "383e625d4ebdf0687945b0e0fd41ac56",
"index.html": "81d323faca4f4d6dfeb075db983ecb08",
"/": "81d323faca4f4d6dfeb075db983ecb08",
"main.dart.js": "2faa9b3aa173a5dca4efbab105486eed",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6203606eeab191c3193e6ec54f15bf84",
"assets/AssetManifest.json": "f04aea3a99c79cbd03cebfde5e5ac309",
"assets/NOTICES": "fb6cd879cbe56ab7cb9514b0d5b06976",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/video/Butterfly-209.mp4": "7b38560e7dbf868e58e29984509f2f96",
"assets/assets/images/book_cover_1002.jpeg": "f8e9c6373ea8c012a3f17a621ba6cca3",
"assets/assets/images/check_check.jpeg": "f13564521f96fb92bdc742e225030d29",
"assets/assets/images/completed2.png": "08ce46eb11f508d6f8b9c2d060a93f26",
"assets/assets/images/book_cover_1000.jpeg": "264d79cbbef41a821f0de50db79013b4",
"assets/assets/images/completed.png": "9c787150380eab5d534eee9ca2aa1cd9",
"assets/assets/images/bag01.png": "99a5723b9584b55d754e8c0b8dd82ce3",
"assets/assets/images/thumbnail.jpg": "e28510c75775841fc0bc3052bf99861c",
"assets/assets/images/book_cover_1001.jpeg": "5cb32de0bc208e0a5b25fd06e868fe21",
"assets/assets/images/concept_doc_04.png": "ec5541ecaeb078ae168a090247718a11",
"assets/assets/images/book_cover_1006.jpeg": "e889f67e728260bdcf856811bfcc75b5",
"assets/assets/images/concept_doc_01.png": "89db975dbfdae485d4496df89db00201",
"assets/assets/images/concept_doc_03.png": "251b5668214bdcda66c8244e2777e0b7",
"assets/assets/images/concept_doc_02.png": "4298ca45c7a16bcdf8771431776d0bc5",
"assets/assets/json/bookmark_info.json": "7f8fb00e21551b6e46a3e26e4ae9a28d",
"assets/assets/json/book_1003.json": "ac8ae054fc4ccdd075d02be2b78ce99b",
"assets/assets/json/book_1002.json": "c0f44690c2ec6ab22c9960f0c6c57e5f",
"assets/assets/json/review_note_info.json": "1369f090b29d713bbc0b7ea9186d9072",
"assets/assets/json/question_info.json": "6cde93bc8d3189f20936f236b2b86de3",
"assets/assets/json/bundle_info2.json": "54733f1fa12f753d1dd6e3d338579c02",
"assets/assets/json/book_1009.json": "1ceb62d85a6d57ccd884244ab9ae6f37",
"assets/assets/json/book_1005.json": "2e4a5ff8a5b077c721c1b7039240d69d",
"assets/assets/json/book_1004.json": "134d14f6aab41f5b9086335765ad8012",
"assets/assets/json/book_1008.json": "8c67d6f006406d1331246bf332786860",
"assets/assets/json/book_1007.json": "59088bea8069281a2b743d573da086f7",
"assets/assets/json/comment_info.json": "f5ac743e85ee76732d52ad590e8dfcbb",
"assets/assets/json/book_1006.json": "e8ee58872f99cc9fe6e1d984d1f477f3",
"assets/assets/json/book_1001.json": "08f61c50d8fe5d39d824e97248a4116b",
"assets/assets/json/book_info.json": "cb392c8ffb14b8086d2b8bc53e9479cc",
"assets/assets/json/bundle_info.json": "eb67be7a84c4dab688862e6325e1344f",
"assets/assets/json/question_info2.json": "06fe74bafb110dd13709a7fea8f8e401",
"assets/assets/json/book_1000.json": "670ff25859fc6ed0198e9509c180a486",
"assets/assets/quest/q0002_05.jpg": "0946b2ac6b89a52b98c01de631dd33f0",
"assets/assets/quest/q0002_04.jpg": "a67b72bc05e5bcd804db8ca1c43bdc35",
"assets/assets/quest/q0002_03.jpg": "4839eddcfcbd6a5cd487074a5958615f",
"assets/assets/quest/q0002_02.jpg": "80b3f8d8384daa01c8be1925af17db15",
"assets/assets/quest/q0002_01.jpg": "a8d926f1b63476a7efe0ac679ef6e7ba",
"assets/assets/quest/num4.jpg": "49ae4756b87ccbeb93d81400ed6c6404",
"assets/assets/quest/q0004.jpg": "8d90b798e184450eaf85b9e91a118156",
"assets/assets/quest/q0005.jpg": "3fb8ac1095d045f9a2c2134a0a085191",
"assets/assets/quest/num5.jpg": "3ba50e43c48311b5655291d9f99e5fad",
"assets/assets/quest/q0004_04.jpg": "528b8e577b48e7c1b469666ca32c1699",
"assets/assets/quest/q0004_05.jpg": "c93a27679c2a8580ed1cfd63d6e2a0cf",
"assets/assets/quest/num2.jpg": "5e4429a4adb971ba535139726ddbe5a1",
"assets/assets/quest/q0004_01.jpg": "b6af7fc6dbc41cc063cf048ce18251de",
"assets/assets/quest/q0002.jpg": "913408b4f983c6cd67f82e5f970645f0",
"assets/assets/quest/q0003.jpg": "2bd916c17f662ce94a77d63fc9457532",
"assets/assets/quest/num3.jpg": "f3eab9e04bc3acf9e64bcc4fba0c4867",
"assets/assets/quest/num1.jpg": "73bfc5e0ca2c65cce72439163d0701d0",
"assets/assets/quest/q0004_02.jpg": "bc338622b6e52f415af416281a6d9f6c",
"assets/assets/quest/q0001.jpg": "54c8e57ca0358010f81fc7d1f995e389",
"assets/assets/quest/q0004_03.jpg": "8844e509fe473ef40a8f77bfdefd621f",
"assets/assets/quest/a0001.jpg": "14de2929b68b28530113ae93d5c0baa3",
"assets/assets/quest/q0003_04.jpg": "091155a2f9a1cee39b257771c7cc7560",
"assets/assets/quest/a0002.jpg": "d92a7aedb1a6fabf216389972cf00886",
"assets/assets/quest/q0003_05.jpg": "45b4426aded00168e5ec654b8e4bb7d7",
"assets/assets/quest/q0003_01.jpg": "0a14c0f6827f65506ac1c41ec28efb24",
"assets/assets/quest/q0003_02.jpg": "3738a6812c89d7ce3b754b1cf2664744",
"assets/assets/quest/q0003_03.jpg": "8e9a287b2aa47d6a53bcffe10f077f4e",
"assets/assets/quest/q0005_05.jpg": "16a88f6e9b14ac54c5f0cf9dfb78407c",
"assets/assets/quest/q0005_04.jpg": "af038cd10b932fe0fce9fc9feab75ab1",
"assets/assets/quest/c0005.jpg": "6dc013d3575f98b851cf00d90d20c551",
"assets/assets/quest/c0004.jpg": "cb634d584050bf47e8d3f3851ee1b922",
"assets/assets/quest/q0005_03.jpg": "6cf8b08db95c9326913643cb9d85b7db",
"assets/assets/quest/q0005_02.jpg": "1576aa80fc62d00da6ad8dcb4b52d656",
"assets/assets/quest/c0001.jpg": "b53cbf5f8a11c979f93f557f5b83b916",
"assets/assets/quest/c0003.jpg": "e9cfca326f76e3aa714be6241eec5e16",
"assets/assets/quest/q0005_01.jpg": "d3ba34fa83783b82314f338b20480fc9",
"assets/assets/quest/c0002.jpg": "da87c66fcd5ee3d1fbe6fdecce7ce39a"
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

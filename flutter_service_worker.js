'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "687052d11dc13e40a4414d00f7f2392a",
"assets/assets/fonts/Cairo-Regular.ttf": "81b37df3b28d397659607391993eef22",
"assets/assets/fonts/Domine-Regular.ttf": "352a64eaa5a69623af14fb603b9729c1",
"assets/assets/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/images/appLogo.jpg": "e4a3567e4e58b12b9b80443f69fbd92a",
"assets/assets/images/bg.png": "c9890157ebabe037e63c1f93adaa1de6",
"assets/assets/images/bottom1.png": "6b84f28383721d9658f43202fc05df65",
"assets/assets/images/bottom2.png": "d75870ab4305146f8f4098192422a4d2",
"assets/assets/images/carpenter.png": "09f97c11d4f96d1ae0135e62ea395d5e",
"assets/assets/images/cctv-camera.png": "81ecd4e1a8a7ee1e37d602e223322e82",
"assets/assets/images/Electrician-pana.png": "538fcae29c94d9071c4e7cbf3ddfd351",
"assets/assets/images/female.png": "6271e22b5b8667c4579188f26123d0b7",
"assets/assets/images/fix.png": "eb34be23cf26cc1a120c71dbc0737d0e",
"assets/assets/images/gender.png": "8c14d925f8380c2d3e198c7bd6ef12be",
"assets/assets/images/lang.png": "e88e4c885a565d0398139a3a48692e93",
"assets/assets/images/main.png": "46df70a0eca969687b93be00e1840d16",
"assets/assets/images/Maintenance-amico.png": "ea9b108821e9a4ca1ce4307fba825da3",
"assets/assets/images/Maintenance-cuate.png": "ad77ec7aa2b30eff084a25b2ac7bd396",
"assets/assets/images/maintenance.png": "0f63fa61424a1a09d93d40835b243209",
"assets/assets/images/pesticide.png": "f612c936a6ac3adb49e394891dc5ea1e",
"assets/assets/images/plumbing.png": "25f5852c4917fe5f37c3c7931ae5207f",
"assets/assets/images/profile1.png": "dc5161dd5e36744d184e0b98e97d31ba",
"assets/assets/images/roller.png": "3a191865c2eb742ccd6ed6920e99074a",
"assets/assets/images/salon.png": "0a80711db063acf504e70e1c61c40bd1",
"assets/assets/images/smarthome.png": "3500c2506277d6538b9f1523301e64d5",
"assets/assets/images/top1.png": "b080bce9f5b1ea61f79200807d3d154d",
"assets/assets/images/top2.png": "5ba82c2d5a07482a351172f7b5ebcfb7",
"assets/assets/images/uae.png": "4d6f98d355549cbdd2567acc87590827",
"assets/assets/images/usa.png": "2b0061019fa8306c4c8480b24a9dcb98",
"assets/assets/lottie/book.json": "85b2802d33d04eb7c7450097a8c7ef49",
"assets/assets/lottie/category.json": "960f9430d88e1f777b6898b2146128b6",
"assets/assets/lottie/coupon.json": "a94172b847b9357d5b0e17d33cb2781f",
"assets/assets/lottie/empty.json": "8eb6f0ac6614e38cf2cb8f66627ea08b",
"assets/assets/lottie/error.json": "df9177972f44a8c3973886df803270fa",
"assets/assets/photos/black-white.png": "76034a6cc78698b77e865576d83eb29c",
"assets/assets/photos/colored.png": "be067a00205b13aada9614a82941c95d",
"assets/assets/photos/mobile.png": "fab24dcd0d37409161a786d89cce75a3",
"assets/assets/projects/drfix.png": "87966d8fda78a25c2cc97c9bbb8807fa",
"assets/assets/projects/drfix2.png": "d64f63907b246fcd434637c9cf4ed327",
"assets/assets/projects/fix.png": "eb34be23cf26cc1a120c71dbc0737d0e",
"assets/assets/projects/Horoscope.png": "21363d5e5a480c885cb407638c608a0c",
"assets/assets/projects/roz.png": "7e05cb4d1e62b4c46ac4f2d3482c5b09",
"assets/assets/projects/roz2.png": "266c6c98da3c7faec7ad127b653943c9",
"assets/assets/projects/rozlogo.png": "684cf4a7fdbcb41bf685a39fce754f16",
"assets/assets/projects/thabet.png": "2fa904cff519e253cebfd2c31d8d4f93",
"assets/assets/services/app.png": "9d2da88edb7f550ef24874b306b4ae12",
"assets/assets/services/blog.png": "5e1cbb2c67e2b8ea9ae4bcce0705d2a4",
"assets/assets/services/fiverr.png": "9d4018924e1f0e983a86e7eaf8a0958b",
"assets/assets/services/open.png": "4a5996597d32b06d91183f0860c29aab",
"assets/assets/services/open_b.png": "b65517dd1a07922b014409bb8dcb1e81",
"assets/assets/services/rapid.png": "8d3ff9fbdddae77403af46662f011ee8",
"assets/assets/services/ui.png": "3cf727247752b730a05f51fe0177036f",
"assets/assets/work/cui.png": "2ad17cf0e7ea5781913c46eb4bf931d4",
"assets/assets/work/dsc.png": "5b79091bf971dac166fcbf0be88a1ff4",
"assets/assets/work/flutterIsl.png": "044266d20dde62075e6be5a3b6af4c89",
"assets/assets/work/st.png": "2bbc9cccac2cbf368da02c124d4cd70f",
"assets/FontManifest.json": "70d12d5a8d28714bc4f3319687fc7f4b",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "e7d9b52a1c2d21a0e3732260a9d2a0fe",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d1de3b93bc3c1b1ae4690d17032dab37",
"/": "d1de3b93bc3c1b1ae4690d17032dab37",
"main.dart.js": "abbbeaf15950465e5f5102da38fc3082",
"manifest.json": "c64448a5405e4fc3398e51a6b4a9357f",
"version.json": "e7437488864d293c38e49435cdf20f75"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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

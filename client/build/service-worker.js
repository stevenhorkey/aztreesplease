"use strict";var precacheConfig=[["/aztreesplease/index.html","576b67519add1252b9db2cca53946443"],["/aztreesplease/static/css/main.17466266.css","dfb56abea6b14455c6c93ea66bd9785a"],["/aztreesplease/static/js/main.f10a7ebd.js","6856a917e57ab58c9a05f9c55c20d185"],["/aztreesplease/static/media/adrian.ac1f89f3.png","ac1f89f3a9870c0c0dfd0e32af7604c4"],["/aztreesplease/static/media/amanda.39921686.png","3992168610b1742ec7361742eede7f6b"],["/aztreesplease/static/media/azbanner.49f8d77e.jpg","49f8d77ead3eb987051dcd6dbe8b1112"],["/aztreesplease/static/media/background-collage.e0e88f77.jpg","e0e88f777f4c6ec427d27e5fcf7f9a8c"],["/aztreesplease/static/media/donate-button.b7a59cb2.png","b7a59cb2ddc60c32cdb8b4c14f5bfd77"],["/aztreesplease/static/media/ga.0034d575.png","0034d575164fbc84862f0c3fae423d56"],["/aztreesplease/static/media/me&pig.3d41b724.jpg","3d41b7241ad8e9b5f851cb83ea869f8c"],["/aztreesplease/static/media/soil.c0076c09.jpg","c0076c09ad3ee6b61648f0e53e08ae60"],["/aztreesplease/static/media/tp-garden.fbaec75d.jpg","fbaec75d9e599304ae890bf55c51b55e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/aztreesplease/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});
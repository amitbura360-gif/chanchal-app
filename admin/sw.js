const CACHE_NAME = "chanchal-admin-v1";

const FILES = [
"./",
"./index.html",
"./manifest.json",
"./icon.svg"
];

self.addEventListener(
"install",
function(event){

```
    event.waitUntil(

        caches.open(CACHE_NAME)
        .then(function(cache){

            return cache.addAll(FILES);

        })

    );

    self.skipWaiting();

}
```

);

self.addEventListener(
"activate",
function(event){

```
    event.waitUntil(

        caches.keys()
        .then(function(names){

            return Promise.all(

                names.map(function(name){

                    if(name !== CACHE_NAME){

                        return caches.delete(name);

                    }

                })

            );

        })

    );

    self.clients.claim();

}
```

);

self.addEventListener(
"fetch",
function(event){

```
    event.respondWith(

        fetch(event.request)
        .catch(function(){

            return caches.match(
                event.request
            );

        })

    );

}
```

);

importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

firebase.initializeApp({
apiKey: "AIzaSyCNSUPfxSqJ1XwhIP5o-OHmVbGxs9DEyoI",
authDomain: "myapp-7f265.firebaseapp.com",
databaseURL: "https://myapp-7f265-default-rtdb.firebaseio.com",
projectId: "myapp-7f265",
storageBucket: "myapp-7f265.firebasestorage.app",
messagingSenderId: "307312975781",
appId: "1:307312975781:web:44df62abc416ba7f68924c"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
console.log("Background message received:", payload);

const notificationTitle =
payload.notification?.title || "Chanchal";

const notificationOptions = {
body:
payload.notification?.body ||
"You have a new message",
icon: "/customer/icon.svg",
data: payload.data || {}
};

self.registration.showNotification(
notificationTitle,
notificationOptions
);
});

self.addEventListener("notificationclick", function(event) {
event.notification.close();

const targetUrl =
event.notification.data?.url ||
"/customer/";

event.waitUntil(
clients.matchAll({
type: "window",
includeUncontrolled: true
}).then(function(clientList) {

```
  for (const client of clientList) {
    if ("focus" in client) {
      client.navigate(targetUrl);
      return client.focus();
    }
  }

  if (clients.openWindow) {
    return clients.openWindow(targetUrl);
  }

})
```

);
});

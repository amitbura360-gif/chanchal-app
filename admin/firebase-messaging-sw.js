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

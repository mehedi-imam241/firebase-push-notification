importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyCMdM12WcjFhzsXRlPo5I1XekBShqxBmpM",

  authDomain: "push-notification-d4446.firebaseapp.com",

  projectId: "push-notification-d4446",

  storageBucket: "push-notification-d4446.appspot.com",

  messagingSenderId: "691367783896",

  appId: "1:691367783896:web:e268f972465e1fac6916ad",

  measurementId: "G-F2ZX6J2LLC",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log("Received background message ", payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);

  console.log("ami vat khai");
});

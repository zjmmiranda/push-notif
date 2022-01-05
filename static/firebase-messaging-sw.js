
importScripts(
  'https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js'
)
importScripts(
  'https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js'
)
firebase.initializeApp({"apiKey":"AIzaSyBx_RydFNfcS4aJYjO1eiz7gIWJHXyh4ng","authDomain":"push-notif-14198.firebaseapp.com","projectId":"push-notif-14198","storageBucket":"push-notif-14198.appspot.com","messagingSenderId":"728336722180","appId":"1:728336722180:web:4bd63fefddcfeead600851","measurementId":"G-4907MGSZM9"})

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging()

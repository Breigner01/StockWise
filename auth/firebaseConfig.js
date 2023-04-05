// firebaseConfig.js

const admin = require("firebase-admin");
const { initializeApp } = require("firebase/app");
const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");
const serviceAccount = require("/Users/gabriel/Downloads/warehouse-app-abe08-firebase-adminsdk-nbtit-81f28ab8b2.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

// Load environment variables
require("dotenv").config();
console.log(process.env.FIREBASE_API_KEY);
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// // Use the auth instance for authentication operations
// signInWithEmailAndPassword(auth, "a@a.com", "concordia")
//     .then((userCredential) => {
//         // Signed in
//         var user = userCredential.user;
//         console.log(user);
//         // ...
//     })
//     .catch((error) => {
//         var errorCode = error.code;
//         var errorMessage = error.message;
//     });

module.exports = { auth, admin /* your admin instance */ };

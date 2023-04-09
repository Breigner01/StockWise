import * as admin from "firebase-admin";
require('dotenv').config();

// Decode env base64 key
const firebaseKey64 = process.env.FIREBASE_AUTH;
const firebaseKey = Buffer.from(firebaseKey64, 'base64').toString('utf-8');
const serviceAccount = JSON.parse(firebaseKey);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

export { admin };
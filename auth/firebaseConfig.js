

// firebaseConfig.js

const admin = require("firebase-admin");
const serviceAccount = require("/Users/gabriel/Downloads/warehouse-app-abe08-firebase-adminsdk-nbtit-81f28ab8b2.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = {
  admin,
};

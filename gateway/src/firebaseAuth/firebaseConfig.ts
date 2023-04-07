import * as admin from "firebase-admin";
const serviceAccount = require("./firebaseKeys.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

export { admin };
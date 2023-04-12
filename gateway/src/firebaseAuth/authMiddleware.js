import { admin } from './firebaseConfig.js';

const authMiddleware = (req, res, next) => {
  const token =
    req.headers.authorization && req.headers.authorization.split(' ')[1];
  if (!token) return res.status(401).send('Unauthorized');
  admin
    .auth()
    .verifyIdToken(token)
    .then((decodedToken) => {
      // User token is valid
      next();
    })
    .catch((error) => {
      res.status(401).send('Unauthorized');
    });
};

export default authMiddleware;

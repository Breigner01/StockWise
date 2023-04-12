import { Request, Response, NextFunction } from 'express';
import { admin } from './firebaseConfig';

const authMiddleware = (req: Request, res: Response, next: NextFunction): Response | void => {
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

module.exports = authMiddleware;

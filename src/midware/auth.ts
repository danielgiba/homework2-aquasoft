import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

//to verify jwt token from auth
export const authToken = (req: Request, res: Response, next: NextFunction): void => {
  //get AUTH layer to put in postman
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  //get token for postman
  if (!token) {
    res.status(401).json({error: 'token missing'});
    return;
  }

  jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
    //try the token using secretKey from .env
    if (err) {
      res.status(403).json({error: 'invalid token!'});
      return;
    }
    (req as any).user = user;
    next();
  });
};

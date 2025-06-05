import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();
//is needed a login route to generate the token!!!
//for that i use username&passwd from db to validate 
router.post('/login', (req, res) => {
  const {username} = req.body;

  if (username) {
    const token = jwt.sign({username}, process.env.JWT_SECRET as string, {expiresIn: '1h'});
    res.json({token});
  } else {
    res.status(400).json({error: 'username is required!' });
  }
});

export default router;

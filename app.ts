import express from 'express';
import cors from 'cors';
import { initializeApp, applicationDefault } from 'firebase-admin/app';

// routes
const auth = require('./routes/auth/auth');

// middlewares 
const authMiddleware = require('./src/auth/auth-middleware');

// helpers

initializeApp({
  credential: applicationDefault()
  // databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
});

const app = express();
const port = 3000;

app.use(cors());


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/auth', authMiddleware, auth);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
const db = require('./models/index.js');

const PORT = 5000;
 
const app = express();

app.use(cors());

app.listen(PORT, () =>
  console.log(`Serving on port ${PORT}!`),
);
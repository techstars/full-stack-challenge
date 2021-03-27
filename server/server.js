import express from 'express';
import cors from 'cors';
import company from './routes/company';
import founder from './routes/founder';
import common from './routes/common';

const PORT = 5000;
 
const app = express();

app.use(cors());
app.use(express.json());

//API Routes
app.use('/company', company);
app.use('/founder', founder);
app.use('/common', common);

app.listen(PORT, () =>
  console.log(`Serving on port ${PORT}!`),
);
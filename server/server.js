const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

// initialize server
const app = express();
const PORT = process.env.PORT || 3001

// middleware
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log('Server listening on port ', PORT);
})
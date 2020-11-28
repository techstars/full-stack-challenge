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

app.get('/companies', (req, res) => {

})

app.post('/companies', (req, res) => {

})

app.put('/companies/:company_id', (req, res) => {

})

app.delete('/companies/:company_id', (req, res) => {

})

app.listen(PORT, () => {
  console.log('Server listening on port ', PORT);
})